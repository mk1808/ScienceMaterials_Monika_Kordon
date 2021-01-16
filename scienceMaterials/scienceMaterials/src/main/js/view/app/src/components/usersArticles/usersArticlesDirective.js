'use strict';

angular
    .module('materialsApp')
    .directive('usersArticlesDirective', ['DataShareService', 'UserRestService', '$location', function (dataShareService, userRestService, $location) {


        return {
            restrict: 'E',
            templateUrl: '/src/components/usersArticles/usersArticles.html',
            link: function ($scope, element, attrs) {
                // debugger;
                $scope.user;
                $scope.articles;
                $scope.initialized = false;
                $scope.articleToRemoveTitle;
                var scope = $scope;
                $scope.init = function () {
                    scope.getUserInfo();
                    scope.getArticlesForUser();
                    console.log(scope.articles)
                }
                $scope.getUserInfo = function () {
                    scope.user = dataShareService.getLoggedUser();
                }
                $scope.getArticlesForUser = function () {
                    userRestService.getArticlesforUser(17, scope.success, scope.error)//scope.user.id, scope.success, scope.error)
                }
                $scope.success = function (response) {
                    console.log(response)
                   // scope.articles=[]
                     scope.articles = response.data;
                    scope.initialized = true;
                }
                $scope.error = function () {
                    console.log(response)
                }
                $scope.addArticle=function(){
                    $location.path('article/new')
                }

                $scope.edit = function(id){
                    $location.path('article/editing/'+id);
                } 
                
                $scope.remove = function(id, title){
                 //   debugger;
                 scope.articleToRemoveTitle = title;
                        $(".modal").addClass("is-active");  
                   
              
                } 
                $scope.init();
     
                      $(".modal-close").click(function() {
                         $(".modal").removeClass("is-active");
                      });
                      
                      $("#closebtn").click(function() {
                         $(".modal").removeClass("is-active");
                      });                 

            }
        };
    }]);