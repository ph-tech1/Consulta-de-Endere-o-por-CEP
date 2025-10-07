// Guardamos os campos do formulário em variáveis.
const campoCep = document.getElementById('cep');
const campoLogradouro = document.getElementById('logradouro');
const campoBairro = document.getElementById('bairro');
const campoCidade = document.getElementById('cidade');
const campoEstado = document.getElementById('estado');
const buscarCep = document.getElementById('btn_consulta');




// Função que busca o endereço e preenche os campos.
async function consultarEndereco(cep) {
  // Monta a URL para a API do ViaCEP
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  try {
    // Faz a requisição e espera a resposta
    const resposta = await fetch(url);
    // Converte a resposta em um objeto JavaScript (JSON)
    const dados = await resposta.json();

    // Verifica se o CEP é inválido
    if (dados.erro) {
      alert("CEP não encontrado.");
      return;
    }

    // Preenche os campos do formulário com os dados recebidos
    campoLogradouro.value = dados.logradouro;
    campoBairro.value = dados.bairro;
    campoCidade.value = dados.localidade;
    campoEstado.value = dados.uf;

  } catch (erro) {
    // Captura erros de conexão com a internet
    alert("Não foi possível buscar o CEP. Verifique sua conexão.");
  }
}

// Diz ao botão o que fazer quando for clicado.
buscarCep.addEventListener('click', () => {
  const cepDigitado = campoCep.value;
  consultarEndereco(cepDigitado);
});