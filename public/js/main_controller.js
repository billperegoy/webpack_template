var myApp = angular.module('mainApp',['ngRoute']);

myApp.service('stoogesService', function($http, $q) {

  function get_stooges() {

    var defered;
    deferred = $q.defer();
    return  ["a", "x", "y", "z"] ;

    $http.get('/api/stooges').
      success(function(data, status, headers, config) {
        alert("success");
        deferred.resolve(data)
        alert(data.good);
        return data.good;
      });
  }

  return {       
           list: function() {
            return get_stooges();
           }
         }
});


myApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'html/partials/home.html'
      }).
      when('/good', {
        templateUrl: 'html/partials/good-stooges.html',
        controller: 'GoodStoogeController'
      }).
      when('/bad', {
        templateUrl: 'html/partials/bad-stooges.html',
        controller: 'BadStoogeController'
      }).
      when('/soso', {
        templateUrl: 'html/partials/soso-stooges.html',
        controller: 'SosoStoogeController'
      }).
      otherwise({
        templateUrl: 'html/partials/four-o-four.html'
      });

      $locationProvider.html5Mode(true);
  }]);

myApp.controller('GoodStoogeController', ['$scope', '$http', 'stoogesService', function($scope, $http, stoogesService) {

  $scope.stooges = stoogesService.list();
  /*
  $http.get('/api/stooges').
    success(function(data, status, headers, config) {
      $scope.stooges = data.good;
    })
    */
}]);

myApp.controller('BadStoogeController', ['$scope', '$http', function($scope, $http) {

  $http.get('/api/stooges').
    success(function(data, status, headers, config) {
      $scope.stooges = data.bad;
    })
}]);

myApp.controller('SosoStoogeController', ['$scope', '$http', function($scope, $http) {

  $http.get('/api/stooges').
    success(function(data, status, headers, config) {
      $scope.stooges = data.soso;
    })
}]);
