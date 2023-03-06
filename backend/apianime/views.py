import requests
from django.http import JsonResponse


def getTopAiringAnime(request):
    url = 'https://gogoanime.consumet.stream/top-airing'
    response = requests.get(url)
    data = response.json()
    return JsonResponse(data, safe=False)

    
def getRecentReleaseAnime(request):
    url = 'https://gogoanime.consumet.stream/recent-release'
    response = requests.get(url)
    data = response.json()
    return JsonResponse(data, safe=False)

def getPopularAnime(request):
    url = 'https://gogoanime.consumet.stream/popular'
    response = requests.get(url)
    data = response.json()
    return JsonResponse(data, safe=False)

def getAnimeMovies(request):
    url = 'https://gogoanime.consumet.stream/anime-movies'
    response = requests.get(url)
    data = response.json()
    return JsonResponse(data, safe=False)
