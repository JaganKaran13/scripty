from rest_framework import serializers
from .models import Application


class ApplicationSerializer(serializers.ModelSerializer):
    """Serializer for Application Model"""

    class Meta:
        model = Application
        fields = ('application_id', 'application_name',
                  'application_dependency')
        read_only_fields = ('application_id',)
