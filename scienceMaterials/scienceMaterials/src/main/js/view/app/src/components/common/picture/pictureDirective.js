'use strict';

angular
    .module('materialsApp')
    .directive('pictureDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/picture/picture.html',
            scope:{
                picture: '=',
            },
            link: function ($scope, element, attrs) {
                console.log($scope.picture)
            }
        };
    });