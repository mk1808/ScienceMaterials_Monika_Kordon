'use strict';

angular
    .module('materialsApp')
    .directive('textareaDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/basicFormElements/textarea/textarea.html',
            scope:{
                displayName: '@',
                controlName: '=',
            },
            link: function ($scope, element, attrs) {
            }
        };
    });