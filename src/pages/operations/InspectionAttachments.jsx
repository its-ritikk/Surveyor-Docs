import React from "react";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "attachment-types", label: "Attachment Types" },
  { id: "viewing", label: "Viewing Attachments" },
];

export default function InspectionAttachments() {
  return (
    <DocPage
      path="/operations/inspection-review/attachments"
      eyebrow="Inspection Review"
      title="Attachments"
      description="Operational shipping documentation linked to inspection records — supported file types, attachment viewing, and document management."
      toc={toc}
      hideVideo={true}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Attachments</strong> section on the Inspection Detail Page houses all operational shipping documentation linked to the inspection record. These documents provide supporting context for the quality review audit and are available alongside the checklist data, GPS coordinates, and evidence media.
        </p>
        <p className="mt-3">
          Attachments are uploaded by field surveyors through the Mobile App, or by portal coordinators directly within the Inspection Detail Page. All uploaded files are stored securely and associated with the specific inspection record.
        </p>
      </Section>

      <Section id="attachment-types" title="Attachment Types">
        <p>
          The following document types are supported as inspection attachments:
        </p>

        <div className="my-4 overflow-x-auto">
          <table className="w-full text-left text-xs border border-ink-900/10 dark:border-[#262626]">
            <thead className="bg-ink-900/5 dark:bg-[#000000] font-semibold text-ink-900 dark:text-[#FFFFFF]">
              <tr>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626] w-1/3">Document Type</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/5 dark:divide-[#262626] text-ink-700 dark:text-[#E5E5E5]">
              <tr>
                <td className="p-2.5 font-mono font-medium">Bill of Lading Manifests</td>
                <td className="p-2.5">PDF manifests detailing container numbers, weight specifications, commodity descriptions, and seal lists.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Weighbridge Slips</td>
                <td className="p-2.5">Scanned weight tickets uploaded during bulk cargo tallying operations.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Customs Clearances</td>
                <td className="p-2.5">Import/export clearance permits, phytosanitary certificates, and customs release documents.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Supplementary Evidence</td>
                <td className="p-2.5">Any additional documents the surveyor attached during or after the field inspection — e.g., temperature logs, tally sheets, or packing lists.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="note">
          Supported file formats include PDF, JPEG, PNG, DOCX, and XLSX. Maximum file size per attachment is determined by the organisation's System Administration configuration.
        </Callout>
      </Section>

      <Section id="viewing" title="Viewing Attachments">
        <p>
          All attachments linked to an inspection are accessible from the <strong>Attachments</strong> section within the Inspection Detail Page:
        </p>

        <ul className="list-disc pl-5 space-y-2 my-4 text-[13.5px]">
          <li><strong>Inline Preview:</strong> PDF files open in an inline browser viewer without requiring a separate download.</li>
          <li><strong>Download:</strong> A download button saves the attachment file to the user's local device.</li>
          <li><strong>File Metadata:</strong> Each attachment displays the file name, file type, upload timestamp, and the name of the user who uploaded it.</li>
          <li><strong>Delete:</strong> Attachments can be deleted by users with the appropriate portal permission. Deleted attachments are removed from the inspection record permanently.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
