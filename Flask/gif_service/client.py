import socketio


sio = socketio.Client()


@sio.event
def message(data):
    msg = data
    print("I've received a message! ", msg)


@sio.event
def connect():
    print("I'm connected")


@sio.on('apiResponse')
def api_response(data):
    print(data)
    print(data.get('response'))


@sio.on('disconnect')
def disconnect():
    print('[x]  disconnected from the server')


sio.connect('http://127.0.0.1:5000', )
sio.emit('apiRequest', 'python')
sio.sleep(1)
sio.disconnect()
