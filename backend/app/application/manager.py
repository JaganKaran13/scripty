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
            result = [x for x in application]
        except (Exception, KeyError, ObjectDoesNotExist) as e:
            raise Exception(e)
        else:
            return result

class OperatingSystemManager(models.Manager):
    def add_operating_system(self, data):
        try:
            operating_system = self.create(os_name=data.get('os_name'))
        except (Exception, KeyError, ValueError, DatabaseError) as e:
            raise Exception(e)
        else:
            return {'message': 'SUCCESS'}
    
    def get_operating_system(self, filter):
        try:
            operating_system = self.filter(os_name=filter)
            result = [x for x in operating_system]
        except (Exception, KeyError, ObjectDoesNotExist) as e:
            raise Exception(e)
        else:
            return result

class CommandManager(models.Manager):
    def add_command(self, data):
        try:
            command = self.create(command_name=data.get('command_name'))
        except (Exception, KeyError, ValueError, DatabaseError) as e:
            raise Exception(e)
        else:
            return {'message': 'SUCCESS'}
    
    def get_command(self, filter):
        try:
            command = self.filter(command_name=filter)
            result = [x for x in command]
        except (Exception, KeyError, ObjectDoesNotExist) as e:
            raise Exception(e)
        else:
            return result
