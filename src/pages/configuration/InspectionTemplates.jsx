import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import FieldTable from "../../components/FieldTable";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "step1", label: "Step 1 — Basic Details" },
  { id: "step2", label: "Step 2 — Document Templates" },
  { id: "step3", label: "Step 3 — Survey Selection" },
  { id: "step4", label: "Step 4 — Report Builder" },
  { id: "publish", label: "Publishing the template" },
];

const StepHeader = ({ n, title }) => (
  <div className="flex items-center gap-3 mt-8 mb-3">
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink-900 text-white text-[12.5px] font-display font-semibold">
      {n}
    </span>
    <h3 className="!mt-0 !mb-0">{title}</h3>
  </div>
);

export default function InspectionTemplates() {
  return (
    <DocPage
      path="/configuration/inspection-templates"
      eyebrow="Configuration"
      title="Inspection Templates"
      description="A reusable blueprint that bundles together a set of surveys, document templates, and report designs for a specific type of contract. Navigate to Configuration › Inspection Templates."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          Selecting a template when creating a contract pre-populates the
          Execution Plan automatically — you don't have to rebuild the
          survey sequence for every job of the same type. The Inspection
          Templates list shows each template's cargo/process type, surveys,
          reports, and status.
        </p>
        <p>
          Click <strong>+ Add Inspection Template</strong> to start the
          four-step creation wizard.
        </p>
      </Section>

      <Section id="step1" title="Creating a template">
        <StepHeader n={1} title="Basic Details" />
        <FieldTable
          rows={[
            { field: "Template Name", required: true, desc: "A clear, descriptive name for the template." },
            { field: "Description", required: false, desc: "Optional context for other administrators." },
            { field: "Process Type", required: true, desc: "Import or Export." },
            { field: "Cargo Type", required: true, desc: "Container, Break Bulk, or Bulk." },
            {
              field: "Contract Fields",
              required: false,
              desc: "Tick the contract fields you want available as variables in the Report Builder — e.g. Vessel Name, BL Number, Gross Weight.",
            },
          ]}
        />
        <p>Click <strong>Next</strong> to continue.</p>
      </Section>

      <Section id="step2" title="">
        <StepHeader n={2} title="Document Templates" />
        <p>
          Click <strong>+ Add Template</strong> to upload supporting
          documents that will be requested with every contract using this
          template — Packing List, Bill of Lading, or others.
        </p>
        <Callout type="note">
          This step is optional. If no document templates are needed for
          this inspection type, click <strong>Next</strong> to proceed.
        </Callout>
      </Section>

      <Section id="step3" title="">
        <StepHeader n={3} title="Survey Selection" />
        <ul>
          <li>
            Click <strong>+ Add Survey</strong> and select each required
            survey workflow from the dropdown.
          </li>
          <li>
            <strong>Drag rows</strong> to arrange surveys in the correct
            operational sequence — this order becomes the default order of
            the Execution Plan on any contract built from this template.
          </li>
          <li>Remove any survey that is not needed for this template type.</li>
        </ul>
        <p>Click <strong>Next</strong> to continue.</p>
      </Section>

      <Section id="step4" title="">
        <StepHeader n={4} title="Report Builder" />
        <ul>
          <li>
            Click <strong>+ Add Report Template</strong>. Choose{" "}
            <strong>Blank Report</strong> (fully custom) or{" "}
            <strong>Supervision Report (Predefined)</strong>.
          </li>
          <li>
            Enter the report name and an optional description, then click{" "}
            <strong>Create &amp; Open Builder</strong>.
          </li>
          <li>
            Design the report in the{" "}
            <a href="/reports/report-builder">Report Builder</a> and publish
            it. Every report template added here is copied into every
            contract created from this template.
          </li>
        </ul>
      </Section>

      <Section id="publish" title="Saving and publishing">
        <p>
          Return to the Inspection Template and click{" "}
          <strong>Publish Template</strong> once all four steps are
          complete.
        </p>
        <Callout type="tip">
          Use <strong>Save as Draft</strong> at any step if you need to pause
          and come back later — nothing is lost between sessions.
        </Callout>
      </Section>
    </DocPage>
  );
}
