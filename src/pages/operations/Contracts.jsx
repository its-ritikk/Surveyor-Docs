import DocPage, { Section } from "../../components/DocPage";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "statuses", label: "Contract Statuses" },
  { id: "filters-search", label: "Search & Filters" },
  { id: "assignment", label: "Surveyor Assignment" },
  { id: "approval", label: "Review & Approval" },
  { id: "reports", label: "Report Integrations" },
];

export default function Contracts() {
  return (
    <DocPage
      path="/operations/contracts"
      eyebrow="Operations"
      title="Contract Management Reference"
      description="Detailed configurations, workflows, and settings for creating and managing cargo contracts."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          A contract is the core operational dispatch record. It maps client requirements to an Execution Plan containing scheduled surveyor check-ins and required report formats.
        </p>
      </Section>

      <Section id="statuses" title="Contract Statuses">
        <p>
          Contracts transition through the following states in the lifecycle:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Draft</strong> — Initial configuration state. Validations are not enforced, allowing dispatchers to pause and resume setup.</li>
          <li><strong>Active</strong> — Dispatched state. Active surveys are sent to the surveyor's mobile application.</li>
          <li><strong>Completed</strong> — Closed state. All planned surveys have been completed, approved by a reviewer, and finalized into reports.</li>
          <li><strong>Cancelled</strong> — Voided state. Used to cancel dispatches and prevent further field submissions.</li>
        </ul>
      </Section>

      <Section id="filters-search" title="Search & Filters">
        <p><strong>Search:</strong> Query contracts by Contract ID, customer organization names, or BL number.</p>
        <p className="mt-2"><strong>Filters:</strong> Narrow lists using Status (Draft, Active, Completed), Priority, Cargo Type (Container, Break Bulk, Bulk), or Date Created fields.</p>
      </Section>

      <Section id="assignment" title="Surveyor Assignment">
        <p>
          Schedule survey dispatches within the Execution Plan editor:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Assignee Mapping</strong> — Select an individual surveyor or dispatch an entire Team to a checklist step.</li>
          <li><strong>SLA Scheduling</strong> — Configure completion deadlines (SLA dates) for every survey activity.</li>
          <li><strong>Location Assigns</strong> — Define the planned port terminal location and GPS coordinates for surveyor mobile verification.</li>
        </ul>
      </Section>

      <Section id="approval" title="Review & Approval">
        <p>
          Coordinators audit submitted checklists using the Inspection Review workflow. Once every survey in the Execution Plan receives an Approved or Cond. Approved status, the parent contract automatically updates its status state to Completed, locking report layouts.
        </p>
      </Section>

      <Section id="reports" title="Report Integrations">
        <p>
          Each contract template compiles and outputs PDF report files in the reports panel. The exported documents dynamically fetch contract metadata rows and approved checklist answers.
        </p>
      </Section>
    </DocPage>
  );
}
