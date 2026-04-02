const team = [
  {
    name: "Tulio Gomes",
    role: "Programação",
    initials: "TG",
  },
  {
    name: "Julia Duarte",
    role: "Programação",
    initials: "JD",
  },
  {
    name: "Maria Flor",
    role: "Organização",
    initials: "MF",
  },
  {
    name: "Cedric Luzzi",
    role: "Mérito Científico",
    initials: "CL",
  },
  {
    name: "Raynara Emanuelle",
    role: "Mérito Científico",
    initials: "RE",
  },
  {
    name: "Vivian de Medeiros",
    role: "Mérito Científico",
    initials: "VM",
  },
  {
    name: "Yamin Ramos",
    role: "Líder",
    initials: "YR",
  },
  {
    name: "Ágata Maisa",
    role: "Mérito Científico",
    initials: "AM",
  },
  {
    name: "João Henrique",
    role: "Programação",
    initials: "JH",
  },
  {
    name: "Sarah Gregory",
    role: "Organização e Método",
    initials: "SG",
  },
]

export function Team() {
  return (
    <section id="equipe" className="relative py-32 bg-card overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-6">
            Nossa Equipe
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
            Nossos <span className="text-secondary">Integrantes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conheça as pessoas que fazem a Atena acontecer. Cada um traz sua energia, 
            suas ideias e seu jeito único de contribuir para o time.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group relative p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary via-primary/80 to-secondary flex items-center justify-center mb-6 mx-auto group-hover:scale-105 transition-transform duration-500">
                <span className="text-2xl font-bold text-primary-foreground">
                  {member.initials}
                </span>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary">
                  {member.role}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-24 h-24 -translate-y-1/2 translate-x-1/2 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
