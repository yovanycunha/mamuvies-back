# Mamuvies

Fiz esse backend com o propósito de ter uma base para estudar frameworks de frontend  


## Pré-requisitos

Para executar o projeto é necessário que tenha instalado em sua máquina:

* [NodeJs v10.13^](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/download-center)

## Instalação

Para utilizar o projeto logo após clonar ou baixar o repositório execute o comando

```
npm install
```

Certifique-se ainda de 
[criar](https://www.tutorialspoint.com/mongodb/mongodb_create_database.htm), 
localmente, uma database MongoDB nomeada _mamuvies-db_.

## Executando

O Nodemon já está incluso nas dependências do projeto, assim sendo para ter o projeto rodando basta executar o comando

```
npm start
```

  <br/>

  <br/>

---  

## Endpoint /api/omdb

As requisições para a
[API do IMDB](http://omdbapi.com/) 
estão modularizadas em um middleware e *"penduradas"* no endpoint supracitado.  
Para melhor entendimento do mesmo sugiro **fortemente**
a leitura da documentação da
[API do IMDB](http://omdbapi.com/).  
O endpoint requer alguns parametros para poder funcionar corretamente. Os parametros são separados por um '&' e obedecem a sequência das tabelas abaixo:

| Parâmetro        | Opções válidas  | Obrigatório  |
|:-----------------|:---------------:|:------------:|
| Tipo da busca    |      s , i      |     Sim      |

### Descrição - Tipo de Busca

Caso a busca seja por um título em geral, ou seja, o cliente quer uma lista de shows a partir de um título deve-se passar *"s"* como primeiro parâmetro da requisição. Caso o cliente queira buscar por um show específico deve-se usar o *"i"* como primeiro parâmetro.

| Parâmetro        | Opções válidas  | Obrigatório   |
|:-----------------|:---------------:|:-------------:|
| Tipo do show     |  movie, series  |     Não*      |

### Descrição - Tipo do show buscado

Esse parâmetro faz com que haja um filtro na busca para que sejam retornados apenas filmes (movie) ou apenas séries (series). A ausência dele faz com que sejam retornados ambos tipos de shows.  
**OBS.: Caso a busca seja por um show específico, usando o id do mesmo para isso, esse parâmetro pode ser mantido, todavia tenha em mente que a presença dele não afetará o show retornado, uma vez que essa busca é feita por meio do ID específico do mesmo**

| Parâmetro            | Opções válidas  | Obrigatório   |
|:---------------------|:---------------:|:-------------:|
| Título ou ID do show |     String      |     Sim       |

### Descrição - Título ou ID

Autoexplicativo, não ?

## Exemplos de uso  

Os exemplos com seus retornos ficaram um pouco longos então coloquei [aqui](EXAMPLE.md) desse modo você pode ir lá e conferir todos.  
Existe um exemplo para cada combinação de parâmetros cobrindo assim 100% do uso que você pode dar a esse endpoint.

## Feedback
Sinta-se à vontade enviar o seu feedback no meu [Twitter](https://twitter.com/YovanyCunha) ou ainda abrir quantas [issues](https://github.com/yovanycunha/mamuvies-back/issues/new) achar necessárias.