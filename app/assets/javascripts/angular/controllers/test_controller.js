angular.module('Honeypot.controllers')
  .controller('TestController',
  ['$scope', '$state','DemoService', 'DataService', 'GraphService', '$uibModal',
    function($scope, $state, DemoService, DataService, GraphService, $uibModal) {
      $scope.tab = $state.current.name;

      console.log($scope.header)
    $scope.competitor_comparative = function(page) {

      $scope.loading_comparative = true
      console.log(page)
      DataService.cloudfone(page)
      .then(function(d){
        console.log(d)
        $scope.data_comparative_jollibee = d.compare
        $scope.loading_comparative = false
      });
    }






}]);
