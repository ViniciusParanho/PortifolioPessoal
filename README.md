
# Portfólio Do Pedro 🚀

<table>
  <tr>
    <td width="800px">
      <div align="justify">
        O Portfólio do Pedro é um website que apresenta a trajetória acadêmica. Este projeto faz parte do Laboratório de Desenvolvimento de Software da PUC Minas e foca em uma interface amigável e identidade visual coerente.
      </div>
      <div align="justify">
      </div>
    </td>
    <td>
      <div>
        <td width="350px" align="center">
  <img 
    src="Logo - https://github.com/Netroxx/PedroMar-al.github.io/blob/main/logo/portifolio.png" 
    alt="Logo do Projeto"
    height="180"
  />
</td>
  </tr> 
</table>

---

## 🚧 Status do Projeto
Finalizado
---

## 🖼️ Capturas de Tela

| <img src="https://github.com/Netroxx/PotifolioPessoal/blob/main/Imagens/telainicial.png" alt="Portfolio Home" width="600"/> | <img src="https://github.com/Netroxx/PotifolioPessoal/blob/main/Imagens/Sobremim.png" alt="Portfolio Ajuda" width="600"/> |
|:----:|:-----:|
| Home | About | 



---

## 📝 Sobre o Projeto
O Portfólio do Pedro será desenvolvido para atuar como uma vitrine digital, centralizando a trajetória acadêmica e as competências técnicas de forma moderna e organizada.

- **Por que ele existe:**
  O projeto nasceu da necessidade de criar uma identidade digital sólida para estudantes de tecnologia. Em um mercado competitivo, possuir um espaço próprio para demonstrar evolução técnica é fundamental para o crescimento profissional.
- **Qual problema ele resolve:**
  O sistema resolve a dispersão de informações profissionais, reunindo em um único lugar:
  - Habilidades e formação de maneira bilíngue (Português/Inglês).
  - Histórico de projetos em uma linha do tempo dinâmica e visual.
  - Experiências e contatos diretos, facilitando o networking.  
- **Qual o contexto:**
  Este projeto foi desenvolvido dentro do contexto acadêmico da disciplina Laboratório de Desenvolvimento de Software (4º período) na PUC Minas. Ele serve como a primeira atividade para aplicar conceitos de front-end, arquitetura de sistemas e hospedagem em nuvem. 
- **Onde ele pode ser utilizado**
  - Processos Seletivos: Como link de referência em currículos para que recrutadores visualizem projetos em funcionamento.
  - Networking: Compartilhamento rápido de contatos via ícones clicáveis e formulário integrado.
  - Portfólio Acadêmico: Registro de toda a evolução prática durante o curso de Engenharia de Software.
---

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

Descreva aqui a **arquitetura completa do sistema**, explicando como as camadas, módulos e componentes foram organizados. Informe também **por que** essa arquitetura foi escolhida e **quais problemas ela ajuda a resolver**.

Você pode incluir:

- **Visão geral da arquitetura** (ex.: camadas, módulos, microsserviços, monólito modular, hexagonal, MVC etc.)
- **Principais componentes** e o papel de cada um
- **Padrões de design adotados** (ex.: Repository, Service Layer, DTOs, Factory, Observer)
- **Fluxo de dados** entre as partes do sistema
- **Tecnologias utilizadas em cada camada**
- **Decisões arquiteturais importantes**
- **Trade-offs** ou limitações relevantes

---

## 🔧 Instalação e Execução

### Pré-requisitos
Certifique-se de que o usuário tenha o ambiente configurado.


### ⚡ Como Executar a Aplicação

--- Apenas acesse o link https://v0-website-de-portfolio.vercel.app/



## 📂 Estrutura de Pastas

Descreva o propósito das pastas principais.

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

 https://v0-website-de-portfolio-56m1pifyy-netroxxs-projects.vercel.app/



## 🔗 Documentações utilizadas

Liste aqui links para documentação técnica, referências de bibliotecas complexas ou guias de estilo que foram cruciais para o projeto.

* 📖 **Framework/Biblioteca (Front-end):** [Documentação Oficial do **React**](https://react.dev/reference/react)
---

## 👥 Autores
Liste os principais contribuidores. Você pode usar links para seus perfis.

| 👤 Nome | 🖼️ Foto | :octocat: GitHub | 💼 LinkedIn | 📤 Gmail |
|---------|----------|-----------------|-------------|-----------|
| Pedro Marcal Ballesteros  | <div align="center"><img src="https://github.com/Netroxx/PedroMar-al.github.io/blob/main/eu%20aurora.jpg" width="70px" height="70px"></div> | <div align="center"><a href="https://github.com/Netroxx"><img src="https://joaopauloaramuni.github.io/image/github6.png" width="50px" height="50px"></a></div> | <div align="center"><a href="www.linkedin.com/in/pedro-ballesteros-4b342b246"><img src="https://joaopauloaramuni.github.io/image/linkedin2.png" width="50px" height="50px"></a></div> | <div align="center"><a href="pedromarcal4@gmail.com"><img src="https://joaopauloaramuni.github.io/image/gmail3.png" width="50px" height="50px"></a></div> |



## 🤝 Contribuição
Guia para contribuições ao projeto.

1.  Faça um `fork` do projeto.
2.  Crie uma branch para sua feature (`git checkout -b feature/minha-feature`).
3. Commit suas mudanças (`git commit -m 'feat: Adiciona nova funcionalidade X'`). **(Utilize [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/))**
4.  Faça o `push` para a branch (`git push origin feature/minha-feature`).
5.  Abra um **Pull Request (PR)**.

> [!IMPORTANT]
> 📝 **Regras:** Por favor, verifique o arquivo [`CONTRIBUTING.md`](./CONTRIBUTING.md) para detalhes sobre nosso guia de estilo de código e o processo de submissão de PRs.

---

## 🙏 Agradecimentos

Gostaria de agradecer aos seguintes canais e pessoas que foram fundamentais para o desenvolvimento deste projeto:

* [**Engenharia de Software PUC Minas**](https://www.instagram.com/engsoftwarepucminas/) - Pelo apoio institucional, estrutura acadêmica e fomento à inovação e boas práticas de engenharia.
* [**Prof. Dr. João Paulo Aramuni**](https://github.com/joaopauloaramuni) - Pelos valiosos ensinamentos sobre **Arquitetura de Software** e **Padrões de Projeto**.
---



The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
