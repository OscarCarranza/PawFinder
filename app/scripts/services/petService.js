angular.module('AngularScaffold.Services').factory('petService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000';
		//var baseUrl = 'https://pawfinders-backend.herokuapp.com/';

		return {
				GetPets: function(){
					return $http.get(baseUrl + "/v1/listDogs");
				},
				
				PostPet: function(payload){
					return $http.post(baseUrl + "/v1/addDog", payload);
				},

				DeletePet: function(payload) {
                    return $http.delete(baseUrl + '/v1/removeDog/{dogId}'+payload);
        },

				GetPet: function(payload){
					return $http.get(baseUrl + "/v1/getDog/{dogId}"+payload);
				}

				UpdatePet: function(payload){
					return $http.update(baseUrl + "/v1/editDog/{dogId}" + payload);
				}



	    };
}]);
