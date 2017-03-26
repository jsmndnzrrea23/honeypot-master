angular.module('Honeypot.controllers')
  .controller('JollibeeComparativeController',
  ['$scope', '$state','DemoService', 'DataService', 'GraphService', '$uibModal',
    function($scope, $state, DemoService, DataService, GraphService, $uibModal) {
      $scope.tab = $state.current.name;

      $scope.competitor_comparative = function(page) {

        $scope.loading_comparative = true
        page.time_id = $scope.period.time_id
        page.month = $scope.period.month

        DataService.cloudfone(page)
        .then(function(d){

          $scope.data_comparative_jollibee = d.compare
          $scope.loading_comparative = false
        });
      }
}]);
