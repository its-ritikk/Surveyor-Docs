import React from "react";
import { Link } from "react-router-dom";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";

const toc = [
  { id: "header-information", label: "Header Information" },
  { id: "inspection-data", label: "Inspection Data" },
  { id: "gps-verification", label: "GPS Verification" },
  { id: "evidence-review", label: "Evidence Review" },
  { id: "media-preview", label: "Media Preview" },
  { id: "report-viewer", label: "Report Viewer" },
];

export default function InspectionDetails() {
  return (
    <DocPage
      path="/operations/inspection-review/details"
      eyebrow="Inspection Review"
      title="Inspection Details"
      description="Complete audit view for a submitted inspection — header metadata, checklist field responses, GPS location verification, evidence review, media preview, and report viewing."
      toc={toc}
    >
      <p className="text-[13.5px] text-ink-700 dark:text-[#A3A3A3] mb-1">
        Clicking the <strong>eye icon</strong> action button on any row in the <Link to="/operations/inspection-review/dashboard" className="text-cyan-600 dark:text-cyan-400 underline">Inspection Dashboard</Link> opens the <strong>Inspection Detail Page</strong> — the full audit workspace for a specific submitted inspection. The page is organised into a header area and four tabbed content panels.
      </p>

      {/* ── HEADER INFORMATION ───────────────────────────────────────────── */}
      <Section id="header-information" title="Header Information">
        <p>
          The page header provides the primary identifiers and four metadata info cards for the selected inspection.
        </p>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-[#E5E5E5] mt-5 mb-3">Page Header</h4>
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] space-y-2 text-xs mb-5">
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-base text-ink-900 dark:text-white">INSP_2452F4D8</span>
            <span className="px-2 py-0.5 rounded bg-blue-500/15 text-blue-700 dark:text-blue-300 font-semibold text-xs border border-blue-500/20">Submitted</span>
          </div>
          <p className="text-ink-650 dark:text-[#A3A3A3] font-medium uppercase tracking-wide text-[11px]">VESSEL'S STOWAGE PLAN</p>
        </div>

        <div className="my-4 overflow-x-auto">
          <table className="w-full text-left text-xs border border-ink-900/10 dark:border-[#262626]">
            <thead className="bg-ink-900/5 dark:bg-[#000000] font-semibold text-ink-900 dark:text-[#FFFFFF]">
              <tr>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626] w-1/3">Info Card</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Fields Displayed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/5 dark:divide-[#262626] text-ink-700 dark:text-[#E5E5E5]">
              <tr>
                <td className="p-2.5 font-semibold">Contract Information</td>
                <td className="p-2.5">
                  <ul className="list-disc pl-4 space-y-1">
                    <li><strong>Contract:</strong> Linked contract reference number (e.g., <code>TCIS/IN/2026-PROD-0010</code>)</li>
                    <li><strong>Party:</strong> Client or contracting organization name (e.g., Global Logistics)</li>
                    <li><strong>Start Date:</strong> Planned survey commencement date</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold">Survey Particulars</td>
                <td className="p-2.5">
                  <ul className="list-disc pl-4 space-y-1">
                    <li><strong>Survey Location:</strong> Named terminal or geographic location where the inspection was conducted (e.g., Kandla, Gujarat, India)</li>
                    <li><strong>Survey Date:</strong> Calendar date of the field inspection</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold">Surveyor Details</td>
                <td className="p-2.5">
                  <ul className="list-disc pl-4 space-y-1">
                    <li><strong>Surveyor:</strong> Full name of the field surveyor who conducted and submitted the checklist</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="p-2.5 font-semibold">Submission Information</td>
                <td className="p-2.5">
                  <ul className="list-disc pl-4 space-y-1">
                    <li><strong>Submitted:</strong> Exact date and time when the checklist payload was transmitted from the Mobile App (e.g., Aug 05, 2026, 12:22 PM)</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-[#E5E5E5] mt-5 mb-3">Tab Navigation</h4>
        <p className="text-[13.5px] text-ink-700 dark:text-[#A3A3A3] mb-3">
          Below the header, the detail page is organised into four discrete tabs allowing reviewers to focus on one aspect at a time:
        </p>
        <div className="space-y-2 my-3">
          {[
            { tab: "Inspection Details", desc: "Default active tab. Displays all checklist field responses and step completion status." },
            { tab: "Evidence", desc: "All media uploaded during the field survey — photos, videos, and documents." },
            { tab: "GPS", desc: "Location Verification panel comparing expected vs. actual GPS coordinates." },
            { tab: "Revision History", desc: "Append-only log of every change made to the inspection after initial submission." },
          ].map(({ tab, desc }) => (
            <div key={tab} className="p-3 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] flex gap-3 items-start text-xs">
              <span className="px-2 py-0.5 rounded bg-ink-900/5 dark:bg-white/10 font-mono font-semibold text-ink-900 dark:text-white whitespace-nowrap">{tab}</span>
              <span className="text-ink-650 dark:text-[#A3A3A3]">{desc}</span>
            </div>
          ))}
        </div>
        <Callout type="note">
          Tabs are always rendered regardless of data availability. If no evidence was uploaded, the Evidence tab will be empty but accessible.
        </Callout>
      </Section>

      {/* ── INSPECTION DATA ──────────────────────────────────────────────── */}
      <Section id="inspection-data" title="Inspection Data">
        <p>
          The <strong>Inspection Data</strong> panel (Inspection Details tab, left side) shows the full checklist submission with step-level completion tracking and all field response values.
        </p>

        <div className="space-y-3 my-4">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Steps Completed Badge</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-0.5">
              Badge at the top of the panel showing steps completed vs. total (e.g., <code>1 of 1 steps completed</code>).
            </p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Survey Checklist Step Row</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-0.5">
              Each step is displayed as a collapsible row showing step name, an <strong>Edit</strong> button, a field count (e.g., <code>3 fields</code>), submission timestamp, and a <strong>Completed</strong> status badge.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Field Response Values</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-0.5 mb-3">
              Expanding a step reveals all field-level responses submitted by the surveyor. Example from a Vessel's Stowage Plan step:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-ink-900/10 dark:border-[#262626] rounded-lg overflow-hidden">
                <thead className="bg-ink-900/5 dark:bg-[#111111]">
                  <tr>
                    <th className="p-2 border-b border-ink-900/10 dark:border-[#262626] font-semibold text-ink-900 dark:text-white w-1/2">Field</th>
                    <th className="p-2 border-b border-ink-900/10 dark:border-[#262626] font-semibold text-ink-900 dark:text-white">Submitted Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-900/5 dark:divide-[#262626] text-ink-700 dark:text-[#E5E5E5]">
                  <tr><td className="p-2">Hatch No.</td><td className="p-2 font-mono">Hatch No. 1</td></tr>
                  <tr><td className="p-2">Number of Pieces</td><td className="p-2 font-mono">25</td></tr>
                  <tr><td className="p-2">Weight of Hatch</td><td className="p-2 font-mono">369</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      {/* ── GPS VERIFICATION ─────────────────────────────────────────────── */}
      <Section id="gps-verification" title="GPS Verification">
        <p>
          The <strong>Location Verification</strong> panel (GPS tab) performs the geospatial compliance audit by comparing the planned inspection location against the actual GPS coordinates recorded by the surveyor's mobile device.
        </p>

        <div className="my-4 grid gap-3 sm:grid-cols-2">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Survey Location <span className="text-orange-500 text-xs font-normal ml-1">Expected</span></p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              Pre-configured target GPS coordinates from the contract's execution plan — the berth or terminal where the inspection was planned. Displays Latitude, Longitude, and a resolved Address (e.g., Kandla, Gujarat, India).
            </p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Inspection Location <span className="text-cyan-500 text-xs font-normal ml-1">Actual GPS</span></p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              Actual GPS coordinates recorded from the surveyor's mobile device at the moment of check-in. Displays Latitude and Longitude as captured by device sensors.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A] text-xs text-ink-700 dark:text-[#A3A3A3] mb-4">
          <strong className="text-ink-900 dark:text-white block mb-1">GPS Recorded Badge</strong>
          When GPS coordinates are successfully captured and logged, a <code>GPS Recorded</code> badge appears at the top-right of the Location Verification panel, confirming location data is available for audit.
        </div>

        <Callout type="warning">
          If the spatial distance between <strong>Survey Location</strong> (Expected) and <strong>Inspection Location</strong> (Actual GPS) exceeds the configured threshold (default: 1.0 km), the system flags a GPS distance warning requiring reviewer override justification before the inspection can be approved.
        </Callout>
      </Section>

      {/* ── EVIDENCE REVIEW ──────────────────────────────────────────────── */}
      <Section id="evidence-review" title="Evidence Review">
        <p>
          The <strong>Evidence</strong> tab allows quality auditors to inspect all visual evidence and documents captured by the surveyor during the field inspection.
        </p>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-[#E5E5E5] mt-5 mb-3">Evidence Counter</h4>
        <p className="text-[13.5px] text-ink-700 dark:text-[#A3A3A3] mb-3">
          A compact summary widget at the top of the Evidence tab shows an immediate count of all media items attached — without requiring the reviewer to scroll through the full grid:
        </p>
        <div className="my-3 overflow-x-auto">
          <table className="w-full text-left text-xs border border-ink-900/10 dark:border-[#262626]">
            <thead className="bg-ink-900/5 dark:bg-[#000000] font-semibold text-ink-900 dark:text-[#FFFFFF]">
              <tr>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626] w-1/4">Counter</th>
                <th className="p-2.5 border-b border-ink-900/10 dark:border-[#262626]">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-900/5 dark:divide-[#262626] text-ink-700 dark:text-[#E5E5E5]">
              <tr>
                <td className="p-2.5 font-mono font-medium">Total Photos</td>
                <td className="p-2.5">Number of image files captured and uploaded by the surveyor during the field inspection.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Total Videos</td>
                <td className="p-2.5">Number of video recordings attached to the inspection submission.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Documents</td>
                <td className="p-2.5">Count of non-media file attachments such as PDF weighbridge slips, scanned manifests, and clearance certificates.</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-medium">Missing Evidence</td>
                <td className="p-2.5">Highlighted in amber or red when mandatory evidence fields in the inspection template have no uploaded file.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-[#E5E5E5] mt-5 mb-3">Audit Capabilities</h4>
        <ul className="list-disc pl-5 space-y-2 my-3 text-[13.5px]">
          <li><strong>Photo Grid Inspector:</strong> High-resolution thumbnail grid of all photos — supports full-screen lightbox preview with zoom controls.</li>
          <li><strong>Geotag &amp; EXIF Metadata Audit:</strong> Original camera capture timestamp, EXIF data, and embedded GPS coordinates for every uploaded photo.</li>
          <li><strong>Container Seal Verification:</strong> Specialized viewer for high-resolution seal barcode scans and seal integrity photos.</li>
          <li><strong>Field Response Audit:</strong> Each checklist field response displayed alongside its expected validation criteria.</li>
        </ul>

        <Callout type="warning">
          A <strong>Missing Evidence</strong> indicator means the inspection template required a photo or document for a specific step but the surveyor did not upload one. This must be resolved — by requesting a re-submission or applying a reviewer override justification — before the inspection can be approved.
        </Callout>
      </Section>

      {/* ── MEDIA PREVIEW ────────────────────────────────────────────────── */}
      <Section id="media-preview" title="Media Preview">
        <p>
          The <strong>Media Preview</strong> feature enables reviewers to inspect uploaded visual evidence directly in the browser without downloading files. It supports both images and videos.
        </p>

        <div className="my-4 space-y-3">
          {[
            { title: "Open Image", desc: "Click any photo thumbnail to open it in a full-screen lightbox at full resolution. Ideal for inspecting container seals, cargo conditions, and barcode labels." },
            { title: "Open Video", desc: "Click a video thumbnail to open the video player in the preview overlay with play/pause, seek, and volume controls." },
            { title: "Full-Screen Preview", desc: "The lightbox occupies the entire viewport. File name, capture timestamp, and EXIF metadata are displayed below the media item." },
            { title: "Previous / Next Navigation", desc: "Arrow buttons on either side allow reviewers to cycle through all uploaded media files sequentially without closing the preview." },
            { title: "Close Preview", desc: "Click the ✕ button, press Escape, or click outside the lightbox to dismiss and return to the Evidence tab." },
          ].map(({ title, desc }) => (
            <div key={title} className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
              <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">{title}</p>
              <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-0.5">{desc}</p>
            </div>
          ))}
        </div>

        <h4 className="font-semibold text-sm text-ink-900 dark:text-[#E5E5E5] mt-5 mb-2">Reviewer Validation Workflow</h4>
        <p className="text-[13.5px] text-ink-700 dark:text-[#A3A3A3]">
          When auditing evidence: open each photo in full-screen, check the EXIF capture timestamp against the expected inspection window, verify container seal numbers match the contract BL manifest, and confirm GPS geotags align with the target berth location.
        </p>
      </Section>

      {/* ── REPORT VIEWER ────────────────────────────────────────────────── */}
      <Section id="report-viewer" title="Report Viewer">
        <p>
          Once an inspection is approved and a formal report is generated through the <Link to="/reports/report-builder" className="text-cyan-600 dark:text-cyan-400 underline">Report Builder</Link>, the report becomes accessible directly from the Inspection Detail Page.
        </p>

        <div className="my-4 space-y-3">
          {[
            { title: "Open Report", desc: "A button on the approved inspection detail triggers the report viewer overlay, loading the generated PDF certificate associated with this inspection." },
            { title: "Preview", desc: "The report renders as an inline PDF preview inside the browser. Reviewers can scroll through multi-page certificates, verify branding, and confirm all field data was mapped correctly." },
            { title: "Generated PDF", desc: "Customer-facing PDF certificate produced by the Report Builder engine, applying the template layout configured in the Inspection Template. Contains all approved field values, photos, GPS summary, and witness signatures." },
            { title: "Download", desc: "Saves the generated certificate PDF to the user's local device for client delivery or archival." },
            { title: "Navigation Back to Inspection", desc: "A Back button within the report viewer returns the reviewer directly to the Inspection Detail Page, preserving the active tab and scroll position." },
          ].map(({ title, desc }) => (
            <div key={title} className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
              <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">{title}</p>
              <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-0.5">{desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </DocPage>
  );
}
