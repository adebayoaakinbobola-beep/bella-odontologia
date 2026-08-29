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

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <div
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${
          scrolled
            ? "border border-border/70 bg-background/80 shadow-card backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        }`}
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:grid-cols-[auto_1fr_auto]">
          <a href="#inicio" className="flex min-w-0 items-center gap-3">
            <span
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl font-display text-lg transition-colors ${
                scrolled ? "bg-primary text-primary-foreground" : "bg-background/95 text-primary"
              }`}
            >
              B
            </span>
            <span className="min-w-0">
              <span
                className={`block truncate font-display text-base leading-tight sm:text-lg ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                Bella Odontologia
              </span>
              <span
                className={`block truncate text-[10px] tracking-[0.24em] uppercase ${
                  scrolled ? "text-muted-foreground" : "text-primary-foreground/70"
                }`}
              >
                Francisco Beltrão · PR
              </span>
            </span>
          </a>

          <nav className="hidden items-center justify-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-teal ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#agendamento"
            className="hidden items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-hover lg:inline-flex"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden /> Agendar Consulta
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className={`justify-self-end rounded-xl p-2.5 transition-colors lg:hidden ${
              scrolled || open
                ? "bg-primary/5 text-foreground"
                : "bg-background/20 text-primary-foreground backdrop-blur"
            }`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="rounded-b-2xl border-t border-border bg-background px-5 pb-6 lg:hidden">
            <nav className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/70 py-4 text-base text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#agendamento"
                onClick={() => setOpen(false)}
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-4 text-sm font-semibold text-primary-foreground"
              >
                <CalendarCheck className="h-4 w-4" aria-hidden /> Agendar Consulta
              </a>
              <a
                href={CLINIC.phoneHref}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl border border-border px-5 py-4 text-sm font-semibold text-foreground"
              >
                <Phone className="h-4 w-4" aria-hidden /> {CLINIC.phone}
              </a>
            </nav>
          </div>
        )}
      </div>
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
      <div className="fixed right-5 bottom-5 z-50 hidden flex-col items-end gap-3 md:flex">
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar ao topo"
            className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-background text-foreground shadow-card transition-transform duration-200 hover:-translate-y-0.5"
          >
            <ArrowUp className="h-5 w-5" aria-hidden />
          </button>
        )}
        <a
          href={whatsappLink("Olá! Gostaria de agendar uma consulta na Bella Odontologia.")}
          target="_blank"
          rel="noopener"
          aria-label="Falar no WhatsApp"
          className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 font-semibold text-white shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
          WhatsApp
        </a>
      </div>

      {/* Mobile sticky CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <a
          href={whatsappLink("Olá! Gostaria de agendar uma consulta na Bella Odontologia.")}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-white"
        >
          <MessageCircle className="h-5 w-5" aria-hidden /> WhatsApp
        </a>
        <a
          href="#agendamento"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground"
        >
          <CalendarCheck className="h-5 w-5" aria-hidden /> Agendar
        </a>
      </div>
    </>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-24 left-4 z-40 hidden md:block">
      {open && (
        <div className="mb-3 w-72 rounded-2xl border border-border bg-card p-5 shadow-soft">
          <div className="flex items-start justify-between gap-2">
            <p className="font-display text-lg">Podemos ajudar?</p>
            <button onClick={() => setOpen(false)} aria-label="Fechar chat">
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Tire suas dúvidas agora com nossa equipe de atendimento.
          </p>
          <a
            href={whatsappLink("Olá! Tenho uma dúvida sobre tratamentos.")}
            target="_blank"
            rel="noopener"
            className="mt-4 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Iniciar conversa
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground shadow-card"
      >
        Chat online
      </button>
    </div>
  );
}
