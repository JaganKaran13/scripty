__author__ = "Jagan"

from django.db import models

from .manager import ApplicationManager, OperatingSystemManager, CommandManager


class Application(models.Model):
    """Application Models"""
    application_id = models.AutoField(primary_key=True)
    application_name = models.CharField(max_length=30)
    application_dependency = models.CharField(max_length=200, null=True)
    application_type = models.CharField(max_length=30, null=True)

    def __str__(self):
        return '{}:{}:{}:{}'.format(self.application_id, self.application_name, self.application_dependency, self.application_type)
    
    class Meta:
        unique_together = ('application_name', 'application_dependency', 'application_type')
    
    objects = ApplicationManager()


class OperatingSystem(models.Model):
    """Operating System Models"""
    os_id = models.AutoField(primary_key=True)
    os_name = models.CharField(max_length=20)
    super_user = models.CharField(max_length=20, null=True)

    def __str__(self):
        return '{}:{}'.format(self.os_id, self.os_name)
    
    class Meta:
        unique_together = ('os_name', 'os_id')

    objects = OperatingSystemManager()    

class Command(models.Model):
    """Commands Models"""
    command_id = models.AutoField(primary_key=True)
    related_os = models.ForeignKey(OperatingSystem, on_delete=models.SET_NULL, related_name='operating_system', null=True)
    command_name = models.CharField(max_length=20)
    command = models.CharField(max_length=200, null=True)

    def __str__(self):
        return '{}:{}:{}:{}'.format(self.command_id, self.related_os, self.command_name, self.command)
    
    class Meta:
        unique_together = ('command_name', 'related_os')

    objects = CommandManager()
