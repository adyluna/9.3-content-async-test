const fetch = require('node-fetch');

const fetchCharacter = async (id) => {
  // Recebemos como parâmetro o id
  try {
    const URL = `https://www.superheroapi.com/api.php/4192484924171229/${id}`;
    // Aguardamos a promise do fetch ser resolvida
    const promiseFetch = await fetch(URL)
    // Aguardamos a promise do json ser resolvida
    const results = await promiseFetch.json();

    //Retornamos o resultado da nossa requisição
    return results;
  } catch (error) {
    // Caso algo aconteça e nossa requisição não seja realizada com sucesso
    // capturamos e retornamos essa exceção.
    return error;
  }
};

module.exports = {
  fetchCharacter,
};
