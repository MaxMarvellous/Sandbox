const fetch = require('node-fetch');
const io = require('socket.io').listen(5000);

let req = null;

io.on('connection', (socket) => {
    console.log('[+]    Client connected ', socket.client.id);
    socket.on('apiRequest', (tag) => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=MljNOCjqN4L0t1kI7PZzrqRbdcDRAQ9w&tag=${tag}&rating=R`;
        fetch(url)
            .then(res => res.json())
            .then(json => {
                socket.emit('apiResponse', json.data.image_original_url)
            });
    });
    console.log('[<-]   message sent');
    socket.on('disconnect', () => {
        console.log('[-]    Client disconnected')
    });
});