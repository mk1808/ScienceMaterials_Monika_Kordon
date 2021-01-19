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
                case "Geografia": return "GEOGRAPHY";
                case "Fizyka":return "PHYSICS"
            }
        }

        this.partTypeToPol = function(type){
            switch(type){

                case "f": return "Plik";
                case "h": return "Nagłówek";
                case "l":return "Link";
                case "pi":return "Obraz";
                case "po":return "Punktor";
                case "t":return "Tekst";
            
            }
        }

        this.partTypeToEng = function(type){
            switch(type){

                case "Plik": return "f";
                case "Nagłówek": return "h";
                case "Link":return "l";
                case "Obraz":return "pi";
                case "Punktor":return "po";
                case "Tekst":return "t";
            
            }
        }


        this.toPolCategory = function(category){
            switch(category){
                case "BIOLOGY": return "Biologia"
                case "IT": return  "Informatyka";
                case "CHEMISTRY": return "Chemia";
                case "GEOGRAPHY": return "Geografia";
                case "PHYSICS":return "Fizyka"
            }
        }
    }])