angular.module('Honeypot.controllers')
  .controller('SubNavbarController',
  ['$scope', '$state','DemoService',
    function($scope, $state, DemoService) {
      $scope.tab = $state.current.name;

      $scope.$watch('title', function() {
        if($state.current.name==='main.subnavbar.analytics' || $state.current.name==='main.subnavbar.comparative') {
          $scope.navbarOptions = [{"label": 'Basic Analytics', 'link':'analytics' },
                                  {"label": 'Comparative Analytics', 'link':'comparative'}]
        }
        else if($state.current.name==='main.subnavbar.engagement') {
          $scope.navbarOptions = [{"label": 'Engagements', 'link':'engagement' }
                                  ]
          }
        else if($state.current.name==='main.subnavbar.settings') {
          $scope.navbarOptions = [{"label": 'Account Settings', 'link':'settings' }
                                  ]
          }
      });

}]);
