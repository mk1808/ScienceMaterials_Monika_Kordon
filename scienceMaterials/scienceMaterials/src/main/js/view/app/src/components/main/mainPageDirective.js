'use strict';

angular
    .module('materialsApp')
    .directive('mainPageDirective', ['ArticleRestService', function (articleRestService) {
        return {
            restrict: 'E',
            templateUrl: '/src/components/main/mainPage.html',
            link: function ($scope, element, attrs) {
                var scope=$scope;
                $scope.articles;
                $scope.initialized = false;;
                $scope.init = function(){
                    debugger;
                    articleRestService.getArticles(scope.success, scope.error)
                }
                $scope.success = function(response){
                    console.log(response) 
                    scope.articles = response.data;
                    scope.initialized = true;
                    
                }
                $scope.error = function(response){
                   console.log(response)
                }
                $scope.init();
            }
        };
    }]);
    /*
    .directive('mainPageDirective',function(){
    return {
        restrict: 'E',         
        scope: {
            //@ reads the attribute value, = provides two-way binding, & works with functions
            title: '@'         },

        templateUrl: 'mainPage.html',
     //   controller: controllerFunction, //Embed a custom controller in the directive
        link: function ($scope, element, attrs) { 

        } }
    }
        );*/

 