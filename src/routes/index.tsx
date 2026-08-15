import { createFileRoute } from "@tanstack/react-router";
import { Header, FloatingActions, ChatWidget } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import {
  Sobre,
  Tratamentos,
  PorQue,
  ComoFunciona,
  Equipe,
  AntesDepois,
  Depoimentos,
  Numeros,
  FAQ,
  Blog,
  faqs,
} from "@/components/site/Sections";
import { Agendamento, Localizacao, Footer } from "@/components/site/Contato";
import { Toaster } from "@/components/ui/sonner";
import { CLINIC } from "@/lib/clinic";

const title = "Clínica Bella Odontologia | Dentista em Francisco Beltrão - PR";
const description =
  "Clínica odontológica em Francisco Beltrão (PR): implantes, clareamento, lentes de contato dental, ortodontia e emergência. Agende sua avaliação pelo WhatsApp.";

const schema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: CLINIC.name,
  description,
  telephone: CLINIC.phone,
  email: CLINIC.email,
  url: "/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Ver. Romeu Lauro Werlang, 822",
    addressLocality: "Francisco Beltrão",
    addressRegion: "PR",
    postalCode: "85601-020",
    addressCountry: "BR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "12",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "18:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "12:00",
    },
  ],
  medicalSpecialty: "Dentistry",
  availableService: [
    "Implante dentário",
    "Clareamento dental",
    "Lentes de contato dental",
    "Ortodontia",
    "Odontopediatria",
    "Emergência odontológica",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "clínica odontológica, dentista Francisco Beltrão, implante dentário, clareamento dental, ortodontia, lentes de contato dental, facetas, emergência odontológica, odontologia estética",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(schema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Tratamentos />
        <PorQue />
        <ComoFunciona />
        <Equipe />
        <Depoimentos />
        <Numeros />
        <FAQ />
        <Blog />
        <Agendamento />
        <Localizacao />
      </main>
      <Footer />
      <FloatingActions />
      <ChatWidget />
      <Toaster />
    </div>
  );
}
