'use strict';

angular.module('firstApplication', ['ngRoute', 'ngAnimate', 'ngResource',  'ngCookies'])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.tpl',
        controller: 'LoginController'
      })
      .when('/home', {
        templateUrl: 'views/home.tpl',
        controller: 'MainController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
