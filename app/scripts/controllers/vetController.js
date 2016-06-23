angular.module('AngularScaffold.Controllers')
  .controller('vetController', ['$scope', 'vetService', '$sessionStorage', function ($scope, vetService, $sessionStorage) {
    	$scope.title = "Vets."
      $scope.vets = [];
      $scope.vet = {};

      vetService.GetVets().then(function(response){
          $scope.vets = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });

      $scope.GetVets = function(){
        vetService.GetVets().then(function(response){
          $scope.vets = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.GetVet = function(params){
        vetService.GetVet(params).then(function(response){
          $scope.vet = response.data;
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message)
        });
      }

      $scope.PostVet = function(){
        vetService.PostVet($scope.vet).then(function(response){
          alert("Posted to vets");
          $scope.GetVets();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }


      $scope.DeleteVet = function (params) {
        vetService.DeleteVet(params).then(function (params) {
          alert("Vet Deleted");
          $scope.GetVets();
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
