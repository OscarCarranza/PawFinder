angular.module('AngularScaffold.Controllers')
  .controller('petController', ['$scope', 'petService', '$sessionStorage', function ($scope, petService, $sessionStorage) {
      $scope.title = "Pets."
      $scope.pets = [];
      $scope.pet = {};
      $scope.updatedPet = {};
      $scope.gender;
      console.log('si2');

      petService.GetPets().then(function(response){
          console.log('si');
          $scope.pets = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });

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
        petService.PostPet($scope.pet).then(function(response){
          console.log($scope.gender);
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

      $scope.llenarUpdatePet = function(pet){
        $('#tfNombre').val(pet.name);
        $('#tfAge').val(pet.age);
        $('#description').val(description);
        $scope.updatedPet = pet;
      }

      $scope.updatedPet = function(pet){
        var newPet = (name: $('#tfNombre').val(), age: $('#tfAge').val(), description: $('#description').val());
        petService.UpdatePet($scope.updatedPet._id, newPet).then(function(response){
          swal({title: "Mascota Modificada", type: "success", timer;1500, showCancelButton:false, showConfirmButton: false});
        }).catch(function(err)){
          swal({title:err.data.error " " err.data.message, type:"error", showCancelButton:false});
        });
      };

      $scope.deletePet = function(pet){
        petService.DeletePet(pet_id).then(function(response){
          swal({title: "Mascota Eliminada", type: "success", timer;1500, showCancelButton:false, showConfirmButton: false});
        }).catch(function(err)){
          swal({title:err.data.error " " err.data.message, type:"error", showCancelButton:false});
        });
      };




      $scope.isAdmin = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
      }

      $scope.isRegular = function(){
        return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('regular') > -1;
      }

  }]);
