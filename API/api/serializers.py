from rest_framework import serializers
from .models import Customer, HostelManager, AdminUser, Property, Rating, Room, User, Saved, PropertyImage
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

class PropertyImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyImage
        fields = (
            'id', 'property', 'image'
        )

class PropertySerializer(serializers.ModelSerializer):
    images = PropertyImageSerializer(many=True)
    class Meta:
        model = Property
        fields = (
            'id', 'managerId', 'name', 'description', 'location', 'numberOfRooms', 'type',
            'no_of_ratings', 'avg_rating', 'rate_type', 'headline', 'price', 'images'
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
    properties = PropertySerializer(many=True)
    class Meta:
        model = Saved
        fields = ('id', 'user','properties')
