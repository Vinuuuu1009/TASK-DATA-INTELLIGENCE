from django.urls import path
from .views import chart_data

urlpatterns = [
    path('api/chart-data/', chart_data, name='chart-data'),
]

