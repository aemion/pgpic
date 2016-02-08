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
            nom: 'Personne',
            prenom: 'Autre'
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

    $scope.start = function() {
      if(this.reunion === undefined || this.reunion.typeReunion === undefined) {
        throw 'Can\'t start meeting';
      }
      if(this.reunion.debut !== undefined) {
        throw 'Meeting already started';
      }
      this.reunion.debut = new Date();
    };

    $scope.stop = function() {
      if(this.reunion === undefined || this.reunion.debut === undefined) {
        throw 'Meeting not started yet';
      }
      if(this.reunion.fin !== undefined) {
        throw 'Meeting already finished';
      }
      this.reunion.fin = new Date();
      //this.reunion = {}; // save the reunion then destroy it
    };
    $scope.reunion =  {partiesInteressees:[]};
    $scope.partiesInteressees = [{nom: 'Emion', prenom: 'Alexandre'}, {nom: 'Personne', prenom: 'Autre'}];
    $scope.typesReunions = [{nom: 'Réunion client'}, {nom: 'Réunion tuteur pédagogique'}]; 
  }]);
