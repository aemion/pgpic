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

    this.types = [
      {
        nom: 'CRTP', 
        approbation: false, 
        diffusion: false
      }, 
      {
        nom: 'CRC', 
        approbation: true, 
        diffusion: false
      }
    ];

    this.getDocuments = function() {
      return this.documents;
    };
    
    this.getDocument = function(referenceDocument) {
      for (var i = 0; i < this.documents.length;i++) {
        if(this.documents[i].reference === referenceDocument) {
          return this.documents[i];
        }
      }
    };

    this.getTypes = function() {
        return this.types;
    }

  });