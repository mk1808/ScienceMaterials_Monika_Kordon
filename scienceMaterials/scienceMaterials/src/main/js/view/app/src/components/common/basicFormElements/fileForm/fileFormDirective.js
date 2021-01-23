'use strict';

angular
    .module('materialsApp')
    .directive('fileFormDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/basicFormElements/fileForm/fileForm.html',
            scope: {
                displayName: '@',
                controlName: '='
            },
            link: function ($scope, element, attrs) {
                var scope = $scope;
                $scope.filename=""
                $scope.selectFile = function (event) {
                    debugger
                    var files = event.target.files;
                    $scope.controlName.file = files
                    if (files.length > 0) {
                        scope.filename = files[0].name;
                    } else {
                        scope.filename = "restauracja Habadzibadło";
                    }
                    $scope.$apply();
                };


            }
        };
    });