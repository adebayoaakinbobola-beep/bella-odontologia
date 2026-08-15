import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  Smile,
  Layers,
  Anchor,
  AlignCenter,
  Wand2,
  ShieldCheck,
  Syringe,
  Baby,
  HeartPulse,
  Gem,
  Stethoscope,
  Siren,
  Brush,
  Star,
  Clock,
  Award,
  Users,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Check,
} from "lucide-react";
import { Reveal, useCountUp } from "./Reveal";
import { CLINIC, whatsappLink } from "@/lib/clinic";
import estruturaImg from "@/assets/estrutura-clinica.jpg";
import sorrisoImg from "@/assets/sorriso-new.jpg";
import tratImplante from "@/assets/trat-implante-new.jpg";
import tratOrto from "@/assets/trat-orto-new.jpg";
import tratEstetica from "@/assets/trat-estetica-new.jpg";
import tratGeral from "@/assets/trat-geral-new.jpg";
import tratCanal from "@/assets/trat-canal-new.jpg";
import draFoto1 from "@/assets/dra-danielle.jpeg.asset.json";
import draFoto2 from "@/assets/dra-danielle_1.jpeg.asset.json";
import draFoto3 from "@/assets/dra-danielle_2.jpeg.asset.json";
import blogEscovacao from "@/assets/blog-escovacao.jpg";
import blogEscova from "@/assets/blog-escova.jpg";
import blogImplante from "@/assets/blog-implante.jpg";
import blogClareamento from "@/assets/blog-clareamento.jpg";

