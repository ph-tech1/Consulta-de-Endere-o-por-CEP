# Buscador de Endereço por CEP 🏠

Sabe quando você está preenchendo um cadastro e precisa digitar o endereço completo? Cansativo, né?

A ideia deste projeto foi criar uma pequena ferramenta para resolver isso! Você digita o CEP e, como mágica ✨, ele busca e preenche o endereço para você. Foi um projeto super divertido de fazer, ótimo para praticar como "conversar" com outras aplicações na internet (as famosas APIs).

Tudo isso é possível graças à incrível e gratuita API do [ViaCEP](https://viacep.com.br/), que faz todo o trabalho pesado de encontrar os dados.


### ✨ O que ele faz de legal?

-   **Busca Rápida:** Clicou, achou! O endereço aparece na tela rapidinho.
-   **Zero Esforço:** Chega de digitar rua, bairro, cidade... Ele preenche tudo sozinho.
-   **Funciona em Qualquer Tela:** Pode usar no computador ou no celular, ele se ajeita direitinho.
-   **À Prova de Erros:** Se você digitar um CEP que não existe, ele te avisa em vez de quebrar.
-   **Botão Mágico de Limpar:** Com um clique, o formulário fica novinho em folha para a próxima busca.

---

### 🛠️ As Ferramentas que Usei no Projeto

-   **HTML5:** O esqueleto da nossa página.
-   **Bootstrap:** Para deixar tudo bonito e organizado sem precisar ser um expert em design.
-   **JavaScript (ES6+):** O cérebro do projeto, que faz toda a mágica acontecer.
-   **API ViaCEP:** A estrela do show, que nos fornece os dados do endereço.

---

### 🚀 Como Colocar para Rodar

A melhor parte: não precisa instalar nada!

É sério, é só baixar os arquivos (`index.html` e `script.js`) para uma pasta no seu computador e **abrir o arquivo `index.html` no seu navegador** preferido.

Simples assim! 😄

---

### 🤓 Espiando o Código (Sem Susto!)

Se você tiver curiosidade, a lógica principal é bem tranquila de entender. Pense no arquivo `script.js` como uma receita de bolo:

1.  **Pegamos os Ingredientes:** Primeiro, avisamos ao JavaScript quais são os campos (inputs) e botões que vamos usar do nosso HTML.
2.  **Damos a Ordem:** Dizemos para os botões "Consultar" e "Limpar" ficarem espertos, esperando por um clique.
3.  **A Mágica Acontece:** Quando o botão "Consultar" é clicado, chamamos nossa função principal. Ela:
    -   Pega o CEP que você digitou.
    -   Faz uma "ligação" para o site do ViaCEP (`fetch`).
    -   Espera pacientemente a resposta (`await`).
    -   "Desempacota" os dados que chegam.
4.  **Servimos o Bolo:** Com os dados em mãos, a gente simplesmente coloca cada informação no seu devido campo na tela. E se o ViaCEP responder que deu erro, a gente avisa você e limpa o formulário.

Espero que você goste do projeto! Ele foi feito com muito carinho e com o objetivo de aprender e praticar. Se tiver qualquer ideia ou sugestão, fique à vontade para compartilhar!

