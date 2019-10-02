from django.urls import path, include
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
    path('command', command)
]
