var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var config = {
  host: 'db.imad.hasura-app.io',
  port:'5432',
  user: 'shukla147',
  password: process.env.DB_PASSWORD,
  database: 'shukla147',
};

var app = express();
app.use(morgan('combined'));

var blogs = {
 blog1 : {
     title : 'Blog 1 | Reshma Suresh',
     heading : 'Defeating Dimensions',
     date: 'November 1,2016',
     content :` 
             <p>  Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here  Content HerevContent Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v v Content Here 
              
              </p>`
 },
 blog2 : {
     title : 'Blog 2 | Reshma Suresh',
     heading : 'Eternal Love',
     date: 'November 5,2016',
     content :` 
             <p>  Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here  Content HerevContent Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v v Content Here 
              </p>`
 },
 blog3 : {
    title : 'Blog 3 | Reshma Suresh',
     heading : 'Get Back Up!',
     date: 'November 10,2016',
     content :` 
             <p>  Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here  Content HerevContent Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v v Content Here 
             
              </p>` 
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
       <body bgcolor=PINK>
         
           <div class="container">
               <div>
                   <a href="/">
                    <b><button>Home</button></b>
                   </a>
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
                     <div class="footer">
                        <button id="likebutton">Like</button><span id="likes"> 0 </span> Likes!
                     </div>
               </div>
           </div>
        <script type="text/javascript" src="/ui/main.js">
        </script>
       </body>
    </html>
    
     `;
     return htmlTemplate;
}

app.get('/ui/about.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.html'));
}); 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

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
var counter=0;
app.get('/counter', function (req,res) {
   counter=counter+1;
   res.send(counter.toString());
});
app.get('/:blogNo', function(req, res) {
    var blogNo= req.params.blogNo;
    res.send(createTemplate(blogs[blogNo]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/about.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/favicon.ico', function (req,res) {
//server the static icon file
res.sendFile(path.join(__dirname, 'ui', 'favicon.ico'));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});


/*
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
                   <a href="/"><b>Home</b></a>
               </div>
               <hr/>
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

// blog 

var counter1 = 0;
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
   counter1 += 1;
   res.send(counter1.toString());
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
*/