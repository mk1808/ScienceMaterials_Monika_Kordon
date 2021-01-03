'use strict';

angular
    .module('materialsApp')
    .directive('linkFormFieldDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/form/linkFormField/linkFormField.html',
            scope:{
                link: '=',
            },
            link: function ($scope, element, attrs) {
            }
        };
    });