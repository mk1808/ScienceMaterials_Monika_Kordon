'use strict';

angular
    .module('materialsApp')
    .directive('inputDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/basicFormElements/input/input.html',
            scope:{
                file: '=',
            },
            link: function ($scope, element, attrs) {
            }
        };
    });