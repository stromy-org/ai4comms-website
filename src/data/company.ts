export type Service = {
  id: string;
  name: string;
  description: string;
  deliverables: string[];
  typicalDuration: string;
};

export const company = {
  name: "AI4comms",
  legalName: "AI4comms",
  tagline: "Lead AI with clarity.",
  heroTagline: "Signal through the noise.",
  description:
    "AI4comms helps communications leaders turn AI from abstract hype into practical advantage through strategy, training, governance, and hands-on implementation support.",
  office: {
    city: "Netherlands",
    label: "Netherlands-based, working internationally",
  },
  contact: {
    email: null as string | null,
    phone: null as string | null,
    linkedin: null as string | null,
  },
  principles: [
    "Lead with the point, not the setup.",
    "Name trade-offs instead of pretending certainty.",
    "Turn AI experimentation into operating discipline.",
  ],
  differentiators: [
    {
      number: "01",
      title: "Clarity before tooling",
      body: "Focus first on where AI changes decisions, workflows, and risk in communications teams.",
    },
    {
      number: "02",
      title: "Practical enablement",
      body: "Training, governance, and implementation support are designed to survive contact with real workloads.",
    },
    {
      number: "03",
      title: "Senior advisory posture",
      body: "The tone is calm, direct, and outcome-led rather than optimistic for its own sake.",
    },
  ],
  aboutPoints: [
    "Built for communications leaders under pressure to adopt AI without creating avoidable reputational or operating risk.",
    "Combines strategic advisory, practical enablement, and governance design in one offer.",
    "Designed to feel closer to a senior advisory partner than a generic AI vendor.",
  ],
};

export const services: Service[] = [
  {
    id: "svc-001",
    name: "AI Strategy for Communications Teams",
    description:
      "Strategic advisory for communication leaders who need to define where AI creates real value across corporate communications, public affairs, media relations, and content operations.",
    deliverables: [
      "AI Opportunity Assessment",
      "Communications AI Roadmap",
      "Leadership Briefing",
      "Use-Case Prioritization",
    ],
    typicalDuration: "2-6 weeks",
  },
  {
    id: "svc-002",
    name: "AI Training and Team Enablement",
    description:
      "Practical training programs that help communications teams adopt AI tools responsibly, improve workflows, and build confidence without drowning in jargon.",
    deliverables: [
      "Workshop Design",
      "Prompt Playbooks",
      "Team Training Sessions",
      "Adoption Guidelines",
    ],
    typicalDuration: "1 day to 4 weeks",
  },
  {
    id: "svc-003",
    name: "Governance and Responsible AI for Comms",
    description:
      "Policy, governance, and operating-model support for organizations that need to use AI in communications without creating reputational, legal, or workflow risk.",
    deliverables: [
      "AI Governance Framework",
      "Risk Register",
      "Approval Workflow",
      "Usage Policy",
    ],
    typicalDuration: "3-8 weeks",
  },
  {
    id: "svc-004",
    name: "Executive AI Advisory",
    description:
      "Senior advisory support for leaders who need a clear view on how AI is reshaping communications functions, stakeholder expectations, and team structures.",
    deliverables: [
      "Executive Briefing",
      "Decision Memo",
      "Scenario Analysis",
      "Facilitated Leadership Session",
    ],
    typicalDuration: "Retainer or targeted advisory sprints",
  },
];

export const contactRoutes = [
  {
    title: "General Enquiry",
    description: "Use this route for a first conversation about your team, scope, or timing.",
    subject: "[Website] General enquiry",
    body: `Hello AI4comms,

I would like to discuss:

Organisation:
Context:
Timeline:

Best regards,`,
  },
  {
    title: "Strategy or Governance",
    description: "Use this route for roadmap, governance, operating model, or decision-support work.",
    subject: "[Website] Strategy or governance",
    body: `Hello AI4comms,

We would like support with:

Organisation:
Challenge:
Desired outcome:

Best regards,`,
  },
  {
    title: "Training and Enablement",
    description: "Use this route for workshops, leadership briefings, or communications team enablement.",
    subject: "[Website] Training and enablement",
    body: `Hello AI4comms,

We are interested in:

Team size:
Preferred format:
Timing:

Best regards,`,
  },
];
