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
    },
    "elements": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-elements.png",
      alt: "Report elements",
      caption: "Native layout blocks available on the designer canvas"
    },
    "flat-table": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/flat-table.png",
      alt: "Flat table layout",
      caption: "Displays inspection data in a simple row-and-column layout"
    },
    "pivot-table": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/pivot-table.png",
      alt: "Pivot table layout",
      caption: "Groups and aggregates multiple survey answers across rows and columns"
    },
    "custom-table": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/custom-table.png",
      alt: "Custom table layout",
      caption: "Manually compile table columns and define column widths and labels"
    },
    "photo-grid": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/photo-grid.png",
      alt: "Photo grid layout",
      caption: "Aggregates surveyor-uploaded inspection images into structured rows and columns"
    },
    "branding": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/branding.png",
      alt: "Report branding",
      caption: "Configure custom organization logo and header detail alignments"
    },
    "publishing": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/publishing.png",
      alt: "Preview and publishing",
      caption: "Preview and lock templates before operational dispatches"
    }
  },
  "/reports/contract-reports": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/pick-report.png",
      alt: "Contract pick report",
      caption: "Authoring consolidated summary reports on a specific cargo contract"
    }
  },
  "/reports/reports-management": {
    "viewer": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-viewer.png",
      alt: "Report viewer screen",
      caption: "Previewing finalized survey documents before exporting to client PDFs"
    }
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
  "/mobile/executing-a-survey": {
    "starting": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/mobile-survey.png",
      alt: "Mobile checklist execution",
      caption: "Surveyor inspection form showing mandatory checklists and image upload fields"
    }
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
