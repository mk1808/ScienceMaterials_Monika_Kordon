'use strict';

angular
    .module('materialsApp')
    .directive('fileDirective', ['ArticleRestService', function (articleRestService) {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/file/file.html',
            scope:{
                file: '=',
            },
            link: function ($scope, element, attrs) {
                var scope=$scope;
                $scope.PATH = 'http://localhost:8080/api/articles/files/'+scope.file.source;
                console.log($scope.file)
                
                $scope.download = function(){
                    debugger;
                    articleRestService.getFile(scope.file.source, scope.success, scope.error);

                }

                $scope.success = function(response){
                    console.log(response) 
                  
                    
                }
                $scope.error = function(response){
                   console.log(response)
                }
            }
        };
    }]
    );