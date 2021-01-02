'use strict';

angular
    .module('materialsApp')
    .directive('singleArticleDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/singleArticle/singleArticle.html',
            link: function ($scope, element, attrs) {
                $scope.headerSize = "1";
                $scope.pictureProperties = {
                    name:"Na obrazie przedsatwiono krajobraz",
                    type:"Rys.",
                    no:1
                }
                $scope.points = ["Lorem ipsum 1;", "Lorem ipsum 2;", "Lorem ipsum 3;"] 
                console.log($scope)
            }
        };
    });