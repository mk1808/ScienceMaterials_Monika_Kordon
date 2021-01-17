'use strict';

angular
    .module('materialsApp')
    .directive('headerDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/layout/header.html',
            link: function ($scope, element, attrs) {
               var scope= $scope;
                $scope.token;
                $scope.logged = false;
                $scope.init=function(){
                    debugger;
                    scope.token = localStorage.getItem("token");
                    if(scope.token){
                        scope.logged = true;

                    }
                }
                
            }
        };
    });