'use strict';

angular
    .module('materialsApp')
    .directive('loginDirective',['UserRestService', 'DataShareService', '$location', function (userRestService, dataShareService, $location) {
        return {
            restrict: 'E',
            templateUrl: '/src/components/auth/login/login.html',
            link: function ($scope, element, attrs) {
                //  debugger;
                var scope = $scope;
                $scope.loginForm = { mail: "userR1@gmail.com", password: "Pasword" };
                $scope.loginStatus;
                $scope.loggedUser;
                $scope.token;
                $scope.submit = function () {
                        let user = scope.loginForm;
                        userRestService.login(user, scope.successLogin, scope.errorLogin)
                    }
  
                $scope.clear = function () {
                    scope.loginForm.mail = "";
                    scope.loginForm.password = "";
                    scope.loginStatus=null;
                }
                $scope.successLogin = function(response, status, headers, config){
                    debugger;
                    console.log(response);
                    console.log(headers);
                    scope.token = response.headers().authorization;
                    localStorage.setItem('token', scope.token);
                    localStorage.setItem('token2',scope.token.split("Bearer "));
                    userRestService.getUserByMail(scope.loginForm.mail, scope.successGetUser, scope.errorGetUser);
                   // console.log(headers('authorization'));
                    scope.$emit("userLogin");
                    


                }
                $scope.errorLogin = function(){
                    scope.loginStatus=false;
                    console.log("err");
                }

                $scope.successGetUser = function(response){
                    debugger;
                    localStorage.setItem('userId', response.data.id);
                    localStorage.setItem('mail', response.data.mail);

                    console.log($location.absUrl())
                    $location.path("user");
                    scope.registerStatus = true;
                    scope.clear();
           
                //    dataShareService.setLoggedUser(response.data);
                  //  console.log("success");
                }

                $scope.errorGetUser = function(){
                
                }

                
            }
        };
    }]);