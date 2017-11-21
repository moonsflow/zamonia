from django.db import models
from taggit.managers import TaggableManager

class Tag(models.Model):
    word = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100)


class Book(models.Model):
    book_title = models.CharField(max_length=200)
    book_author = models.CharField(max_length=100, blank=True)
    isbn13 = models.CharField(max_length=13, blank=True)
    cover_url = models.CharField(max_length=100, blank=True)
    pub_date = models.DateTimeField('date published')
    tags = TaggableManager()

    def __str__(self):
        return self.book_title


class Note(models.Model):
    note_text = models.TextField()
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    book_page = models.IntegerField(default=0)
    pub_date = models.DateTimeField('date published')

    def __str__(self):
        return self.note_text

