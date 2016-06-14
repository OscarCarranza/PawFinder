var donation = require('../schemas/donation');

exports.listDonations = {
  handler: function(request, reply){
    var donations = donation.find({});
    reply(donations);
}
}

exports.getDonation = {
  handler: function(request, reply){
    var donations = donation.find({_id:request.params.donationId});
    reply(donations);
    console.log('get Donation success')
  }
}

exports.addDonation = {
  handler: function(request, reply){
    var newDonation = new donation({
      donatorName : request.payload.donatorName,
      amount : request.payload.amount,
      date : request.payload.date,
    });
    newDonation.save();
    console.log('Donation added');
    reply(newDonation);
  }
}
