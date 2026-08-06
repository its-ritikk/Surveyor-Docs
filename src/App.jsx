import { BrowserRouter, Routes, Route } from "react-router-dom";
import DocsLayout from "./layouts/DocsLayout";
import { HeadingsProvider } from "./context/HeadingsContext";

import Introduction from "./pages/Introduction";

import SignIn from "./pages/getting-started/SignIn";
import Verification from "./pages/getting-started/Verification";
import Launch from "./pages/getting-started/Launch";
import Roles from "./pages/getting-started/Roles";
import BusinessWorkflows from "./pages/getting-started/BusinessWorkflows";

import Dashboard from "./pages/operations/Dashboard";
import Contracts from "./pages/operations/Contracts";
import InspectionReview from "./pages/operations/InspectionReview";
import InspectionDashboard from "./pages/operations/InspectionDashboard";
import InspectionDetails from "./pages/operations/InspectionDetails";
import ReviewWorkflow from "./pages/operations/ReviewWorkflow";
import InspectionAttachments from "./pages/operations/InspectionAttachments";
import InspectionPermissions from "./pages/operations/InspectionPermissions";
import InspectionBestPractices from "./pages/operations/InspectionBestPractices";
import InspectionTroubleshooting from "./pages/operations/InspectionTroubleshooting";

import Surveys from "./pages/configuration/Surveys";
import Teams from "./pages/configuration/Teams";
import TemplateTopicPage from "./pages/configuration/templates/TemplateTopicPage";
import DropdownTopicPage from "./pages/configuration/surveys/DropdownTopicPage";
import CheckboxTopicPage from "./pages/configuration/surveys/CheckboxTopicPage";
import FieldDropdownPage from "./pages/configuration/surveys/FieldDropdownPage";
import FieldCheckboxPage from "./pages/configuration/surveys/FieldCheckboxPage";

// Survey Builder Modular Pages
import SurveyOverview from "./pages/configuration/surveys/SurveyOverview";
import WorkflowCanvas from "./pages/configuration/surveys/WorkflowCanvas";
import SurveySteps from "./pages/configuration/surveys/SurveySteps";
import FieldLibrary from "./pages/configuration/surveys/FieldLibrary";
import DragAndDrop from "./pages/configuration/surveys/DragAndDrop";
import FieldDetailPage from "./pages/configuration/surveys/FieldDetailPage";
import FieldConfigurationPage from "./pages/configuration/surveys/FieldConfigurationPage";
import ValidationRulesPage from "./pages/configuration/surveys/ValidationRulesPage";
import ConditionalLogicPage from "./pages/configuration/surveys/ConditionalLogicPage";
import AutoConfiguredFieldsPage from "./pages/configuration/surveys/AutoConfiguredFieldsPage";
import PreviewPage from "./pages/configuration/surveys/PreviewPage";
import PublishingPage from "./pages/configuration/surveys/PublishingPage";
import VersionManagementPage from "./pages/configuration/surveys/VersionManagementPage";
import PermissionsPage from "./pages/configuration/surveys/PermissionsPage";

import ReportBuilder from "./pages/reports/ReportBuilder";
import ContractReports from "./pages/reports/ContractReports";
import ReportsManagement from "./pages/reports/ReportsManagement";
import ReportsOverviewPage from "./pages/reports/ReportsOverviewPage";
import ReportCreationMethodsPage from "./pages/reports/ReportCreationMethodsPage";
import ReportTopicPage from "./pages/reports/ReportTopicPage";
import ReportLifecyclePage from "./pages/reports/ReportLifecyclePage";

// Report Builder: Sub-pages (Overview, Elements index, Branding, Publishing)
import Overview from "./pages/reports/report-builder/Overview";
import ReportElements from "./pages/reports/report-builder/ReportElements";
import Branding from "./pages/reports/report-builder/Branding";
import Publishing from "./pages/reports/report-builder/Publishing";

