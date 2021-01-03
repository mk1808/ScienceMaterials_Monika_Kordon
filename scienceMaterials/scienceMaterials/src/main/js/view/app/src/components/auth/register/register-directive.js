'use strict';

angular
    .module('materialsApp')
    .directive('registerDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/auth/register/register.html',
            link: function ($scope, element, attrs) {
                var scope = $scope;
                $scope.registerForm = { mail: "", password: "", passwordRepeat:"" };
                $scope.submit = function () {
                    if (scope.registerForm.password==scope.registerForm.passwordRepeat){
                        console.log(scope.registerForm);
                    }
                    scope.a = 1;

                }
                $scope.clear = function () {

                    scope.registerForm.mail = "";
                    scope.registerForm.passwordRepeat=""
                    scope.registerForm.password = "";
                }
            }
        };
    });