angular
    .module('materialsApp')
    .service('ArticleRestService',['$http',  function ($http) {
        this.getArticles = function(id, successCallback, errorCallback){
            console.log("service")
            $http({
                method: 'GET',
                url: 'api/articles'
              }).then(successCallback, errorCallback);
        }
    }])