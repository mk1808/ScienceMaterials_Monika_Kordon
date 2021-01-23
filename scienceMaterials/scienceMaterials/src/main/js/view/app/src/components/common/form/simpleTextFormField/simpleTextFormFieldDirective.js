'use strict';

angular
    .module('materialsApp')
    .directive('simpleTextFormFieldDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/form/simpleTextFormField/simpleTextFormField.html',
            scope:{
                formData: '=',
            },
            link: function ($scope, element, attrs) {
            }
        };
    });