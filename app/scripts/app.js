'use strict';

/**
 * @ngdoc overview
 * @name pgpicApp
 * @description
 * # pgpicApp
 *
 * Main module of the application.
 */
angular
  .module('pgpicApp', [
    'ngRoute'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/documents', {
        templateUrl: 'views/documents.html',
        controller: 'DocumentsCtrl',
        controllerAs: 'documents'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
