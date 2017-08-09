var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles  = {
    'article-one': {
    title : 'Article one by Ganga Pathak',
    heading: 'Article One',
    date: '08-08-2017',
    content:`
    <p>
        IMAD (Introduction to Modern Application Development) is a MOOC on how to build web/mobile applications offered by Hasura, under it's banner Hasura Education. IMAD is offered in partnership with IIT Madras
        </p>
        <p>
        If you just want to experience the joy of building an app, or have dreams of finding a job at one of the hottest tech companies or actually building one or just understand the app world that you cannot escape, you have come to the right place!
        </p>
        <p>
        We believe building technology can be both fun and empowering. We also think one can never be too young or too old to learn new things, and that applies to technology as well!
        </p>`},
    'article-two':{
    title : 'Article two by Ganga Pathak',
    heading: 'Article two',
    date: '09-08-2017',
    content:`
    <p>
        THis a content of article two
        </p>
        <p>
        If you just want to experience the joy of building an app, or have dreams of finding a job at one of the hottest tech companies or actually building one or just understand the app world that you cannot escape, you have come to the right place!
        </p>
        <p>
        We believe building technology can be both fun and empowering. We also think one can never be too young or too old to learn new things, and that applies to technology as well!
        </p>`},
    'article-three': {
    title : 'Article three by Ganga Pathak',
    heading: 'Article three',
    date: '10-08-2017',
    content:`
    <p>
        This is a content of article three
        </p>
        <p>
        If you just want to experience the joy of building an app, or have dreams of finding a job at one of the hottest tech companies or actually building one or just understand the app world that you cannot escape, you have come to the right place!
        </p>
        <p>
        We believe building technology can be both fun and empowering. We also think one can never be too young or too old to learn new things, and that applies to technology as well!
        </p>`},
};
function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
htmlTemplate = `
<head>
     <title>
        <meta name="viewport" content= "width=device-width, initial-scale=1.0">
        <link href="/ui/style.css" rel="stylesheet" />
         <title>
         ${title}
         </title>
             </head>
    <body>
        <div class="container">
        <div>
            <a href = "/">home</a>
        </div>
        <hr/>
        <h3>
           ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
        ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter = 0;
app.get('/counter', function(req, res){
    counter = counter +1;
    res.send(counter , toString());
});
app.get('/:articleName', function (req, res) {
    //article objects =  article-one 
    //articles[articleName] === content object for article one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
