(function() {
  'use strict';

angular.module('componentes.contatos', [])
  .controller('ContatoControlador', function(resolveContato, Social) {

    var vm = this;
    var API = 'http://localhost:3000/social';

  vm.contato = resolveContato;

  Social.localizarPorNome(API + '?nome_like=' + vm.contato.social.nome)
        .then(function(resultado) {

          if(resultado.id === undefined) {
              vm.contato.social.id = undefined;
              vm.contato.social.erro = 'Nao Encontrado';
          } else {
            vm.contato.social.id = resultado.id;
            vm.contato.social.url = resultado.url;
            vm.contato.social.icone = resultado.icone;
        }
     }).catch(function(resultado) {
        // Add the default placeholder image
        vm.contato.social.erro = 'Nao Encontrado';
      });

  })
  .config(function ($stateProvider) {

      $stateProvider
      // Paginas
     	  .state('contato',
          {
            url: '/contato/:id'
          , templateUrl: 'app/componentes/contatos/contato.html'
          , controller: 'ContatoControlador as cc',

          resolve: {
            resolveContato: function(Contatos, $stateParams) {
              return Contatos.localizarContatoPorId($stateParams.id);
          }
        }
      });

  });

})();
