from django.shortcuts import render
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet
from .permission import IsAdminUser, IsLoggedInUserOrAdmin, IsHostelManager, IsCustomer, IsAll
from .models import HostelManager, Rating, Customer, AdminUser, Room, Property, User
from rest_framework import viewsets, status
from .serializers import CustomerSerializer, RatingSerializer, UserSerializer, AdminSerializer, HostelManagerSerializer, RoomSerializer, PropertySerializer
from rest_framework.authentication import TokenAuthentication
from django.db.models import Q


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


class LoginView(ViewSet):
    serializer_class = AuthTokenSerializer

    def create(self, request):
        return ObtainAuthToken().post(request)


class LogoutView(APIView):
    def get(self, request, format=None):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)


class PropertyViewSet(viewsets.ModelViewSet):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    authentication_classes = (TokenAuthentication,)

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            permission_classes = [IsAdminUser]
        elif self.action == 'list':
            permission_classes = [IsAll]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsLoggedInUserOrAdmin]
        elif self.action == 'destroy':
            permission_classes = [IsLoggedInUserOrAdmin]
        return [permission() for permission in permission_classes]

    @action(detail=True, methods=['POST'])
    def create_property(self, request, pk=None):
        user = request.user
        if HostelManager.objects.filter(user=request.user).exists():
            manager = HostelManager.objects.get(user=request.user)
            description = request.data['description']
            location = request.data['location']
            numberOfRooms = request.data['numberOfRooms']
            type = request.data['type']
            pictureLocation = request.data['pictureLocation']
            name = request.data['name']
            property = Property.objects.create(managerId=manager, description=description, location=location, numberOfRooms=numberOfRooms, type=type, pictureLocation=pictureLocation, name=name)
            serializer = PropertySerializer(property)
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
                property = Property.objects.get(id=pk)
                roomNo = request.data['roomNo']
                roomType = request.data['roomType']
                roomAvailable = request.data['roomAvailable']
                room = Room.objects.create(roomNo=roomNo, roomAvailable=roomAvailable, roomType=roomType, property=property)
                serializer = RoomSerializer(room)
                response = {'message': serializer.data}
                return Response(response, status=status.HTTP_200_OK)
            else:
                return {'message': 'You can ony post rooms for your hostel'}
        else:
            return {'message': 'You are not a hostel manager'}

    @action(detail=True, methods=['GET'])
    def getPropertyRating(self, request, pk=None):
        user_property = Property.objects.get(id=pk)
        rating = Rating.objects.filter(property=user_property)
        serializer = RatingSerializer(rating, many=True)
        response = {'message': 'Ratings For this property', 'result': [serializer.data]}
        return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=['POST'])
    def rate_property(self, request, pk=None):
        self.permission_classes = [IsAll]
        if 'stars' in request.data:
            property = Property.objects.get(id=pk)
            stars = request.data['stars']
            user = request.user
            # user = User.objects.get(id=1)

            try:
                rating = Rating.objects.get(user=user.id, stars=stars, property=property.id)
                rating.stars = stars
                rating.save()
                serializer = RatingSerializer(rating, many=False)
                response = {'message': 'Rating updated', 'result': serializer.data}
                return Response(response, status=status.HTTP_200_OK)
            except:
                rating = Rating.objects.create(user=user, stars=stars, property=property)
                serializer = RatingSerializer(rating, many=False)
                response = {'message': 'Rating created', 'result': serializer.data}
                return Response(response, status=status.HTTP_200_OK)

        else:
            response = {'message': 'you need to provide stars'}
            return Response(response, status=status.HTTP_200_OK)

    @action(detail=True, methods=['POST'])
    def search_property(self, request, pk=None):
        self.permission_classes = [IsAll]
        hm = HostelManager.objects.filter(status=False)
        if 'location' in request.data:

            property = Property.objects.filter(Q(location=request.data['location']))
            serializer = PropertySerializer(property, many=True)
            response = {'message': 'Rating created', 'result': serializer.data}
            return Response(response, status=status.HTTP_200_OK)
        elif 'name' in request.data:
            property = Property.objects.filter(Q(name=request.data['name']) )
            serializer = PropertySerializer(property, many=True)
            response = {'message': 'Rating created', 'result': serializer.data}
            return Response(response, status=status.HTTP_200_OK)

        else:
            response = {'message': 'you need to provide stars'}
            return Response(response, status=status.HTTP_200_OK)


class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)


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
        elif self.action in ('make_hostelManager'):
            permission_classes = [IsHostelManager]
        elif self.action == 'destroy':
            permission_classes = [IsLoggedInUserOrAdmin]
        return [permission() for permission in permission_classes]

    @action(detail=True, methods=['POST'])
    def create_hostelManager(self, request, pk=None):
        self.permission_classes = [IsHostelManager, IsAdminUser]
        if HostelManager.objects.filter(user=request.user).exists():
            response = {'message': 'Username already exist'}
            return Response(response, status=status.HTTP_200_OK)
        contact = request.data['contact']
        subscriptiontype = request.data['subscriptionType']
        user = request.user
        hostelManager = HostelManager.objects.create(contact=contact, subscriptionType=subscriptiontype, user=user)
        serializer = HostelManagerSerializer(hostelManager, many=False)
        response = {'message': 'Manager created', 'result': serializer.data}
        return Response(response, status=status.HTTP_200_OK)
