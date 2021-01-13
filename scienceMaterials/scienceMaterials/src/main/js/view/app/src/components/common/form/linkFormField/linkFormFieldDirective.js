'use strict';

angular
    .module('materialsApp')
    .directive('linkFormFieldDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/form/linkFormField/linkFormField.html',
            scope:{
                formData: '=',
            },
            link: function ($scope, element, attrs) {
            }
        };
    });