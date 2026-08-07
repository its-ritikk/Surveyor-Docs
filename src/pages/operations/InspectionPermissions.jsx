import React from "react";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";

const toc = [
  { id: "access-model", label: "Access model" },
  { id: "administrator", label: "Administrator" },
  { id: "operations-head", label: "Operations Head" },
  { id: "surveyor", label: "Surveyor" },
  { id: "custom-roles", label: "Custom roles" },
  { id: "permission-matrix", label: "Permission matrix" },
];

export default function InspectionPermissions() {
  return (
    <DocPage
      path="/operations/inspection-review/permissions"
      eyebrow="Inspection Review"
      title="Permissions"
      description="Access levels for the Inspection Review module — Administrator, Operations Head, Surveyor, and Custom Role access definitions."
      toc={toc}
      hideVideo={true}
    >
      <Section id="access-model" title="Access model">
        <p>
          Access to Inspection Review actions is controlled by the role assigned to each user. The system has three built-in roles — <strong>Administrator</strong>, <strong>Operations Head</strong>, and <strong>Surveyor</strong> — each with different levels of access. An Administrator can also create custom roles with any combination of permissions.
        </p>
        <p className="mt-3">
          Custom roles are created and configured by Administrators. Each custom role can be given or restricted from specific actions independently.
        </p>
      </Section>

      <Section id="administrator" title="Administrator">
        <p>
          The <strong>Administrator</strong> is a built-in role with full access to all Inspection Review functions.
        </p>
        <ul className="list-disc pl-5 space-y-2 my-4 text-[13.5px]">
          <li>View all inspection records across all contracts and surveyors.</li>
          <li>Open any inspection detail page.</li>
          <li>Approve, reject, or delete any inspection.</li>
          <li>Perform batch approve, batch reject, and batch delete operations.</li>
          <li>Add internal inspection notes.</li>
          <li>Navigate to linked contracts from the inspection list.</li>
          <li>Download and print inspection reports.</li>
        </ul>
      </Section>

      <Section id="operations-head" title="Operations Head">
        <p>
          The <strong>Operations Head</strong> is a built-in role for day-to-day review work. Operations Heads can manage the full inspection review workflow.
        </p>
        <ul className="list-disc pl-5 space-y-2 my-4 text-[13.5px]">
          <li>View all inspection records across all active contracts.</li>
          <li>Open inspection detail pages.</li>
          <li>Approve, conditionally approve, or request edits for inspections.</li>
          <li>Add internal inspection notes.</li>
          <li>Navigate to linked contracts from the inspection list.</li>
          <li>Download and print inspection reports.</li>
          <li>Cannot delete inspections or perform batch delete (Administrator only).</li>
        </ul>
      </Section>

      <Section id="surveyor" title="Surveyor">
        <p>
          The <strong>Surveyor</strong> is a built-in role for field surveyors operating the Mobile App. In the portal, surveyors have restricted, read-only access limited to their own submissions.
        </p>
        <ul className="list-disc pl-5 space-y-2 my-4 text-[13.5px]">
          <li>View their own submitted inspections only.</li>
          <li>Open the detail page for their own inspections.</li>
          <li>Cannot approve, reject, or delete any inspection.</li>
          <li>Cannot add internal inspection notes.</li>
          <li>Cannot navigate to contract management pages.</li>
          <li>Cannot perform any batch operations.</li>
        </ul>
      </Section>

      <Section id="custom-roles" title="Custom roles">
        <p>
          In addition to the three built-in roles, an Administrator can create custom roles with any combination of access rights. Custom roles are useful when you need a team member to have more access than a Surveyor but less than an Operations Head.
        </p>

        <div className="my-4 grid gap-3 sm:grid-cols-2">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Field Supervisor (Example)</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              Can view all inspections and open detail pages, but cannot approve or reject. Used to monitor surveyor progress without approval authority.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Read-Only Auditor (Example)</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              Can view and open inspection records but cannot approve, reject, add notes, or perform any changes.
            </p>
          </div>
        </div>

        <Callout type="note">
          The exact permissions for any custom role are set by the Administrator. Contact your Administrator to request a new custom role or to adjust your current access rights.
        </Callout>
      </Section>

      <Section id="permission-matrix" title="Permission Matrix">
        <div className="my-4 overflow-x-auto">
          <table className="w-full text-left text-xs border border-ink-900/10 dark:border-[#262626]">
            <thead className="bg-ink-900/5 dark:bg-[#000000] font-semibold text-ink-900 dark:text-[#FFFFFF]">
              <tr>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Action</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Administrator</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Operations Head</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Surveyor</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Custom Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/5 dark:divide-[#262626] text-ink-700 dark:text-[#E5E5E5]">
              <tr>
                <td className="p-2.5 font-medium">View Inspection List</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">All Records</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">All Records</td>
                <td className="p-2.5 text-ink-400">Own Submissions Only</td>
                <td className="p-2.5 text-amber-600 dark:text-amber-400">If granted</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Open Inspection Detail</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">Own Submissions Only</td>
                <td className="p-2.5 text-amber-600 dark:text-amber-400">If granted</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Navigate to Contract</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-amber-600 dark:text-amber-400">If granted</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Approve / Cond. Approve Survey</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-amber-600 dark:text-amber-400">If granted</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Reject Survey</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-amber-600 dark:text-amber-400">If granted</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Add Internal Inspection Notes</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-amber-600 dark:text-amber-400">If granted</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Batch Approve / Cond. Approve / Reject</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-amber-600 dark:text-amber-400">If granted</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Batch Delete</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-ink-400">No Access by default</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </DocPage>
  );
}
