const uppercase = require('./exercicio');

describe('Transforma as letras de uma palavra em letras maiúsculas.', () => {
  it(`uppercase 'test' para 'TEST'`, done => {
    uppercase('test', (str) => {
      expect(str).toBe('TEST');
      done();
    })
  });
});