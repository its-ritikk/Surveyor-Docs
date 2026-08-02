import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import { StatusTable, StatusBadge } from "../../components/StatusBits";
import FieldTable from "../../components/FieldTable";

const toc = [
  { id: "status-summary", label: "4.1 Status summary" },
  { id: "filters", label: "4.2 Search and filter" },
  { id: "reviewing", label: "4.3 Reviewing an inspection" },
  { id: "gps", label: "GPS verification & distance thresholds" },
  { id: "approve-reject", label: "Approve / revision / reject flow" },
  { id: "related-contract", label: "4.4 Opening the related contract" },
];

export default function InspectionReview() {
  return (
    <DocPage
      path="/operations/inspection-review"
      eyebrow="Operations"
      title="Inspection Review"
      description="A central register of every submitted field inspection — monitor progress, review survey data, and verify GPS location before approving. Navigate to Operations › Inspection Review."
      toc={toc}
    >
      <Section id="status-summary" title="4.1 Status summary">
        <p>
          The status cards at the top of the screen show a live count for
          each stage an inspection can be in:
        </p>
        <StatusTable
          rows={[
            { label: "Pending", color: "slate", desc: "Planned but not yet started." },
            { label: "In Progress", color: "blue", desc: "Surveyor has begun work but not submitted yet." },
            { label: "Submitted", color: "amber", desc: "Surveyor has completed and submitted — needs review." },
            { label: "Approved", color: "green", desc: "Reviewed and accepted." },
            { label: "Cond. Approved", color: "teal", desc: "Accepted with conditions or follow-up required." },
            { label: "Rejected", color: "red", desc: "Not accepted — surveyor must correct and resubmit." },
          ]}
        />
      </Section>

      <Section id="filters" title="4.2 Search and filter">
        <p>Use the filters to narrow the list:</p>
        <ul>
          <li>Search by <strong>Inspection ID</strong></li>
          <li>Filter by <strong>Contract Number</strong></li>
          <li>Filter by <strong>Status</strong>, <strong>Type</strong>, <strong>Surveyor</strong>, <strong>Party</strong>, or <strong>Survey</strong></li>
          <li>Filter by <strong>Date Range</strong></li>
        </ul>
        <p>
          Click <strong>Apply Filters</strong> to run the search and{" "}
          <strong>Reset</strong> to clear it.
        </p>
      </Section>

      <Section id="reviewing" title="4.3 Reviewing an inspection">
        <p>
          Click any row (or the eye icon) to open the{" "}
          <strong>Inspection Details</strong> screen. It shows:
        </p>
        <ul>
          <li>
            <strong>Contract Information</strong> — Contract ID, party name,
            start date.
          </li>
          <li>
            <strong>Survey Particulars</strong> — planned location and survey
            date.
          </li>
          <li>
            <strong>Surveyor Details</strong> — name, email, phone.
          </li>
          <li>
            <strong>Submission Information</strong> — date and time
            submitted.
          </li>
          <li>
            <strong>Inspection Data</strong> — every field value captured by
            the surveyor, rendered exactly as designed in the Survey Builder.
          </li>
          <li>
            <strong>Location Verification</strong> — expected GPS vs. actual
            GPS recorded at submission.
          </li>
        </ul>
      </Section>

      <Section id="gps" title="GPS verification & distance thresholds">
        <p>
          The GPS Verification panel compares the survey's planned location
          against the coordinates the surveyor's device actually recorded at
          submission, using the Haversine formula to compute the great-circle
          distance between the two points. Distances under 1&nbsp;km are shown
          in meters; 1&nbsp;km and above are shown in kilometers.
        </p>
        <FieldTable
          rows={[
            {
              field: "< 500 m",
              required: false,
              desc: "Considered within acceptable range — flagged as a good match.",
            },
            {
              field: "< 1 km",
              required: false,
              desc: "Shown in green (success) — normal GPS drift.",
            },
            {
              field: "1 – 10 km",
              required: false,
              desc: "Shown in amber (warning) — worth a second look before approving.",
            },
            {
              field: "> 10 km",
              required: false,
              desc: "Shown in red (destructive) — investigate before approving; the surveyor may have submitted from the wrong site.",
            },
          ]}
        />
        <p>
          Click <strong>View Map</strong> to open an interactive map showing
          both coordinates side by side.
        </p>
        <Callout type="danger">
          A large distance between planned and actual location should always
          be reviewed with the surveyor before approving the inspection.
        </Callout>
      </Section>

      <Section id="approve-reject" title="Approve / revision / reject flow">
        <p>
          From the Inspection Details screen, reviewers have three actions
          available while an inspection is pending:
        </p>
        <div className="grid gap-3 sm:grid-cols-3 my-5">
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/40 p-4">
            <StatusBadge color="green">Approve Inspection</StatusBadge>
            <p className="mt-2 text-[13px] leading-6 text-ink-700/90">
              Accepts the inspection immediately — no additional input
              required.
            </p>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50/40 p-4">
            <StatusBadge color="amber">Request Revision</StatusBadge>
            <p className="mt-2 text-[13px] leading-6 text-ink-700/90">
              Opens a modal where you tick one or more reasons and can add
              optional comments. At least one reason is required before{" "}
              <strong>Send Request</strong> is enabled.
            </p>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50/40 p-4">
            <StatusBadge color="red">Reject Inspection</StatusBadge>
            <p className="mt-2 text-[13px] leading-6 text-ink-700/90">
              Opens a modal requiring a written rejection reason — the{" "}
              <strong>Reject</strong> button stays disabled until text is
              entered.
            </p>
          </div>
        </div>
        <h3>Revision reasons</h3>
        <ul>
          <li>Blurry or unclear photos</li>
          <li>Missing required evidence</li>
          <li>Incomplete data entry</li>
          <li>GPS verification failed</li>
          <li>Wrong container or location</li>
          <li>Other issues</li>
        </ul>
        <Callout type="note">
          The review action panel is hidden for inspections that are still{" "}
          <strong>In Progress</strong> (nothing to review yet) and for{" "}
          <strong>Import</strong> workflows, which use a different sign-off
          process. Once an inspection has already been reviewed, the panel
          shows its final outcome instead of action buttons.
        </Callout>
      </Section>

      <Section id="related-contract" title="4.4 Opening the related contract">
        <p>
          From the Inspection Details screen, click the{" "}
          <strong>Contract ID</strong> link. The system opens Contract
          Management pre-filtered to that contract so you can review the
          full execution plan, reports, and other inspections in context.
        </p>
      </Section>
    </DocPage>
  );
}
