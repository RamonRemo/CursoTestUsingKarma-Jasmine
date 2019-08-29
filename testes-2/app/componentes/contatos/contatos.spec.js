describe('Controlador para os contatos', function() {

  var $controller, ContatoControladorTeste, ContatoServiceTeste;

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

  beforeEach(angular.mock.module('ngRoute'));
  beforeEach(angular.mock.module('componentes.contatos'));

  beforeEach(angular.mock.module('api.contatos'))

  beforeEach(inject(function(_$controller_, Contatos) {
    $controller = _$controller_;
    ContatoServiceTeste = Contatos;

    spyOn(ContatoServiceTeste, 'todos').and.callFake(function(){
      return listaDeContatos;
    });

    ContatoControladorTeste = $controller('ContatoControlador', {Contatos: ContatoServiceTeste});
  }));


  it('Controlador foi definido?', function(){
    expect(ContatoControladorTeste).toBeDefined();
  });

  it('Deve inicializar com uma chamada ao metodo Contato.Todos()', function(){
    expect(ContatoServiceTeste.todos).toHaveBeenCalled();
    expect(ContatoControladorTeste.contatos).toEqual(listaDeContatos);
  })


});
