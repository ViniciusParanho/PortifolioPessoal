
# Portfólio Do Vinícius 🚀

<table>
  <tr>
    <td width="800px">
      <div align="justify">
     O Portfólio de Vinícius é um website desenvolvido para apresentar sua trajetória acadêmica e projetos na área de tecnologia. O projeto foi criado no contexto da disciplina Laboratório de Desenvolvimento de Software da PUC Minas, com foco em uma interface intuitiva, boa organização das informações e uma identidade visual consistente.
      </div>
      <div align="justify">
      </div>
    </td>
    <td>
      <div>
        <td width="350px" align="center">
  
  <img
src="https://raw.githubusercontent.com/ViniciusParanho/PortifolioPessoal/main/images/portfolio.jpg"
alt="Logo do Projeto"
height="180"
/>
  />
</td>
  </tr> 
</table>

---

## 🚧 Status do Projeto
Finalizado
---

## 🖼️ Capturas de Tela

| <img src="https://github.com/ViniciusParanho/PortifolioPessoal/blob/main/images/paginainicial.png" alt="Portfolio Home" width="600"/> | <img src="https://github.com/ViniciusParanho/PortifolioPessoal/blob/main/images/sobre%20mim.png" alt="Portfolio Ajuda" width="600"/> |
|:----:|:-----:|
| Home | About | 



---

## 📝 Sobre o Projeto
Este projeto foi criado com o objetivo de desenvolver um portfólio digital capaz de apresentar a trajetória acadêmica e o desenvolvimento técnico de um estudante da área de tecnologia. Em um mercado de trabalho cada vez mais competitivo, possuir um espaço próprio para demonstrar habilidades, projetos e evolução profissional se torna um diferencial importante.

Por que ele existe:
O projeto surgiu da necessidade de organizar e apresentar de forma clara a evolução acadêmica e técnica de um estudante de tecnologia. Ter um portfólio próprio permite demonstrar conhecimentos, projetos desenvolvidos e interesses profissionais de maneira mais completa.

Qual problema ele resolve:
A aplicação busca centralizar informações profissionais que normalmente ficam distribuídas em diferentes plataformas, reunindo em um único ambiente:

Apresentação de habilidades e formação em dois idiomas (Português e Inglês).

Exibição de projetos organizados em uma linha do tempo visual.

Informações de contato e experiências que facilitam a comunicação e o networking.

Qual o contexto:
O projeto foi desenvolvido no contexto acadêmico da disciplina Laboratório de Desenvolvimento de Software, cursada no 4º período de Engenharia de Software na PUC Minas. A proposta da atividade é aplicar, na prática, conhecimentos relacionados ao desenvolvimento web, organização de sistemas e publicação de aplicações online.

Onde ele pode ser utilizado:

Processos seletivos: pode ser utilizado como referência em currículos para que recrutadores visualizem projetos e habilidades de forma prática.

Networking: permite compartilhar contatos profissionais de forma rápida por meio de links e formulário integrado.

Portfólio acadêmico: funciona como um registro da evolução prática e dos projetos desenvolvidos ao longo do curso de Engenharia de Software.

## ✨ Funcionalidades Principais

- 🌐 Internacionalização (i18n): Seção "Sobre Mim" com suporte completo a Português e Inglês, permitindo alcance global do perfil profissional.
- ⏳ Timeline Dinâmica de Projetos: Exibição organizada de projetos em ordem cronológica, incluindo nome, descrição, tecnologias e links para o GitHub.
- 💼 Portfólio de Experiências: Espaço dedicado para relatar trajetórias profissionais, estágios, freelas e participações em eventos técnicos.
- 📨 Sistema de Contato Funcional: Formulário com campos de nome, e-mail e mensagem, com funcionalidade de envio real por e-mail.
- 🔗 Integração com Redes Sociais: Ícones clicáveis e interativos para redirecionamento direto ao LinkedIn, WhatsApp e e-mail.
- 📱 Design Responsivo: Interface amigável e adaptável, garantindo a visualização perfeita em computadores, tablets e smartphones.
---

## 🛠 Tecnologias Utilizadas

As seguintes ferramentas, frameworks e bibliotecas foram utilizados na construção do Portfólio Pedro Marçal. A seleção prioriza tecnologias modernas para garantir alta performance e um design responsivo.

### 💻 Front-end

* **Framework/Biblioteca:** Next.js, TypeScript, Tailwind CSS


### ⚙️ Infraestrutura & DevOps

* **Containerização:** O projeto utiliza Node.js como runtime principal para o desenvolvimento e build. Utiliza o Vercel para hospedagem

---

## 🏗 Arquitetura

**Arquitetura do Sistema**

A arquitetura do sistema foi organizada seguindo uma estrutura em camadas, separando a interface do usuário, a lógica da aplicação e a estrutura de dados. Essa organização facilita a manutenção do código, melhora a legibilidade e permite que o sistema evolua com mais facilidade.


