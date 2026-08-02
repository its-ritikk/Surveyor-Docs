import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";

const toc = [
  { id: "portal", label: "The Application Portal" },
  { id: "launch", label: "Launching the Surveyor App" },
];

export default function Launch() {
  return (
    <DocPage
      path="/getting-started/launch"
      eyebrow="Getting Started"
      title="Launching the Surveyor App"
      description="After OTP verification you land on the CargoClave Application Portal, the single hub for every application your account can access."
      toc={toc}
    >
      <Section id="portal" title="1.3 The CargoClave Application Portal">
        <p>
          The Application Portal shows a card for every CargoClave
          application your account has access to. Each card displays the
          application name and its current status — <strong>Active</strong>{" "}
          or <strong>Inactive</strong>.
        </p>
        <Callout type="tip">
          Use the <strong>Search apps</strong> bar to find the Surveyor App
          quickly if multiple applications are visible on your portal.
        </Callout>
      </Section>

      <Section id="launch" title="Launching the Surveyor App">
        <p>
          Locate the <strong>Surveyor App</strong> card, confirm its status
          shows <strong>Active</strong>, then click{" "}
          <strong>Launch App</strong>. You are taken directly into the
          Surveyor Management System and land on the{" "}
          <a href="/operations/dashboard">Operations Dashboard</a>.
        </p>
        <Callout type="note">
          If the Surveyor App card shows <strong>Inactive</strong> or does
          not appear at all, your account has not been granted access to this
          application. Contact your administrator via the CargoClave Portal
          to request access.
        </Callout>
      </Section>
    </DocPage>
  );
}
