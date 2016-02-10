'use strict';

angular.module('pgpicApp')
  .service('ReunionsService', function () {
    
    this.reunions = [
      {
        typeReunion: {
          nom: 'Reunion tuteur pédagogique'
        },
        debut: '2016-02-07T15:04:45', // add hour
        fin: '2016-02-07T15:48:49', // add hour
        partiesInteressees: [
          {
            nom: 'Emion',
            prenom: 'Alexandre'
          },
          {
            nom: 'Personne',
            prenom: 'Autre'
          }
        ]
      },
      {
        typeReunion: {
          nom: 'Reunion client',
          typeCR: {nom: 'CRC', approbation: true, diffusion: false}
        },
        debut: '2016-02-08T17:25:56', // add hour
        fin: '2016-02-08T17:35:12', // add hour
        partiesInteressees: [
          {
            nom: 'Emion',
            prenom: 'Alexandre'
          },
          {
            nom: 'Personne',
            prenom: 'Autre'
          }
        ]
      }
    ];

    this.types = [
      {
        nom: 'Réunion client',
        typeCR: {
          nom: 'CRC', 
          approbation: true, 
          diffusion: false
        }
      }, 
      {
        nom: 'Réunion tuteur pédagogique'
      }
    ]; 
    
    this.getReunions = function() {
      return this.reunions;
    };

    this.getTypes = function() {
      return this.types;
    };

  });
