angular.module('Honeypot.controllers')
  .controller('JollibeeController',
  ['$scope', '$state','DemoService', 'DataService', 'GraphService', '$uibModal',
    function($scope, $state, DemoService, DataService, GraphService, $uibModal) {
      $scope.tab = $state.current.name;
}]);
