'use strict';

angular
    .module('materialsApp')
    .directive('pointFormFieldDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/form/pointFormField/pointFormField.html',
            scope:{
                point: '=',
            },
            link: function ($scope, element, attrs) {
            }
        };
    });