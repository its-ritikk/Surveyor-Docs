import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import Steps from "../../components/Steps";
import { StatusBadge } from "../../components/StatusBits";

const toc = [
  { id: "starting", label: "7.3 Starting a survey" },
  { id: "multiple-entries", label: "7.4 Multiple inspection entries" },
  { id: "completed", label: "7.5 Completed surveys" },
];

export default function ExecutingSurvey() {
  return (
    <DocPage
      path="/mobile/executing-a-survey"
      eyebrow="Mobile Application"
      title="Executing a Survey"
      description="From opening a contract to submitting a completed inspection in the field."
      toc={toc}
    >
      <Section id="starting" title="7.3 Starting a Survey (Pending)">
        <p>
          Tap a contract to open Contract Details. Each survey assigned to
          you is listed here with its status, planned location, date, SLA
          condition, and Point of Contact.
        </p>
        <Steps
          steps={[
            {
              title: "Locate the survey with Pending status",
            },
            {
              title: "Review the assignment details",
              desc: <p>Check the location, assigned date, SLA, and Point of Contact before traveling to site.</p>,
            },
            {
              title: "Tap Start Survey",
              desc: <p>Only after arriving at the inspection location — this is when the app records your starting GPS position.</p>,
            },
            {
              title: "Complete all required fields",
              desc: <p>Fields marked <code>*</code> are mandatory — the form will not submit without them.</p>,
            },
            {
              title: "Review your entries carefully",
            },
            {
              title: "Tap Submit Survey",
              desc: <p>The survey status changes to <StatusBadge color="green">Completed</StatusBadge>.</p>,
            },
          ]}
        />
      </Section>

      <Section id="multiple-entries" title="7.4 Surveys with multiple inspection entries">
        <p>
          Some surveys — such as <em>Loading Supervision Shift Wise</em> —
          require multiple inspection records: one per shift, hatch, or lot.
          These surveys show as <StatusBadge color="blue">In Progress</StatusBadge>{" "}
          until every entry is captured and the overall survey is submitted.
        </p>
        <Steps
          steps={[
            { title: "Tap View Inspections", desc: <p>On the In Progress survey card.</p> },
            { title: "Review previously submitted entries", desc: <p>In the Recorded Inspections list.</p> },
            { title: "Tap New Inspection", desc: <p>To capture another entry.</p> },
            {
              title: "Complete all fields",
              desc: <p>E.g. Loading Date, Shift, Hatch No., Packages, Weight — as configured for that survey.</p>,
            },
            { title: "Tap Submit Survey for each entry" },
            {
              title: "Close the overall survey",
              desc: <p>Once all entries are done, tap <strong>Submit Survey</strong> on the survey overview to close the survey.</p>,
            },
          ]}
        />
        <Callout type="danger">
          The <strong>Submit Survey</strong> button on the survey overview
          closes the entire survey. Only tap it once all individual
          inspection entries have been captured.
        </Callout>
      </Section>

      <Section id="completed" title="7.5 Completed surveys">
        <p>
          After submission, the survey card displays a green{" "}
          <StatusBadge color="green">Completed</StatusBadge> badge. You can
          tap the completed survey to review its details at any time. No
          further data entry is possible unless the reviewer returns the
          survey for correction (Request Revision) from{" "}
          <a href="/operations/inspection-review">Inspection Review</a>.
        </p>
      </Section>
    </DocPage>
  );
}
