const io = require('socket.io-client');
const socket = io.connect('http://192.168.178.29:1337', {
    reconnection: true
});
let response = null;
socket.emit('apiRequest', 'hello');
socket.on('serverResponse', function (data) {
    response = data;
    console.log('Server Response: ', response)
});
