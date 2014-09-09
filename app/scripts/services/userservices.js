'use strict';

angular.module('firstApplication')
  .factory('UserResource', function($resource) {
    var factory = {
      login: $resource('http://127.0.0.1:8887/app/mocks/loginok.json', {}, {
        sesion: {method:'GET', params: {nombreUsuario: '@nombreUsuario', clave: '@clave'}}
      })
    };
    return factory;
  });
