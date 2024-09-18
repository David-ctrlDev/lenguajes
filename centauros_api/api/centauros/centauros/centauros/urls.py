from django.contrib import admin
from django.urls import path,include
from rest_framework.routers import DefaultRouter
from rest_framework import routers
from credit_card.views import ProspectoView,SolicitudView,EstadosView#ProspectoListView

router = routers.DefaultRouter()
router.register(r'solicitudes', SolicitudView, basename='solicitudes')
router.register(r'estados', EstadosView, basename='estados')
urlpatterns = [
    path("admin/", admin.site.urls),
    path('prospecto/', ProspectoView.as_view(), name='prospecto'),
    path('', include(router.urls)),
    
]