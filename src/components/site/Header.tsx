import { useEffect, useState } from "react";
import { Menu, Phone, MessageCircle, X, ArrowUp, CalendarCheck } from "lucide-react";
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

  const light = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        light
          ? "border-b border-primary-foreground/15 bg-transparent"
          : "border-b border-border bg-background/92 backdrop-blur-xl"
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
            className={`inline-flex items-center gap-2 rounded-xs px-6 py-3 text-[0.78rem] font-semibold tracking-[0.08em] uppercase transition-all duration-300 ${
              light
                ? "bg-primary-foreground text-primary hover:bg-gold hover:text-primary"
                : "bg-primary text-primary-foreground hover:bg-teal"
            }`}
          >
            <CalendarCheck className="h-4 w-4" aria-hidden /> Agendar
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className={`justify-self-end rounded-xs p-2.5 transition-colors lg:hidden ${
            light ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-8 lg:hidden">
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
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xs bg-primary px-5 py-4 text-[0.78rem] font-semibold tracking-[0.08em] text-primary-foreground uppercase"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden /> Agendar minha avaliação
            </a>
            <a
              href={CLINIC.phoneHref}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xs border border-border px-5 py-4 text-sm font-semibold text-foreground"
            >
              <Phone className="h-4 w-4" aria-hidden /> {CLINIC.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
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
      <div className="fixed right-6 bottom-6 z-50 hidden flex-col items-end gap-3 md:flex">
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar ao topo"
            className="grid h-11 w-11 place-items-center rounded-xs border border-border bg-background text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ArrowUp className="h-4 w-4" aria-hidden />
          </button>
        )}
        <a
          href={whatsappLink("Olá! Gostaria de agendar uma consulta na Bella Odontologia.")}
          target="_blank"
          rel="noopener"
          aria-label="Falar no WhatsApp"
          className="inline-flex items-center gap-2.5 rounded-xs bg-[#128C7E] px-5 py-3.5 text-[0.78rem] font-semibold tracking-[0.08em] text-white uppercase shadow-soft transition-colors duration-300 hover:bg-[#0f7568]"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          WhatsApp
        </a>
      </div>

      {/* Mobile sticky CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-background/96 backdrop-blur md:hidden">
        <a
          href={whatsappLink("Olá! Gostaria de agendar uma consulta na Bella Odontologia.")}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center gap-2 border-r border-border px-4 py-4 text-[0.72rem] font-semibold tracking-[0.08em] text-foreground uppercase"
        >
          <MessageCircle className="h-4 w-4 text-[#128C7E]" aria-hidden /> WhatsApp
        </a>
        <a
          href="#agendamento"
          className="inline-flex items-center justify-center gap-2 bg-primary px-4 py-4 text-[0.72rem] font-semibold tracking-[0.08em] text-primary-foreground uppercase"
        >
          <CalendarCheck className="h-4 w-4" aria-hidden /> Agendar
        </a>
      </div>
    </>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 left-6 z-40 hidden md:block">
      {open && (
        <div className="mb-3 w-72 rounded-xs border border-border bg-card p-6 shadow-soft">
          <div className="flex items-start justify-between gap-2">
            <p className="font-display text-lg">Podemos ajudar?</p>
            <button onClick={() => setOpen(false)} aria-label="Fechar chat">
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Tire suas dúvidas agora com nossa equipe de atendimento.
          </p>
          <a
            href={whatsappLink("Olá! Tenho uma dúvida sobre tratamentos.")}
            target="_blank"
            rel="noopener"
            className="mt-5 block rounded-xs bg-primary px-4 py-3 text-center text-[0.75rem] font-semibold tracking-[0.08em] text-primary-foreground uppercase"
          >
            Iniciar conversa
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="rounded-xs border border-border bg-background px-4 py-2.5 text-[0.72rem] font-medium tracking-[0.12em] text-foreground uppercase transition-colors hover:border-primary hover:text-primary"
      >
        Chat online
      </button>
    </div>
  );
}
