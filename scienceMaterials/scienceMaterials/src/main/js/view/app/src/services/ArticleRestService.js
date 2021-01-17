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
        this.saveArticle = function (article, successCallback, errorCallback) {
            let token = localStorage.getItem("token");
            $http({
                method: 'POST',
                url: 'api/articles',
                data: article,
                headers: { 'Content-Type': 'application/json',
                'Authorization': token }
            }).then(successCallback, errorCallback);
        }
        this.saveArticleParts = function (parts, successCallback, errorCallback) {
            let token = localStorage.getItem("token");
            $http({
                method: 'POST',
                url: 'api/articles/parts',
                data: parts,
                headers: { 'Content-Type': 'application/json',
                'Authorization': token  }
            }).then(successCallback, errorCallback);
        }
        this.saveFiles = function(files, successCallback, errorCallback){
           debugger;
           let token = localStorage.getItem("token");
            let formData=new FormData();
         
            for(let file of files){
                 formData.append("files", file.data.source.file[0]);  
            }
            
            $http.post('api/articles/files', formData, 
            
            {
                headers: { 'Content-Type': undefined ,
                'Authorization': token },
                transformRequest: angular.identity
            }).then(successCallback, errorCallback);
        }
        this.getFile = function(fileName, successCallback, errorCallback){
            //   let engCategories = dataShareService.toEngCategory(categories);
               $http({
                   method: 'GET',
                   url: 'api/articles/files/'+fileName
                 }).then(successCallback, errorCallback);
           }

           this.editArticle = function (id, article, successCallback, errorCallback) {
            let token = localStorage.getItem("token");
            $http({
                method: 'PUT',
                url: 'api/articles/'+id,
                data: article,
                headers: { 'Content-Type': 'application/json',
                'Authorization': token }
            }).then(successCallback, errorCallback);
        }
            
            
           this.deleteArticle = function (id, successCallback, errorCallback) {
            let token = localStorage.getItem("token");
            $http({
                method: 'DELETE',
                url: 'api/articles/'+id,
                headers: { 'Content-Type': 'application/json',
                'Authorization': token }
            }).then(successCallback, errorCallback);
        }
        
       // http://localhost:8080/api/articles/parts
    }])

    //titleCategory?title=lore&categories=