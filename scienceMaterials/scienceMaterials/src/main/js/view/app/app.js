'use strict';
  
var angularDragula = require('angularjs-dragula')
;
// Declare app level module which depends on views, and core components
angular.module('materialsApp', [
  'ngRoute', angularDragula(angular)
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
 // $locationProvider.hashPrefix('!');
  $routeProvider.
        when('/home', {
          template: '<main-page-directive></main-page-directive>'///'<my-awesome-directive></my-awesome-directive>'
        })
        .when('/articles/new',{
          template: '<add-article-directive></add-article-directive>'
        })
        .when('/article/:id',{
          template: '<single-article-directive></single-article-directive>'
        })
        
        .when('/register',{
          template: '<register-directive></register-directive>'
        })
        .when('/login',{
          template: '<login-directive></login-directive>'
        })
        .when('/user',{
          template: '<users-articles-directive></users-articles-directive>'
        })
        .when('/search',{
          template: '<search-articles-directive></search-articles-directive>'
        })
        .otherwise('/home');
  ; 


}]);
