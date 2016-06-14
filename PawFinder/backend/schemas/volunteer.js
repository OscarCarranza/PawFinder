var mongoose = require('mongoose');

var VolunteerSchema = new mongoose.Schema({
  name: String,
  last_name: String,
  tel: Number,
  email: String,
  description : String,
  state: String,
});

module.exports = mongoose.model('Volunteer', VolunteerSchema);
