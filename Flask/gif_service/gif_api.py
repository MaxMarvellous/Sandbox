from flask import Flask
from flask_socketio import SocketIO, send, emit
import requests, datetime

service = Flask(__name__)
socketio = SocketIO(service)



@socketio.on('connect')
def connect():
    print('[+]    Client connected', datetime.datetime.utcnow())


@socketio.on('disconnect')
def disconnect():
    print('[x]    Client disconnected', datetime.datetime.utcnow())


def ack(msg):
    print('[<-]    sending data ', msg)


@socketio.on('apiRequest')
def handle_api_request(message):
    api = requests.get('https://api.giphy.com/v1/gifs/random?api_key=MljNOCjqN4L0t1kI7PZzrqRbdcDRAQ9w&tag=' +
                       message + '&rating=R').json().get('data').get('url')  # get("data").get('image_original_url')
    print('[->]   Client message: ', message)
    emit('apiResponse', api)
    print('[<-]   sending data ', api)


@socketio.on('testEmit')
def handle_emit(test):
    print(test)
    emit('emitResponse', test)


if __name__ == '__main__':
    socketio.run(service)
