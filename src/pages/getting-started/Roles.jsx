import React from "react";
import { Link } from "react-router-dom";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import { ShieldCheck, Settings2, Smartphone, SlidersHorizontal, ArrowRight, CheckCircle2 } from "lucide-react";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "access-architecture", label: "How user access works" },
  { id: "role-categories", label: "The three built-in roles" },
  { id: "administrator", label: "Role: Administrator" },
  { id: "operations-head", label: "Role: Operations Head" },
  { id: "surveyor", label: "Role: Surveyor" },
  { id: "dynamic-roles", label: "Creating custom roles" },
  { id: "permission-model", label: "Access levels & rights" },
  { id: "validations", label: "Security & protection" },
  { id: "important-notes", label: "Important security rules" },
  { id: "troubleshooting", label: "Common questions" },
];

const roleCards = [
  {
    icon: ShieldCheck,
    role: "Administrator",
    scope: "System Admin",
    desc: "Full system control. Manages user accounts, creates and assigns roles, configures company settings, and oversees all operations.",
    isBuiltIn: true,
    badgeClass: "bg-red-500/10 dark:bg-red-500/15 text-red-700 dark:text-red-400 border-red-500/20",
    iconClass: "bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400",
  },
  {
    icon: Settings2,
    role: "Operations Head",
    scope: "Operations",
    desc: "Day-to-day operations management role. Creates contracts, assigns surveyors, reviews submitted inspections, and manages reports.",
    isBuiltIn: true,
    badgeClass: "bg-cyan-500/10 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 border-cyan-500/20",
    iconClass: "bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400",
  },
  {
    icon: Smartphone,
    role: "Surveyor",
    scope: "Field Operations",
    desc: "Field inspection role. Completes assigned checklists on the mobile app, takes photos, and submits inspection reports from the field.",
    isBuiltIn: true,
    badgeClass: "bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
    iconClass: "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: SlidersHorizontal,
    role: "Custom Roles",
    scope: "Dynamic Roles",
    desc: "Your Administrator can create additional roles with specific access rights — for example, a Read-Only Auditor or a Field Supervisor with approval permissions.",
    isBuiltIn: false,
    badgeClass: "bg-amber-500/10 dark:bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/20",
    iconClass: "bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400",
  },
];

