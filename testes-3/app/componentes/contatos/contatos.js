(function() {
  'use strict';


  angular.module('componentes.contatos', [])
  .controller('ContatoControlador', function(resolveContato) {

    var vm = this;

    //vm.contatos = Contatos.todos();
    vm.contatos = resolveContato;

  })
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // Paginas
   	  .when("/contatos/:id", {templateUrl: "app/componentes/contatos/contatos.html", controller: "ContatoControlador as cc",
      resolve: {
        resolveContato: function(Contatos, $stateParams) {
          return Contatos.localizarContatoPorId($stateParams.id);
        }
      }

    })

  	  .when("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"})

      // caso contrario 404
      .otherwise({redirectTo: "/404"});
  }]);

})();
