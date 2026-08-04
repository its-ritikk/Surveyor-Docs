import React from "react";
import { Link } from "react-router-dom";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import DocMedia from "../../components/DocMedia";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "purpose", label: "Purpose & OTP Lifecycles" },
  { id: "workflow", label: "Verification Workflow" },
  { id: "steps", label: "Step-by-Step Verification Instructions" },
  { id: "validations", label: "Validation Rules & Failure Handling" },
  { id: "session", label: "Session Activation & Token Security" },
  { id: "important-notes", label: "Important Security Rules" },
  { id: "best-practices", label: "Best Practices" },
  { id: "troubleshooting", label: "Troubleshooting & FAQs" },
  { id: "tutorial-video", label: "Tutorial Video" },
];

export default function Verification() {
  return (
    <DocPage
      path="/getting-started/verification"
      eyebrow="Getting Started"
      title="Verification"
      description="User manual for One-Time Password (OTP) verification, code entry, session token activation, and verification troubleshooting."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Verification Step</strong> is the second phase of the passwordless sign-in sequence. After submitting credentials on the <Link to="/getting-started/sign-in">Sign In Page</Link>, users enter a time-sensitive, 6-digit One-Time Password (OTP) code dispatched to their inbox or mobile device to claim an authorized session token.
        </p>
      </Section>

      <Section id="purpose" title="Purpose &amp; OTP Lifecycles">
        <p>
          OTP verification confirms identity ownership in real-time without transmitting static credentials across the network.
        </p>
        <div className="my-4 grid gap-3 sm:grid-cols-3">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.02]">
            <p className="font-bold text-xs text-signal-600 dark:text-signal-400 uppercase tracking-wider">6 Numeric Digits</p>
            <p className="text-xs text-ink-650 dark:text-slate-400 mt-1">Codes consist strictly of 6 numeric digits generated cryptographically.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.02]">
            <p className="font-bold text-xs text-buoy-amber uppercase tracking-wider">5-Minute Timer</p>
            <p className="text-xs text-ink-650 dark:text-slate-400 mt-1">Each dispatched code expires after precisely 300 seconds (5 minutes).</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.02]">
            <p className="font-bold text-xs text-red-600 dark:text-red-400 uppercase tracking-wider">Single Use</p>
            <p className="text-xs text-ink-650 dark:text-slate-400 mt-1">Codes are consumed upon initial entry and cannot be reused for subsequent logins.</p>
          </div>
        </div>
      </Section>

      <Section id="workflow" title="Verification Workflow">
        <ol className="list-decimal pl-5 space-y-2.5 text-[14px]">
          <li><strong>Receive Dispatch:</strong> User opens email inbox or SMS notification to obtain the 6-digit code.</li>
          <li><strong>Input Digits:</strong> User types the code into the 6 sequential input boxes on the verification screen.</li>
          <li><strong>Validate &amp; Submit:</strong> System automatically validates the digits or user clicks <strong>Verify &amp; Sign In</strong>.</li>
          <li><strong>Token Issuance:</strong> Upon successful validation, the server returns an encrypted JWT payload and opens the <Link to="/getting-started/launch">CargoClave Portal Launcher</Link>.</li>
        </ol>
      </Section>

      <Section id="steps" title="Step-by-Step Verification Instructions">
        <ol className="list-decimal pl-5 space-y-3">
          <li>Check your corporate email inbox or mobile device for a message from <code>no-reply@cargoclave.com</code>.</li>
          <li>Locate the 6-digit verification code (e.g., <code>849 201</code>).</li>
          <li>Return to the verification screen in your browser or mobile app.</li>
          <li>Type the 6 digits sequentially into the verification input boxes. The cursor advances automatically between boxes.</li>
          <li>If automatic submission does not trigger, click the <strong>Verify &amp; Sign In</strong> button.</li>
          <li>If the code has expired, click <strong>Resend Code</strong> to request a fresh verification message.</li>
        </ol>
      </Section>

      <Section id="validations" title="Validation Rules &amp; Failure Handling">
        <p className="mb-3">The verification engine handles codes under strict rules:</p>
        <div className="space-y-3">
          <div className="p-3.5 rounded-lg border border-green-200 dark:border-green-900/30 bg-green-50/30 dark:bg-green-950/10">
            <p className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wide">Successful Verification</p>
            <p className="text-xs text-ink-700 dark:text-slate-300 mt-0.5">Code matches active server token. Session JWT is stored in secure local storage and browser redirects to the portal launcher.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-red-200 dark:border-red-900/30 bg-red-50/30 dark:bg-red-950/10">
            <p className="text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-wide">Invalid Code Error</p>
            <p className="text-xs text-ink-700 dark:text-slate-300 mt-0.5"><em>"Incorrect verification code. Please check your message and try again."</em> — Triggered when digits do not match server records.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-red-200 dark:border-red-900/30 bg-red-50/30 dark:bg-red-950/10">
            <p className="text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-wide">Expired Code Error</p>
            <p className="text-xs text-ink-700 dark:text-slate-300 mt-0.5"><em>"Verification code has expired. Click 'Resend Code' for a new code."</em> — Triggered when entry occurs after the 5-minute window.</p>
          </div>
        </div>
      </Section>

      <Section id="session" title="Session Activation &amp; Token Security">
        <p>
          Upon successful verification, the client receives a cryptographically signed <strong>JSON Web Token (JWT)</strong>.
        </p>
        <ul className="list-disc pl-5 space-y-2 my-3">
          <li><strong>Token Lifespan:</strong> Mobile tokens remain active for 24 hours; web tokens expire after 8 hours of inactivity.</li>
          <li><strong>Organization Scope:</strong> The token embeds the user's active organization ID, role permissions, and user GUID.</li>
        </ul>
      </Section>

      <Section id="important-notes" title="Important Security Rules">
        <Callout type="warning">
          Never share verification codes with colleagues or third parties. CargoClave support staff will never ask for your 6-digit OTP verification code.
        </Callout>
      </Section>

      <Section id="best-practices" title="Best Practices">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Resend Rate Limits:</strong> Avoid clicking "Resend Code" repeatedly. Wait at least 30 seconds for email gateway delivery.</li>
          <li><strong>Code Copying:</strong> You can paste the entire 6-digit string into the first input box to populate all boxes simultaneously.</li>
        </ul>
      </Section>

      <Section id="troubleshooting" title="Troubleshooting &amp; FAQs">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200">Q: Why did I not receive the OTP email?</h4>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-1">
              Check your junk/spam folder or corporate mail filter. Ensure <code>no-reply@cargoclave.com</code> is added to trusted sender lists.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200">Q: What should I do if the timer expires before I enter the code?</h4>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-1">
              Click the <strong>Resend Code</strong> link below the verification box to dispatch a fresh 6-digit code.
            </p>
          </div>
        </div>
      </Section>

      <Section id="tutorial-video" title="Tutorial Video">
        <DocMedia
          mediaId="verification-tutorial-video"
          caption="OTP Verification Video Tutorial"
        />
      </Section>
    </DocPage>
  );
}
