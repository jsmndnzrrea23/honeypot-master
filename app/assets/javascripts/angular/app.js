var Honeypot = angular.module('Honeypot', [
  'ui.router',
  'ui.bootstrap',
  'ngCookies',
  'wu.masonry',
  'templates',
  'nvd3',
  'angular.chosen',
  'ngProgress',
  'angular-jqcloud',
  'facebook',
  'daterangepicker',
  'Honeypot.services',
  'Honeypot.directives',
  'Honeypot.controllers',
  'ngResource',
  'vAccordion',
]);
Honeypot.config(['FacebookProvider', function(FacebookProvider) {
     // Set your appId through the setAppId method or
     // use the shortcut in the initialize method directly.
     FacebookProvider.init('1567078173606071');
  }])

Honeypot.config(['$httpProvider', function ($httpProvider) {
  //Reset headers to avoid OPTIONS request (aka preflight)
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
}]);

Honeypot.filter('html', ['$sce', function($sce){
    return function(input){
        return $sce.trustAsHtml(input);
    }
}])



Honeypot.run(["ngProgressFactory", function(ngProgressFactory){
  // Set color for ngProgress to

  ngProgress = ngProgressFactory.createInstance();
  ngProgress.setColor('#f46647');

}]);


Honeypot.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);

Honeypot.directive('ngEnter', function () {
  return function (scope, element, attrs) {
    element.bind("keydown keypress", function (event) {
      if(event.which === 13) {
        scope.$apply(function (){
          scope.$eval(attrs.ngEnter);
        });
        event.preventDefault();
      }
    });
  };
});
