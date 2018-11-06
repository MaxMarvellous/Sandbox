const hbs = require('handlebars');

const templateStr = `My name is {{firstName}}`;
const data = {
  firstName: 'Thomas'
};

const compiledTemplate = hbs.compile(templateStr);
console.log(compiledTemplate(data));

const characters = {
  characterList: [
    {name: 'Cercei'},
    {name: 'Arya'},
    {name: 'Jon Schnee'},
    {name: 'Hodor'}
  ]
};

hbs.registerPartial('footer',
 '<footer>GoT search engine , Copyright 2018</footer>');
const charactersTemplate = `
<html><head></head>
<body>
<ol>
{{#each characterList}}
  <li>Name: {{this.name}}</li>
{{/each}}
</ol>
{{> footer}}
</body>
</html>`;

const compiledCharactersTemplate = hbs.compile(charactersTemplate);
console.log(compiledCharactersTemplate(characters));
