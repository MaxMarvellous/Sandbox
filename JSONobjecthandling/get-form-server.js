const http = require('http');

const server = http.createServer(function(req, res) {
  res.write(`
    <html>
      <head></head>
      <body>
        <form action="/get-characters.js" method="get">
          <input type="text" name="characterName"/>
          <button type="submit">Suche!</button>
        </form>
      </body>
    </html>`);
  res.end();
});

server.listen(3000);
