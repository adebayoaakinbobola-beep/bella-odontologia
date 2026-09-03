import { useEffect, useState } from "react";
import {
  Sparkles,
  Anchor,
  AlignCenter,
  Layers,
  Syringe,
  Brush,
  Star,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Check,
  Cpu,
  UserRoundCheck,
  GraduationCap,
  Sofa,
  ShieldCheck,
  Plus,
  Minus,
  BadgeCheck,
  CalendarCheck,
  MessageCircle,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { CLINIC, whatsappLink } from "@/lib/clinic";
import estruturaImg from "@/assets/estrutura-clinica.jpg";
import sorrisoImg from "@/assets/pexels-nick-souza-225420956-11999471.jpg";
import tratImplante from "@/assets/pexels-cottonbro-6502019.jpg";
import tratOrto from "@/assets/pexels-itslauravillela-28407749.jpg";
import tratEstetica from "@/assets/pexels-karola-g-6627572.jpg";
import tratGeral from "@/assets/pexels-shvetsa-3845736.jpg";
import tratPreventiva from "@/assets/pexels-tima-miroshnichenko-5355837.jpg";
import tratCanal from "@/assets/pexels-mm-dental-56682202-8176834.jpg";
import blogEscovacao from "@/assets/blog-escovacao.jpg";
import blogEscova from "@/assets/blog-escova.jpg";
import blogImplanteFaq from "@/assets/pexels-tima-miroshnichenko-5355723.jpg";
import blogClareamento from "@/assets/pexels-gustavo-fring-5622262.jpg";
import blogPreventiva from "@/pexels-marcus-aurelius-9788575.jpg";
import draFoto1 from "@/assets/dra-danielle.jpeg";
import draFoto2 from "@/assets/dra-danielle-1.jpeg";
import draFoto3 from "@/assets/dra-danielle-2.jpeg";

function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl grid gap-5 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-12"
          : "grid max-w-4xl gap-5 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-12"
      }
    >
      <p className={`kicker pt-3 lg:w-40 ${light ? "text-gold" : "text-teal"}`}>{eyebrow}</p>
      <div>
        <h2
          className={`font-display text-[2rem] leading-[1.08] sm:text-[2.9rem] ${light ? "text-primary-foreground" : "text-foreground"}`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-5 max-w-xl text-[0.95rem] leading-relaxed ${light ? "text-primary-foreground/75" : "text-muted-foreground"}`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

/* ---------------------------------- Prova social --------------------------------- */

export function ProvaSocial() {
  const itens = [
    {
      destaque: `${CLINIC.rating.toFixed(1)}`,
      label: `Avaliação no Google · ${CLINIC.reviews} avaliações`,
    },
    { destaque: "CRO-PR 22533", label: "Clínica com responsável técnica registrada" },
    { destaque: "12x", label: "Parcelamento disponível" },
    { destaque: "Seg–Sáb", label: "Atendimento de segunda a sábado" },
  ];
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-5 px-5 pt-6 pb-14 sm:gap-8 sm:py-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border lg:px-8">
        {itens.map((i) => (
          <div key={i.destaque} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
            <p className="font-display text-2xl text-primary">{i.destaque}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{i.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------- Sobre ------------------------------------- */

export function Sobre() {
  const beneficios = [
    {
      icon: ShieldCheck,
      t: "Biossegurança rigorosa",
      d: "Protocolos rígidos de esterilização em cada atendimento.",
    },
    {
      icon: Cpu,
      t: "Diagnóstico preciso",
      d: "Equipamentos modernos para planejar cada caso com previsibilidade.",
    },
    {
      icon: UserRoundCheck,
      t: "Cuidado humanizado",
      d: "Escuta atenta e plano de tratamento explicado com clareza.",
    },
  ];
  return (
    <section id="sobre" className="bg-background py-16 max-sm:pt-10 max-sm:pb-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 max-sm:gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:px-8">
        <Reveal>
          <div className="relative">
            <img
              src={estruturaImg}
              alt="Estrutura moderna do consultório da Bella Odontologia em Francisco Beltrão"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full rounded-lg object-cover shadow-elevated"
            />
            <div className="absolute -bottom-8 right-8 hidden rounded-lg bg-primary px-7 py-6 text-primary-foreground shadow-elevated sm:block">
              <p className="font-display text-lg font-semibold">Bella Odontologia</p>
              <p className="mt-2 text-xs tracking-[0.18em] uppercase text-primary-foreground/70">
                Francisco Beltrão · PR
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <p className="text-xs font-semibold tracking-[0.28em] text-teal uppercase">
              Sobre a Bella Odontologia
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-[2.6rem]">
              Odontologia de excelência, com acolhimento em cada detalhe
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Unimos precisão clínica, tecnologia e escuta atenta para que cada paciente receba um
              plano de tratamento realmente personalizado — do check-up preventivo à alta estética.
            </p>

            <div className="mt-9 space-y-6">
              {beneficios.map((b) => (
                <div key={b.t} className="flex gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-teal/10 ring-1 ring-teal/20">
                    <b.icon className="h-5 w-5 text-teal" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg text-foreground">{b.t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contato"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Conheça nossa clínica
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------- Tratamentos ---------------------------------- */

const tratamentos = [
  {
    icon: Anchor,
    nome: "Implantes Dentários",
    desc: "Reabilitação oral com implantes de alta tecnologia para devolver função e estética.",
    img: tratImplante,
  },
  {
    icon: Sparkles,
    nome: "Clareamento Dental",
    desc: "Técnicas modernas para um sorriso mais branco e brilhante com segurança.",
    img: sorrisoImg,
  },
  {
    icon: Layers,
    nome: "Lentes de Contato Dental",
    desc: "Transformação estética com lâminas ultrafinas de porcelana de alta durabilidade.",
    img: tratEstetica,
  },
  {
    icon: AlignCenter,
    nome: "Ortodontia e Alinhadores",
    desc: "Aparelhos fixos e alinhadores transparentes para corrigir o posicionamento dental.",
    img: tratOrto,
  },
  {
    icon: Brush,
    nome: "Odontologia Preventiva",
    desc: "Check-up, limpeza profissional e orientação para manter a saúde bucal em dia.",
    img: tratPreventiva,
  },
  {
    icon: Syringe,
    nome: "Endodontia",
    desc: "Tratamento de canal com técnicas avançadas para alívio da dor e preservação do dente.",
    img: tratCanal,
  },
];

const outros = [
  "Periodontia",
  "Odontologia Estética",
  "Prótese Dentária",
  "Odontopediatria",
  "Cirurgia Oral",
  "Urgências Odontológicas",
];

export function Tratamentos() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="tratamentos" className="bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Nossos Tratamentos"
          title="Cuidado completo para cada fase do seu sorriso"
          description="Da prevenção à alta estética, todos os procedimentos são realizados com protocolos atualizados e materiais premium."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {tratamentos.map((t, i) => (
            <Reveal key={t.nome} delay={(i % 3) * 90}>
              <a
                href={whatsappLink(`Olá! Quero saber mais sobre ${t.nome}.`)}
                target="_blank"
                rel="noopener"
                className="group flex h-full flex-col overflow-hidden rounded-lg bg-card shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated"
              >
                <div className="relative h-44 overflow-hidden sm:h-52">
                  <img
                    src={t.img}
                    alt={`${t.nome} na Bella Odontologia`}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 left-3 grid h-11 w-11 place-items-center rounded-lg bg-background/95 text-primary backdrop-blur shadow-sm">
                    <t.icon className="h-5 w-5" aria-hidden />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="font-display text-xl">{t.nome}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground sm:mt-3">
                    {t.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary sm:mt-6">
                    Saiba mais
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {expanded && (
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {outros.map((o) => (
              <a
                key={o}
                href={whatsappLink(`Olá! Quero saber mais sobre ${o}.`)}
                target="_blank"
                rel="noopener"
                className="rounded-lg border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-teal hover:text-teal"
              >
                {o}
              </a>
            ))}
          </div>
        )}

        {!expanded && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setExpanded(true)}
              className="rounded-lg border-2 border-primary px-9 py-5 text-sm font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground hover:shadow-elevated"
            >
              Conhecer todos os tratamentos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------- Por quê ------------------------------------ */

const diferenciais = [
  {
    icon: Cpu,
    t: "Tecnologia avançada",
    d: "Equipamentos modernos para diagnósticos e tratamentos precisos.",
  },
  {
    icon: UserRoundCheck,
    t: "Atendimento personalizado",
    d: "Cada paciente recebe um plano de tratamento individualizado.",
  },
  {
    icon: GraduationCap,
    t: "Profissionais qualificados",
    d: "Atendimento realizado por profissionais especializados.",
  },
  {
    icon: Sofa,
    t: "Ambiente confortável",
    d: "Uma experiência odontológica tranquila, moderna e acolhedora.",
  },
];

export function PorQue() {
  return (
    <section className="gradient-hero py-16 max-sm:pt-10 max-sm:pb-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          light
          eyebrow="Diferenciais"
          title="Excelência em cada detalhe do seu tratamento."
        />
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-14 sm:gap-x-10 sm:gap-y-12">
          {diferenciais.map((d, i) => (
            <Reveal key={d.t} delay={(i % 2) * 90}>
              <div className="flex gap-3 sm:gap-5">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-primary-foreground/10 ring-1 ring-gold/50">
                  <d.icon className="h-6 w-6 text-gold" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-xl text-primary-foreground">{d.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/75 sm:mt-2">
                    {d.d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center sm:mt-16">
          <a
            href={whatsappLink("Olá! Quero falar com um especialista.")}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-lg bg-background px-9 py-5 text-sm font-semibold text-primary shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
          >
            <MessageCircle className="h-4 w-4" aria-hidden /> Fale com um especialista
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Como funciona --------------------------------- */

const etapas = [
  {
    n: "01",
    t: "Agende sua avaliação",
    d: "Fale com a recepção pelo WhatsApp ou telefone e escolha o melhor horário.",
  },
  {
    n: "02",
    t: "Avaliação completa",
    d: "Exame clínico detalhado para entender suas necessidades e objetivos.",
  },
  {
    n: "03",
    t: "Plano personalizado",
    d: "Apresentamos o tratamento indicado, etapas, prazos e condições de pagamento.",
  },
  {
    n: "04",
    t: "Transforme seu sorriso",
    d: "Tratamento conduzido com acompanhamento próximo e manutenção preventiva.",
  },
];

export function ComoFunciona() {
  return (
    <section className="bg-background py-16 max-sm:pt-12 max-sm:pb-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Como funciona" title="Um caminho simples até o seu novo sorriso" />
        <div className="relative mt-10 sm:mt-16">
          <div
            aria-hidden
            className="absolute top-6 right-0 left-0 hidden h-px bg-border lg:block"
          />
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 lg:gap-8">
            {etapas.map((e, i) => (
              <Reveal key={e.n} delay={i * 100}>
                <div className="relative">
                  <span className="relative z-10 grid h-14 w-14 place-items-center rounded-lg bg-primary font-display text-base font-semibold text-primary-foreground shadow-soft">
                    {e.n}
                  </span>
                  <h3 className="mt-4 font-display text-xl sm:mt-7">{e.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:mt-2">
                    {e.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------- Equipe ------------------------------------ */

const especialidades = [
  "Clínica Geral",
  "Odontologia Estética",
  "Prevenção e Diagnóstico",
  "Reabilitação Oral",
];

const fotosDraDanielle = [draFoto1, draFoto2, draFoto3];

export function Equipe() {
  const [fotoAtual, setFotoAtual] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFotoAtual((atual) => (atual + 1) % fotosDraDanielle.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const navegar = (direcao: 1 | -1) => {
    setFotoAtual(
      (atual) => (atual + direcao + fotosDraDanielle.length) % fotosDraDanielle.length,
    );
  };

  return (
    <section id="equipe" className="bg-cream py-16 max-sm:pt-10 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle eyebrow="Responsável Técnica" title="Quem cuida do seu sorriso" />
        <Reveal>
          <div className="mt-8 grid items-center gap-8 rounded-lg bg-card p-6 shadow-soft max-sm:mt-8 max-sm:gap-8 max-sm:p-6 sm:mt-14 sm:gap-12 sm:p-8 lg:grid-cols-[0.85fr_1fr] lg:gap-16 lg:p-12">
            <div className="group relative h-[480px] overflow-hidden rounded-lg bg-muted sm:h-[600px]">
              <img
                key={fotosDraDanielle[fotoAtual]}
                src={fotosDraDanielle[fotoAtual]}
                alt="Dra. Danielle C. Lourenço, cirurgiã-dentista da Bella Odontologia"
                loading="lazy"
                className="h-full w-full object-contain object-center slideshow-image"
              />
              <button
                type="button"
                onClick={() => navegar(-1)}
                aria-label="Foto anterior da Dra. Danielle"
                className="absolute top-1/2 left-3 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-primary-foreground/50 bg-primary/65 text-primary-foreground shadow-soft backdrop-blur-sm transition-opacity duration-300 hover:bg-primary sm:left-5 sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => navegar(1)}
                aria-label="Próxima foto da Dra. Danielle"
                className="absolute top-1/2 right-3 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-primary-foreground/50 bg-primary/65 text-primary-foreground shadow-soft backdrop-blur-sm transition-opacity duration-300 hover:bg-primary sm:right-5 sm:opacity-0 sm:group-hover:opacity-100 sm:focus-visible:opacity-100"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
              <div className="absolute right-0 bottom-4 left-0 flex justify-center gap-2">
                {fotosDraDanielle.map((foto, indice) => (
                  <button
                    key={foto}
                    type="button"
                    onClick={() => setFotoAtual(indice)}
                    aria-label={`Exibir foto ${indice + 1} da Dra. Danielle`}
                    aria-current={fotoAtual === indice ? "true" : undefined}
                    className={`h-2 rounded-full transition-all duration-300 ${fotoAtual === indice ? "w-6 bg-primary" : "w-2 bg-primary/35 hover:bg-primary/70"}`}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-4xl sm:text-5xl text-foreground">
                Dra. Danielle C. Lourenço
              </h3>
              <p className="mt-2 text-lg font-semibold text-teal sm:mt-3">Cirurgiã-Dentista</p>
              <p className="mt-1 inline-flex items-center gap-2 text-xs tracking-[0.18em] text-muted-foreground uppercase sm:mt-2">
                <BadgeCheck className="h-4 w-4 text-gold" aria-hidden /> CRO-PR 22533
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground sm:mt-7">
                Responsável técnica da Bella Odontologia, dedica-se a oferecer tratamentos com
                excelência técnica, ética e um olhar humanizado. Cada plano é construído junto com o
                paciente, unindo diagnóstico preciso, conforto e resultados naturais e duradouros.
              </p>
              <div className="mt-7 flex flex-wrap gap-3 sm:mt-9">
                {especialidades.map((e) => (
                  <span
                    key={e}
                    className="rounded-lg bg-teal/10 px-5 py-2.5 text-sm font-semibold text-teal ring-1 ring-teal/20"
                  >
                    {e}
                  </span>
                ))}
              </div>
              <a
                href="#agendamento"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 sm:mt-10"
              >
                <CalendarCheck className="h-4 w-4" aria-hidden /> Agendar com a Dra. Danielle
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------- Depoimentos ---------------------------------- */

const depoimentos = [
  {
    nome: "Kinorcomk Fernandes",
    txt: "Ótimo atendimento, com pessoas profissionais e capacitadas, pra mim é nota 10.",
  },
  { nome: "Marcos Antônio Galvão", txt: "Ótimo atendimento e respeito pelo cliente." },
  { nome: "Janaina de Oliveira", txt: "Ótimo atendimento, e preço ótimo e justo." },
];

function GoogleIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden focusable="false">
      <path
        fill="#EA4335"
        d="M24 9.5c3.5 0 6.6 1.2 9 3.6l6.7-6.7C35.6 2.6 30.2.5 24 .5 14.6.5 6.5 5.9 2.6 13.7l7.8 6.1C12.3 13.6 17.6 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.5 24.5c0-1.6-.1-2.8-.4-4.1H24v7.5h12.7c-.3 2.1-1.6 5.3-4.7 7.4l7.6 5.9c4.5-4.2 6.9-10.3 6.9-16.7z"
      />
      <path
        fill="#FBBC05"
        d="M10.4 28.2A14.5 14.5 0 0 1 9.6 24c0-1.5.3-2.9.7-4.2l-7.8-6.1A23.9 23.9 0 0 0 0 24c0 3.9.9 7.5 2.6 10.7l7.8-6.5z"
      />
      <path
        fill="#34A853"
        d="M24 47.5c6.5 0 11.9-2.1 15.9-5.8l-7.6-5.9c-2 1.4-4.8 2.4-8.3 2.4-6.4 0-11.7-4.1-13.6-9.9l-7.8 6.1C6.5 42.1 14.6 47.5 24 47.5z"
      />
    </svg>
  );
}

export function Depoimentos() {
  const [i, setI] = useState(0);
  return (
    <section id="depoimentos" className="bg-background py-16 max-sm:pt-10 max-sm:pb-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Avaliações"
          title="O que nossos pacientes dizem"
          description={`${CLINIC.rating.toFixed(1)} de 5 no Google · ${CLINIC.reviews} avaliações`}
        />

        <div className="mt-14 hidden gap-7 lg:grid lg:grid-cols-3">
          {depoimentos.map((d, k) => (
            <Reveal key={d.nome} delay={k * 90}>
              <figure className="flex h-full flex-col rounded-lg bg-card p-8 shadow-card">
                <div className="flex items-center gap-1" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold text-gold" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 leading-relaxed text-foreground">
                  “{d.txt}”
                </blockquote>
                <figcaption className="mt-7 flex items-center justify-between gap-3 border-t border-border pt-5">
                  <span className="text-sm font-semibold">{d.nome}</span>
                  <GoogleIcon className="h-5 w-5" />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 max-sm:mt-8 lg:hidden">
          <figure className="rounded-lg bg-card p-7 shadow-card max-sm:p-6">
            <div className="flex items-center gap-1" aria-label="5 de 5 estrelas">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-gold text-gold" aria-hidden />
              ))}
            </div>
            <blockquote className="mt-5 leading-relaxed max-sm:mt-4">“{depoimentos[i]!.txt}”</blockquote>
            <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-5 max-sm:mt-5 max-sm:pt-4">
              <span className="text-sm font-semibold">{depoimentos[i]!.nome}</span>
              <GoogleIcon />
            </figcaption>
          </figure>
          <div className="mt-6 flex items-center justify-center gap-4 max-sm:mt-4 max-sm:gap-3">
            <button
              onClick={() => setI((v) => (v - 1 + depoimentos.length) % depoimentos.length)}
              aria-label="Avaliação anterior"
              className="grid h-11 w-11 place-items-center rounded-lg border border-border hover:bg-accent"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              onClick={() => setI((v) => (v + 1) % depoimentos.length)}
              aria-label="Próxima avaliação"
              className="grid h-11 w-11 place-items-center rounded-lg border border-border hover:bg-accent"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>

        <div className="mt-12 text-center max-sm:mt-8">
          <a
            href={CLINIC.maps}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-7 py-4 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-teal hover:text-teal"
          >
            <GoogleIcon className="h-4 w-4" /> Ver avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- CTA de conversão -------------------------------- */

export function CtaFinal() {
  return (
    <section className="bg-background px-5 py-16 max-sm:pt-0 max-sm:pb-0 lg:px-8 lg:py-20">
      <div className="gradient-hero mx-auto max-w-4xl rounded-lg px-8 py-20 text-center shadow-elevated sm:px-16">
        <h2 className="mx-auto max-w-2xl font-display text-3xl leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
          Pronto para cuidar do seu sorriso?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
          Agende sua avaliação e descubra o tratamento ideal para você.
        </p>
        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#agendamento"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-foreground px-10 py-5 text-sm font-semibold text-primary shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden /> Agendar minha avaliação
          </a>
          <a
            href={whatsappLink("Olá! Quero agendar uma avaliação.")}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary-foreground/40 px-10 py-5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:border-gold hover:text-gold hover:bg-primary-foreground/5"
          >
            <MessageCircle className="h-4 w-4" aria-hidden /> Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------- FAQ -------------------------------------- */

export const faqs = [
  {
    q: "O tratamento dói?",
    a: "Trabalhamos com anestesia tópica antes da injeção e técnicas minimamente invasivas. A grande maioria dos procedimentos é indolor e você é acompanhado em cada etapa.",
  },
  {
    q: "Vocês aceitam convênio?",
    a: "Atendemos os principais convênios odontológicos da região. Envie o nome do seu plano pelo WhatsApp e confirmamos a cobertura na hora.",
  },
  {
    q: "Quais as formas de pagamento?",
    a: "Dinheiro, PIX, débito e cartão de crédito em até 12x, além de condições especiais para tratamentos completos.",
  },
  {
    q: "Quanto tempo dura um implante dentário?",
    a: "Com higiene adequada e manutenções periódicas, o implante pode durar décadas. A osseointegração leva em média de 3 a 6 meses.",
  },
  {
    q: "Posso parcelar o tratamento?",
    a: "Sim. Montamos um plano de pagamento personalizado de acordo com o tratamento escolhido.",
  },
  {
    q: "Como funciona o clareamento dental?",
    a: "Após avaliação e limpeza, aplicamos gel clareador em consultório e/ou moldeiras para uso domiciliar supervisionado. Os resultados aparecem já nas primeiras sessões.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-[800px] px-5 lg:px-8">
        <SectionTitle eyebrow="FAQ" title="Perguntas frequentes" />
        <div className="mt-12 divide-y divide-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 py-6 text-left"
                >
                  <span className="font-display text-lg sm:text-xl">{f.q}</span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary text-primary">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------- Blog ------------------------------------- */

const posts = [
  {
    t: "O tratamento odontológico dói?",
    d: "Entenda como a anestesia tópica e as técnicas minimamente invasivas tornam a grande maioria dos procedimentos indolor — e como acompanhamos você em cada etapa para garantir conforto total.",
    cat: "Perguntas frequentes",
    data: "Guia completo",
    img: blogPreventiva,
    conteudo: [
      "O medo de sentir dor é uma das principais razões que fazem as pessoas adiarem a ida ao dentista. A boa notícia é que a odontologia moderna tem como prioridade o conforto do paciente, e a grande maioria dos procedimentos é realizada de forma indolor.",
      "Na Bella Odontologia, iniciamos cada atendimento com uma conversa clara sobre o que será feito. Em seguida, usamos anestesia tópica — um gel adormecedor — antes de qualquer injeção, reduzindo drasticamente a sensibilidade na região. As técnicas minimamente invasivas também ajudam: quanto mais preciso o tratamento, menor o trauma aos tecidos e, consequentemente, o desconforto pós-operatório.",
      "Procedimentos como limpeza, clareamento, restaurações e até tratamentos de canal são feitos com anestesia eficaz e equipamentos modernos. Para tratamentos cirúrgicos, seguimos protocolos rigorosos de biossegurança e oferecemos orientações detalhadas para uma recuperação tranquila.",
      "Se você sente ansiedade, conte para a gente. Trabalhamos com paciência, explicamos cada etapa e respeitamos o seu ritmo. Cuidar do sorriso não precisa ser uma experiência estressante.",
    ],
  },
  {
    t: "A clínica aceita convênio odontológico?",
    d: "Atendemos os principais convênios da região. Saiba como confirmar a cobertura do seu plano pelo WhatsApp em poucos minutos.",
    cat: "Perguntas frequentes",
    data: "Leitura de 3 min",
    img: blogEscova,
    conteudo: [
      "Sim. A Bella Odontologia atende pacientes com convênio odontológico, facilitando o acesso a tratamentos de rotina e também a procedimentos mais complexos.",
      "Cada plano de saúde bucal possui regras próprias de cobertura, carências e procedimentos autorizados. Por isso, a melhor forma de confirmar se o seu convênio é aceito e quais tratamentos estão inclusos é enviar uma mensagem pelo WhatsApp com o nome do plano e o número da carteirinha.",
      "Nossa equipe verifica a cobertura rapidamente e explica, de forma transparente, o que pode ser feito pelo convênio e o que será particular. Assim, você agenda o atendimento já sabendo exatamente o que esperar, sem surpresas na hora do pagamento.",
      "Não tem convênio? Também oferecemos condições especiais de pagamento e parcelamento em até 12x no cartão de crédito, para que o cuidado com o seu sorriso caiba no seu orçamento.",
    ],
  },
  {
    t: "Quanto tempo dura um implante dentário?",
    d: "Com higiene adequada e manutenções periódicas, o implante pode durar décadas. Entenda a osseointegração e os cuidados essenciais.",
    cat: "Perguntas frequentes",
    data: "Leitura de 5 min",
    img: blogImplanteFaq,
    conteudo: [
      "O implante dentário é hoje a solução mais completa para substituir dentes perdidos. Quando bem indicado e realizado por um profissional qualificado, pode durar muitos anos — em alguns casos, toda a vida.",
      "O tratamento acontece em duas fases principais. Na primeira, o implante — uma pequena raiz de titânio — é colocado no osso da mandíbula ou maxila. Esse processo é feito com anestesia local e, na grande maioria dos casos, é indolor. Depois da cirurgia, começa a fase de osseointegração, que leva em média de 3 a 6 meses. Nesse período, o osso se une ao implante, formando uma base sólida e estável.",
      "Na segunda fase, após a osseointegração, colocamos a coroa protética, que é o dente propriamente dito. Essa coroa é feita sob medida para combinar com a cor, formato e tamanho dos seus dentes naturais, garantindo um sorriso harmonioso.",
      "A durabilidade do implante depende muito dos cuidados do paciente. Escovação correta, uso de fio dental, visitas periódicas ao dentista e evitar hábitos como fumar são fundamentais para manter o implante saudável por décadas.",
    ],
  },
  {
    t: "Como funciona o clareamento dental?",
    d: "Do gel clareador em consultório às moldeiras supervisionadas: veja como o tratamento é feito e quando os resultados aparecem.",
    cat: "Perguntas frequentes",
    data: "Leitura de 4 min",
    img: blogClareamento,
    conteudo: [
      "O clareamento dental é um dos tratamentos estéticos mais procurados, e com razão: um sorriso mais branco aumenta a autoestima e transmite saúde. Na Bella Odontologia, oferecemos opções seguras e supervisionadas por profissional.",
      "Antes de iniciar, fazemos uma avaliação completa para verificar a saúde bucal. O clareamento só deve ser feito quando não há cáries, gengivite ou sensibilidade ativa. Também é importante que a limpeza profissional esteja em dia, para que o gel clareador atue de forma uniforme.",
      "O tratamento pode ser feito em consultório, com gel de maior concentração e ativação controlada, ou em casa, com moldeiras personalizadas e gel adequado para uso domiciliar. Em muitos casos, a combinação dos dois métodos traz o melhor resultado.",
      "Os primeiros resultados costumam aparecer já nas primeiras sessões. A tonalidade final depende da estrutura do dente e do tipo de mancha, mas a melhora é perceptível na maioria dos pacientes. Para manter o resultado, recomendamos evitar alimentos e bebidas pigmentados nos primeiros dias e seguir as orientações de higiene.",
    ],
  },
];

function ArticleCard({
  post,
  expanded,
  onToggle,
  featured = false,
}: {
  post: (typeof posts)[number];
  expanded: boolean;
  onToggle: () => void;
  featured?: boolean;
}) {
  if (featured) {
    return (
      <article className="group h-full overflow-hidden rounded-lg bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
        <img
          src={post.img}
          alt={post.t}
          loading="lazy"
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] sm:h-80"
        />
        <div className="p-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-teal uppercase">
            {post.cat} · {post.data}
          </p>
          <h3 className="mt-4 font-display text-2xl leading-snug sm:text-3xl">{post.t}</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">{post.d}</p>

          <div
            className="grid transition-all duration-300 ease-out"
            style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <div className="mt-6 space-y-4 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
                {post.conteudo.map((paragrafo, idx) => (
                  <p key={idx}>{paragrafo}</p>
                ))}
              </div>
              <a
                href={whatsappLink(`Olá! Quero saber mais sobre: ${post.t}`)}
                target="_blank"
                rel="noopener"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5"
              >
                Falar com um especialista
              </a>
            </div>
          </div>

          <button
            onClick={onToggle}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            {expanded ? "Ocultar artigo" : "Ler artigo completo"}
            <ArrowRight
              className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-90" : "group-hover:translate-x-1"}`}
              aria-hidden
            />
          </button>
        </div>
      </article>
    );
  }

  return (
    <article className="group grid grid-cols-[110px_minmax(0,1fr)] items-start gap-5 overflow-hidden rounded-lg bg-card p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated sm:grid-cols-[160px_minmax(0,1fr)]">
      <img
        src={post.img}
        alt={post.t}
        loading="lazy"
        className="h-28 w-full rounded-lg object-cover sm:h-32"
      />
      <div className="min-w-0">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-teal uppercase">{post.cat}</p>
        <h3 className="mt-2 font-display text-lg leading-snug">{post.t}</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{post.d}</p>

        <div
          className="grid transition-all duration-300 ease-out"
          style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="mt-4 space-y-3 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
              {post.conteudo.map((paragrafo, idx) => (
                <p key={idx}>{paragrafo}</p>
              ))}
            </div>
            <a
              href={whatsappLink(`Olá! Quero saber mais sobre: ${post.t}`)}
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5"
            >
              Falar com um especialista
            </a>
          </div>
        </div>

        <button
          onClick={onToggle}
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          {expanded ? "Ocultar artigo" : "Ler artigo completo"}
          <ArrowRight
            className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-90" : "group-hover:translate-x-1"}`}
            aria-hidden
          />
        </button>
      </div>
    </article>
  );
}

export function Blog() {
  const [destaque, ...restantes] = posts;
  const [aberto, setAberto] = useState<string | null>(destaque.t);

  const toggle = (titulo: string) => setAberto((atual) => (atual === titulo ? null : titulo));

  return (
    <section id="blog" className="bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Blog"
          title="Conteúdo sobre saúde bucal"
          description="Informação confiável, escrita por quem cuida de sorrisos todos os dias."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <ArticleCard
              post={destaque}
              featured
              expanded={aberto === destaque.t}
              onToggle={() => toggle(destaque.t)}
            />
          </Reveal>

          <div className="grid gap-6">
            {restantes.map((p, i) => (
              <Reveal key={p.t} delay={i * 90}>
                <ArticleCard post={p} expanded={aberto === p.t} onToggle={() => toggle(p.t)} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Compat: seção antiga (não usada) ----------------------- */

export function Numeros() {
  return null;
}

export function AntesDepois() {
  return null;
}

export { Check };
