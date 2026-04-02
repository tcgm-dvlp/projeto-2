"use client"

import { ArrowUpRight, Trophy, Calendar, MapPin, Award } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "TBR Regional Nova Lima",
    category: "Torneio Brasil de Robótica",
    description: "Participação na etapa regional do TBR em Nova Lima, onde nossa equipe demonstrou habilidades em programação, construção de robôs e trabalho em equipe.",
    icon: Trophy,
    featured: true,
    specs: ["Outubro 2025", "Nova Lima - MG", "Etapa Regional"],
  },
  {
    title: "Torneio Interno FHA",
    category: "Fundação Helena Antipoff",
    description: "Competição preparatória realizada no Poliesportivo da Escola Técnica Sandoval Soares de Azevedo, reunindo equipes em desafios de raciocínio lógico e criatividade.",
    icon: Calendar,
    featured: false,
    specs: ["Julho 2025", "Ibirité - MG", "14 Equipes"],
  },
  {
    title: "2º Torneio de Robótica FHA",
    category: "Fundação Helena Antipoff",
    description: "Segundo torneio interno da fundação que inspirou futuros inovadores com desafios de programação e construção de robôs.",
    icon: Award,
    featured: false,
    specs: ["Agosto 2024", "Campus FHA", "Torneio Interno"],
  },
  {
    title: "TBR Nacional 2024",
    category: "Torneio Brasil de Robótica",
    description: "Classificação para a etapa nacional do TBR, representando a região de Ibirité na grande final do torneio.",
    icon: MapPin,
    featured: false,
    specs: ["2024", "Etapa Nacional", "Participação"],
  },
]

export function Projects() {
  return (
    <section id="projetos" className="relative py-32">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-secondary bg-secondary/10 rounded-full mb-6">
              Nossos Projetos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Inovações que{" "}
              <span className="text-primary">transformam</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-pretty">
            Nossa trajetória em competições de robótica, representando a 
            Fundação Helena Antipoff em torneios regionais e nacionais.
          </p>
          <Link
            href="https://www.instagram.com/atena.tbr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
          >
            Acesse nosso Instagram
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-3xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-500 ${
                project.featured ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className={`p-8 lg:p-10 ${project.featured ? "lg:flex lg:items-center lg:gap-12" : ""}`}>
                {/* Icon */}
                <div className={`${project.featured ? "lg:w-1/3" : ""}`}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <project.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className={`${project.featured ? "lg:w-2/3" : ""}`}>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider text-secondary">
                        {project.category}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-bold mt-1 text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    <Link
                      href="#"
                      className="flex-shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                      aria-label={`Ver detalhes de ${project.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>

                  <p className="text-muted-foreground mb-6 text-pretty">
                    {project.description}
                  </p>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-2">
                    {project.specs.map((spec) => (
                      <span
                        key={spec}
                        className="px-3 py-1.5 text-xs font-medium bg-muted rounded-full text-muted-foreground"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
