__authors__ = "Jagan, Dexter"

from rest_framework import viewsets
from application.serializers import ApplicationSerializer, OperatingSystemSerializer, CommandSerializer
from .models import Application, OperatingSystem, Command
from rest_framework.decorators import api_view
from django.http import HttpResponseBadRequest, HttpResponseServerError, JsonResponse
from .utils import get_result
import json


@api_view(['GET', 'POST'])
def application(request):
    try:
        if request.method == 'GET':
            filter_option = request.GET.get('filter')
            result = Application.objects.get_application(filter_option)
            return JsonResponse(result, safe=False)
        elif request.method == 'POST':
            input_data = json.loads(request.body.decode())
            result = Application.objects.add_application(input_data)
            return JsonResponse(result, safe=False)
    except Exception as e:
        return HttpResponseServerError(e, content_type='application/json')


@api_view(['GET', 'POST'])
def operating_system(request):
    try:
        if request.method == 'GET':
            filter_option = request.GET.get('filter')
            result = OperatingSystem.objects.get_operating_system(filter_option)
            return JsonResponse(result, safe=False)
        elif request.method == 'POST':
            input_data = json.loads(request.body.decode())
            result = OperatingSystem.objects.add_operating_system(input_data)
            return JsonResponse(result, safe=False)
    except Exception as e:
        return HttpResponseServerError(e, content_type='application/json')


@api_view(['GET', 'POST'])
def command(request):
    try:
        if request.method == 'GET':
            filter_option = request.GET.get('filter')
            result = Command.objects.get_command(filter_option)
            return JsonResponse(result, safe=False)
        elif request.method == 'POST':
            input_data = json.loads(request.body.decode())
            result = Command.objects.add_command(input_data)
            return JsonResponse(result, safe=False)
    except Exception as e:
        return HttpResponseServerError(e, content_type='application/json')

@api_view(['GET'])
def get_full_result(request, app_name, os_name, cmd_name):
    try:
        if request.method == 'GET':
            result = get_result(app_name, os_name, cmd_name)
            return JsonResponse(result, safe=False)
        else:
            raise Exception('Unauthorized request')
    except Exception as e:
        return HttpResponseServerError(e, content_type='application/json')