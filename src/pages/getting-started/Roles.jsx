import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import { StatusBadge } from "../../components/StatusBits";

const toc = [
  { id: "roles", label: "Who uses this system" },
  { id: "permissions", label: "Permissions & protected routes" },
];

export default function Roles() {
  return (
    <DocPage
      path="/getting-started/roles"
      eyebrow="Getting Started"
      title="Roles & Access"
      description="The Surveyor Management System is used by four broad audiences. What each person sees is controlled by permissions assigned centrally in the CargoClave Portal."
      toc={toc}
    >
      <Section id="roles" title="Who uses this system">
        <div className="grid gap-3 sm:grid-cols-2 my-5">
          {[
            {
              label: "Surveyor",
              color: "teal",
              desc: "Field users who execute assigned surveys and capture inspection data, primarily via the Mobile Surveyor App.",
            },
            {
              label: "Coordinator",
              color: "blue",
              desc: "Plans execution — creates contracts, assigns surveys to surveyors or teams, and monitors day-to-day progress.",
            },
            {
              label: "Manager / Reviewer",
              color: "amber",
              desc: "Reviews submitted inspections, verifies GPS and evidence, and approves, requests revision, or rejects.",
            },
            {
              label: "Administrator",
              color: "purple",
              desc: "Configures Surveys, Inspection Templates, Teams, and report designs; has full visibility into Logs & Analytics.",
            },
          ].map((r) => (
            <div
              key={r.label}
              className="rounded-lg border border-ink-900/10 p-4"
            >
              <StatusBadge color={r.color}>{r.label}</StatusBadge>
              <p className="mt-2.5 text-[13.5px] leading-6 text-ink-700/90">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="permissions" title="Permissions & protected routes">
        <p>
          Every screen inside the Surveyor App is permission-gated. Navigation
          items, action buttons (Create, Edit, Publish, Approve, Reject), and
          entire pages only render if your account holds the corresponding
          permission. If you follow a link to a page you're not permitted to
          view, you're redirected to a <strong>Not Authorized</strong> screen.
        </p>
        <Callout type="note">
          Roles, permissions, individual users, and client onboarding are all
          created and managed from the <strong>CargoClave Portal</strong>, not
          from inside the Surveyor App. If you need a permission changed,
          request it from your administrator through the Portal.
        </Callout>
      </Section>
    </DocPage>
  );
}
