angular.
  module('storeApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<main-page></main-page>'
        }).
        when('/edit-store', {
          template: '<edit-store></edit-store>'
        }).
        when('/edit-product/:productId', {
          template: '<edit-product></edit-product>'
        }).
        when('/single-product/:productId', {
          template: '<single-product></single-product>'
        }).
        otherwise('/');
    }
  ]);