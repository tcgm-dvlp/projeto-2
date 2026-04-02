import { Target, Lightbulb, Users } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Missão",
    description: "Queremos mostrar que robótica pode transformar vidas. Cada projeto é uma chance de aprender, crescer e inspirar outros jovens a sonharem grande.",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "A gente adora experimentar coisas novas! Cada desafio é uma oportunidade de pensar diferente e encontrar soluções que ninguém imaginou antes.",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Aqui ninguém faz nada sozinho. Cada membro traz algo único e juntos somos muito mais fortes. É assim que a magia acontece.",
  },
]

export function About() {
  return (
    <section id="sobre" className="relative py-32 bg-card">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-6">
            Quem Somos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            Paixão por <span className="text-primary">robótica</span> e{" "}
            <span className="text-secondary">tecnologia</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Fundada em 2020, a Atena nasceu de uma união de estudantes com o mesmo sonho: 
            buscar conhecimento e aprendizado.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <value.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>

              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 lg:gap-12 max-w-md mx-auto">
          {[
            { number: "5+", label: "Anos de Experiência" },
            { number: "10", label: "Membros Ativos" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
