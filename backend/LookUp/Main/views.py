from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.authtoken.models import Token
from .serializers import UserSerializer

from .models import Post, PostUser, Comment

@api_view(['POST'])
def signup(request):
	serializer = UserSerializer(data=request.data)
	if serializer.is_valid():
		serializer.save()
		user = User.objects.get(username=request.data['username'])
		user.set_password(request.data['password'])
		user.save()
		token = Token.objects.create(user=user)
		return Response({'token': token.key, 'user': serializer.data})
	print(serializer.errors['username'])
	return Response(serializer.errors, status=status.HTTP_200_OK)

@api_view(['POST'])
def login(request):
	user = get_object_or_404(User, username=request.data['username'])
	if not user.check_password(request.data['password']):
		return Response("missing user", status=status.HTTP_404_NOT_FOUND)
	token, created = Token.objects.get_or_create(user=user)
	serializer = UserSerializer(user)
	return Response({'token': token.key, 'user': serializer.data})

@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def test_token(request):
	return Response({'message': 'Token is valid'}, status=status.HTTP_200_OK)

@api_view(['POST'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def post_msg(request):
	if request.method == 'POST':
		content = request.data.get('content')
		if not content:
			return Response({'error': 'Content is required'}, status=status.HTTP_400_BAD_REQUEST)
		
		post = Post.objects.create(content=content)
		post_user = PostUser.objects.create(post=post, user=request.user)
		post.save()
		post_user.save()
		return Response({'message': 'Post created successfully', 'post_id': post.id}, status=status.HTTP_201_CREATED)
	
	return Response({'error': 'Invalid request method'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)