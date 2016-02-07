'use strict';

/**
 * @ngdoc function
 * @name pgpicApp.controller:DocumentsCtrl
 * @description
 * # DocumentsCtrl
 * Controller for the document part of pgpicApp
 */
angular.module('pgpicApp')
  .controller('DocumentsCtrl', ['$scope', function ($scope) {
    $scope.documents = [
      {
        type: {
          nom: 'nomType',
          approbation: true,
          diffusion: true
        },
        referentiel: {
          nom: 'nomReferentiel'
        },
        reference: 'reference',
        redacteur: {
          nom: 'nomPartie',
          prenom: 'prenomPartie'
        },
        dateRedaction: '2016-02-02',
        verificateur: {
          nom: 'nomPartie',
          prenom: 'prenomPartie'
        },
        dateVerification: '2016-02-02',
        validateur: {
          nom: 'nomPartie',
          prenom: 'prenomPartie'
        },
        dateValidation: '2016-02-02',
        approbateur: {
          nom: 'nomPartie',
          prenom: 'prenomPartie'
        },
        dateApprobation: '2016-02-07',
        dateDiffusion: '2016-02-07',
        archivage: true
      }
    ];
    
    $scope.referentiels = [{nom:'Qualité'}, {nom:'Développement'}, {nom:'Spécifications'}];
    $scope.typesDocuments = [{nom: 'CRTP', approbation: false, diffusion: false}, {nom: 'CRC', approbation: true, diffusion: false}];
    $scope.partiesInteressees = [{nom: 'Emion', prenom: 'Alexandre'}, {nom: 'Personne', prenom: 'Autre'}];

  }]);
