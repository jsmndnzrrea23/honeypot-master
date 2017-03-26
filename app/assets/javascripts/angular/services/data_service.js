angular.module('Honeypot.services')
  .service('DataService',['$http', '$q', function($http, $q) {
    this.pageLikes_1 = function(data) {
      var d = $q.defer();
      $http({
        method: 'POST',
        url: 'https://palmsolutions.co/api/v0/test.php',
        data: data,

      }).success(function(data){
        d.resolve(data);
      });

      return d.promise;
    }

    this.variableAnalytics = function(data) {
      var d= $q.defer();

      $.ajax({
        url: 'https://palmsolutions.co/api/v1/fast_variable.php',
        type: 'POST',
        dataType: 'json',
        data: data,
      }).success(function(data){
        d.resolve(data);
      });

      return d.promise;
    }

    // this.variableAnalytics = function(data) {
    //   var d= $q.defer();
    //
    //   $.ajax({
    //     url: 'https://palmsolutions.co/api/v0/variable_analytics.php',
    //     type: 'POST',
    //     dataType: 'json',
    //     data: data,
    //   }).success(function(data){
    //     d.resolve(data);
    //   });
    //
    //   return d.promise;
    // }

    this.likesArea = function(data) {
      console.log(data)
      var d= $q.defer();
      $.ajax({
        url: 'http://gpdigital.crabdance.com/api/v0/likes_area.php',
        type: 'POST',
        dataType: 'json',
        data: data,
      }).success(function(data){
        d.resolve(data);
      });

      return d.promise;
    }

    this.topPerformingPosts = function(data) {
      var d= $q.defer();
      $.ajax({
        url: 'https://palmsolutions.co/api/v1/top_engagement.php',
        type: 'POST',
        dataType: 'json',
        data: data,
      }).success(function(data){
        d.resolve(data);
      });

      return d.promise;
    }

    this.comparative_interests= function(data) {
      var d= $q.defer();
      $.ajax({
        url: 'https://palmsolutions.co/api/v1/fast_line.php',
        type: 'POST',
        dataType: 'json',
        data: data,
      }).success(function(data){
        d.resolve(data);
      });

      return d.promise;
    }

    this.single_variable = function(data) {
      var d= $q.defer();

      $.ajax({
        url: 'https://palmsolutions.co/api/v1/fast_single.php',
        type: 'POST',
        dataType: 'json',
        data: data,
      }).success(function(data){
        console.log(data)
        d.resolve(data);

      });

      return d.promise;
    }

    this.double_variable = function(data) {
      var d= $q.defer();

      $.ajax({
        url: 'https://palmsolutions.co/api/v1/double_variable.php',
        type: 'POST',
        dataType: 'json',
        data: data,
      }).success(function(data){
        d.resolve(data);
      });

      return d.promise;
    }

    this.comments_1 = function(data) {
      var d = $q.defer();
      $http({
        method: 'POST',
        url: 'https://palmsolutions.co/api/v1/get_comment.php',
        data: data,

      }).success(function(data){
        console.log(data)
        d.resolve(data);
      });

      return d.promise;
    }

    this.comments = function(data) {
      var d= $q.defer();

      $.ajax({
        url: 'https://palmsolutions.co/api/v1/get_comment.php',
        type: 'POST',
        dataType: 'json',
        data: data,
      }).success(function(data){
        console.log(data)
        d.resolve(data);

      });

      return d.promise;
    }

    this.engage_01 = function(data) {
      console.log(data)
      var d = $q.defer();
      $http({
        method: 'POST',
        url: 'https://palmsolutions.co/api/v0/engage_graph.php',
        data: data,

      }).success(function(data){
        d.resolve(data);
        console.log(data)
      });

      return d.promise;
    }

    this.engage = function(data) {
      var d= $q.defer();

      $.ajax({
        url: 'https://palmsolutions.co/api/v1/engage_graph.php',
        type: 'POST',
        dataType: 'json',
        data: data,
      }).success(function(data){
        d.resolve(data);

      });

      return d.promise;
    }

    this.word_cloud = function(data) {
      var d = $q.defer();
      $.ajax({
        url: 'https://palmsolutions.co/api/v1/word_count.php',
        type: 'POST',
        dataType: 'json',
        data: data,
      }).success(function(data){

        d.resolve(data);

      });

      return d.promise;
    }

    this.jollibee = function(data) {

      var d = $q.defer();
      $.ajax({
        url: 'https://palmsolutions.co/api/v1/word_page.php',
        type: 'POST',
        dataType: 'json',
        data: data,
      }).success(function(data){

        d.resolve(data);

      });

      return d.promise;
    }

    this.cloudfone_01 = function(data) {
      var d = $q.defer();
      $.ajax({
        url: 'https://palmsolutions.co/api/v1/fast_engagement.php',
        type: 'POST',
        dataType: 'json',
        data: data,
      }).success(function(data){
        d.resolve(data);

      });

      return d.promise;
    }

    // this.cloudfone = function(data) {
    //
    //   var d = $q.defer();
    //   $http({
    //     method: 'POST',
    //     url: 'https://palmsolutions.co/api/v1/fast_engagement.php',
    //     data: data
    //   }).success(function(data){
    //     d.resolve(data);
    //   });
    //
    //   return d.promise;
    // }

    this.cloudfone = function(data) {
      console.log(data)
      var d = $q.defer();
      $.ajax({
        url: 'http://gpdigital.crabdance.com/api/v1/fast_engagement.php',
        timeout: 0,
        type: 'POST',
        dataType: 'json',
        data: data
      }).success(function(data){
        d.resolve(data);

      }).error(function(x, t, m) {
        if(t==="timeout") {
            alert("got timeout");
        } else {
            alert(t);
        }
      });

      return d.promise;
    }

    this.word_post = function(data) {
      var d = $q.defer();
      $.ajax({
        url: 'https://palmsolutions.co/api/v1/word_post.php',
        type: 'POST',
        dataType: 'json',
        data: data,
      }).success(function(data){
        d.resolve(data);

      });

      return d.promise;
    }


}]);
