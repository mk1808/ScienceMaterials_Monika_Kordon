'use strict';

angular
    .module('materialsApp')
    .directive('registerDirective',['UserRestService', function (userRestService) {
        return {
            restrict: 'E',
            templateUrl: '/src/components/auth/register/register.html',
            link: function ($scope, element, attrs) {
                var scope = $scope;
                $scope.registerForm = { mail: "", password: "", passwordRepeat:"" };
                $scope.registerStatus;
                $scope.submit = function () {
                    debugger;
                    if (scope.registerForm.password==scope.registerForm.passwordRepeat){
                        console.log(scope.registerForm);
                        let user = {mail:scope.registerForm.mail, password:scope.registerForm.password};
                        userRestService.register(user, $scope.successRegister, $scope.errorRegister)
                    }
                    scope.a = 1;

                }
             
                $scope.clear = function () {

                    scope.registerForm.mail = "";
                    scope.registerForm.passwordRepeat=""
                    scope.registerForm.password = "";
                    scope.registerStatus=null; 
                }
                $scope.successRegister = function(){
                    scope.registerStatus = true;
                    scope.clear();
                    console.log("success");

                }
                $scope.errorRegister = function(){
                    scope.registerStatus=false;
                    console.log("err");
                }
            }
        };
    }]);