import { useEffect, useState } from "react";
import { Menu, Phone, MessageCircle, X, ArrowUp, CalendarCheck, ChevronRight } from "lucide-react";
import { CLINIC, whatsappLink } from "@/lib/clinic";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#equipe", label: "Equipe" },
  { href: "#depoimentos", label: "Avaliações" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open || !window.matchMedia("(max-width: 1023px)").matches) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const light = !scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          light
            ? "border-b border-primary-foreground/10 bg-transparent"
            : "border-b border-border bg-background/95 backdrop-blur-lg shadow-sm"
        }`}
      >
      <div className="mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-5 py-4 sm:px-8 lg:grid-cols-[auto_1fr_auto] lg:py-5">
        <a href="#inicio" className="flex min-w-0 items-baseline gap-3">
          <span
            className={`font-display text-xl leading-none tracking-tight sm:text-[1.4rem] ${
              light ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            Bella
            <span className={light ? "text-primary-foreground/70" : "text-primary/70"}>
              {" "}
              Odontologia
            </span>
          </span>
          <span
            className={`hidden kicker sm:inline ${
              light ? "text-primary-foreground/55" : "text-muted-foreground"
            }`}
          >
            Francisco Beltrão
          </span>
        </a>

        <nav className="hidden items-center justify-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`link-underline text-[0.8rem] font-medium tracking-wide transition-colors ${
                light
                  ? "text-primary-foreground/85 hover:text-primary-foreground"
                  : "text-foreground/75 hover:text-primary"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={CLINIC.phoneHref}
            className={`text-[0.8rem] font-medium tracking-wide link-underline ${
              light ? "text-primary-foreground/85" : "text-foreground/75"
            }`}
          >
            {CLINIC.phone}
          </a>
          <a
            href="#agendamento"
            className={`inline-flex items-center gap-2 rounded-lg px-7 py-3 text-[0.78rem] font-semibold tracking-[0.08em] uppercase transition-all duration-300 ${
              light
                ? "bg-primary-foreground text-primary shadow-sm hover:bg-gold hover:text-primary"
                : "bg-primary text-primary-foreground shadow-sm hover:shadow-elevated hover:-translate-y-0.5"
            }`}
          >
            <CalendarCheck className="h-4 w-4" aria-hidden /> Agendar
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className={`justify-self-end rounded-lg p-2.5 transition-colors lg:hidden ${
            light ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      </header>

      {open && (
        <div className="fixed inset-x-0 top-[53px] bottom-0 z-[60] overflow-y-auto overscroll-contain border-t border-border bg-background px-5 pb-8 lg:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between border-b border-border/70 py-4 font-display text-xl text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#agendamento"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-4 text-[0.78rem] font-semibold tracking-[0.08em] text-primary-foreground uppercase shadow-sm hover:shadow-elevated hover:-translate-y-0.5"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden /> Agendar minha avaliação
            </a>
            <a
              href={CLINIC.phoneHref}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-4 text-sm font-semibold text-foreground hover:border-teal hover:text-teal"
            >
              <Phone className="h-4 w-4" aria-hidden /> {CLINIC.phone}
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop floating WhatsApp */}
      <div className="fixed right-6 bottom-24 z-50 hidden flex-col items-end gap-3 md:flex lg:bottom-6">
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar ao topo"
            className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-background text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ArrowUp className="h-4 w-4" aria-hidden />
          </button>
        )}
        <a
          href={whatsappLink("Olá! Vim pelo site da Bella Odontologia e gostaria de saber mais sobre os tratamentos e agendar uma avaliação.")}
          target="_blank"
          rel="noopener"
          aria-label="Falar no WhatsApp"
          className="inline-flex items-center gap-2.5 rounded-lg bg-[#128C7E] px-5 py-3.5 text-[0.78rem] font-semibold tracking-[0.08em] text-white uppercase shadow-soft transition-all duration-300 hover:bg-[#0f7568] hover:shadow-elevated hover:-translate-y-1"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          WhatsApp
        </a>
      </div>

      {/* Mobile sticky CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/98 p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
        <a
          href={whatsappLink("Olá! Vim pelo site da Bella Odontologia e gostaria de saber mais sobre os tratamentos e agendar uma avaliação.")}
          target="_blank"
          rel="noopener"
          aria-label="Falar no WhatsApp. Tire suas dúvidas agora"
          className="group flex min-w-0 min-h-16 items-center gap-2 rounded-lg bg-[#128C7E] px-2.5 text-white shadow-[0_6px_18px_rgba(18,140,126,0.24)] transition-all hover:bg-[#0f7568] sm:px-3"
        >
          <MessageCircle className="h-7 w-7 shrink-0" strokeWidth={1.8} aria-hidden />
          <span className="min-w-0 flex-1 text-left leading-tight">
            <span className="block truncate text-[0.76rem] font-semibold sm:text-[0.8rem]">
              Falar no WhatsApp
            </span>
            <span className="mt-1 block truncate text-[0.62rem] text-white/75 sm:text-[0.66rem]">
              Tire suas dúvidas agora
            </span>
          </span>
          <ChevronRight className="h-4 w-4 shrink-0 text-white/70 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </a>
        <a
          href="#agendamento"
          onClick={(event) => {
            event.preventDefault();
            const appointmentSection = document.getElementById("agendamento");
            const header = document.querySelector("header");
            if (!appointmentSection) return;

            const headerHeight = header?.getBoundingClientRect().height ?? 0;
            const targetPosition =
              appointmentSection.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
            window.scrollTo({ top: Math.max(0, targetPosition), behavior: "smooth" });
          }}
          aria-label="Agendar. Escolha o melhor horário"
          className="group flex min-w-0 min-h-16 items-center gap-2 rounded-lg border border-gold/80 bg-primary px-2.5 text-primary-foreground shadow-[0_6px_18px_rgba(74,20,30,0.2)] transition-all hover:border-gold hover:bg-primary/95 sm:px-3"
        >
          <CalendarCheck className="h-6 w-6 shrink-0 text-gold" strokeWidth={1.8} aria-hidden />
          <span className="min-w-0 flex-1 text-left leading-tight">
            <span className="block truncate text-[0.76rem] font-semibold sm:text-[0.8rem]">Agendar</span>
            <span className="mt-1 block truncate text-[0.62rem] text-primary-foreground/70 sm:text-[0.66rem]">
              Escolha o melhor horário
            </span>
          </span>
          <ChevronRight className="h-4 w-4 shrink-0 text-gold/80 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </a>
      </div>
    </>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 left-6 z-40 hidden lg:block">
      {open && (
        <div className="mb-3 w-64 rounded-lg border border-border bg-card p-5 shadow-soft">
          <div className="flex items-start justify-between gap-2">
            <p className="font-display text-base">Dúvidas?</p>
            <button onClick={() => setOpen(false)} aria-label="Fechar chat">
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            Fale com nossa equipe
          </p>
          <a
            href={whatsappLink("Olá! Vim pelo site da Bella Odontologia e gostaria de saber mais sobre os tratamentos e agendar uma avaliação.")}
            target="_blank"
            rel="noopener"
            className="mt-4 block rounded-lg bg-primary px-3 py-2.5 text-center text-[0.7rem] font-semibold tracking-[0.08em] text-primary-foreground uppercase"
          >
            Conversar
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="rounded-lg border border-border bg-background px-3 py-2 text-[0.65rem] font-medium tracking-[0.12em] text-foreground uppercase transition-colors hover:border-primary hover:text-primary"
      >
        ? Chat
      </button>
    </div>
  );
}
