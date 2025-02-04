from django.db import models

class BlogArticle(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=100)
    date = models.DateField()
    image = models.ImageField(upload_to='blog_images/')
    content = models.TextField()

    def __str__(self):
        return self.title
