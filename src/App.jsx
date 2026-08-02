import { BrowserRouter, Routes, Route } from "react-router-dom";
import DocsLayout from "./layouts/DocsLayout";

import Introduction from "./pages/Introduction";

import SignIn from "./pages/getting-started/SignIn";
import Launch from "./pages/getting-started/Launch";
import Roles from "./pages/getting-started/Roles";

import Dashboard from "./pages/operations/Dashboard";
import Contracts from "./pages/operations/Contracts";
import InspectionReview from "./pages/operations/InspectionReview";

import Surveys from "./pages/configuration/Surveys";
import Teams from "./pages/configuration/Teams";
import InspectionTemplates from "./pages/configuration/InspectionTemplates";

import ReportBuilder from "./pages/reports/ReportBuilder";
import ContractReports from "./pages/reports/ContractReports";
import ReportsManagement from "./pages/reports/ReportsManagement";

import ActivityLogs from "./pages/logs/ActivityLogs";
import AuditLogs from "./pages/logs/AuditLogs";

import MobileOverview from "./pages/mobile/MobileOverview";
import ExecutingSurvey from "./pages/mobile/ExecutingSurvey";

import StatusGlossary from "./pages/reference/StatusGlossary";
import Terminology from "./pages/reference/Terminology";
import Rules from "./pages/reference/Rules";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DocsLayout />}>
          <Route path="/" element={<Introduction />} />

          <Route path="/getting-started/sign-in" element={<SignIn />} />
          <Route path="/getting-started/launch" element={<Launch />} />
          <Route path="/getting-started/roles" element={<Roles />} />

          <Route path="/operations/dashboard" element={<Dashboard />} />
          <Route path="/operations/contracts" element={<Contracts />} />
          <Route
            path="/operations/inspection-review"
            element={<InspectionReview />}
          />

          <Route path="/configuration/surveys" element={<Surveys />} />
          <Route path="/configuration/teams" element={<Teams />} />
          <Route
            path="/configuration/inspection-templates"
            element={<InspectionTemplates />}
          />

          <Route path="/reports/report-builder" element={<ReportBuilder />} />
          <Route
            path="/reports/contract-reports"
            element={<ContractReports />}
          />
          <Route
            path="/reports/reports-management"
            element={<ReportsManagement />}
          />

          <Route path="/logs/activity-logs" element={<ActivityLogs />} />
          <Route path="/logs/audit-logs" element={<AuditLogs />} />

          <Route path="/mobile/overview" element={<MobileOverview />} />
          <Route
            path="/mobile/executing-a-survey"
            element={<ExecutingSurvey />}
          />

          <Route
            path="/reference/status-glossary"
            element={<StatusGlossary />}
          />
          <Route path="/reference/terminology" element={<Terminology />} />
          <Route path="/reference/rules" element={<Rules />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
