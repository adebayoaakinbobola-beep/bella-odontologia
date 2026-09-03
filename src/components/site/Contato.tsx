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
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary max-md:min-h-12 max-md:py-2.5 max-md:text-base";

  return (
    <section id="agendamento" className="bg-background py-16 max-md:pt-10 max-md:pb-24 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold tracking-[0.28em] text-teal uppercase">Agendamento</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl max-md:mt-3 max-md:text-[1.75rem] max-md:leading-tight">
            Agende sua consulta hoje mesmo
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground max-md:mt-3 max-md:leading-normal">
            Preencha o formulário e nossa recepção confirma seu horário em poucos minutos. Prefere
            conversar? Chame no WhatsApp ou ligue direto para a clínica.
          </p>

          <div className="mt-9 space-y-4 max-md:mt-6 max-md:space-y-3">
            <a
              href={whatsappLink("Olá! Quero agendar uma consulta.")}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-transform hover:-translate-y-0.5 max-md:gap-3 max-md:px-4 max-md:py-3.5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground max-md:h-10 max-md:w-10">
                <MessageCircle className="h-5 w-5 max-md:h-4 max-md:w-4" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block font-semibold">Agende pelo WhatsApp</span>
                <span className="block text-sm text-muted-foreground">Resposta rápida</span>
              </span>
            </a>
            <a
              href={CLINIC.phoneHref}
              className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-transform hover:-translate-y-0.5 max-md:gap-3 max-md:px-4 max-md:py-3.5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground max-md:h-10 max-md:w-10">
                <Phone className="h-5 w-5 max-md:h-4 max-md:w-4" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block font-semibold">{CLINIC.phone}</span>
                <span className="block text-sm text-muted-foreground">Clique para ligar</span>
              </span>
            </a>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-3 max-md:mt-7 max-md:gap-3">
            {[
              { icon: CreditCard, t: "Parcelamos em até 12x" },
              { icon: ShieldCheck, t: "Convênios aceitos" },
              { icon: BadgeCheck, t: "Clínica registrada no CRO" },
            ].map((i) => (
              <div
                key={i.t}
                className="rounded-lg bg-cream p-5 max-md:flex max-md:min-h-[72px] max-md:items-center max-md:gap-4 max-md:px-4 max-md:py-3"
              >
                <i.icon
                  className="h-5 w-5 shrink-0 text-primary max-md:h-5 max-md:w-5"
                  aria-hidden
                />
                <p className="mt-3 text-sm font-medium max-md:mt-0 max-md:text-[0.8rem]">{i.t}</p>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-lg border border-border bg-card p-7 shadow-card sm:p-9 max-md:p-5 max-md:pb-14"
        >
          <div className="grid gap-5 sm:grid-cols-2 max-md:gap-3">
            <div className="sm:col-span-2">
              <label
                htmlFor="nome"
                className="mb-2 block text-sm font-medium max-md:mb-1.5 max-md:text-[0.8125rem]"
              >
                Nome completo
              </label>
              <input id="nome" name="nome" className={inputCls} placeholder="Seu nome" required />
              {erros["nome"] && <p className="mt-1 text-xs text-destructive">{erros["nome"]}</p>}
            </div>
            <div>
              <label
                htmlFor="telefone"
                className="mb-2 block text-sm font-medium max-md:mb-1.5 max-md:text-[0.8125rem]"
              >
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
              {erros["telefone"] && (
                <p className="mt-1 text-xs text-destructive">{erros["telefone"]}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium max-md:mb-1.5 max-md:text-[0.8125rem]"
              >
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
              {erros["email"] && <p className="mt-1 text-xs text-destructive">{erros["email"]}</p>}
            </div>
            <div>
              <label
                htmlFor="tratamento"
                className="mb-2 block text-sm font-medium max-md:mb-1.5 max-md:text-[0.8125rem]"
              >
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
              {erros["tratamento"] && (
                <p className="mt-1 text-xs text-destructive">{erros["tratamento"]}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="data"
                className="mb-2 block text-sm font-medium max-md:mb-1.5 max-md:text-[0.8125rem]"
              >
                Data preferida
              </label>
              <input id="data" name="data" type="date" className={inputCls} />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="mensagem"
                className="mb-2 block text-sm font-medium max-md:mb-1.5 max-md:text-[0.8125rem]"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                className={`${inputCls} max-md:h-[120px] max-md:min-h-[110px]`}
                placeholder="Conte brevemente o que você precisa"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-7 w-full rounded-lg bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-elevated max-md:mt-5 max-md:min-h-12 max-md:py-3"
          >
            Agendar Consulta
          </button>
          <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground max-md:mt-3">
            Seus dados são tratados conforme a LGPD e usados apenas para contato.
          </p>
        </form>
      </div>
    </section>
  );
}

export function Localizacao() {
  return (
    <section id="contato" className="bg-cream py-16 max-md:pt-10 max-md:pb-24 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 max-md:gap-7 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-teal uppercase">
              Localização
            </p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl max-md:mt-3 max-md:text-[1.75rem] max-md:leading-tight">
              Venha nos visitar
            </h2>
            <ul className="mt-8 space-y-5 max-md:mt-6 max-md:space-y-4">
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
                <li key={i.t} className="flex items-start gap-4 max-md:items-center">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10">
                    <i.icon className="h-5 w-5 text-primary" aria-hidden />
                  </span>
                  {i.href ? (
                    <a
                      href={i.href}
                      target={i.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener"
                      className="min-w-0 flex-1 pt-2 text-sm leading-relaxed text-foreground hover:text-primary max-md:pt-0"
                    >
                      {i.t}
                    </a>
                  ) : (
                    <span className="min-w-0 flex-1 pt-2 text-sm leading-relaxed text-muted-foreground max-md:pt-0">
                      {i.t}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-lg shadow-card max-md:rounded-lg">
            <iframe
              title="Mapa da Clínica Bella Odontologia em Francisco Beltrão"
              src="https://www.google.com/maps?q=R.%20Ver.%20Romeu%20Lauro%20Werlang%2C%20822%20-%20Centro%2C%20Francisco%20Beltr%C3%A3o%20-%20PR&output=embed"
              loading="lazy"
              className="h-[420px] w-full border-0 max-md:h-[310px]"
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
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8 max-md:gap-6 max-md:py-10">
        <div>
          <p className="font-display text-2xl">Bella Odontologia</p>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/85 max-md:mt-3 max-md:leading-snug">
            Clínica odontológica em Francisco Beltrão – PR. Implantes, ortodontia, estética dental e
            atendimento humanizado para toda a família.
          </p>
          <div className="mt-6 flex gap-3 max-md:mt-4">
            <a
              href={CLINIC.instagram}
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-lg border border-primary-foreground/25 hover:bg-primary-foreground/10"
            >
              <Instagram className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={CLINIC.facebook}
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-lg border border-primary-foreground/25 hover:bg-primary-foreground/10"
            >
              <Facebook className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>

        <nav>
          <h3 className="font-display text-lg">Menu</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/90 max-md:mt-3 max-md:space-y-1.5">
            {[
              ["#sobre", "Sobre a clínica"],
              ["#tratamentos", "Tratamentos"],
              ["#equipe", "Equipe"],
              ["#depoimentos", "Avaliações"],
              ["#blog", "Blog"],
              ["#agendamento", "Agendamento"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="block py-0.5 transition-colors hover:text-gold">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-lg">Atendimento</h3>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-primary-foreground/90 max-md:mt-3 max-md:space-y-1.5 max-md:leading-snug">
            <li className="break-words">{CLINIC.hours}</li>
            <li>
              <a href={CLINIC.phoneHref} className="block py-0.5 transition-colors hover:text-gold">
                {CLINIC.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CLINIC.email}`}
                className="block break-words py-0.5 transition-colors hover:text-gold"
              >
                {CLINIC.email}
              </a>
            </li>
            <li className="break-words">{CLINIC.address}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg">Institucional</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/90 max-md:mt-3 max-md:space-y-1.5">
            <li>Política de Privacidade</li>
            <li>LGPD</li>
            <li>Termos de Uso</li>
            <li>
              <a href="/sitemap.xml" className="block py-0.5 transition-colors hover:text-gold">
                Mapa do Site
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 px-5 py-6 text-center text-xs text-primary-foreground/70 max-md:pb-0">
        © {new Date().getFullYear()} Bella Odontologia · Responsável Técnica: Dra. Danielle C.
        Lourenço · CRO-PR 22533
      </div>
    </footer>
  );
}
