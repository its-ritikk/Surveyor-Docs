export const nav = [
  {
    heading: "Getting Started",
    items: [
      { label: "Introduction", to: "/", },
      { label: "Sign In & Verification", to: "/getting-started/sign-in" },
      { label: "Launching the Surveyor App", to: "/getting-started/launch" },
      { label: "Roles & Access", to: "/getting-started/roles" },
    ],
  },
  {
    heading: "Operations",
    items: [
      { label: "Operations Dashboard", to: "/operations/dashboard" },
      { label: "Contract Management", to: "/operations/contracts" },
      { label: "Inspection Review", to: "/operations/inspection-review" },
    ],
  },
  {
    heading: "Configuration",
    items: [
      { label: "Surveys (Survey Builder)", to: "/configuration/surveys" },
      { label: "Teams Management", to: "/configuration/teams" },
      { label: "Inspection Templates", to: "/configuration/inspection-templates" },
    ],
  },
  {
    heading: "Reports",
    items: [
      { label: "Report Builder", to: "/reports/report-builder" },
      { label: "Contract Reports", to: "/reports/contract-reports" },
      { label: "Reports Management & Viewer", to: "/reports/reports-management" },
    ],
  },
  {
    heading: "Logs & Analytics",
    items: [
      { label: "Activity Logs", to: "/logs/activity-logs" },
      { label: "Audit Logs", to: "/logs/audit-logs" },
    ],
  },
  {
    heading: "Mobile Application",
    items: [
      { label: "Mobile Surveyor App", to: "/mobile/overview" },
      { label: "Executing a Survey", to: "/mobile/executing-a-survey" },
    ],
  },
  {
    heading: "Reference",
    items: [
      { label: "Status & Stage Glossary", to: "/reference/status-glossary" },
      { label: "Key Terminology", to: "/reference/terminology" },
      { label: "Important Rules", to: "/reference/rules" },
    ],
  },
];

export const flatNav = nav.flatMap((g) => g.items);
