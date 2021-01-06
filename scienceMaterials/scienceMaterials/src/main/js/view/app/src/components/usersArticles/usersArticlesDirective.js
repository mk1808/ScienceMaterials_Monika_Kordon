'use strict';

angular
    .module('materialsApp')
    .directive('usersArticlesDirective',['DataShareService','UserRestService', function (dataShareService, userRestService) {
        return {
            restrict: 'E',
            templateUrl: '/src/components/usersArticles/usersArticles.html',
            link: function ($scope, element, attrs) {
               // debugger;
                $scope.user;
                $scope.articles;
                $scope.initialized=false;
                var scope = $scope;
                $scope.init = function(){
                    scope.getUserInfo();
                    setTimeout(function(){
                         scope.getArticlesForUser();
                    }, 3000)
                   
                    console.log(scope.articles)
                }
            $scope.getUserInfo = function(){
                scope.user = dataShareService.getLoggedUser();
            }
            $scope.getArticlesForUser = function(){
                scope.articles = userRestService.getArticlesforUser(17, scope.success, scope.error)//scope.user.id, scope.success, scope.error)
            }
            $scope.success = function(response){
                console.log(response) 
                scope.initialized = true;
            }
            $scope.error = function(){
               console.log(response)
            }

            $scope.init();

                
            }
        };
    }]);