import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import { StatusBadge } from "../../components/StatusBits";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "what-is-logged", label: "What gets logged" },
  { id: "filters", label: "Filtering activity" },
];

export default function ActivityLogs() {
  return (
    <DocPage
      path="/logs/activity-logs"
      eyebrow="Logs & Analytics"
      title="Activity Logs"
      description="A record of every web interface interaction — page views, button clicks, and navigation — across the Surveyor App. Navigate to Logs and Analytics › Activity Logs."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          Activity Logs capture <strong>web interface interactions</strong>{" "}
          from users signed in through the browser. They complement{" "}
          <strong>App Activity</strong>, which captures the equivalent events
          from the Mobile Surveyor App, and{" "}
          <a href="/logs/audit-logs">Audit Logs</a>, which capture
          record-level data changes rather than UI interactions.
        </p>
      </Section>

      <Section id="what-is-logged" title="What gets logged">
        <ul>
          <li>Page views and navigation between screens</li>
          <li>Button clicks — Approve, Reject, Publish, Create, and similar actions</li>
          <li>Modal open/close events</li>
          <li>Form submissions, including which fields changed</li>
          <li>Checkbox and toggle interactions inside review flows (e.g. selected revision reasons)</li>
        </ul>
        <p>
          Each entry records the user, the action, the screen it occurred on,
          and a timestamp — giving coordinators and administrators a
          moment-by-moment trail of how a contract or inspection was worked
          through the UI.
        </p>
      </Section>

      <Section id="filters" title="Filtering activity">
        <p>
          Use the available filters to narrow entries by user, date range,
          module, or action type. This is most useful when investigating how
          a specific contract or inspection was handled, or when confirming
          that a reviewer actually opened and read an item before acting on
          it.
        </p>
        <Callout type="tip">
          Activity Logs are the fastest way to answer "who clicked what,
          when" — for "what data actually changed," check{" "}
          <a href="/logs/audit-logs">Audit Logs</a> instead.
        </Callout>
      </Section>
    </DocPage>
  );
}
