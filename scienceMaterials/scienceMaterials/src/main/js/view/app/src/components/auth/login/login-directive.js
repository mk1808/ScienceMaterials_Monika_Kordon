'use strict';

angular
    .module('materialsApp')
    .directive('loginDirective',['UserRestService', function (userRestService) {
        return {
            restrict: 'E',
            templateUrl: '/src/components/auth/login/login.html',
            link: function ($scope, element, attrs) {
                //  debugger;
                var scope = $scope;
                $scope.loginForm = { mail: "", password: "" };
                $scope.loginStatus;
                $scope.submit = function () {
                        let user = scope.loginForm;
                        userRestService.login(user, $scope.successLogin, $scope.errorLogin)
                    }
  
                $scope.clear = function () {
                    scope.loginForm.mail = "";
                    scope.loginForm.password = "";
                    scope.loginStatus=null;
                }
                $scope.successLogin = function(){
                    scope.registerStatus = true;
                    scope.clear();
                    console.log("success");

                }
                $scope.errorLogin = function(){
                    scope.loginStatus=false;
                    console.log("err");
                }
            }
        };
    }]);