import React from "react";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "purpose", label: "Purpose" },
  { id: "features", label: "Feature Overview" },
  { id: "sections", label: "Important Functional Sections" },
  { id: "sign-in", label: "Detailed Feature Explanation" },
  { id: "workflow", label: "User Workflow" },
  { id: "validations", label: "Validation Rules" },
  { id: "permissions", label: "User Permissions" },
  { id: "related", label: "Related Features" },
  { id: "best-practices", label: "Best Practices" },
];

export default function SignIn() {
  return (
    <DocPage
      path="/getting-started/sign-in"
      eyebrow="Getting Started"
      title="Sign in & Verification"
      description="The standard passwordless, OTP-verified authentication flow for accessing the Surveyor Management System."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          Every session starts with a time-sensitive One-Time Password (OTP) verification code dispatched to a pre-registered email inbox or phone number.
        </p>
      </Section>

      <Section id="purpose" title="Purpose">
        <p>
          CargoClave uses passwordless authentication to maximize session security, preventing credentials sniffing, dictionary attacks, or common password compromise risks.
        </p>
      </Section>

      <Section id="features" title="Feature Overview">
        <p>
          Includes automatic email and SMS OTP dispatch, multi-input field focus progression, 5-minute code expiration timers, and session authorization tokens.
        </p>
      </Section>

      <Section id="sections" title="Important Functional Sections">
        <p>
          Authentication depends on the following steps:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Credentials Console</strong> — Where users input registered business emails or mobile lines.</li>
          <li><strong>Verification Overlay</strong> — Captures the 6-digit OTP code sequentially.</li>
          <li><strong>OTP Sync Service</strong> — Dispatches codes via transactional SMTP and SMS nodes.</li>
        </ul>
      </Section>

      <Section id="sign-in" title="Detailed Feature Explanation">
        <p>
          Technical parameters of the verification flow:
        </p>
        <ul className="list-disc pl-5 space-y-2.5 my-4 text-[13.5px]">
          <li>
            <strong>Passwordless Mechanics</strong> — Instead of storing a database hash password, CargoClave creates a temporary session record on login request.
          </li>
          <li>
            <strong>Session Invalidation</strong> — Requesting a new OTP code immediately voids all previously dispatched credentials for that email.
          </li>
        </ul>
      </Section>

      <Section id="workflow" title="User Workflow">
        <ol className="list-decimal pl-5 space-y-2.5 my-4">
          <li>Navigate to <code>portal.cargoclave.com</code> or launch the Mobile Surveyor App.</li>
          <li>Enter your pre-registered email address or mobile phone number, then click <strong>Continue</strong>.</li>
          <li>Locate the 6-digit verification code from your inbox.</li>
          <li>Input the code into the verification boxes, then click <strong>Verify &amp; Sign In</strong>.</li>
        </ol>
      </Section>

      <Section id="validations" title="Validation Rules">
        <p>
          Authentication enforces the following constraints:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3">
          <li><strong>OTP Format</strong> — Must be exactly 6 numeric digits.</li>
          <li><strong>Expiry Time</strong> — Code remains active for precisely <strong>5 minutes</strong> before expiring.</li>
        </ul>
      </Section>

      <Section id="permissions" title="User Permissions">
        <p>
          Available to all pre-registered Surveyor, Coordinator, and Administrator accounts. Access profile mapping is locked to organization definitions.
        </p>
      </Section>

      <Section id="related" title="Related Features">
        <p>
          Sign in relates directly to:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3">
          <li><a href="/getting-started/launch">Launching the Surveyor App</a> — Opening the app cards.</li>
          <li><a href="/getting-started/roles">Roles &amp; Access</a> — Defining account authorizations.</li>
        </ul>
      </Section>

      <Section id="best-practices" title="Best Practices">
        <Callout type="tip">
          Avoid requesting multiple codes consecutively. Delayed code delivery is usually due to corporate junk filters. Add <code>no-reply@cargoclave.com</code> to safe lists.
        </Callout>
      </Section>
    </DocPage>
  );
}
