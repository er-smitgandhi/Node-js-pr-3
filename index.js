const express = require("express");

const port = 8000;

const app = express();

const path = require('path')

app.set('view engine','ejs')

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    return res.render('index');
})

app.get('/register',(req,res)=>{
    return res.render('register');
})

app.get('/login',(req,res)=>{
    return res.render('login');
})

app.get('/table',(req,res)=>{
    return res.render('table');
})


app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Server Start on port "+port);
})