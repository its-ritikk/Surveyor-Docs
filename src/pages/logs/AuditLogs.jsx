import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import { StatusTable } from "../../components/StatusBits";
import DocMedia from "../../components/DocMedia";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "actions", label: "Tracked actions" },
  { id: "comparison", label: "Activity vs. App Activity vs. Audit" },
  { id: "tutorial-video", label: "Tutorial Video" },
];

export default function AuditLogs() {
  return (
    <DocPage
      path="/logs/audit-logs"
      eyebrow="Logs & Analytics"
      title="Audit Logs"
      description="Records every business-critical, record-level change made to contracts, workflows, and templates. Navigate to Logs and Analytics › Audit Logs."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          Audit Logs record business-critical changes — contract creation
          and updates, workflow publications, report template duplications,
          and configuration changes. Each entry shows{" "}
          <strong>who</strong> made the change, <strong>when</strong>, and{" "}
          <strong>whether it succeeded</strong>.
        </p>
        <Callout type="danger">
          Audit Logs are for monitoring and governance only. They should not
          be modified through normal workflows.
        </Callout>
      </Section>

      <Section id="actions" title="Tracked actions">
        <p>
          Every entry corresponds to one of four action types on a
          record — contracts, surveys/workflows, or templates:
        </p>
        <ul>
          <li><strong>CREATE</strong> — a new contract, survey, or template was created.</li>
          <li><strong>UPDATE</strong> — an existing record was edited.</li>
          <li><strong>PUBLISH</strong> — a survey or report template was published, creating a new version.</li>
          <li><strong>DUPLICATE</strong> — a report template was cloned as a starting point for a new one.</li>
        </ul>
      </Section>

      <Section id="comparison" title="Quick comparison">
        <StatusTable
          rows={[
            { label: "Activity Logs", color: "blue", desc: "Web UI interactions — page views, button clicks, navigation." },
            { label: "App Activity", color: "teal", desc: "Mobile field events — form changes, inspection submissions." },
            { label: "Audit Logs", color: "purple", desc: "Record-level changes — contracts, surveys, templates, reports." },
          ]}
        />
      </Section>

      <Section id="tutorial-video" title="Tutorial Video">
        <DocMedia
          mediaId="audit-logs-tutorial-video"
          caption="Audit Logs Video Tutorial"
        />
      </Section>
    </DocPage>
  );
}
