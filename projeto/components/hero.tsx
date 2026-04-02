"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Temporada 2026 em andamento
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-balance">
              Equipe{" "}
              <span className="text-secondary">Atena</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              Atena, uma equipe da Fundação Helena Antipoff focada na inovação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#projetos"
                className="group px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-2"
              >
                Ver Projetos
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </Link>
              <Link
                href="#sobre"
                className="px-8 py-4 border border-border text-foreground font-medium rounded-full hover:bg-muted/50 transition-all duration-300 flex items-center justify-center"
              >
                Conheça a Equipe
              </Link>
            </div>
          </div>

          {/* Logo Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/30 via-primary/20 to-transparent blur-3xl animate-pulse" />
              
              {/* Logo */}
              <div className="relative w-full h-full animate-float">
                <Image
                  src="/images/logo.png"
                  alt="Atena - Equipe de Robótica"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  loading="eager"
                />
              </div>

              {/* Decorative Rings */}
              <div className="absolute inset-8 rounded-full border border-primary/20 animate-spin-slow" />
              <div className="absolute inset-16 rounded-full border border-secondary/20 animate-spin-slow-reverse" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Role para explorar</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
