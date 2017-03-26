angular.module('Honeypot.controllers')
  .controller('SidebarController', ["$scope", "$state", "DemoService", "$rootScope", "DataService", "$sce", "$uibModal", "GraphService",
  function($scope, $state, DemoService, $rootScope, DataService, $sce, $uibModal, GraphService) {

    $scope.loading = {
      "likesArea": true,
      "topPerformingPosts": true,
      "variable_analytics": true,
      "comparative_line": true,
      "cards": false,
      "comments": true,
      "engage": true
    }

    $scope.show_graph = {
      "likesArea": true,
      "topPerformingPosts": true,
      "variable_analytics": true,
      "comparative_line": true,
      "cards": true,
      "comments": false,
      "engage": false
    }

    $scope.cards = [];

    ngProgress.start();

    //daterangepicker
    $scope.date = {
        startDate: moment(),
        endDate: moment().add(7, "days")
    };
    $scope.rc = {}


    reverseit = function(arr) {
      _.each(arr, function(a){
        a.values.reverse();
      });

      return arr
    }

    params = {
      "token": "EAAWRP9HfgLcBABLTZBmwMJLGZChWd4LZCuWH7aQ85DMfVRWDb88oyQb1C84l4ZCE8F3R6MkIdJQEMAat4UvJCb2ZBjcFCTZAZA2nZCf9eX8XbKRpxvxpATsonKAaRKpubV5ltuJSXRxQZCpPZCOKhHWMK32gapM69PRnwZD",
      "start_date": 1468227600,
      "end_date": 1469696400,
      "page_name": "motoliteexpresshatid",
      "user_id": 1,
      "interest_name": ['ToyotaMotorPhilippines', 'kiainthephilippines'],
      "variable1": "gender",
      "variable2": "address",
      "days": 14,
    }

    //variable analytics fxn
    variable_analytics = function(variable) {
      $scope.loading.variable_analytics = true
      $scope.show_graph.variable_analytics = false

      params.variable =variable

      DataService.variableAnalytics(params)
      .then(function(d){
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
          $scope.var = d;
        }
        else if(d.variable =='address') {
          $scope.var = d;
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
          $scope.var = d;
        }

        $scope.loading.variable_analytics = false
        $scope.show_graph.variable_analytics = true

      })
    }


    //Top Perfoming posts

    DataService.likesArea(params)
    .then(function(d){
      data = [{
          "key" : "Page Likes" ,
          "values" : d.reverse()
      }]

      console.log(data)

      type = 'stackedAreaChart'

      $scope.options = GraphService.likesArea(type)
      $scope.data = data
      $scope.rc.api.refresh()

      ngProgress.complete();

      $scope.loading.likesArea = false
    });

    DataService.topPerformingPosts(params)
    .then(function(d) {
      $scope.posts = d;
      $scope.loading.topPerformingPosts = false
    })



    $scope.comments =[]

    DataService.comments(params)
    .then(function(d) {
      $scope.commentsPerPage = 10;

      $scope.original_comments = d

      $scope.comments = d;
      $scope.pageCount = function () {
        return Math.ceil(d.length / $scope.commentsPerPage);

      }
      $scope.totalComments = d.length
      $scope.currentPage = 1;

      $scope.loading.comments = false
      $scope.show_graph.comments = true

    });

    DataService.comparative_interests(params)
    .then(function(result){

      type = 'discreteBarChart'
      $scope.options_comparative =  GraphService.chart_line(type)
      $scope.data_comparative = result
      $scope.rc.api.refresh()
      $scope.loading.comparative_line = false

    });

    DataService.word_cloud(params)
    .then(function(d){
      $scope.words = d

    });


    // demoservice

    DataService.engage(params)
    .then(function(d) {

      type = 'lineChart'

      d = reverseit(d)
      $scope.engage_28 = d

      $scope.options_engagement = DemoService.chart_engagement()
      $scope.data_engagement = d
      $scope.rc.api.refresh()

      $scope.loading.engage = false
      $scope.show_graph.engage = true
    })

    $scope.days = function(day) {
      if(day == 7) {
        params.days = 7
        DataService.engage(params)
        .then(function(d) {
          console.log(d)
          type = 'lineChart'

          d = reverseit(d)

          $scope.options_engagement = DemoService.chart_engagement()
          $scope.data_engagement = d
          $scope.rc.api.refresh()

          $scope.loading.engage = false
          $scope.show_graph.engage = true
        })
      }
      else {
        $scope.options_engagement = DemoService.chart_engagement()
        $scope.data_engagement = $scope.engage_28
        $scope.rc.api.refresh()

        $scope.loading.engage = false
        $scope.show_graph.engage = true
      }
    }

    $scope.analytics = [
      {
        'title': "Gender",
        'name': 'gender'
      },
      {
        'title': "Address",
        'name': 'address'
      },
      {
        'title': "Status",
        'name': 'status'
      }
    ]

    $scope.analytic=$scope.analytics[0]

    variable_analytics($scope.analytic.name)



    $scope.interestModal = function() {
      var modalInstanceInterest = $uibModal.open({
          animation: true,
          templateUrl: 'interest.html',
          controller: 'ModalController',
          resolve: {
            selected: function() {
              return $scope.interest
            }
          }
      });

      modalInstanceInterest.result.then(function (selectedItem) {
        if(selectedItem) {

        $scope.interest = selectedItem

        $scope.show_graph.comparative_line = false
        $scope.loading.comparative_line = true

        params.interest_name = $scope.interest.interest_name
        params.days = $scope.interest.days
        DataService.comparative_interests(params)
        .then(function(d){
          type = 'discreteBarChart'
          $scope.options_comparative = GraphService.chart_line(type)
          $scope.data_comparative = d
          $scope.rc.api.refresh()


          $scope.loading.comparative_line = false
          $scope.show_graph.comparative_line = true
        });

      }
      })

    }

    $scope.colors = ["#800026", "#bd0026", "#e31a1c", "#fc4e2a", "#fd8d3c", "#feb24c", "#fed976"];
}]);
