angular.module('Honeypot.controllers')
  .controller('SettingsController', ["$scope", function Main($scope, $http) {


  $scope.$parent.title = 'Account Settings';
 $scope.myData = [
    {title:'Position', fname:'Motolite Brand Manager'},
    {title:'Email', fname:'jsmndnzrrea23gmail.com'},
    {title:'Company', fname:'Motolite'},

  ];
  $scope.uploadFile = [
    {title:'Company Logo', fname:'motolite.jpg'}
  ];
  $scope.Name = [
    {title:'Name', fname:'Jessmond', mname:'Diesta', lname:'Nazarrea'}
  ];

  $scope.showEditRow = function (r) {
    if ($scope.active != r) {
      $scope.active = r;
    }
    else {
      $scope.active = null;
    }
  };

/* array for account settings */

 $scope.myData2 = [
    {title:'Package', content:'Starter Package', content2:'9,999 / month', content3:'Up to 20 interest pages', content4:'Monthly configuration',
     content5:'Up to 50,000 engaged users', content6:'Email and call customer support'},
    {title:'List of Competitors', content:'Outlast', content2:'TPL Industrial Sales Corporation', content3:'Pollux Distributors Inc.',
     content4:'Ramcar Group of Companies', content5:'Neutron Battery', content6:'Kingsway Battery Sales Inc.'},
    {title:'Interest Pages', content:'15 pages loaded'},
    {title:'Engaged Users ', content:'48,000 engaged users'},
	{title:'Update Configuration', content:'Monthly or Quarterly'},
	{title:'Network', content:'Limited to company network'},
	{title:'Billing Information', content:'Company name, point person, billed 29th of the month'}
    ];

$('li').filter(function(){
    return $.trim($(this).html()) == '';
}).hide()


  }]);
