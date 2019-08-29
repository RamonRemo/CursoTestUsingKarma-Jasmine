describe('Filtro de Data', function() {
  var filtroTeste;

  beforeEach(angular.mock.module('filtros.data'));

  beforeEach(inject(function(_$filter_) {
    filtroTeste = _$filter_('data');
  }));

  it('Deve converter uma data para o formato dd-mm-yyyy, se for passado o formato yyyy-mm-dd', function() {
    expect(filtroTeste('2010-02-10')).toEqual('10-02-2010');
  })

});
