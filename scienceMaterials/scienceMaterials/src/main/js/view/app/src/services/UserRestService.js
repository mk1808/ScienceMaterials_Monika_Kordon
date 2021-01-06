angular
    .module('materialsApp')
    .service('UserRestService', ['$http', function ($http) {
        this.register = function (user, successCallback, errorCallback) {
            $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
            $http({
                method: 'POST',
                url: 'api/users',
                data: user,
                headers: { 'Content-Type': 'application/json' }
            }).then(successCallback, errorCallback);
        }
        this.login = function (user, successCallback, errorCallback) {
            $http({
                method: 'POST',
                url: 'api/users/verify',
                data: user,
                headers: { 'Content-Type': 'application/json' }
            }).then(successCallback, errorCallback);
        }
        this.getArticlesforUser = function(id, successCallback, errorCallback){
            console.log("service")
            $http({
                method: 'GET',
                url: 'api/articles/user/'+id
              }).then(successCallback, errorCallback);
        }
    }])