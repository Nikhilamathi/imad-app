var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
var articles={ 
    'article-one':{
 title:'Article one Nikhilamathi !',   
 heading:'Article one',
 date:'sep 6,2017',
 content:`<p>
                    This is the first content of Article one
                </p>
                <p> People milling around I  do not notice them, 
                    my face is turned to hide my loneliness,
                    Am walking in my own despair
                    No one else intrudes on my thoughts of 
                    "How they were"
                </p>
                <p> My heart is broken Feelings are numb
                    Trying to be the person I once was
                    People see my dimpled smile
                    Cannot see the ripped up emotions
                    Of reality.
                </p>`
},
'article-two':{ title:'Article two Nikhilamathi !',
heading:'Article two',
date:' Aug 26,2017',
content:`<p>
            This is the first content of Article two
                </p>
                <p>
                Photoshop is my passion.I love to edit pictures of other people.Whenever i do photoshop i forgot the sorrows in life and be happy
                </p>`
    
},
'article-three':{
    title:'Article three Nikhilamathi !',
heading:'Article three',
date:' Aug 27 ,2017',
content:`<p>
            This is the first content of Article three
                </p>
                <p>
                Learning and doing something on our own gives total happiness to me.Happy to create this site now.
                </p>`
    
}
};
function createTemplate (data) {
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmltemplate=`
      <html>
        <head>
            <title>
                ${title}
            </title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/"> Home </a>
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
                    </p>
                </div>
            </div>
        </body>
    </html>`;
    return htmltemplate;
    }

app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
 var articleName=req.params.articleName 
res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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
