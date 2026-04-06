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

export const caseStudies: CaseStudy[] = [
  {
    slug: "governance-for-a-global-comms-function",
    title: "Governance for a global communications function",
    summary:
      "A practical governance model for a communications team that needed to move from scattered AI experiments to accountable operating rules.",
    client: "Confidential multinational communications team",
    sector: "Corporate Communications",
    order: 1,
    outcome: "Clear AI usage rules, approval pathways, and a prioritised rollout plan.",
    tags: ["Governance", "Responsible AI", "Operating model"],
    sections: [
      {
        heading: "The brief",
        paragraphs: [
          "The team was already experimenting with generative AI across content drafting, research, and stakeholder monitoring. The issue was not awareness. It was control.",
          "Leaders needed a clearer view of what should be allowed, where approval was required, and how AI work would be described internally.",
        ],
      },
      {
        heading: "What AI4comms would structure",
        paragraphs: [
          "The work would focus on governance close enough to day-to-day communications tasks that teams could still move quickly.",
        ],
        bullets: [
          "An AI use-case map across communications workflows",
          "A risk register linked to actual team activities",
          "Approval thresholds for high-sensitivity outputs",
          "A draft usage policy that teams could apply immediately",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Governance fails when it arrives as abstract policy after adoption is already messy. This kind of intervention gives leaders a disciplined operating view before risk compounds.",
        ],
      },
    ],
  },
  {
    slug: "team-enablement-for-public-affairs",
    title: "Team enablement for public affairs and stakeholder work",
    summary:
      "A use-case pattern for teams that need AI fluency without turning every task into an experiment.",
    client: "Confidential public affairs team",
    sector: "Public Affairs",
    order: 2,
    outcome: "A sharper workflow for research, drafting, and team training with less noise and more confidence.",
    tags: ["Enablement", "Public Affairs", "Workflow design"],
    sections: [
      {
        heading: "The brief",
        paragraphs: [
          "The team did not need another generic AI workshop. It needed a translation layer: where AI could save time, where it created risk, and how to build working habits that fit stakeholder-sensitive work.",
        ],
      },
      {
        heading: "What AI4comms would focus on",
        paragraphs: [
          "Enablement would be built around the team's actual work rather than abstract tooling demos.",
        ],
        bullets: [
          "Rewriting recurring drafting workflows around realistic AI support",
          "Training sessions built around live task patterns",
          "Prompt patterns that reflect communications judgment, not generic templates",
          "Guidance on when to stop, review, or escalate",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Enablement is only useful when it changes Monday morning behaviour. A strong program turns curiosity into repeatable judgment, not confidence theatre.",
        ],
      },
    ],
  },
];
