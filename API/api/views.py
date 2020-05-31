from django.shortcuts import render
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet
from .permission import IsAdminUser, IsLoggedInUserOrAdmin, IsHostelManager, IsCustomer, IsAll
from .models import HostelManager, Rating, Customer, AdminUser, Room, Property, User, Saved, PropertyImage
from rest_framework import viewsets, status
from .serializers import CustomerSerializer, RatingSerializer, UserSerializer, AdminSerializer, HostelManagerSerializer, \
    RoomSerializer, PropertySerializer, SavedSerializer, PropertyImageSerializer
from rest_framework.authentication import TokenAuthentication
from django.db.models import Q
from rest_framework.parsers import MultiPartParser, FormParser


# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [TokenAuthentication]

    def get_permissions(self):
        permission_classes = []
        if self.action == 'list':
            permission_classes = [IsAdminUser]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsLoggedInUserOrAdmin]
        elif self.action == 'destroy':
            permission_classes = [IsLoggedInUserOrAdmin]
        return [permission() for permission in permission_classes]

    @action(detail=False, methods=['GET'])
    def get_user(self, request, pk=None):
        user = request.user
        user = UserSerializer(user)
        response = {'user': user.data}
        return Response(response, status=status.HTTP_200_OK)


class LoginView(ViewSet):
    serializer_class = AuthTokenSerializer

    def create(self, request):
        token = ObtainAuthToken().post(request)
        return token


class LogoutView(APIView):
    def get(self, request, format=None):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)


class PropertyViewSet(viewsets.ModelViewSet):
    #parser_classes = (MultiPartParser, FormParser)
    hostelProperties = Property.objects.all()
    serializer_class = PropertySerializer
    queryset = hostelProperties

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            authentication_classes = [TokenAuthentication]
            permission_classes = [IsAdminUser]
        elif self.action == 'list':
            permission_classes = [AllowAny]
        elif self.action == 'retrieve':
            permission_classes = [AllowAny]
        elif self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsLoggedInUserOrAdmin]
            authentication_classes = [TokenAuthentication]
        elif self.action == 'destroy':
            permission_classes = [IsLoggedInUserOrAdmin]
            authentication_classes = [TokenAuthentication]
        return [permission() for permission in permission_classes]

    @action(detail=False, methods=['POST'])
    def is_manager(self, request, pk=None):
        user = request.user
        if HostelManager.objects.filter(user=request.user).exists():
            manager = HostelManager.objects.get(user=request.user)
            serializer = HostelManagerSerializer
            response = {'message': serializer.data}
            return Response(response, status=status.HTTP_200_OK)
        else:
            response = {'message': 'You are not a hostel manager'}
            return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=['POST'])
    def create_room(self, request, pk=None):
        user = request.user
        if HostelManager.objects.filter(user=request.user).exists():
            manager = HostelManager.objects.get(user=request.user)
            if Property.objects.filter(managerId=manager).exists():
                my_property = Property.objects.get(id=pk)
                room_no = request.data['roomNo']
                room_type = request.data['roomType']
                room_available = request.data['roomAvailable']
                room = Room.objects.create(property=my_property, roomNo=room_no, roomType=room_type,
                                           roomAvailable=room_available)
                serializer = RoomSerializer(room)
                response = {'message': serializer.data}
                return Response(response, status=status.HTTP_200_OK)
            else:
                return {'message': 'You can ony post rooms for your hostel'}
        else:
            return {'message': 'You are not a hostel manager'}

    @action(detail=True, methods=['GET'])
    def get_property_rating(self, request, pk=None):
        user_property = Property.objects.get(id=pk)
        rating = Rating.objects.filter(property=user_property)
        serializer = RatingSerializer(rating, many=True)
        response = {'message': 'Ratings For this property', 'result': [serializer.data]}
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=['POST'])
    def save_property(self, request, pk=None):
        self.permission_classes = [IsAll]
        my_property = Property.objects.get(id=pk)
        user = request.user
        # user = User.objects.get(id=1)

        try:
            saved = Saved.objects.get(user=user.id, property=my_property.id)
            saved.save()
            serializer = SavedSerializer(saved, many=False)
            response = {'message': 'Succesfully saved', 'result': serializer.data}
            return Response(response, status=status.HTTP_200_OK)
        except:
            saved = Saved.objects.create(user=user, property=my_property)
            serializer = SavedSerializer(saved, many=False)
            response = {'message': 'Saved ', 'result': serializer.data}
            return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=['POST'])
    def rate_property(self, request, pk=None):
        self.permission_classes = [IsAll]
        if 'stars' in request.data:
            my_property = Property.objects.get(id=pk)
            stars = request.data['stars']
            user = request.user
            # user = User.objects.get(id=1)

            try:
                rating = Rating.objects.get(user=user.id, stars=stars, property=my_property.id)
                rating.stars = stars
                rating.save()
                serializer = RatingSerializer(rating, many=False)
                response = {'message': 'Rating updated', 'result': serializer.data}
                return Response(response, status=status.HTTP_200_OK)
            except:
                rating = Rating.objects.create(user=user, stars=stars, property=my_property)
                serializer = RatingSerializer(rating, many=False)
                response = {'message': 'Rating created', 'result': serializer.data}
                return Response(response, status=status.HTTP_200_OK)

        else:
            response = {'message': 'you need to provide stars'}
            return Response(response, status=status.HTTP_200_OK)

    @action(detail=False, methods=['POST'])
    def search_property(self, request, pk=None):
        self.permission_classes = [IsAll]
        # hm = HostelManager.objects.filter(status=False)
        if 'location' in request.data:

            my_property = Property.objects.filter(
                (Q(location__contains=request.data['location'])) |
                (Q(name__contains=request.data['location'])))
            serializer = PropertySerializer(my_property, many=True)
            response = {'message': 'Property Found', 'result': serializer.data}
            return Response(response, status=status.HTTP_200_OK)
        else:
            response = {'message': 'you need to provide stars'}
            return Response(response, status=status.HTTP_200_OK)


