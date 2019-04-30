# Mamuvies
Fiz esse backend com o propósito de ter uma base para estudar frameworks de frontend

## Primeiros Passos 
### Pré-requisitos
Para executar o projeto é necessário que tenha instalado em sua máquina:

* [NodeJs v10.13^](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/download-center)

### Instalação
Para utilizar o projeto logo após clonar ou baixar o repositório execute o comando
```
npm install
```
Certifique-se ainda de 
[criar](https://www.tutorialspoint.com/mongodb/mongodb_create_database.htm), 
localmente, uma database MongoDB nomeada _mamuvies-db_.

### Executando
O Nodemon já está incluso nas dependências do projeto, assim sendo para ter o projeto rodando basta executar o comando
```
npm start
```

#### Endpoint /api/omdb
As requisições para a 
[API do IMDB](http://omdbapi.com/) 
estão modularizadas em um middleware e 'penduradas' no endpoint supracitado.  
Para melhor entendimento do mesmo sugiro **fortemente**
a leitura da documentação da
[API do IMDB](http://omdbapi.com/).  
O endpoint requer alguns parametros para poder funcionar corretamente.
<!--
Terminar essa parte da documentação com possivelmente e preferencialmente com uma imagem
[comment]:<http://localhost:8080/api/omdb/s&movie&water>
>
