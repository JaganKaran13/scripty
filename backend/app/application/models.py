from django.db import models


class Application(models.Model):
    """Application Models"""
    application_id = models.AutoField(primary_key=True)
    application_name = models.CharField(max_length=30)
    application_dependency = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.application_id


class OperatingSystem(models.Model):
    """Operating System Models"""
    os_id = models.AutoField(primary_key=True)
    os_name = models.CharField(max_length=20)

    def __str__(self):
        return self.os_name
