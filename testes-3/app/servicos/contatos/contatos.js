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
      nascimento: '2010-05-01',
      social: {
        nome: 'Facebook',
        icone: '',
        url: 'facebook.com/sw9br',
      }
    },
    {
      id: '2',
      nome: 'Matheus',
      sexo: 'Masculino',
      cidade: 'Valinhos',
      nascimento: '2008-03-25',
      social: {
        nome: 'Facebook',
        icone: '',
        url: 'facebook.com/mmt',
      }
    },
    {
      id: '3',
      nome: 'Marcia',
      sexo: 'Feminino',
      cidade: 'Sao Paulo',
      nascimento: '1996-01-15',
      social: {
        nome: 'Twitter',
        icone: '',
        url: 'twitter.com/marc',
      }
    },
    {
      id: '4',
      nome: 'Elisa',
      sexo: 'Feminino',
      cidade: 'Curitiba',
      nascimento: '2015-10-05',
      social: {
        nome: 'Youtube',
        icone: '',
        url: 'youtube.com/eli',
      }
    }
  ];

    Contatos.todos = function() {
		    return listaDeContatos;
	  };

    Contatos.localizarContatoPorId = function(id) {
      return listaDeContatos.find(function(user) {
         return user.id === id;
       });
	  };


    return Contatos;
  });
})();
