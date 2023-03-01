from rest_framework import permissions
from rest_framework import views, generics, status, permissions
from rest_framework.response import Response
from django.contrib.auth import login, logout
from django.contrib.auth.models import User
from . import serializers
from rest_framework.decorators import api_view
from rest_framework.decorators import permission_classes
from rest_framework.decorators import authentication_classes

class LoginView(views.APIView):
    # This view should be accessible also for unauthenticated users.
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        serializer = serializers.LoginSerializer(data=self.request.data, context={ 'request': self.request })
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return Response(None, status=status.HTTP_202_ACCEPTED)
    
    
class ProfileView(generics.RetrieveAPIView):
    serializer_class = serializers.UserSerializer
    
    def get_object(self):
        return self.request.user
    
    
class LogoutView(views.APIView):
    
    def post(request):
        logout(request)
        return Response(None, status=status.HTTP_204_NO_CONTENT)
    

@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def register_user(request):
    # Get the user's information from the POST request payload
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')

    # Check if the username already exists
    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)

    # Create a new User object with the given username, password, and email
    user = User(username=username, email=email)
    user.set_password(password)
    user.save()

    # Return a success response with the newly created user's ID
    return Response({'user_id': user.id}, status=status.HTTP_201_CREATED)

    
    
