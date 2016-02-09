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
    'ngRoute',
    'ui.bootstrap',
    'checklist-model'
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
      .when('/reunions', {
        templateUrl: 'views/reunions.html',
        controller: 'ReunionsCtrl',
        controllerAs: 'reunions'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
