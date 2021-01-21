const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
//for the layout partials
const ejsMate = require('ejs-mate');

app.get('/berryharvest', (req, res)=> {
    res.render('home')
})

app.get('/smoothies', (req, res)=> {
    res.render('smoothies')
})

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname,'public')))
// app.use(express.static(__dirname + '/public/images'));
// app.use('/public/images/', express.static('./public/images'));
app.use(express.static('public'));

app.listen(3000, ()=> {
    console.log('Serving on port 3000')
})