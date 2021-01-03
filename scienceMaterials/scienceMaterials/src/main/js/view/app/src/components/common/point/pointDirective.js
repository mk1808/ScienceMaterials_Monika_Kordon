'use strict';

angular
    .module('materialsApp')
    .directive('pointDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/point/point.html',
            scope:{
                points: '=',
            },
            link: function ($scope, element, attrs) {
                console.log($scope.points)
            }
        };
    });