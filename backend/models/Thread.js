let mongoose = require("mongoose");

let threadSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Thread', threadSchema);