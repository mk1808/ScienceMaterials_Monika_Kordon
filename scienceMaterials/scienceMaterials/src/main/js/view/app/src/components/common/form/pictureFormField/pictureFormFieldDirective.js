'use strict';

angular
    .module('materialsApp')
    .directive('pictureFormFieldDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/form/pictureFormField/pictureFormField.html',
            scope:{
                formData: '=',
            },
            link: function ($scope, element, attrs) {
            }
        };
    });