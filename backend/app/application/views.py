from rest_framework import viewsets
from application.serializers import ApplicationSerializer
from application.models import Application


class ApplicationViewSet(viewsets.ModelViewSet):
    """Manage Application in Database"""
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer

    def get_queryset(self):
        """Return the Application in the database"""
        return self.queryset
