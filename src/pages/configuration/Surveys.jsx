import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import Steps from "../../components/Steps";
import FieldTable from "../../components/FieldTable";
import { StatusBadge } from "../../components/StatusBits";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "creating", label: "Creating a new survey" },
  { id: "canvas", label: "The Survey Canvas" },
  { id: "fields", label: "Field types & configuration" },
  { id: "locked-steps", label: "Locked steps" },
  { id: "editing", label: "Editing & versioning" },
  { id: "reports", label: "Survey reports" },
];

export default function Surveys() {
  return (
    <DocPage
      path="/configuration/surveys"
      eyebrow="Configuration"
      title="Surveys (Survey Builder)"
      description="A Survey defines the inspection workflow a surveyor follows in the field — the steps, data fields, validations, and conditional rules. Navigate to Configuration › Surveys."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          Once published, surveys can be included in{" "}
          <strong>Inspection Templates</strong> and assigned to contracts.
          The Surveys list shows every published survey workflow available to
          your organization.
        </p>
      </Section>

      <Section id="creating" title="Creating a new survey">
        <p>
          Click <strong>+ Create New Survey</strong> and fill in the basic
          details:
        </p>
        <FieldTable
          rows={[
            {
              field: "Survey Name",
              required: true,
              desc: "Use a clear, descriptive name, e.g. \u201cLoading Supervision Shift Wise\u201d.",
            },
            {
              field: "Process Type",
              required: true,
              desc: "Import or Export.",
            },
            {
              field: "Cargo Type",
              required: true,
              desc: "Container, Break Bulk, or Bulk.",
            },
          ]}
        />
      </Section>

      <Section id="canvas" title="The Survey Canvas">
        <p>
          The builder is a three-panel workspace: the{" "}
          <strong>Available Fields</strong> panel on the left, the{" "}
          <strong>Survey Canvas</strong> in the center, and{" "}
          <strong>Field Configuration</strong> on the right.
        </p>
        <Steps
          steps={[
            {
              title: "Add a step",
              desc: (
                <p>
                  Click <strong>+ Add Step</strong> to create a new survey
                  stage — e.g. Vessel Details, Cargo Identification, Damage
                  Observation.
                </p>
              ),
            },
            {
              title: "Drag fields onto the step",
              desc: (
                <p>
                  Drag field types from the Available Fields panel onto each
                  step: Text, Number, Dropdown, Multi Select, Yes/No Toggle,
                  Photo, and more.
                </p>
              ),
            },
            {
              title: "Configure each field",
              desc: (
                <p>
                  Click any field on the canvas to open Field Configuration.
                  Set the <strong>Field Name</strong>,{" "}
                  <strong>Mapping Tag</strong> (used by the Report Builder),{" "}
                  <strong>Validations</strong>, and visibility{" "}
                  <strong>Rules</strong>.
                </p>
              ),
            },
            {
              title: "Preview",
              desc: <p>Use <strong>Preview</strong> to confirm exactly how the step will appear to the surveyor in the field.</p>,
            },
            {
              title: "Save Draft or Publish",
              desc: (
                <p>
                  <strong>Save Draft</strong> saves without publishing.{" "}
                  <strong>Publish</strong> makes the survey ready for
                  operational use — selectable in Inspection Templates and
                  contracts.
                </p>
              ),
            },
          ]}
        />
      </Section>

      <Section id="fields" title="Field types & configuration">
        <p>Available field types on the canvas include:</p>
        <div className="flex flex-wrap gap-2 my-4">
          {["Text", "Number", "Dropdown", "Multi Select", "Yes/No Toggle", "Photo", "Date", "GPS/Location"].map(
            (f) => (
              <StatusBadge key={f} color="teal">
                {f}
              </StatusBadge>
            )
          )}
        </div>
        <p>
          Each field's configuration panel governs its{" "}
          <strong>Mapping Tag</strong> (the variable name available later in
          the Report Builder), any <strong>Validations</strong> (required,
          numeric ranges, character limits), and conditional{" "}
          <strong>Rules</strong> that show or hide the field based on other
          answers in the same step.
        </p>
      </Section>

      <Section id="locked-steps" title="Locked steps">
        <p>
          Steps marked with a lock icon are <strong>system-controlled</strong>{" "}
          and have limited editing rights. For certain cargo types (for
          example, Container surveys) the first step of the workflow is
          locked so that core identification fields stay consistent across
          every survey built on that cargo type — you can still see and
          preview it, but cannot freely restructure it.
        </p>
        <Callout type="note">
          Locked steps protect data consistency across contracts and
          reports. If a locked step genuinely needs to change, this must be
          coordinated at the platform configuration level rather than from an
          individual survey.
        </Callout>
      </Section>

      <Section id="editing" title="Editing an existing survey & version history">
        <p>
          Click the eye/edit icon beside any survey in the list, then select{" "}
          <strong>View Current Version</strong>. Update fields, steps,
          validations, or rules as needed, then <strong>Publish</strong> to
          apply the changes.
        </p>
        <Callout type="danger">
          Editing a published survey creates a <strong>new version</strong>.
          Previous versions remain available for reference and restoration —
          they are never overwritten.
        </Callout>
        <p>
          Click the version history icon beside a survey to see all past
          versions, with the current version highlighted. Use{" "}
          <strong>Restore</strong> to reactivate an older configuration if
          the current version needs to be rolled back.
        </p>
      </Section>

      <Section id="reports" title="Survey reports">
        <p>
          Each survey can have one or more report templates. Click{" "}
          <strong>View Reports</strong> from the survey list to manage them.
          Click <strong>+ Add Report</strong>, choose a starting format —{" "}
          <strong>Blank Report</strong> or <strong>Blank
          Consolidated</strong> — give the report a name, and open the{" "}
          <a href="/reports/report-builder">Report Builder</a> to design it.
        </p>
      </Section>
    </DocPage>
  );
}
