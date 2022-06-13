const { fetchCharacter } = require('../src/fetchCharacter');
const fetch = require('node-fetch');

describe('Teste a função fetchCharacter', () => {
  it('Verifica se o nome da personagem é Wonder Woman', async () => {
    const character = await fetchCharacter('720');
    
    expect(character.name).toBe('Wonder Woman');
  });
  it('Verifica se retorna erro ao executar a função sem parametro', async () => {
    const requestToFail = await fetchCharacter();
    
    expect(requestToFail.error).toEqual('invalid id');
  });
  it('Verifica se retorna \'Invalid id\' ao executar a função com parâmetro que não existe', async () => {
    const requestToFail = await fetchCharacter('parametro qualquer');
    
    expect(requestToFail.error).toEqual('invalid id');
  });
  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
    await fetchCharacter('720');
    expect(fetch).toHaveBeenCalledTimes(4);
    expect(fetch).toHaveBeenCalledWith(url);
  });
});