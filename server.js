/*var express = require('express');
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
var title1= data.title;
     var heading= data.heading;
     var date= data.date;
     var content= data.content;
     var htmlTemplate = `
     <html>
      <head>
        <title>
           ${title1}
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

app.get('/ui/about.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});
var pool= new Pool(config);
app.get('/test-db', function(req, res) {
    pool.query('SELECT * FROM test', function(err, result) {
        if(err){
            res.status(200).send(err.toString());
        } 
        else {
            res.send(JSON.stringify(result));
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


*/
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

var blogs = {
 blog1 : {
     title : 'First blog, Ankit Shukla',
     heading : 'MEANINGLESS GOALS',
     date: 'September 1,2016',
     content :`A farmer had a dog who used to sit by the roadside waiting for vehicles to come around. As soon as one came he would run 
down the road, barking and trying to overtake it. One day a neighbor asked the farmer "Do you think your dog is ever going to 
catch a car?" The farmer replied, "That is not what bothers me. What bothers me is what he would do if he ever caught one." 
Many people in life behave like that dog who is pursuing meaningless goals.

<pre>
Life is hard by the yard, 
but by the inch, 
it's a cinch. </pre>`
 },
 blog2 : {
     title : 'Second blog,  Ankit Shukla',
     heading : 'The Bumblebee',
     date: 'October 5,2016',
     content :` According to scientists, the bumblebee's body is too heavy and its wing span too small. Aerodynamically, the bumblebee
cannot fly. But the bumblebee doesn't know that and it keeps flying.
When you don't know your limitations, you go out and surprise yourself. In hindsight, you wonder if you had any limitations. The only
limitations a person has are those that are self-imposed. Don't let education put limitations on you.`
 },
 blog3 : {
    title : 'Third blog, Ankit Shukla',
     heading : 'The Elephant Rope',
     date: 'October 23,2016',
     content :` As a man was passing the elephants, he suddenly stopped, confused by the fact that these huge creatures were being held by
only a small rope tied to their front leg. No chains, no cages. It was obvious that the elephants could, at anytime, break away from
their bonds but for some reason, they did not.
He saw a trainer nearby and asked why these animals just stood there and made no attempt to get away. trainer said, when they are
very young and much smaller we use the same size rope to tie them and, at that age, it's enough to hold them. As they grow up, they
are conditioned to believe they cannot break away. They believe the rope can still hold them, so they never try to break free 
The man was amazed. These animals could at any time break free from their bonds but because they believed they couldn't, they were
stuck right where they were.
Like the elephants, how many of us go through life hanging onto a belief that we cannot do something, simply because we failed at it
once before?
    Failure is part of learning; we should never give up the struggle in life. `
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
                         ${date}.toDateString()
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


app.get('/blogs/:blogNo', function(req, res) {
    var blogNo= req.params.blogNo;
    pool.query("SELECT * from article WHERE title='"+req.params.blogNo+"'",function(err,result){
       if(err){
           res.status(500).send(err.toString());
       } else{
           if(result.length.rows === 0){
               res.status(404).send('Article Not Found');
           }else{
                var articleData = result.rows[0];
                res.send(createTemplate(blogs[blogNo]));
           }
       }
    });
   
});

//db
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
