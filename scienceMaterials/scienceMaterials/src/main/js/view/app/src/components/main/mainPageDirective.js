'use strict';

angular
    .module('materialsApp')
    .directive('mainPageDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/main/mainPage.html',
            link: function ($scope, element, attrs) {
                
            }
        };
    });
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

 