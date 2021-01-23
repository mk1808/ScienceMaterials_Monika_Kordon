'use strict';

angular
    .module('materialsApp')
    .directive('articleHeaderDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/articleHeader/articleHeader.html',
            scope:{
                header: '=',
            },
            link: function ($scope, element, attrs) {
                console.log($scope.header)
            }
        };
    });