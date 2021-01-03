'use strict';

angular
    .module('materialsApp')
    .directive('inputDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/basicFormElements/input/input.html',
            scope:{
                displayName: '@',
                controlName: '=',
                type: '@?'
            },
            link: function ($scope, element, attrs) {
                if(!$scope.type) {
                    $scope.type="text";
                }
               console.log(attrs)
               debugger;
            }
        };
    });