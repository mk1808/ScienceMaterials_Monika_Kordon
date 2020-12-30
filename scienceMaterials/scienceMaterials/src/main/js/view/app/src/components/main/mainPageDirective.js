'use strict';

angular
    .module('materialsApp').

    /*
    .directive('mainPageDirective',function(){
    return {
        restrict: 'E',         
        scope: {
            //@ reads the attribute value, = provides two-way binding, & works with functions
            title: '@'         },

        templateUrl: 'mainPage.html',
     //   controller: controllerFunction, //Embed a custom controller in the directive
        link: function ($scope, element, attrs) { 

        } }
    }
        );*/

        directive('myAwesomeDirective', function() {
            return {
              restrict: 'E',
              template: '<h1>This is awesome!</h1>'
            };
        });