'use strict';

// Declare app level module which depends on views, and core components
angular.module('materialsApp', [
  'ngRoute'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
 // $locationProvider.hashPrefix('!');
  $routeProvider.
        when('/home', {
          template: '<main-page-directive></main-page-directive>'///'<my-awesome-directive></my-awesome-directive>'
        })
        .when('/article',{
          template: '<single-article-directive></single-article-directive>'
        })
        .otherwise('/home');
   


}]);
