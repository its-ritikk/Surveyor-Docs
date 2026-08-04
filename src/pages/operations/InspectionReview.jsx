import React from "react";
import { Link } from "react-router-dom";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import DocMedia from "../../components/DocMedia";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "purpose", label: "Purpose & Objectives" },
  { id: "workflow", label: "Review Workflow" },
  { id: "configuration", label: "Configuration" },
  { id: "details", label: "Inspection Details" },
  { id: "evidence", label: "Evidence Review" },
  { id: "comments", label: "Comments" },
  { id: "status-updates", label: "Status Updates" },
  { id: "timeline", label: "Review Timeline" },
  { id: "attachments", label: "Attachments" },
  { id: "business-rules", label: "Business Rules" },
  { id: "permissions", label: "Permissions" },
  { id: "best-practices", label: "Best Practices" },
  { id: "troubleshooting", label: "Troubleshooting & FAQs" },
  { id: "tutorial-video", label: "Tutorial Video" },
];

export default function InspectionReview() {
  return (
    <DocPage
      path="/operations/inspection-review"
      eyebrow="Operations"
      title="Inspection Review Reference"
      description="Operational guide for the quality assurance audit console — monitor mobile checklist submissions, audit photo geotags and container seals, review GPS distance compliance, add reviewer notes, and approve completed surveys."
      toc={toc}
    >
      {/* ── SECTION 1: OVERVIEW ────────────────────────────────────────── */}
      <Section id="overview" title="Overview">
        <p>
          The <strong>Inspection Review Console</strong> serves as the central quality assurance gatekeeper within the CargoClave ecosystem. It aggregates all checklist data, photo evidence, container seal captures, witness signatures, and geotags submitted by field surveyors operating the Mobile Surveyor App.
        </p>
        <p className="mt-3">
          Before an inspection checklist can be compiled into a customer-facing PDF certificate in the <Link to="/reports/report-builder">Report Builder</Link>, it must pass rigorous verification by an operational coordinator or quality manager in the review console.
        </p>

        <div className="my-5 grid gap-3 sm:grid-cols-3">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-bold text-xs text-signal-600 dark:text-cyan-400 uppercase tracking-wider">Quality Gatekeeper</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Prevents unverified or incomplete field submissions from generating official customer reports.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-bold text-xs text-signal-600 dark:text-cyan-400 uppercase tracking-wider">GPS Audit Engine</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Calculates spatial variance between planned port berth coordinates and actual surveyor mobile check-in locations.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-bold text-xs text-signal-600 dark:text-cyan-400 uppercase tracking-wider">Revision Loop</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Dispatches real-time push notifications to field mobile apps when checklist revisions are required.</p>
          </div>
        </div>
      </Section>

      {/* ── SECTION 2: PURPOSE & OBJECTIVES ───────────────────────────── */}
      <Section id="purpose" title="Purpose &amp; Objectives">
        <p>
          The primary objectives of the Inspection Review process are:
        </p>
        <ul className="list-disc pl-5 space-y-2 my-3 text-[14px]">
          <li><strong>Data Quality Enforcement:</strong> Verify that all mandatory survey checklist steps, numerical tally totals, and text descriptions meet strict operational guidelines.</li>
          <li><strong>Physical Presence Auditing:</strong> Confirm that field surveyors were physically present at the designated marine berth during cargo inspection using geotagged timestamps and GPS distance algorithms.</li>
          <li><strong>Legal &amp; Compliance Assurance:</strong> Validate witness vector signatures (e.g., Vessel Chief Officer, Terminal Supervisor) before issuing legal certificates of inspection.</li>
          <li><strong>SLA Monitoring:</strong> Ensure completed surveys pass review within contractually mandated Service Level Agreement windows to prevent delay penalties.</li>
        </ul>
      </Section>

      {/* ── SECTION 3: REVIEW WORKFLOW ─────────────────────────────────── */}
      <Section id="workflow" title="Review Workflow">
        <p className="mb-3">
          The Inspection Review follows a structured 4-stage lifecycle from mobile submission to final report approval:
        </p>

        <div className="space-y-3 my-4">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Stage 1: Mobile Checklist Submission</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-0.5">
              The field surveyor completes mobile checklist steps, captures photo evidence, records GPS geotags, and taps Submit. The survey status transitions to <code>Pending Review</code>.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Stage 2: Quality &amp; Evidence Audit</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-0.5">
              The reviewer opens the audit console, inspects question responses, verifies container seal photos, checks GPS distance warnings, and reviews witness signatures.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Stage 3: Reviewer Comments &amp; State Decision</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-0.5">
              The reviewer enters audit comments and selects a state decision: <code>Approve</code> or <code>Reject</code>.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Stage 4: Lock &amp; Report Compilation</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-0.5">
              Approved surveys are locked to prevent retroactive editing and automatically pushed to the Report Builder engine for PDF generation.
            </p>
          </div>
        </div>
      </Section>

      {/* ── SECTION 4: CONFIGURATION ───────────────────────────────────── */}
      <Section id="configuration" title="Configuration">
        <p>
          System Administrators can configure global review parameters under <strong>System Configuration › Review Rules</strong>:
        </p>

        <ul className="list-disc pl-5 space-y-2.5 my-4 text-[13.5px]">
          <li>
            <strong>Auto-Assign Reviewer Rules:</strong> Automatically routes incoming inspection submissions to specific operational coordinators based on cargo commodity type or port region.
          </li>
          <li>
            <strong>Geofence Distance Threshold:</strong> Sets the maximum allowed distance variance between contract target coordinates and surveyor check-in location (default: <code>1.0 km</code>).
          </li>
          <li>
            <strong>SLA Warning Notifications:</strong> Triggers escalation email alerts to operations management if a submitted inspection remains unreviewed for over 4 hours.
          </li>
        </ul>
      </Section>

      {/* ── SECTION 5: INSPECTION DETAILS ──────────────────────────────── */}
      <Section id="details" title="Inspection Details">
        <p>
          The <strong>Inspection Details</strong> panel presents key operational metadata associated with the survey submission:
        </p>

        <div className="my-4 overflow-x-auto">
          <table className="w-full text-left text-xs border border-ink-900/10 dark:border-[#262626]">
            <thead className="bg-ink-900/5 dark:bg-[#000000] font-semibold text-ink-900 dark:text-[#FFFFFF]">
              <tr>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626] w-1/4">Field Attribute</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Description &amp; Validation Rule</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/5 dark:divide-[#262626] text-ink-700 dark:text-[#E5E5E5]">
              <tr>
                <td className="p-2.5 font-mono font-medium">Inspection ID</td>
                <td className="p-2.5">Unique system-generated identifier (e.g., <code>INS-2026-8849</code>).</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Contract Reference</td>
                <td className="p-2.5">Clickable link to parent shipping contract (BL Number, Vessel Name, Customer).</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Surveyor Profile</td>
                <td className="p-2.5">Name, employee ID, mobile phone number, and mobile app version logged at check-in.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Check-In Timestamp</td>
                <td className="p-2.5">Exact date and time when the surveyor opened the inspection checklist on location.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Submission Timestamp</td>
                <td className="p-2.5">Exact date and time when the checklist payload was transmitted to the server.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── SECTION 6: EVIDENCE REVIEW ─────────────────────────────────── */}
      <Section id="evidence" title="Evidence Review">
        <p>
          The <strong>Evidence Review</strong> tab allows quality auditors to inspect visual evidence uploaded by the surveyor:
        </p>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-[#E5E5E5] mt-4 mb-2">Evidence Audit Capabilities</h4>
        <ul className="list-disc pl-5 space-y-2 text-[13.5px]">
          <li><strong>Photo Grid &amp; Zoom Inspector:</strong> High-resolution thumbnail grid supporting full-screen lightbox preview with contrast and zoom controls.</li>
          <li><strong>Geotag &amp; EXIF Metadata Audit:</strong> Displays original camera capture timestamp, EXIF data, and embedded GPS coordinates for every uploaded photo.</li>
          <li><strong>Container Seal Verification:</strong> Specialized viewer for high-resolution seal barcode scans and seal integrity photos.</li>
          <li><strong>GPS Distance Variance Warning:</strong> Calculates spatial distance between planned terminal coordinates and actual check-in location.</li>
        </ul>

        <Callout type="warning">
          If the spatial distance variance computed via the Haversine formula exceeds 1.0 km, a yellow <strong>GPS Variance Alert</strong> is flagged on the review header.
        </Callout>
      </Section>

      {/* ── SECTION 7: COMMENTS ────────────────────────────────────────── */}
      <Section id="comments" title="Comments">
        <p>
          The <strong>Comments Console</strong> enables two distinct communication channels during the audit process:
        </p>

        <div className="my-4 grid gap-3 sm:grid-cols-2">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Internal Reviewer Notes</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              Private notes visible only to operations management and coordinators. Used for internal audit tracking, damage liability notes, and supervisor approvals.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Mobile Revision Feedback</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              Public feedback notes dispatched directly to the field surveyor's Mobile App when requesting a checklist re-submission or photo re-capture.
            </p>
          </div>
        </div>
      </Section>

      {/* ── SECTION 8: STATUS UPDATES ───────────────────────────────────── */}
      <Section id="status-updates" title="Status Updates">
        <p>
          Reviewers execute state machine transitions by selecting one of the official review status decisions:
        </p>

        <div className="my-4 space-y-3">
          <div className="p-3.5 rounded-lg border border-cyan-200 dark:border-cyan-500/30 bg-cyan-50/30 dark:bg-cyan-500/10">
            <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider">Approved</span>
            <p className="text-xs text-ink-700 dark:text-[#E5E5E5] mt-1.5">Checklist fully conforms to quality standards. Survey data is locked and forwarded to the Report Builder engine.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-rose-200 dark:border-rose-500/30 bg-rose-50/30 dark:bg-rose-500/10">
            <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-700 dark:text-rose-300 font-bold text-xs uppercase tracking-wider">Rejected</span>
            <p className="text-xs text-ink-700 dark:text-[#E5E5E5] mt-1.5">Survey fails verification (e.g., severe location mismatch or fraudulent evidence). Dispatches alert to operations lead.</p>
          </div>
        </div>
      </Section>

      {/* ── SECTION 9: TIMELINE ────────────────────────────────────────── */}
      <Section id="timeline" title="Review Timeline">
        <p>
          The <strong>Review Timeline</strong> displays a tamper-proof chronological audit trail recording every event in the inspection lifecycle:
        </p>

        <ul className="list-disc pl-5 space-y-2 my-3 text-[13.5px]">
          <li><strong>Surveyor Check-In:</strong> Timestamp and GPS location logged when surveyor arrived at berth.</li>
          <li><strong>Step Completion Entries:</strong> Timestamps recorded for each checklist section submission.</li>
          <li><strong>Mobile Transmission:</strong> Network arrival timestamp logged by the API gateway.</li>
          <li><strong>Reviewer Notes &amp; Edits:</strong> Log of reviewer comments, status changes, and final sign-off timestamp.</li>
        </ul>
      </Section>

      {/* ── SECTION 10: ATTACHMENTS ────────────────────────────────────── */}
      <Section id="attachments" title="Attachments">
        <p>
          The <strong>Attachments Tab</strong> houses operational shipping documentation linked to the inspection:
        </p>

        <ul className="list-disc pl-5 space-y-2 my-3 text-[13.5px]">
          <li><strong>Bill of Lading Manifests:</strong> PDF manifests detailing container numbers, weight specifications, and seal lists.</li>
          <li><strong>Weighbridge Slips:</strong> Scanned weight tickets uploaded during bulk cargo tallying.</li>
          <li><strong>Customs Clearances:</strong> Import/export clearance permits and phytosanitary certificates.</li>
        </ul>
      </Section>

      {/* ── SECTION 11: BUSINESS RULES ─────────────────────────────────── */}
      <Section id="business-rules" title="Business Rules">
        <p>The Inspection Review module enforces the following strict business validation rules:</p>

        <div className="space-y-3 my-4">
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Rule 1: Lock Upon Approval</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-0.5">Once an inspection reaches <code>Approved</code> status, all checklist field values, photo evidence, and witness signatures are locked to prevent retroactive modification.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Rule 2: GPS Distance Threshold Warning</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-0.5">Check-in locations located greater than 1.0 km from the terminal target coordinates automatically trigger a visual warning banner requiring reviewer override justification.</p>
          </div>
        </div>
      </Section>

      {/* ── SECTION 12: PERMISSIONS ────────────────────────────────────── */}
      <Section id="permissions" title="Permissions">
        <p>Access to Inspection Review actions is governed by Role-Based Access Control (RBAC):</p>

        <div className="my-4 overflow-x-auto">
          <table className="w-full text-left text-xs border border-ink-900/10 dark:border-[#262626]">
            <thead className="bg-ink-900/5 dark:bg-[#000000] font-semibold text-ink-900 dark:text-[#FFFFFF]">
              <tr>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Action</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Administrator</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Coordinator</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Reviewer</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Surveyor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/5 dark:divide-[#262626] text-ink-700 dark:text-[#E5E5E5]">
              <tr>
                <td className="p-2.5 font-medium">View Submissions</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">Own Surveys Only</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Approve / Reject Survey</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Add Internal Reviewer Notes</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
              </tr>
              <tr>
                <td className="p-2.5 font-medium">Override GPS Distance Warning</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-cyan-600 dark:text-cyan-400 font-bold">Allowed</td>
                <td className="p-2.5 text-ink-400">No Access</td>
                <td className="p-2.5 text-ink-400">No Access</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── SECTION 13: BEST PRACTICES ─────────────────────────────────── */}
      <Section id="best-practices" title="Best Practices">
        <ul className="list-disc pl-5 space-y-2 text-[13.5px]">
          <li><strong>Prompt Verification:</strong> Audit submitted checklists within 2 hours of mobile transmission to maintain SLA timelines.</li>
          <li><strong>GPS Variance Checks:</strong> Always inspect satellite map thumbnails when a GPS distance warning banner is triggered before granting an override.</li>
        </ul>
      </Section>

      {/* ── SECTION 14: TROUBLESHOOTING ────────────────────────────────── */}
      <Section id="troubleshooting" title="Troubleshooting &amp; FAQs">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Q: Why is the "Approve" button disabled for an inspection record?</h4>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              The inspection may contain mandatory checklist fields that were left unanswered or unverified photo evidence. Ensure all required steps are marked complete.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Q: How do I handle a survey with a GPS distance warning?</h4>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              Review the check-in coordinate map. If the surveyor was positioned at a nearby berth or terminal office due to cellular coverage limits, enter an override justification note and proceed with approval.
            </p>
          </div>
        </div>
      </Section>

      {/* ── SECTION 15: TUTORIAL VIDEO ─────────────────────────────────── */}
      <Section id="tutorial-video" title="Tutorial Video">
        <DocMedia
          mediaId="inspection-review-tutorial-video"
          caption="Inspection Review Quality Assurance Console Video Tutorial"
        />
      </Section>
    </DocPage>
  );
}
