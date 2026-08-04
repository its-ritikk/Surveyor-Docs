import React from "react";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import DocMedia from "../../components/DocMedia";
import MermaidDiagram from "../../components/MermaidDiagram";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "e2e-workflow", label: "End-to-End Workflow Diagram" },
  { id: "setup", label: "1. Setup & Configuration" },
  { id: "dispatch", label: "2. Dispatch & Assignment" },
  { id: "execution", label: "3. Mobile Execution" },
  { id: "review", label: "4. Quality Audit & Review" },
  { id: "reports", label: "5. Report Generation" },
  { id: "roles", label: "Role Responsibilities" },
  { id: "lifecycle", label: "Status Lifecycles" },
  { id: "best-practices", label: "Best Practices" },
  { id: "tutorial-video", label: "Tutorial Video" },
];

export default function BusinessWorkflows() {
  return (
    <DocPage
      path="/getting-started/workflows"
      eyebrow="Getting Started"
      title="Business Workflows"
      description="Understand how the individual modules of the Surveyor Management System connect and interact to form a complete operational workflow."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The Surveyor Management System connects coordinators in port offices with surveyors at dock terminals. The platform tracks cargo inspections from initial checksheet design to dispatch, mobile check-in, review, and PDF report delivery.
        </p>
      </Section>

      <Section id="e2e-workflow" title="End-to-End Workflow Diagram">
        <p>
          The diagram below illustrates how cargo inspection templates flow from setup through field mobile execution to final client PDF reporting:
        </p>
        <MermaidDiagram
          chart={`flowchart TD
    A[Administrator: Survey & Template Setup] --> B[Dispatcher: Create Contract & Schedule SLAs]
    B --> C[Surveyor Mobile App: Sync & GPS Check-In]
    C --> D[Surveyor Mobile App: Complete Fields & Sign-Off]
    D --> E[Coordinator: GPS Variance & Photo Audit]
    E -- Rejected --> C
    E -- Approved --> F[System: Render PDF & Finalize Report]`}
        />
      </Section>

      <Section id="setup" title="1. Setup & Configuration">
        <p><strong>Purpose:</strong> Build reusable checklists and document layouts.</p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Role:</strong> Administrator.</li>
          <li><strong>Prerequisites:</strong> System configuration permissions.</li>
          <li><strong>Procedure:</strong> Design survey fields (dropdowns, numbers) &rarr; Map tags &rarr; Set validations &rarr; Stack blocks in Report Builder &rarr; Compile into an Inspection Template.</li>
          <li><strong>Expected Result:</strong> The template displays in the selection dropdown when creating new contracts.</li>
        </ul>
      </Section>

      <Section id="dispatch" title="2. Dispatch & Assignment">
        <p><strong>Purpose:</strong> Initiate cargo contracts and map surveyors to planned activities.</p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Role:</strong> Coordinator / Dispatcher.</li>
          <li><strong>Procedure:</strong> Select Inspection Template &rarr; Enter BL Number, Gross Weight, Vessel Name &rarr; Assign specific surveyors or Teams to checklist steps &rarr; Define planned location GPS coords and SLA dates.</li>
          <li><strong>Status Change:</strong> Contract transitions from Draft to Active; survey status shifts to Pending.</li>
          <li><strong>Failure Scenario:</strong> Missing mandatory shipment numbers or unassigned survey columns will block contract activation.</li>
        </ul>
      </Section>

      <Section id="execution" title="3. Mobile Execution">
        <p><strong>Purpose:</strong> Record checklist data, witness signatures, and cargo photographs on site.</p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Role:</strong> Surveyor.</li>
          <li><strong>Procedure:</strong> Open Mobile App &rarr; Sync dispatches &rarr; Arrive at port berth and click Start Survey &rarr; Log check-in GPS coordinates &rarr; Fill checklist fields &rarr; Capture photos and witness signatures &rarr; Tap Submit.</li>
          <li><strong>Status Change:</strong> Survey changes from Pending &rarr; In Progress &rarr; Submitted.</li>
          <li><strong>Validation Rule:</strong> GPS coords are logged at start and submission. Text captions are required for uploaded photos.</li>
        </ul>
      </Section>

      <Section id="review" title="4. Quality Audit & Review">
        <p><strong>Purpose:</strong> Review coordinate drift and checklist entries before report lock-in.</p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Role:</strong> Coordinator / Reviewer.</li>
          <li><strong>Procedure:</strong> Open Inspection Review console &rarr; Verify coordinates mismatch alerts &rarr; Audit cargo seal photos &rarr; Click Approve or enter written comments and click Reject.</li>
          <li><strong>Status Change:</strong> Survey transitions to Approved or Rejected (sends checklist back to surveyor mobile client).</li>
        </ul>
      </Section>

      <Section id="reports" title="5. Report Generation">
        <p><strong>Purpose:</strong> Finalize inspection PDFs for client billing and port records.</p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Role:</strong> Coordinator / Manager.</li>
          <li><strong>Procedure:</strong> Once all Execution Plan items receive Approved status, open Reports Management &rarr; Preview dynamically populated layout fields &rarr; Export report to client PDF file.</li>
          <li><strong>Expected Result:</strong> System locks report content and outputs paginated, branded client PDF files.</li>
        </ul>
      </Section>

      <Section id="roles" title="Role Responsibilities">
        <ul className="list-disc pl-5 space-y-2 my-4 text-[13.5px]">
          <li><strong>Administrator</strong> — Creates schemas, maps database tags, defines validation rules, and builds corporate layout branding.</li>
          <li><strong>Coordinator</strong> — Manages contracts, reviews coordinates and photos, comments on logs, and exports final PDF reports.</li>
          <li><strong>Surveyor</strong> — Syncs assignments, completes checklists on-site, captures witness signatures, and uploads photos.</li>
        </ul>
      </Section>

      <Section id="lifecycle" title="Status Lifecycles">
        <p>
          Status variables track progress across modules:
        </p>
        <ul className="list-disc pl-5 space-y-2.5 my-4">
          <li><strong>Contract Lifecycle:</strong> Draft (editable) &rarr; Active (active on mobile) &rarr; Completed (all surveys approved).</li>
          <li><strong>Survey Lifecycle:</strong> Pending (not started) &rarr; In Progress (started on mobile) &rarr; Submitted (awaiting audit) &rarr; Approved / Rejected.</li>
        </ul>
      </Section>

      <Section id="best-practices" title="Best Practices">
        <Callout type="tip">
          Schedule template creation first. Designing comprehensive blueprints guarantees that surveyors receive correct checklist validation checks, and coordinators secure consistent PDF branding.
        </Callout>
      </Section>

      <Section id="tutorial-video" title="Tutorial Video">
        <DocMedia
          mediaId="business-workflows-tutorial-video"
          caption="Business Workflows Video Tutorial"
        />
      </Section>
    </DocPage>
  );
}
