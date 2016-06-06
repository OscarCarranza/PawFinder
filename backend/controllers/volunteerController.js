var volunteer = require('../schemas/volunteer');

exports.listVolunteers = {
  handler: function(request, reply){
    var volunteers = volunteer.find({});
    reply(volunteers);
}
}
}
