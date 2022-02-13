const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const session = require('express-session');


class DependencyConfig {

  constructor(expressApp){
    this.app = expressApp

    // MONGODB CONFIG
    
//Mongo DB configuration
let mongo_cloud = "mongodb+srv://motor-forum:cse2294@cluster0.tdm3w.mongodb.net/motor-forum?retryWrites=true&w=majority"
    mongoose.connect(mongo_cloud, { 
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });


    // BODY-PARSER CONFIG
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }))

    // SESSION CONFIG
    this.app.use(session({
        secret: 'mriduava',
        saveUninitialized: false,
        resave: false
    }));
  }

}

module.exports = DependencyConfig;