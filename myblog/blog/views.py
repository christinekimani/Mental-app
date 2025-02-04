
from django.shortcuts import render
from .models import BlogArticle

def blog_page(request):
    articles = BlogArticle.objects.all()
    return render(request, 'blog/blog_page.html', {'articles': articles})
