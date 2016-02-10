'use strict';

/**
 * @ngdoc function
 * @name pgpicApp.controller:DocumentsCtrl
 * @description
 * # DocumentsCtrl
 * Controller for the document part of pgpicApp
 */
angular.module('pgpicApp')
  .controller('DocumentsCtrl', ['$scope', 'DocumentsService', function ($scope, DocumentsService) {
    $scope.documents = DocumentsService.getDocuments();

    $scope.type = {approbation: false, diffusion: false};
    $scope.referentiel = {};

    $scope.referentiels = DocumentsService.getReferentiels();
    $scope.typesDocuments = DocumentsService.getTypes();
    $scope.partiesInteressees = [{nom: 'Emion', prenom: 'Alexandre'}, {nom: 'Personne', prenom: 'Autre'}];

    $scope.createType  = function() {
      DocumentsService.createType(this.type);
      $scope.type = {approbation: false, diffusion: false};
    };

    $scope.createReferentiel = function() {
      DocumentsService.createReferentiel(this.referentiel);
      $scope.referentiel = {};
    };

    $scope.test = function() {
      var newDoc = DocumentsService.getDocument('otherReference');
      newDoc.dateRedaction = '2016-02-05';
      DocumentsService.updateDocument('otherReference', newDoc);
    };

  }]);
