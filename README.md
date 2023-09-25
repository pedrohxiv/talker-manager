# Projeto Talker Manager

Neste projeto, desenvolvi uma aplicação de cadastro de palestrantes (talkers) com uma API que suporta operações de criação, leitura, atualização e exclusão de informações. A aplicação terá endpoints para listar todos os palestrantes, obter informações de um palestrante específico, criar novos palestrantes, atualizar informações de um palestrante existente e excluir palestrantes. Além disso, também implementei um endpoint de login para obter um token aleatório.

## O que foi desenvolvido

O projeto consiste em desenvolver uma API que suporte os seguintes endpoints:

1. `GET /talker`: Retorna um array com todas as pessoas palestrantes cadastradas.

2. `GET /talker/:id`: Retorna uma pessoa palestrante com base no ID fornecido na rota.

3. `POST /login`: Recebe um email e uma senha no corpo da requisição e retorna um token aleatório de 16 caracteres.

4. `POST /talker`: Cria uma nova pessoa palestrante com base nos dados fornecidos no corpo da requisição.

5. `PUT /talker/:id`: Atualiza as informações de uma pessoa palestrante com base no ID fornecido na rota e nos dados fornecidos no corpo da requisição.

6. `DELETE /talker/:id`: Exclui uma pessoa palestrante com base no ID fornecido na rota.

7. `GET /talker/search`: Retorna um array com pessoas palestrantes que correspondem a um termo de pesquisa fornecido no parâmetro de consulta `q=searchTerm`.

8. `GET /talker/search?rate=rateNumber`: Retorna um array com pessoas palestrantes que têm uma classificação igual ou superior à classificação fornecida no parâmetro de consulta `rate=rateNumber`.

9. `GET /talker/search?date=watchedDate`: Retorna um array com pessoas palestrantes que foram assistidas na data fornecida no parâmetro de consulta `date=watchedDate`.

10. `PATCH /talker/rate/:id`: Atualiza a classificação de uma pessoa palestrante com base no ID fornecido na rota e nos dados fornecidos no corpo da requisição.

11. `GET /talker/db`: Retorna um array com todas as pessoas palestrantes cadastradas a partir de um banco de dados MySQL.

Neste projeto, tive a oportunidade de aprimorar as seguintes habilidades:

- Desenvolvimento de uma API com Node.js e Express.
- Criação de endpoints para operações CRUD (Create, Read, Update e Delete).
- Implementação de validações de entrada para garantir dados consistentes.
- Utilização de tokens para autenticação de usuários.
- Integração com um banco de dados MySQL para persistência de dados.
- Manipulação de consultas SQL para obter dados específicos do banco.
- Tratamento de dados em JSON para comunicação entre a API e o cliente.

## Como usar

Para testar os endpoints da API, você pode usar ferramentas como o Postman ou o Insomnia. Certifique-se de ter uma instância do MySQL em execução e configurar a conexão com o banco de dados na aplicação.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- Node.js
- Express
- Integração com banco de dados MySQL

## Contato

- [Pedro Henrique] - [pedrohalmeidamendonca@gmail.com]
- [LinkedIn](https://www.linkedin.com/in/pedrohxiv/)
- [GitHub](https://github.com/pedrohxiv)

---

**Nota:** Este projeto é uma oportunidade para demonstrar minhas habilidades no desenvolvimento de APIs com Node.js, Express e integração com banco de dados MySQL. Sinta-se à vontade para explorar e entre em contato se tiver alguma pergunta ou feedback!
