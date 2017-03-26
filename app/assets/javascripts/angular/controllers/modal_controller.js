angular.module('Honeypot.controllers')
  .controller('ModalController', ["$scope", "$state", "DemoService", "$uibModalInstance", "ShakeService", function($scope, $state, DemoService, $uibModalInstance, ShakeService) {
    $scope.analytics = DemoService.analytics();
    $scope.myData = ['quezon'];
    $scope.date = {
        startDate: moment(),
        endDate: moment().add(7, "days")
    };
    $scope.data = {
      'kiainthephilippines': 'kiainthephilippines',
      'ToyotaMotorPhilippines': 'ToyotaMotorPhilippines',
      'InterAksyon':'InterAksyon',
      'abscbnNEWS':'abscbnNEWS',
      'gmanews':'gmanews',
      'rapplerdotcom': 'rappler',
      'MannyPacquiao': 'MannyPacquiao',
      'nonitodonaire': 'nonitodonaire',
      'FordPhilippines': 'FordPhilippines',
      'pbaofficial': 'pbaofficial'
    };

    // $scope.data = {
    //   'kiainthephilippines': 'kiainthephilippines',
    //   'ToyotaMotorPhilippines': 'ToyotaMotorPhilippines',
    //   'FHM.ph': 'FHM.ph',
    //   'globeph': 'globeph',
    //   'SmartCommunications':'SmartCommunications',
    //   'TopGearPh':'TopGearPh',
    //   'InterAksyon':'InterAksyon',
    //   'abscbnNEWS':'abscbnNEWS',
    //   'gmanews':'gmanews',
    //   'rappler': 'rappler',
    //   'SuzukiAutoPh':'SuzukiAutoPh',
    //   'MannyPacquiao': 'MannyPacquiao',
    //   'nonitodonaire': 'nonitodonaire',
    //   'OfficialUAAPBasketball': 'OfficialUAAPBasketball',
    //   'shakeysvleague': 'shakeysvleague',
    //   'FordPhilippines': 'FordPhilippines',
    //   'Hondaphil': 'Hondaphil',
    //   'ginebra1834': 'ginebra1834',
    //   'alaskaacesbasketball': 'alaskaacesbasketball',
    //   'elastopainters.ros': 'elastopainters.ros',
    //   'pbaofficial': 'pbaofficial',
    //   'PhilippineAzkals': 'PhilippineAzkals',
    //   'JESSYliciousOfficial': 'JESSYliciousOfficial',
    //   'CocaColaPhilippines': 'CocaColaPhilippines',
    //   'PetronCorporation': 'PetronCorporation',
    //   'SanMigLightDrinkers': 'SanMigLightDrinkers',
    //   'SanMiguelFlavoredBeer': 'SanMiguelFlavoredBeer',
    //   'TanduayRhumOfficial': 'TanduayRhumOfficial',
    //   'kfcPhilippines': 'kfcPhilippines',
    //   'novellinowines': 'novellinowines',
    //   'GreenwichPizza':'GreenwichPizza'
    // };

    $scope.single = true;
    $scope.openSingle = function () {
      $scope.single = true;
    }
    $scope.openDouble = function () {
      $scope.single = false;
    }

    days = 7

    $scope.lastdays = function(day) {
      days = day
    }

    $scope.error = false;
    $scope.addGraph= function() {

      if($scope.single) {

        $scope.selected = {
          "graph": "single",
          "variable1": $scope.analytic.name,
          "interest_name": $scope.myData
        }
      }
      else {
        $scope.selected = {
          "graph": "double",
          "variable1": $scope.analytic_1.name,
          "variable2": $scope.analytic_2.name,
          "interest_name": $scope.myData
        }
      }
      $uibModalInstance.close($scope.selected);
    }

    $scope.addInterest = function() {

      if($scope.myData.length < 10 ) {
        $scope.interest = {
          "startDate": $scope.date.startDate,
          "endDate": $scope.date.endDate,
          "interest_name": $scope.myData,
          "days": days
        }

        $uibModalInstance.close($scope.interest);
      }
      else {
        $scope.error = true;
        ShakeService.shake('.modal-container');
      }
    }

    $scope.closeModal = function () {
      $uibModalInstance.close(false);
    }

}]);
