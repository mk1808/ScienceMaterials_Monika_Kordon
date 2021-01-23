'use strict';

angular
    .module('materialsApp')
    .directive('fileFormFieldDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/form/fileFormField/fileFormField.html',
            scope:{
                formData: '=',
            },
            link: function ($scope, element, attrs) {
            }
        };
    });