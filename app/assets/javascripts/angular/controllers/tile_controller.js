angular.module('Honeypot.controllers')
  .controller('TileController', ["$scope", "$state", "DemoService", "$uibModalInstance", function($scope, $state, DemoService, $uibModalInstance) {

    console.log($scope.comment);

    if($scope.comment.tag=='bad') {
      $scope.comment.image_url ='https://dl.dropboxusercontent.com/u/24038622/icons/sad.png'
    }
    else if ($scope.comment.tag == 'neutral') {
      $scope.comment.image_url ='https://dl.dropboxusercontent.com/u/24038622/icons/neutral.png'
    }
    else {
      $scope.comment.image_url ='https://dl.dropboxusercontent.com/u/24038622/icons/happy.png'
    }

    $scope.reply = function() {

      rep = {
        "from": "Motolite",
        "message": $scope.reply_text,
        "created_time": Date.now()
      }
      $scope.reply_text = ""
      $scope.comment.comments.push(rep)

    }

}]);
