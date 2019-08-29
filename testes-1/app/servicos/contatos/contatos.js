(function() {
  'use strict';


  angular.module('api.contatos', [])
  .factory('Contatos', function() {
    var Contatos = {};

	  var listaDeContatos = [
    {
      id: '1',
      nome: 'Paulo',
      sexo: 'Masculino',
      cidade: 'Valinhos',
      nascimento: '2010-05-01'
    },
    {
      id: '2',
      nome: 'Matheus',
      sexo: 'Masculino',
      cidade: 'Valinhos',
      nascimento: '2008-03-25'
    },
    {
      id: '3',
      nome: 'Marcia',
      sexo: 'Feminino',
      cidade: 'Sao Paulo',
      nascimento: '1996-01-15'
    },
    {
      id: '4',
      nome: 'Elisa',
      sexo: 'Feminino',
      cidade: 'Curitiba',
      nascimento: '2015-10-05'
    }
  ];

    Contatos.todos = function() {
		    return listaDeContatos;
	  };

    Contatos.localizarContatoPorId = function(id) {
      //find retorna undefined se não encontrar o contato
      return listaDeContatos.find(function(user) {
         return user.id === id;
       });
	  };


    return Contatos;
  });
})();
