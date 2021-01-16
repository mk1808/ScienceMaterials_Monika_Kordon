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
        .when('/article/new/parts/:id',{
          template: '<add-article-parts-directive></add-article-parts-directive>'
        })
        .when('/article/new',{
          template: '<add-article-directive></add-article-directive>'
        })
        .when('/article/editing/:id',{
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
        .when('/contact',{
          template: '<contact-directive></contact-directive>'
        })
        .otherwise('/home');
  ; 


}]);
