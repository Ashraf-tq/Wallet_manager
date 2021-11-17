const express = require('express')
const app = express()
const port = 9000
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const fs = require('fs');
const {
  start
} = require('repl');
const {
  json
} = require('express');
// const users = require('./data/userAuth.json')

const oneDay = 1000 * 60 * 60 * 24;


app.use(sessions({
  secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
  saveUninitialized: true,
  cookie: {
    maxAge: oneDay
  },
  resave: false
}));

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}))
app.use(cookieParser());


// a variable to save a session
var session;

//home wehre check the user login

app.get('/', (req, res) => {
  session = req.session;
  if (session.userid) {
    res.send("Welcome " + session.userid + " <a href=\'/logout'>click to logout</a>");
  } else
    res.sendFile('index.html', {
      root: __dirname
    })

})


//user Login validation 
const users = fs.readFileSync(__dirname + '/data/userAuth.json', 'utf8', );
const usersjson = JSON.parse(users)

console.log(usersjson["solid"]["password"])



app.post('/user', (req, res) => {
  var password = "";
  if (usersjson[req.body.username] != undefined) {
     password = usersjson[req.body.username]["password"];
  }
  
  if (req.body.password == password) {
    session = req.session;
    session.userid = req.body.username;
    console.log(req.session)
    res.redirect("/")
  } else {
    res.send('Invalid username or password');
  }
})

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});


app.listen(port, () => console.log(`Server Running at port ${port}`));