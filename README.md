# Calculadora de Comissões - Frontend (React)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=for-the-badge)

Interface web moderna e responsiva para a **API de Cálculo de Comissões**, desenvolvida para fornecer uma experiência de usuário clara e eficiente para simulações financeiras complexas.

---

## 📋 Tabela de Conteúdos

- [Sobre o Projeto](#-sobre-o-projeto)
- [Preview da Aplicação](#-preview-da-aplicação)
- [Principais Funcionalidades](#-principais-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Começando](#-começando)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Roteiro (Roadmap)](#-roteiro-roadmap)

---

## 🎯 Sobre o Projeto

Este projeto é o frontend da Calculadora de Comissões, uma ferramenta interna para a equipe do Praiastur. O objetivo é consumir a [API de backend](https://github.com/SEU_USUARIO/calculadora-backend) e apresentar uma interface intuitiva onde os usuários podem:

1.  Inserir os dados de uma venda.
2.  Visualizar um resumo financeiro completo do negócio.
3.  Analisar um detalhamento parcela a parcela dos recebimentos e custos.

---

## 📸 Preview da Aplicação

_(Adicione aqui um GIF ou screenshot da aplicação quando estiver mais avançada)_

![Placeholder para a imagem da aplicação](https://i.imgur.com/g8L8d9j.png)

---

## ✨ Principais Funcionalidades

- **Formulário Dinâmico:** Campos claros e objetivos para a entrada de dados da simulação.
- **Resumo Financeiro:** Exibição de totais consolidados para vendedor e empresa, facilitando a análise rápida.
- **Tabela de Detalhamento:** Uma visão completa, parcela a parcela, com datas de vencimento, comissões brutas/líquidas, impostos e taxas.
- **Interface Responsiva:** Planejado para funcionar de forma agradável em desktops, tablets e celulares.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as mais modernas ferramentas do ecossistema JavaScript/React:

- **[React.js](https://reactjs.org/):** Biblioteca para construção da interface de usuário.
- **[Vite](https://vitejs.dev/):** Ferramenta de build e desenvolvimento local extremamente rápida.
- **[React Router DOM](https://reactrouter.com/):** Para gerenciamento de rotas na aplicação.
- **[Axios](https://axios-http.com/):** Cliente HTTP para fazer as chamadas para nossa API de backend.
- **CSS Padrão:** Estilização modularizada para cada componente.

---

## 🏁 Começando

Siga as instruções abaixo para configurar e rodar o projeto em seu ambiente local.

### Pré-requisitos

- **Node.js:** Versão 18.x ou superior.
- **npm:** Gerenciador de pacotes.
- **Backend Rodando:** Certifique-se de que a **[API de backend](https://github.com/SEU_USUARIO/calculadora-backend)** esteja em execução localmente (geralmente em `http://localhost:3001`).

### Instalação e Configuração

1.  **Clone o repositório:**
    ```sh
    git clone [https://github.com/SEU_USUARIO/calculadora-frontend.git](https://github.com/SEU_USUARIO/calculadora-frontend.git)
    ```
2.  **Navegue até o diretório do projeto:**
    ```sh
    cd calculadora-frontend
    ```
3.  **Instale as dependências:**
    ```sh
    npm install
    ```
4.  **Configure a URL da API (IMPORTANTE):**
    - Crie um arquivo chamado `.env.local` na raiz do projeto.
    - Adicione a seguinte linha dentro dele. O Vite exige o prefixo `VITE_`.
      ```
      VITE_API_BASE_URL=http://localhost:3001/api
      ```
      Isso informa ao nosso frontend onde encontrar o backend.

### Rodando a Aplicação

Com tudo configurado, inicie o servidor de desenvolvimento:

```sh
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) (ou a porta que o Vite indicar) no seu navegador para ver a aplicação.

---

## 📁 Estrutura do Projeto

A estrutura de pastas principal dentro de `src` foi organizada para escalabilidade e manutenção:

- **`src/components`**: Contém componentes React reutilizáveis (Header, Footer, Button, Input, etc.).
- **`src/pages`**: Contém os componentes que representam páginas inteiras da aplicação (ex: `CalculadoraPage.jsx`).
- **`src/services`**: Contém a lógica de comunicação com a API externa (configuração do Axios, funções de chamada, etc.).

---

## 🗺️ Roteiro (Roadmap)

- [x] Setup inicial do projeto com Vite e React Router.
- [x] Estrutura de layout com Header e Footer.
- [ ] Desenvolvimento do formulário de cálculo com gerenciamento de estado (`useState`).
- [ ] Criação do serviço de API com Axios para se conectar ao backend.
- [ ] Implementação da lógica de exibição dos resultados (resumo e tabela).
- [ ] Estilização final e garantia de responsividade.
- [ ] (Futuro) Implementar autenticação de usuários.
- [ ] (Futuro) Criar página de relatórios com gráficos.

---

## 📜 Licença

Distribuído sob a licença MIT.
