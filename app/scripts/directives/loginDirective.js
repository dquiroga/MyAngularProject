angular.module('firstApplication')
  .directive('login', function(){
    return{
        restrict: 'E',
        templateUrl: 'templates/login.tpl'
        }
    });
