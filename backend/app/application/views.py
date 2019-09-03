from rest_framework import viewsets
from application.serializers import ApplicationSerializer, OperatingSystemSerializer
from application.models import Application, OperatingSystem


class ApplicationViewSet(viewsets.ModelViewSet):
    """Manage Application in Database"""
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer

    def get_queryset(self):
        """Return the Application in the database"""
        return self.queryset

class OperatingSystemViewSet(viewsets.ModelViewSet):
    """Manage OperatingSystem in Database"""
    queryset = OperatingSystem.objects.all()
    serializer_class = OperatingSystemSerializer

    def get_queryset(self):
        """Return the OperatingSystem in the database"""
        return self.queryset
