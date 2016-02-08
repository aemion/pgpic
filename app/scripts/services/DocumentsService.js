'use strict';

angular.module('pgpicApp')
  .service('DocumentsService', function () {
    
    this.documents = [
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
    this.getDocuments = function() {
      return this.documents;
    };
  });
