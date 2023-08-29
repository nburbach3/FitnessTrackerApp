from django.http import JsonResponse, HttpResponse
from django.shortcuts import render

def items_list(request):
    return JsonResponse("test", safe=False)

def index(request):
    rendered_html = render(request, 'index.html')  # Render index.html
    return HttpResponse(rendered_html)