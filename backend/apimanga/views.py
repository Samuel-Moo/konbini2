from django.shortcuts import render

# Create your views here.

import requests
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.decorators import permission_classes
from rest_framework.decorators import authentication_classes
from django.http import JsonResponse


@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def searchManga(request, queryManga):
    url = f"https://api.consumet.org/manga/mangahere/{queryManga}"
    response = requests.get(url)
    results = response.json()
    return JsonResponse(results, safe=False)

# Same with before
@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def getMangaDetails(request, mangaId):
    url = f"https://api.consumet.org/manga/mangahere/info?id={mangaId}"
    response = requests.get(url)
    results = response.json()
    return JsonResponse(results, safe=False)


# Same with before
@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def getMangaImages(request, chapterId):
    url = f"https://api.consumet.org/manga/mangahere/read?chapterId={chapterId}"
    response = requests.get(url)
    results = response.json()

    return JsonResponse(results, safe=False)
