angular.module('Honeypot.services')
  .service('ShakeService', function() {
    this.shake = function (shakeClass) {
      $(shakeClass).addClass('shake animated')
                       .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
                          function(){
                            $(this).removeClass('shake animated');
                          });
    }
  });
