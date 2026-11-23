export const site = {
  name: "Sahas Tours",
  address: "496/1/4, Halbarawa, Malabe",
  url: process.env.SITE_URL || "https://sahastours.com",
  whatsapp: (process.env.SAHAS_WHATSAPP_NUMBER ?? "+94759202936").trim(),
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Tours", href: "/tours" },
  { label: "Destinations", href: "/destinations" },
  { label: "Experiences", href: "/experiences" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function whatsappLink(tourName?: string) {
  if (!/^\+?[1-9]\d{7,14}$/.test(site.whatsapp)) return null;
  const message = tourName
    ? `Hi Sahas Tours! I'd like to enquire about the ${tourName} tour. Could you share more details?`
    : "Hi Sahas Tours! I'd like to enquire about a tour in Sri Lanka.";
  return `https://wa.me/${site.whatsapp.replace(/^\+/, "")}?text=${encodeURIComponent(message)}`;
}