**Principais Componentes**

O sistema é dividido em algumas partes principais:

Página inicial: apresenta uma introdução e visão geral do portfólio.

Seção de projetos: mostra os trabalhos desenvolvidos ao longo da trajetória acadêmica.

Seção de experiencias: apresenta asexperiencias do usuário.

Seção de contato: permite que visitantes encontrem formas de entrar em contato.]


**Tecnologias Utilizadas**

Next.js e React para o desenvolvimento da interface.

JavaScript / TypeScript para a lógica da aplicação.

HTML e CSS para estrutura e estilização.

Git e GitHub para controle de versão.


**Decisões Arquiteturais**

Foi adotada uma arquitetura baseada em componentes, pois ela facilita a reutilização de código e a organização do projeto.


**Limitações**

Por se tratar de um portfólio acadêmico, o sistema não possui um backend completo ou banco de dados dinâmico, sendo focado principalmente na apresentação das informações e dos projetos desenvolvidos.

---

## 🔧 Instalação e Execução

### Pré-requisitos
Certifique-se de que o usuário tenha o ambiente configurado.


### ⚡ Como Executar a Aplicação

--- Apenas acesse o link https://portifolio-pessoal-74bk.vercel.app/



## 📂 Estrutura de Pastas



```
.
├── .editorconfig                # ✍️ Padronização de estilo de código.
├── .env.local                   # 🔒 Variáveis SENSÍVEIS do ambiente LOCAL (não versionado).
├── .env.example                 # 🧩 Exemplo de TODAS as variáveis necessárias (sem valores sensíveis).
├── .gitignore                   # 🧹 Ignora arquivos/pastas não versionadas (.env, node_modules, target, etc.).
├── .vscode/                     # ⚙️ Configurações de ambiente da IDE (opcional).
├── README.md                    # 📘 Documentação principal do projeto.

├── docker-compose.yml           # 🐳 Orquestração dos containers (front/back/db/etc).
├── docker-compose.override.yml  # 🐳 Configurações extras apenas para desenvolvimento.
│
├── /frontend                    # 📁 Aplicação React
│   ├── .env.example             # 🧩 Variáveis de ambiente do Front-end.
│   ├── /public                  # 📂 Arquivos estáticos e index.html.
│   ├── /src                     # 📂 Código-fonte React
│   │   ├── /pages               # 📄 Páginas/rotas da aplicação.
│   │   ├── /services            # 🔌 Serviços e chamadas HTTP.
│   │   ├── /styles              # 🎨 Estilos globais, temas, Design System.
│   │   ├── /assets              # 🖼️ Recursos estáticos importados
│   │   │   ├── /images          # 🖼️ Imagens.
│   │   │   └── /fonts           # ✒️ Fontes personalizadas.
│   │   └── /utils               # 🛠️ Funções utilitárias.
│   ├── package.json             # 📦 Dependências e scripts.
│
│   │
│
├── /scripts                      # 📜 Scripts de automação
│   ├── dev.sh                    # 🚀 Ambiente de desenvolvimento completo.
│
```

---


### 🌐 Aplicação Web
https://portifolio-pessoal-74bk.vercel.app/


## 🔗 Documentações utilizadas



* 📖 **Framework/Biblioteca (Front-end):** [Documentação Oficial do **React**](https://react.dev/reference/react)
---

## 👥 Autores


| 👤 Nome | 🖼️ Foto | :octocat: GitHub | 💼 LinkedIn | 📤 Gmail |
|---------|----------|-----------------|-------------|-----------|
| Vinícius Paranho Ribeiro  | <div align="center"><img src="https://github.com/ViniciusParanho/PortifolioPessoal/blob/main/images/foto%20de%20perfil.png" width="70px" height="70px"></div> | <div align="center"><a href="https://github.com/ViniciusParanho"><img src="https://joaopauloaramuni.github.io/image/github6.png" width="50px" height="50px"></a></div> | <div align="center"><a href="https://www.linkedin.com/in/vinicius-paranho-790b22281/"><img src="https://joaopauloaramuni.github.io/image/linkedin2.png" width="50px" height="50px"></a></div> | <div align="center"><a href="viniciusparanho@gmail.com"><img src="https://joaopauloaramuni.github.io/image/gmail3.png" width="50px" height="50px"></a></div> |





## 🙏 Agradecimentos

Gostaria de agradecer aos seguintes canais e pessoas que foram fundamentais para o desenvolvimento deste projeto:

* [**Engenharia de Software PUC Minas**](https://www.instagram.com/engsoftwarepucminas/) - Pelo apoio institucional, estrutura acadêmica e fomento à inovação e boas práticas de engenharia.
* [**Prof. Dr. João Paulo Aramuni**](https://github.com/joaopauloaramuni) - Pelos valiosos ensinamentos sobre **Arquitetura de Software** e **Padrões de Projeto**.
---



The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
