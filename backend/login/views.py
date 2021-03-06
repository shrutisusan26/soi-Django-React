from rest_framework import viewsets
from .serializers import InvestorUserSerializer
from .models import Investor


class InvestorViewset(viewsets.ModelViewSet):
    queryset = Investor.objects.all()
    serializer_class = InvestorUserSerializer