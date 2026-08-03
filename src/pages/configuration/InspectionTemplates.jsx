import DocPage, { Section } from "../../components/DocPage";
import FieldTable from "../../components/FieldTable";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "settings", label: "Template Settings" },
  { id: "field-config", label: "Field Configuration" },
  { id: "conditional-logic", label: "Conditional Logic" },
  { id: "attachments", label: "Attachments & Documents" },
  { id: "gps-rules", label: "GPS & Location Rules" },
  { id: "signature-rules", label: "Signature Rules" },
  { id: "publishing", label: "Publishing" },
];

export default function InspectionTemplates() {
  return (
    <DocPage
      path="/configuration/inspection-templates"
      eyebrow="Configuration"
      title="Inspection Templates Reference"
      description="Detailed configurations, rules, and settings for creating reusable cargo templates blueprints."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          Inspection Templates serve as organizational templates that standardize operational requirements for recurring logistics lanes, cargo contracts, and port checks.
        </p>
      </Section>

      <Section id="settings" title="Template Settings">
        <FieldTable
          rows={[
            { field: "Template Name", required: true, desc: "Alphanumeric identifier for the blueprint template." },
            { field: "Description", required: false, desc: "Operational context explaining when this template should be applied." },
            { field: "Process Type", required: true, desc: "Import or Export flows." },
            { field: "Cargo Type", required: true, desc: "Container, Break Bulk, or Bulk cargo configurations." },
          ]}
        />
      </Section>

      <Section id="field-config" title="Field Configuration">
        <p>
          Tick the contract metadata columns you want to capture during dispatch creation (e.g. Vessel Name, Gross Weight, Port of Origin, BL Number, Container Seals). Mapped variables automatically become active in the Report Builder layout.
        </p>
      </Section>

      <Section id="conditional-logic" title="Conditional Logic">
        <p>
          Configure rules that govern step sequencing. Includes mapping surveyor dispatches based on the cargo's gross weight threshold, and toggling mandatory steps depending on the terminal or shipping line selected.
        </p>
      </Section>

      <Section id="attachments" title="Attachments & Documents">
        <p>
          Upload document template mockups (e.g. Bill of Lading, Packing Lists, Custom Clearances). The dispatcher must attach matching files during contract creation before activation is permitted.
        </p>
      </Section>

      <Section id="gps-rules" title="GPS & Location Rules">
        <p>
          Specify coordinate check-in radius thresholds. By default, the surveyor's coordinates are audited against planned port terminals, and variance warnings are triggered on the review dashboard for drifts over 1&nbsp;km.
        </p>
      </Section>

      <Section id="signature-rules" title="Signature Rules">
        <p>
          Define signature requirements. You can require separate touch-drawn signatures for the chief surveyor, terminal witness, or client representative before the inspection can be approved.
        </p>
      </Section>

      <Section id="publishing" title="Publishing">
        <p>
          Locking and saving states:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3">
          <li><strong>Save Draft</strong> — Retains revisions to template steps, reports, and variables, without updating active dispatches.</li>
          <li><strong>Publish Template</strong> — Locks the configuration and publishes it. The template immediately appears in the selection dropdown when creating new contracts.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
