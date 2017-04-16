var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Recipe = require('./model/recipe');
var User = require('./model/user');
const morgan = require('morgan');
const cors = require('cors');
const http = require('http');
const bcrypt = require('bcrypt-nodejs');
//and create our instances
var app = express();
var router = express.Router();
//set our port to either a predetermined port number if you have set
//it up, or 3001
var port = process.env.API_PORT || 3001;

//db config
mongoose.connect('mongodb://LucaCortese:test@ds145230.mlab.com:45230/recipes');

//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

//now we can set the route path & initialize the API

 app.use('/', router);  //starts the server and listens for requests



router.post('/users/signin', function(req,res,next) {
  User.findOne({email:req.body.email}).then(function(user){
      if ((bcrypt.compareSync(req.body.password, user.password))){
        res.send(user);
      }
      else {res.send(false);}
  }).catch(next);
});


router.post('/users/signup', function(req,res,next) {
  User.create(req.body).then(function(newUser){
    res.send(newUser);
  }).catch(next);
});


router.post('/recipes/new', function(req,res,next) {
  //var newRecipe = new Recipe(req.body);
  //newRecipe.save();
  Recipe.create(req.body).then(function(newRecipe){  // newRecipe.create(req.body) è la stessa cosa delle 2 istruzioni commentate sopra
    res.send(newRecipe);
  }).catch(next);
});



router.get('/recipes/:id', function(req, res, next){
   Recipe.findById({_id:req.params.id}).then(function(recipe){
      res.send(recipe);
    }).catch(next);
 });


 router.get('/others-recipes/:chef', function(req, res, next) {
    Recipe.find({chef: {$ne: req.params.chef}  }).then(function(recipeList){
       res.send(recipeList);
     }).catch(next);
  });


  router.get('/your-recipes/:chef', function(req, res, next) {
     Recipe.find({chef:req.params.chef}).then(function(recipeList){
        res.send(recipeList);
      }).catch(next);
   });


 router.delete('/recipes/:id',function(req,res,next){
   Recipe.findByIdAndRemove({_id:req.params.id}).then(function(recipe){
     res.send(recipe);
   });
 });


 router.put('/recipes/update/:id',function(req,res,next){
   Recipe.findByIdAndUpdate(req.params.id,req.body).then(function(recipe){
     res.send(recipe);
   });
 });



app.listen(port, function() {
 console.log('api running on port: '+port);
});
