# <p align="center"> Documentação do TekDashboard </p> 

<p align="center">
  <img src="https://img.shields.io/badge/desenvolvido%20por-Talytha%20Lopes-7a0017" />
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-FFEEEE" />
  <img src="https://img.shields.io/github/last-commit/TalythaLopes/TekDashDocumentation" />
</p>

Este repositório abriga o projeto da **documentação do TekDashboard**, uma aplicação web que se integra ao **ERP Tek-System** para gerar **dashboards inteligentes e interativos**. A proposta desta documentação vai além do texto técnico: trata-se de uma **plataforma desenvolvida em Vue 3 + Vuetify**, com **design responsivo, interface dinâmica e navegação fluida**, projetada para oferecer uma **experiência leve e moderna** de leitura e manutenção.

## 📑 Sumário

1. [Propósito do Projeto](#-propósito-do-projeto)  
2. [Conceito: Docs as Code](#-conceito-docs-as-code)  
3. [Estrutura e Arquitetura](#-estrutura-e-arquitetura)  
4. [Estrutura do Projeto](#-estrutura-do-projeto)  
5. [Como Executar Localmente](#-como-executar-localmente)  
6. [Melhorias Planejadas](#-melhorias-planejadas)
7. [Autoria](#-autoria)

## 🎯 Propósito do Projeto

O TekDashboard é uma aplicação que centraliza indicadores e métricas do ERP Tek-System em painéis inteligentes. Este projeto foi criado para oferecer uma **documentação viva, modular e escalável**, onde o conteúdo técnico possa ser atualizado, versionado e implantado junto com o próprio produto.

A aplicação segue princípios modernos de **desenvolvimento de documentação técnica**, priorizando:

- **Acesso rápido e navegação fluida**  
- **Responsividade e clareza visual**  
- **Modularidade e facilidade de manutenção**  
- **Integração natural ao fluxo de desenvolvimento**

## 🧠 Conceito: “Docs as Code”

Este projeto foi desenvolvido sob a filosofia de que **documentar é tão importante quanto desenvolver**. Seguindo o conceito de **Docs as Code**, a documentação é tratada como parte do código-fonte: vive no repositório, é versionada, revisada e implantada com o mesmo cuidado que o código-fonte, permitindo que o conteúdo acompanhe a evolução do produto. Assim, a documentação deixa de ser um artefato à parte e passa a ser **um componente ativo do ciclo de desenvolvimento** garantindo que o conteúdo seja confiável e revisável, além de estar **sempre sincronizado com o produto** e evoluindo de forma orgânica com o time de desenvolvimento.

## 🧱 Estrutura e Arquitetura

A documentação é organizada em **dois contextos principais**:

- **Página de apresentação** com interface institucional voltada para **novos clientes e interessados no produto**, apresentando as principais vantagens, diferenciais e temas do TekDashboard. Desenvolvida com foco em **responsividade, clareza e estética**, a página utiliza **componentes animados e cartões ilustrados** para comunicar de forma leve e envolvente.

- **Página de documentação técnica** que é uma área completa dedicada a **tutoriais, FAQs e explicações detalhadas** sobre configuração, uso e personalização do TekDashboard. Cada seção é um **componente Vue independente**, localizado em `/src/components/docs`, facilitando a manutenção, atualização e expansão do conteúdo.

## 🧩 Estrutura do Projeto

```bash
src/
├─ assets/ # Estilos globais e variáveis
├─ components/
│ ├─ body/ # Blocos estruturais reutilizáveis
│ ├─ button/ # Botões e elementos interativos
│ ├─ docs/ # Componentes de documentação (cada arquivo é uma página)
│ └─ navBars/ # Barras de navegação e menus laterais
├─ router/ # Controle de rotas Vue
├─ views/ # Páginas principais (Home e Documentação)
└─ main.ts # Ponto de entrada da aplicação
````

Essa arquitetura modular permite que **novos documentos sejam adicionados com facilidade**, sem necessidade de alterar layout, estilos ou lógica central da aplicação. Com componentes **reutilizáveis e estilizados previamente**, os desenvolvedores conseguem adicionar conteúdo sem se preocupar com layout ou CSS, garantindo consistência visual.

## ⚙️ Como Executar Localmente

```bash
# Clonar o repositório
git clone https://github.com/TalythaLopes/TekDashDocumentation.git

# Entrar na pasta do projeto
cd TekDashDocumentation

# Instalar dependências
npm install

# Rodar o servidor de desenvolvimento
npm run dev
````

## 🌱 Melhorias Planejadas

Para evoluir o projeto e fortalecer a abordagem **Docs as Code**, estão planejadas as seguintes melhorias:

- [ ] Implementar **busca interna** na documentação.  
- [ ] Adicionar **feedback do usuário** em cada seção para medir efetividade do conteúdo.
- [ ] Armazenar o conteúdo em **arquivos Markdown**, simplificando a edição pelos desenvolvedores.
- [ ] Configurar uma **estrutura de Pull Requests** para revisão técnica e editorial do conteúdo.  

## 👩‍💻 Autoria

Desenvolvido por **Talytha Lopes**.
Para dúvidas ou sugestões, entre em contato com **talythasoares@teksystem.com.br**.
