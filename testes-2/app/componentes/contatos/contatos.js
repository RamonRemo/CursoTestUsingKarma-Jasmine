(function() {
  'use strict';


  angular.module('componentes.contatos', [])
  .controller('ContatoControlador', function(Contatos) {

    var vm = this;

    vm.contatos = Contatos.todos();

    console.log("Contatos", vm.contatos);

  })
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      // Principal
      .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
      // Paginas
   	  .when("/contatos", {templateUrl: "app/componentes/contatos/contatos.html", controller: "ContatoControlador as cc"})

  	  .when("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"})

      // caso contrario 404
      .otherwise({redirectTo: "/404"});
  }]);

})();
