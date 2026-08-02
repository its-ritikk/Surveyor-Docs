import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import { StatusBadge } from "../../components/StatusBits";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "elements", label: "Report elements" },
  { id: "branding", label: "Branding" },
  { id: "publishing", label: "Preview & publishing" },
];

const elements = [
  { label: "Paragraph", desc: "Free-text narrative block, supports variables mapped from survey fields." },
  { label: "Data Table", desc: "Tabular rendering of repeated inspection entries (e.g. per shift, per hatch, per lot)." },
  { label: "Label/Value List", desc: "Key–value summary rows, ideal for header-style contract or survey metadata." },
  { label: "Signatures", desc: "Signature capture blocks for surveyor and/or client sign-off." },
  { label: "Photo Grid", desc: "Grid layout of evidence photos, groupable by inspection, with configurable columns." },
  { label: "Photographs", desc: "Individual photo blocks with captions, for singled-out evidence images." },
];

export default function ReportBuilder() {
  return (
    <DocPage
      path="/reports/report-builder"
      eyebrow="Reports"
      title="Report Builder"
      description="The design surface used to build report templates for surveys and inspection templates, with a live preview alongside every change."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The Report Builder is reached from{" "}
          <a href="/configuration/surveys">Survey Reports</a> or from Step 4
          of the{" "}
          <a href="/configuration/inspection-templates">
            Inspection Template
          </a>{" "}
          wizard. It shows a live preview on the right side of the screen as
          you build, so what you configure is exactly what appears on the
          generated report.
        </p>
      </Section>

      <Section id="elements" title="Report elements">
        <p>Add any combination of the following elements to a report layout:</p>
        <div className="grid gap-3 sm:grid-cols-2 my-5">
          {elements.map((e) => (
            <div key={e.label} className="rounded-lg border border-ink-900/10 p-4">
              <p className="text-[13.5px] font-semibold text-ink-900">{e.label}</p>
              <p className="mt-1 text-[13px] leading-6 text-ink-600">{e.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="branding" title="Branding">
        <p>
          Configure the report's branding in the <strong>Branding</strong>{" "}
          section: logo, company name, address, and tagline. Branding is
          applied consistently across every report generated from that
          template.
        </p>
      </Section>

      <Section id="publishing" title="Preview & publishing">
        <p>
          Use the live preview panel to check layout, pagination, and
          variable mapping as you build. Click <strong>Publish</strong> when
          the layout is finalized — a published report becomes selectable
          when adding reports to a contract or an inspection template.
        </p>
        <Callout type="tip">
          Report templates created inside an{" "}
          <strong>Inspection Template</strong> are automatically copied into
          every new contract that uses that template, so design them to be
          generic enough for repeat use.
        </Callout>
      </Section>
    </DocPage>
  );
}
