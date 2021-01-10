'use strict';

angular
    .module('materialsApp')
    .directive('addArticlePartsDirective', ['ArticleRestService', 'dragulaService','$timeout', function (articleRestService, dragulaService, $timeout) {

        return {
            restrict: 'E',
            templateUrl: '/src/components/addArticle/addArticleParts/addArticleParts.html',
            link: function ($scope, element, attrs) {
                var scope = $scope;
                //  debugger;
                /*dragulaService.options($scope, 'bag-one', {
                    copy: true
                })*/
                //dragulaService.setOptions('bag-one', {copy: true})
                /*dragulaService.options($scope, 'bag-one', {
                    copy: true
                  });
                
                */

                $scope.$on('bag-one.over', function (e, el) {
                    el.addClass('over');
                    console.log("1over")
                })
                $scope.$on('bag-one.out', function (e, el) {
                    el.removeClass('over');
                    console.log("1out")
                });
                $scope.$on('bag-two.over', function (e, el) {
                    el.addClass('over');
                    console.log("2over")
                })
                $scope.$on('bag-two.out', function (e, el) {
                    el.removeClass('over');
                    console.log("2out")
                });

                $scope.newArticleForm = {

                }
                $scope.submit = function () {

                }
                $scope.success = function () {
                    console.log("success")
                }
                $scope.error = function () {
                    console.log("error")
                }


            }
        };
    }]).controller('addArticlePartsCtrl', ['$scope', 'dragulaService',
    function ($scope, dragulaService) {
      dragulaService.options($scope, 'bag-one', {
        copy: true
      });
    }
  ]);;