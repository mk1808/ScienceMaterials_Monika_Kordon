'use strict';

angular
    .module('materialsApp')
    .directive('searchArticlesDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/searchArticles/searchArticles.html',
            link: function ($scope, element, attrs) {
              
                
            }
        };
    });