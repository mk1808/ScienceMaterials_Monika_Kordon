'use strict';

angular
    .module('materialsApp')
    .directive('addArticleDirective',['ArticleRestService','DataShareService', '$location','$routeParams', function (articleRestService, dataShareService, $location, $routeParams) {
        return {
            restrict: 'E',
            templateUrl: '/src/components/addArticle/addArticle.html',
            link: function ($scope, element, attrs) {
                //debugger;
                var scope = $scope;
                var createdArticleId;
                $scope.userId;
                $scope.editing=false;
                $scope.editingArticleId;
                $scope.title="Tworzenie nowego artykułu";
                $scope.editingArticle;
                $scope.newArticleForm={
                    title: "", summary: "", categories: ""
                }
                $scope.getArticleSuccess = function(response){
                    debugger;
                  
                    scope.editingArticle = response.data;
                    scope.title=`Edycja artykułu ${scope.editingArticle.title}`;
                    console.log(response.data);
                    
                    scope.newArticleForm.title=scope.editingArticle.title;
                    scope.newArticleForm.summary=scope.editingArticle.summary;
                    scope.newArticleForm.categories=scope.editingArticle.categories[0]; //dataShareService.toPolCategory(scope.editingArticle.categories[0]);
                }
                $scope.getArticleError = function(){
                    
                }
                $scope.init=function(){
                  //  debugger;
                  scope.userId = localStorage.getItem("userId");
                    if($routeParams.id){
                    scope.editing=true;
                    
                    scope.editingArticleId = $routeParams.id;
                    articleRestService.getArticleById(scope.editingArticleId, scope.getArticleSuccess, scope.getArticleError); // (scope.articleId, scope.success, scope.error);
                  
                //    articleRestService.editArticle(   scope.editingArticleId, scope.newArticleForm, scope.success, scope.error)
                    }
                }
                $scope.init();
              
               
                $scope.submit = function () {
                    debugger;
                    
                        console.log(scope.registerForm);
                        let article = scope.newArticleForm;
                        let category = article.categories;
                        scope.newArticleForm.categories = [];
                        scope.newArticleForm.categories.push(category);
                        scope.newArticleForm.usersId=scope.userId;
                        if(scope.editing){
                            articleRestService.editArticle(scope.editingArticleId, scope.newArticleForm, scope.success, scope.error)
                        }
                        else{
                            articleRestService.saveArticle( scope.newArticleForm, scope.success, scope.error)
                        }
                     
                 

                }
                $scope.success=function(response){
                    scope.createdArticleId = response.data.id;
                    if(scope.editing){
                        $location.path(`article/editing/parts/${scope.createdArticleId}`);
                    }else {
                        $location.path(`article/new/parts/${scope.createdArticleId}`);
                    
                    }
                    console.log(response)
                }
                $scope.error=function(){
                    console.log("error")
                }
            
                $scope.searchForm = { title: "", category: "" };
                $scope.options = [
                    {display:"Wybierz",value:""},
                    {display:"Biologia",value:"BIOLOGY"},
                    {display:"Informatyka",value:"IT"},
                    {display:"Chemia",value:"CHEMISTRY"},
                    {display:"Geografia",value:"GEOGRAPHY"},
                    {display:"Fizyka",value:"PHYSICS"}];
                 
                articleRestService.getArticles(1, $scope.success, $scope.error);
                $scope.header= {size:"1", text:"Nagłówek 1"}
                $scope.header1= {size:"2", text:"Nagłówek 2"}
                $scope.header2= {size:"3", text:"Nagłówek 3"}
                $scope.picture = {
                    name:"Na obrazie przedsatwiono krajobraz",
                    type:"Rys.",
                    no:1,
                    source:"https://fujifilm-x.com/wp-content/uploads/2019/08/x-t30_sample-images02.jpg"
                }
                $scope.points = ["Lorem ipsum 1;", "Lorem ipsum 2;", "Lorem ipsum 3;"] 
                $scope.link = {
                    source:"https://gmail.com", 
                    text:"Link do strony ABC", 
                    description:`Praesent viverra nisi ut mauris congue, vitae dictum nisi suscipit. Phasellus tristique ante elit.
                    Aliquam pulvinar, neque at tincidunt mollis, massa sapien aliquam lectus, in aliquet sapien metus non
                    ipsum. Pellentesque non dolor sit amet ligula sagittis consequat a ac`, 
                    no:1};

                $scope.text=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in vestibulum ante, quis pharetra dui. Integer
                elit sapien, rhoncus ac tincidunt vel, consectetur et dolor. Quisque nec mauris sapien. Vestibulum non auctor
                metus, eget eleifend neque. Proin a elit a eros rhoncus scelerisque. Donec aliquet ipsum sit amet pulvinar
                lacinia. Proin imperdiet enim nec enim facilisis, tempor accumsan ante euismod. Duis et quam vulputate, luctus
                nisl at, varius felis.
            
                Ut et fringilla dolor. Donec elementum lectus quis lectus posuere euismod in quis quam. Integer ornare nulla
                sit amet placerat auctor. In luctus nunc in ligula porta suscipit. Cras a risus ipsum. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam tempor rutrum mi ut ullamcorper.
                Mauris eu dui ornare, interdum leo at, commodo massa. Fusce ac ipsum id turpis ullamcorper consequat mollis
                eget libero. Nunc euismod dictum ligula, sit amet rutrum elit aliquet non. Pellentesque tristique pharetra
                finibus. Phasellus sed feugiat nibh, at ultricies diam. Nunc tincidunt feugiat risus. Sed malesuada blandit
                porta.
            
                Integer auctor arcu nisi, quis porttitor nisi imperdiet et. Proin vulputate, nisi ac dignissim iaculis, urna
                neque vulputate tellus, sed ultrices lacus odio vel libero. Pellentesque volutpat consectetur tellus, a
                scelerisque ex pretium nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Nunc turpis erat, porttitor non diam eget, tempus faucibus justo. Phasellus porttitor tellus non
                lacinia venenatis. Vestibulum aliquet sem at lacus gravida semper. Sed suscipit nisi a elementum maximus. Sed
                porta scelerisque consequat. Suspendisse pharetra justo libero, pellentesque dignissim elit auctor sed.
                Quisque imperdiet luctus mollis. Aenean aliquam fringilla accumsan. Praesent viverra nisi ut mauris congue,
                vitae dictum nisi suscipit.
            
                Phasellus tristique ante elit. Aliquam pulvinar, neque at tincidunt mollis, massa sapien aliquam lectus, in
                aliquet sapien metus non ipsum. Pellentesque non dolor sit amet ligula sagittis consequat a ac nunc. Nam id
                lobortis nulla, eget placerat lorem. Duis eu massa in orci condimentum posuere. Quisque arcu mauris, cursus
                eget justo sed, ornare porttitor diam. Praesent auctor mi id libero dictum condimentum.
            
                Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse nibh orci, vestibulum ac tellus
                eget, commodo lobortis justo. Nam erat eros, accumsan at justo vitae, posuere pretium metus. Nullam dui
                lectus, porttitor eu dui at, scelerisque dapibus dolor. Duis condimentum cursus risus, et sollicitudin urna
                suscipit sit amet. Vestibulum lobortis dignissim massa, quis euismod nisl. Curabitur elementum dolor in orci
                vestibulum, at lacinia nibh commodo. Sed pellentesque nisl orci. Duis eget consequat urna. Proin quis dolor
                aliquet, hendrerit erat id, lacinia ipsum. Nam purus ipsum, egestas eu neque feugiat, cursus scelerisque est.
                Aenean imperdiet, quam sit amet egestas iaculis, tellus neque viverra nibh, eu scelerisque libero felis ac
                quam.`;
                $scope.file={
                    source:"https://gmail.com", 
                    name:"materialy", 
                    extension:"pdf",
                    description:`Praesent viverra nisi ut mauris congue, vitae dictum nisi suscipit. Phasellus tristique ante elit.
                    Aliquam pulvinar, neque at tincidunt mollis, massa sapien aliquam lectus, in aliquet sapien metus non
                    ipsum. Pellentesque non dolor sit amet ligula sagittis consequat a ac`, 
                    no:1};
                
            }
        };
    }]);