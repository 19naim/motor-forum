var express = require('express')
var app = express()

let Forum = require('./models/forum')
const mongoose = require("mongoose");
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())


//Mongo DB configuration
const db = "motor-forum-db";
let mongo_cloud = "mongodb+srv://motor-forum:cse2294@cluster0.tdm3w.mongodb.net/motor-forum?retryWrites=true&w=majority"
    mongoose.connect(mongo_cloud, { 
      useUnifiedTopology: true,
      useNewUrlParser: true,
      
    });


//get method
    app.get('/api/forums', async (req, res) => {
        await Forum.find({}, (err, forum)=>{
          if (err) {
            res.json(err);
          }else{
            res.json(forum);
          }
        })
      })

// get single post by ID
app.get('/api/forums/:_id', async (req, res)=>{
    try {
      let forumSubject= await Forum.findById(req.params._id);
        if(!forumSubject) 
          return res.status(404).send("Forum not found!");
        res.send(forumSubject);
    } catch(e) {
        return res.status(404).send("Forum not found!");
    }
  })


// post method      
app.post('/api/forums',  async (req, res) => {
    console.log(req.body)
    await Forum.create(req.body, (err, text)=>{
      if (err) {
        res.json(err.message);
      }else{
        text.save();
        res.redirect('/api/forums')
      }
    })
  }

  
  
  )


const PORT = process.env.PORT || 3200;
app.listen(PORT, console.log(`SERVER IS RUNNING AT PORT ${PORT}`));

