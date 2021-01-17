'use strict';

angular
    .module('materialsApp')
    .directive('usersArticlesDirective', ['DataShareService', 'UserRestService', 'ArticleRestService', '$location',
     function (dataShareService, userRestService, articleRestService, $location) {


        return {
            restrict: 'E',
            templateUrl: '/src/components/usersArticles/usersArticles.html',
            link: function ($scope, element, attrs) {
                // debugger;
                $scope.user;
                $scope.articles;
                $scope.initialized = false;
                $scope.articleToRemoveId;
                $scope.articleToRemoveTitle;
                var scope = $scope;
                $scope.init = function () {
                    scope.getUserInfo();
                    scope.getArticlesForUser();
                    console.log(scope.articles)
                }
                $scope.getUserInfo = function () {
                    //scope.user = dataShareService.getLoggedUser();
                    scope.user = localStorage.getItem("userId");
                }
                $scope.getArticlesForUser = function () {
                    userRestService.getArticlesforUser(scope.user, scope.success, scope.error)//scope.user.id, scope.success, scope.error)
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
                 scope.articleToRemoveId = id;
                        $(".modal").addClass("is-active");  
                   
                } 
                $scope.closeDialog = function(){
                    $(".modal").removeClass("is-active");
                }
                $scope.successDelete = function (response) {
                    console.log(response);
                    $(".modal").removeClass("is-active");
                    scope.init();
                   
                }
                $scope.errorDelete = function () {
                    console.log(response)
                }
                $scope.confirmDelete = function(){
                    articleRestService.deleteArticle(scope.articleToRemoveId, scope.successDelete, scope.errorDelete)
                }
                $scope.init();
               
                   /*   $(".modal-close").click(function() {
                         $(".modal").removeClass("is-active");
                      });
                      
                      $("#closebtn").click(function() {
                         $(".modal").removeClass("is-active");
                      });                 
*/
            }
        };
    }]);