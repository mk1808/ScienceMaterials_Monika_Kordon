'use strict';

angular
    .module('materialsApp')
    .directive('titleDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/title/title.html',
            link: function ($scope, element, attrs) {
            }
        };
    });