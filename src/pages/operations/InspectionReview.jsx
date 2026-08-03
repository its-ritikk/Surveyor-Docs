import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import { StatusTable } from "../../components/StatusBits";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "details", label: "Inspection Details" },
  { id: "evidence", label: "Evidence Review" },
  { id: "comments", label: "Comments" },
  { id: "status-updates", label: "Status Updates" },
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
      <Section id="overview" title="Overview">
        <p>
          The Inspection Review console aggregates all inspection data logged by field surveyors, providing coordinators with an audit environment to verify cargo quality and GPS alignment.
        </p>
      </Section>

      <Section id="details" title="Inspection Details">
        <p>
          Each inspection record exposes basic tracking metrics captured automatically by the Surveyor Mobile App:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-4">
          <li><strong>Inspection ID</strong> — Unique alphanumeric key logged for each survey execution.</li>
          <li><strong>Surveyor Meta</strong> — Logged name, phone details, and credentials.</li>
          <li><strong>GPS Coordinate Auditing</strong> — The system compares the planned port location coordinates from the contract against actual GPS positions logged at start and submission.</li>
        </ul>
        <Callout type="warning">
          If the coordinate distance variance computed via the Haversine formula exceeds 1&nbsp;km, a GPS variance warning banner is displayed.
        </Callout>
      </Section>

      <Section id="evidence" title="Evidence Review">
        <p>
          Audit files uploaded by surveyors during execution:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-4">
          <li><strong>Photographic Evidence</strong> — Inspect captured cargo, seals, damages, and loading stages alongside surveyor-entered captions.</li>
          <li><strong>Document Attachments</strong> — Review uploaded Packing Lists, weight slips, and custom clearances.</li>
          <li><strong>Witness Signatures</strong> — Verify graphic signature files captured from port supervisors or shipping crew on site.</li>
        </ul>
      </Section>

      <Section id="comments" title="Comments">
        <p>
          Reviewers can add text comments and notes to the audit trail. Comments are visible to other coordinators and are attached to the inspection's version history, serving as documentation for cargo damage justifications or inspection rejection explanations.
        </p>
      </Section>

      <Section id="status-updates" title="Status Updates">
        <p>
          Audit actions that transition the inspection status:
        </p>
        <StatusTable
          rows={[
            { label: "Submitted", color: "amber", desc: "Awaiting coordinator audit." },
            { label: "Approved", color: "green", desc: "Inspection conforms to standard — locked and pushed to report builder." },
            { label: "Cond. Approved", color: "teal", desc: "Approved with exceptions — alerts are resolved but notes are appended." },
            { label: "Rejected", color: "red", desc: "Failed verification. Surveyor is notified to resubmit, and a revision reason is logged." },
          ]}
        />
      </Section>
    </DocPage>
  );
}
