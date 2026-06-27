// Structural shim (review-gated): owns the route table (navigation hrefs) and composes
// the client-owned SEO/footer VALUES from the content home `./content/site.ts` into the
// exported `site` object. Consumers keep importing `{ site, navigation }` from "../data/site".
import { company } from "./company";
import { siteContent } from "./content/site";

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const site = {
  name: company.name,
  // Client-owned content (content-ownership shim) — title/description/footerNote.
  title: siteContent.title,
  description: siteContent.description,
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
  // Default 1200×630 social card (asset is og-fallback.svg).
  ogImage: "/og-fallback.svg",
  defaultOgImage: "/og-fallback.svg",
  twitterHandle: "",
  social: {} as { linkedin?: string },
  analytics: { provider: "none" as const },
  features: { search: false, dynamicOg: false },
  navigation,
  footerNote: siteContent.footerNote,
};
