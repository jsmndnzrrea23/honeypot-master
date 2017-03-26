angular.module('Honeypot.controllers')
  .controller('SignupController', ["$scope", "Facebook", "UserService", "$rootScope", "$state", function($scope, Facebook, UserService, $rootScope, $state) {


    getPicture = function(token) {
      Facebook.api('/me', 'GET', {fields: 'name, picture.height(50).width(50)', access_token: token}, function(r) {
        data = {
          "id": r.id,
          "name": r.name,
          "picture": r.picture.data.url
        }
        return data
      });
    }


    role = function(token) {
      Facebook.api('/me', 'GET', {fields: 'accounts.limit(100)', access_token: token}, function(response) {
        pages = response.accounts.data

        _.each(pages, function(a){
          if(a.id== '1779236905645324') {
            if(_.contains(a.perms, 'ADMINISTER')) {
              return a
            }
          }
        });
      });
    }

    getLoginStatus = function() {
      Facebook.getLoginStatus(function(response) {
        console.log(response)
        if(response.status === 'connected') {
          $scope.loggedIn = true;
          picture_data =  getPicture(response.authResponse.accessToken)
          page = role(response.authResponse.accessToken)
          $scope.passcode = true
          $scope.fb = false
        } else {
          $scope.loggedIn = false;
        }
      });
     }

    $scope.fblogin = function() {
    //  From now on you can use the Facebook service just as Facebook api says
     Facebook.login(function(response) {

       $rootScope.token = response.authResponse.accessToken

       if(response.status === 'connected') {
         picture_data = getPicture(response.authResponse.accessToken)
         page = role(response.authResponse.accessToken)
       }
     });
   };

   getLoginStatus()

   
  }]);
