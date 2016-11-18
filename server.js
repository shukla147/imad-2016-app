var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var blogs = {
 blog1 : {
     title : 'First blog, Ankit Shukla',
     heading : 'Journey started',
     date: 'September 1,2016',
     content :`  `
 },
 blog2 : {
     title : 'Second blog,  Ankit Shukla',
     heading : 'Mid of the course',
     date: 'October 5,2016',
     content :`       `
 },
 blog3 : {
    title : 'Third blog, Ankit Shukla',
     heading : 'End of the course',
     date: 'October 23,2016',
     content :`  `     
 }
};


function createTemplate (data){
     var title= data.title;
     var heading= data.heading;
     var date= data.date;
     var content= data.content;
     var htmlTemplate = `
     <html>
      <head>
        <title>
           ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
        </head>
       <body style:'color:#aaaaaa;'>

           <div class="container">
               <div>
                   <a href="/"><b>Home</b></a>
               </div>
               <hr/>
               <div>
                   <h1><center>${heading}</center></h1>
               </div>
               <div class="container1" >
                     <div>
                        <p> ${date}</p>
                     </div>
                     <div>
                         ${content}
                     </div>
                     
               </div>
           </div>
    <script type="text/javascript" src="/ui/main.js"></script>
        </script>
       </body>
    </html>

     `;
     return htmlTemplate;
};






app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

// blog 
app.get('/:blogNo', function(req, res) {
    var blogNo= req.params.blogNo;
    res.send(createTemplate(blogs[blogNo]));
});
//counter app
var counter = 0;

app.get('/counter', function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
});

// add name app
var names = [];
app.get('/submit-name',function(req,res){

   var name = req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
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






var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
