'use strict';


angular.module('firstApplication')
  .controller('LoginController', function ($scope, $q, UserResource, $log, $cookieStore, $location) {
      var iniciarSesion = $q.defer();

      iniciarSesion.promise.then(setUserSession);

      function setUserSession(usr) {
        
        $scope.usrConectado = {};
        $scope.usrConectado.nombre = usr.name;
        $scope.usrConectado.puesto = usr.profile;
        $scope.usrConectado.islogged = true;
        $log.info($scope.usrConectado);
        $cookieStore.put('islogged', true);
        $cookieStore.put('user', usr);
        $location.path('/home');
      };

      $scope.login = function() {
        $log.info("Try to login "+ $scope.usuario.nombreUsuario);
        var usr = UserResource.login.sesion({nombreUsuario: $scope.usuario.nombreUsuario, clave: $scope.usuario.clave})
          .$promise.then(function(usr) {
            iniciarSesion.resolve(usr);
          });

      };
  });
