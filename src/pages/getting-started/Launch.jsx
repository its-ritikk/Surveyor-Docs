import React from "react";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "purpose", label: "Purpose" },
  { id: "features", label: "Feature Overview" },
  { id: "sections", label: "Important Functional Sections" },
  { id: "portal", label: "Detailed Feature Explanation" },
  { id: "workflow", label: "User Workflow" },
  { id: "validations", label: "Validation Rules" },
  { id: "permissions", label: "User Permissions" },
  { id: "related", label: "Related Features" },
  { id: "best-practices", label: "Best Practices" },
];

export default function Launch() {
  return (
    <DocPage
      path="/getting-started/launch"
      eyebrow="Getting Started"
      title="Launching the Surveyor App"
      description="Accessing the central CargoClave Portal, validating service plans, and launching the Surveyor console."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          After successfully signing in, users land on the central CargoClave Portal, which serves as the core launcher dashboard for all authorized CargoClave applications.
        </p>
      </Section>

      <Section id="purpose" title="Purpose">
        <p>
          Provides a single sign-on (SSO) hub to distribute active business licenses (Master Data, Fleet, Surveyor) based on the user's current organization workspace.
        </p>
      </Section>

      <Section id="features" title="Feature Overview">
        <p>
          Features dynamic subscription-status indicators, quick-launch buttons, active company indicators, and user security configurations.
        </p>
      </Section>

      <Section id="sections" title="Important Functional Sections">
        <p>
          The portal launcher contains the following core areas:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Organization Indicator</strong> — Shows the active company workspace in the top navigation.</li>
          <li><strong>Profile Console</strong> — Configures email, passwords, session tokens, and sign-out links.</li>
          <li><strong>Application Grid</strong> — Renders subscribed app cards.</li>
        </ul>
      </Section>

      <Section id="portal" title="Detailed Feature Explanation">
        <p>
          Understanding card states and license provisioning:
        </p>
        <ul className="list-disc pl-5 space-y-2.5 my-4 text-[13.5px]">
          <li>
            <strong>Subscription Indicators</strong> — Application cards show their active subscription status: <code>Active</code>, <code>Trial</code>, or <code>Not Subscribed</code>.
          </li>
          <li>
            <strong>Session Redirection</strong> — Clicking Launch App establishes a secure workspace session and redirects your browser to the Surveyor Management System.
          </li>
        </ul>
      </Section>

      <Section id="workflow" title="User Workflow">
        <ol className="list-decimal pl-5 space-y-2.5 my-4">
          <li>Locate the <strong>Surveyor</strong> application card in the grid.</li>
          <li>Confirm that the status indicator displays as <strong>Active</strong>.</li>
          <li>Click the <strong>Launch App</strong> button on the card to open the dashboard.</li>
        </ol>
      </Section>

      <Section id="validations" title="Validation Rules">
        <p>
          Launcher rules enforced by the portal session manager:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3">
          <li><strong>Status Validation</strong> — Disables the launch button if the card is Inactive or Not Subscribed.</li>
        </ul>
      </Section>

      <Section id="permissions" title="User Permissions">
        <p>
          Profile card visibility is managed by administrators. Accounts must be granted organization subscription rights.
        </p>
      </Section>

      <Section id="related" title="Related Features">
        <p>
          Launching the app relates directly to:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3">
          <li><a href="/getting-started/sign-in">Sign In &amp; Verification</a> — Validating credentials.</li>
          <li><a href="/operations/dashboard">Operations Dashboard</a> — The landing page of the Surveyor app.</li>
        </ul>
      </Section>

      <Section id="best-practices" title="Best Practices">
        <Callout type="note">
          If the Surveyor card does not appear on your launcher dashboard, double-check that you have selected the correct organization in the top navigation menu.
        </Callout>
      </Section>
    </DocPage>
  );
}
