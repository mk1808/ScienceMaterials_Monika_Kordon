'use strict';

angular
    .module('materialsApp')
    .directive('fileDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/file/file.html',
            scope:{
                file: '=',
            },
            link: function ($scope, element, attrs) {
                console.log($scope.file)
            }
        };
    });