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
  // Production host (Azure SWA) — keep in sync with astro.config.mjs `site:`.
  // Replaces the old hard-coded GitHub Pages canonical fallback.
  url: "https://green-forest-0f795c303.7.azurestaticapps.net",
  locale: "en",
  entityType: "Organization" as
    | "Organization"
    | "ProfessionalService"
    | "LocalBusiness"
    | "Person",
  logo: "", // no standalone logo asset yet → Organization.logo omitted
  // Default 1200×630 social card. Fixed: the asset is og-fallback.svg, not .png.
  ogImage: "/og-fallback.svg",
  defaultOgImage: "/og-fallback.svg",
  twitterHandle: "",
  social: {} as { linkedin?: string },
  analytics: { provider: "none" as const },
  features: { search: false, dynamicOg: false },
  navigation,
  footerNote:
    "Static GitHub Pages launch. Contact details remain intentionally provisional until the brand owner confirms final email, phone, and domain details.",
};
