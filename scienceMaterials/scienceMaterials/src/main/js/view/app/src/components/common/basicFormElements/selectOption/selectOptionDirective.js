'use strict';

angular
    .module('materialsApp')
    .directive('selectOptionDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/basicFormElements/selectOption/selectOption.html',
            scope:{
                file: '=',
            },
            link: function ($scope, element, attrs) {
            }
        };
    });