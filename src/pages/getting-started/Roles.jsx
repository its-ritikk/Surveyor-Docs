import React from "react";
import { Link } from "react-router-dom";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import { ShieldCheck, Smartphone, SlidersHorizontal, ArrowRight, CheckCircle2 } from "lucide-react";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "rbac-architecture", label: "Portal RBAC Architecture" },
  { id: "role-categories", label: "System Role Categories" },
  { id: "portal-administrator", label: "Role: Portal Administrator" },
  { id: "surveyor", label: "Role: Surveyor" },
  { id: "custom-roles", label: "Custom Portal Roles" },
  { id: "permission-model", label: "Permission & Access Model" },
  { id: "validations", label: "Validation & Route Protection" },
  { id: "important-notes", label: "Important Security Rules" },
  { id: "best-practices", label: "Best Practices" },
  { id: "troubleshooting", label: "Troubleshooting & FAQs" },
];

const roleCards = [
  {
    icon: ShieldCheck,
    role: "Portal Administrator",
    scope: "Built-in System Role",
    desc: "Master administrative authority. Creates user accounts, defines custom roles, provisions security scopes, and configures organization-wide permissions in CargoClave Portal.",
    isBuiltIn: true,
  },
  {
    icon: Smartphone,
    role: "Surveyor",
    scope: "Built-in System Role",
    desc: "Field mobile inspection role. Executes assigned checklists, performs GPS check-ins, captures evidence photos, records seal numbers, and submits survey reports on-site.",
    isBuiltIn: true,
  },
  {
    icon: SlidersHorizontal,
    role: "Custom Portal Roles",
    scope: "Configurable / Dynamic Roles",
    desc: "Operational roles defined dynamically by the Portal Administrator (e.g., Coordinator, Manager, Reviewer, QC Lead). Features and routes are enabled based on assigned permissions.",
    isBuiltIn: false,
  },
];

