'use strict';

angular
    .module('materialsApp')
    .directive('addArticlePartsDirective', ['ArticleRestService', 'dragulaService','$timeout', function (articleRestService, dragulaService, $timeout) {

        return {
            restrict: 'E',
            templateUrl: '/src/components/addArticle/addArticleParts/addArticleParts.html',
            link: function ($scope, element, attrs) {
                var scope = $scope;
                $scope.elements = [
                    {type:'Tekst', id:1, data:{}}, 
                    {type:'Obraz', id:2, data:{}},
                    {type:'Plik', id:3, data:{}},
                    {type:'Link', id:4, data:{}},
                    {type:'Nagłówek', id:5, data:{size:"", text:""}},
                    {type:'Punktor', id:6, data:{}}
                ]
                $scope.parts = [];
                $scope.i=0;
                $scope.form;
                $scope.formfield;
             
                $scope.up=function(id){
                    if(id!=0){
                    let prev = scope.parts[id-1];
                    scope.parts[id-1]  = scope.parts[id];
                    scope.parts[id]=prev;   }
                }
                $scope.down=function(id){
                    if(id!=scope.parts.length-1){
                    let prev = scope.parts[id];
                    scope.parts[id]  = scope.parts[id+1];
                    scope.parts[id+1]=prev;   }
                }
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
                
                $scope.$on('bag-one.drop', function (e, el, target, source, sibling) {
                    if(!target){target=[]}
                   // el.addClass('over');
                   //debugger;
                    //scope.parts.push({type:el[0].innerHTML, id:scope.i++})
                    console.log("droppped", el)
                    console.log(scope.elements.length)
                    console.log(scope.parts.length)
                    console.log(scope.parts);
                    switch(el[0].innerHTML){
                        case 'Tekst':{scope.form={content:""}}
                        break;
                        case 'Punktor':{}
                        break;
                        case 'Nagłówek':{}
                        break;
                        case 'Obraz':{}
                        break;
                        case 'Link':{}
                        break;
                        case 'Plik':{}
                        break;
                    }
                })
         /*       $scope.$on('bag-one.drop-model', function (e, el, target, source, sibling) {
                    // el.addClass('over');
                    debugger;
                     
                     console.log("dropppedMODEL", el)
                     console.log(scope.elements.length)
                     console.log(scope.parts.length)
                 })
*/
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
    }]).controller('addArticlePartsCtrl',  ['$scope', 'dragulaService','$timeout',
    function ($scope, dragulaService, $timeout) {
        dragulaService.options($scope, 'bag-one', {
            copy: true,
            moves: function (el, container, handle) {
              return handle.className.indexOf ('noDrag')==-1;
            }
        });
    }
  ]);
