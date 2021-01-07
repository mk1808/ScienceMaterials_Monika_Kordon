angular
    .module('materialsApp')
    .service('ArticleRestService',['$http', 'DataShareService',  function ($http, dataShareService) {
        this.getArticles = function(successCallback, errorCallback){
            console.log("service")
            $http({
                method: 'GET',
                url: 'api/articles'
              }).then(successCallback, errorCallback);
        }
        this.getArticlesByCategory = function(categories, successCallback, errorCallback){
            debugger;
            console.log("service")
         //   let engCategories = dataShareService.toEngCategory(categories);
            $http({
                method: 'GET',
                url: 'api/articles/categories?categories='+categories
              }).then(successCallback, errorCallback);
        }
        this.getArticlesByCategoryAndTitle = function(categories, title, successCallback, errorCallback){
            debugger;
            console.log("service")
         //   let engCategories = dataShareService.toEngCategory(categories);
            $http({
                method: 'GET',
                url: 'api/articles/titleCategory?categories='+categories.trim()+'&title='+title.trim()
              }).then(successCallback, errorCallback);
        }
        this.getArticleById = function(id, successCallback, errorCallback){
            console.log("service")
         //   let engCategories = dataShareService.toEngCategory(categories);
            $http({
                method: 'GET',
                url: 'api/articles/'+id
              }).then(successCallback, errorCallback);
        }
        this.getPartsByArticleId = function(id, successCallback, errorCallback){
         //   let engCategories = dataShareService.toEngCategory(categories);
            $http({
                method: 'GET',
                url: 'api/articles/parts/'+id
              }).then(successCallback, errorCallback);
        }
    }])

    //titleCategory?title=lore&categories=