'use strict';

/**
 * @ngdoc function
 * @name pgpicApp.directive:pgDocumentLine
 * @description
 * # pgDocumentLine
 * This directive is one table line for one document. This line indicates the state of the document procedure.
 */

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

        $scope.redact = function(document) {
          if(this.redactionChecked === true) {
            document.dateRedaction = new Date();
          } else {
            document.dateRedaction = undefined;
          }
        };

        $scope.verify = function(document) {
          if(this.verificationChecked === true) {
            document.dateVerification = new Date();
          } else {
            document.dateVerification = undefined;
          }
        };

        $scope.validate = function(document) {
          if(this.validationChecked === true) {
            document.dateValidation = new Date();
          } else {
            document.dateValidation = undefined;
          }
        };
      }
    };
  });
