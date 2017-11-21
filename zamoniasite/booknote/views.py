from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect

from .models import Book, Note


def index(request):
    books = Book.objects.order_by('-pub_date')[:5]
    return render(request, 'booknote/index.html', {'books': books})


def book(request, book_id):
    book = get_object_or_404(Book, pk = book_id)
    return render(request, 'booknote/book.html', {'book': book})


def note(request, note_id):
    note = get_object_or_404(Note, pk = note_id)
    return render(request, 'booknote/note.html', {'note': note})


def notes(request):
    notes = Note.objects.all()
    return render(request, 'booknote/notes.html', {'notes': notes})
