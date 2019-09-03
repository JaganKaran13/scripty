from django.urls import path, include
from rest_framework.routers import SimpleRouter

from application import views


router = SimpleRouter()
router.register('applications', views.ApplicationViewSet)
router.register('os',views.OperatingSystemViewSet)
router.register('command',views.CommandViewSet)

app_name = 'application'

urlpatterns = [
    path('', include(router.urls))
]
