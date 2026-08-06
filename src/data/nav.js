export const nav = [
  {
    heading: "Getting Started",
    items: [
      { label: "Introduction", to: "/" },
      { label: "Sign In", to: "/getting-started/sign-in" },
      { label: "Verification", to: "/getting-started/verification" },
      { label: "Launching Surveyor App", to: "/getting-started/launch" },
      { label: "Roles & Access", to: "/getting-started/roles" },
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
          { label: "Creating Contracts", to: "/operations/contracts#creating-contracts" },
          { label: "Contract Details", to: "/operations/contracts#contract-details" },
          { label: "Survey Assignment", to: "/operations/contracts#survey-assignment" },
          { label: "Status Management", to: "/operations/contracts#status-management" },
          { label: "Permissions", to: "/operations/contracts#permissions" },
        ],
      },
      {
        label: "Inspection Review",
        to: "/operations/inspection-review",
        children: [
          {
            label: "Inspection Dashboard",
            to: "/operations/inspection-review/dashboard",
            children: [
              { label: "Status Summary", to: "/operations/inspection-review/dashboard#status-summary" },
              { label: "Statistics Overview", to: "/operations/inspection-review/dashboard#statistics" },
              { label: "Search & Filters", to: "/operations/inspection-review/dashboard#search-filters" },
              { label: "Inspection List", to: "/operations/inspection-review/dashboard#inspection-list" },
              { label: "Batch Actions", to: "/operations/inspection-review/dashboard#batch-actions" },
            ],
          },
          {
            label: "Inspection Details",
            to: "/operations/inspection-review/details",
            children: [
              { label: "Header Information", to: "/operations/inspection-review/details#header-information" },
              { label: "Inspection Data", to: "/operations/inspection-review/details#inspection-data" },
              { label: "GPS Verification", to: "/operations/inspection-review/details#gps-verification" },
              { label: "Evidence Review", to: "/operations/inspection-review/details#evidence-review" },
              { label: "Media Preview", to: "/operations/inspection-review/details#media-preview" },
              { label: "Report Viewer", to: "/operations/inspection-review/details#report-viewer" },
            ],
          },
          {
            label: "Review Workflow",
            to: "/operations/inspection-review/workflow",
            children: [
              { label: "Comments", to: "/operations/inspection-review/workflow#comments" },
              { label: "Status Updates", to: "/operations/inspection-review/workflow#status-updates" },
              { label: "Revision History", to: "/operations/inspection-review/workflow#revision-history" },
              { label: "Activity Timeline", to: "/operations/inspection-review/workflow#activity-timeline" },
              { label: "Print Report", to: "/operations/inspection-review/workflow#print-report" },
            ],
          },
          { label: "Attachments", to: "/operations/inspection-review/attachments" },
          { label: "Permissions", to: "/operations/inspection-review/permissions" },
          { label: "Best Practices", to: "/operations/inspection-review/best-practices" },
          { label: "Troubleshooting", to: "/operations/inspection-review/troubleshooting" },
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
          { label: "Overview", to: "/configuration/surveys/overview" },
          { label: "Workflow Canvas", to: "/configuration/surveys/workflow-canvas" },
          { label: "Survey Steps", to: "/configuration/surveys/survey-steps" },
          { label: "Field Library", to: "/configuration/surveys/field-library" },
          { label: "Drag & Drop", to: "/configuration/surveys/drag-and-drop" },
          {
            label: "Field Types",
            to: "/configuration/surveys/field-library",
            children: [
              { label: "Text Field", to: "/configuration/surveys/field-text" },
              {
                label: "Dropdown",
                to: "/configuration/surveys/field-dropdown/overview",
                children: [
                  { label: "Overview", to: "/configuration/surveys/field-dropdown/overview" },
                  { label: "Configuration", to: "/configuration/surveys/field-dropdown/configuration" },
                  { label: "Options Management", to: "/configuration/surveys/field-dropdown/options-management" },
                  { label: "Search & Selection", to: "/configuration/surveys/field-dropdown/search-and-selection" },
                  { label: "Validation", to: "/configuration/surveys/field-dropdown/validation" },
                  { label: "Best Practices", to: "/configuration/surveys/field-dropdown/best-practices" },
                  { label: "Troubleshooting", to: "/configuration/surveys/field-dropdown/troubleshooting" },
                ],
              },
              {
                label: "Checkbox",
                to: "/configuration/surveys/field-checkbox/overview",
                children: [
                  { label: "Overview", to: "/configuration/surveys/field-checkbox/overview" },
                  { label: "Configuration", to: "/configuration/surveys/field-checkbox/configuration" },
                  { label: "Checkbox Group", to: "/configuration/surveys/field-checkbox/checkbox-group" },
                  { label: "Validation", to: "/configuration/surveys/field-checkbox/validation" },
                  { label: "Best Practices", to: "/configuration/surveys/field-checkbox/best-practices" },
                  { label: "Troubleshooting", to: "/configuration/surveys/field-checkbox/troubleshooting" },
                ],
              },
              { label: "Date Picker", to: "/configuration/surveys/field-date" },
              { label: "GPS Field", to: "/configuration/surveys/field-gps" },
              { label: "Photo Upload", to: "/configuration/surveys/field-photo" },
              { label: "Video Upload", to: "/configuration/surveys/field-video" },
              { label: "File Upload", to: "/configuration/surveys/field-file" },
            ],
          },
          { label: "Field Configuration", to: "/configuration/surveys/field-configuration" },
          { label: "Validation Rules", to: "/configuration/surveys/validation-rules" },
          { label: "Conditional Logic", to: "/configuration/surveys/conditional-logic" },
          { label: "Auto Configured Fields", to: "/configuration/surveys/auto-configured-fields" },
          { label: "Preview", to: "/configuration/surveys/preview" },
          { label: "Publishing", to: "/configuration/surveys/publishing" },
          { label: "Version Management", to: "/configuration/surveys/version-management" },
          { label: "Permissions", to: "/configuration/surveys/permissions" },
        ],
      },
      { label: "Teams Management", to: "/configuration/teams" },
      {
        label: "Inspection Templates",
        to: "/configuration/inspection-templates/overview",
        children: [
          { label: "Overview", to: "/configuration/inspection-templates/overview" },
          { label: "Template Lifecycle", to: "/configuration/inspection-templates/template-lifecycle" },

          {
            label: "Basic Details",
            to: "/configuration/inspection-templates/basic-details",
            children: [
              { label: "Overview", to: "/configuration/inspection-templates/basic-details" },
              { label: "Template Information", to: "/configuration/inspection-templates/basic-details/template-information" },
              { label: "Cargo Type", to: "/configuration/inspection-templates/basic-details/cargo-type" },
              { label: "Process Type", to: "/configuration/inspection-templates/basic-details/process-type" },
              { label: "Inspection Type", to: "/configuration/inspection-templates/basic-details/inspection-type" },
              { label: "Client", to: "/configuration/inspection-templates/basic-details/client" },
              { label: "Status", to: "/configuration/inspection-templates/basic-details/status" },
              { label: "Validation", to: "/configuration/inspection-templates/basic-details/validation" },
            ],
          },

          {
            label: "Document Templates",
            to: "/configuration/inspection-templates/document-templates/overview",
            children: [
              { label: "Overview", to: "/configuration/inspection-templates/document-templates/overview" },
              { label: "Document Library", to: "/configuration/inspection-templates/document-templates/document-library" },
              { label: "Upload Documents", to: "/configuration/inspection-templates/document-templates/upload-documents" },
              { label: "Replace Documents", to: "/configuration/inspection-templates/document-templates/replace-documents" },
              { label: "Delete Documents", to: "/configuration/inspection-templates/document-templates/delete-documents" },
              { label: "Preview", to: "/configuration/inspection-templates/document-templates/preview-documents" },
              { label: "Supported Formats", to: "/configuration/inspection-templates/document-templates/supported-formats" },
              { label: "Version Control", to: "/configuration/inspection-templates/document-templates/version-control" },
              { label: "Document Mapping", to: "/configuration/inspection-templates/document-templates/document-mapping" },
            ],
          },

          {
            label: "Survey Selection",
            to: "/configuration/inspection-templates/survey-selection/overview",
            children: [
              { label: "Overview", to: "/configuration/inspection-templates/survey-selection/overview" },
              { label: "Survey Library", to: "/configuration/inspection-templates/survey-selection/survey-library" },
              { label: "Assign Survey", to: "/configuration/inspection-templates/survey-selection/assign-survey" },
              { label: "Remove Survey", to: "/configuration/inspection-templates/survey-selection/remove-survey" },
              { label: "Survey Sequence", to: "/configuration/inspection-templates/survey-selection/survey-sequence" },
              { label: "Mandatory Surveys", to: "/configuration/inspection-templates/survey-selection/mandatory-surveys" },
              { label: "Optional Surveys", to: "/configuration/inspection-templates/survey-selection/optional-surveys" },
              { label: "Survey Dependencies", to: "/configuration/inspection-templates/survey-selection/survey-dependencies" },
              { label: "Execution Order", to: "/configuration/inspection-templates/survey-selection/execution-order" },
            ],
          },

          {
            label: "Workflow Stages",
            to: "/configuration/inspection-templates/workflow-stages/overview",
            children: [
              { label: "Overview", to: "/configuration/inspection-templates/workflow-stages/overview" },
              {
                label: "Stage Configuration",
                to: "/configuration/inspection-templates/workflow-stages/stage-configuration",
                children: [
                  { label: "Stage Properties", to: "/configuration/inspection-templates/workflow-stages/stage-properties" },
                  { label: "Cargo & Process Mapping", to: "/configuration/inspection-templates/workflow-stages/cargo-process-mapping" },
                  { label: "Entity Scope", to: "/configuration/inspection-templates/workflow-stages/entity-scope" },
                ],
              },
              {
                label: "Stage Sequence",
                to: "/configuration/inspection-templates/workflow-stages/stage-sequence",
                children: [
                  { label: "Execution Order", to: "/configuration/inspection-templates/workflow-stages/execution-order" },
                  { label: "Independent Stages", to: "/configuration/inspection-templates/workflow-stages/independent-stages" },
                  { label: "Stage Dependencies", to: "/configuration/inspection-templates/workflow-stages/stage-dependencies" },
                ],
              },
              {
                label: "Stage Execution",
                to: "/configuration/inspection-templates/workflow-stages/stage-execution",
                children: [
                  { label: "Survey Assignment", to: "/configuration/inspection-templates/workflow-stages/survey-assignment" },
                  { label: "Survey Execution", to: "/configuration/inspection-templates/workflow-stages/survey-execution" },
                  { label: "Required Evidence", to: "/configuration/inspection-templates/workflow-stages/required-evidence" },
                  { label: "Completion Criteria", to: "/configuration/inspection-templates/workflow-stages/completion-criteria" },
                ],
              },
              { label: "Validation", to: "/configuration/inspection-templates/workflow-stages/validation" },
              { label: "Permissions", to: "/configuration/inspection-templates/workflow-stages/permissions" },
              { label: "Best Practices", to: "/configuration/inspection-templates/workflow-stages/best-practices" },
              { label: "Troubleshooting", to: "/configuration/inspection-templates/workflow-stages/troubleshooting" },
            ],
          },

          {
            label: "Contract Fields",
            to: "/configuration/inspection-templates/contract-fields/overview",
            children: [
              { label: "Overview", to: "/configuration/inspection-templates/contract-fields/overview" },
              { label: "Customer Fields", to: "/configuration/inspection-templates/contract-fields/customer-fields" },
              { label: "Cargo Fields", to: "/configuration/inspection-templates/contract-fields/cargo-fields" },
              { label: "Container Fields", to: "/configuration/inspection-templates/contract-fields/container-fields" },
              { label: "Port Fields", to: "/configuration/inspection-templates/contract-fields/port-fields" },
              { label: "Vessel Fields", to: "/configuration/inspection-templates/contract-fields/vessel-fields" },
              { label: "Reference Fields", to: "/configuration/inspection-templates/contract-fields/reference-fields" },
              { label: "Auto Mapping", to: "/configuration/inspection-templates/contract-fields/auto-mapping" },
              { label: "Manual Mapping", to: "/configuration/inspection-templates/contract-fields/manual-mapping" },
            ],
          },

          {
            label: "Report Builder Integration",
            to: "/configuration/inspection-templates/report-builder-integration/overview",
            children: [
              { label: "Overview", to: "/configuration/inspection-templates/report-builder-integration/overview" },
              { label: "Template Selection", to: "/configuration/inspection-templates/report-builder-integration/select-report-template" },
              { label: "Report Mapping", to: "/configuration/inspection-templates/report-builder-integration/field-mapping" },
              { label: "Dynamic Variables", to: "/configuration/inspection-templates/report-builder-integration/dynamic-variables" },
              { label: "Report Preview", to: "/configuration/inspection-templates/report-builder-integration/preview" },
              { label: "Export", to: "/configuration/inspection-templates/report-builder-integration/export" },
            ],
          },

          {
            label: "Validation Engine",
            to: "/configuration/inspection-templates/validation-engine/overview",
            children: [
              { label: "Required Validation", to: "/configuration/inspection-templates/validation-engine/required-validation" },
              { label: "Duplicate Validation", to: "/configuration/inspection-templates/validation-engine/duplicate-validation" },
              { label: "Workflow Validation", to: "/configuration/inspection-templates/validation-engine/workflow-validation" },
              { label: "Survey Validation", to: "/configuration/inspection-templates/validation-engine/survey-validation" },
              { label: "Publishing Validation", to: "/configuration/inspection-templates/validation-engine/publishing-validation" },
              { label: "Error Messages", to: "/configuration/inspection-templates/validation-engine/error-messages" },
            ],
          },

          {
            label: "Publishing",
            to: "/configuration/inspection-templates/publishing/overview",
            children: [
              { label: "Save Draft", to: "/configuration/inspection-templates/publishing/save-draft" },
              { label: "Publish", to: "/configuration/inspection-templates/publishing/publish" },
              { label: "Update Published Template", to: "/configuration/inspection-templates/publishing/update-published-template" },
              { label: "Rollback", to: "/configuration/inspection-templates/publishing/rollback" },
              { label: "Deployment", to: "/configuration/inspection-templates/publishing/deployment" },
              { label: "Version History", to: "/configuration/inspection-templates/publishing/version-history" },
            ],
          },

          { label: "Permissions", to: "/configuration/inspection-templates/permissions" },
          { label: "Best Practices", to: "/configuration/inspection-templates/best-practices" },

          {
            label: "Troubleshooting",
            to: "/configuration/inspection-templates/troubleshooting",
            children: [
              { label: "Validation Errors", to: "/configuration/inspection-templates/troubleshooting/validation-errors" },
              { label: "Publish Failed", to: "/configuration/inspection-templates/troubleshooting/publish-failed" },
              { label: "Survey Missing", to: "/configuration/inspection-templates/troubleshooting/survey-missing" },
              { label: "Report Builder Issues", to: "/configuration/inspection-templates/troubleshooting/report-builder-issues" },
              { label: "Permission Issues", to: "/configuration/inspection-templates/troubleshooting/permission-issues" },
              { label: "FAQ", to: "/configuration/inspection-templates/troubleshooting/faq" },
            ],
          },
        ],
      },
    ],
  },
  {
    heading: "Reports",
    items: [
      { label: "Overview", to: "/reports/overview" },
      { label: "Report Creation Methods", to: "/reports/report-creation-methods" },
      {
        label: "Workflow Reports",
        to: "/reports/workflow-reports/overview",
        children: [
          { label: "Overview", to: "/reports/workflow-reports/overview" },
          { label: "Workflow Report Templates", to: "/reports/workflow-reports/workflow-report-templates" },
          { label: "Workflow Assignment", to: "/reports/workflow-reports/workflow-assignment" },
          { label: "Version Management", to: "/reports/workflow-reports/version-management" },
          { label: "Publishing", to: "/reports/workflow-reports/publishing" },
          { label: "Best Practices", to: "/reports/workflow-reports/best-practices" },
        ],
      },
      {
        label: "Inspection Template Reports",
        to: "/reports/inspection-template-reports/overview",
        children: [
          { label: "Overview", to: "/reports/inspection-template-reports/overview" },
          { label: "Report Selection", to: "/reports/inspection-template-reports/report-selection" },
          { label: "Report Configuration", to: "/reports/inspection-template-reports/report-configuration" },
          { label: "Best Practices", to: "/reports/inspection-template-reports/best-practices" },
        ],
      },
      {
        label: "Contract Reports",
        to: "/reports/contract-reports/overview",
        children: [
          { label: "Overview", to: "/reports/contract-reports/overview" },
          { label: "Contract Report", to: "/reports/contract-reports/contract-report" },
          { label: "Survey Report", to: "/reports/contract-reports/survey-report" },
          { label: "Media Attachments", to: "/reports/contract-reports/media-attachments" },
          { label: "Version History", to: "/reports/contract-reports/version-history" },
          { label: "Preview & Export", to: "/reports/contract-reports/preview-and-export" },
          { label: "Best Practices", to: "/reports/contract-reports/best-practices" },
        ],
      },
      {
        label: "Reports Management",
        to: "/reports/reports-management/overview",
        children: [
          { label: "Overview", to: "/reports/reports-management/overview" },
          { label: "Inspection Reports", to: "/reports/reports-management/inspection-reports" },
          { label: "Search & Filters", to: "/reports/reports-management/search-and-filters" },
          { label: "Report Actions", to: "/reports/reports-management/report-actions" },
        ],
      },
      {
        label: "Report Builder",
        to: "/reports/report-builder/overview",
        children: [
          { label: "Overview", to: "/reports/report-builder/overview" },
          { label: "Report Elements", to: "/reports/report-builder/elements" },
          {
            label: "Elements",
            children: [
              { label: "Header", to: "/reports/report-builder/elements/header" },
              { label: "Label / Value", to: "/reports/report-builder/elements/label-value" },
              { label: "Rich Text", to: "/reports/report-builder/elements/rich-text" },
              { label: "Signature", to: "/reports/report-builder/elements/signature" },
              { label: "Photo Grid", to: "/reports/report-builder/elements/photo-grid" },
              { label: "Flat Table", to: "/reports/report-builder/elements/flat-table" },
              { label: "Pivot Table", to: "/reports/report-builder/elements/pivot-table" },
              { label: "Custom Table", to: "/reports/report-builder/elements/custom-table" },
            ],
          },
          { label: "Branding", to: "/reports/report-builder/branding" },
          { label: "Preview & Publishing", to: "/reports/report-builder/publishing" },
        ],
      },
      { label: "Report Lifecycle", to: "/reports/report-lifecycle" },
    ],
  },
  {
    heading: "Mobile Surveyor",
    items: [
      {
        label: "Mobile Surveyor App",
        to: "/mobile/overview",
        children: [
          { label: "Overview", to: "/mobile/overview" },
          { label: "Executing a Survey", to: "/mobile/executing-a-survey" },
          { label: "Offline Workflow", to: "/mobile/offline-workflow" },
          { label: "Media Capture", to: "/mobile/media-capture" },
          { label: "Synchronization", to: "/mobile/synchronization" },
          { label: "Best Practices", to: "/mobile/best-practices" },
          { label: "Troubleshooting", to: "/mobile/troubleshooting" },
        ],
      },
    ],
  },
  {
    heading: "Logs & Analytics",
    items: [
      {
        label: "Logs & Analytics",
        to: "/logs/overview",
        children: [
          { label: "Overview", to: "/logs/overview" },
          { label: "Audit Logs", to: "/logs/audit-logs" },
          { label: "Search & Filters", to: "/logs/search-and-filters" },
          { label: "Log Details", to: "/logs/log-details" },
          { label: "Best Practices", to: "/logs/best-practices" },
          { label: "Troubleshooting", to: "/logs/troubleshooting" },
        ],
      },
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
