from django.shortcuts import render, get_object_or_404
from .models import Chat,Contact
from login.models import User
def get_last_10_messages(chatId):
    chat = get_object_or_404(Chat, id=chatId)
    return chat.messages.order_by('-timestamp').all()[:10]

def get_user_contact(username):
    user=get_object_or_404(User,username=username)
    contact,created=Contact.objects.get_or_create(user=user)
    return contact

def get_current_chat(chatId):
    # chat,created=Chat.objects.get_or_create(id=chatId)
    # return chat

    return get_object_or_404(Chat,id=chatId)