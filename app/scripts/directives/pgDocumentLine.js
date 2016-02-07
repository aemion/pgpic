'use strict';

angular.module('pgpicApp')
  .directive('pgDocumentLine', function() {
    return {
      scope : {
        document: '='
      },
      restrict: 'A',
      templateUrl: 'views/directives/pgDocumentLine.html',
      link: function($scope) {
        $scope.isPassed = function(date) {
          return (new Date(date) < new Date());
        };
        $scope.isRedacted = function(document) {
          return this.isPassed(document.dateRedaction);
        };
        $scope.isVerificated = function(document) {
          return this.isPassed(document.dateVerification);
        };
        $scope.isValidated = function(document) {
          return this.isPassed(document.dateValidation);
        };
        $scope.isApproved = function(document) {
          return this.isPassed(document.dateApprobation);
        };
        $scope.isSpreaded = function(document) {
          return this.isPassed(document.dateDiffusion);
        };
        $scope.isArchived = function(document) {
          return document.archivage;
        };
      }
    };
  });