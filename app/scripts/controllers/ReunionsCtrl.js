'use strict';

/**
 * @ngdoc function
 * @name pgpicApp.controller:ReunionsCtrl
 * @description
 * # DocumentsCtrl
 * Controller for the meeting part of pgpicApp
 */
angular.module('pgpicApp')
  .controller('ReunionsCtrl', ['$scope', function ($scope) {
    $scope.reunions = [
      {
        typeReunion: {
          nom: 'Reunion client'
        },
        debut: '2016-02-07T15:04:45', // add hour
        fin: '2016-02-07T15:48:49', // add hour
        partiesInteressees: [
          {
            nom: 'Emion',
            prenom: 'Alexandre'
          },
          {
            nom: 'Emion',
            prenom: 'Thibaut'
          }
        ]
      }
    ];

    $scope.debut = function(reunion) {
      return new Date(reunion.debut);
    };

    $scope.fin = function(reunion) {
      return new Date(reunion.fin);
    };

    $scope.duree = function(reunion) {
      return Math.round((this.fin(reunion) - this.debut(reunion))/60000);
    };


  }]);
