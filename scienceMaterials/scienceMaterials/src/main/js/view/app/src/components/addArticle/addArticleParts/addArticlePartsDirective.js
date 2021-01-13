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
                    {type:'Tekst', id:1, data:{content:""}}, 
                    {type:'Obraz', id:2, data:{source:"", description:""}},
                    {type:'Plik', id:3, data:{source:[], description:"", name:""}},
                    {type:'Link', id:4, data:{source:"", description:"", text:""}},
                    {type:'Nagłówek', id:5, data:{size:"", text:"", options:[
                        {display:"Mały",value:3},
                        {display:"Średni",value:2},
                        {display:"Duży",value:1}
                    ]}},
                    {type:'Punktor', id:6, data:{content:""}}
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
                        case 'Tekst':{}
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
                    debugger;
                    var body=[];
                  let i=0;
                    for (let part of scope.parts){
                        let newPart=part.data;
                      //  newPart.type = part.type;
                        
                      newPart.type="t";
                      newPart.articleId=11;
                        newPart.orderNo=i;
                        body.push(newPart);
                        i++;
                    }
                    articleRestService.saveArticleParts( body, scope.success, scope.error)
                    console.log(scope.parts)
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