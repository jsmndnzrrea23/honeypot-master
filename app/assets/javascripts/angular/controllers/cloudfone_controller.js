angular.module('Honeypot.controllers')
  .controller('CloudfoneController',
  ['$scope', '$state','DemoService', 'DataService', 'GraphService', '$uibModal',
    function($scope, $state, DemoService, DataService, GraphService, $uibModal) {


      p = {
        "page_id": 240504995982752
      }

      $scope.pages = [
        {
          "name": "Cloudfone",
          "id": 240504995982752
        },
        {
          "name": "Cherry Mobile",
          "id": 269510017442
        },
        {
          "name": "Starmobile",
          "id": 138778092890671
        },
        {
          "name": "myPhone",
          "id": 135282306512042
        }
      ]
      $scope.rc = {}

      $scope.page = $scope.pages[0]

      reverseit = function(arr) {
        _.each(arr, function(a){
          a.values.reverse();
        });

        return arr
      }

      type = 'lineChart'
      $scope.options_cloudfone = GraphService.chart_jollibee(type)

      campaign_analysis = function(page_id) {
        $scope.loading = true
        p.page_id = page_id
        DataService.cloudfone(p)
        .then(function(d){
          console.log(d)
          $scope.base_data = d
          d.values= reverseit(d.values)
          d.posts = d.posts.reverse()

          _.each(d.values, function(a) {
            a.values = a.values.reverse()
          })

          $scope.data_cloudfone = d.values


          _.each(d.posts, function(a){
            a.time = a.time/1000
            a.time_formatted = moment.unix(a.time).format("MM/DD");
          });
          $scope.posts = d

          $scope.loading = false

        });
      }

      $scope.cherry = function(page) {
        campaign_analysis(page.id)
      }

      $scope.analyze = function (post) {
        $scope.current_post = post
        var analyisInstance =  $uibModal.open({
            animation: true,
            templateUrl: 'customers/post.html',
            controller: 'PostController',
            scope: $scope,
            windowClass: 'app-modal-window'
        });
      }

      $scope.baseline = function() {
        _.each($scope.base_data.posts, function(a) {

          if(a.id == "") {
            $scope.current_post = a
          }
        })
        var analyisInstance =  $uibModal.open({
            animation: true,
            templateUrl: 'customers/post.html',
            controller: 'PostController',
            scope: $scope,
            windowClass: 'app-modal-window'
        });
      }

      campaign_analysis(240504995982752)

  }]);
