'use strict';

angular
    .module('materialsApp')
    .directive('textareaDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/src/components/common/basicFormElements/textarea/textarea.html',
            scope:{
                file: '=',
            },
            link: function ($scope, element, attrs) {
            }
        };
    });