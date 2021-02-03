const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsletterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
   
});

//compiling Schema
module.exports = mongoose.model('Newsletter', newsletterSchema);