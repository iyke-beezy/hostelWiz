from rest_framework import serializers
from .models import Customer, HostelManager, AdminUser, Property, Rating, Room, User, Saved
from rest_framework.authtoken.models import Token


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'first_name', 'last_name', 'username', 'password', 'groups', 'email', 'contact', 'profile')
        model = User
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create(**validated_data)
        user.set_password(validated_data['password'])
        user.is_staff = True
        user.save()

        return user


class HostelManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = HostelManager
        fields = ('id', 'subscriptionType', 'status', 'startDate', 'user')


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('id', 'user')


class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminUser
        fields = ('id', 'user')


class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = (
            'id', 'managerId', 'description', 'location', 'numberOfRooms', 'type', 'pictureLocation',
            'pictureLocation1', 'pictureLocation2', 'pictureLocation3', 'pictureLocation4', 'pictureLocation5', 'pictureLocation6', 'pictureLocation7', 'pictureLocation8', 'pictureLocation9', 'pictureLocation10', 'name'

        )


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ('id', 'stars', 'user', 'property')


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'property', 'roomNo', 'roomType', 'roomAvailable')


class SavedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Saved
        fields = ('id', 'user', 'property')
