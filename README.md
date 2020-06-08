# Lista de Tarefas

Este gerenciador de tarefas é uma ferramenta que serve para listar as tarefas que você vai executar. Essa é uma função realmente útil para o dia-a-dia das pessoas e das empresas para gerenciar as tarefas em função do tempo. E é para isso que serve essa ferramenta.

## Setup

Para executar o projeto, será necessário instalar as dependências digitando o seguinte comando no terminal:

```bash
npm install
```

Em seguida, crie um arquivo chamado **.env** e copie para dentro dele o conteúdo do arquivo **.env.exemple**, que já existe no projeto. Depois digite no terminal o seguinte comando:

```bash
adonis key:generate
```

Finalmente, digite o seguinte comando no terminal para iniciar o servidor:

```bash
adonis serve
```
Agora o sistema está pronto para ser utilizado através da rota local:

[http://localhost:3333/tarefas](http://localhost:3333/tarefas)

### Features

O projeto possui as características comuns de um CRUD, ou seja:

* Criar uma nova tarefa;
* Atualizar uma Tarefa;
* Deletar uma tarefa;
* Listar todas as tarefas;

### Licença

Não se aplica.
