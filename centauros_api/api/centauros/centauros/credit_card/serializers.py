# serializers.py
from rest_framework import serializers
from .models import Prospecto,Solicitud,Status

class ProspectoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prospecto
        fields = '__all__'

class SolicitudSerializer(serializers.ModelSerializer):
    class Meta:
        model = Solicitud
        fields = '__all__'

class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = '__all__'

