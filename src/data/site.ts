import { company } from "./company";

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const site = {
  name: company.name,
  title: "AI4comms",
  description:
    "AI strategy, team enablement, and governance support for communications leaders who need practical AI operating clarity.",
  ogImage: "/og-fallback.png",
  navigation,
  footerNote:
    "Static GitHub Pages launch. Contact details remain intentionally provisional until the brand owner confirms final email, phone, and domain details.",
};
