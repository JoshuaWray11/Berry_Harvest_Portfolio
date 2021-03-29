if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
//for the layout partials
const ejsMate = require('ejs-mate');
const Newsletter = require('./models/newsletter');
// const berryHarvest = require('./routes/berryHarvest');
const urlencodedParser = bodyParser.urlencoded({ extended: true})



//Error Handing for the datbase

const dbURL = process.env.DB_URL || 'mongodb://localhost:27017/berry_harvest';

mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

// app.use('/berryharvest', berryHarvest);


app.get('/berryharvest', (req, res)=> {
    res.render('home')
});

app.get('/berryharvest/menu', (req, res)=> {
    res.render('menu')
});

app.get('/berryharvest/about', (req, res)=> {
    res.render('about')
});

app.get('/berryharvest/newsletter', async (req, res)=> {
    res.render('newsletter')
});

app.post('/berryharvest/newsletter/submission', urlencodedParser, async (req, res)=> {
    const newsletter = new Newsletter(req.body.newsletter);
    await newsletter.save();
    res.redirect('/berryharvest/newsletter/submission');
    // res.send(req.body.);
});

app.get('/berryharvest/newsletter/submission', async (req, res)=> {
    res.render('submission')
}); 


// app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname,'public')))
// app.use(express.static(__dirname + '/public/images'));
// app.use('/public/images/', express.static('./public/images'));


app.listen(3000, ()=> {
    console.log('Serving on port 3000')
})