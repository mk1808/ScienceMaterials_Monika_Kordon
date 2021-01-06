angular
    .module('materialsApp')
    .service('DataShareService',[  function () {
        var loggedUser;

        this.setLoggedUser=function(user){
            loggedUser = user;
        }

        this.getLoggedUser = function(){
            return loggedUser;
        }
    }])