function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p
        className={`text-xs tracking-[0.28em] uppercase ${light ? "text-gold" : "text-primary/70"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-3xl sm:text-4xl ${light ? "text-primary-foreground" : "text-foreground"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function Sobre() {
  return (
    <section id="sobre" className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="relative">
            <img
              src={estruturaImg}
              alt="Estrutura moderna do consultório da Clínica Bella Odontologia"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-soft"
            />
            <div className="absolute -bottom-8 left-6 hidden rounded-2xl bg-primary px-7 py-6 text-primary-foreground shadow-soft sm:block">
              <p className="font-display text-3xl">+15</p>
              <p className="text-xs tracking-[0.18em] uppercase">anos de experiência</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-xs tracking-[0.28em] text-primary/70 uppercase">A Clínica</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">
            Odontologia de excelência em Francisco Beltrão
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            A Clínica Bella Odontologia nasceu do compromisso de unir precisão clínica e acolhimento
            humano. Cada paciente é recebido em um ambiente pensado para o conforto, com protocolos
            rigorosos de biossegurança e tecnologia digital que torna diagnósticos mais precisos e
            tratamentos mais previsíveis.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                t: "Nossa Missão",
                d: "Oferecer odontologia de alta qualidade, aliando conhecimento técnico a um atendimento acolhedor e personalizado.",
              },
              {
                t: "Profissionalismo",
                d: "Corpo clínico altamente capacitado e em constante atualização com as melhores práticas da odontologia moderna.",
              },
              {
                t: "Tecnologia",
                d: "Utilizamos equipamentos de ponta para garantir diagnósticos precisos e tratamentos mais eficientes e confortáveis.",
              },
              {
                t: "Bem-estar",
                d: "Um ambiente planejado para que sua experiência no dentista seja positiva, tranquila e segura.",
              },
            ].map((i) => (
              <div key={i.t}>
                <h3 className="font-display text-lg">{i.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.d}</p>
              </div>
            ))}
          </div>
          <a
            href="#agendamento"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Solicite uma avaliação <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

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
    nome: "Ortodontia",
    desc: "Aparelhos fixos e alinhadores invisíveis para correção do posicionamento dental.",
    img: tratOrto,
  },
  {
    icon: Brush,
    nome: "Odontologia Preventiva",
    desc: "Check-up preventivo, limpeza profissional e orientações para manter a saúde bucal.",
    img: tratGeral,
  },
  {
    icon: Syringe,
    nome: "Endodontia",
    desc: "Tratamento de canal com técnicas avançadas para alívio da dor e preservação do dente.",
    img: tratCanal,
  },
  {
    icon: HeartPulse,
    nome: "Periodontia",
    desc: "Cuidados com a saúde da gengiva e tecidos de sustentação dos dentes.",
    img: tratGeral,
  },
  {
    icon: Smile,
    nome: "Odontologia Estética",
    desc: "Procedimentos restauradores e cosméticos para harmonizar o seu sorriso.",
    img: sorrisoImg,
  },
  {
    icon: Gem,
    nome: "Prótese Dentária",
    desc: "Soluções fixas ou removíveis para reposição de dentes com naturalidade.",
    img: tratImplante,
  },
  {
    icon: Wand2,
    nome: "Odontopediatria",
    desc: "Atendimento especializado e humanizado para bebês, crianças e adolescentes.",
    img: tratOrto,
  },
  {
    icon: Stethoscope,
    nome: "Cirurgia Oral",
    desc: "Procedimentos cirúrgicos de pequeno porte, incluindo extração de sisos.",
    img: tratImplante,
  },
  {
    icon: Siren,
    nome: "Urgências",
    desc: "Atendimento imediato para alívio de dor e situações emergenciais.",
    img: tratGeral,
  },
];

export function Tratamentos() {
  const [expanded, setExpanded] = useState(false);
  const visiveis = expanded ? tratamentos : tratamentos.slice(0, 6);

  return (
    <section id="tratamentos" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Nossos Tratamentos"
          title="Cuidado completo para cada fase do seu sorriso"
          description="Da prevenção à alta estética, todos os procedimentos são realizados com protocolos atualizados e materiais premium."
        />

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visiveis.map((t, i) => (
            <Reveal key={t.nome} delay={(i % 3) * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-transform duration-300 hover:-translate-y-1.5">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.nome}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 left-3 grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground">
                    <t.icon className="h-5 w-5" aria-hidden />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl">{t.nome}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {t.desc}
                  </p>
                  <a
                    href={whatsappLink(`Olá! Quero saber mais sobre ${t.nome}.`)}
                    target="_blank"
                    rel="noopener"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    Saiba mais <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {!expanded && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setExpanded(true)}
              className="rounded-full border border-primary px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Ver todos os tratamentos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

const diferenciais = [
  "Atendimento personalizado",
  "Equipamentos de última geração",
  "Ambiente confortável",
  "Dentistas especializados",
  "Tratamentos modernos",
  "Agendamento rápido",
  "Excelentes avaliações",
  "Atendimento humanizado",
];

export function PorQue() {
  return (
    <section className="gradient-hero py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          light
          eyebrow="Diferenciais"
          title="Por que escolher a Bella Odontologia?"
          description="Mais de 8.000 pacientes confiaram seu sorriso a quem trata cada detalhe com precisão e cuidado."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((d, i) => (
            <Reveal key={d} delay={(i % 4) * 80}>
              <div className="h-full rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur transition-colors hover:bg-primary-foreground/10">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/20">
                  <Check className="h-5 w-5 text-gold" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-lg text-primary-foreground">{d}</h3>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a
            href={whatsappLink("Olá! Quero falar com um especialista.")}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-semibold text-primary shadow-soft transition-transform hover:scale-105"
          >
            Fale com um especialista
          </a>
        </div>
      </div>
    </section>
  );
}

const etapas = [
  { t: "Agende sua Consulta", d: "Entre em contato pelo WhatsApp ou telefone para escolher o melhor horário." },
  { t: "Avaliação Detalhada", d: "Na primeira consulta, realizamos um exame minucioso para entender suas necessidades." },
  { t: "Plano de Tratamento", d: "Apresentamos as melhores opções, explicadas com clareza e transparência." },
  { t: "Seu Novo Sorriso", d: "Execução do tratamento com foco total no seu conforto e em resultados duradouros." },
];

export function ComoFunciona() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Como Funciona"
          title="Um caminho simples até o seu novo sorriso"
        />
        <ol className="relative mt-14 space-y-8 border-l border-border pl-8 sm:mx-auto sm:max-w-3xl">
          {etapas.map((e, i) => (
            <Reveal key={e.t} delay={i * 70}>
              <li className="relative">
                <span className="absolute top-1 -left-[2.6rem] grid h-8 w-8 place-items-center rounded-full bg-primary font-display text-sm text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="font-display text-xl">{e.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

const equipe = [
  {
    nome: "Dra. Danielle C. Lourenço",
    esp: "Cirurgiã-Dentista",
    reg: "CRO-PR 22533",
    bio: "Responsável Técnica e especialista dedicada a oferecer tratamentos odontológicos com excelência, ética e um olhar humanizado para cada sorriso.",
    foto: draFoto1.url,
  },
  {
    nome: "Dra. Danielle C. Lourenço",
    esp: "Clínica Geral e Estética",
    reg: "CRO-PR 22533",
    bio: "Focada em reabilitação oral e estética, unindo tecnologia e sensibilidade para transformar a vida dos pacientes através da saúde bucal.",
    foto: draFoto2.url,
  },
  {
    nome: "Dra. Danielle C. Lourenço",
    esp: "Prevenção e Diagnóstico",
    reg: "CRO-PR 22533",
    bio: "Especialista em diagnósticos precisos e protocolos preventivos, garantindo a manutenção da saúde e longevidade dos tratamentos realizados.",
    foto: draFoto3.url,
  },
];

export function Equipe() {
  return (
    <section id="equipe" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Conheça Nossa Equipe"
          title="Profissionais que cuidam de você"
          description="Formação sólida, atualização constante e o compromisso de tratar cada paciente como único."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {equipe.map((p, i) => (
            <Reveal key={p.esp} delay={i * 100}>
              <article className="h-full overflow-hidden rounded-3xl bg-card shadow-card">
                <div className="flex h-80 w-full items-center justify-center bg-muted">
                  <img
                    src={p.foto}
                    alt={`${p.nome}, ${p.esp}`}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl">{p.nome}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{p.esp}</p>
                  <p className="mt-1 text-xs tracking-[0.18em] text-muted-foreground uppercase">
                    {p.reg}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const categorias = ["Clareamento", "Lentes e Facetas", "Implantes", "Ortodontia"] as const;

export function AntesDepois() {
  const [cat, setCat] = useState<(typeof categorias)[number]>("Clareamento");
  const imgs = [sorrisoImg, tratEstetica, tratImplante, tratOrto];

  return (
    <section id="resultados" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Antes e Depois"
          title="Resultados reais, sorrisos transformados"
          description="Casos conduzidos na clínica. Cada tratamento é planejado individualmente — resultados podem variar."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categorias.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                cat === c
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {imgs.map((src, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="group overflow-hidden rounded-3xl shadow-card">
                <img
                  src={src}
                  alt={`Resultado de ${cat} na Clínica Bella Odontologia`}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="bg-card px-5 py-4 text-sm text-muted-foreground">
                  {cat} · caso {i + 1}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const depoimentos = [
  {
    nome: "Kinorcomk Fernandes",
    txt: "Ótimo atendimento, com pessoas profissionais e capacitadas, pra mim é nota 10.",
  },
  { nome: "Marcos Antônio Galvão", txt: "Ótimo atendimento e respeito pelo cliente." },
  { nome: "Janaina de Oliveira", txt: "Ótimo atendimento, e preço ótimo e justo." },
];

export function Depoimentos() {
  const [i, setI] = useState(0);
  const atual = depoimentos[i]!;
  return (
    <section id="depoimentos" className="bg-cream py-24">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <SectionTitle eyebrow="Depoimentos" title="O que nossos pacientes dizem" />
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: 5 }).map((_, k) => (
            <Star key={k} className="h-5 w-5 fill-gold text-gold" aria-hidden />
          ))}
          <span className="ml-2 text-sm text-muted-foreground">
            {CLINIC.rating.toFixed(1)} de 5 · {CLINIC.reviews} avaliações no Google
          </span>
        </div>

        <div className="mt-10 rounded-3xl bg-card p-10 shadow-card">
          <p className="font-display text-xl leading-relaxed text-foreground sm:text-2xl">
            “{atual.txt}”
          </p>
          <p className="mt-6 text-sm font-semibold text-primary">{atual.nome}</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setI((v) => (v - 1 + depoimentos.length) % depoimentos.length)}
              aria-label="Depoimento anterior"
              className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-accent"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              onClick={() => setI((v) => (v + 1) % depoimentos.length)}
              aria-label="Próximo depoimento"
              className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-accent"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const numeros = [
  { icon: Users, valor: 8000, sufixo: "+", label: "pacientes atendidos" },
  { icon: Clock, valor: 15, sufixo: "+", label: "anos de experiência" },
  { icon: Award, valor: 98, sufixo: "%", label: "de satisfação" },
  { icon: Sparkles, valor: 4500, sufixo: "+", label: "procedimentos realizados" },
];

export function Numeros() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="gradient-hero py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {numeros.map((n) => (
          <Numero key={n.label} {...n} active={active} />
        ))}
      </div>
    </section>
  );
}

function Numero({
  icon: Icon,
  valor,
  sufixo,
  label,
  active,
}: {
  icon: typeof Users;
  valor: number;
  sufixo: string;
  label: string;
  active: boolean;
}) {
  const v = useCountUp(valor, active);
  return (
    <div className="text-center text-primary-foreground">
      <Icon className="mx-auto h-7 w-7 text-gold" aria-hidden />
      <p className="mt-4 font-display text-4xl">
        {v.toLocaleString("pt-BR")}
        {sufixo}
      </p>
      <p className="mt-1 text-sm text-primary-foreground/75">{label}</p>
    </div>
  );
}

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
    <section id="faq" className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionTitle eyebrow="FAQ" title="Perguntas frequentes" />
        <div className="mt-12 divide-y divide-border rounded-3xl border border-border bg-card">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-lg">{f.q}</span>
                <ChevronRight
                  className={`h-5 w-5 shrink-0 text-primary transition-transform ${open === i ? "rotate-90" : ""}`}
                  aria-hidden
                />
              </button>
              {open === i && (
                <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const posts = [
  {
    t: "Como cuidar dos dentes no dia a dia",
    d: "Escovação, fio dental e alimentação: o trio que evita 90% dos problemas bucais.",
    img: blogEscovacao,
  },
  {
    t: "Quando trocar a escova de dentes?",
    d: "A cada 3 meses ou antes, se as cerdas estiverem abertas. Entenda o porquê.",
    img: blogEscova,
  },
  {
    t: "Implante dentário vale a pena?",
    d: "Comparamos implante, ponte e prótese removível em custo, conforto e durabilidade.",
    img: blogImplante,
  },
  {
    t: "Mitos e verdades sobre clareamento",
    d: "Clareamento enfraquece o dente? Respondemos as dúvidas mais comuns.",
    img: blogClareamento,
  },
];

export function Blog() {
  return (
    <section id="blog" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="Blog"
          title="Conteúdo sobre saúde bucal"
          description="Informação confiável, escrita por quem cuida de sorrisos todos os dias."
        />
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((p, i) => (
            <Reveal key={p.t} delay={i * 80}>
              <article className="group h-full overflow-hidden rounded-3xl bg-card shadow-card">
                <img
                  src={p.img}
                  alt={p.t}
                  loading="lazy"
                  className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-6">
                  <h3 className="font-display text-lg leading-snug">{p.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
