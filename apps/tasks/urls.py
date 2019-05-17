from django.urls import path
from apps.tasks.api.views import TaskAPIView, TaskDelete

urlpatterns = [
    path('list/', TaskAPIView.as_view()),
    path('<int:pk>/', TaskDelete.as_view())
]
