import React from "react";
import { Link } from "react-router-dom";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import DocMedia from "../../components/DocMedia";
import { User, ClipboardList, Shield, Award } from "lucide-react";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "purpose", label: "Purpose & RBAC Architecture" },
  { id: "matrix", label: "Role Matrix Overview" },
  { id: "surveyor", label: "Role: Surveyor" },
  { id: "coordinator", label: "Role: Coordinator" },
  { id: "manager-reviewer", label: "Role: Manager / Reviewer" },
  { id: "administrator", label: "Role: Administrator" },
  { id: "validations", label: "Validation & Route Protection" },
  { id: "important-notes", label: "Important Security Rules" },
  { id: "best-practices", label: "Best Practices" },
  { id: "troubleshooting", label: "Troubleshooting & FAQs" },
  { id: "tutorial-video", label: "Tutorial Video" },
];

const rolesList = [
  {
    icon: User,
    role: "Field Surveyor",
    scope: "Mobile App Access",
    desc: "Executes port inspection checklists, captures evidence photos, logs container seal numbers, and collects recipient sign-offs at berths.",
  },
  {
    icon: ClipboardList,
    role: "Operational Coordinator",
    scope: "Web Dispatch Console",
    desc: "Registers shipping contracts, drafts execution plans, assigns surveyor teams, and monitors daily terminal throughput.",
  },
  {
    icon: Shield,
    role: "Manager / Reviewer",
    scope: "Quality Review & Auditing",
    desc: "Audits submitted checklists, verifies 1.0 km GPS geofence compliance, checks photo evidence, and approves final reports.",
  },
  {
    icon: Award,
    role: "System Administrator",
    scope: "Full System Configuration",
    desc: "Designs survey templates, configures conditional rules, structures operational teams, and reviews security audit logs.",
  },
];

