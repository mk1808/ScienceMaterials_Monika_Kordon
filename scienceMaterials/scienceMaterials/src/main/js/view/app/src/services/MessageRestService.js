angular
    .module('materialsApp')
    .service('MessageRestService',['$http',  function ($http) {
        this.saveMessage = function (message, successCallback, errorCallback) {
      
            $http({
                method: 'POST',
                url: 'api/messages',
                data: message,
                headers: { 'Content-Type': 'application/json'}
            }).then(successCallback, errorCallback);
        }
       
        
      
    }])
