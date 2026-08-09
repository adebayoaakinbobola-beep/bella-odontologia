export const CLINIC = {
  name: "Clínica Bella Odontologia",
  phone: "(46) 3035-0404",
  phoneHref: "tel:+554630350404",
  whatsapp: "5546999999999",
  email: "contato@bellaodontologia.com.br",
  address: "R. Ver. Romeu Lauro Werlang, 822 - Centro, Francisco Beltrão - PR, 85601-020",
  hours: "Seg a Sex: 08h00 às 18h30 · Sáb: 08h00 às 12h00",
  rating: 5.0,
  reviews: 12,
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  maps: "https://www.google.com/maps?q=R.+Ver.+Romeu+Lauro+Werlang,+822+-+Centro,+Francisco+Beltrão+-+PR",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
}
