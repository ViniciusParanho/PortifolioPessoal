"use client"

import { useState } from "react"

const content = {
  pt: {
    title: "Sobre Mim",
    paragraphs: [
      "Sou estudante de Engenharia de Software apaixonado por tecnologia e por resolver problemas através do desenvolvimento de software.",
      "Tenho experiência com desenvolvimento de aplicações, modelagem e manipulação de bancos de dados, além de participação em projetos acadêmicos que envolvem criação de sistemas e aplicações web.",
      "Busco constantemente aprimorar minhas habilidades técnicas e criar soluções eficientes, participando de projetos que desafiem minha capacidade de análise, desenvolvimento e aprendizado contínuo.",
    ],
    skills: [
      "JavaScript / TypeScript",
      "React / Next.js",
      "Node.js",
      "Python",
      "PostgreSQL / MongoDB",
      "Git / GitHub",
      "Docker",
      "APIs REST",
    ],
    skillsTitle: "Tecnologias",
  },
  en: {
    title: "About Me",
    paragraphs: [
      "I am a Software Engineering student with a passion for technology and solving problems through software development.",
      "I have experience in application development, database modeling and manipulation, as well as participation in academic projects involving the creation of systems and web applications.",
      "I am constantly seeking to improve my technical skills and create efficient solutions, participating in projects that challenge my ability to analyze, develop, and learn continuously.  ",
    ],
    skills: [
      "JavaScript / TypeScript",
      "React / Next.js",
      "Node.js",
      "Python",
      "PostgreSQL / MongoDB",
      "Git / GitHub",
      "Docker",
      "REST APIs",
    ],
    skillsTitle: "Technologies",
  },
}

export function About() {
  const [lang, setLang] = useState<"pt" | "en">("pt")
  const t = content[lang]

  return (
    <section id="sobre" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            {t.title}
          </h2>
          <div className="h-px flex-1 bg-border" />
          <div className="flex gap-2">
            <button
              onClick={() => setLang("pt")}
              className={`rounded-md px-3 py-1 font-mono text-xs transition-all ${
                lang === "pt"
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Português"
            >
              PT
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-md px-3 py-1 font-mono text-xs transition-all ${
                lang === "en"
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground"
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-4 md:col-span-2">
            {t.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div>
            <h3 className="mb-4 font-mono text-sm font-semibold text-primary">
              {t.skillsTitle}
            </h3>
            <ul className="grid grid-cols-1 gap-2">
              {t.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 font-mono text-sm text-muted-foreground"
                >
                  <span className="text-primary">{">"}</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
