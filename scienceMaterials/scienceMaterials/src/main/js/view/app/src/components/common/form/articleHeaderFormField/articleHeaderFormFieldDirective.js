'use strict';

angular
    .module('materialsApp')
    .directive('articleHeaderFormFieldDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/form/articleHeaderFormField/articleHeaderFormField.html',
            scope:{
                formData: '=',
            },
            link: function ($scope, element, attrs) {
            }
        };
    });