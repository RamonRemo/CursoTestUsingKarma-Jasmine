/**
 * AngularJS - Jasmine + Karma
 * @author Paulo Eduardo
 */
'use strict';
/**
* Modulo do App
*/
var app = angular.module('meuApp', ['ngAnimate', 'ngTouch', 'ngRoute', 'ngMessages', 'api.contatos', 'componentes.contatos', 'filtros.data']);

/**
 * Configurando as rotas para  modulo
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Principal
    .when("/", {templateUrl: "app/componentes/contatos/contatos.html", controller: "ContatoControlador"})

	  .when("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"})

    // caso contrario 404
    .otherwise({redirectTo: "/404"});
}]);


/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {

});

app.controller('HomeCtrl', ['$scope', '$http', '$window', '$q', function ($scope, $http, $window, $q) {

}]);