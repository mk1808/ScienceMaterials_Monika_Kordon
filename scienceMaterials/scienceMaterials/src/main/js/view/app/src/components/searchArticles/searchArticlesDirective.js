'use strict';

angular
    .module('materialsApp')
    .directive('searchArticlesDirective', ['ArticleRestService', function (articleRestService) {
        return {
            restrict: 'E',
            templateUrl: '/src/components/searchArticles/searchArticles.html',
            link: function ($scope, element, attrs) {
              var scope = $scope;
              $scope.searchForm = { title: "", category: "" };
              $scope.options = [
                  {display:"Wybierz",value:""},
                  {display:"Biologia",value:"BIOLOGY"},
                  {display:"Informatyka",value:"IT"},
                  {display:"Chemia",value:"CHEMISTRY"},
                  {display:"Fizyka",value:"PHYSICS"}];
                  $scope.articles;
                  $scope.initialized = false;;
        
              $scope.success = function(response){
                  console.log(response);
                  scope.articles = response.data;
                  scope.initialized = true;

              }
              $scope.error = function(){
                console.log(response)
              }

              $scope.search = function(){
                  articleRestService.getArticlesByCategoryAndTitle(scope.searchForm.category, scope.searchForm.title, scope.success, scope.error);
              
              }

                
            }
        };
    }]);