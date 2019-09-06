import socket

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(('127.0.0.1', 1337))
server.listen(1)

while True:
    (client, addr) = server.accept()
    print(str(client.recv(1024), 'utf8'))
