const io = require('socket.io-client');
const socket = io.connect('http://127.0.0.1:5000', {
    reconnection: true
});
let response = null;
socket.emit('apiRequest', 'hello');
socket.on('serverResponse', function (data) {
    response = data;
    console.log('Server Response: ', response)
});
