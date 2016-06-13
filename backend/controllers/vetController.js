var vet = require('../schemas/vet');

exports.listVets = {
  handler: function(request, reply){
    var vets = vetr.find({});
    reply(vets);
}
}

exports.addVet = {
  handler: function(request, reply){
    var newVet = new vet({
      name : request.payload.name,
      tel_number : request.payload.tel_number,
      email : request.payload.email,
      adress : request.payload.adress,
    });
    newVet.save();
    console.log('Vet added');
    reply(newVet);
  }
}

exports.removeVet = {
  handler: function(request, reply){
    vet.find({_id: request.params.vetId}).remove().exec();
    reply("Vet removed");
}}
