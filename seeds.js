const mongoose = require('mongoose');
const Newsletter = require('./models/newsletter');

mongoose.connect('mongodb://localhost:27017/berry_harvest', {useNewUrlParser: true, useUnifiedTopology: true})
   .then(()=>{
       console.log('CONNECTION OPEN!!!')
   })
   .catch (err => {
       console.log('OH NO ERROR!!!!')
       console.log(err)
   })

//insert many

const seedsNewsletter = [
    {
        name: 'Josh',
        email: 'jl.wray@live.co.uk'
    },
    {
        name: 'Alicia',
        email: 'ali.d@live.co.uk'
    },
    {
        name: 'Josie',
        email: 'josiewray@hotmail.co.uk',
    }
    
]

Newsletter.insertMany(seedsNewsletter)
.then(res =>{
    console.log(res)
})
.catch(e => {
    console.log(e)
})