var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an
//object that shows the shape of the database entries.
var RecipesSchema = new Schema({
 chef: String,
 name: String,
 description: String
});

//export our module to use in server.js
module.exports = mongoose.model('Recipe', RecipesSchema);
