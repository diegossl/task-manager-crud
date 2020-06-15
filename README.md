# Lista de Tarefas

Este gerenciador de tarefas é uma ferramenta que serve para listar as tarefas que você irá executar. Essa é uma função realmente útil para a vida cotidiana de pessoas e empresas para gerenciar tarefas ao longo do tempo. E é para isso que serve esta ferramenta.

## Setup

Para executar o projeto, será necessário instalar as dependências digitando o seguinte comando no terminal:

```bash
npm install
```

Em seguida, crie um arquivo chamado **.env** e copie para ele o conteúdo do arquivo **.env.exemple**, que já existe no projeto. Então digite o seguinte comando no terminal:

```bash
adonis key:generate
```

Por fim, digite o seguinte comando no terminal para iniciar o servidor:

```bash
adonis serve
```

O sistema está pronto para ser usado na rota:

[http://localhost:3333/tarefas](http://localhost:3333/tarefas)

## Features

O projeto possui as características comuns de um CRUD, ou seja:

* Crie uma nova tarefa;
* Atualizar uma tarefa;
* Excluir uma tarefa;
* Liste todas as tarefas;

## Licença

MIT
