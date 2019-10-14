__author__ = "Dexter"

from django.db import models
from django.core.exceptions import ObjectDoesNotExist, MultipleObjectsReturned
from django.db import DatabaseError, transaction, IntegrityError
from django.db.models import Q

from .models import Application, OperatingSystem, Command

def get_result(app_name, os_name, cmd_name):
    try:
        application = Application.objects.get(application_name=app_name)
        os = OperatingSystem.objects.get(os_name=os_name)
        cmd = Command.objects.get(related_os=os, command_name=cmd_name)
        final_command_super = os.super_user + ' ' + cmd.command + ' ' + application.application_name
        final_command = cmd.command + ' ' + application.application_name
        return {"command_super": final_command_super, "command": final_command}
    except (Exception, KeyError, ValueError, DatabaseError) as e:
        raise Exception(e)