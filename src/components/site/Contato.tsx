import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  CreditCard,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";
import { CLINIC, whatsappLink } from "@/lib/clinic";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  telefone: z.string().trim().min(8, "Informe um telefone válido").max(20),
  email: z.string().trim().email("E-mail inválido").max(255),
  tratamento: z.string().trim().min(1, "Selecione um tratamento").max(80),
  data: z.string().trim().max(30).optional(),
  mensagem: z.string().trim().max(1000).optional(),
});

const opcoes = [
  "Avaliação Geral",
  "Implantes Dentários",
  "Clareamento Dental",
  "Lentes de Contato",
  "Ortodontia",
  "Odontopediatria",
  "Endodontia (Canal)",
  "Urgência Odontológica",
];

export function Agendamento() {
  const [erros, setErros] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const dados = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(dados);
    if (!parsed.success) {
      const map: Record<string, string> = {};
      for (const issue of parsed.error.issues) map[String(issue.path[0])] = issue.message;
      setErros(map);
      toast.error("Confira os campos destacados.");
      return;
    }
    setErros({});
    const d = parsed.data;
    const msg = `Olá! Quero agendar uma consulta.\nNome: ${d.nome}\nTelefone: ${d.telefone}\nE-mail: ${d.email}\nTratamento: ${d.tratamento}\nData preferida: ${d.data || "a combinar"}\nMensagem: ${d.mensagem || "-"}`;
    window.open(whatsappLink(msg), "_blank", "noopener");
    toast.success("Pedido enviado! Estamos te redirecionando para o WhatsApp.");
    e.currentTarget.reset();
  }

  const inputCls =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

  return (
    <section id="agendamento" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold tracking-[0.28em] text-teal uppercase">Agendamento</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">
            Agende sua consulta hoje mesmo
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Preencha o formulário e nossa recepção confirma seu horário em poucos minutos. Prefere
            conversar? Chame no WhatsApp ou ligue direto para a clínica.
          </p>

          <div className="mt-9 space-y-4">
            <a
              href={whatsappLink("Olá! Quero agendar uma consulta.")}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-transform hover:-translate-y-0.5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                <MessageCircle className="h-5 w-5" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block font-semibold">Agende pelo WhatsApp</span>
                <span className="block text-sm text-muted-foreground">Resposta rápida</span>
              </span>
            </a>
            <a
              href={CLINIC.phoneHref}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-transform hover:-translate-y-0.5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block font-semibold">{CLINIC.phone}</span>
                <span className="block text-sm text-muted-foreground">Clique para ligar</span>
              </span>
            </a>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {[
              { icon: CreditCard, t: "Parcelamos em até 12x" },
              { icon: ShieldCheck, t: "Convênios aceitos" },
              { icon: BadgeCheck, t: "Clínica registrada no CRO" },
            ].map((i) => (
              <div key={i.t} className="rounded-2xl bg-cream p-5">
                <i.icon className="h-5 w-5 text-primary" aria-hidden />
                <p className="mt-3 text-sm font-medium">{i.t}</p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-7 shadow-card sm:p-9">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="nome" className="mb-2 block text-sm font-medium">
                Nome completo
              </label>
              <input id="nome" name="nome" className={inputCls} placeholder="Seu nome" required />
              {erros['nome'] && <p className="mt-1 text-xs text-destructive">{erros['nome']}</p>}
            </div>
            <div>
              <label htmlFor="telefone" className="mb-2 block text-sm font-medium">
                Telefone / WhatsApp
              </label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                className={inputCls}
                placeholder="(46) 90000-0000"
                required
              />
              {erros['telefone'] && <p className="mt-1 text-xs text-destructive">{erros['telefone']}</p>}
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={inputCls}
                placeholder="voce@email.com"
                required
              />
              {erros['email'] && <p className="mt-1 text-xs text-destructive">{erros['email']}</p>}
            </div>
            <div>
              <label htmlFor="tratamento" className="mb-2 block text-sm font-medium">
                Tratamento desejado
              </label>
              <select id="tratamento" name="tratamento" className={inputCls} defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>
                {opcoes.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
              {erros['tratamento'] && (
                <p className="mt-1 text-xs text-destructive">{erros['tratamento']}</p>
              )}
            </div>
            <div>
              <label htmlFor="data" className="mb-2 block text-sm font-medium">
                Data preferida
              </label>
              <input id="data" name="data" type="date" className={inputCls} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="mensagem" className="mb-2 block text-sm font-medium">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                className={inputCls}
                placeholder="Conte brevemente o que você precisa"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-7 w-full rounded-2xl bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-hover"
          >
            Agendar Consulta
          </button>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Seus dados são tratados conforme a LGPD e usados apenas para contato.
          </p>
        </form>
      </div>
    </section>
  );
}

export function Localizacao() {
  return (
    <section id="contato" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-teal uppercase">Localização</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">Venha nos visitar</h2>
            <ul className="mt-8 space-y-5">
              {[
                { icon: MapPin, t: CLINIC.address, href: CLINIC.maps },
                { icon: Phone, t: CLINIC.phone, href: CLINIC.phoneHref },
                {
                  icon: MessageCircle,
                  t: "WhatsApp da clínica",
                  href: whatsappLink("Olá! Vim pelo site."),
                },
                { icon: Mail, t: CLINIC.email, href: `mailto:${CLINIC.email}` },
                { icon: Clock, t: CLINIC.hours },
              ].map((i) => (
                <li key={i.t} className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10">
                    <i.icon className="h-5 w-5 text-primary" aria-hidden />
                  </span>
                  {i.href ? (
                    <a
                      href={i.href}
                      target={i.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener"
                      className="pt-2 text-sm leading-relaxed text-foreground hover:text-primary"
                    >
                      {i.t}
                    </a>
                  ) : (
                    <span className="pt-2 text-sm leading-relaxed text-muted-foreground">{i.t}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-card">
            <iframe
              title="Mapa da Clínica Bella Odontologia em Francisco Beltrão"
              src="https://www.google.com/maps?q=R.%20Ver.%20Romeu%20Lauro%20Werlang%2C%20822%20-%20Centro%2C%20Francisco%20Beltr%C3%A3o%20-%20PR&output=embed"
              loading="lazy"
              className="h-[420px] w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="gradient-hero text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-display text-2xl">Bella Odontologia</p>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
            Clínica odontológica em Francisco Beltrão – PR. Implantes, ortodontia, estética dental e
            atendimento humanizado para toda a família.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={CLINIC.instagram}
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/25 hover:bg-primary-foreground/10"
            >
              <Instagram className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={CLINIC.facebook}
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/25 hover:bg-primary-foreground/10"
            >
              <Facebook className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>

        <nav>
          <h3 className="font-display text-lg">Menu</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            {[
              ["#sobre", "Sobre a clínica"],
              ["#tratamentos", "Tratamentos"],
              ["#equipe", "Equipe"],
              ["#depoimentos", "Avaliações"],
              ["#blog", "Blog"],
              ["#agendamento", "Agendamento"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-gold">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-lg">Atendimento</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li>{CLINIC.hours}</li>
            <li>
              <a href={CLINIC.phoneHref} className="hover:text-gold">
                {CLINIC.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CLINIC.email}`} className="hover:text-gold">
                {CLINIC.email}
              </a>
            </li>
            <li>{CLINIC.address}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg">Institucional</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li>Política de Privacidade</li>
            <li>LGPD</li>
            <li>Termos de Uso</li>
            <li>
              <a href="/sitemap.xml" className="hover:text-gold">
                Mapa do Site
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 px-5 py-6 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} Bella Odontologia · Responsável Técnica: Dra. Danielle
        C. Lourenço · CRO-PR 22533
      </div>
    </footer>
  );
}
