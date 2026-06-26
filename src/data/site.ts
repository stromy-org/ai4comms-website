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
  title: siteContent.title,
  description: siteContent.description,
  ogImage: "/og-fallback.png",
  navigation,
  footerNote: siteContent.footerNote,
};
