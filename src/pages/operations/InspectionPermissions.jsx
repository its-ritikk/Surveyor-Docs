import React from "react";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";

const toc = [
  { id: "rbac-model", label: "RBAC Model" },
  { id: "portal-administrator", label: "Portal Administrator" },
  { id: "surveyor", label: "Surveyor" },
  { id: "custom-roles", label: "Custom Portal Roles" },
  { id: "permission-matrix", label: "Permission Matrix" },
];

export default function InspectionPermissions() {
  return (
    <DocPage
      path="/operations/inspection-review/permissions"
      eyebrow="Inspection Review"
      title="Permissions"
      description="Role-Based Access Control for the Inspection Review module — Portal Administrator, Surveyor, and custom portal role access definitions."
      toc={toc}
      hideVideo={true}
    >
      <Section id="rbac-model" title="RBAC Model">
        <p>
          Access to Inspection Review actions is governed by a <strong>Role-Based Access Control (RBAC)</strong> model. The system defines two built-in roles with fixed permissions, and supports an unlimited number of custom portal roles with configurable access levels.
        </p>
        <p className="mt-3">
          Custom portal roles are created and configured by Portal Administrators in the <strong>System Administration → Roles & Access</strong> section. Each custom role can be granted or denied specific permissions independently.
        </p>
      </Section>

      <Section id="portal-administrator" title="Portal Administrator">
        <p>
          The <strong>Portal Administrator</strong> is a built-in role with unrestricted access to all Inspection Review functions. This role cannot be modified.
        </p>
        <ul className="list-disc pl-5 space-y-2 my-4 text-[13.5px]">
          <li>View all inspection records regardless of contract or surveyor assignment.</li>
          <li>Open any inspection detail page.</li>
          <li>Approve, reject, or delete any inspection.</li>
          <li>Perform batch approve, batch reject, and batch delete operations.</li>
          <li>Add internal reviewer notes to any inspection.</li>
          <li>Override GPS distance warnings with justification.</li>
          <li>Navigate to linked contracts from the inspection list.</li>
          <li>Print and download inspection reports.</li>
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
          <li>Cannot add internal reviewer notes.</li>
          <li>Cannot navigate to contract management pages.</li>
          <li>Cannot perform any batch operations.</li>
        </ul>
      </Section>

      <Section id="custom-roles" title="Custom Portal Roles">
        <p>
          Custom portal roles are created by Portal Administrators to represent operational teams such as Coordinators, Quality Reviewers, or Operations Managers. Each custom role is configured with specific permission grants.
        </p>

        <div className="my-4 grid gap-3 sm:grid-cols-2">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Coordinator (Example)</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              Typical configuration: view all inspections, open detail pages, approve and reject surveys, add reviewer notes, navigate to contract management, but no batch delete access.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Reviewer (Example)</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              Typical configuration: view all inspections, open detail pages, approve and reject surveys, add reviewer notes. No access to batch delete or GPS override.
            </p>
          </div>
        </div>

        <Callout type="note">
          The specific permission grants for any custom role are determined by the Portal Administrator configuration. The example role descriptions above are illustrative only and may differ from your organisation's actual configuration.
        </Callout>
      </Section>

      <Section id="permission-matrix" title="Permission Matrix">
        <div className="my-4 overflow-x-auto">
          <table className="w-full text-left text-xs border border-ink-900/10 dark:border-[#262626]">
            <thead className="bg-ink-900/5 dark:bg-[#000000] font-semibold text-ink-900 dark:text-[#FFFFFF]">
              <tr>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Action</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Portal Administrator</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Surveyor</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Custom Portal Roles</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/5 dark:divide-[#262626] text-ink-700 dark:text-[#E5E5E5]">
              <tr>
                <td className="p-2.5 font-medium">View Inspection List</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">Own Submissions Only</td>
                <td className="p-2.5">Configured in Portal</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Open Inspection Detail</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">Own Submissions Only</td>
                <td className="p-2.5">Configured in Portal</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Navigate to Contract</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5">Configured in Portal</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Approve / Cond. Approve Survey</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5">Configured in Portal</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Reject Survey</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5">Configured in Portal</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Add Internal Reviewer Notes</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5">Configured in Portal</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Batch Approve / Cond. Approve / Reject</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5">Configured in Portal</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Batch Delete</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5">No Access by default</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Override GPS Distance Warning</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5">No Access by default</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </DocPage>
  );
}
