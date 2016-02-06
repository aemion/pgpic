'use strict';

angular.module('pgpicApp')
  .directive('pgDocument', function() {
    return {
      scope : {
        document: '='
      },
      restrict: 'E',
      templateUrl: 'views/directives/pgDocument.html'
    };
  });