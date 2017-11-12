#!/usr/bin/python3

from gi.repository import Notify
Notify.init("App Name")

# import logging
# logging.getLogger('requests').setLevel(logging.WARNING)
# logging.basicConfig(level=logging.DEBUG)

from socketIO_client import SocketIO, LoggingNamespace

def finger(data):
    notif = data['fingerer']
    notif += " fingered "
    notif += data['fingeree']
    notif += "!"
    Notify.Notification.new(notif).show()

def orgasm(data):
    notif = data['fingerer']
    notif += " just made "
    notif += data['fingeree']
    notif += " orgasm!"
    Notify.Notification.new(notif).show()

# socketIO = SocketIO('localhost', 49154, LoggingNamespace)
socketIO = SocketIO('localhost', 49154)
socketIO.on('finger', finger)
socketIO.on('orgasm', orgasm)
socketIO.wait()
