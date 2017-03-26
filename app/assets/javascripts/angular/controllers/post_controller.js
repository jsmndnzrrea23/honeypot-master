angular.module('Honeypot.controllers')
  .controller('PostController', ["$scope", "$state", "GraphService", "$uibModalInstance", "DataService", function($scope, $state, GraphService, $uibModalInstance, DataService) {
    console.log($scope.current_post)
    $scope.options_post = GraphService.chart_line()
    $scope.data_post = [
            {
                key: "Cumulative Return",
                values: $scope.current_post.info
            }
        ]

    $scope.data_post_engage = [
            {
                key: "Cumulative Return",
                values: $scope.current_post.comparative
            }
        ]

    _.each($scope.current_post.variable_analytics, function(d) {
      if(d.variable =='gender') {
        _.each(d.values, function(a){
          a.value = Math.round(a.value)
          if(a.gender =='Male') {
            a.icon ="&#xe165;"
          }
          else {
            a.icon ='&#xe168;'
          }
        });
        $scope.gender = d;
      }
      else if(d.variable =='address') {
        $scope.address = d;
      }
      else {
        _.each(d.values, function(a){
          a.value = Math.round(a.value)
          if(a.status =='Married') {
            a.icon ="https://dl.dropboxusercontent.com/u/24038622/icons/married.png"
          }
          else if(a.status =='In a relationship') {
            a.icon ='https://dl.dropboxusercontent.com/u/24038622/icons/relationship.png'
          }
          else if(a.status =='Engaged') {
            a.icon ='https://dl.dropboxusercontent.com/u/24038622/icons/engaged.png'
          }
          else {
            a.icon ='https://dl.dropboxusercontent.com/u/24038622/icons/user.png'
          }
        });
        $scope.social = d;
      }
    })

    params = {
      "post_id": $scope.current_post.id
    }

    $scope.colors = ["#800026", "#bd0026", "#e31a1c", "#fc4e2a", "#fd8d3c", "#feb24c", "#fed976"];
    if($state.current.name == 'customer.myanmar') {
      $scope.cards = [
        {
          "show": true,
          "graph":'gender',
          "data": $scope.gender,
          "templateUrl": 'customers/analytics/_gender.html'
        },
        {
          "show": true,
          "graph":'address',
          "data": $scope.address,
          "templateUrl": 'customers/analytics/_address.html'
        },
        {
          "show": true,
          "graph":'social',
          "data": $scope.social,
          "templateUrl": 'customers/analytics/_status.html'
        }
      ]
    }
    else {
      DataService.word_post(params)
      .then(function(d){
        console.log(d)
        $scope.words = d

      });

      $scope.cards = [
        {
          "show": true,
          "graph":'gender',
          "data": $scope.gender,
          "templateUrl": 'customers/analytics/_gender.html'
        },
        {
          "show": true,
          "graph":'address',
          "data": $scope.address,
          "templateUrl": 'customers/analytics/_address.html'
        },
        {
          "show": true,
          "graph":'social',
          "data": $scope.social,
          "templateUrl": 'customers/analytics/_status.html'
        },
        {
          "show": true,
          "graph":'cloud',
          "data": $scope.words,
          "templateUrl": 'customers/analytics/_word.html'
        }
      ]
    }




}]);
