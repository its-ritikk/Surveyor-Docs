import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import Steps from "../../components/Steps";
import FieldTable from "../../components/FieldTable";
import DocMedia from "../../components/DocMedia";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "adding", label: "Adding a new team" },
  { id: "editing", label: "Editing a team" },
  { id: "tutorial-video", label: "Tutorial Video" },
];

export default function Teams() {
  return (
    <DocPage
      path="/configuration/teams"
      eyebrow="Configuration"
      title="Teams Management"
      description="Group surveyors so you can assign an entire team to a survey activity in one step, instead of assigning individuals one at a time. Navigate to Configuration › Teams Management."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The Teams Management list shows all active surveyor teams and
          their members. Teams are selectable as the{" "}
          <strong>Assignee</strong> on any Execution Plan row inside{" "}
          <a href="/operations/contracts">Contract Management</a>.
        </p>
      </Section>

      <Section id="adding" title="Adding a new team">
        <Steps
          steps={[
            { title: "Click + Add Team" },
            {
              title: "Enter a Team Name",
              desc: <p>Required, e.g. <em>Port Operations Team</em>.</p>,
            },
            {
              title: "Select Team Members",
              desc: <p>Required — choose one or more surveyors from the dropdown.</p>,
            },
            {
              title: "Add a Description",
              desc: <p>Optional — explain the team's role or coverage area.</p>,
            },
            {
              title: "Set Status to Active",
            },
            {
              title: "Click Create Team",
            },
          ]}
        />
        <FieldTable
          rows={[
            { field: "teamName", required: true, desc: "Descriptive name for the team." },
            { field: "members[]", required: true, desc: "One or more surveyors selected from the dropdown." },
            { field: "description", required: false, desc: "Free-text description of the team's role." },
            { field: "status", required: true, desc: "Active or Inactive." },
          ]}
        />
      </Section>

      <Section id="editing" title="Editing a team">
        <p>
          Click the pencil icon beside a team to update the name, members,
          description, or status.
        </p>
        <Callout type="tip">
          Set a team to <strong>Inactive</strong> when it should no longer be
          used for new assignments but must be retained for historical
          records — this keeps past contracts and reports intact.
        </Callout>
        <Callout type="warning">
          Delete a team only when you are certain it is not linked to any
          active contracts or planned surveys.
        </Callout>
      </Section>

      <Section id="tutorial-video" title="Tutorial Video">
        <DocMedia
          mediaId="teams-management-tutorial-video"
          caption="Teams Management Video Tutorial"
        />
      </Section>
    </DocPage>
  );
}
