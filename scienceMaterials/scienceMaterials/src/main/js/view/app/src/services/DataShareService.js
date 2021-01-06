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

        this.toEngCategory = function(category){
            switch(category){
                case "Biologia": return "BIOLOGY";
                case  "Informatyka": return "IT";
                case "Chemia": return "CHEMISTRY";
                case "Fizyka":return "PHYSICS"
            }
        }

        this.toPolCategory = function(){

        }
    }])