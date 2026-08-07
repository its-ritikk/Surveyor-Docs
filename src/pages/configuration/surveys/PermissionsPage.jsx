import React from "react";
import DocPage, { Section } from "../../../components/DocPage";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "permissions-matrix", label: "User Role Permissions Matrix" },
];

export default function PermissionsPage() {
  return (
    <DocPage
      path="/configuration/surveys/permissions"
      eyebrow="Survey Builder"
      title="Permissions"
      description="Security rules governing survey creation, editing, publishing, and mobile data entry."
      toc={toc}
      noMedia={true}
    >
      <Section id="overview" title="Overview">
        <p>
          Survey Builder features are scoped by role permissions to ensure only authorized administrators can modify published survey blueprints.
        </p>
      </Section>

      <Section id="permissions-matrix" title="User Role Permissions Matrix">
        <div className="my-4 overflow-x-auto">
          <table className="w-full text-left text-xs border border-ink-900/10 dark:border-[#262626]">
            <thead className="bg-ink-900/5 dark:bg-[#000000] font-semibold text-ink-900 dark:text-[#FFFFFF]">
              <tr>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Action</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Administrator</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Coordinator</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Surveyor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/5 dark:divide-[#262626] text-ink-700 dark:text-[#E5E5E5]">
              <tr>
                <td className="p-2.5 font-medium">Create / Edit Draft Survey</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">Read Only</td>
                <td className="p-2.5 text-ink-400">No Access</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Publish Survey Version</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-ink-400">No Access</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Preview Simulator</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Mobile Data Entry</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </DocPage>
  );
}
