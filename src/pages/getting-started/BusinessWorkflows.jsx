import React from "react";
import DocPage, { Section } from "../../components/DocPage";
import MermaidDiagram from "../../components/MermaidDiagram";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "e2e-workflow", label: "End-to-End Operational Process" },
  { id: "setup", label: "1. Checklist & Template Setup" },
  { id: "dispatch", label: "2. Contract Setup & Surveyor Assignment" },
  { id: "execution", label: "3. Mobile Inspection Execution" },
  { id: "review", label: "4. Quality Review & Approval" },
  { id: "reports", label: "5. Report Creation & Delivery" },
  { id: "roles", label: "Role Responsibilities" },
  { id: "lifecycle", label: "Status & Progress Stages" },
];

export default function BusinessWorkflows() {
  return (
    <DocPage
      path="/getting-started/workflows"
      eyebrow="Getting Started"
      title="Standard Operational Processes"
      description="Learn how different parts of CargoClave connect to guide an inspection from initial contract setup to final customer report."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          CargoClave SMS connects office coordinators with surveyors working at port terminals. The platform manages cargo inspections through five clear stages: checklist setup, contract setup, mobile inspection, quality review, and final report delivery.
        </p>
      </Section>

      <Section id="e2e-workflow" title="End-to-End Operational Process">
        <p>
          Here is how an inspection moves from initial setup in the office to final report delivery for your customer:
        </p>
        <MermaidDiagram
          chart={`flowchart TD
    A[Administrator: Create Checklist & Template] --> B[Coordinator: Set Up Contract & Assign Surveyor]
    B --> C[Surveyor Mobile App: Open Assignment & Check In]
    C --> D[Surveyor Mobile App: Fill Checklist & Snap Photos]
    D --> E[Coordinator: Check Responses & Photos]
    E -- Needs Corrections --> C
    E -- Approved --> F[System: Build & Publish Customer Report]`}
        />
      </Section>

      <Section id="setup" title="1. Checklist &amp; Template Setup">
        <p><strong>Goal:</strong> Build reusable inspection checklists and report layouts.</p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Who Does This:</strong> System Administrator.</li>
          <li><strong>Requirements:</strong> Template creation access.</li>
          <li><strong>How It Works:</strong> Add checklist fields (text, dropdowns, numbers) &rarr; Set required field rules &rarr; Arrange report layout &rarr; Save template.</li>
          <li><strong>What Happens Next:</strong> The new template appears in the dropdown menu when creating contracts.</li>
        </ul>
      </Section>

      <Section id="dispatch" title="2. Contract Setup &amp; Surveyor Assignment">
        <p><strong>Goal:</strong> Create a contract job and assign field surveyors.</p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Who Does This:</strong> Operations Coordinator.</li>
          <li><strong>How It Works:</strong> Pick inspection template &rarr; Enter BL Number, Weight, Vessel Name &rarr; Select assignees (Individual Surveyor or Team) &rarr; Set completion deadline.</li>
          <li><strong>Status Update:</strong> Contract status changes from Draft to Active. The job appears on the surveyor's mobile app.</li>
          <li><strong>Note:</strong> Missing required shipment numbers or unassigned steps will block contract activation.</li>
        </ul>
      </Section>

      <Section id="execution" title="3. Mobile Inspection Execution">
        <p><strong>Goal:</strong> Complete inspection checklists, record seal numbers, and take photos at the port.</p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Who Does This:</strong> Field Surveyor.</li>
          <li><strong>How It Works:</strong> Open Mobile App &rarr; Tap Sync &rarr; Arrive at port berth and click Start Survey &rarr; Fill in checklist fields &rarr; Snap photos and collect signatures &rarr; Tap Submit.</li>
          <li><strong>Status Update:</strong> Survey status changes from Pending &rarr; In Progress &rarr; Submitted.</li>
          <li><strong>Note:</strong> Required fields and photo captions must be completed before submitting.</li>
        </ul>
      </Section>

      <Section id="review" title="4. Inspection Review &amp; Approval">
        <p><strong>Goal:</strong> Verify submitted checklist responses and photos before locking the inspection.</p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Who Does This:</strong> Operations Coordinator.</li>
          <li><strong>How It Works:</strong> Open Inspection Review console &rarr; Check cargo seal photos and notes &rarr; Click Approve, or enter revision notes and click Request Edits.</li>
          <li><strong>Status Update:</strong> Survey changes to Approved or Sent Back for Revision (notifies field surveyor).</li>
        </ul>
      </Section>

      <Section id="reports" title="5. Report Creation &amp; Delivery">
        <p><strong>Goal:</strong> Generate clean inspection reports for client delivery.</p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Who Does This:</strong> Operations Coordinator / Manager.</li>
          <li><strong>How It Works:</strong> Once all inspection steps are Approved, open Reports &rarr; Preview populated report layout &rarr; Export report for customer sign-off.</li>
          <li><strong>What Happens Next:</strong> The system locks report entries and produces clean, branded customer reports.</li>
        </ul>
      </Section>

      <Section id="roles" title="Role Responsibilities">
        <ul className="list-disc pl-5 space-y-2 my-4 text-[13.5px]">
          <li><strong>System Administrator</strong> — Builds checklist templates, sets required field rules, and configures report layouts.</li>
          <li><strong>Operations Coordinator</strong> — Sets up contracts, assigns surveyors, tracks deadlines, reviews submissions, and exports reports.</li>
          <li><strong>Field Surveyor</strong> — Receives dispatches, completes checklist steps on-site, captures photos and signatures, and submits work.</li>
        </ul>
      </Section>

      <Section id="lifecycle" title="Status &amp; Progress Stages">
        <p>
          Status indicators show work progress across the platform:
        </p>
        <ul className="list-disc pl-5 space-y-2.5 my-4">
          <li><strong>Contract Progress:</strong> Draft (being set up) &rarr; Active (in progress on mobile) &rarr; Completed (all inspections approved).</li>
          <li><strong>Survey Progress:</strong> Pending (not started) &rarr; In Progress (started on mobile app) &rarr; Submitted (awaiting review) &rarr; Approved / Requested Edits.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
