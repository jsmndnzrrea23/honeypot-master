angular.module('Honeypot.services')
  .service('UserService',['$http', '$q', function($http, $q) {

    this.token = function(data) {
      var d = $q.defer();
      $http({
        method: 'GET',
        url: 'https://palmsolutions.co/api/v0/test.php',
        data: data,

      }).success(function(data){
        d.resolve(data);
      });

      return d.promise;
    }

  }]);
