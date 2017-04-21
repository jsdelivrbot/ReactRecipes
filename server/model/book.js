var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an
//object that shows the shape of the database entries.
var BookSchema = new Schema({
 chef: String,
 title: String,
 plot: String,
 pages: String,
 price: Number,
 image: String
});

//export our module to use in server.js
module.exports = mongoose.model('Book', BookSchema);
