from rest_framework import viewsets
from .serializers import InvestorUserSerializer, StartupUserSerializer
from .models import Investor, Startup
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import UpdateModelMixin

class InvestorViewset(viewsets.ModelViewSet):
    queryset = Investor.objects.all()
    serializer_class = InvestorUserSerializer

class StartupViewset(viewsets.ModelViewSet):
    """
     This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = Startup.objects.all()
    serializer_class = StartupUserSerializer
    
    def partial_update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return self.update(request, *args, **kwargs)
    