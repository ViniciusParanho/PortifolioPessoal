import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans scroll-smooth">
      {/* 1. Cabeçalho & Navegação Principal */}
      <header className="fixed top-0 w-full bg-white shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">PM.</div>
          <ul className="flex space-x-6">
            <li><a href="#sobre" className="hover:text-blue-600 transition">Sobre Mim</a></li>
            <li><a href="#projetos" className="hover:text-blue-600 transition">Projetos</a></li>
            <li><a href="#experiencia" className="hover:text-blue-600 transition">Experiências</a></li>
            <li><a href="#contato" className="hover:text-blue-600 transition">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* 2. Área de Conteúdo (Main Layout) */}
      <main className="pt-20">
        
        {/* Seção: Sobre Mim (Bilíngue) */}
        <section id="sobre" className="container mx-auto px-6 py-20 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold mb-4">Olá, eu sou o Vinícius Paranho</h1>
          <h2 className="text-2xl text-gray-600 mb-8">Estudante de engenharia de software</h2>
          
          <div className="max-w-3xl text-lg text-gray-700 space-y-6 text-justify">
            <p>
              <strong>PT:</strong> Sou estudante de engenharia de software apaixonado por resolver problemas complexos através de código. Tenho experiência com arquitetura de sistemas operacionais, gerenciamento de projetos e desenvolvimento web. Busco constantemente criar soluções eficientes e atuar em projetos que desafiem minha capacidade técnica.
            </p>
            <p>
              <strong>EN:</strong> I am a software engineering student passionate about solving complex problems through code. I have experience with operating systems architecture, project management, and web development. I constantly seek to create efficient solutions and work on projects that challenge my technical abilities.
            </p>
          </div>
        </section>

        {/* Seção: Projetos */}
        <section id="projetos" className="bg-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Meus Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Card de Projeto 1 */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition border border-gray-100">
                <h3 className="text-xl font-bold mb-2">Sistema de Gestão de Entregas</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Plataforma para gerenciamento e notificação de entregas em condomínios. Desenvolvido em equipe multidisciplinar aplicando metodologias ágeis e conceitos avançados de gerência de projetos.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">React</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Node.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">Scrum</span>
                </div>
                <a href="https://github.com/seu-usuario/repo-condominio" target="_blank" rel="noreferrer" className="text-blue-600 font-medium hover:underline text-sm">
                  Ver no GitHub &rarr;
                </a>
              </div>

              {/* Placeholder para projetos futuros */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition border border-gray-100 flex items-center justify-center">
                <span className="text-gray-400 font-medium">Projeto em Desenvolvimento</span>
              </div>

            </div>
          </div>
        </section>

        {/* Seção: Experiências */}
        <section id="experiencia" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Experiência Profissional</h2>
            <div className="max-w-3xl mx-auto border-l-2 border-blue-600 pl-6 space-y-8">
              
              {/* Item de Experiência */}
              <div className="relative">
                <div className="absolute -left-8 top-1 h-4 w-4 rounded-full bg-blue-600"></div>
                <h3 className="text-xl font-bold">Desenvolvedor Freelancer</h3>
                <span className="text-gray-500 font-medium text-sm">Upwork | Presente</span>
                <p className="mt-2 text-gray-700">
                  Atuação independente no desenvolvimento de soluções sob demanda para clientes globais, com foco em qualidade de entrega, comunicação eficaz e aplicação de boas práticas de Engenharia de Software.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Seção: Contato */}
        <section id="contato" className="bg-white py-20">
          <div className="container mx-auto px-6 max-w-lg">
            <h2 className="text-3xl font-bold text-center mb-8">Vamos Conversar?</h2>
            
            {/* Formulário visual (funcionalidade será na Sprint 02) */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nome</label>
                <input type="text" className="mt-1 w-full rounded-md border-gray-300 shadow-sm border p-2 focus:border-blue-500 focus:ring-blue-500" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">E-mail</label>
                <input type="email" className="mt-1 w-full rounded-md border-gray-300 shadow-sm border p-2 focus:border-blue-500 focus:ring-blue-500" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mensagem</label>
                <textarea className="mt-1 w-full rounded-md border-gray-300 shadow-sm border p-2 h-32 focus:border-blue-500 focus:ring-blue-500" placeholder="Como posso ajudar?"></textarea>
              </div>
              <button type="button" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition font-bold">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* 3. Rodapé */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
        <div className="container mx-auto px-6">
          <p>&copy; 2026 Pedro Marçal. Desenvolvido para o Laboratório de Desenvolvimento de Software (PUC Minas).</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
