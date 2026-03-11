import { ExternalLink } from "lucide-react"

interface Experience {
  company: string
  role: string
  period: string
  description: string
  technologies: string[]
  url?: string
}

const experiences: Experience[] = [
  {
    company: "Empresa WEBBH",
    role: "Analista de suporte computacional",
    period: "Março 2024 — Presente",
    description:
      "Responsável por fornecer suporte técnico aos usuários, resolver problemas de hardware e software, e garantir o bom funcionamento dos sistemas internos. Atuação em troubleshooting, manutenção preventiva e implementação de melhorias na infraestrutura de TI da empresa.",
    technologies: ["Java","PostgreSQL"],
    url: "https://example.com",
  },
  
  {
    company: "Freelancer",
    role: "Desenvolvedor Web",
    period: "Jan 2023 — Mai 2024",
    description:
      "Desenvolvimento de sites institucionais e lojas virtuais para pequenos negócios, utilizando tecnologias modernas para criar experiências digitais atraentes e funcionais. Responsável por todo o ciclo de desenvolvimento, desde a concepção até a entrega final, garantindo a satisfação do cliente e a qualidade do produto.",
    technologies: ["Next.js", "WordPress", "CSS", "JavaScript"],
  },
  
]

export function Experiences() {
  return (
    <section id="experiencias" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Experiências
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="flex flex-col gap-6">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.role}`}
              className="group grid gap-4 rounded-lg border border-transparent p-6 transition-all hover:border-border hover:bg-card md:grid-cols-[200px_1fr]"
            >
              <div className="pt-1">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {exp.period}
                </p>
              </div>

              <div>
                <h3 className="mb-1 flex items-center gap-2 text-lg font-semibold text-foreground">
                  {exp.role}
                  <span className="text-primary">·</span>
                  {exp.url ? (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary transition-colors hover:underline"
                    >
                      {exp.company}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="text-primary">{exp.company}</span>
                  )}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
