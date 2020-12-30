'use strict';

// Declare app level module which depends on views, and core components
angular.module('materialsApp', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
 // $locationProvider.hashPrefix('!');
  $routeProvider.
        when('/home', {
          template: 'test<my-awesome-directive></my-awesome-directive>'
        }).
       
        otherwise('/home');
   


}]);
