# S1_R5---AT1_PBE1
Sobre a atividade
Este repositório contém três exercícios práticos de desenvolvimento back-end utilizando Node.js, TypeScript e Express.js.

O objetivo da atividade é desenvolver e testar uma API, trabalhando com requisições HTTP, rotas POST, leitura de dados enviados pelo body, arquivos JSON e tratamento de erros.

Tecnologias utilizadas
Node.js
TypeScript
Express.js
Visual Studio Code
Postman
Git e GitHub
Estrutura do projeto

text
atividade-express/
│
├── exercicio-1-mensagem/
│   ├── src/
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
│
├── exercicio-2-soma/
│   ├── src/
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
│
├── exercicio-3-login/
│   ├── src/
│   │   └── server.ts
│   ├── dados/
│   │   └── usuarios.json
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
└── README.md
Exercícios desenvolvidos
1. Rota POST /mensagem
Recebe três informações pelo body da requisição:

Nome;
Idade;
Time favorito.
Retorna uma mensagem personalizada com os dados recebidos.

Também realiza validação dos campos e tratamento de erros.

2. Rota POST /soma
Recebe três números pelo body da requisição e realiza a soma.

Implementa:

Verificação dos campos obrigatórios;
Validação dos valores numéricos;
Retorno do resultado da soma;
Tratamento de erros com status HTTP.
3. Rota POST /login
Recebe usuário e senha pelo body da requisição.

Realiza a leitura de um arquivo JSON para consultar os dados cadastrados e verificar as credenciais informadas.

Implementa:

Leitura de arquivo JSON;
Verificação de usuário e senha;
Resposta de sucesso no login;
Retorno de erro quando as credenciais estão incorretas.
Como executar os projetos
Cada exercício possui sua própria configuração e pode ser executado separadamente.

Instalar as dependências
Entre na pasta do exercício desejado e execute:


bash
npm install
Executar o servidor

bash
npm run dev
Endereços das rotas

Exercício	Método	Endereço
Mensagem	POST	http://localhost:3000/mensagem
Soma	POST	http://localhost:3012/soma
Login	POST	http://localhost:3013/login
Testes
As requisições foram realizadas utilizando o Postman, com o método POST e envio de dados no formato JSON (Body → raw → JSON).

Objetivo da atividade
Praticar conceitos fundamentais de programação back-end, desenvolvimento de APIs, processamento de requisições HTTP, validação de dados, manipulação de arquivos JSON e tratamento de erros.

Desenvolvido como atividade prática de desenvolvimento back-end utilizando TypeScript e Express.js.