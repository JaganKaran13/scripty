from rest_framework import serializers
from .models import Application, OperatingSystem


class ApplicationSerializer(serializers.ModelSerializer):
    """Serializer for Application Model"""

    class Meta:
        model = Application
        fields = ('application_id', 'application_name',
                  'application_dependency')
        read_only_fields = ('application_id',)


class OperatingSystemSerializer(serializers.ModelSerializer):
    """Serializer for OperatingSystem Model"""

    class Meta:
        model = OperatingSystem
        fields = ('os_id', 'os_name')
        read_only_fields = ('os_id',)
