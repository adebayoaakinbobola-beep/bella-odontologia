import { useEffect, useState } from "react";
import { Menu, Phone, MessageCircle, X, ArrowUp } from "lucide-react";
import { CLINIC, whatsappLink } from "@/lib/clinic";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#equipe", label: "Equipe" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 shadow-card backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8">
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          <span
            className={`grid h-10 w-10 shrink-0 place-items-center rounded-full font-display text-lg ${
              scrolled ? "bg-primary text-primary-foreground" : "bg-background/90 text-primary"
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
              className={`block truncate text-[11px] tracking-[0.22em] uppercase ${
                scrolled ? "text-muted-foreground" : "text-primary-foreground/70"
              }`}
            >
              Francisco Beltrão · PR
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors hover:text-gold ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink("Olá! Gostaria de agendar uma consulta na Bella Odontologia.")}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" aria-hidden /> Agendar
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          className={`justify-self-end rounded-full p-2 lg:hidden ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          {open ? <Menu className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 lg:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 text-sm text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={CLINIC.phoneHref}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
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
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao topo"
          className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background text-foreground shadow-card transition-transform hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" aria-hidden />
        </button>
      )}
      <a
        href={CLINIC.phoneHref}
        aria-label="Ligar para a clínica"
        className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform hover:scale-110 md:hidden"
      >
        <Phone className="h-5 w-5" aria-hidden />
      </a>
      <a
        href={whatsappLink("Olá! Gostaria de agendar uma consulta na Bella Odontologia.")}
        target="_blank"
        rel="noopener"
        aria-label="Falar no WhatsApp"
        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 font-semibold text-white shadow-soft transition-transform hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" aria-hidden />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-24 left-4 z-50">
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
            className="mt-4 block rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
          >
            Iniciar conversa
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        className="rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground shadow-card"
      >
        Chat online
      </button>
    </div>
  );
}
