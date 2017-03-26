angular.module('Honeypot.controllers')
  .controller('LoyaltyController',
  ['$scope', '$state','DemoService', 'DataService', 'GraphService', '$uibModal',
    function($scope, $state, DemoService, DataService, GraphService, $uibModal) {
      $scope.tab = $state.current.name;


      console.log($scope.period)

      $scope.competitor_loyalty = function(page) {

        page.time_id = $scope.period.time_id

        $scope.loading_loyalty = true
        DataService.cloudfone(page)
        .then(function(d){

          _.each(d.loyalty, function(a) {
            if(a.key =="New") {
              a.color = '#fd7f28'
            }
            else {
              a["color"] ='#fdba7d'
            }
          })

          $scope.data_loyalty = d.loyalty
          $scope.loading_loyalty = false
        });
      }
}]);
