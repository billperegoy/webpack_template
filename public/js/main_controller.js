var myApp = angular.module('mainApp',['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'html/partials/home.html'
      }).
      when('/good', {
        templateUrl: 'html/partials/good-stooges.html',
        controller: 'GoodStoogeController',
        resolve: {
          app: function ($q) {
                 var d = new Date();
                 console.log(d);
                 var defer = $q.defer();
                 defer.resolve();
                 d = new Date();
                 console.log(d);
                 return defer.promise;
               }
        }
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

/*
myApp.controller('MainController', ['$scope', '$http', function($scope, $http) {
  $scope.dynamic_text = "This is text added by Angular";
}]);
*/

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
