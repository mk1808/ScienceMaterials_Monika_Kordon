'use strict';

angular
    .module('materialsApp')
    .directive('fileFormDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/basicFormElements/fileForm/fileForm.html',
            scope:{
                displayName: '@',
                controlName: '='
            },
            link: function ($scope, element, attrs) {
                console.log($scope)
                const fileInput = document.querySelector('#fileInput input[type=file]');
  fileInput.onchange = () => {
      debugger;
    if (fileInput.files.length > 0) {
      const fileName = document.querySelector('#fileInput .file-name');
      fileName.textContent = fileInput.files[0].name;
    }
  }
            }
        };
    });