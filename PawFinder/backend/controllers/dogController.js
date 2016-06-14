var dog = require('../schemas/dog');

exports.listDogs = {
  handler: function(request, reply){
    var dogs = dog.find({});
    reply(dogs);
}
}

exports.getDog = {
  handler: function(request, reply){
    var dogs = dog.find({_id:request.params.dogId});
    reply(dogs);
    console.log('get Dog success')
  }
}

exports.addDog = {
  handler: function(request, reply){
    var newDog = new dog({
      name : request.payload.name,
      age : request.payload.age,
      gender : request.payload.gender,
      description : request.payload.description,
    });
    newDog.save();
    console.log('Dog added');
    reply(newDog);
  }
}

exports.editDog = {
  handler: function(request, reply){
    dog.update({_id : request.params.dogId},
      {name: request.payload.name,
        age: request.payload.age,
        gender: request.payload.gender,
        description : request.payload.description,}).exec();
      reply("Dog edited")
}}

exports.removeDog = {
  handler: function(request, reply){
    dog.find({_id: request.params.dogId}).remove().exec();
    reply("Dog removed");
}}
