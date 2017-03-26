angular.module('Honeypot.controllers')
  .controller('EngagementController', ["$scope", "$state", "DemoService", "DataService","$uibModal", function($scope, $state, DemoService, DataService, $uibModal) {

    $scope.$parent.title = 'Engagements';

    $scope.interests = [ { 'id': 1, 'label':'Positive Mentions', 'value': false, 'tag': 'good'},
                        { 'id': 2, 'label':'Neutral', 'value': false, 'tag': 'neutral' },
                        { 'id': 3, 'label':'Negative Mentions', 'value': false, 'tag': 'bad'},
                        { 'id':4, 'label':'Resolved', 'value': false, 'tag': 'resolved' }];



    params = {
      "token": "EAACEdEose0cBAIraj3fZC4O20GesissyhMPIs1EJaAxgGex4Lgn00TOow2U1KafMizb7z5dBaudAuBE5lhRFe3EOKcnNPm1ZCtlZCZBSZA7fXZC65aAiWQA7XahLQM58RXLmf4e4vW3KZBw6IoVBN3ZCW0SwEspq5Tu96X7mz7jwxgZDZD",
      "start_date": 1469574000,
      "end_date": 1479919600,
      "page_name": "motoliteexpresshatid",
      "user_id": 1,
      "interest_name": ['ToyotaMotorPhilippines', 'kiainthephilippines'],
      "variable1": "gender",
      "variable2": "address"
    }

    pagination = function() {
      var begin = (($scope.currentPage - 1) * $scope.commentsPerPage)
      var end = begin + $scope.commentsPerPage;

      $scope.filteredComments = $scope.comments.slice(begin, end);

          $scope.openTile = function (comment) {
            console.log(comment);
            $scope.comment = comment;
            var tileInstance =  $uibModal.open({
                animation: true,
                templateUrl: 'tile.html',
                controller: 'TileController',
                scope: $scope
            });

          //   tileInstance.result.then(function (selectedItem) {
          //     $scope. = selectedItem
          //     console.log(selectedItem);
          // })
        }

      _.each($scope.filteredComments, function(a){
        if(a.tag=='bad') {
          a.image_url ='https://dl.dropboxusercontent.com/u/24038622/icons/sad.png'
        }
        else if (a.tag == 'neutral') {
          a.image_url ='https://dl.dropboxusercontent.com/u/24038622/icons/neutral.png'
        }
        else {
          a.image_url ='https://dl.dropboxusercontent.com/u/24038622/icons/happy.png'
        }
      });
    }

    all_checked = []

    $scope.doIfChecked = function(checked) {
      if(checked.value == true) {
        all_checked.push(checked)
      }
      else {
        var index = all_checked.indexOf(checked.id)
        all_checked.splice(index, 1);
      }

      tags = _.map(all_checked, function(num){ return num.tag; });

      filtered = []

      if(tags.length > 0){
        _.each(tags, function(a) {
          filters = _.filter($scope.original_comments, function(num){ return num.tag == a; });
          filtered.push(filters)
        });
      } else{
         filtered = $scope.original_comments
      }


      filteredComments = _.flatten(filtered)

      $scope.comments = filteredComments
      $scope.pageCount = function () {
        return Math.ceil(filteredComments.length / $scope.commentsPerPage);

      }
      $scope.totalComments = filteredComments.length
      $scope.currentPage = 1;
      pagination();

    }

    $scope.$watch('currentPage', function() {
      pagination();
    });





}]);
