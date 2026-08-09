import { Check, MessageCircle, Star, CalendarCheck } from "lucide-react";
import heroImg from "@/assets/hero-clinica.jpg";
import { CLINIC, whatsappLink } from "@/lib/clinic";

const selos = ["Atendimento Humanizado", "Equipamentos Modernos", "Profissionais Especializados"];

export function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-[92vh] overflow-hidden">
      <img
        src={heroImg}
        alt="Dentista atendendo uma paciente em consultório odontológico moderno"
        width={1600}
        height={1200}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 gradient-hero opacity-90" />

      <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 pt-32 pb-16 lg:px-8">
        <div className="max-w-2xl text-primary-foreground">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-4 py-1.5 text-xs tracking-[0.2em] uppercase">
            <Star className="h-3.5 w-3.5 fill-gold text-gold" aria-hidden /> {CLINIC.rating.toFixed(1)} no
            Google · {CLINIC.reviews} avaliações
          </p>
          <h1 className="mt-6 font-display text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            Seu sorriso merece o melhor cuidado.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Cuidamos da sua saúde bucal com tecnologia de ponta, atendimento humanizado e
            profissionais altamente qualificados.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#agendamento"
              className="inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-primary shadow-soft transition-transform hover:scale-105"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden /> Agendar Consulta
            </a>
            <a
              href={whatsappLink("Olá! Vim pelo site e quero agendar uma avaliação.")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <MessageCircle className="h-4 w-4" aria-hidden /> Falar no WhatsApp
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {selos.map((s) => (
              <li key={s} className="flex items-center gap-2 text-sm text-primary-foreground/90">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-gold/25">
                  <Check className="h-3 w-3 text-gold" aria-hidden />
                </span>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
