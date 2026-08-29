import { Check, MessageCircle, Star, CalendarCheck, HeartHandshake } from "lucide-react";
import heroImg from "@/assets/hero-clinica.jpg";
import { CLINIC, whatsappLink } from "@/lib/clinic";
import { Reveal } from "./Reveal";

const selos = ["Atendimento humanizado", "Tecnologia moderna", "Profissionais especializados"];

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden gradient-soft pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 -z-10 h-[520px] w-[520px] rounded-full bg-teal/10 blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">
        <Reveal>
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground shadow-card">
              <span className="flex" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </span>
              {CLINIC.rating.toFixed(1)} no Google · {CLINIC.reviews} avaliações
            </p>

            <h1 className="mt-7 font-display text-[2.6rem] leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.1rem]">
              Seu sorriso merece um cuidado <span className="text-teal">extraordinário</span>.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Odontologia moderna, tecnologia avançada e atendimento humanizado para transformar a
              saúde e a confiança do seu sorriso.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#agendamento"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-hover"
              >
                <CalendarCheck className="h-4 w-4" aria-hidden /> Agendar minha avaliação
              </a>
              <a
                href={whatsappLink("Olá! Vim pelo site e quero agendar uma avaliação.")}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-8 py-4 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-teal hover:text-teal"
              >
                <MessageCircle className="h-4 w-4" aria-hidden /> Falar no WhatsApp
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
              {selos.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-teal/12">
                    <Check className="h-3 w-3 text-teal" aria-hidden />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="relative">
            <div className="overflow-hidden rounded-[28px] shadow-soft">
              <img
                src={heroImg}
                alt="Dentista atendendo uma paciente em consultório odontológico moderno"
                width={1200}
                height={1400}
                fetchPriority="high"
                className="h-[380px] w-full object-cover sm:h-[500px] lg:h-[580px]"
              />
            </div>

            <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-card sm:left-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal/12">
                <HeartHandshake className="h-5 w-5 text-teal" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-semibold">Atendimento personalizado</span>
                <span className="block text-xs text-muted-foreground">Plano individual para você</span>
              </span>
            </div>

            <div className="absolute -top-4 right-4 hidden items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-card sm:flex">
              <span className="flex" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </span>
              <span className="text-sm font-semibold">{CLINIC.rating.toFixed(1)} Google</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
