import DocPage, { Section } from "../../components/DocPage";
import { StatusTable } from "../../components/StatusBits";

const toc = [
  { id: "dashboard-kpis", label: "Dashboard KPI statuses" },
  { id: "inspection-status", label: "Inspection statuses" },
  { id: "log-types", label: "Log types" },
];

export default function StatusGlossary() {
  return (
    <DocPage
      path="/reference/status-glossary"
      eyebrow="Reference"
      title="Status & Stage Glossary"
      description="Every status label you'll see across the Surveyor Management System, in one place."
      toc={toc}
    >
      <Section id="dashboard-kpis" title="Operations Dashboard metrics">
        <StatusTable
          rows={[
            { label: "Total Contracts", color: "slate", desc: "All survey contracts registered in the system." },
            { label: "Total Inspections", color: "slate", desc: "All inspection records across every contract." },
            { label: "Pending Inspections", color: "amber", desc: "Inspections awaiting review or approval." },
            { label: "SLA Breaches", color: "red", desc: "Activities that have exceeded their agreed deadline — act on these immediately." },
            { label: "Completed Inspections", color: "green", desc: "Inspections that have been fully approved." },
            { label: "Active Surveyors", color: "teal", desc: "Surveyors currently working in the field." },
            { label: "Active Contracts", color: "blue", desc: "Contracts still in progress." },
            { label: "Due in 24h", color: "red", desc: "Activities whose deadline falls within the next 24 hours." },
            { label: "Defect Rate", color: "amber", desc: "Percentage of inspections flagged with quality issues." },
            { label: "Completed Today", color: "green", desc: "Inspections finished during the current day." },
          ]}
        />
      </Section>

      <Section id="inspection-status" title="Inspection statuses">
        <StatusTable
          rows={[
            { label: "Pending", color: "slate", desc: "Planned but not yet started." },
            { label: "In Progress", color: "blue", desc: "Surveyor has begun work but not submitted yet." },
            { label: "Submitted", color: "amber", desc: "Surveyor has completed and submitted — needs review." },
            { label: "Approved", color: "green", desc: "Reviewed and accepted." },
            { label: "Cond. Approved", color: "teal", desc: "Accepted with conditions or follow-up required." },
            { label: "Rejected", color: "red", desc: "Not accepted — surveyor must correct and resubmit." },
          ]}
        />
      </Section>

      <Section id="log-types" title="Log types">
        <StatusTable
          rows={[
            { label: "Activity Logs", color: "blue", desc: "Web UI interactions — page views, button clicks, navigation." },
            { label: "App Activity", color: "teal", desc: "Mobile field events — form changes, inspection submissions." },
            { label: "Audit Logs", color: "purple", desc: "Record-level changes — contracts, surveys, templates, reports." },
          ]}
        />
      </Section>
    </DocPage>
  );
}
