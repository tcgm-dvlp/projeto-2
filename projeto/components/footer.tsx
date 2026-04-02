import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logo.png"
                alt="Atena Robotics Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-light tracking-wide text-foreground">
              <span className="text-secondary">Atena</span>
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {["Início", "Sobre", "Projetos", "Equipe", "Contato"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Atena Robotics. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
