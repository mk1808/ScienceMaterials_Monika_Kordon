'use strict';

angular
    .module('materialsApp')
    .directive('contactDirective',['UserRestService', 'DataShareService', '$location', function (userRestService, dataShareService, $location) {
        return {
            restrict: 'E',
            templateUrl: '/src/components/contact/contact.html',
            link: function ($scope, element, attrs) {
                //  debugger;
                var scope = $scope;
                $scope.contactForm = { mail: "", name: "", text:"" };
                $scope.loginStatus;
                $scope.loggedUser;
                $scope.submit = function () {
                        let user = scope.loginForm;
                        userRestService.login(user, scope.successLogin, scope.errorLogin)
                    }
  
                $scope.clear = function () {
                    scope.loginForm.mail = "";
                    scope.loginForm.password = "";
                    scope.loginStatus=null;
                }
                $scope.successLogin = function(response){
                    debugger;
                    localStorage.setItem('userId', response.data.id);
                    console.log($location.absUrl())
                    $location.path("user");
                    scope.registerStatus = true;
                    scope.clear();
                    console.log(response);
                    dataShareService.setLoggedUser(response.data);
                    console.log("success");


                }
                $scope.errorLogin = function(){
                    scope.loginStatus=false;
                    console.log("err");
                }

                
            }
        };
    }]);