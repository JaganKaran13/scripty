from django.db import models

from .manager import ApplicationManager, OperatingSystemManager, CommandManager


class Application(models.Model):
    """Application Models"""
    application_id = models.AutoField(primary_key=True)
    application_name = models.CharField(max_length=30)
    application_dependency = models.CharField(max_length=200, null=True)
    application_type = models.CharField(max_length=30, null=True)

    # def __str__(self):
    #     return self.application_id
    
    objects = ApplicationManager()


class OperatingSystem(models.Model):
    """Operating System Models"""
    os_id = models.AutoField(primary_key=True)
    os_name = models.CharField(max_length=20)

    # def __str__(self):
    #     return self.os_name

    objects = OperatingSystemManager()    

class Command(models.Model):
    """Commands Models"""
    command_id = models.AutoField(primary_key=True)
    related_os = models.ForeignKey(OperatingSystem, on_delete=models.SET_NULL, related_name='operating_system', null=True)
    command_name = models.CharField(max_length=20)
    command = models.CharField(max_length=200, null=True)

    # def __str__(self):
    #     return self.command_name

    objects = CommandManager()
