describe('Teste Social API', function() {

  var SocialTeste, $q, $httpBackend;

  var API = 'http://localhost:3000/social';


  //Mock Resposta API
 var RESPONSE_SUCCESS = {

  'id': 1,
  'nome': 'Facebook',
  'icone': '',
  'url': 'facebook.com/sw9br',

 };

 var RESPONSE_ERROR_NOT_FOUND = {
    'id': undefined,
  };


  var RESPONSE_ERROR_404 = {
   'erro': 'Nao Encontrado'
 };

  beforeEach(angular.mock.module('api.social'));

  beforeEach(inject(function(Social, _$q_, _$httpBackend_) {
    SocialTeste = Social;
    $q = _$q_;
    $httpBackend = _$httpBackend_;
  }));

  it('Serviço existe?', function() {
  expect(SocialTeste).toBeDefined();
 });

 describe('localizarPorNome()', function() {
   var resultado;

   beforeEach(function(){
      resultado = {};

      spyOn(SocialTeste, "localizarPorNome").and.callThrough();
   });

   it('retornar uma rede social se passar um nome válido', function() {
     var pesquisa = 'Facebook';

    $httpBackend.whenGET(API + '?nome_like=' + pesquisa).respond(200, $q.when(RESPONSE_SUCCESS));

    expect(SocialTeste.localizarPorNome).not.toHaveBeenCalled();
    expect(resultado).toEqual({});

    SocialTeste.localizarPorNome(API + '?nome_like=' + pesquisa).then(function(res) {
       resultado = res;

     });

    $httpBackend.flush();

    expect(SocialTeste.localizarPorNome).toHaveBeenCalledWith(API + '?nome_like=' + pesquisa);
    expect(resultado.id).toEqual(1);
    expect(resultado.nome).toEqual('Facebook');
    expect(resultado.url).toEqual('facebook.com/sw9br');

  });


  it('Deve retornar undefined quando não localizar a rede social informada no filtro', function() {

    var pesquisa = 'TwT';
    var resultado = {};

    $httpBackend.whenGET(API + '?nome_like=' + pesquisa).respond(200, $q.when(RESPONSE_ERROR_NOT_FOUND));

    expect(SocialTeste.localizarPorNome).not.toHaveBeenCalled();
    expect(resultado).toEqual({});

    SocialTeste.localizarPorNome(API + '?nome_like=' + pesquisa)
        .then(function(res) {
          resultado = res;
          //console.log("Erros");
        });


      $httpBackend.flush();

      expect(SocialTeste.localizarPorNome).toHaveBeenCalledWith(API + '?nome_like=' + pesquisa);
      expect(resultado.id).toBeUndefined();


  });

  it('Deve retornar mensagem de erro quando fizer uma requisição usando url incorreta', function() {
    var pesquisa = 'abc';
    var resultado = {};
    var API = 'http://localhost:3000/soc';

    //O Json server não retornar erro quando passamos um nome inexistente, ele retorna vazio
    $httpBackend.whenGET(API + '?nome_like=' + pesquisa).respond(404, $q.when(RESPONSE_ERROR_404));
    //$httpBackend.whenGET(API + '?nome_like=' + pesquisa).respond(200, $q.when(RESPONSE_ERROR));

    expect(SocialTeste.localizarPorNome).not.toHaveBeenCalled();
    expect(resultado).toEqual({});

    SocialTeste.localizarPorNome(API + '?nome_like=' + pesquisa)
      .catch(function(res) {
        resultado = res;
        //console.log("Erros");
      });

     $httpBackend.flush();

     expect(SocialTeste.localizarPorNome).toHaveBeenCalledWith(API + '?nome_like=' + pesquisa);
     expect(resultado.erro).toEqual('Nao Encontrado');

  });


});

});
