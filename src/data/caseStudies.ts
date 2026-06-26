// Structural shim (review-gated): owns the CaseStudy TYPE and re-exports the client-owned
// caseStudies VALUES from the content home `./content/caseStudies.ts`. Consumers keep
// importing `{ caseStudies }` from "../data/caseStudies".
export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  client: string;
  sector: string;
  order: number;
  outcome: string;
  tags: string[];
  sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
};

export { caseStudies } from "./content/caseStudies";
