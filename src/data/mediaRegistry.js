export const mediaRegistry = {
  "/getting-started/sign-in": {
    "sign-in": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/sign-in.png",
      alt: "Sign-in screen",
      caption: "Passwordless sign-in screen at portal.cargoclave.com"
    },
    "otp": {
      type: "video",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/otp-tutorial.mp4",
      alt: "OTP verification tutorial",
      caption: "Video walkthrough of the 6-digit OTP verification process"
    }
  },
  "/getting-started/launch": {
    "portal": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/portal.png",
      alt: "Application portal workspace",
      caption: "Selecting the Surveyor application card in the CargoClave Portal"
    }
  },
  "/getting-started/roles": {
    "surveyor": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/surveyor-workflow.png",
      alt: "Surveyor role workflow",
      caption: "Overview of surveyor check-ins and field activities"
    }
  },
  "/getting-started/workflows": {
    "e2e-workflow": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/e2e-workflow-map.png",
      alt: "End-to-End operations flowchart",
      caption: "Diagram representing the templates setup, surveyor checklist dispatches, mobile checks, and report outputs."
    }
  },
  "/operations/dashboard": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/dashboard.png",
      alt: "Operations dashboard layout",
      caption: "Real-time coordinator dashboard with active dispatches and metrics"
    }
  },
  "/operations/contracts": {
    "creation": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/contract-wizard.png",
      alt: "Contract dispatch wizard",
      caption: "Five-step contract creation and surveyor dispatch editor"
    }
  },
  "/operations/inspection-review": {
    "details": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/review-console.png",
      alt: "Inspection audit console",
      caption: "Supervisor review workspace detailing surveyor checkpoints and photographs"
    }
  },
  "/configuration/surveys": {
    "fields": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/builder-canvas.png",
      alt: "Survey builder workspace",
      caption: "The drag-and-drop canvas for structured checksheets design"
    }
  },
  "/configuration/teams": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/teams-setup.png",
      alt: "Teams management setup",
      caption: "Creating inspector groupings and assigning port supervisor coverage"
    }
  },
  "/configuration/inspection-templates": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/templates.png",
      alt: "Inspection templates list",
      caption: "Managing pre-defined survey checklist templates for logistics lines"
    }
  },
  "/reports/report-builder": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-builder-overview.png",
      alt: "Report builder overview",
      caption: "Custom PDF layout designer workspace overview"
    }
  },

  /* ── Per-page image entries for each Report Builder element page ── */
  "/reports/report-builder/overview": {
    "screenshot": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-builder-overview.png",
      alt: "Report Builder Overview",
      caption: "The drag-and-drop canvas workspace for composing PDF report layouts"
    }
  },
  "reports-report-builder-overview-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-builder-overview-demo.mp4",
    alt: "Report Builder Overview Tutorial",
    caption: "Report Builder Canvas Overview Video Tutorial"
  },

  "/reports/report-builder/elements": {
    "screenshot": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-elements.png",
      alt: "Report Elements Panel",
      caption: "Native layout blocks available on the designer canvas"
    }
  },
  "reports-report-builder-elements-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-elements-demo.mp4",
    alt: "Report Elements Tutorial",
    caption: "Report Elements Configuration Video Tutorial"
  },

  "/reports/report-builder/tables/flat": {
    "screenshot": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/flat-table.png",
      alt: "Flat Table layout",
      caption: "Displays inspection data in a simple chronological row-and-column layout"
    }
  },
  "reports-report-builder-tables-flat-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/flat-table-demo.mp4",
    alt: "Flat Table Tutorial",
    caption: "Flat Table Configuration & Column Binding Video Tutorial"
  },

  "/reports/report-builder/tables/pivot": {
    "screenshot": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/pivot-table.png",
      alt: "Pivot Table layout",
      caption: "Groups and aggregates multiple survey answers across rows and columns"
    }
  },
  "reports-report-builder-tables-pivot-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/pivot-table-demo.mp4",
    alt: "Pivot Table Tutorial",
    caption: "Pivot Table Grouping & Aggregation Video Tutorial"
  },

  "/reports/report-builder/tables/custom": {
    "screenshot": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/custom-table.png",
      alt: "Custom Table layout",
      caption: "Manually structured cell layout for complex cargo spreadsheets"
    }
  },
  "reports-report-builder-tables-custom-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/custom-table-demo.mp4",
    alt: "Custom Table Tutorial",
    caption: "Custom Table Manual Layout Builder Video Tutorial"
  },

  "/reports/report-builder/photo-grid": {
    "screenshot": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/photo-grid.png",
      alt: "Photo Grid element",
      caption: "Aggregates surveyor-uploaded inspection images into structured rows and columns"
    }
  },
  "reports-report-builder-photo-grid-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/photo-grid-demo.mp4",
    alt: "Photo Grid Tutorial",
    caption: "Photo Grid Configuration & Caption Formatting Video Tutorial"
  },

  "/reports/report-builder/branding": {
    "screenshot": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/branding.png",
      alt: "Report Branding panel",
      caption: "Configure custom organisation logo and header detail alignments"
    }
  },
  "reports-report-builder-branding-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/branding-demo.mp4",
    alt: "Branding Tutorial",
    caption: "Report Branding & Logo Configuration Video Tutorial"
  },

  "/reports/report-builder/publishing": {
    "screenshot": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/publishing.png",
      alt: "Preview & Publishing panel",
      caption: "Preview and lock templates before operational dispatches"
    }
  },
  "reports-report-builder-publishing-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/publishing-demo.mp4",
    alt: "Publishing Tutorial",
    caption: "Template Preview & Publishing Workflow Video Tutorial"
  },

  /* ── Report Builder: Individual Element Pages ── */

  "/reports/report-builder/elements/header": {
    "screenshot": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-element-header.png",
      alt: "Header Element in Report Designer",
      caption: "Header element showing customer logo, vessel name, and dispatch metadata at the top of a report"
    }
  },
  "reports-report-builder-elements-header-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-element-header-tutorial.mp4",
    alt: "Header Element Tutorial",
    caption: "Configuring the Header Element — Logo, Metadata & Corporate Branding"
  },

  "/reports/report-builder/elements/label-value": {
    "screenshot": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-element-label-value.png",
      alt: "Label / Value Element Configuration",
      caption: "Label / Value element displaying survey field answers as key–value summary rows"
    }
  },
  "reports-report-builder-elements-label-value-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-element-label-value-tutorial.mp4",
    alt: "Label / Value Element Tutorial",
    caption: "Configuring the Label / Value Element — Variable Binding & Summary Rows"
  },

  "/reports/report-builder/elements/rich-text": {
    "screenshot": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-element-rich-text.png",
      alt: "Rich Text Element Editor",
      caption: "Rich Text editor block supporting narrative content and dynamic variable injection"
    }
  },
  "reports-report-builder-elements-rich-text-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-element-rich-text-tutorial.mp4",
    alt: "Rich Text Element Tutorial",
    caption: "Configuring the Rich Text Element — Narrative Blocks & Variable Mapping"
  },

  "/reports/report-builder/elements/signature": {
    "screenshot": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-element-signature.png",
      alt: "Signature Element in Report Designer",
      caption: "Signature capture block rendering graphic signatures and verification timestamps"
    }
  },
  "reports-report-builder-elements-signature-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-element-signature-tutorial.mp4",
    alt: "Signature Element Tutorial",
    caption: "Configuring the Signature Element — Multi-Party Sign-off & Timestamp Rendering"
  },

  "/reports/report-builder/elements/photo-grid": {
    "screenshot": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-element-photo-grid.png",
      alt: "Photo Grid Element in Report Designer",
      caption: "Photo Grid element compiling inspection images into a structured visual evidence grid"
    }
  },
  "reports-report-builder-elements-photo-grid-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-element-photo-grid-tutorial.mp4",
    alt: "Photo Grid Element Tutorial",
    caption: "Configuring the Photo Grid Element — Evidence Compilation & Caption Formatting"
  },

  "/reports/report-builder/elements/flat-table": {
    "screenshot": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-element-flat-table.png",
      alt: "Flat Table Element in Report Designer",
      caption: "Flat Table displaying checklist records in a simple chronological row-and-column grid"
    }
  },
  "reports-report-builder-elements-flat-table-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-element-flat-table-tutorial.mp4",
    alt: "Flat Table Element Tutorial",
    caption: "Configuring the Flat Table Element — Column Binding & Layout Settings"
  },

  "/reports/report-builder/elements/pivot-table": {
    "screenshot": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-element-pivot-table.png",
      alt: "Pivot Table Element in Report Designer",
      caption: "Pivot Table element grouping and aggregating survey data across row and column dimensions"
    }
  },
  "reports-report-builder-elements-pivot-table-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-element-pivot-table-tutorial.mp4",
    alt: "Pivot Table Element Tutorial",
    caption: "Configuring the Pivot Table Element — Grouping, Aggregation & Filters"
  },

  "/reports/report-builder/elements/custom-table": {
    "screenshot": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-element-custom-table.png",
      alt: "Custom Table Element in Report Designer",
      caption: "Custom Table with manually structured cells, merged headers, and variable bindings"
    }
  },
  "reports-report-builder-elements-custom-table-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-element-custom-table-tutorial.mp4",
    alt: "Custom Table Element Tutorial",
    caption: "Configuring the Custom Table Element — Manual Cell Layout & Variable Mapping"
  },

  "/reports/contract-reports": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/pick-report.png",
      alt: "Contract pick report",
      caption: "Authoring consolidated summary reports on a specific cargo contract"
    }
  },
  "contract-reports-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/contract-reports-demo.mp4",
    alt: "Contract Reports Video Tutorial",
    caption: "Contract Reports Setup & PDF Export Video Tutorial"
  },
  "/reports/reports-management": {
    "viewer": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-viewer.png",
      alt: "Report viewer screen",
      caption: "Previewing finalized survey documents before exporting to client PDFs"
    }
  },
  "reports-management-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/reports-management-demo.mp4",
    alt: "Reports Management Video Tutorial",
    caption: "Reports Management Workspace & Viewer Overview Tutorial"
  },
  "/logs/activity-logs": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/activity-logs.png",
      alt: "Activity audit logs",
      caption: "Audit trail logging user modifications, login events, and template saves"
    }
  },
  "/logs/audit-logs": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/audit-logs.png",
      alt: "Database audit history",
      caption: "Tracing historic database row updates and schema configurations"
    }
  },
  "/mobile/overview": {
    "home": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/mobile-home.png",
      alt: "Mobile dashboard view",
      caption: "Inspector home page showing pending schedules and sync status notifications"
    }
  },
  "mobile-overview-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/mobile-overview-demo.mp4",
    alt: "Mobile Surveyor Overview Video Tutorial",
    caption: "Mobile Surveyor Client Overview Video Tutorial"
  },
  "mobile-executing-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/mobile-executing-demo.mp4",
    alt: "Executing a Survey Video Tutorial",
    caption: "Executing a Survey Video Tutorial"
  },
  "mobile-offline-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/mobile-offline-demo.mp4",
    alt: "Offline Workflow Video Tutorial",
    caption: "Offline Workflow & Local Caching Video Tutorial"
  },
  "mobile-media-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/mobile-media-demo.mp4",
    alt: "Media Capture Video Tutorial",
    caption: "Media Capture & Evidence Upload Video Tutorial"
  },
  "mobile-sync-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/mobile-sync-demo.mp4",
    alt: "Synchronization Video Tutorial",
    caption: "Synchronization & Retry Manager Video Tutorial"
  },
  "mobile-bestpractices-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/mobile-bestpractices-demo.mp4",
    alt: "Mobile Best Practices Video Tutorial",
    caption: "Mobile Surveyor Best Practices Video Tutorial"
  },
  "mobile-troubleshooting-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/mobile-troubleshooting-demo.mp4",
    alt: "Mobile Troubleshooting Video Tutorial",
    caption: "Mobile Surveyor Troubleshooting Video Tutorial"
  },
  "logs-overview-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/logs-overview-demo.mp4",
    alt: "Logs & Analytics Overview Video Tutorial",
    caption: "Logs & Analytics Overview Video Tutorial"
  },
  "logs-activity-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/logs-activity-demo.mp4",
    alt: "Activity Logs Video Tutorial",
    caption: "Activity Logs Navigation Video Tutorial"
  },
  "logs-audit-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/logs-audit-demo.mp4",
    alt: "Audit Logs Video Tutorial",
    caption: "Audit Logs Compliance Video Tutorial"
  },
  "logs-search-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/logs-search-demo.mp4",
    alt: "Logs Search & Filters Video Tutorial",
    caption: "Logs Search & Filters Video Tutorial"
  },
  "logs-details-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/logs-details-demo.mp4",
    alt: "Log Details Inspector Video Tutorial",
    caption: "Log Details & JSON Delta Inspector Video Tutorial"
  },
  "logs-bestpractices-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/logs-bestpractices-demo.mp4",
    alt: "Logs Best Practices Video Tutorial",
    caption: "Logs & Analytics Best Practices Video Tutorial"
  },
  "logs-troubleshooting-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/logs-troubleshooting-demo.mp4",
    alt: "Logs Troubleshooting Video Tutorial",
    caption: "Logs & Analytics Troubleshooting Video Tutorial"
  },
  "/reference/status-glossary": {
    "inspection-status": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/status-glossary.png",
      alt: "Status workflow glossary",
      caption: "Standard status workflow transitions from Draft to Finalized"
    }
  },
  "/reference/terminology": {
    "terms": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/terminology.png",
      alt: "Key terms glossary",
      caption: "Definition table for contracts, inspect runs, and surveys"
    }
  },
  "/reference/rules": {
    "rules": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/rules.png",
      alt: "Platform operational rules",
      caption: "Security rules and audit checklists enforced at port terminals"
    }
  }
};
