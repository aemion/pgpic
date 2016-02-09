'use strict';

/**
 * @ngdoc function
 * @name pgpicApp.directive:pgAddDocument
 * @description
 * # pgAddDocument
 * This directive contains the form to add a document
 */

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