var express = require('express');
var morgan = require('morgan');
var path = require('path');

var Pool = require('pg').Pool;
var config ={
    user: 'shukla147',
    database:'shukla147',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));




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
       <body>

           <div class="container">
               <div>
                   <a href="/"><b style="float:right;">Home</b></h4></a>
               </div>
               
               <div>
                   <h1><center>${heading}</center></h1>
               </div>
               <div class="container1" >
                     <div>
                         ${date.toDateString()}
                     </div>
                     <div class="blogs">
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
}






app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

//counter app
var counter = 0;

app.get('/counter', function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
});
// add name

var names = [];
app.get('/submit-name',function(req,res){

   var name = req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
});

// blog 


var pool = new Pool(config);
app.get('/blogs/:blogNo', function(req, res) {
    var blogNo= req.params.blogNo;
    pool.query("SELECT * from article WHERE title='"+req.params.blogNo+"'",function(err,result){
       if(err){
           res.status(500).send(err.toString());
       } else{
           if(result.rows.length === 0){
               res.status(404).send('Article Not Found');
           }else{
                var articleData = result.rows[0];
                res.send(createTemplate(articleData));
           }
       }
    });

});

/*db
var pool = new Pool(config);
app.get('/test-db',function(req,res){
    pol.query("SELECT * FROM test",function(err,result){
       if(err){
           res.status(500).send(err.toString());
       } else{
           res.send(JSON.stringify(result.rows));
       }
    });
});
*/

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
