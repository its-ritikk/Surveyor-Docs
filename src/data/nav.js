export const nav = [
  {
    heading: "Getting Started",
    items: [
      { label: "Introduction", to: "/" },
      { label: "Sign In & Verification", to: "/getting-started/sign-in" },
      { label: "Launching the Surveyor App", to: "/getting-started/launch" },
      { label: "Roles & Access", to: "/getting-started/roles" },
      { label: "Business Workflows", to: "/getting-started/workflows" },
    ],
  },
  {
    heading: "Operations",
    items: [
      { label: "Operations Dashboard", to: "/operations/dashboard" },
      {
        label: "Contract Management",
        to: "/operations/contracts",
        children: [
          { label: "Overview", to: "/operations/contracts#overview" },
          { label: "Contract Statuses", to: "/operations/contracts#statuses" },
          { label: "Search & Filters", to: "/operations/contracts#filters-search" },
          { label: "Surveyor Assignment", to: "/operations/contracts#assignment" },
          { label: "Review & Approval", to: "/operations/contracts#approval" },
          { label: "Report Integrations", to: "/operations/contracts#reports" },
        ],
      },
      {
        label: "Inspection Review",
        to: "/operations/inspection-review",
        children: [
          { label: "Overview", to: "/operations/inspection-review#overview" },
          { label: "Inspection Details", to: "/operations/inspection-review#details" },
          { label: "Evidence Review", to: "/operations/inspection-review#evidence" },
          { label: "Comments", to: "/operations/inspection-review#comments" },
          { label: "Status Updates", to: "/operations/inspection-review#status-updates" },
        ],
      },
    ],
  },
  {
    heading: "Configuration",
    items: [
      {
        label: "Survey Builder",
        to: "/configuration/surveys",
        children: [
          { label: "Overview", to: "/configuration/surveys#overview" },
          { label: "Survey Details", to: "/configuration/surveys#details" },
          { label: "Field: Text", to: "/configuration/surveys#text-field" },
          { label: "Field: Number", to: "/configuration/surveys#number-field" },
          { label: "Field: Date", to: "/configuration/surveys#date-field" },
          { label: "Field: Dropdown", to: "/configuration/surveys#dropdown-field" },
          { label: "Field: Checkbox", to: "/configuration/surveys#checkbox-field" },
          { label: "Field: GPS", to: "/configuration/surveys#gps-field" },
          { label: "Field: Signature", to: "/configuration/surveys#signature-field" },
          { label: "Field: Photo", to: "/configuration/surveys#photo-field" },
          { label: "Conditional Logic", to: "/configuration/surveys#rules" },
          { label: "Publishing", to: "/configuration/surveys#publishing" },
        ],
      },
      { label: "Teams Management", to: "/configuration/teams" },
      {
        label: "Inspection Templates",
        to: "/configuration/inspection-templates",
        children: [
          { label: "Overview", to: "/configuration/inspection-templates#overview" },
          { label: "Template Settings", to: "/configuration/inspection-templates#settings" },
          { label: "Field Configuration", to: "/configuration/inspection-templates#field-config" },
          { label: "Conditional Logic", to: "/configuration/inspection-templates#conditional-logic" },
          { label: "Attachments", to: "/configuration/inspection-templates#attachments" },
          { label: "GPS & Location Rules", to: "/configuration/inspection-templates#gps-rules" },
          { label: "Signature Rules", to: "/configuration/inspection-templates#signature-rules" },
          { label: "Publishing", to: "/configuration/inspection-templates#publishing" },
        ],
      },
    ],
  },
  {
    heading: "Reports",
    items: [
      {
        label: "Report Builder",
        to: "/reports/report-builder",
        children: [
          { label: "Overview", to: "/reports/report-builder#overview" },
          {
            label: "Report Elements",
            children: [
              { label: "Header", to: "/reports/report-builder#header" },
              { label: "Label / Value", to: "/reports/report-builder#label-value" },
              { label: "Rich Text", to: "/reports/report-builder#rich-text" },
              { label: "Signature", to: "/reports/report-builder#signature" },
              { label: "Photo Grid", to: "/reports/report-builder#photo-grid" },
              {
                label: "Tables",
                children: [
                  { label: "Flat Table", to: "/reports/report-builder#flat-table" },
                  { label: "Pivot Table", to: "/reports/report-builder#pivot-table" },
                  { label: "Custom Table", to: "/reports/report-builder#custom-table" },
                ],
              },
            ],
          },
          { label: "Branding", to: "/reports/report-builder#branding" },
          { label: "Preview & Publishing", to: "/reports/report-builder#publishing" },
        ],
      },
      { label: "Contract Reports", to: "/reports/contract-reports" },
      { label: "Reports Management", to: "/reports/reports-management" },
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
    heading: "Mobile Surveyor",
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

const flatten = (items) => {
  const res = [];
  for (const item of items) {
    if (item.to && !item.to.includes("#")) {
      res.push({ label: item.label, to: item.to });
    }
    if (item.children) {
      res.push(...flatten(item.children));
    }
  }
  return res;
};

export const flatNav = nav.flatMap((g) => flatten(g.items));
