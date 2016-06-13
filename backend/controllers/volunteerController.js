var volunteer = require('../schemas/volunteer');

exports.listVolunteers = {
  handler: function(request, reply){
    var volunteers = volunteer.find({});
    reply(volunteers);
}
}

exports.addVolunteer = {
  handler: function(request, reply){
    var newVolunteer = new volunteer({
      name : request.payload.name,
      last_name : request.payload.last_name,
      age : request.payload.age,
      tel_number : request.payload.tel_number,
      email : request.payload.email,
      description : request.payload.description,
      state : request.payload.state,
    });
    newVolunteer.save();
    console.log('Volunteer added');
    reply(newVolunteer);
  }
}

exports.removeVolunteer = {
  handler: function(request, reply){
    volunteer.find({_id: request.params.volunteerId}).remove().exec();
    reply("Volunteer removed");
}}
