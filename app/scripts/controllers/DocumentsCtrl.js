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
        name: 'Doc1'
      },
      {
        name: 'Doc2'
      },
      {
        name: 'Doc3'
      }
    ];
  }]);
