'use strict';

angular
    .module('materialsApp')
    .directive('headerDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/layout/header.html',
            link: function ($scope, element, attrs) {
            }
        };
    });