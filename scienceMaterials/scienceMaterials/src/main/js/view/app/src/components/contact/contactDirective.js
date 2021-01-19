'use strict';

angular
    .module('materialsApp')
    .directive('contactDirective',['MessageRestService', 'DataShareService', '$location', function (messageRestService, dataShareService, $location) {
        return {
            restrict: 'E',
            templateUrl: '/src/components/contact/contact.html',
            link: function ($scope, element, attrs) {
                //  debugger;
                var scope = $scope;
                $scope.sent = false;
                $scope.contactForm = { mail: "", name: "", message:"" };
                $scope.loginStatus;
                $scope.loggedUser;
                $scope.submit = function () {
                  
                        messageRestService.saveMessage(scope.contactForm, scope.success, scope.error)
                    }
  
                $scope.clear = function () {
                    scope.contactForm.mail = "";
                    scope.contactForm.name = "";
                    scope.contactForm.message="";
                }
                $scope.success = function(response){
                   scope.sent=true;
                    scope.clear();
                    console.log(response);
                


                }
                $scope.error = function(){
                
                    console.log("err");
                }

                
            }
        };
    }]);