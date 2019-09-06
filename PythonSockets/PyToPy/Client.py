import socket

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_addr = ('127.0.0.1', 1337)

client.connect(server_addr)
client.send(bytes("Win", 'utf8'))
