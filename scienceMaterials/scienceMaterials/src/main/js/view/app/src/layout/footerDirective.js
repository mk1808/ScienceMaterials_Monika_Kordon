'use strict';

angular
    .module('materialsApp')
    .directive('footerDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/layout/footer.html',
            link: function ($scope, element, attrs) {
            }
        };
    });