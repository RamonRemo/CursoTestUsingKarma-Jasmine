(function() {
  'use strict';

  angular.module('api.social', [])
  .factory('Social', function($http, $q) {
    var Social = {};

    Social.localizarPorNome = function(apiETermoDePesquisa) {
        return $http.get(apiETermoDePesquisa)
        .then(function(res) {

          return res.data;

        }, function(res){
          return $q.reject({'erro':'Nao Encontrado'});
        })
  

        //}).catch(function(res) {
          //console.log("Erro");
        //  return res.data;

        //});
      };


    return Social;
  });
})();