class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)


class SavingViewSet(viewsets.ModelViewSet):
    queryset = Saved.objects.all()
    serializer_class = SavedSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    @action(detail=False, methods=['POST'])
    def get_saved(self, request, pk=None):
        self.permission_classes = [IsAll]
        user = request.user
        saved = Saved.objects.filter(user=user.id)
        saved = saved.select_related('property')
        serializer = SavedSerializer(saved, many=True)
        response = {'message': 'Your saved hostels', 'result': serializer.data}
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=['POST'])
    def remove_saved(self, request, pk=None):
        self.permission_classes = [IsAll]
        user = request.user
        saved = Saved.objects.filter(Q(user=user.id) & Q(id=pk))
        saved.delete()
        response = {'message': 'Your saved hostels was removed', 'result': 'deleted'}
        return Response(response, status=status.HTTP_200_OK)


class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)


class AdminViewSet(viewsets.ModelViewSet):
    queryset = AdminUser.objects.all()
    serializer_class = AdminSerializer
    authentication_classes = (TokenAuthentication,)

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            permission_classes = [IsAdminUser]
        elif self.action == 'list':
            permission_classes = [IsAdminUser]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsLoggedInUserOrAdmin]
        elif self.action == 'destroy':
            permission_classes = [IsLoggedInUserOrAdmin]
        return [permission() for permission in permission_classes]


class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    authentication_classes = (TokenAuthentication,)

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            permission_classes = [IsAdminUser]
        elif self.action == 'list':
            permission_classes = [IsAdminUser]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsLoggedInUserOrAdmin]
        elif self.action == 'destroy':
            permission_classes = [IsLoggedInUserOrAdmin]
        return [permission() for permission in permission_classes]

    # adding user customer to customer table,.ie. last step in registration for customer
    @action(detail=True, methods=['POST'])
    def create_customer(self, request, pk=None):
        self.permission_classes = [IsCustomer]
        if Customer.objects.filter(user=request.user).exists():
            response = {'message': 'Customer already exist'}
            return Response(response, status=status.HTTP_200_OK)
        user = request.user
        customer = Customer.objects.create(user=user)
        serializer = CustomerSerializer(customer, many=False)
        response = {'message': 'Customer created', 'result': serializer.data}
        return Response(response, status=status.HTTP_200_OK)


class HostelManagerViewSet(viewsets.ModelViewSet):
    queryset = HostelManager.objects.all()
    serializer_class = HostelManagerSerializer
    authentication_classes = (TokenAuthentication,)

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            return "Post not allowed"
        elif self.action == 'list':
            permission_classes = [IsAdminUser]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsHostelManager, IsAdminUser]
        elif self.action == 'destroy':
            permission_classes = [IsLoggedInUserOrAdmin]
        return [permission() for permission in permission_classes]

    # Only hostel Manager can choose subsription Type,.ie. last step in registration for hostel manager
    @action(detail=False, methods=['POST'])
    def create_hostel_manager(self, request, pk=None):
        self.permission_classes = [IsHostelManager, IsAdminUser]
        if HostelManager.objects.filter(user=request.user).exists():
            response = {'message': 'Username already exist'}
            return Response(response, status=status.HTTP_200_OK)
        subscription_type = request.data['subscriptionType']
        user = request.user
        hostel_manager = HostelManager.objects.create(subscriptionType=subscription_type, user=user)
        serializer = HostelManagerSerializer(hostel_manager, many=False)
        response = {'message': 'Manager created', 'result': serializer.data}
        return Response(response, status=status.HTTP_200_OK)


class PropertyImageViewSet(viewsets.ModelViewSet):
    queryset = PropertyImage.objects.all()
    serializer_class = PropertyImageSerializer
    # authentication_classes = (TokenAuthentication,)
    permission_classes = (AllowAny,)
