from django.contrib import admin
from .models import Solicitud,Status

class SolicitudAdmin(admin.ModelAdmin):
     list_display = [field.name for field in Solicitud._meta.get_fields() if not field.many_to_many and not field.one_to_many]

class EstadosAdmin(admin.ModelAdmin):
     list_display = [field.name for field in Status._meta.get_fields() if not field.many_to_many and not field.one_to_many]


admin.site.register(Solicitud, SolicitudAdmin)
admin.site.register(Status, EstadosAdmin)