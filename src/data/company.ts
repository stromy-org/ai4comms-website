// Structural shim (review-gated): owns the Service TYPE and re-exports the client-owned
// company / services / contactRoutes VALUES from the content home `./content/company.ts`.
// Consumers keep importing `{ company, services, contactRoutes }` from "../data/company".
export type Service = {
  id: string;
  name: string;
  description: string;
  deliverables: string[];
  typicalDuration: string;
};

export { company, services, contactRoutes } from "./content/company";