export default function Roles() {
  return (
    <DocPage
      path="/getting-started/roles"
      eyebrow="Getting Started"
      title="Roles & Access"
      description="Comprehensive guide to Role-Based Access Control (RBAC), user security profiles, permissions, and daily workflows."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          Access to the CargoClave Surveyor Management System is governed by a robust <strong>Role-Based Access Control (RBAC)</strong> framework. Security profiles are provisioned centrally within CargoClave Portal and enforced across both the web management console and the Mobile Surveyor App.
        </p>
      </Section>

      <Section id="purpose" title="Purpose &amp; RBAC Architecture">
        <p>
          RBAC ensures strict segregation of duties, protecting data integrity and compliance across marine terminal operations. Inspectors are restricted to field data entry, coordinators manage dispatches, reviewers audit evidence quality, and administrators control core template logic.
        </p>
      </Section>

      <Section id="matrix" title="Role Matrix Overview">
        <p className="mb-4">Summary of the four primary security profiles:</p>
        <div className="grid gap-4 sm:grid-cols-2 my-5">
          {rolesList.map((r) => (
            <div
              key={r.role}
              className="rounded-xl border border-ink-900/10 dark:border-white/10 p-5 bg-ink-900/[0.01] dark:bg-white/[0.02]"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-signal-50 dark:bg-signal-900/40 text-signal-600 dark:text-signal-400">
                  <r.icon size={18} />
                </span>
                <div>
                  <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100">{r.role}</h4>
                  <span className="text-[11px] font-mono text-signal-700 dark:text-signal-400">{r.scope}</span>
                </div>
              </div>
              <p className="text-xs leading-5 text-ink-650 dark:text-slate-400">{r.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="surveyor" title="Role: Surveyor">
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-950 space-y-3">
          <p><strong>Purpose:</strong> Field-based data collector executing physical port inspection checklists.</p>
          <p><strong>Key Responsibilities:</strong> Arriving at assigned vessel berths, performing geotagged check-ins, completing survey steps, capturing container photos, recording seal numbers, and obtaining recipient signatures.</p>
          <p><strong>Accessible Modules:</strong> Mobile Surveyor App, Assigned Contracts List, Offline Inspection Runner.</p>
          <p><strong>Daily Workflow:</strong> Logs into Mobile App &rarr; Reviews assigned contracts &rarr; Checks in at terminal berth &rarr; Executes checklist &rarr; Submits completed inspection.</p>
          <p><strong>Permissions:</strong> Read assigned dispatches, execute survey checklists, save local drafts, upload photos, submit completed surveys. <em>(No access to web administration or report builder)</em>.</p>
          <p><strong>Best Practices:</strong> Perform a manual mobile sync before entering low-connectivity port berths.</p>
          <p><strong>Related Modules:</strong> <Link to="/mobile/overview">Mobile Surveyor App</Link>, <Link to="/mobile/executing-a-survey">Executing a Survey</Link>.</p>
        </div>
      </Section>

      <Section id="coordinator" title="Role: Coordinator">
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-950 space-y-3">
          <p><strong>Purpose:</strong> Operational planner managing shipping contracts and surveyor dispatch schedules.</p>
          <p><strong>Key Responsibilities:</strong> Creating contracts, selecting survey templates, building execution plans, assigning surveyors or teams, and tracking SLA compliance on the dashboard.</p>
          <p><strong>Accessible Modules:</strong> Operations Dashboard, Contract Management, Team Allocation Boards.</p>
          <p><strong>Daily Workflow:</strong> Reviews Dashboard metrics &rarr; Registers incoming customer contract &rarr; Selects survey template &rarr; Assigns field surveyor &rarr; Monitors SLA progress.</p>
          <p><strong>Permissions:</strong> Create/edit/draft contracts, assign surveyors, update dispatch dates, view dashboard analytics. <em>(Cannot alter published templates or audit logs)</em>.</p>
          <p><strong>Best Practices:</strong> Verify terminal location coordinates before dispatching contracts to ensure accurate GPS geofence checks.</p>
          <p><strong>Related Modules:</strong> <Link to="/operations/dashboard">Operations Dashboard</Link>, <Link to="/operations/contracts">Contract Management</Link>.</p>
        </div>
      </Section>

      <Section id="manager-reviewer" title="Role: Manager / Reviewer">
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-950 space-y-3">
          <p><strong>Purpose:</strong> Quality assurance auditor verifying data accuracy, evidence photos, and GPS compliance.</p>
          <p><strong>Key Responsibilities:</strong> Reviewing submitted checklists, auditing photo attachments, verifying surveyor check-in distances (Haversine 1.0 km check), approving surveys, or requesting surveyor revisions.</p>
          <p><strong>Accessible Modules:</strong> Operations Dashboard, Inspection Review Console, Contract Reports, Reports Management.</p>
          <p><strong>Daily Workflow:</strong> Opens Inspection Review queue &rarr; Selects submitted survey &rarr; Audits GPS map distance and photos &rarr; Approves inspection or requests revision &rarr; Compiles PDF report.</p>
          <p><strong>Permissions:</strong> Approve/reject inspection submissions, request surveyor revisions, override minor distance warnings with audit justification, export PDF reports.</p>
          <p><strong>Best Practices:</strong> Check GPS distance warnings immediately; require explicit surveyor notes if check-in occurred outside the 1.0 km radius.</p>
          <p><strong>Related Modules:</strong> <Link to="/operations/inspection-review">Inspection Review</Link>, <Link to="/reports/reports-management">Reports Management</Link>.</p>
        </div>
      </Section>

      <Section id="administrator" title="Role: Administrator">
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-950 space-y-3">
          <p><strong>Purpose:</strong> Platform administrator controlling template logic, team structures, and security governance.</p>
          <p><strong>Key Responsibilities:</strong> Designing checklist surveys in Survey Builder, setting up conditional logic rules, configuring inspection templates, managing teams, and auditing system logs.</p>
          <p><strong>Accessible Modules:</strong> Full platform access including Survey Builder, Teams Management, Inspection Templates, Report Builder, Activity Logs, and Audit Logs.</p>
          <p><strong>Daily Workflow:</strong> Updates survey templates for new cargo types &rarr; Adjusts conditional logic rules &rarr; Manages team structures &rarr; Reviews security audit logs.</p>
          <p><strong>Permissions:</strong> Full read/write/publish rights across all system modules, master template locking, audit log review.</p>
          <p><strong>Best Practices:</strong> Test new survey templates in Draft mode before publishing to live dispatch environments.</p>
          <p><strong>Related Modules:</strong> <Link to="/configuration/surveys">Survey Builder</Link>, <Link to="/configuration/inspection-templates">Inspection Templates</Link>, <Link to="/logs/audit-logs">Audit Logs</Link>.</p>
        </div>
      </Section>

      <Section id="validations" title="Validation &amp; Route Protection">
        <p className="mb-3">The application enforces security at both the client and API level:</p>
        <ul className="list-disc pl-5 space-y-2 text-[13.5px]">
          <li><strong>UI Element Shielding:</strong> Buttons, edit controls, and menus are hidden from users lacking required role permissions.</li>
          <li><strong>Client Route Guards:</strong> Direct URL navigation to restricted pages automatically redirects unauthorized users.</li>
          <li><strong>API Gateway Scopes:</strong> Server APIs validate session JWT tokens before executing database updates or deletes.</li>
        </ul>
      </Section>

      <Section id="important-notes" title="Important Security Rules">
        <Callout type="important">
          Role assignments and organization profiles are managed centrally on CargoClave Portal. Permission adjustments must be requested through your corporate IT administrator.
        </Callout>
      </Section>

      <Section id="best-practices" title="Best Practices">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Least Privilege:</strong> Assign users the minimum security scope required for their daily operational tasks.</li>
          <li><strong>Audit Trail:</strong> All administrative updates and inspection approvals are recorded permanently in <Link to="/logs/audit-logs">Audit Logs</Link>.</li>
        </ul>
      </Section>

      <Section id="troubleshooting" title="Troubleshooting &amp; FAQs">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200">Q: Why cannot I see the Survey Builder menu option?</h4>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-1">
              Survey Builder is restricted to System Administrators. Coordinators and Managers do not have permission to alter published survey templates.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200">Q: How do I request a role upgrade?</h4>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-1">
              Contact your company's CargoClave Portal Administrator to adjust your user security profile.
            </p>
          </div>
        </div>
      </Section>

      <Section id="tutorial-video" title="Tutorial Video">
        <DocMedia
          mediaId="roles-access-tutorial-video"
          caption="Roles & Access Controls Video Tutorial"
        />
      </Section>
    </DocPage>
  );
}
