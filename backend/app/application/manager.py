__author__ = "Dexter"
# django imports
from django.db import models
from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned
from django.db import DatabaseError, transaction, IntegrityError
from django.db.models import Q

class ApplicationManager(models.Manager):
    def add_application(self, data):
        try:
            application = self.create(application_name=data.get('application_name'),
                                        application_dependency=data.get('application_dependency'),
                                        application_type=data.get('application_type'))
        except (Exception, KeyError, ValueError, DatabaseError) as e:
            raise Exception(e)
        else:
            return {'message': 'SUCCESS'}
    
    def get_application(self, filter):
        try:
            application = self.filter(application_name=filter)
            result = list()
            for item in application:
                data = dict(application_id=item.application_id, application_name=item.application_name,
                            application_dependency=item.application_dependency, application_type=item.application_type)
                result.append(data)
        except (Exception, KeyError, ObjectDoesNotExist) as e:
            raise Exception(e)
        else:
            return result

class OperatingSystemManager(models.Manager):
    def add_operating_system(self, data):
        try:
            operating_system = self.create(os_name=data.get('os_name'), super_user=data.get('super_user'))
        except (Exception, KeyError, ValueError, DatabaseError) as e:
            raise Exception(e)
        else:
            return {'message': 'SUCCESS'}
    
    def get_operating_system(self, filter):
        try:
            operating_system = self.filter(os_name=filter)
            result = list()
            for item in operating_system:
                data = dict(os_id=item.os_id, os_name=item.os_name, super_user=item.super_user)
                result.append(data)
        except (Exception, KeyError, ObjectDoesNotExist) as e:
            raise Exception(e)
        else:
            return result

class CommandManager(models.Manager):
    def add_command(self, data):
        try:
            command = self.create(command_name=data.get('command_name'), related_os_id=data.get('related_os_id'), command=data.get('command'))
        except (Exception, KeyError, ValueError, DatabaseError) as e:
            raise Exception(e)
        else:
            return {'message': 'SUCCESS'}
    
    def get_command(self, filter):
        try:
            command = self.filter(command_name=filter).exclude(related_os=None)
            result = list()
            for item in command:
                data = dict(command_id=item.command_id, related_os=(item.related_os.os_name or ""), command_name=item.command_name, command=item.command)
                result.append(data)
        except (Exception, KeyError, ObjectDoesNotExist) as e:
            raise Exception(e)
        else:
            return result
