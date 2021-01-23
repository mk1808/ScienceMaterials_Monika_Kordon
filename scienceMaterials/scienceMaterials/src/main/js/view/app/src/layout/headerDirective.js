'use strict';

angular
    .module('materialsApp')
    .directive('headerDirective', ['$location',function ($location) {
        return {
            restrict: 'E',
            templateUrl: '/src/layout/header.html',
            link: function ($scope, element, attrs) {
               var scope= $scope;
                $scope.token;
                $scope.mail;
                $scope.logged = false;
                $scope.init=function(){
                  //  debugger;
                    scope.token = localStorage.getItem("token");
                    
                    if(scope.token){
                        scope.logged = true;

                    }
                    scope.mail=localStorage.getItem("mail")||"Użytkownik";
                }
                $scope.$on("userLogin",$scope.init);
                $scope.init();
                $scope.logout = function(){
                    scope.logged = false;
                    localStorage.removeItem("token");
                    localStorage.removeItem("userId");
                    $location.path('/login');
                    
                }
                
            }
        };
    }]);