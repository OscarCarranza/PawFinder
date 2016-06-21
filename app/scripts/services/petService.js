angular.module('AngularScaffold.Services').factory('petService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		//var baseUrl = 'http://localhost:8000';
		var baseUrl = 'https://pawfinders-backend.herokuapp.com/'

		return {
				GetPets: function(){
					return $http.get(baseUrl + "/getPets");
				},
				PostPet: function(payload){
					return $http.post(baseUrl + "/postPet", payload);
				},
                DeletePet: function(payload) {
                    return $http.delete(baseUrl + '/deletePet/'+payload);
                },
                GetPet: function(payload){
					return $http.get(baseUrl + "/getPets/"+payload);
				}
                
	    };
}]);
