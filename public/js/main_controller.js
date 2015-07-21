var myApp = angular.module('mainApp',['ngRoute']);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/good', {
        templateUrl: 'html/good-stooges.html',
        controller: 'GoodStoogeController'
      }).
      when('/bad', {
        templateUrl: 'html/bad-stooges.html',
        controller: 'BadStoogeController'
      }).
      when('/soso', {
        templateUrl: 'html/soso-stooges.html',
        controller: 'SosoStoogeController'
      })
  }]);

myApp.controller('MainController', ['$scope', '$http', function($scope, $http) {
  $scope.dynamic_text = "This is text added by Angular"

  $http.get('http://localhost:4567/api/stooges').
    success(function(data, status, headers, config) {
      $scope.stooges = data;
    })
}]);

myApp.controller('GoodStoogeController', ['$scope', '$http', function($scope, $http) {

  $http.get('/api/stooges').
    success(function(data, status, headers, config) {
      $scope.stooges = data.good;
    })
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
