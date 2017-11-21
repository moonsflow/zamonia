from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^book/(?P<book_id>[0-9]+)/$', views.book, name="book"),
    url(r'^note/(?P<note_id>[0-9]+)/$', views.note, name="note"),
    url(r'^notes$', views.notes, name="notes"),
]