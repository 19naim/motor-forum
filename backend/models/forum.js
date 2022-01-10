const mongoose = require("mongoose");

let forumSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
  
});

module.exports = mongoose.model('Forum', forumSchema);