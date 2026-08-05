import React from "react";
import { Link } from "react-router-dom";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "business-process", label: "Business Process" },
  { id: "review-lifecycle", label: "Review Lifecycle" },
  { id: "integrations", label: "Related Modules" },
];

export default function InspectionReview() {
  return (
    <DocPage
      path="/operations/inspection-review"
      eyebrow="Operations"
      title="Inspection Review"
      description="Central quality assurance console for reviewing submitted mobile survey checklists — monitor inspection workload, audit GPS compliance, inspect field data, and approve or reject completed inspections."
      toc={toc}
      hideVideo={true}
    >
      {/* ── OVERVIEW ─────────────────────────────────────────────────────── */}
      <Section id="overview" title="Overview">
        <p>
          The <strong>Inspection Review</strong> module is the quality assurance gateway within the CargoClave Surveyor Management System. It aggregates all survey checklist submissions from field surveyors operating the Mobile Surveyor App and provides portal coordinators with a structured workspace to audit, verify, and act on each inspection before it advances to the Report Builder for certificate generation.
        </p>
        <p className="mt-3">
          The module is accessible from <strong>Operations → Inspection Review</strong> and is designed for operations coordinators, quality reviewers, and portal administrators who are responsible for maintaining inspection data integrity and SLA compliance.
        </p>

        <div className="my-5 grid gap-3 sm:grid-cols-3">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-bold text-xs text-signal-600 dark:text-cyan-400 uppercase tracking-wider">Quality Gateway</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Prevents unverified or incomplete field submissions from generating official customer-facing certificates.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-bold text-xs text-signal-600 dark:text-cyan-400 uppercase tracking-wider">GPS Audit Engine</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Calculates spatial variance between planned port berth coordinates and actual surveyor check-in locations.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="font-bold text-xs text-signal-600 dark:text-cyan-400 uppercase tracking-wider">Evidence Audit</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Provides inline media preview, EXIF metadata inspection, and evidence counter to validate photo and document submissions.</p>
          </div>
        </div>
      </Section>

      {/* ── BUSINESS PROCESS ─────────────────────────────────────────────── */}
      <Section id="business-process" title="Business Process">
        <p>
          The Inspection Review module sits at the center of the CargoClave field-to-certificate workflow. Understanding its position in the larger business process helps coordinators appreciate the downstream impact of their review decisions.
        </p>

        <div className="my-5 p-5 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] font-mono text-xs text-ink-700 dark:text-[#A3A3A3] text-center space-y-1">
          <div className="font-semibold text-ink-900 dark:text-white">Field Surveyor executes checklist (Mobile App)</div>
          <div className="text-cyan-500">↓</div>
          <div>Survey submitted → status: <strong>Submitted</strong></div>
          <div className="text-cyan-500">↓</div>
          <div className="font-semibold text-ink-900 dark:text-white">Coordinator opens Inspection Review Dashboard</div>
          <div className="text-cyan-500">↓</div>
          <div>Opens Inspection Detail → Reviews data, GPS, evidence</div>
          <div className="text-cyan-500">↓</div>
          <div>Approves → data locked → forwarded to Report Builder</div>
          <div className="text-cyan-500">↓</div>
          <div className="font-semibold text-ink-900 dark:text-white">PDF Certificate generated &amp; delivered to client</div>
        </div>

        <p className="text-[13.5px] text-ink-700 dark:text-[#A3A3A3] mt-3">
          A rejection at the Inspection Review stage dispatches a push notification to the field surveyor's Mobile App, requesting a corrected re-submission. Once re-submitted, the inspection re-enters the review queue.
        </p>
      </Section>

      {/* ── REVIEW LIFECYCLE ─────────────────────────────────────────────── */}
      <Section id="review-lifecycle" title="Review Lifecycle">
        <p>
          Every inspection record passes through a defined status lifecycle from initial mobile submission to final report generation:
        </p>

        <div className="my-4 overflow-x-auto">
          <table className="w-full text-left text-xs border border-ink-900/10 dark:border-[#262626]">
            <thead className="bg-ink-900/5 dark:bg-[#000000] font-semibold text-ink-900 dark:text-[#FFFFFF]">
              <tr>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626] w-1/4">Status</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/5 dark:divide-[#262626] text-ink-700 dark:text-[#E5E5E5]">
              <tr>
                <td className="p-2.5 font-mono font-medium">Submitted</td>
                <td className="p-2.5">Survey payload received from the Mobile App. Awaiting coordinator assignment and initial review.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Pending</td>
                <td className="p-2.5">Assigned to the review queue. No coordinator has opened the record yet.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">In Progress</td>
                <td className="p-2.5">A coordinator has opened the Inspection Detail Page and is actively reviewing the submission.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Approved</td>
                <td className="p-2.5">Inspection passed quality review. Data is locked and pushed to the Report Builder for PDF generation.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Cond. Approved</td>
                <td className="p-2.5">Conditional Approval — Inspection passed review with minor non-blocking notes or GPS override remarks. Data is locked and forwarded for report generation with conditional flags.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Rejected</td>
                <td className="p-2.5">Inspection failed verification. A push notification is dispatched to the surveyor requesting corrected re-submission.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── RELATED MODULES ──────────────────────────────────────────────── */}
      <Section id="integrations" title="Related Modules">
        <p>
          Inspection Review operates as the central hub connecting three major system modules:
        </p>

        <div className="my-4 grid gap-3 sm:grid-cols-3">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">
              <Link to="/operations/contracts" className="text-cyan-600 dark:text-cyan-400 hover:underline">Contract Management</Link>
            </p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              Each inspection is linked to a parent contract that defines the client, port berth GPS coordinates, survey template, and assignment of the field surveyor. The Contract Link button in the inspection list navigates directly to the linked contract.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Mobile Surveyor App</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              The source of all inspection submissions. Field surveyors complete checklist steps, capture geotagged photos, and record GPS coordinates on mobile devices. All submissions appear in the Inspection Review queue.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">
              <Link to="/reports/report-builder" className="text-cyan-600 dark:text-cyan-400 hover:underline">Report Builder</Link>
            </p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              The downstream destination for approved inspections. Once an inspection is approved, all field data is locked and forwarded to the Report Builder which generates the official branded PDF inspection certificate for the client.
            </p>
          </div>
        </div>

        <Callout type="note">
          Navigation links within this documentation module: use the sidebar to explore <Link to="/operations/inspection-review/dashboard" className="text-cyan-600 dark:text-cyan-400 underline">Inspection Dashboard</Link>, <Link to="/operations/inspection-review/details" className="text-cyan-600 dark:text-cyan-400 underline">Inspection Details</Link>, <Link to="/operations/inspection-review/workflow" className="text-cyan-600 dark:text-cyan-400 underline">Review Workflow</Link>, <Link to="/operations/inspection-review/permissions" className="text-cyan-600 dark:text-cyan-400 underline">Permissions</Link>, and <Link to="/operations/inspection-review/best-practices" className="text-cyan-600 dark:text-cyan-400 underline">Best Practices</Link>.
        </Callout>
      </Section>
    </DocPage>
  );
}
