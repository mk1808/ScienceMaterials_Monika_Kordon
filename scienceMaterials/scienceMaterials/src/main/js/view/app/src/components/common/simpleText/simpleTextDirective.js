'use strict';

angular
    .module('materialsApp')
    .directive('simpleTextDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/simpleText/simpleText.html',
            scope:{
                text: '=',
            },
            link: function ($scope, element, attrs) {
                console.log($scope);
            }
        };
    });