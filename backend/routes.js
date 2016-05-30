var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');
var dogController = require('./controllers/dogController');
var donationController = require('./controllers/donationController');


exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, DOGS')}}},

	{method: 'POST', path: '/v1/register', config: usersController.createUser},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout},

	{method: 'POST', path: '/v1/addDog', config: dogController.addDog},
	{method: 'PUT', path: '/v1/editDog/{dogId}', config: dogController.editDog},
	{method: 'DELETE', path: '/v1/removeDog/{dogId}', config: dogController.removeDog},
	{method: 'GET', path: '/v1/listDogs', config: dogController.listDogs},
	{method: 'GET', path: '/v1/getDog/{dogId}', config: dogController.getDog},

	{method: 'POST', path: '/v1/addDonation', config: donationController.addDonation},
	{method: 'GET', path: '/v1/listDonations', config: donationController.listDonations},
	{method: 'GET', path: '/v1/getDonation/{donationId}', config: donationController.getDonation},

];
