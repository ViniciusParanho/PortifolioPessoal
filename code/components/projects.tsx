import { ExternalLink, Github } from "lucide-react"

interface Project {
  year: string
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  image: string
}

const projects: Project[] = [
  {
    year: "2024",
    title: "Sistema de gestão do hotel Descanso Garantido, hotel localizado no centro de Itacaré – BA",
    description:
      "Com um forte compromisso em proporcionar um excelente atendimento e fidelizar seus clientes. O hotel conta com uma equipe composta por recepcionistas, auxiliares de limpeza, garçons e um gerente. Até o momento, o hotel realizava o controle de estadias, clientes e funcionários através de planilhas do Excel e registros em cadernos, o que frequentemente resultava em problemas organizacionais, incluindo conflitos de reserva, onde um mesmo quarto era reservado para mais de um cliente. Por isso, foi desenvolvido um sistema em linguagem C para resolver esses problemas e melhorar a eficiência operacional.",
    technologies: ["C"],
    githubUrl: "https://github.com/ViniciusParanho/Trabalho-Hotel--AEDS1",
    image: "pousada.jpg", 
    
  
  },
  {
    year: "2025",
    title: "Thivor automoveis",
    description:
      "Plataforma Web Full Stack para gestão de vendas, estoque e moderação de veículos seminovos. Automatiza o fluxo de aprovação de carros por clientes e fornece relatórios gerenciais para a revenda.",
    technologies: ["Java", "React", "JavaSpringBoot", "MySQL"],
    githubUrl: "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-2-ti3-9577100-thivorautomoveis",
    image: "thivor.png",
  },
  {
    year: "2025",
    title: "Spotify Clone",
    description:
      "Clone da interface do Spotify com funcionalidades básicas de reprodução de música, criação de playlists e navegação por artistas e álbuns. O projeto utiliza a API do Spotify para buscar dados em tempo real e oferecer uma experiência interativa ao usuário.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Spotify API"],
    githubUrl: "https://github.com/ViniciusParanho/Spotify",
    liveUrl: "https://example.com",
    image: "spotify.jpg",
  },
  {
    year: "2025",
    title: "sistema de controle de funcionários WEBBH",
    description:
      "Sistema de controle de funcionários para a empresa WEBBH, desenvolvido em Python utilizando o framework FastAPI. O sistema permite o gerenciamento eficiente dos dados dos funcionários, incluindo informações pessoais, cargos, departamentos e histórico de desempenho. Com uma interface web intuitiva, os gestores podem facilmente acessar e atualizar as informações dos funcionários, facilitando a tomada de decisões e melhorando a organização interna da empresa.",
    technologies: ["Next.js", "Python", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/ViniciusParanho/WEBBH-Funcionarios",
    liveUrl: "https://example.com",
    image: "webbh.png",
  },
]

export function Projects() {
  return (
    <section id="projetos" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Projetos
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-16">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`relative flex flex-col gap-6 pl-12 md:flex-row md:gap-12 md:pl-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2" />

                {/* Year label */}
                <div
                  className={`absolute left-12 top-0 font-mono text-xs text-primary md:static md:flex md:w-1/2 md:items-start md:pt-1 ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <span className="rounded-md bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
                    {project.year}
                  </span>
                </div>

                {/* Project card */}
                <div className="mt-6 md:mt-0 md:w-1/2">
                  <div className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80">
                    <div className="mb-4 overflow-hidden rounded-md">
                      <img
                        src={project.image}
                        alt={`Screenshot do projeto ${project.title}`}
                        className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="mb-2 text-lg font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary"
                        aria-label={`Ver código de ${project.title} no GitHub`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground transition-colors hover:text-primary"
                          aria-label={`Ver ${project.title} ao vivo`}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
