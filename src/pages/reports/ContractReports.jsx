import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import { StatusBadge } from "../../components/StatusBits";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "types", label: "Report types" },
  { id: "workflow", label: "Building a Pick Report" },
  { id: "versions", label: "Version history" },
];

export default function ContractReports() {
  return (
    <DocPage
      path="/reports/contract-reports"
      eyebrow="Reports"
      title="Contract Reports (Pick Report / Survey Reports)"
      description="A dedicated reporting workspace for consolidated, contract-level reports — reached from the Reports tab on a contract, or from Contract Details."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The Pick Report module is a self-contained reporting workspace,
          separate from the generic Report Builder used for survey report
          templates. It's built specifically for producing consolidated,
          contract-level reports where the layout is largely predefined and
          auto-populated from real contract and inspection data, with a
          client-managed summary section layered on top.
        </p>
        <p>
          The screen is split into two panels: a left-hand form for the
          editable <strong>Summary</strong> section, and a right-hand{" "}
          <strong>live preview</strong> combining the predefined template,
          auto-mapped contract data, and your summary — with reserved
          branding regions.
        </p>
      </Section>

      <Section id="types" title="Report types">
        <div className="grid gap-3 sm:grid-cols-3 my-5">
          <div className="rounded-lg border border-ink-900/10 p-4">
            <StatusBadge color="teal">Final Report</StatusBadge>
            <p className="mt-2 text-[13px] leading-6 text-ink-700/90">
              Full consolidated supervision report for the contract.
            </p>
          </div>
          <div className="rounded-lg border border-ink-900/10 p-4">
            <StatusBadge color="blue">Photograph Report</StatusBadge>
            <p className="mt-2 text-[13px] leading-6 text-ink-700/90">
              Starts pre-seeded with a Photo Grid block that automatically
              pulls in every media file captured across the contract's
              inspections, grouped by inspection.
            </p>
          </div>
          <div className="rounded-lg border border-ink-900/10 p-4">
            <StatusBadge color="purple">Custom Report</StatusBadge>
            <p className="mt-2 text-[13px] leading-6 text-ink-700/90">
              A blank canvas for a bespoke, contract-specific report layout.
            </p>
          </div>
        </div>
      </Section>

      <Section id="workflow" title="Building a Pick Report">
        <ul>
          <li>
            From a contract's <strong>Reports</strong> tab, click{" "}
            <strong>Add Report</strong> and choose a starting format.
          </li>
          <li>
            Fill in the Summary section on the left — this is the only part
            of the layout you directly author; everything else is
            auto-mapped from the contract and its inspection data.
          </li>
          <li>
            Watch the live preview on the right update as you type.
          </li>
        </ul>
        <Callout type="note">
          Pick Report is purpose-built for Import contracts and intentionally
          does not reuse the dynamic drag-and-drop Report Builder — it favors
          a predictable, predefined layout suited to consolidated survey
          reporting.
        </Callout>
      </Section>

      <Section id="versions" title="Version history">
        <p>
          Every save creates a version you can return to later from the
          report's version history page, so earlier drafts of a consolidated
          report are never lost while the summary is being refined.
        </p>
      </Section>
    </DocPage>
  );
}
