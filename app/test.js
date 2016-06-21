var api_key = 'key-cda46d8fc910c1582c9c11afa65a549d'
var domain = 'sandbox7b80af1f32d44d68825d081101a6a340.mailgun.org'
var mailgun = require('mailgun-js')((apiKey: api_key, domain:domain))

var data = {
  from:'pawfinderhn@gmail.com',
  to:'pawfinderhn@gmail.com'
  subject:'Propuesta voluntario',
  text: "Tal persona ha solicitado..."
};

mailgun.messages().send(data,function(error.body){
  console.log(body);
});
