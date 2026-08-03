import React from "react";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "purpose", label: "Purpose" },
  { id: "features", label: "Feature Overview" },
  { id: "sections", label: "Important Functional Sections" },
  { id: "surveyor", label: "Role: Surveyor" },
  { id: "coordinator", label: "Role: Coordinator" },
  { id: "manager-reviewer", label: "Role: Manager / Reviewer" },
  { id: "administrator", label: "Role: Administrator" },
  { id: "validations", label: "Validation & Route Protection" },
  { id: "related", label: "Related Features" },
  { id: "best-practices", label: "Best Practices" },
];

export default function Roles() {
  return (
    <DocPage
      path="/getting-started/roles"
      eyebrow="Getting Started"
      title="Roles & Access"
      description="Role-Based Access Control (RBAC) rules and client permissions for the Surveyor Management System."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          Access to the Surveyor Management System is controlled through role-based permissions configured centrally in the CargoClave Portal, distributing security scopes to field and office staff.
        </p>
      </Section>

      <Section id="purpose" title="Purpose">
        <p>
          Ensures operational security and segregation of duties. Inspectors are restricted to field data collection, while planners manage dispatches, and managers audit quality logs.
        </p>
      </Section>

      <Section id="features" title="Feature Overview">
        <p>
          Core access control capabilities include UI component shielding (hiding buttons), client-side route protection, and API request validation audits.
        </p>
      </Section>

      <Section id="sections" title="Important Functional Sections">
        <p>
          User accounts are mapped to one of the following four primary security scopes:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Surveyor</strong> — Field-based operator running active port checklists.</li>
          <li><strong>Coordinator</strong> — Operational planner dispatching contracts.</li>
          <li><strong>Manager / Reviewer</strong> — Quality auditor verifying coordinates and photo evidence.</li>
          <li><strong>Administrator</strong> — Master editor designing templates and surveys.</li>
        </ul>
      </Section>

      <Section id="surveyor" title="Role: Surveyor">
        <p>
          <strong>Primary responsibility:</strong> The Surveyor is a field-based user responsible for executing assigned inspections and capturing cargo condition details at port terminals.
        </p>
        <p>
          <strong>Activities &amp; features:</strong> Day-to-day activities include checking assigned cargo, starting scheduled checklists, capturing photographs, logging container seal numbers, and collecting supervisor or receiver sign-offs. They primarily interact with the <em>Mobile Surveyor App</em>.
        </p>
        <p>
          <strong>Actions &amp; workflow:</strong> Surveyors are permitted to start inspections, save local drafts, sync data, and submit final checklists. They receive survey assignments from the Coordinator and submit completed work to the Manager for approval.
        </p>
      </Section>

      <Section id="coordinator" title="Role: Coordinator">
        <p>
          <strong>Primary responsibility:</strong> The Coordinator is a back-office planner who schedules logistics contracts and dispatches surveyor assignments.
        </p>
        <p>
          <strong>Activities &amp; features:</strong> They create contracts, select appropriate survey templates, organize surveyor teams, and monitor daily progress through the <em>Operations Dashboard</em> and <em>Contract Management</em> screens.
        </p>
        <p>
          <strong>Actions &amp; workflow:</strong> Coordinators are permitted to draft and activate contracts, schedule survey steps, and assign surveyors or teams. They coordinate directly with administrators for templates and hand off finished submissions to managers.
        </p>
      </Section>

      <Section id="manager-reviewer" title="Role: Manager / Reviewer">
        <p>
          <strong>Primary responsibility:</strong> The Manager / Reviewer is an operational auditor responsible for checking data quality and verifying terminal inspections.
        </p>
        <p>
          <strong>Activities &amp; features:</strong> Typical tasks include verifying submitted data, auditing photo attachments, and cross-checking actual surveyor check-in coordinates using the GPS verification map. They rely heavily on the <em>Inspection Review</em> and <em>Reports Management</em> modules.
        </p>
        <p>
          <strong>Actions &amp; workflow:</strong> Managers hold the authority to approve inspections, request surveyor revisions, or reject incorrect logs. They interact directly with surveyors to resolve checklist errors and approve data before report generation.
        </p>
      </Section>

      <Section id="administrator" title="Role: Administrator">
        <p>
          <strong>Primary responsibility:</strong> The Administrator oversees platform settings, template configurations, and database variables.
        </p>
        <p>
          <strong>Activities &amp; features:</strong> They design checklist surveys using the <em>Survey Builder</em>, build standard report templates, structure operational teams, and review system access events using the <em>Activity &amp; Audit Logs</em>.
        </p>
        <p>
          <strong>Actions &amp; workflow:</strong> Administrators have full read-write permissions across configuration panels. They establish the operational rules and templates that Coordinators, Surveyors, and Managers use to complete their workflows.
        </p>
      </Section>

      <Section id="validations" title="Validation & Route Protection">
        <p>
          The Surveyor Management System gates all features, menus, and buttons behind a permission-based routing engine:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Router Blocking</strong> — Direct URL requests to unauthorized pages will redirect users to a Not Authorized view.</li>
          <li><strong>Action Protection</strong> — Edit and deletion actions block requests at the API gateway if session tokens lack access scopes.</li>
        </ul>
      </Section>

      <Section id="related" title="Related Features">
        <p>
          Roles and access associate directly with:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3">
          <li><a href="/getting-started/sign-in">Sign In &amp; Verification</a> — Exchanging credentials for session JWT tokens.</li>
          <li><a href="/getting-started/launch">Launching the Surveyor App</a> — Mapping app card permissions.</li>
        </ul>
      </Section>

      <Section id="best-practices" title="Best Practices">
        <Callout type="note">
          Roles, permissions, and organization user profiles are managed centrally on the CargoClave Portal. If you require permission adjustments or role changes, submit requests to your corporate system administrator.
        </Callout>
      </Section>
    </DocPage>
  );
}
