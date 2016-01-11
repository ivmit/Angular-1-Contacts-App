'use strict';

/**
 * @ngdoc overview
 * @name ngContactsApp
 * @description
 * # ngContactsApp
 *
 * Main module of the application.
 */
angular
  .module('ngContactsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'abimaelmartell.SweetAlert'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/create', {
        templateUrl: 'views/newcontact.html',
        controller: 'NewcontactCtrl',
        controllerAs: 'newcontact'
      })
      .when('/edit', {
        templateUrl: 'views/newcontact.html',
        controller: 'NewcontactCtrl',
        controllerAs: 'newcontact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
