angular.module('AngularScaffold.Controllers')
  .controller('AdminController', ['authService', '$scope', '$rootScope', '$sessionStorage',  function (authService, $scope, $rootScope, $sessionStorage) {
      $scope.user = {};
      $scope.$sessionStorage = $sessionStorage;

      $scope.logout = function(){
        authService.Logout().then(function(response){
          alert('logged out correctly');
          $sessionStorage.$reset();
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        })
      }

      $scope.login = function(user){


        authService.Login(user).then(function(response){
          alert('Logged in correctly')
          $sessionStorage.currentUser = response.data;
          $scope.user = {};
          $scope.redirect();

        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }

      $scope.redirect = function(){
        window.location = "/admin_mascotas.html";
      } 

      $scope.register = function(){
        var user = {username: $scope.user.username, password:  $scope.user.password, email: $scope.user.email, scope: ['admin']};
        authService.Register(user).then(function(response){
          alert('Registered in correctly!');
          $scope.login({username: user.username, password: user.password});
        }).catch(function(err){
          console.log(err);
          alert(err.data.error + " " + err.data.message);
        })
      }
  }]);
