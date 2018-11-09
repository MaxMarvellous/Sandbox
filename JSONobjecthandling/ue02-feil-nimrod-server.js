const http = require('http');
const url = require('url');
const hbs = require('handlebars');
const characters = require('./small.json');

const hbData = {
    templates: {}
};

const authors = {
  name: "Maximilian Feil & Nimrod Olah"
};

hbData.templates.home = hbs.compile(
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

const navigationPartial =`<ul style="list-style: none; padding: 0;  border: 1px solid #555;
">
                              <li><a href="/">Home</a></li>
                              <li><a href="/characters">Charaktere</a></li>
                          </ul>`;


const stylePartial = `<style>

                              body{
                                    padding: 20px 0px 0px 50px;
                                    font-family:verdana;

                                  }
                                  ul {
                                          text-align: center;
                                          list-style-type: none;
                                          margin: 0;
                                          padding: 0;
                                          width: 200px;
                                          background-color: #F8F8F8;
                                      }

                                      li a {
                                          display: block;
                                          color: #000;
                                          padding: 8px 16px;
                                          text-decoration: none;
                                      }

                                      li a:hover {
                                          background-color: #555;
                                          color: white;
                                      }
                      </style>`;


hbs.registerPartial('navigation', navigationPartial);
hbs.registerPartial('style',stylePartial);

function getHome(req, res){
    res.statusCode = 200;
    res.write(hbData.templates.home(authors))

}

const server = http.createServer(function (req, res) {
    const urlObj = url.parse(req.url, true);

    if (urlObj.pathname === '/') {
        getHome(req, res);
    } else {
        res.statusCode = 404;
        res.write('404 not found');
        res.end();
    }
});




server.listen(3000);
