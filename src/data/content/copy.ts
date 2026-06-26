// Page + section display copy — CLIENT-OWNED content (broker `content` lane,
// self-publishing). Every heading, intro, eyebrow, SEO title/description, image alt and
// CTA label rendered by the pages and home-page section components reads from here, so a
// client can rewrite the site's words without touching layout, routing, or build code.
// Structural a11y landmark labels (e.g. the nav `aria-label`) stay in the components and
// are listed in content-audit-exceptions.json.
export const copy = {
  home: {
    seoTitle: "AI4comms",
    seoDesc:
      "AI strategy, enablement, and governance support for communications leaders who need practical operating clarity.",
    hero: {
      eyebrow: "Signal Authority",
      title: "Turn AI ambition into clear operating decisions for comms teams.",
      signals: [
        "Strategy before tooling",
        "Governance before scale",
        "Enablement that teams actually use",
      ],
      primaryCta: "See Use Cases",
      secondaryCta: "Contact AI4comms",
      imageAlt: "Dark communications environment with architectural structure",
      detailEyebrow: "How the site should feel",
      detailBody:
        "Dark-first and decisive, but with enough paper-toned space to read as a high-end advisory firm rather than a startup landing page.",
    },
    value: {
      eyebrow: "What AI4comms fixes",
      title: "From AI noise to operational signal.",
      intro:
        "The brief is not “do more AI.” It is to decide where AI belongs, how teams should use it, and which controls have to exist before adoption scales.",
    },
    servicesPreview: {
      eyebrow: "Services",
      title: "Advisory, enablement, and governance built for communications teams.",
      intro:
        "AI4comms is structured as a consulting offer, not a toolbox pitch. Each service turns a fuzzy AI conversation into a clearer operating decision.",
    },
    caseShowcase: {
      eyebrow: "Use cases",
      title: "Concrete applications for teams that need more than AI theatre.",
      intro:
        "The case-study area is designed as a use-case library. It can later hold named client work, but it already supports structured application patterns from day one.",
      featuredEyebrow: "Featured use case",
      readCta: "Read the use case",
      openCta: "Open use case",
    },
    cta: {
      eyebrow: "Next step",
      title: "If the AI conversation is still vague, start there.",
      body: "AI4comms is built for teams that need sharper judgment, clearer operating decisions, and a credible path from exploration to responsible use.",
      primaryCta: "Start the conversation",
      secondaryCta: "Review services",
    },
  },
  about: {
    seoTitle: "About",
    seoDesc:
      "About AI4comms and its operating posture for strategy, enablement, and responsible AI adoption in communications.",
    eyebrow: "About",
    title: "A calmer, stricter way to lead AI in communications.",
    intro:
      "AI4comms is positioned as an advisory and enablement partner for leaders who need clarity, not performance. The proposition is strategic, practical, and governance-aware by design.",
    postureEyebrow: "Operating posture",
    principlesEyebrow: "Principles",
    principlesTitle: "The work should read as senior advisory, not AI excitement.",
    imageAlt: "Muted, high-contrast communications environment",
  },
  services: {
    seoTitle: "Services",
    seoDesc:
      "AI strategy, team enablement, governance, and executive advisory for communications teams.",
    eyebrow: "Services",
    title: "A consulting offer built for communications leaders, not AI tourism.",
    intro:
      "AI4comms works across strategy, enablement, governance, and senior advisory. Each engagement is designed to move a team from interest to disciplined use.",
  },
  contact: {
    seoTitle: "Contact",
    seoDesc:
      "Contact AI4comms to discuss strategy, team enablement, or governance for AI in communications.",
    eyebrow: "Contact",
    title: "Start with one clear conversation.",
    intro:
      "The site is set up for a simple mailto-style contact flow. Final email and phone details are still being confirmed, so the draft routes below are structurally ready even while the live contact fields remain provisional.",
    primaryRouteEyebrow: "Primary route",
    primaryRouteTitle: "Direct and simple.",
    primaryRouteBody:
      "This page is intentionally light. For a GitHub Pages launch, the preferred pattern is an email-first route rather than a hosted form.",
    labelEmail: "Email",
    labelPhone: "Phone",
    labelBase: "Base",
    pending: "Pending confirmation",
    openDraft: "Open draft email",
    routePending: "Email route pending",
  },
  caseStudies: {
    seoTitle: "Case Studies",
    seoDesc: "Concrete AI use cases and application patterns for communications teams.",
    eyebrow: "Case studies",
    title: "A use-case library for serious communications work.",
    intro:
      "This section is built to describe real projects later. For launch, it already works as a concrete application library so the site can speak in examples instead of abstractions.",
    readCta: "Read use case",
  },
  notFound: {
    seoTitle: "Page not found",
    seoDesc: "The page you were looking for does not exist.",
    eyebrow: "404",
    title: "Nothing useful lives at this route.",
    intro: "Return to the homepage or go directly to services, case studies, or contact.",
    backHome: "Back to home",
    viewServices: "View services",
  },
  chrome: {
    logoAlt: "AI4comms",
    footerNavHeading: "Navigation",
    footerContactHeading: "Contact",
    footerEmailPending: "Email address pending confirmation",
    footerPhonePending: "Phone number pending confirmation",
  },
} as const;