export default function Roles() {
  return (
    <DocPage
      path="/getting-started/roles"
      eyebrow="Getting Started"
      title="Roles & Access"
      description="Learn about the three built-in roles — Administrator, Operations Head, and Surveyor — and how custom roles can be created to match your company's team structure."
      toc={toc}
      noMedia={true}
    >
      <Section id="overview" title="Overview">
        <p>
          CargoClave uses a role-based access system to ensure every team member sees only the tools and data relevant to their job. Access rights are managed centrally from the CargoClave Portal.
        </p>
        <p className="mt-3">
          The system comes with <strong>three built-in roles</strong> — <em>Administrator</em>, <em>Operations Head</em>, and <em>Surveyor</em>. In addition, an Administrator can create <strong>custom roles</strong> with any combination of access rights to match your company's specific team structure.
        </p>
      </Section>

      <Section id="access-architecture" title="How user access works">
        <p className="mb-4">
          Here is how the access flow works from account setup to daily use:
        </p>

        <div className="my-6 p-6 rounded-xl border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.015] dark:bg-white/[0.015] space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-center font-mono text-[12px]">
            <div className="p-3 rounded-lg border border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-300 font-semibold">
              Administrator
            </div>
            <div className="p-3 rounded-lg border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#141414] text-ink-800 dark:text-slate-200">
              Sets Up Accounts & Roles
            </div>
            <div className="p-3 rounded-lg border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#141414] text-ink-800 dark:text-slate-200">
              Assigns Access Rights
            </div>
            <div className="p-3 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 font-semibold">
              Surveyor Management System
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-ink-500 dark:text-slate-400">
            <span>Portal Security</span>
            <ArrowRight size={14} />
            <span className="font-semibold text-cyan-600 dark:text-cyan-400">Unlocks Features & Actions for Each Role</span>
          </div>
        </div>

        <ol className="list-decimal pl-5 space-y-2 text-[14px]">
          <li><strong>Account creation:</strong> The Administrator creates a user account for each team member in the CargoClave Portal.</li>
          <li><strong>Role assignment:</strong> Each user is assigned one of the built-in roles (Administrator, Operations Head, or Surveyor) or a custom role.</li>
          <li><strong>Rights configuration:</strong> For custom roles, specific action rights are selected — for example, the ability to create contracts or approve inspections.</li>
          <li><strong>Active workspace:</strong> When the user logs in, CargoClave automatically shows only the pages, buttons, and tools their role permits.</li>
        </ol>
      </Section>

      <Section id="role-categories" title="The three built-in roles">
        <p className="mb-4">CargoClave includes three fixed system roles and an option to create additional custom roles:</p>

        <div className="grid gap-4 sm:grid-cols-2 my-6">
          {roleCards.map((r) => (
            <div
              key={r.role}
              className="rounded-xl border border-ink-900/10 dark:border-white/10 p-5 bg-white dark:bg-[#0A0A0A] shadow-sm hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${r.iconClass}`}>
                    <r.icon size={20} />
                  </span>
                  <span className={`px-2.5 py-1 rounded-md text-[10.5px] font-mono font-semibold border select-none ${r.badgeClass}`}>
                    {r.scope}
                  </span>
                </div>

                <h4 className="font-bold text-[14.5px] text-ink-900 dark:text-slate-100 leading-snug min-h-[2rem] flex items-center mb-2">
                  {r.role}
                </h4>

                <p className="text-xs leading-relaxed text-ink-650 dark:text-slate-400">
                  {r.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-ink-900/10 dark:border-white/10 flex items-center justify-between text-[11px]">
                <span className="text-ink-500 dark:text-slate-400 font-medium">Type</span>
                <span className={r.isBuiltIn ? "font-semibold text-cyan-600 dark:text-cyan-400" : "font-semibold text-amber-600 dark:text-amber-400"}>
                  {r.isBuiltIn ? "Built-in Role" : "Custom / Dynamic Role"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="administrator" title="Role: Administrator">
        <div className="p-5 rounded-xl border border-red-200 dark:border-red-900/30 bg-red-50/30 dark:bg-red-950/10 space-y-4">
          <div>
            <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-red-500/10 text-red-700 dark:text-red-400 border border-red-500/20 mb-2">
              Built-in System Role
            </span>
            <p className="text-sm">
              <strong>Purpose:</strong> Full system management — user accounts, role creation, permission assignment, and company-wide security oversight.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-ink-800 dark:text-slate-200 mb-2">
              Main responsibilities
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-ink-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-red-500 shrink-0" />
                <span>Create and manage all user accounts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-red-500 shrink-0" />
                <span>Create and assign roles to team members</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-red-500 shrink-0" />
                <span>Configure access rights for each role</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-red-500 shrink-0" />
                <span>Manage company and system settings</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-red-500 shrink-0" />
                <span>View audit logs and security records</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-red-500 shrink-0" />
                <span>Full access to all system features</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="operations-head" title="Role: Operations Head">
        <div className="p-5 rounded-xl border border-cyan-200 dark:border-cyan-900/30 bg-cyan-50/20 dark:bg-cyan-950/10 space-y-4">
          <div>
            <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20 mb-2">
              Built-in System Role
            </span>
            <p className="text-sm">
              <strong>Purpose:</strong> Day-to-day operations management — creating contracts, assigning field surveyors, reviewing inspections, and managing reports.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-ink-800 dark:text-slate-200 mb-2">
              Main responsibilities
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-ink-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan-500 shrink-0" />
                <span>Create and manage survey contracts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan-500 shrink-0" />
                <span>Assign field surveyors to jobs</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan-500 shrink-0" />
                <span>Review and approve submitted inspections</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan-500 shrink-0" />
                <span>Monitor the operations dashboard and SLA status</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan-500 shrink-0" />
                <span>Manage and export inspection reports</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan-500 shrink-0" />
                <span>Configure survey and report templates</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="surveyor" title="Role: Surveyor">
        <div className="p-5 rounded-xl border border-emerald-200 dark:border-emerald-900/30 bg-emerald-50/20 dark:bg-emerald-950/10 space-y-4">
          <div>
            <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 mb-2">
              Built-in System Role
            </span>
            <p className="text-sm">
              <strong>Purpose:</strong> Field inspection work — completing assigned survey checklists, capturing photos, and submitting inspection reports from site.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-ink-800 dark:text-slate-200 mb-2">
              Main responsibilities
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-ink-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                <span>Fill out assigned survey checklists on the mobile app</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                <span>Take inspection photos and upload evidence</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                <span>Record terminal check-ins on arrival</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                <span>Collect customer and officer signatures</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                <span>Work offline and sync data when connected</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                <span>Submit completed surveys for operations review</span>
              </li>
            </ul>
          </div>

          <div className="pt-2 text-xs text-ink-600 dark:text-slate-400">
            <strong>Related guides:</strong>{" "}
            <Link to="/mobile/overview" className="text-cyan-600 dark:text-cyan-400 underline">
              Mobile Surveyor App Guide
            </Link>
            ,{" "}
            <Link to="/mobile/executing-a-survey" className="text-cyan-600 dark:text-cyan-400 underline">
              How to perform a survey
            </Link>
          </div>
        </div>
      </Section>

      <Section id="dynamic-roles" title="Creating custom roles">
        <div className="p-5 rounded-xl border border-amber-200 dark:border-amber-900/30 bg-amber-50/20 dark:bg-amber-950/10 space-y-4">
          <div>
            <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-2">
              Dynamic Role Creation
            </span>
            <p className="text-sm">
              <strong>Purpose:</strong> In addition to the three built-in roles, the Administrator can create custom roles with any combination of permissions to match your company's specific needs.
            </p>
          </div>

          <p className="text-xs leading-6 text-ink-700 dark:text-slate-300">
            Custom roles are built on top of the same permission system. The Administrator selects which actions a custom role can perform, and any user assigned that role will see exactly those tools and no others.
          </p>
        </div>

        <Callout type="note">
          Custom roles are created and managed by the Administrator in the CargoClave Portal. Contact your Administrator if your team needs a new role or if you need additional access rights.
        </Callout>
      </Section>

      <Section id="permission-model" title="Access levels & rights">
        <p className="mb-4">
          CargoClave checks your role permissions every time you open a page or click an action button. Here is a summary of what each built-in role can do:
        </p>

        <div className="my-5 p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2 text-xs">
          <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-400 font-semibold font-mono">
            <span>Administrator</span> &rarr; <span>Operations Head</span> &rarr; <span>Surveyor</span> &rarr; <span>Custom Role</span>
          </div>
          <p className="text-ink-500 dark:text-slate-400 text-[11px]">Access rights decrease from full system access (Admin) to field-only access (Surveyor). Custom roles can be set anywhere in between.</p>
        </div>

        <table>
          <thead>
            <tr>
              <th>Functional Area</th>
              <th>Administrator</th>
              <th>Operations Head</th>
              <th>Surveyor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>User & Role Management</td>
              <td className="text-green-600 dark:text-green-400 font-bold">Full Access</td>
              <td className="text-red-500 dark:text-red-400">No Access</td>
              <td className="text-red-500 dark:text-red-400">No Access</td>
            </tr>
            <tr>
              <td>Contract Operations</td>
              <td className="text-green-600 dark:text-green-400 font-bold">Full Access</td>
              <td className="text-green-600 dark:text-green-400 font-bold">Full Access</td>
              <td className="text-red-500 dark:text-red-400">No Access</td>
            </tr>
            <tr>
              <td>Inspection Review</td>
              <td className="text-green-600 dark:text-green-400 font-bold">Full Access</td>
              <td className="text-green-600 dark:text-green-400 font-bold">Full Access</td>
              <td className="text-amber-600 dark:text-amber-400">Own Submissions Only</td>
            </tr>
            <tr>
              <td>Template Builder</td>
              <td className="text-green-600 dark:text-green-400 font-bold">Full Access</td>
              <td className="text-green-600 dark:text-green-400 font-bold">Full Access</td>
              <td className="text-red-500 dark:text-red-400">No Access</td>
            </tr>
            <tr>
              <td>Reports Management</td>
              <td className="text-green-600 dark:text-green-400 font-bold">Full Access</td>
              <td className="text-green-600 dark:text-green-400 font-bold">Full Access</td>
              <td className="text-red-500 dark:text-red-400">No Access</td>
            </tr>
            <tr>
              <td>Mobile Survey App</td>
              <td className="text-amber-600 dark:text-amber-400">View Only</td>
              <td className="text-amber-600 dark:text-amber-400">View Only</td>
              <td className="text-green-600 dark:text-green-400 font-bold">Full Access</td>
            </tr>
            <tr>
              <td>Audit Logs</td>
              <td className="text-green-600 dark:text-green-400 font-bold">Full Access</td>
              <td className="text-amber-600 dark:text-amber-400">Read Only</td>
              <td className="text-red-500 dark:text-red-400">No Access</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section id="validations" title="Security & protection">
        <p className="mb-3">Your access rights are enforced at three levels:</p>
        <ul className="list-disc pl-5 space-y-2 text-[13.5px]">
          <li>
            <strong>Button protection:</strong> Action buttons and forms only appear if your role has permission to use them. If a button is missing, your role does not have that right.
          </li>
          <li>
            <strong>Page navigation guards:</strong> If you try to open a page directly without the required permission, the system redirects you to the main dashboard.
          </li>
          <li>
            <strong>Server-side verification:</strong> The system verifies your session and role on every action before allowing any data changes.
          </li>
        </ul>
      </Section>

      <Section id="important-notes" title="Important security rules">
        <Callout type="important">
          User accounts, role definitions, and access permissions cannot be changed from within the SMS workspace. All role and permission changes must be made by your Administrator in the CargoClave Portal.
        </Callout>
      </Section>

      <Section id="troubleshooting" title="Common questions">
        <div className="space-y-4 my-4">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">
              What is the difference between Operations Head and Administrator?
            </p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              Administrators have full system control including user and role management. Operations Heads focus on day-to-day work — contracts, inspections, and reports — but cannot manage users or change system-wide settings.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">
              Why is a specific button or menu item missing from my screen?
            </p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              Your assigned role does not include permission for that feature. Contact your Administrator if you believe you need access to that function.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">
              Can I have a role that is somewhere between Operations Head and Surveyor?
            </p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              Yes. Your Administrator can create a custom role with exactly the access rights you need — for example, a Field Supervisor who can view but not approve inspections.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">
              How do I request access to additional features?
            </p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              Contact your company's Administrator. Once they update your role in the CargoClave Portal, refresh your browser to see the new features.
            </p>
          </div>
        </div>
      </Section>
    </DocPage>
  );
}
