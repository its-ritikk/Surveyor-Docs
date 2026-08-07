import React from "react";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";

const toc = [
  { id: "not-visible", label: "Inspection Not Visible in the Review List" },
  { id: "gps-missing", label: "GPS Missing" },
  { id: "evidence-not-loading", label: "Evidence Not Loading" },
  { id: "media-preview-failed", label: "Unable to Preview Media" },
  { id: "report-not-generated", label: "Report Not Generated" },
  { id: "permission-denied", label: "Access Restricted" },
];

export default function InspectionTroubleshooting() {
  return (
    <DocPage
      path="/operations/inspection-review/troubleshooting"
      eyebrow="Inspection Review"
      title="Troubleshooting"
      description="Common inspection review questions and solutions — visibility issues, GPS validation, media previews, report availability, and access rights."
      toc={toc}
      hideVideo={true}
    >
      <Section id="not-visible" title="Inspection Not Visible in the Review List">
        <div className="space-y-4 my-4">
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">
              Inspection is not appearing in the list after submission
            </h4>
            <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[13.5px] text-ink-700 dark:text-[#A3A3A3]">
              <li>Verify that active filters are not excluding the record. Click <strong>Reset</strong> to clear filters and view the full list.</li>
              <li>Check the status filter selection — the inspection may be under a different status card than currently filtered.</li>
              <li>Confirm the surveyor had network connectivity and that the survey was submitted rather than saved as a draft.</li>
              <li>Refresh the page after a short delay if the inspection was recently submitted.</li>
              <li>If the record is still missing, contact your Portal Administrator to confirm your account role and assigned access scope.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">
              The "Approve" button is disabled
            </h4>
            <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[13.5px] text-ink-700 dark:text-[#A3A3A3]">
              <li>Review the inspection details to ensure all mandatory checklist responses have been completed.</li>
              <li>Check if required evidence or attachments are missing from the submission.</li>
              <li>Confirm your account role has permission to approve inspections.</li>
              <li>Review the inspection details thoroughly and follow your organization's review and approval process before making a decision.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="gps-missing" title="GPS Missing">
        <div className="space-y-4 my-4">
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">
              GPS coordinates are missing or not recorded
            </h4>
            <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[13.5px] text-ink-700 dark:text-[#A3A3A3]">
              <li>The surveyor's mobile device may have had location services turned off or experienced poor GPS signal during check-in.</li>
              <li>Location permissions may not have been granted to the mobile app on the surveyor's device.</li>
              <li>If GPS information is unavailable, verify the inspection details and follow your organization's review process before making a decision.</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">
              GPS distance warning is displayed
            </h4>
            <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[13.5px] text-ink-700 dark:text-[#A3A3A3]">
              <li>Review the recorded check-in location on the GPS map.</li>
              <li>Compare the recorded coordinates with the expected inspection terminal or berth location.</li>
              <li>Contact the surveyor if further clarification regarding the location is required.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="evidence-not-loading" title="Evidence Not Loading">
        <div className="space-y-4 my-4">
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">
              Photos or documents are not appearing in the Evidence panel
            </h4>
            <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[13.5px] text-ink-700 dark:text-[#A3A3A3]">
              <li>Check your network connection to ensure media files can download properly.</li>
              <li>Refresh the page to reload the evidence gallery.</li>
              <li>If uploaded media is not immediately available, refresh the page after a short wait.</li>
              <li>Confirm whether evidence was required for the specific inspection steps in the template.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="media-preview-failed" title="Unable to Preview Media">
        <div className="space-y-4 my-4">
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">
              Photo or video media preview does not open or load
            </h4>
            <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[13.5px] text-ink-700 dark:text-[#A3A3A3]">
              <li>Check your internet connection and refresh the browser view.</li>
              <li>If media cannot be previewed, try downloading the file or opening it in another supported browser.</li>
              <li>Verify that browser privacy settings or extensions are not blocking media downloads.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="report-not-generated" title="Report Not Generated">
        <div className="space-y-4 my-4">
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">
              Report document is not available after inspection approval
            </h4>
            <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[13.5px] text-ink-700 dark:text-[#A3A3A3]">
              <li>Verify that the inspection template linked to this survey has an active report configuration assigned.</li>
              <li>If the report is not available after a reasonable time, contact the Portal Administrator to verify report generation.</li>
            </ul>
          </div>
        </div>

        <Callout type="note">
          If you need a printable summary immediately, use the Print Report option from the inspection action menu.
        </Callout>
      </Section>

      <Section id="permission-denied" title="Access Restricted">
        <div className="space-y-4 my-4">
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">
              Action buttons or features are unavailable
            </h4>
            <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[13.5px] text-ink-700 dark:text-[#A3A3A3]">
              <li>Your assigned account role may not have permissions for specific review actions.</li>
              <li>Surveyor roles have view access restricted to their own submitted surveys by default.</li>
              <li>Custom Portal Roles have specific permissions configured by your organization's Administrator.</li>
              <li>Contact the Portal Administrator to review or update your assigned role and permissions.</li>
            </ul>
          </div>
        </div>
      </Section>
    </DocPage>
  );
}
