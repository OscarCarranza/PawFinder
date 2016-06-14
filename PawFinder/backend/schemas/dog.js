var mongoose = require('mongoose');

var DogSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  description : String,
});

module.exports = mongoose.model('Dog', DogSchema);
