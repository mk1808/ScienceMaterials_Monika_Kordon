'use strict';

angular
    .module('materialsApp')
    .directive('cardDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/card/card.html',
            link: function ($scope, element, attrs) {
            }
        };
    });