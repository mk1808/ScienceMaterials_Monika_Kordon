'use strict';

angular
    .module('materialsApp')
    .directive('linkDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/link/link.html',
            scope:{
                link: '=',
            },
            link: function ($scope, element, attrs) {
                console.log($scope.link)
            }
        };
    });