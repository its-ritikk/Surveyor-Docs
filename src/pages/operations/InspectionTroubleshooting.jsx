import React from "react";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";

const toc = [
  { id: "not-visible", label: "Inspection Not Visible" },
  { id: "gps-missing", label: "GPS Missing" },
  { id: "evidence-not-loading", label: "Evidence Not Loading" },
  { id: "media-preview-failed", label: "Media Preview Failed" },
  { id: "report-not-generated", label: "Report Not Generated" },
  { id: "permission-denied", label: "Permission Denied" },
];

export default function InspectionTroubleshooting() {
  return (
    <DocPage
      path="/operations/inspection-review/troubleshooting"
      eyebrow="Inspection Review"
      title="Troubleshooting"
      description="Common Inspection Review issues and their solutions — visibility problems, GPS errors, evidence loading failures, media preview issues, report generation failures, and permission errors."
      toc={toc}
      hideVideo={true}
    >
      <Section id="not-visible" title="Inspection Not Visible">
        <div className="space-y-4 my-4">
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Inspection is not appearing in the list after the surveyor submitted it</h4>
            <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[13.5px] text-ink-700 dark:text-[#A3A3A3]">
              <li>Verify that no active filters are excluding the record. Click <strong>Reset</strong> to clear all filters and reload the full inspection list.</li>
              <li>Check the <strong>Status Summary</strong> cards — the inspection may be in a status that your current filter excludes (e.g., filtering by "Pending" when the record is "Submitted").</li>
              <li>Confirm the surveyor's mobile app has network connectivity and that the submission was completed — not just saved as a draft.</li>
              <li>Check if your user role restricts visibility to specific contracts or surveyors. Contact the Portal Administrator to verify your role's access configuration.</li>
              <li>If the inspection was recently submitted, wait 30 seconds and refresh the page — the initial API processing can take a short delay.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">The "Approve" button is disabled</h4>
            <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[13.5px] text-ink-700 dark:text-[#A3A3A3]">
              <li>The inspection may contain mandatory checklist fields that were left unanswered. Review all steps in the Inspection Data panel for incomplete responses.</li>
              <li>A GPS distance warning may be blocking approval. Navigate to the GPS tab and enter an override justification note if the variance is acceptable.</li>
              <li>A Missing Evidence indicator may be blocking approval. Check the Evidence Counter and either request a re-submission or apply an override justification.</li>
              <li>Your user role may not have the Approve permission. Contact the Portal Administrator.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="gps-missing" title="GPS Missing">
        <div className="space-y-4 my-4">
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">The GPS tab shows no coordinates or the "GPS Recorded" badge is absent</h4>
            <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[13.5px] text-ink-700 dark:text-[#A3A3A3]">
              <li>The surveyor's mobile device may have had GPS disabled or poor satellite reception at the time of check-in. The device needs GPS/Location Services enabled to record coordinates.</li>
              <li>The mobile app may not have received location permission on the surveyor's device. The surveyor should enable location permissions in device settings and re-submit.</li>
              <li>If GPS data is missing for a legitimate inspection, the reviewer may proceed with approval using an Internal Reviewer Note documenting the GPS absence and the reason it was accepted.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">GPS distance warning is triggering for a valid inspection</h4>
            <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[13.5px] text-ink-700 dark:text-[#A3A3A3]">
              <li>The surveyor may have been at a terminal office, vehicle gate, or nearby berth due to operational restrictions at the actual survey location.</li>
              <li>Review the satellite map in the GPS tab and cross-reference the actual coordinates against a port terminal map.</li>
              <li>If the location is acceptable, enter an override justification note and proceed with approval.</li>
              <li>If the coordinates are significantly outside the expected terminal area, contact the surveyor via Mobile Revision Feedback before making a decision.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="evidence-not-loading" title="Evidence Not Loading">
        <div className="space-y-4 my-4">
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">The Evidence tab is empty or photos are not loading</h4>
            <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[13.5px] text-ink-700 dark:text-[#A3A3A3]">
              <li>Hard-refresh the page (<kbd>Ctrl+Shift+R</kbd> or <kbd>Cmd+Shift+R</kbd>) to force a cache reload of the evidence assets.</li>
              <li>Check your network connection — large photo files require sufficient bandwidth to load the thumbnail grid.</li>
              <li>If the Evidence Counter shows a photo count but thumbnails are blank, the files may still be processing in cloud storage. Wait 2–3 minutes and reload.</li>
              <li>If the surveyor submitted without uploading any photos, the Evidence tab will legitimately be empty. Check if evidence was required by the template's checklist steps.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="media-preview-failed" title="Media Preview Failed">
        <div className="space-y-4 my-4">
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Clicking a photo thumbnail opens a broken or blank lightbox</h4>
            <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[13.5px] text-ink-700 dark:text-[#A3A3A3]">
              <li>The original photo file may have been corrupted during upload. Try downloading the file directly using the download button instead of the lightbox preview.</li>
              <li>If the lightbox appears but shows a loading spinner indefinitely, the file may be too large for inline preview. Use the download option and open in a local image viewer.</li>
              <li>Disable browser extensions (especially ad blockers or privacy tools) that may be blocking the secure CDN URL used to serve media files.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Video playback fails in the media preview</h4>
            <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[13.5px] text-ink-700 dark:text-[#A3A3A3]">
              <li>Ensure the browser supports the video codec used by the mobile device. Chrome and Edge have the broadest codec support.</li>
              <li>Download the video file and open it in a local media player if inline preview fails.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="report-not-generated" title="Report Not Generated">
        <div className="space-y-4 my-4">
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">The Report Viewer shows no report after approving the inspection</h4>
            <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[13.5px] text-ink-700 dark:text-[#A3A3A3]">
              <li>Report generation is an asynchronous process. Allow 1–5 minutes after approval for the Report Builder to complete PDF generation and make the report available.</li>
              <li>Verify that the Inspection Template linked to this inspection has a valid report template configured in the Report Builder. Missing template configuration will prevent report generation.</li>
              <li>Check the Activity Timeline for a "Report Generation" event. If no event appears after 10 minutes, contact the Portal Administrator to investigate the Report Builder queue.</li>
            </ul>
          </div>
        </div>

        <Callout type="note">
          The Print Report feature generates an internal reviewer summary, not the official customer certificate. The official PDF certificate is generated by the Report Builder separately after approval.
        </Callout>
      </Section>

      <Section id="permission-denied" title="Permission Denied">
        <div className="space-y-4 my-4">
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Action buttons (Approve, Reject, Batch) are not visible or are greyed out</h4>
            <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[13.5px] text-ink-700 dark:text-[#A3A3A3]">
              <li>Your user role does not have the required permission for that action. Contact the Portal Administrator to request a role permission update.</li>
              <li>Surveyor accounts cannot approve, reject, or batch-operate any inspections by design — even their own submissions. This is a fixed system constraint.</li>
              <li>Some actions (e.g., GPS Override, Batch Delete) are restricted to specific custom roles and Portal Administrators only. Confirm your role's configuration in System Administration.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Inspection records from other surveyors or contracts are not visible</h4>
            <ul className="list-disc pl-5 space-y-1.5 mt-2 text-[13.5px] text-ink-700 dark:text-[#A3A3A3]">
              <li>Your custom portal role may be scoped to specific contracts, parties, or surveyors. Contact the Portal Administrator to review and adjust your role's data visibility configuration.</li>
              <li>The Surveyor built-in role always limits visibility to own submissions. If you need access to all records, your role must be updated to a Coordinator or Administrator role.</li>
            </ul>
          </div>
        </div>
      </Section>
    </DocPage>
  );
}
