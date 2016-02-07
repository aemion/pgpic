'use strict';

angular.module('pgpicApp')
  .directive('pgAddDocument', function() {
    return {
      scope : {
        referentiels: '=',
        partiesInteressees: '=',
        typesDocuments: '='
      },
      restrict: 'EA',
      templateUrl: 'views/directives/pgAddDocument.html',
      
    };
  });