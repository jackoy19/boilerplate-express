var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//console.log("Hello Express");
/*
app.get("/", (req, res) => {
  res.send("Hello Express");
});


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});


app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
});



app.get("/json", (req, res) => { 
  let message = "Hello json"; 
  (process.env.MESSAGE_STYLE == "uppercase") ? message=message.toUpperCase() : message=message; 
  res.json({
    "message": message
    }); 
});


app.post("/json", middleware = (req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});


app.get("/now", middleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
}, handler = (req, res) => {
  res.json({
    time: req.time
  });
});


app.get("/:word/echo", (req, res) => {
 var word = req.params.word;
  res.json({
    echo: word
  });
});

app.get("/name", (req, res) => {
  
  var firstname = req.query.first;
  var lastname = req.query.last;
  
  res.json({
    name: firstname +" "+lastname
  });
});


*/
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.post("/name", (req, res) => {
  
  var firstname = req.body.first;
  var lastname = req.body.last;
  
  res.json({
    name: firstname +" "+lastname
  });
});























 module.exports = app;
