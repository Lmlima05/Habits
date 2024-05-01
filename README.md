<p align="center">
  <img src="./web/src/assets/logo.svg" alt="Logo" width="300"/>
</p>
<h3 align="center">
Você no controle da sua rotina!
</h3>

<br><br>

## Sobre

Projeto desenvolvido durante a NLW Setup, evento criado pela Rocketseat. Um evento 100% online e GRATUITO.

## Habits

O Habits é um app para monitoramento de tarefas diárias para ajudar a desenvolver um hábito.

A aplicação possui, backend, mobile e web.

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) - [Node.js](https://nodejs.org/en/).


### Rodando o Back End (servidor)

# Clone este repositório
$ git clone git@github.com:Lmlima05/Habits.git

# Acesse a pasta do projeto no terminal/cmd
$ cd habits

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta 3333 - acesse <http://localhost:3333>
```

### Rodando o Front End (Web)

```bash
# Clone este repositório
$ git clone git@github.com:Lmlima05/Habits.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Habits

# Vá para a pasta web
$ cd web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta 5173 - acesse <http://localhost:5173>
```

### Rodando o App (Mobile)

```bash

# Vá para a pasta mobile
$ cd mobile

# Instale as dependências
$ npm install

# Será aberto no terminal o menu do Expo onde poderá scanear o QR Code para executar o app diretamente no seu celular ou as opções de executar no emulador android ou iOS
```

### Rodando o Server

```bash
# Install the server dependencies
$ cd server
$ npm install

# Start the server project
$ npx prisma migrate deploy
$ npm run dev
```
