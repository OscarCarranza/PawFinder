angular.module('AngularScaffold.Controllers')
  .controller('petController', ['$scope', 'petService', '$sessionStorage', function ($scope, petService, $sessionStorage) {
      $scope.title = "Petes."
      $scope.pets = [];
      $scope.pet = {};

      $scope.GetPets = function(){
        petService.GetPets().then(function(response){
          $scope.pets = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }
      
      $scope.GetPet = function(params){
        petService.GetPet(params).then(function(response){
          $scope.pet = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.PostPet = function(){
        console.log('ke ondas raza');
        petService.PostPet($scope.pet).then(function(response){
          alert("Posted to pets");
          $scope.GetPets();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }
      
      
      $scope.DeletePet = function (params) {
        petService.DeletePet(params).then(function (params) {
          alert("Pet Deleted");
          $scope.GetPets();
        }).catch(function (err) {
          alert(err.data.error + " " + err.data.message);
        });
      }

 

      $scope.isAdmin = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
      }

      $scope.isRegular = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('regular') > -1;
      }

  }]);
