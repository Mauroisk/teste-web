# Lenovo Laptops Scraper API

Este projeto foi desenvolvido para criar uma API RESTful em Node.js que faz scraping de um site de e-commerce, especificamente para coletar informações sobre notebooks da marca Lenovo. A API retorna os produtos encontrados, ordenados do mais barato para o mais caro, permitindo que outras aplicações ou serviços consumam esses dados de maneira fácil e eficiente.

## Tecnologias Utilizadas

Para implementar essa solução, utilizei as seguintes tecnologias:

- **Node.js**: Escolhi Node.js por sua eficiência e pelo grande suporte da comunidade, especialmente em projetos que envolvem operações I/O intensivas.
- **Express**: Este framework simplificou bastante a criação da API RESTful, permitindo que eu focasse na lógica de negócio.
- **Axios**: Usei Axios para fazer as requisições HTTP ao site de e-commerce, pois é uma biblioteca robusta e fácil de usar.
- **Cheerio**: Como precisei manipular e extrair dados do HTML, utilizei Cheerio, que é uma ferramenta poderosa para trabalhar com o DOM de forma semelhante ao jQuery.

## Requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

## Instalação

Aqui estão os passos que segui para configurar o projeto:

1. Primeiro, clonei o repositório para minha máquina local:

    ```bash
    https://github.com/Mauroisk/teste-web.git
    ```

2. Depois, entrei no diretório do projeto:

    ```bash
    cd test-web
    ```

3. Em seguida, instalei as dependências necessárias:

    ```bash
    npm install
    ```

## Uso

Para iniciar o servidor e acessar a API, basta seguir esses passos:

1. Rodei o servidor usando o comando:

    ```bash
    npm start
    ```

2. O servidor fica disponível no endereço:

    ```
    http://localhost:3000/notebooks-lenovo
    ```

3. Para obter a lista de notebooks Lenovo, é só acessar a rota `/notebooks-lenovo`.

### Exemplo de Requisição

Você pode fazer uma requisição GET para:

http://localhost:3000/notebooks-lenovo


### Exemplo de Resposta

A API retorna um JSON contendo os produtos Lenovo, ordenados do mais barato para o mais caro. Aqui está um exemplo:

```json
[
  {
    "title": "Lenovo V145-15AST",
    "price": 299.99,
    "description": "Description of the Lenovo V145-15AST.",
    "reviews": "10",
    "rating": "4"
  },
  {
    "title": "Lenovo ThinkPad E14",
    "price": 499.99,
    "description": "Description of the Lenovo ThinkPad E14.",
    "reviews": "25",
    "rating": "4.5"
  }
]



### Confirmação

Para garantir que tudo estava funcionando conforme o esperado, implementei uma funcionalidade que exibe os produtos diretamente no terminal, de forma organizada, como mostrado abaixo:

Produto 1:
Título: Lenovo V145-15AST
Preço: $299.99
Descrição: Description of the Lenovo V145-15AST.
Reviews: 10
Classificação: 4 estrelas
-----------------------------------------------------
Produto 2:
Título: Lenovo ThinkPad E14
Preço: $499.99
Descrição: Description of the Lenovo ThinkPad E14.
Reviews: 25
Classificação: 4.5 estrelas
-----------------------------------------------------