export default function Roles() {
  return (
    <DocPage
      path="/getting-started/roles"
      eyebrow="Getting Started"
      title="Roles & Access"
      description="Understanding the Portal-based RBAC model, built-in system roles, custom role provisioning, and permission-based feature access."
      toc={toc}
      noMedia={true}
    >
      <Section id="overview" title="Overview">
        <p>
          Access within the CargoClave Surveyor Management System is driven by a <strong>Portal-based Role-Based Access Control (RBAC)</strong> model. Security profiles and permission scopes are managed centrally inside the CargoClave Portal rather than through hardcoded application roles.
        </p>
        <p>
          The Surveyor Management System features only <strong>two built-in system roles</strong> (<em>Portal Administrator</em> and <em>Surveyor</em>). All other operational roles (such as Coordinators, Reviewers, or Managers) are created dynamically by the Portal Administrator and assigned granular permissions consumed by the application.
        </p>
      </Section>

      <Section id="rbac-architecture" title="Portal RBAC Architecture">
        <p className="mb-4">
          The diagram below outlines how user accounts, custom roles, and permission scopes flow from the Portal into the Surveyor Management System:
        </p>

        <div className="my-6 p-6 rounded-xl border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.015] dark:bg-white/[0.015] space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-center font-mono text-[12px]">
            <div className="p-3 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 font-semibold">
              Portal Administrator
            </div>
            <div className="p-3 rounded-lg border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#141414] text-ink-800 dark:text-slate-200">
              Creates Users &amp; Roles
            </div>
            <div className="p-3 rounded-lg border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#141414] text-ink-800 dark:text-slate-200">
              Assigns Permissions
            </div>
            <div className="p-3 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 font-semibold">
              Surveyor Management System
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-ink-500 dark:text-slate-400">
            <span>Portal Security Engine</span>
            <ArrowRight size={14} />
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">Permission-Based Feature Access</span>
          </div>
        </div>

        <ol className="list-decimal pl-5 space-y-2 text-[14px]">
          <li><strong>Portal Administrator:</strong> Provisions user accounts and establishes corporate access boundaries.</li>
          <li><strong>Creates Custom Roles:</strong> Constructs operational roles tailored to corporate workflows (e.g., QC Lead, Operations Manager).</li>
          <li><strong>Assigns Permissions:</strong> Selects granular capability tags (e.g., <code>contract:create</code>, <code>report:publish</code>).</li>
          <li><strong>Assigns Roles to Users:</strong> Maps provisioned roles to individual team members.</li>
          <li><strong>Consumes Permissions:</strong> The Surveyor Management System reads the user&apos;s active permission array to unlock UI modules, buttons, and API routes.</li>
        </ol>
      </Section>

      <Section id="role-categories" title="System Role Categories">
        <p className="mb-4">The platform categorizes security profiles into three primary structures:</p>

        <div className="grid gap-4 sm:grid-cols-3 my-6">
          {roleCards.map((r) => (
            <div
              key={r.role}
              className="rounded-xl border border-ink-900/10 dark:border-white/10 p-5 bg-white dark:bg-[#0A0A0A] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <r.icon size={18} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-100">{r.role}</h4>
                    <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-400 font-semibold">
                      {r.scope}
                    </span>
                  </div>
                </div>
                <p className="text-xs leading-5 text-ink-650 dark:text-slate-400">{r.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-ink-900/5 dark:border-white/5 flex items-center justify-between text-[11px]">
                <span className="text-ink-500 dark:text-slate-400">Type</span>
                <span className={r.isBuiltIn ? "font-semibold text-cyan-600 dark:text-cyan-400" : "font-semibold text-amber-600 dark:text-amber-400"}>
                  {r.isBuiltIn ? "Built-in Role" : "Portal Configured"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="portal-administrator" title="Role: Portal Administrator">
        <div className="p-5 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-4">
          <div>
            <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20 mb-2">
              Built-in System Role
            </span>
            <p className="text-sm">
              <strong>Purpose:</strong> Complete platform administration, user lifecycle management, role definition, and security policy enforcement.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-800 dark:text-slate-200 mb-2">
              Key Responsibilities
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-ink-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan-500 shrink-0" />
                <span>Create and provision user accounts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan-500 shrink-0" />
                <span>Create dynamic custom roles</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan-500 shrink-0" />
                <span>Assign granular permission scopes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan-500 shrink-0" />
                <span>Configure organization security policies</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan-500 shrink-0" />
                <span>Manage system-wide access controls</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan-500 shrink-0" />
                <span>Audit security logs and user sessions</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="surveyor" title="Role: Surveyor">
        <div className="p-5 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-4">
          <div>
            <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20 mb-2">
              Built-in System Role
            </span>
            <p className="text-sm">
              <strong>Purpose:</strong> Mobile field inspection execution, on-site data gathering, and physical evidence collection.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-800 dark:text-slate-200 mb-2">
              Key Responsibilities
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-ink-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan-500 shrink-0" />
                <span>Execute assigned survey checklists</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan-500 shrink-0" />
                <span>Capture geotagged evidence photos</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan-500 shrink-0" />
                <span>Perform GPS berth check-ins</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan-500 shrink-0" />
                <span>Collect recipient &amp; officer signatures</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan-500 shrink-0" />
                <span>Synchronize offline survey drafts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan-500 shrink-0" />
                <span>Submit completed inspections for review</span>
              </li>
            </ul>
          </div>

          <div className="pt-2 text-xs text-ink-600 dark:text-slate-400">
            <strong>Related Modules:</strong>{" "}
            <Link to="/mobile/overview" className="text-cyan-600 dark:text-cyan-400 underline">
              Mobile Surveyor App
            </Link>
            ,{" "}
            <Link to="/mobile/executing-a-survey" className="text-cyan-600 dark:text-cyan-400 underline">
              Executing a Survey
            </Link>
          </div>
        </div>
      </Section>

      <Section id="custom-roles" title="Custom Portal Roles">
        <div className="p-5 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-4">
          <div>
            <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-2">
              Configured in CargoClave Portal
            </span>
            <p className="text-sm">
              <strong>Purpose:</strong> Operational roles defined dynamically by the Portal Administrator to match an organization&apos;s exact hierarchy and operational duties.
            </p>
          </div>

          <p className="text-xs leading-6 text-ink-700 dark:text-slate-300">
            The Surveyor Management System <strong>does not hardcode or define operational roles internally</strong>. Roles such as <em>Coordinator</em>, <em>Manager</em>, or <em>Reviewer</em> are not fixed application roles — they are examples of Portal-created custom roles. Each organization configures its own roles and permission sets within the Portal.
          </p>

          <div className="border-t border-ink-900/5 dark:border-white/5 pt-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-800 dark:text-slate-200 mb-2">
              Examples of Custom Portal Roles
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.01]">
                <strong className="text-ink-900 dark:text-slate-100 block mb-1">Operational Coordinator (Example)</strong>
                <span className="text-ink-650 dark:text-slate-400">
                  Assigned permissions for contract creation, surveyor dispatching, and monitoring SLA timelines.
                </span>
              </div>
              <div className="p-3 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.01]">
                <strong className="text-ink-900 dark:text-slate-100 block mb-1">Inspection Reviewer / QC Lead (Example)</strong>
                <span className="text-ink-650 dark:text-slate-400">
                  Assigned permissions for auditing submitted checklists, verifying GPS distances, and approving final PDFs.
                </span>
              </div>
              <div className="p-3 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.01]">
                <strong className="text-ink-900 dark:text-slate-100 block mb-1">Operations Executive (Example)</strong>
                <span className="text-ink-650 dark:text-slate-400">
                  Assigned high-level read access across terminal dashboards, analytics, and contract reports.
                </span>
              </div>
              <div className="p-3 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.01]">
                <strong className="text-ink-900 dark:text-slate-100 block mb-1">Client Manager (Example)</strong>
                <span className="text-ink-650 dark:text-slate-400">
                  Assigned scoped read permissions to view completed reports and dispatch statuses for specific client contracts.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="permission-model" title="Permission &amp; Access Model">
        <p className="mb-4">
          The application evaluates feature access dynamically by validating active user permission tokens retrieved from the Portal session.
        </p>

        <div className="my-5 p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2 text-xs">
          <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400 font-semibold font-mono">
            <span>Portal Admin</span> &rarr; <span>Creates Role</span> &rarr; <span>Assigns Permissions</span> &rarr; <span>Retrieved by Surveyor App</span> &rarr; <span>Enables UI &amp; Routes</span>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Permission Scope</th>
              <th>Sample Permission Key</th>
              <th>Unlocked Capabilities</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Contract Operations</td>
              <td><code>contract:create</code>, <code>contract:assign</code></td>
              <td>Create shipping contracts, select templates, assign field surveyors.</td>
            </tr>
            <tr>
              <td>Inspection Review</td>
              <td><code>review:audit</code>, <code>review:approve</code></td>
              <td>Access review queue, audit photo evidence, approve or reject submissions.</td>
            </tr>
            <tr>
              <td>Template Builder</td>
              <td><code>template:design</code>, <code>template:publish</code></td>
              <td>Access Survey Builder and Report Builder, publish new template versions.</td>
            </tr>
            <tr>
              <td>Reports Management</td>
              <td><code>report:export</code>, <code>report:archive</code></td>
              <td>Export finalized PDF inspection reports, archive historic documentation.</td>
            </tr>
            <tr>
              <td>System Audit</td>
              <td><code>audit:view</code></td>
              <td>Inspect immutable activity logs and database transaction logs.</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section id="validations" title="Validation &amp; Route Protection">
        <p className="mb-3">Security and route protection are enforced at three distinct layers:</p>
        <ul className="list-disc pl-5 space-y-2 text-[13.5px]">
          <li>
            <strong>UI Component Shielding:</strong> Action buttons, edit forms, and navigation menus check active permission scopes before rendering.
          </li>
          <li>
            <strong>Client Route Guards:</strong> Navigating directly to a URL route (e.g., <code>/configuration/surveys</code>) verifies permission tokens and redirects unauthorized users to the dashboard.
          </li>
          <li>
            <strong>API Gateway Authentication:</strong> Backend API endpoints validate signed JWT session tokens before granting data access or executing mutations.
          </li>
        </ul>
      </Section>

      <Section id="important-notes" title="Important Security Rules">
        <Callout type="important">
          The Surveyor Management System does not allow local role creation or direct permission overrides. All user accounts, role definitions, and permission scopes must be managed inside the CargoClave Portal by your organization&apos;s Portal Administrator.
        </Callout>
      </Section>

      <Section id="best-practices" title="Best Practices">
        <ul className="list-disc pl-5 space-y-2 text-[13.5px]">
          <li>
            <strong>Principle of Least Privilege:</strong> Configure custom roles with only the specific permission keys required for a user&apos;s daily operational duties.
          </li>
          <li>
            <strong>Regular Access Audits:</strong> Portal Administrators should review user role assignments periodically to revoke permissions for transferred or departed personnel.
          </li>
          <li>
            <strong>Audit Log Tracking:</strong> All administrative modifications, permission changes, and inspection sign-offs are logged permanently in{" "}
            <Link to="/logs/audit-logs" className="text-cyan-600 dark:text-cyan-400 underline">
              Audit Logs
            </Link>
            .
          </li>
        </ul>
      </Section>

      <Section id="troubleshooting" title="Troubleshooting &amp; FAQs">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200">
              Q: Why is a specific navigation menu item or action button hidden?
            </h4>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-1">
              UI elements are rendered based on your active permission tokens. If a menu or button is missing, your assigned Portal role does not include the required permission key.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200">
              Q: Are roles like &quot;Coordinator&quot; or &quot;Reviewer&quot; built into the application?
            </h4>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-1">
              No. Built-in system roles are strictly limited to <em>Portal Administrator</em> and <em>Surveyor</em>. Roles like Coordinator or Reviewer are examples of custom roles configured by your Portal Administrator.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200">
              Q: How do I request additional permissions or a role update?
            </h4>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-1">
              Contact your organization&apos;s Portal Administrator. Permission adjustments are made in the CargoClave Portal and take effect upon your next session refresh.
            </p>
          </div>
        </div>
      </Section>
    </DocPage>
  );
}
