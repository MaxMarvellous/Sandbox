import socket
import requests

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(('127.0.0.1', 1337))
server.listen(1)

while True:
    (client_socket, addr) = server.accept()
    msg = client_socket.recv(1024)
    api = requests.get('https://api.giphy.com/v1/gifs/random?api_key=MljNOCjqN4L0t1kI7PZzrqRbdcDRAQ9w&tag=' +
                       str(msg, 'utf8') + '&rating=R').json().get("data").get('image_original_url')

    print("Server: " + str(api))
    client_socket.send(bytes(api, 'utf8'))

