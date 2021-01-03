'use strict';

angular
    .module('materialsApp')
    .directive('loginDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/auth/login/login.html',
            link: function ($scope, element, attrs) {
             //  debugger;
             var scope = $scope;
             $scope.loginForm = {mail:"", password:"" };
             $scope.submit=function(){
                 scope.a=1;
          
             }
             $scope.clear=function(){
      
                 scope.loginForm.mail="";
                 scope.loginForm.password="";
             }
            }
        };
    });