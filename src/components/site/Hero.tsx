import { MessageCircle, Star, CalendarCheck } from "lucide-react";
import heroImg from "@/assets/hero-clinica-new.png";
import { CLINIC, whatsappLink } from "@/lib/clinic";

const selos = ["Atendimento humanizado", "Tecnologia moderna", "Profissionais especializados"];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-primary text-primary-foreground"
    >
      {/* Imagem de fundo — enquadrada à direita, escurecida à esquerda para leitura */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          width={1600}
          height={1200}
          fetchPriority="high"
          className="h-full w-full object-cover object-[70%_center] opacity-60 lg:opacity-80"
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/85 to-primary/25 lg:to-primary/20" />
        <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-primary/30" />
      </div>

      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 pt-16 pb-14 max-md:pt-12 max-md:pb-8 sm:px-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:pt-36 lg:pb-24">
        <div className="max-w-2xl">
          <p className="kicker block w-full max-w-full text-gold max-md:whitespace-nowrap max-md:text-[0.625rem] max-md:tracking-[0.12em]">
            Clínica odontológica · Francisco Beltrão · PR
          </p>

          <h1 className="mt-5 font-display text-[2.5rem] leading-[0.98] sm:text-[4.2rem] lg:text-[5.2rem]">
            Seu sorriso merece
            <span className="block italic text-gold">cuidado extraordinário</span>
          </h1>

          <div aria-hidden className="mt-6 h-px w-24 bg-gold/70 max-md:mt-4" />

          <p className="mt-4 max-w-lg text-base leading-relaxed text-primary-foreground/85 max-md:mt-3 sm:text-[1.05rem]">
            Odontologia moderna, diagnóstico preciso e atendimento humanizado — um plano de
            tratamento construído sob medida para a saúde e a confiança do seu sorriso.
          </p>

          <div className="mt-5 flex flex-col gap-3 max-md:mt-4 max-md:gap-2 sm:flex-row">
            <a
              href="#agendamento"
              className="group inline-flex items-center justify-center gap-3 rounded-lg bg-primary-foreground px-10 py-5 text-[0.78rem] font-semibold tracking-[0.1em] text-primary uppercase transition-all duration-300 shadow-soft hover:shadow-elevated hover:-translate-y-1 sm:py-6"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden /> Agendar minha avaliação
            </a>
            <a
              href={whatsappLink("Olá! Vim pelo site e quero agendar uma avaliação.")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-3 rounded-lg border-2 border-primary-foreground/50 px-10 py-5 text-[0.78rem] font-semibold tracking-[0.1em] text-primary-foreground uppercase transition-all duration-300 hover:border-gold hover:text-gold hover:bg-primary-foreground/5 hover:shadow-soft sm:py-6"
            >
              <MessageCircle className="h-4 w-4" aria-hidden /> Falar no WhatsApp
            </a>
          </div>

          <dl className="mt-6 grid max-w-xl grid-cols-2 gap-x-4 gap-y-3 border-t border-primary-foreground/20 pt-4 max-md:mt-5 max-md:gap-y-2 max-md:pt-3 sm:mt-16 sm:grid-cols-3 sm:gap-x-0 sm:pt-8">
            <div className="min-w-0">
              <dt
                className="flex items-center gap-1.5"
                aria-label={`${CLINIC.rating.toFixed(1)} de 5 no Google`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" aria-hidden />
                ))}
              </dt>
              <dd className="mt-1 text-xs leading-relaxed text-primary-foreground/70 max-md:text-[0.7rem] max-md:leading-snug">
                {CLINIC.rating.toFixed(1)} no Google · {CLINIC.reviews} avaliações
              </dd>
            </div>
            {selos.map((s) => (
              <div key={s} className="min-w-0">
                <dt className="font-display text-base text-primary-foreground">
                  {s.split(" ")[0]}
                </dt>
                <dd className="mt-1 text-xs leading-relaxed text-primary-foreground/70 max-md:text-[0.7rem] max-md:leading-snug">
                  {s}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
