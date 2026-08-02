import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import FieldTable from "../../components/FieldTable";
import Steps from "../../components/Steps";
import { StatusBadge } from "../../components/StatusBits";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "list", label: "3.1 Contract list" },
  { id: "creating", label: "3.2 Creating a new contract" },
  { id: "validations", label: "Field validations reference" },
  { id: "viewing", label: "3.3 Viewing a contract" },
  { id: "editing", label: "3.4 Editing a contract" },
];

export default function Contracts() {
  return (
    <DocPage
      path="/operations/contracts"
      eyebrow="Operations"
      title="Contract Management"
      description="Where every survey job is created and managed — capturing the customer, shipment, cargo, vessel, survey plan, and deadlines. Navigate to Operations › Contract Management."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          A <strong>contract</strong> is the central record of a survey
          engagement. It links a contracting party, a shipment, one or more{" "}
          <strong>surveys</strong> in its <strong>Execution Plan</strong>, and
          the reports generated against it. Contracts can be created from an{" "}
          <strong>Inspection Template</strong> (recommended) or built as a
          fully custom, one-off job.
        </p>
      </Section>

      <Section id="list" title="3.1 Contract list">
        <p>
          The list screen shows every contract available to your user
          account. Each row displays the <strong>Contract ID</strong>,{" "}
          <strong>Shipment Type</strong>, <strong>Party</strong>,{" "}
          <strong>Cargo Type</strong>, <strong>Planned Surveys</strong>,{" "}
          <strong>Date Created</strong>, and <strong>Status</strong>.
        </p>
        <p>
          Use the search bar and filters (<strong>Status</strong>,{" "}
          <strong>Priority</strong>, <strong>Cargo Type</strong>) to narrow
          down the list. Click <strong>Apply Filters</strong> to apply your
          selection and <strong>Reset</strong> to clear it.
        </p>
      </Section>

      <Section id="creating" title="3.2 Creating a new contract">
        <p>
          Click <strong>+ Create Contract</strong> (top-right). The Create
          Contract screen opens in five sections: Inspection Template,
          Contracting Party Details, Shipment Details, Additional Details
          (appears once a template is selected), and the Execution Plan.
        </p>
        <Callout type="danger" title="Mandatory fields">
          Fields marked with a red asterisk (<code>*</code>) are mandatory —
          the system will not save a draft, or activate the contract, without
          them.
        </Callout>

        <Steps
          steps={[
            {
              title: "Select an Inspection Template",
              desc: (
                <p>
                  Choose a predefined template from the dropdown. This
                  automatically fills the survey activities under the
                  Execution Plan and sets up the relevant report formats. Use
                  a <strong>Custom Template</strong> only when no standard
                  template matches your requirement.
                </p>
              ),
            },
            {
              title: "Fill in Contracting Party Details",
              desc: (
                <ul>
                  <li>
                    <strong>Contracting Party *</strong> — the customer for
                    this job.
                  </li>
                  <li>
                    <strong>Primary Point of Contact (POC) *</strong> — the
                    key contact for this job.
                  </li>
                  <li>
                    <strong>PI References</strong> — Proforma Invoice or
                    commercial reference (optional).
                  </li>
                  <li>
                    <strong>Start Date *</strong> and{" "}
                    <strong>Completion Deadline *</strong> — set the contract
                    timeline. The deadline drives SLA alerts across the
                    system.
                  </li>
                </ul>
              ),
            },
            {
              title: "Fill in Shipment Details",
              desc: (
                <p>
                  <strong>Shipment Type *</strong> (Import / Export),{" "}
                  <strong>Cargo Type *</strong> (Container / Break Bulk /
                  Bulk), Ports, Packaging, Quantity, Vessel Name, Voyage
                  Number, Berth No., and <strong>BL Number *</strong>. For
                  vessel surveys, <strong>Hatch Information</strong> captures
                  the number of hatches and hatch numbers.
                </p>
              ),
            },
            {
              title: "Complete Additional Details",
              desc: (
                <p>
                  Once a template is selected, additional fields appear:
                  Vessel Name, Voyage Number, BL Number, Gross Weight, Net
                  Weight, Shipper Details, and Receiver Details. Fill in
                  everything applicable to the shipment.
                </p>
              ),
            },
            {
              title: "Configure the Execution Plan",
              desc: (
                <p>
                  The Execution Plan lists survey activities pre-loaded from
                  the chosen template. For each row set the{" "}
                  <strong>Assignee</strong> (surveyor or team),{" "}
                  <strong>Location</strong>, <strong>Date</strong>, and{" "}
                  <strong>POC</strong>. Use <strong>Add Row</strong> for
                  additional survey activities. Surveyor/team assignment is
                  optional at this stage — unassigned surveys trigger an
                  automatic reminder to Administrators.
                </p>
              ),
            },
            {
              title: "Save or Activate",
              desc: (
                <ul>
                  <li>
                    <strong>Save as Draft</strong> — use when information is
                    incomplete and you need to return later. Only the party,
                    POC, and cargo type are required to save a draft.
                  </li>
                  <li>
                    <strong>Activate Contract</strong> — runs full
                    validation and activates the contract for field
                    execution, SLA tracking, and reporting.
                  </li>
                  <li>
                    <strong>Cancel</strong> — exits without saving.
                  </li>
                </ul>
              ),
            },
          ]}
        />

        <Callout type="tip">
          Activate a contract only after all surveys are assigned. Incomplete
          assignments may result in missed field activities.
        </Callout>
      </Section>

      <Section id="validations" title="Field validations reference">
        <p>
          These are the exact rules enforced by the Create/Edit Contract form
          before a contract can be <strong>activated</strong>. Saving as a{" "}
          <strong>draft</strong> only enforces Party, POC, and Cargo Type.
        </p>

        <h3>Core fields</h3>
        <FieldTable
          rows={[
            {
              field: "partyId",
              required: true,
              desc: "Contracting Party must be selected. Required for both draft and activation.",
            },
            {
              field: "pocId",
              required: true,
              desc: "Primary Point of Contact must be selected. Required for both draft and activation.",
            },
            {
              field: "cargoType",
              required: true,
              desc: "Container, Break Bulk, or Bulk. Required for both draft and activation.",
            },
            {
              field: "contractId",
              required: false,
              desc: (
                <>
                  Auto-generated from the client's configured sequence
                  format (e.g. <code>CC-2026-{"{SEQ}"}</code>). If entered
                  manually it is validated against that exact format using a
                  generated regular expression — an incorrectly formatted ID
                  is rejected with{" "}
                  <em>"Contract ID must follow format: …"</em>.
                </>
              ),
            },
            {
              field: "cycleType",
              required: true,
              desc: "Must be selected before activation.",
            },
            {
              field: "sizeType",
              required: true,
              desc: "Container size — required before activation only when Cargo Type is Container.",
            },
            {
              field: "expectedQuantity",
              required: true,
              desc: "For Container cargo, must be a number ≥ 1 (\"Expected quantity must be at least 1\"). Auto-forced to 1 for Break Bulk, Bulk, and Vessel cargo types.",
            },
            {
              field: "itemId",
              required: true,
              desc: "Required before activation whenever the selected Cargo Type requires an item master reference (Container, Break Bulk, Bulk).",
            },
            {
              field: "contractStartDate",
              required: true,
              desc: "Contract Start Date must be set before activation.",
            },
            {
              field: "slaDeadline",
              required: true,
              desc: "Completion Deadline must be set before activation. Drives SLA breach calculations across the dashboard and alerts.",
            },
          ]}
        />

        <h3>Import-specific rules</h3>
        <p>
          When <strong>Shipment Type = Import</strong>, only{" "}
          <strong>Container</strong> and <strong>Break Bulk</strong> cargo
          types are supported — any other cargo type is rejected with{" "}
          <em>"Only Container and Break Bulk are supported for Import"</em>.
        </p>
        <FieldTable
          rows={[
            {
              field: "packingListDocPath",
              required: true,
              desc: "Packing List document upload — required for Import + Container. Optional for Break Bulk.",
            },
            {
              field: "blDocPath",
              required: true,
              desc: "Bill of Lading document upload — required for Import + Container. Optional for Break Bulk.",
            },
            {
              field: "blNumber",
              required: true,
              desc: "Required for Import + Container (\"BL Number is required for Import\").",
            },
          ]}
        />

        <h3>Execution Plan / survey rows</h3>
        <FieldTable
          rows={[
            {
              field: "surveys[]",
              required: true,
              desc: "At least one survey row is required before activation (\"At least one survey is required\").",
            },
            {
              field: "survey.workflowId",
              required: true,
              desc: "Each survey row must reference a published survey workflow.",
            },
            {
              field: "survey.location",
              required: true,
              desc: "Each survey row must have a location.",
            },
            {
              field: "survey.date",
              required: true,
              desc: (
                <>
                  Each survey row must have a date, and that date{" "}
                  <strong>cannot exceed the contract's Completion
                  Deadline</strong> (\"Survey date cannot exceed Completion
                  Deadline\").
                </>
              ),
            },
          ]}
        />

        <Callout type="note">
          Surveyor and Team assignment on an individual survey row are{" "}
          <strong>optional</strong> by design — a background reminder job
          notifies Administrators of any unassigned surveys instead of
          blocking activation.
        </Callout>
      </Section>

      <Section id="viewing" title="3.3 Viewing a contract">
        <p>
          Click the document icon in the <strong>Actions</strong> column to
          open a contract in read-only mode. The view screen has three tabs:
        </p>
        <div className="grid gap-3 sm:grid-cols-3 my-5">
          <div className="rounded-lg border border-ink-900/10 p-4">
            <p className="text-[13.5px] font-semibold text-ink-900">
              Execution Plan
            </p>
            <p className="mt-1 text-[13px] leading-6 text-ink-600">
              Shows each survey with its assignment, location, date, POC, and
              current status.
            </p>
          </div>
          <div className="rounded-lg border border-ink-900/10 p-4">
            <p className="text-[13.5px] font-semibold text-ink-900">
              Inspection Summary
            </p>
            <p className="mt-1 text-[13px] leading-6 text-ink-600">
              Consolidated inspection progress grouped by survey stage.
              Expand any row to see individual inspection records.
            </p>
          </div>
          <div className="rounded-lg border border-ink-900/10 p-4">
            <p className="text-[13.5px] font-semibold text-ink-900">
              Reports
            </p>
            <p className="mt-1 text-[13px] leading-6 text-ink-600">
              Lists all reports associated with the contract. Use{" "}
              <strong>Add Report</strong> — choose Blank Report or From
              Template — to create a new one.
            </p>
          </div>
        </div>
      </Section>

      <Section id="editing" title="3.4 Editing a contract">
        <p>
          Click the pencil icon to edit an <StatusBadge color="teal">Active</StatusBadge>{" "}
          contract. You can update party details, dates, shipment fields,
          vessel information, hatch details, and the execution plan.
        </p>
        <Callout type="danger">
          Contracts with status <StatusBadge color="green">Completed</StatusBadge>{" "}
          are read-only and cannot be edited.
        </Callout>
        <Callout type="note">
          Changes to dates and surveyor assignments will affect SLA alerts
          and field notifications immediately.
        </Callout>
      </Section>
    </DocPage>
  );
}
