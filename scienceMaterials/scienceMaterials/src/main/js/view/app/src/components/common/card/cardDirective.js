'use strict';

angular
    .module('materialsApp')
    .directive('cardDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/card/card.html',
            scope:{
                cardContent: '=',
            },
            link: function ($scope, element, attrs) {
                var scope = $scope;
                console.log(scope.cardContent)
                $scope.read = function(id){
                    scope.$emit('readEvent', [id]);
                }
            }
        };
    });