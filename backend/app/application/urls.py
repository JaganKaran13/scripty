__authors__ = "Jagan, Dexter"

from django.urls import path, include, re_path
from rest_framework.routers import SimpleRouter

from .views import *


# router = SimpleRouter()
# router.register('applications', application)
# router.register('os', operating_system)
# router.register('command', command)

app_name = 'application'

urlpatterns = [
    path('application', application),
    path('os', operating_system),
    path('command', command),
    path('application/<str:app_name>/os/<str:os_name>/command/<str:cmd_name>', get_full_result)
]
