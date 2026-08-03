import DocPage, { Section } from "../../components/DocPage";
import FieldTable from "../../components/FieldTable";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "details", label: "Survey Details Reference" },
  { id: "text-field", label: "Field: Text" },
  { id: "number-field", label: "Field: Number" },
  { id: "date-field", label: "Field: Date" },
  { id: "dropdown-field", label: "Field: Dropdown" },
  { id: "checkbox-field", label: "Field: Checkbox" },
  { id: "gps-field", label: "Field: GPS" },
  { id: "signature-field", label: "Field: Signature" },
  { id: "photo-field", label: "Field: Photo" },
  { id: "rules", label: "Conditional Logic Rules" },
  { id: "publishing", label: "Publishing & Version Control" },
];

export default function Surveys() {
  return (
    <DocPage
      path="/configuration/surveys"
      eyebrow="Configuration"
      title="Survey Builder Reference"
      description="Detailed configurations, field types reference, and rules for designing survey templates in the Surveyor Management System."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The Survey Builder is the central tool used to configure surveyor checklists. The fields, mapping tags, and validation parameters set here control the mobile surveyor forms.
        </p>
      </Section>

      <Section id="details" title="Survey Details Reference">
        <FieldTable
          rows={[
            { field: "Survey Name", required: true, desc: "A descriptive label for the checksheet template." },
            { field: "Process Type", required: true, desc: "Select either Import or Export flows." },
            { field: "Cargo Type", required: true, desc: "Container, Break Bulk, or Bulk cargo configurations." },
          ]}
        />
      </Section>

      <Section id="text-field" title="Field: Text">
        <p><strong>Purpose:</strong> Capturing short text entries, serial codes, or descriptive remarks.</p>
        <ul className="list-disc pl-5 space-y-1 my-3 text-[13px]">
          <li><strong>Supported Input:</strong> Alphanumeric characters and common symbols.</li>
          <li><strong>Validation Rules:</strong> Max character limits, regex validation patterns (e.g. email checks).</li>
          <li><strong>Usage:</strong> Inputting seal numbers, notes, and damage descriptions.</li>
          <li><strong>Example:</strong> Container Seal ID <code>"MSKU192837"</code>.</li>
        </ul>
      </Section>

      <Section id="number-field" title="Field: Number">
        <p><strong>Purpose:</strong> Recording quantitative dimensions, weights, volumes, and temperatures.</p>
        <ul className="list-disc pl-5 space-y-1 my-3 text-[13px]">
          <li><strong>Supported Input:</strong> Double-precision decimal values.</li>
          <li><strong>Validation Rules:</strong> Minimum/maximum range boundaries, integer-only checks.</li>
          <li><strong>Usage:</strong> Tracking gross weight, cargo temperature, moisture content, and package counts.</li>
          <li><strong>Example:</strong> Gross cargo weight <code>"24.50"</code> metric tons.</li>
        </ul>
      </Section>

      <Section id="date-field" title="Field: Date">
        <p><strong>Purpose:</strong> Picking dates and scheduling parameters.</p>
        <ul className="list-disc pl-5 space-y-1 my-3 text-[13px]">
          <li><strong>Supported Input:</strong> Calender dates in <code>YYYY-MM-DD</code> structure.</li>
          <li><strong>Validation Rules:</strong> Restricting entries to future dates, past dates, or a set date range.</li>
          <li><strong>Usage:</strong> Recording load dates, shift calendars, or container inspections schedules.</li>
          <li><strong>Example:</strong> Date of departure <code>"2026-08-03"</code>.</li>
        </ul>
      </Section>

      <Section id="dropdown-field" title="Field: Dropdown">
        <p><strong>Purpose:</strong> Restricting surveyor selections to a single predefined list item.</p>
        <ul className="list-disc pl-5 space-y-1 my-3 text-[13px]">
          <li><strong>Supported Input:</strong> String selectors.</li>
          <li><strong>Required Options:</strong> Must configure at least two selection choices.</li>
          <li><strong>Usage:</strong> Picking inspection outcomes, shifts, locations, or inspector names.</li>
          <li><strong>Example:</strong> Selection item <code>"Passed"</code>, <code>"Failed"</code>.</li>
        </ul>
      </Section>

      <Section id="checkbox-field" title="Field: Checkbox">
        <p><strong>Purpose:</strong> Capturing binary toggles (yes/no) or multi-choice checkboxes.</p>
        <ul className="list-disc pl-5 space-y-1 my-3 text-[13px]">
          <li><strong>Supported Input:</strong> Boolean true/false values.</li>
          <li><strong>Usage:</strong> Flagging defects, checking off safety checklists, or toggling damage options.</li>
          <li><strong>Example:</strong> Defect observed check <code>"True"</code>.</li>
        </ul>
      </Section>

      <Section id="gps-field" title="Field: GPS">
        <p><strong>Purpose:</strong> Logging surveyor coordinates on checksheet start and submission.</p>
        <ul className="list-disc pl-5 space-y-1 my-3 text-[13px]">
          <li><strong>Supported Input:</strong> Double-precision latitude and longitude coordinates.</li>
          <li><strong>Validation Rules:</strong> Checks coordinate accuracy index. Mismatches over 1&nbsp;km show warnings.</li>
          <li><strong>Usage:</strong> Verifying inspector presence on-site at the port berth.</li>
          <li><strong>Example:</strong> Coordinates <code>"22.5726° N, 88.3639° E"</code>.</li>
        </ul>
      </Section>

      <Section id="signature-field" title="Field: Signature">
        <p><strong>Purpose:</strong> Capturing touch-drawn graphic signatures on the mobile screen.</p>
        <ul className="list-disc pl-5 space-y-1 my-3 text-[13px]">
          <li><strong>Supported Input:</strong> Vector path data rendering as PNG image attachments.</li>
          <li><strong>Validation Rules:</strong> Required signee name, designation, and timestamp verification.</li>
          <li><strong>Usage:</strong> Securing surveyor check-ins and client witness sign-offs.</li>
          <li><strong>Example:</strong> Chief Surveyor signature.</li>
        </ul>
      </Section>

      <Section id="photo-field" title="Field: Photo">
        <p><strong>Purpose:</strong> Attaching photographic evidence directly from the device's camera.</p>
        <ul className="list-disc pl-5 space-y-1 my-3 text-[13px]">
          <li><strong>Supported Input:</strong> Camera photo files (JPEG/PNG).</li>
          <li><strong>Validation Rules:</strong> Maximum counts limit, mandatory caption text requirements.</li>
          <li><strong>Usage:</strong> Snapping cargo defects, seal IDs, and vessel draft numbers.</li>
          <li><strong>Example:</strong> Seal ID photograph.</li>
        </ul>
      </Section>

      <Section id="rules" title="Conditional Logic Rules">
        <p>
          Configure visibility and flow logic:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3">
          <li><strong>Field Visibility</strong> — Show/hide questions based on previous dropdown selections (e.g. showing damage fields only if defect checkbox is ticked).</li>
          <li><strong>Required Triggers</strong> — Dynamically switch fields to mandatory based on coordinate matches or other responses.</li>
        </ul>
      </Section>

      <Section id="publishing" title="Publishing & Version Control">
        <p>
          Releasing new configurations:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3">
          <li><strong>Version Increment</strong> — Publishing increments the version index, immediately pushing updates to new surveyor mobile dispatches.</li>
          <li><strong>Restore</strong> — Revert to historical versions at any time without data loss.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
