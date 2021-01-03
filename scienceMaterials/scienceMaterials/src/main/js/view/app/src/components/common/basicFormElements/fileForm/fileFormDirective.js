'use strict';

angular
    .module('materialsApp')
    .directive('fileFormDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/basicFormElements/fileForm/fileForm.html',
            scope:{
                file: '=',
            },
            link: function ($scope, element, attrs) {
            }
        };
    });