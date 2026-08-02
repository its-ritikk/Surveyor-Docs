import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import { StatusBadge } from "../../components/StatusBits";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "list", label: "Reports list" },
  { id: "viewer", label: "Report Viewer" },
  { id: "export", label: "Downloading & exporting" },
];

export default function ReportsManagement() {
  return (
    <DocPage
      path="/reports/reports-management"
      eyebrow="Reports"
      title="Reports Management & Viewer"
      description="A cross-contract register of every report generated in the system, with a dedicated viewer for reading, verifying, and exporting the final document."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          While the <a href="/reports/contract-reports">Reports tab</a> on a
          contract shows reports scoped to that one job, Reports Management
          gives coordinators and administrators a single list across every
          contract — useful for locating a specific report without first
          opening its parent contract.
        </p>
      </Section>

      <Section id="list" title="Reports list">
        <p>
          Each row shows the report name, the type (Supervision / Inspection
          / Photograph / Custom), the linked contract, the status (
          <StatusBadge color="slate">Draft</StatusBadge>{" "}
          /{" "}
          <StatusBadge color="teal">Published</StatusBadge>
          ), and when it was last updated. Use the search and filter
          controls to narrow by contract, report type, or status.
        </p>
      </Section>

      <Section id="viewer" title="Report Viewer">
        <p>
          Click a report to open the Report Viewer — a read-only, paginated
          rendering of the finished report exactly as it will be shared with
          the client, including branding, tables, photo grids, and
          signatures.
        </p>
        <Callout type="note">
          The Report Viewer is read-only. To change content or layout, open
          the report from its source — the survey's Report Builder or the
          contract's Pick Report screen — rather than from the viewer.
        </Callout>
      </Section>

      <Section id="export" title="Downloading & exporting">
        <p>
          From the viewer, use the download action to export the report to a
          shareable file for distribution outside the platform. Every export
          reflects the most recently published version of the report.
        </p>
      </Section>
    </DocPage>
  );
}