// Report Builder: Individual Element Pages
import HeaderElement from "./pages/reports/report-builder/elements/HeaderElement";
import LabelValueElement from "./pages/reports/report-builder/elements/LabelValueElement";
import RichTextElement from "./pages/reports/report-builder/elements/RichTextElement";
import SignatureElement from "./pages/reports/report-builder/elements/SignatureElement";
import PhotoGridElement from "./pages/reports/report-builder/elements/PhotoGridElement";
import FlatTableElement from "./pages/reports/report-builder/elements/FlatTableElement";
import PivotTableElement from "./pages/reports/report-builder/elements/PivotTableElement";
import CustomTableElement from "./pages/reports/report-builder/elements/CustomTableElement";

import AuditLogs from "./pages/logs/AuditLogs";
import LogsTopicPage from "./pages/logs/LogsTopicPage";

import MobileOverview from "./pages/mobile/MobileOverview";
import ExecutingSurvey from "./pages/mobile/ExecutingSurvey";
import MobileTopicPage from "./pages/mobile/MobileTopicPage";

import StatusGlossary from "./pages/reference/StatusGlossary";
import Terminology from "./pages/reference/Terminology";
import Rules from "./pages/reference/Rules";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <HeadingsProvider>
        <Routes>
          <Route element={<DocsLayout />}>
            <Route path="/" element={<Introduction />} />

            <Route path="/getting-started/sign-in" element={<SignIn />} />
            <Route path="/getting-started/verification" element={<Verification />} />
            <Route path="/getting-started/launch" element={<Launch />} />
            <Route path="/getting-started/roles" element={<Roles />} />
            <Route path="/getting-started/workflows" element={<BusinessWorkflows />} />

            <Route path="/operations/dashboard" element={<Dashboard />} />
            <Route path="/operations/contracts" element={<Contracts />} />
            <Route path="/operations/inspection-review" element={<InspectionReview />} />
            <Route path="/operations/inspection-review/dashboard" element={<InspectionDashboard />} />
            <Route path="/operations/inspection-review/details" element={<InspectionDetails />} />
            <Route path="/operations/inspection-review/workflow" element={<ReviewWorkflow />} />
            <Route path="/operations/inspection-review/attachments" element={<InspectionAttachments />} />
            <Route path="/operations/inspection-review/permissions" element={<InspectionPermissions />} />
            <Route path="/operations/inspection-review/best-practices" element={<InspectionBestPractices />} />
            <Route path="/operations/inspection-review/troubleshooting" element={<InspectionTroubleshooting />} />

            <Route path="/configuration/surveys" element={<Surveys />} />
            <Route path="/configuration/surveys/overview" element={<SurveyOverview />} />
            <Route path="/configuration/surveys/workflow-canvas" element={<WorkflowCanvas />} />
            <Route path="/configuration/surveys/survey-steps" element={<SurveySteps />} />
            <Route path="/configuration/surveys/field-library" element={<FieldLibrary />} />
            <Route path="/configuration/surveys/drag-and-drop" element={<DragAndDrop />} />

            {/* Dropdown Field Sub-Topic Routes (7) */}
            <Route path="/configuration/surveys/field-dropdown/overview" element={<DropdownTopicPage topicKey="overview" />} />
            <Route path="/configuration/surveys/field-dropdown/configuration" element={<DropdownTopicPage topicKey="configuration" />} />
            <Route path="/configuration/surveys/field-dropdown/options-management" element={<DropdownTopicPage topicKey="options-management" />} />
            <Route path="/configuration/surveys/field-dropdown/search-and-selection" element={<DropdownTopicPage topicKey="search-and-selection" />} />
            <Route path="/configuration/surveys/field-dropdown/validation" element={<DropdownTopicPage topicKey="validation" />} />
            <Route path="/configuration/surveys/field-dropdown/best-practices" element={<DropdownTopicPage topicKey="best-practices" />} />
            <Route path="/configuration/surveys/field-dropdown/troubleshooting" element={<DropdownTopicPage topicKey="troubleshooting" />} />

            {/* Checkbox Field Sub-Topic Routes (6) */}
            <Route path="/configuration/surveys/field-checkbox/overview" element={<CheckboxTopicPage topicKey="overview" />} />
            <Route path="/configuration/surveys/field-checkbox/configuration" element={<CheckboxTopicPage topicKey="configuration" />} />
            <Route path="/configuration/surveys/field-checkbox/checkbox-group" element={<CheckboxTopicPage topicKey="checkbox-group" />} />
            <Route path="/configuration/surveys/field-checkbox/validation" element={<CheckboxTopicPage topicKey="validation" />} />
            <Route path="/configuration/surveys/field-checkbox/best-practices" element={<CheckboxTopicPage topicKey="best-practices" />} />
            <Route path="/configuration/surveys/field-checkbox/troubleshooting" element={<CheckboxTopicPage topicKey="troubleshooting" />} />

            {/* Explicit Core Field Type Pages */}
            <Route path="/configuration/surveys/field-dropdown" element={<FieldDropdownPage />} />
            <Route path="/configuration/surveys/field-checkbox" element={<FieldCheckboxPage />} />

            {/* Individual Field Type Pages (Fallback) */}
            <Route path="/configuration/surveys/:fieldKey" element={<FieldDetailPage />} />

            <Route path="/configuration/surveys/field-configuration" element={<FieldConfigurationPage />} />
            <Route path="/configuration/surveys/validation-rules" element={<ValidationRulesPage />} />
            <Route path="/configuration/surveys/conditional-logic" element={<ConditionalLogicPage />} />
            <Route path="/configuration/surveys/auto-configured-fields" element={<AutoConfiguredFieldsPage />} />
            <Route path="/configuration/surveys/preview" element={<PreviewPage />} />
            <Route path="/configuration/surveys/publishing" element={<PublishingPage />} />
            <Route path="/configuration/surveys/version-management" element={<VersionManagementPage />} />
            <Route path="/configuration/surveys/permissions" element={<PermissionsPage />} />

            <Route path="/configuration/teams" element={<Teams />} />

            {/* ── Inspection Templates – Level 2 & Level 3 Routes ─────────── */}
            <Route path="/configuration/inspection-templates/overview" element={<TemplateTopicPage topicKey="overview" />} />
            <Route path="/configuration/inspection-templates/template-lifecycle" element={<TemplateTopicPage topicKey="template-lifecycle" />} />

            {/* Basic Details */}
            <Route path="/configuration/inspection-templates/basic-details" element={<TemplateTopicPage topicKey="basic-details" />} />
            <Route path="/configuration/inspection-templates/basic-details/template-information" element={<TemplateTopicPage topicKey="basic-details/template-information" />} />
            <Route path="/configuration/inspection-templates/basic-details/cargo-type" element={<TemplateTopicPage topicKey="basic-details/cargo-type" />} />
            <Route path="/configuration/inspection-templates/basic-details/process-type" element={<TemplateTopicPage topicKey="basic-details/process-type" />} />
            <Route path="/configuration/inspection-templates/basic-details/inspection-type" element={<TemplateTopicPage topicKey="basic-details/inspection-type" />} />
            <Route path="/configuration/inspection-templates/basic-details/client" element={<TemplateTopicPage topicKey="basic-details/client" />} />
            <Route path="/configuration/inspection-templates/basic-details/status" element={<TemplateTopicPage topicKey="basic-details/status" />} />
            <Route path="/configuration/inspection-templates/basic-details/validation" element={<TemplateTopicPage topicKey="basic-details/validation" />} />

            {/* Document Templates */}
            <Route path="/configuration/inspection-templates/document-templates/overview" element={<TemplateTopicPage topicKey="document-templates/overview" />} />
            <Route path="/configuration/inspection-templates/document-templates/document-library" element={<TemplateTopicPage topicKey="document-templates/document-library" />} />
            <Route path="/configuration/inspection-templates/document-templates/upload-documents" element={<TemplateTopicPage topicKey="document-templates/upload-documents" />} />
            <Route path="/configuration/inspection-templates/document-templates/replace-documents" element={<TemplateTopicPage topicKey="document-templates/replace-documents" />} />
            <Route path="/configuration/inspection-templates/document-templates/delete-documents" element={<TemplateTopicPage topicKey="document-templates/delete-documents" />} />
            <Route path="/configuration/inspection-templates/document-templates/preview-documents" element={<TemplateTopicPage topicKey="document-templates/preview-documents" />} />
            <Route path="/configuration/inspection-templates/document-templates/supported-formats" element={<TemplateTopicPage topicKey="document-templates/supported-formats" />} />
            <Route path="/configuration/inspection-templates/document-templates/version-control" element={<TemplateTopicPage topicKey="document-templates/version-control" />} />
            <Route path="/configuration/inspection-templates/document-templates/document-mapping" element={<TemplateTopicPage topicKey="document-templates/document-mapping" />} />

            {/* Survey Selection */}
            <Route path="/configuration/inspection-templates/survey-selection/overview" element={<TemplateTopicPage topicKey="survey-selection/overview" />} />
            <Route path="/configuration/inspection-templates/survey-selection/survey-library" element={<TemplateTopicPage topicKey="survey-selection/survey-library" />} />
            <Route path="/configuration/inspection-templates/survey-selection/assign-survey" element={<TemplateTopicPage topicKey="survey-selection/assign-survey" />} />
            <Route path="/configuration/inspection-templates/survey-selection/remove-survey" element={<TemplateTopicPage topicKey="survey-selection/remove-survey" />} />
            <Route path="/configuration/inspection-templates/survey-selection/survey-sequence" element={<TemplateTopicPage topicKey="survey-selection/survey-sequence" />} />
            <Route path="/configuration/inspection-templates/survey-selection/mandatory-surveys" element={<TemplateTopicPage topicKey="survey-selection/mandatory-surveys" />} />
            <Route path="/configuration/inspection-templates/survey-selection/optional-surveys" element={<TemplateTopicPage topicKey="survey-selection/optional-surveys" />} />
            <Route path="/configuration/inspection-templates/survey-selection/survey-dependencies" element={<TemplateTopicPage topicKey="survey-selection/survey-dependencies" />} />
            <Route path="/configuration/inspection-templates/survey-selection/execution-order" element={<TemplateTopicPage topicKey="survey-selection/execution-order" />} />
            <Route path="/configuration/inspection-templates/survey-selection/workflow-integration" element={<TemplateTopicPage topicKey="survey-selection/workflow-integration" />} />

            {/* Workflow Stages */}
            <Route path="/configuration/inspection-templates/workflow-stages/overview" element={<TemplateTopicPage topicKey="workflow-stages/overview" />} />
            <Route path="/configuration/inspection-templates/workflow-stages/stage-configuration" element={<TemplateTopicPage topicKey="workflow-stages/stage-configuration" />} />
            <Route path="/configuration/inspection-templates/workflow-stages/stage-properties" element={<TemplateTopicPage topicKey="workflow-stages/stage-properties" />} />
            <Route path="/configuration/inspection-templates/workflow-stages/cargo-process-mapping" element={<TemplateTopicPage topicKey="workflow-stages/cargo-process-mapping" />} />
            <Route path="/configuration/inspection-templates/workflow-stages/entity-scope" element={<TemplateTopicPage topicKey="workflow-stages/entity-scope" />} />
            <Route path="/configuration/inspection-templates/workflow-stages/stage-sequence" element={<TemplateTopicPage topicKey="workflow-stages/stage-sequence" />} />
            <Route path="/configuration/inspection-templates/workflow-stages/execution-order" element={<TemplateTopicPage topicKey="workflow-stages/execution-order" />} />
            <Route path="/configuration/inspection-templates/workflow-stages/independent-stages" element={<TemplateTopicPage topicKey="workflow-stages/independent-stages" />} />
            <Route path="/configuration/inspection-templates/workflow-stages/stage-dependencies" element={<TemplateTopicPage topicKey="workflow-stages/stage-dependencies" />} />
            <Route path="/configuration/inspection-templates/workflow-stages/stage-execution" element={<TemplateTopicPage topicKey="workflow-stages/stage-execution" />} />
            <Route path="/configuration/inspection-templates/workflow-stages/survey-assignment" element={<TemplateTopicPage topicKey="workflow-stages/survey-assignment" />} />
            <Route path="/configuration/inspection-templates/workflow-stages/survey-execution" element={<TemplateTopicPage topicKey="workflow-stages/survey-execution" />} />
            <Route path="/configuration/inspection-templates/workflow-stages/required-evidence" element={<TemplateTopicPage topicKey="workflow-stages/required-evidence" />} />
            <Route path="/configuration/inspection-templates/workflow-stages/completion-criteria" element={<TemplateTopicPage topicKey="workflow-stages/completion-criteria" />} />
            <Route path="/configuration/inspection-templates/workflow-stages/validation" element={<TemplateTopicPage topicKey="workflow-stages/validation" />} />
            <Route path="/configuration/inspection-templates/workflow-stages/permissions" element={<TemplateTopicPage topicKey="workflow-stages/permissions" />} />
            <Route path="/configuration/inspection-templates/workflow-stages/best-practices" element={<TemplateTopicPage topicKey="workflow-stages/best-practices" />} />
            <Route path="/configuration/inspection-templates/workflow-stages/troubleshooting" element={<TemplateTopicPage topicKey="workflow-stages/troubleshooting" />} />

            {/* Contract Fields */}
            <Route path="/configuration/inspection-templates/contract-fields/overview" element={<TemplateTopicPage topicKey="contract-fields/overview" />} />
            <Route path="/configuration/inspection-templates/contract-fields/customer-fields" element={<TemplateTopicPage topicKey="contract-fields/customer-fields" />} />
            <Route path="/configuration/inspection-templates/contract-fields/container-fields" element={<TemplateTopicPage topicKey="contract-fields/container-fields" />} />
            <Route path="/configuration/inspection-templates/contract-fields/cargo-fields" element={<TemplateTopicPage topicKey="contract-fields/cargo-fields" />} />
            <Route path="/configuration/inspection-templates/contract-fields/port-fields" element={<TemplateTopicPage topicKey="contract-fields/port-fields" />} />
            <Route path="/configuration/inspection-templates/contract-fields/vessel-fields" element={<TemplateTopicPage topicKey="contract-fields/vessel-fields" />} />
            <Route path="/configuration/inspection-templates/contract-fields/reference-fields" element={<TemplateTopicPage topicKey="contract-fields/reference-fields" />} />
            <Route path="/configuration/inspection-templates/contract-fields/custom-fields" element={<TemplateTopicPage topicKey="contract-fields/custom-fields" />} />
            <Route path="/configuration/inspection-templates/contract-fields/auto-mapping" element={<TemplateTopicPage topicKey="contract-fields/auto-mapping" />} />
            <Route path="/configuration/inspection-templates/contract-fields/manual-mapping" element={<TemplateTopicPage topicKey="contract-fields/manual-mapping" />} />

            {/* Report Builder Integration */}
            <Route path="/configuration/inspection-templates/report-builder-integration/overview" element={<TemplateTopicPage topicKey="report-builder-integration/overview" />} />
            <Route path="/configuration/inspection-templates/report-builder-integration/select-report-template" element={<TemplateTopicPage topicKey="report-builder-integration/select-report-template" />} />
            <Route path="/configuration/inspection-templates/report-builder-integration/report-layout" element={<TemplateTopicPage topicKey="report-builder-integration/report-layout" />} />
            <Route path="/configuration/inspection-templates/report-builder-integration/field-mapping" element={<TemplateTopicPage topicKey="report-builder-integration/field-mapping" />} />
            <Route path="/configuration/inspection-templates/report-builder-integration/dynamic-variables" element={<TemplateTopicPage topicKey="report-builder-integration/dynamic-variables" />} />
            <Route path="/configuration/inspection-templates/report-builder-integration/report-elements" element={<TemplateTopicPage topicKey="report-builder-integration/report-elements" />} />
            <Route path="/configuration/inspection-templates/report-builder-integration/preview" element={<TemplateTopicPage topicKey="report-builder-integration/preview" />} />
            <Route path="/configuration/inspection-templates/report-builder-integration/pdf-generation" element={<TemplateTopicPage topicKey="report-builder-integration/pdf-generation" />} />
            <Route path="/configuration/inspection-templates/report-builder-integration/export" element={<TemplateTopicPage topicKey="report-builder-integration/export" />} />
            <Route path="/configuration/inspection-templates/report-builder-integration/synchronization" element={<TemplateTopicPage topicKey="report-builder-integration/synchronization" />} />

            {/* Validation Engine */}
            <Route path="/configuration/inspection-templates/validation-engine/overview" element={<TemplateTopicPage topicKey="validation-engine/overview" />} />
            <Route path="/configuration/inspection-templates/validation-engine/required-validation" element={<TemplateTopicPage topicKey="validation-engine/required-validation" />} />
            <Route path="/configuration/inspection-templates/validation-engine/duplicate-validation" element={<TemplateTopicPage topicKey="validation-engine/duplicate-validation" />} />
            <Route path="/configuration/inspection-templates/validation-engine/workflow-validation" element={<TemplateTopicPage topicKey="validation-engine/workflow-validation" />} />
            <Route path="/configuration/inspection-templates/validation-engine/survey-validation" element={<TemplateTopicPage topicKey="validation-engine/survey-validation" />} />
            <Route path="/configuration/inspection-templates/validation-engine/publishing-validation" element={<TemplateTopicPage topicKey="validation-engine/publishing-validation" />} />
            <Route path="/configuration/inspection-templates/validation-engine/business-rules" element={<TemplateTopicPage topicKey="validation-engine/business-rules" />} />
            <Route path="/configuration/inspection-templates/validation-engine/error-messages" element={<TemplateTopicPage topicKey="validation-engine/error-messages" />} />

            {/* Publishing */}
            <Route path="/configuration/inspection-templates/publishing/overview" element={<TemplateTopicPage topicKey="publishing/overview" />} />
            <Route path="/configuration/inspection-templates/publishing/save-draft" element={<TemplateTopicPage topicKey="publishing/save-draft" />} />
            <Route path="/configuration/inspection-templates/publishing/publish" element={<TemplateTopicPage topicKey="publishing/publish" />} />
            <Route path="/configuration/inspection-templates/publishing/update-published-template" element={<TemplateTopicPage topicKey="publishing/update-published-template" />} />
            <Route path="/configuration/inspection-templates/publishing/rollback" element={<TemplateTopicPage topicKey="publishing/rollback" />} />
            <Route path="/configuration/inspection-templates/publishing/deployment" element={<TemplateTopicPage topicKey="publishing/deployment" />} />
            <Route path="/configuration/inspection-templates/publishing/version-history" element={<TemplateTopicPage topicKey="publishing/version-history" />} />
            <Route path="/configuration/inspection-templates/publishing/publishing-restrictions" element={<TemplateTopicPage topicKey="publishing/publishing-restrictions" />} />

            {/* Standalone Level 2 pages */}
            <Route path="/configuration/inspection-templates/permissions" element={<TemplateTopicPage topicKey="permissions" />} />
            <Route path="/configuration/inspection-templates/best-practices" element={<TemplateTopicPage topicKey="best-practices" />} />
            
            {/* Troubleshooting */}
            <Route path="/configuration/inspection-templates/troubleshooting" element={<TemplateTopicPage topicKey="troubleshooting" />} />
            <Route path="/configuration/inspection-templates/troubleshooting/validation-errors" element={<TemplateTopicPage topicKey="troubleshooting/validation-errors" />} />
            <Route path="/configuration/inspection-templates/troubleshooting/publish-failed" element={<TemplateTopicPage topicKey="troubleshooting/publish-failed" />} />
            <Route path="/configuration/inspection-templates/troubleshooting/survey-missing" element={<TemplateTopicPage topicKey="troubleshooting/survey-missing" />} />
            <Route path="/configuration/inspection-templates/troubleshooting/report-builder-issues" element={<TemplateTopicPage topicKey="troubleshooting/report-builder-issues" />} />
            <Route path="/configuration/inspection-templates/troubleshooting/permission-issues" element={<TemplateTopicPage topicKey="troubleshooting/permission-issues" />} />
            <Route path="/configuration/inspection-templates/troubleshooting/faq" element={<TemplateTopicPage topicKey="troubleshooting/faq" />} />

            {/* Legacy single-page route redirect to overview */}
            <Route path="/configuration/inspection-templates" element={<TemplateTopicPage topicKey="overview" />} />

            {/* Reports Ecosystem Routes */}
            <Route path="/reports/overview" element={<ReportsOverviewPage />} />
            <Route path="/reports/report-creation-methods" element={<ReportCreationMethodsPage />} />

            {/* Workflow Reports */}
            <Route path="/reports/workflow-reports/overview" element={<ReportTopicPage topicKey="workflow-reports/overview" />} />
            <Route path="/reports/workflow-reports/workflow-report-templates" element={<ReportTopicPage topicKey="workflow-reports/workflow-report-templates" />} />
            <Route path="/reports/workflow-reports/workflow-assignment" element={<ReportTopicPage topicKey="workflow-reports/workflow-assignment" />} />
            <Route path="/reports/workflow-reports/version-management" element={<ReportTopicPage topicKey="workflow-reports/version-management" />} />
            <Route path="/reports/workflow-reports/publishing" element={<ReportTopicPage topicKey="workflow-reports/publishing" />} />
            <Route path="/reports/workflow-reports/best-practices" element={<ReportTopicPage topicKey="workflow-reports/best-practices" />} />

            {/* Inspection Template Reports */}
            <Route path="/reports/inspection-template-reports/overview" element={<ReportTopicPage topicKey="inspection-template-reports/overview" />} />
            <Route path="/reports/inspection-template-reports/report-selection" element={<ReportTopicPage topicKey="inspection-template-reports/report-selection" />} />
            <Route path="/reports/inspection-template-reports/report-configuration" element={<ReportTopicPage topicKey="inspection-template-reports/report-configuration" />} />
            <Route path="/reports/inspection-template-reports/best-practices" element={<ReportTopicPage topicKey="inspection-template-reports/best-practices" />} />

            {/* Contract Reports */}
            <Route path="/reports/contract-reports/overview" element={<ReportTopicPage topicKey="contract-reports/overview" />} />
            <Route path="/reports/contract-reports/contract-report" element={<ReportTopicPage topicKey="contract-reports/contract-report" />} />
            <Route path="/reports/contract-reports/survey-report" element={<ReportTopicPage topicKey="contract-reports/survey-report" />} />
            <Route path="/reports/contract-reports/media-attachments" element={<ReportTopicPage topicKey="contract-reports/media-attachments" />} />
            <Route path="/reports/contract-reports/version-history" element={<ReportTopicPage topicKey="contract-reports/version-history" />} />
            <Route path="/reports/contract-reports/preview-and-export" element={<ReportTopicPage topicKey="contract-reports/preview-and-export" />} />
            <Route path="/reports/contract-reports/best-practices" element={<ReportTopicPage topicKey="contract-reports/best-practices" />} />

            {/* Reports Management */}
            <Route path="/reports/reports-management/overview" element={<ReportTopicPage topicKey="reports-management/overview" />} />
            <Route path="/reports/reports-management/inspection-reports" element={<ReportTopicPage topicKey="reports-management/inspection-reports" />} />
            <Route path="/reports/reports-management/search-and-filters" element={<ReportTopicPage topicKey="reports-management/search-and-filters" />} />
            <Route path="/reports/reports-management/report-actions" element={<ReportTopicPage topicKey="reports-management/report-actions" />} />

            {/* Existing Report Builder & Single-Page Fallbacks */}
            <Route path="/reports/report-builder" element={<ReportBuilder />} />
            <Route path="/reports/report-builder/overview" element={<Overview />} />
            <Route path="/reports/report-builder/elements" element={<ReportElements />} />
            <Route path="/reports/report-builder/branding" element={<Branding />} />
            <Route path="/reports/report-builder/publishing" element={<Publishing />} />

            {/* Report Builder: Individual Element Pages */}
            <Route path="/reports/report-builder/elements/header" element={<HeaderElement />} />
            <Route path="/reports/report-builder/elements/label-value" element={<LabelValueElement />} />
            <Route path="/reports/report-builder/elements/rich-text" element={<RichTextElement />} />
            <Route path="/reports/report-builder/elements/signature" element={<SignatureElement />} />
            <Route path="/reports/report-builder/elements/photo-grid" element={<PhotoGridElement />} />
            <Route path="/reports/report-builder/elements/flat-table" element={<FlatTableElement />} />
            <Route path="/reports/report-builder/elements/pivot-table" element={<PivotTableElement />} />
            <Route path="/reports/report-builder/elements/custom-table" element={<CustomTableElement />} />
            <Route path="/reports/contract-reports" element={<ContractReports />} />
            <Route path="/reports/reports-management" element={<ReportsManagement />} />
            <Route path="/reports/report-lifecycle" element={<ReportLifecyclePage />} />

            {/* Logs & Analytics Sub-Topic Routes */}
            <Route path="/logs/overview" element={<LogsTopicPage topicKey="overview" />} />
            <Route path="/logs/audit-logs" element={<AuditLogs />} />
            <Route path="/logs/search-and-filters" element={<LogsTopicPage topicKey="search-and-filters" />} />
            <Route path="/logs/log-details" element={<LogsTopicPage topicKey="log-details" />} />
            <Route path="/logs/best-practices" element={<LogsTopicPage topicKey="best-practices" />} />
            <Route path="/logs/troubleshooting" element={<LogsTopicPage topicKey="troubleshooting" />} />

            {/* Mobile Surveyor Sub-Topic Routes */}
            <Route path="/mobile/overview" element={<MobileOverview />} />
            <Route path="/mobile/executing-a-survey" element={<ExecutingSurvey />} />
            <Route path="/mobile/offline-workflow" element={<MobileTopicPage topicKey="offline-workflow" />} />
            <Route path="/mobile/media-capture" element={<MobileTopicPage topicKey="media-capture" />} />
            <Route path="/mobile/synchronization" element={<MobileTopicPage topicKey="synchronization" />} />
            <Route path="/mobile/best-practices" element={<MobileTopicPage topicKey="best-practices" />} />
            <Route path="/mobile/troubleshooting" element={<MobileTopicPage topicKey="troubleshooting" />} />

            <Route
              path="/reference/status-glossary"
              element={<StatusGlossary />}
            />
            <Route path="/reference/terminology" element={<Terminology />} />
            <Route path="/reference/rules" element={<Rules />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HeadingsProvider>
    </BrowserRouter>
  );
}
