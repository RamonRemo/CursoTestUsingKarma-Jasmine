describe('Conjunto de Testes', function() {


	//Casos reais
	var ContatosTeste;

	var unicoContato = {

    id: '2',
    nome: 'Matheus',
    sexo: 'Masculino',
    cidade: 'Valinhos',
    nascimento: '2008-03-25'
  };

	 var listaDeContatosTeste = [
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

	beforeEach(angular.mock.module('api.contatos'));

	beforeEach(inject(function(Contatos) {
		ContatosTeste = Contatos;
	}));

	it('Serviço Existe?', function() {
		expect(ContatosTeste).toBeDefined();
	});

	describe('.todos()', function() {

		it('Método Existe?', function() {
			expect(ContatosTeste.todos).toBeDefined();
		});

		it('Deveria retornar uma lista hard code de contatos', function() {
			expect(ContatosTeste.todos()).toEqual(listaDeContatosTeste);
		});

	});


 describe('.localizarContatoPorId()', function() {
	 	it('Metodo Existe?', function() {
			expect(ContatosTeste.localizarContatoPorId).toBeDefined();
		});

		//teste para verificar a chamada ao metodo de localizacao por id, esperando retornar um contato valido
		it('retornar 1 um objeto do tipo contato se ele existir', function() {
			expect(ContatosTeste.localizarContatoPorId('2')).toEqual(unicoContato);
		})

		it('retornar indefinido se o contato não for encontrado', function() {
			expect(ContatosTeste.localizarContatoPorId('XPTO')).not.toBeDefined();
		})
 });


});
