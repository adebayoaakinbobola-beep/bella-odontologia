export const CLINIC = {
  name: "Bella Odontologia",
  phone: "(46) 3035-0404",
  phoneHref: "tel:+554630350404",
  whatsapp: "5546999999999",
  email: "contato@bellaodontologia.com.br",
  address: "R. Ver. Romeu Lauro Werlang, 822 - Centro, Francisco Beltrão - PR, 85601-020",
  hours: "Segunda a Sexta: 08:30 às 11:45 e 13:30 às 18:30 · Sábado: 08:00 às 12:00",
  rating: 5.0,
  reviews: 12,
  instagram: "https://instagram.com/bellaodontologiabeltrao",
  facebook: "https://facebook.com/bellaodontologiabeltrao",
  maps: "https://www.google.com/maps?q=R.+Ver.+Romeu+Lauro+Werlang,+822+-+Centro,+Francisco+Beltrão+-+PR",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
}
