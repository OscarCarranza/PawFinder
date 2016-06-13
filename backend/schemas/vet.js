var mongoose = require('mongoose');

var VetSchema = new mongoose.Schema({
  name: String,
  tel_number: Number,
  email: String,
  adress: String,
});

module.exports = mongoose.model('Vet', VetSchema);
