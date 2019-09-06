from flask import Flask
from flask_socketio import SocketIO, emit
import requests

service = Flask(__name__)
socketio = SocketIO(service)


@socketio.on('apiRequest')
def handle_message(message):
    api = requests.get('https://api.giphy.com/v1/gifs/random?api_key=MljNOCjqN4L0t1kI7PZzrqRbdcDRAQ9w&tag=' +
                       message + '&rating=R').json().get("data").get('image_original_url')
    print('Client message: ', message)
    print('Api Data: ', api)
    emit('serverResponse', {'response': 'my response'})


if __name__ == '__main__':
    socketio.run(service, debug=True)
