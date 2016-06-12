var mongoose = require('mongoose');

var DonationSchema = new mongoose.Schema({
  donatorName: String,
  amount: Number,
  date: String,
});

module.exports = mongoose.model('Donation', DonationSchema);
