const http = require('http');
const url = require('url');
const hbs = require('handlebars');

const data = {
    characters: [],
    templates: {}
}

data.templates.home = hbs.compile(
    `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Startseite - UE2</title>
          {{> style}}
      </head>
      <body>
          <h1>Übung 2 | Startseite</h1>
          {{> navigation}}
          <p>&copy; {{name}}</p>
      </body>
      </html>`);


const server = http.createServer(function (req, res) {
    const urlObj = url.parse(req.url, true);

    if (urlObj.pathname === '/') {
        res.write('Hello World, from the server');
        res.end();
    } else {
        res.statusCode = 404;
        res.write('404 not found');
        res.end();
    }
});




server.listen(3000);
