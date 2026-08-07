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
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/dashboard-overview.png",
      alt: "Operations Dashboard Overview UI",
      caption: "Real-time Operations Dashboard layout displaying active survey contracts, coordinator quick actions, and terminal metrics"
    },
    "analytics": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/dashboard-analytics.png",
      alt: "Dashboard Performance Analytics & Alerts UI",
      caption: "Weekly performance analytics chart, SLA breach alerts, and real-time terminal exception console"
    }
  },
  "/operations/contracts": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/contract-management-overview.png",
      alt: "Contract Management Workspace Overview",
      caption: "Contract Management workspace overview displaying active contracts list and operational status metrics"
    },
    "creation-commercial": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/contract-creation-commercial.png",
      alt: "Create Contract - Template Selection & Commercial Details",
      caption: "Inspection template selection, contract ID, contracting party, point of contact, and start/deadline dates"
    },
    "creation-execution": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/contract-creation-execution.png",
      alt: "Create Contract - Shipment Details & Execution Plan Grid",
      caption: "Shipment details, BL number, voyage details, execution plan grid, surveyor assignees, and contract activation controls"
    }
  },
  "/operations/inspection-review": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/review-console.png",
      alt: "Inspection Review Console",
      caption: "Inspection Review workspace detailing submitted checklists, status cards, and quality review controls"
    }
  },
  "/operations/inspection-review/dashboard": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/inspection-review-dashboard.png",
      alt: "Inspection Review Dashboard UI Workspace",
      caption: "Inspection Review Dashboard displaying real-time status cards (Pending, In Progress, Submitted, Approved, Cond. Approved, Rejected), filter toolbar, and inspection queue list"
    }
  },
  "/operations/inspection-review/details": {
    "details": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/review-console.png",
      alt: "Inspection Details Audit Console",
      caption: "Inspection detail view displaying contract info cards, checklist field responses, GPS location verification, and evidence preview"
    }
  },
  "/configuration/surveys": {
    "fields": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/builder-survey.png",
      alt: "Survey builder workspace",
      caption: "The drag-and-drop survey for structured checksheets design"
    }
  },
  "/configuration/surveys/survey-steps": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/survey-steps.png",
      alt: "Survey Steps Configuration UI Survey",
      caption: "Survey Steps builder workspace showing multi-step wizard sequence, step page titles, field ordering, and skip rule settings"
    }
  },
  "/configuration/surveys/workflow-workspace": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/workflow-workspace.png",
      alt: "Workflow Visual Design Surface UI",
      caption: "Interactive visual design surface showing drag-and-drop layout, drop zones, step section breaks, and field controls"
    }
  },
  "/configuration/surveys/field-text": {
    "survey-placement": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/field-text-survey-placement.png",
      alt: "Text Field Placement on Survey UI",
      caption: "Text Field placed inside Step 1 of the Survey with drag handles, settings, duplicate, and delete controls"
    },
    "validations-drawer": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/field-text-validations.png",
      alt: "Text Field Configuration & Validations Drawer UI",
      caption: "Field Configuration drawer detailing Custom, Format (Container Number, Seal Number), and Text Validations (Min/Max Length)"
    }
  },
  "field-dropdown-overview-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/dropdown-field-tutorial.mp4",
    alt: "Dropdown Field configuration tutorial video",
    caption: "Interactive video walkthrough of Dropdown field setup, option sets, search filter, and validation rules"
  },
  "field-checkbox-overview-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/checkbox-field-tutorial.mp4",
    alt: "Checkbox Field configuration tutorial video",
    caption: "Interactive video walkthrough of Checkbox field setup, default states, safety compliance flags, and validation rules"
  },
  "/configuration/surveys/field-dropdown": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/field-dropdown-workspace.png",
      alt: "Dropdown Field Configuration Workspace UI",
      caption: "Dropdown Field configuration interface showing menu label setup, option items, search filter, and validation settings"
    },
    "core-drawer": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/field-dropdown-core.png",
      alt: "Dropdown Core Settings Drawer UI",
      caption: "Core Tab: Field name configuration and survey container placement"
    },
    "options-drawer": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/field-dropdown-options.png",
      alt: "Dropdown Options & Data Source Drawer UI",
      caption: "Options Tab: Unique selection rules, dynamic API data sources (Packing List, Contract, MDM), and static option items"
    },
    "validations-drawer": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/field-dropdown-validations.png",
      alt: "Dropdown Custom & Text Validations Drawer UI",
      caption: "Validations Tab: Allowed Values, Disallowed Values, Expected Value, and Required * enforcement"
    },
    "rules-drawer": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/field-dropdown-rules.png",
      alt: "Dropdown Logic & Auto-Fill Rules Drawer UI",
      caption: "Rules Tab: Visibility Rules (Source field, Comparator, Expected value) and Auto-fill rules"
    },
    "tutorial": {
      type: "video",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/dropdown-field-tutorial.mp4",
      alt: "Dropdown Field configuration tutorial video",
      caption: "Interactive video walkthrough of Dropdown field setup, option sets, search filter, and validation rules"
    }
  },
  "/configuration/surveys/field-date": {
    "core-drawer": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/field-date-core.png",
      alt: "Date Picker Core Settings & Available Fields Library UI",
      caption: "Core Tab: Available Fields library (Date picker tile), Survey Step 1 placement, and Field name setting"
    },
    "validations-drawer": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/field-date-validations.png",
      alt: "Date Picker Format & Text Validations Panel UI",
      caption: "Validations Tab: Date Format Validations (Future Date Only, Past Date Only, Today or Future) and Required * enforcement"
    },
    "rules-drawer": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/field-date-rules.png",
      alt: "Date Picker Logic & Auto-Fill Rules Panel UI",
      caption: "Rules Tab: Logic Visibility Rules (Source field, Comparator Equals, Expected value) and Auto-fill rules"
    }
  },
  "/configuration/surveys/field-photo": {
    "core-drawer": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/field-photo-core.png",
      alt: "Photo Upload Core Settings & Available Fields Library UI",
      caption: "Core Tab: Available Fields library (Photo tile), Survey Step 1 placement, and Field name setting"
    },
    "validations-drawer": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/field-photo-validations.png",
      alt: "Photo Upload Media Validations Panel UI",
      caption: "Validations Tab: Media Validations (Minimum Files, Maximum Files, Camera Only, Max File Size MB, Quality)"
    },
    "rules-drawer": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/field-photo-rules.png",
      alt: "Photo Upload Logic & Auto-Fill Rules Panel UI",
      caption: "Rules Tab: Logic Visibility Rules (Source field, Comparator Equals, Expected value) and Auto-fill rules"
    },
    "media-drawer": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/field-photo-media.png",
      alt: "Photo Upload Example Media Panel UI",
      caption: "Media Tab: Example media reference upload and preview panel"
    }
  },
  "/configuration/surveys/field-checkbox": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/field-checkbox-workspace.png",
      alt: "Checkbox Field Configuration Workspace UI",
      caption: "Checkbox Field configuration interface showing boolean toggle setup, default checked states, safety compliance flags, and validation rules"
    },
    "tutorial": {
      type: "video",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/field-checkbox-tutorial.mp4",
      alt: "Checkbox Field configuration tutorial video",
      caption: "Interactive video walkthrough of Checkbox field setup, option sets, search filter, and validation rules"
    }
  },
  "/configuration/inspection-templates/document-templates": {
    "tutorial": {
      type: "video",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/document-templates-tutorial.mp4",
      alt: "Document Templates Management Tutorial Video",
      caption: "Interactive video walkthrough of Document Templates upload, library management, and version control"
    }
  },
  "/configuration/inspection-templates/document-templates/overview": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/document-templates-overview.png",
      alt: "Document Templates Overview Interface UI",
      caption: "Document Templates Overview: Pre-attached reference manuals, SOP forms, and mandatory document attachments"
    }
  },
  "/configuration/inspection-templates/document-templates/upload-documents": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/upload-documents.png",
      alt: "Upload Documents Interface UI",
      caption: "Upload Documents Interface: Drag-and-drop file upload zone, format validation, and document tagging"
    }
  },
  "/configuration/inspection-templates": {
    "tutorial": {
      type: "video",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/inspection-templates-tutorial.mp4",
      alt: "Inspection Templates Master Configuration & Workflow Tutorial Video",
      caption: "Interactive video walkthrough of Inspection Templates, template lifecycle, survey selection, workflow stages, contract field mapping, document templates, and report builder integration"
    },
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/templates.png",
      alt: "Inspection templates list",
      caption: "Managing pre-defined survey checklist templates for logistics lines"
    }
  },
  "/configuration/inspection-templates/overview": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/inspection-templates-overview.png",
      alt: "Inspection Templates Master Blueprint Workspace UI",
      caption: "Inspection Templates Designer: Combining Survey Builder, Contract Fields, Document Templates, and Report Builder into reusable blueprints"
    }
  },
  "/configuration/inspection-templates/report-builder-integration/overview": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-builder-step4.png",
      alt: "New Inspection Template Step 4 Report Builder Workspace UI",
      caption: "Step 4 Report Builder: Package builder interface featuring '+ Add Report Template' action button, template package draft controls, and 'Publish Template' release button"
    }
  },
  "/configuration/inspection-templates/report-builder-integration/select-report-template": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/new-report-template-modal.png",
      alt: "New Report Template Creation Modal UI",
      caption: "New Report Template Modal: Choosing between 'Blank Report' (start from scratch) or 'Supervision Report (Predefined)' (prebuilt structure with auto-filled tables for header facts, weighment, de-stuffing, lot summary, and sampling)"
    }
  },
  "/configuration/inspection-templates/report-builder-integration/report-layout": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/blank-report-designer.png",
      alt: "Blank Report Designer & Live Report Preview UI",
      caption: "Blank Report Designer: Report Content toolbar (Text Box, Data Table, Label / Value, Signatures, Group, Photo Grid) and dual-pane Live Report Preview displaying header letterhead and client footer boundaries"
    }
  },
  "/configuration/inspection-templates/report-builder-integration/field-mapping": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/supervision-report-mapping.png",
      alt: "Predefined Supervision Report Section Mapping & Live Preview UI",
      caption: "Predefined Supervision Report Designer: Structured section cards (Primary Details, Equipment Details, Container Weighment Details, De-stuffing Details) bound live to PDF preview table"
    }
  },
  "/configuration/inspection-templates/survey-selection/overview": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/survey-selection-overview.png",
      alt: "Survey Selection Overview Interface UI",
      caption: "Survey Selection Overview: Binding published survey checklists, setting sequence order, and mandatory flags"
    }
  },
  "/configuration/inspection-templates/survey-selection/survey-library": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/survey-library.png",
      alt: "Survey Library Catalog UI",
      caption: "Survey Library Catalog: Browsing published survey check-sheets, searching by commodity, and question preview"
    }
  },
  "/configuration/inspection-templates/survey-selection/assign-survey": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/assign-survey.png",
      alt: "Assign Survey Interface UI",
      caption: "Assign Survey Interface: Binding selected survey checklists to active template payload"
    }
  },
  "/configuration/inspection-templates/survey-selection/remove-survey": {
    "overview": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/remove-survey.png",
      alt: "Remove Survey Action UI",
      caption: "Remove Survey Action: Unbinding survey checklists from draft template configurations and sequence re-indexing"
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
      caption: "The drag-and-drop survey workspace for composing PDF report layouts"
    }
  },
  "reports-report-builder-overview-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-builder-overview-demo.mp4",
    alt: "Report Builder Overview Tutorial",
    caption: "Report Builder Survey Overview Video Tutorial"
  },

  "/reports/report-builder/elements": {
    "screenshot": {
      type: "image",
      src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-elements.png",
      alt: "Report Elements Panel",
      caption: "Native layout blocks available on the designer survey"
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
      alt: "Text Element Editor",
      caption: "Text editor block supporting narrative content and dynamic variable injection"
    }
  },
  "reports-report-builder-elements-rich-text-tutorial-video": {
    type: "video",
    src: "https://s3.amazonaws.com/cargoclave-surveyor-assets/report-element-rich-text-tutorial.mp4",
    alt: "Text Element Tutorial",
    caption: "Configuring the Text Element — Narrative Blocks & Variable Mapping"
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
  }
};
