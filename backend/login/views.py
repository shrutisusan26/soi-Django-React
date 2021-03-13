from rest_framework import viewsets
from .serializers import InvestorUserSerializer, StartupUserSerializer
from .models import Investor, Startup
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import UpdateModelMixin
from rest_framework.response import Response

class InvestorViewset(viewsets.ModelViewSet):
    queryset = Investor.objects.all()
    serializer_class = InvestorUserSerializer

class StartupViewset(viewsets.ModelViewSet,UpdateModelMixin):
    """
     This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = Startup.objects.all()
    serializer_class = StartupUserSerializer
    
    def partial_update(self, request, *args, **kwargs):
        kwargs['partial'] = True
        return self.update(request, *args, **kwargs)
    
    # def update(self, request, *args, **kwargs):
    #     partial = kwargs.pop('partial', False)
    #     instance = self.get_object()
    #     serializer = self.get_serializer(instance, data=request.data, partial=partial)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_update(serializer)
    #     return Response(serializer.data)
    