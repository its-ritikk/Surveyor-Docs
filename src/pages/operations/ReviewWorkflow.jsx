import React from "react";
import { Link } from "react-router-dom";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";

const toc = [
  { id: "comments", label: "Comments" },
  { id: "status-updates", label: "Status Updates" },
  { id: "revision-history", label: "Revision History" },
  { id: "activity-timeline", label: "Activity Timeline" },
  { id: "print-report", label: "Print Report" },
];

export default function ReviewWorkflow() {
  return (
    <DocPage
      path="/operations/inspection-review/workflow"
      eyebrow="Inspection Review"
      title="Review Workflow"
      description="Operational review process — add reviewer comments, update inspection status, track revision history, monitor the activity timeline, and print or export reports."
      toc={toc}
      hideVideo={true}
    >
      <p className="text-[13.5px] text-ink-700 dark:text-[#A3A3A3] mb-1">
        The Review Workflow covers all actions a coordinator performs after opening an inspection from the <Link to="/operations/inspection-review/dashboard" className="text-cyan-600 dark:text-cyan-400 underline">Inspection Dashboard</Link> — from adding internal notes to issuing the final approval or rejection decision.
      </p>

      {/* ── COMMENTS ─────────────────────────────────────────────────────── */}
      <Section id="comments" title="Comments">
        <p>
          The <strong>Comments</strong> feature enables two distinct communication channels during the review audit process:
        </p>

        <div className="my-4 grid gap-3 sm:grid-cols-2">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Internal Reviewer Notes</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              Private notes visible only to operations management and coordinators. Used for internal audit tracking, damage liability notes, and supervisor approvals — not shown to the field surveyor.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Mobile Revision Feedback</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              Feedback notes dispatched directly to the field surveyor's Mobile App when requesting a checklist re-submission or additional photo capture. The surveyor receives a push notification.
            </p>
          </div>
        </div>
      </Section>

      {/* ── STATUS UPDATES ───────────────────────────────────────────────── */}
      <Section id="status-updates" title="Status Updates">
        <p>
          Reviewers execute state machine transitions by selecting one of the official review status decisions. Each decision triggers downstream actions in the system.
        </p>

        <div className="my-4 space-y-3">
          <div className="p-3.5 rounded-lg border border-cyan-200 dark:border-cyan-500/30 bg-cyan-50/30 dark:bg-cyan-500/10">
            <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider">Approved</span>
            <p className="text-xs text-ink-700 dark:text-[#E5E5E5] mt-1.5">Checklist fully conforms to quality standards. Survey data is locked and forwarded to the Report Builder engine for PDF certificate generation. The inspection can no longer be edited.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-amber-200 dark:border-amber-500/30 bg-amber-50/30 dark:bg-amber-500/10">
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold text-xs uppercase tracking-wider">Cond. Approved</span>
            <p className="text-xs text-ink-700 dark:text-[#E5E5E5] mt-1.5">Inspection is conditionally approved with minor reviewer remarks, non-critical evidence flags, or GPS distance overrides. Data is locked and forwarded for report generation while retaining conditional flags for audit tracking.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-rose-200 dark:border-rose-500/30 bg-rose-50/30 dark:bg-rose-500/10">
            <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-700 dark:text-rose-300 font-bold text-xs uppercase tracking-wider">Rejected</span>
            <p className="text-xs text-ink-700 dark:text-[#E5E5E5] mt-1.5">Survey fails verification (e.g., severe GPS location mismatch, fraudulent evidence, or incomplete mandatory fields). A push notification is dispatched to the surveyor requesting corrected re-submission.</p>
          </div>
        </div>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-[#E5E5E5] mt-5 mb-3">Full Review Workflow</h4>
        <div className="my-4 p-5 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] font-mono text-xs text-ink-700 dark:text-[#A3A3A3] text-center space-y-1">
          <div className="font-semibold text-ink-900 dark:text-white">Open inspection from Dashboard</div>
          <div className="text-cyan-500">↓</div>
          <div>Review Header, Checklist Data, GPS &amp; Evidence tabs</div>
          <div className="text-cyan-500">↓</div>
          <div>Add Internal Reviewer Notes</div>
          <div className="text-cyan-500">↓</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="p-2 rounded border border-cyan-500/30 bg-cyan-500/5 text-cyan-600 dark:text-cyan-400">Approve → Locked → Report Builder</div>
            <div className="p-2 rounded border border-amber-500/30 bg-amber-50/5 text-amber-600 dark:text-amber-400">Cond. Approve → Flagged → Report Builder</div>
            <div className="p-2 rounded border border-rose-500/30 bg-rose-500/5 text-rose-600 dark:text-rose-400">Reject → Notification → Re-submit</div>
          </div>
        </div>
      </Section>

      {/* ── REVISION HISTORY ─────────────────────────────────────────────── */}
      <Section id="revision-history" title="Revision History">
        <p>
          The <strong>Revision History</strong> tab on the Inspection Detail Page maintains a tamper-proof, append-only log of every change made to the inspection record after its initial mobile submission. It supports compliance auditing and dispute resolution.
        </p>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-[#E5E5E5] mt-5 mb-3">Revision Record Fields</h4>
        <div className="my-3 overflow-x-auto">
          <table className="w-full text-left text-xs border border-ink-900/10 dark:border-[#262626]">
            <thead className="bg-ink-900/5 dark:bg-[#000000] font-semibold text-ink-900 dark:text-[#FFFFFF]">
              <tr>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626] w-1/3">Field</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/5 dark:divide-[#262626] text-ink-700 dark:text-[#E5E5E5]">
              <tr>
                <td className="p-2.5 font-mono font-medium">Revision Number</td>
                <td className="p-2.5">Auto-incremented integer identifying each successive change (e.g., Rev 1, Rev 2).</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Previous Values</td>
                <td className="p-2.5">Field value(s) that existed before the change, displayed in a strikethrough or muted style.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Updated Values</td>
                <td className="p-2.5">New field value(s) that replaced the previous values, highlighted to draw reviewer attention.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Changed By</td>
                <td className="p-2.5">Full name and user role of the person who made the change — field surveyor (re-submission) or portal reviewer (manual correction).</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Timestamp</td>
                <td className="p-2.5">Exact date and time the revision was committed, recorded server-side to prevent tampering.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Review Notes</td>
                <td className="p-2.5">Optional reviewer commentary explaining the reason for the change or documenting an override justification.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-[#E5E5E5] mt-5 mb-3">Revision Flow</h4>
        <div className="my-4 p-5 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] font-mono text-xs text-ink-700 dark:text-[#A3A3A3] text-center space-y-1">
          <div className="font-semibold text-ink-900 dark:text-white">Initial Mobile Submission (Rev 0)</div>
          <div className="text-cyan-500">↓</div>
          <div>Reviewer requests correction / edits field</div>
          <div className="text-cyan-500">↓</div>
          <div>Change committed → Rev 1 created</div>
          <div className="text-cyan-500">↓</div>
          <div>Previous &amp; Updated values logged with Changed By + Timestamp</div>
          <div className="text-cyan-500">↓</div>
          <div>Repeat for each subsequent edit</div>
        </div>
      </Section>

      {/* ── ACTIVITY TIMELINE ────────────────────────────────────────────── */}
      <Section id="activity-timeline" title="Activity Timeline">
        <p>
          The <strong>Activity Timeline</strong> displays a tamper-proof chronological audit trail recording every event in the inspection lifecycle. All user interactions within the Inspection Review module are automatically recorded. Activity logs are also accessible via the <Link to="/logs/activity-logs" className="text-cyan-600 dark:text-cyan-400 underline">Activity Logs</Link> section.
        </p>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-[#E5E5E5] mt-5 mb-3">Timeline Events</h4>
        <div className="my-3 overflow-x-auto">
          <table className="w-full text-left text-xs border border-ink-900/10 dark:border-[#262626]">
            <thead className="bg-ink-900/5 dark:bg-[#000000] font-semibold text-ink-900 dark:text-[#FFFFFF]">
              <tr>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626] w-1/3">Event</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">What Is Recorded</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/5 dark:divide-[#262626] text-ink-700 dark:text-[#E5E5E5]">
              <tr>
                <td className="p-2.5 font-mono font-medium">Surveyor Check-In</td>
                <td className="p-2.5">Timestamp and GPS location logged when the surveyor opened the inspection checklist on location.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Step Completion</td>
                <td className="p-2.5">Timestamps recorded for each checklist section and field submission.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Mobile Transmission</td>
                <td className="p-2.5">Network arrival timestamp logged by the API gateway when the survey was submitted from the Mobile App.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Search &amp; Filter</td>
                <td className="p-2.5">Filter criteria applied, timestamp, and user account.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Review Opened</td>
                <td className="p-2.5">Inspection ID opened for review, time spent on the detail page, and which tabs were visited.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Approval</td>
                <td className="p-2.5">Inspection ID, approving user, timestamp, and any override justification notes entered for GPS or evidence warnings.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Rejection</td>
                <td className="p-2.5">Inspection ID, rejecting user, rejection reason, timestamp, and mobile notification dispatch confirmation.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Batch Operations</td>
                <td className="p-2.5">Action type, list of affected inspection IDs, user account, timestamp, and count of skipped records.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Report Generation</td>
                <td className="p-2.5">Inspection ID, report template used, user who triggered generation, timestamp, and output file reference.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Reviewer Notes &amp; Edits</td>
                <td className="p-2.5">Log of reviewer comments, status changes, GPS override justifications, and the final sign-off timestamp.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="note">
          Activity logs are read-only and cannot be edited or deleted by any user role, including Portal Administrators. They are retained according to the organisation's data retention policy configured in System Administration.
        </Callout>
      </Section>

      {/* ── PRINT REPORT ─────────────────────────────────────────────────── */}
      <Section id="print-report" title="Print Report">
        <p>
          The <strong>Print Report</strong> feature allows reviewers and coordinators to generate a printable version of the inspection detail directly from the Inspection Detail Page. It is accessible via the action menu, typically after the inspection has been reviewed.
        </p>

        <div className="my-4 space-y-3">
          {[
            { title: "Preview", desc: "Opens a print-layout preview of the inspection record, formatted to standard A4 paper dimensions. Includes the inspection header, all field responses, GPS summary, and reviewer notes." },
            { title: "Print", desc: "Sends the formatted document to the system's default printer or browser print dialog. Used for physical filing, client meetings, or immediate on-site delivery." },
            { title: "Download PDF", desc: "Exports the print layout as a PDF file to the user's local device, named using the Inspection ID (e.g., INSP_2452F4D8.pdf)." },
            { title: "Close Preview", desc: "Dismisses the print preview overlay and returns the reviewer to the Inspection Detail Page without performing any print or download action." },
          ].map(({ title, desc }) => (
            <div key={title} className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
              <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">{title}</p>
              <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-0.5">{desc}</p>
            </div>
          ))}
        </div>

        <Callout type="note">
          The Print Report generates a reviewer-facing internal summary. For the official customer-facing inspection certificate, use the <Link to="/reports/report-builder" className="text-cyan-600 dark:text-cyan-400 underline">Report Builder</Link> which applies the branded report template configured in the Inspection Template.
        </Callout>
      </Section>
    </DocPage>
  );
}
