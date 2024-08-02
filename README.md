

# NodeJS-Express-js

Este repositório contém estudos e exemplos de código utilizando Node.js, JavaScript e Express.js, com testes realizados no Insomnia.

## Índice

- [Sobre](#sobre)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Funcionalidades](#funcionalidades)
- [Testes](#testes)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Sobre

Este projeto é dedicado a explorar e aprender sobre Node.js, JavaScript e Express.js. Inclui exemplos práticos, implementação de rotas e testes de API usando o Insomnia.

## Instalação

Siga os passos abaixo para instalar e rodar a aplicação localmente:

1. Clone o repositório:

   ```bash
   git clone https://github.com/JzBreno/NodeJS-Express-js.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd NodeJS-Express-js
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Uso

Para iniciar o servidor, execute o seguinte comando:

```bash
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

## Estrutura de Pastas

A estrutura básica de pastas do projeto é a seguinte:

```
NodeJS-Express-js/
├── node_modules/
├── public/
├── routes/
├── views/
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

- `node_modules/`: Contém as dependências do projeto.
- `public/`: Arquivos estáticos (CSS, JavaScript, imagens).
- `routes/`: Definição das rotas da aplicação.
- `views/`: Templates de visualização.
- `app.js`: Arquivo principal da aplicação.
- `.gitignore`: Arquivos e pastas ignorados pelo Git.
- `package.json`: Dependências e scripts do projeto.
- `package-lock.json`: Versões exatas das dependências instaladas.
- `README.md`: Documentação do projeto.

## Funcionalidades

- **Servidor Web**: Criação de um servidor web básico usando Express.js.
- **Rotas**: Definição de rotas para diferentes endpoints.
- **Templates**: Uso de templates para renderização de páginas HTML.
- **Arquivos Estáticos**: Servir arquivos estáticos como CSS, JS e imagens.

## Testes

Os testes das APIs foram realizados utilizando o Insomnia. Para importar e testar as requisições:

1. Baixe e instale o [Insomnia](https://insomnia.rest/download).
2. Importe a coleção de testes disponibilizada neste repositório (`insomnia_requests.json`).
3. Execute as requisições para verificar as respostas das APIs.

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com este projeto, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para a sua feature (`git checkout -b feature/nome-da-feature`).
3. Comite suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nome-da-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
