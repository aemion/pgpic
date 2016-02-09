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
    
    $scope.referentiels = [{nom:'Qualité'}, {nom:'Développement'}, {nom:'Spécifications'}];
    $scope.typesDocuments = [{nom: 'CRTP', approbation: false, diffusion: false}, {nom: 'CRC', approbation: true, diffusion: false}];
    $scope.partiesInteressees = [{nom: 'Emion', prenom: 'Alexandre'}, {nom: 'Personne', prenom: 'Autre'}];

  }]);
