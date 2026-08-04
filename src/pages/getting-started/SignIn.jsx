import React from "react";
import { Link } from "react-router-dom";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "purpose", label: "Purpose & Security Mechanics" },
  { id: "prerequisites", label: "Login Prerequisites" },
  { id: "credentials", label: "Credentials & Identification" },
  { id: "workflow", label: "Business Workflow" },
  { id: "steps", label: "Step-by-Step Login Instructions" },
  { id: "validations", label: "Login Validation Rules & Error Messages" },
  { id: "important-notes", label: "Important Notes & Security Rules" },
  { id: "best-practices", label: "Best Practices" },
  { id: "troubleshooting", label: "Troubleshooting & FAQs" },
];

export default function SignIn() {
  return (
    <DocPage
      path="/getting-started/sign-in"
      eyebrow="Getting Started"
      title="Sign In"
      description="Step-by-step user guide for authentication, credentials submission, and passwordless login to the CargoClave ecosystem."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The CargoClave platform uses a <strong>Passwordless Authentication Engine</strong> to secure user access across both web and mobile environments. Instead of static passwords, authentication relies on pre-registered enterprise identity records and time-sensitive One-Time Password (OTP) verification tokens.
        </p>
      </Section>

      <Section id="purpose" title="Purpose &amp; Security Mechanics">
        <p>
          Passwordless authentication eliminates traditional password security vulnerabilities such as credential harvesting, dictionary attacks, weak password reused across accounts, and password reset overhead.
        </p>
        <p className="mt-3">
          When a user initiates sign in, CargoClave creates a ephemeral authentication session, dispatches a secure cryptographic token via transactional SMTP or SMS, and validates the token before issuing a JSON Web Token (JWT) session payload.
        </p>
      </Section>

      <Section id="prerequisites" title="Login Prerequisites">
        <p>Before attempting to sign in to the platform, ensure the following requirements are met:</p>
        <ul className="list-disc pl-5 space-y-2 my-3">
          <li><strong>Provisioned Account:</strong> Your email address or mobile phone number must be registered in CargoClave Portal by an organization administrator.</li>
          <li><strong>Active Subscription:</strong> Your company tenant must have an active license subscription to the Surveyor Management System.</li>
          <li><strong>Inbox or Mobile Access:</strong> Access to the registered email inbox or cellular device to retrieve the verification code.</li>
        </ul>
      </Section>

      <Section id="credentials" title="Credentials &amp; Identification">
        <p>The login form accepts two types of primary identifier input:</p>
        <div className="my-4 grid gap-3 sm:grid-cols-2">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.02]">
            <p className="font-semibold text-sm text-ink-900 dark:text-slate-100">Corporate Email Address</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-1">E.g., <code>john.doe@maritimesurveys.com</code>. Recommended for coordinators, reviewers, and web console administrators.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.02]">
            <p className="font-semibold text-sm text-ink-900 dark:text-slate-100">Mobile Phone Number</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-1">E.g., <code>+1 (555) 019-2834</code> with country code. Recommended for field surveyors utilizing mobile devices.</p>
          </div>
        </div>
      </Section>

      <Section id="workflow" title="Business Workflow">
        <p className="mb-3">The authentication process follows a strict 3-stage security handoff:</p>
        <ol className="list-decimal pl-5 space-y-2 text-[14px]">
          <li><strong>Identity Request:</strong> User enters registered email/phone on the sign in page.</li>
          <li><strong>OTP Generation &amp; Dispatch:</strong> Server validates identity record, invalidates prior active codes, and dispatches a 6-digit verification code.</li>
          <li><strong>Token Exchange:</strong> User proceeds to the <Link to="/getting-started/verification">Verification Step</Link> to input the code and claim an authenticated session token.</li>
        </ol>
      </Section>

      <Section id="steps" title="Step-by-Step Login Instructions">
        <ol className="list-decimal pl-5 space-y-3">
          <li>Open your web browser and navigate to <code>portal.cargoclave.com</code> (or open the Mobile Surveyor App).</li>
          <li>Locate the <strong>Sign In</strong> card on the screen.</li>
          <li>Enter your registered corporate email address or mobile phone number into the input field.</li>
          <li>Verify that there are no typographical errors in your identifier.</li>
          <li>Click the <strong>Continue</strong> button to request your verification code.</li>
          <li>You will be redirected automatically to the <Link to="/getting-started/verification">Verification Screen</Link>.</li>
        </ol>
      </Section>

      <Section id="validations" title="Login Validation Rules &amp; Error Messages">
        <p className="mb-3">The identity entry form enforces strict client-side and server-side validation rules:</p>
        <div className="space-y-3">
          <div className="p-3.5 rounded-lg border border-red-200 dark:border-red-900/30 bg-red-50/30 dark:bg-red-950/10">
            <p className="text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-wide">Invalid Format Error</p>
            <p className="text-xs text-ink-700 dark:text-slate-300 mt-0.5"><em>"Please enter a valid email address or phone number with country code."</em> — Triggered if input fails standard regex pattern checks.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-red-200 dark:border-red-900/30 bg-red-50/30 dark:bg-red-950/10">
            <p className="text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-wide">Unregistered Account Error</p>
            <p className="text-xs text-ink-700 dark:text-slate-300 mt-0.5"><em>"Account not found in registered company directory."</em> — Triggered when email/phone does not match any provisioned account.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-red-200 dark:border-red-900/30 bg-red-50/30 dark:bg-red-950/10">
            <p className="text-xs font-bold text-red-700 dark:text-red-400 uppercase tracking-wide">Throttling Limit Error</p>
            <p className="text-xs text-ink-700 dark:text-slate-300 mt-0.5"><em>"Too many code requests. Please wait 60 seconds before trying again."</em> — Triggered when more than 3 requests occur within 60 seconds.</p>
          </div>
        </div>
      </Section>

      <Section id="important-notes" title="Important Notes &amp; Security Rules">
        <Callout type="important">
          Requesting a new verification code immediately voids and invalidates all previously dispatched OTP codes for that user account. Always enter the most recently received code.
        </Callout>
      </Section>

      <Section id="best-practices" title="Best Practices">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Whitelisting:</strong> Request your IT department to add <code>no-reply@cargoclave.com</code> to corporate email safe senders to prevent spam filtering.</li>
          <li><strong>Shared Workstations:</strong> Always click Sign Out when ending a shift on shared terminal computers.</li>
        </ul>
      </Section>

      <Section id="troubleshooting" title="Troubleshooting &amp; FAQs">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200">Q: Why am I receiving an "Account Not Found" message?</h4>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-1">
              Your account may not have been provisioned yet by your organization administrator. Contact your supervisor to confirm account creation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200">Q: Can I sign in with a personal email address?</h4>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-1">
              No. System access is strictly enforced using corporate domain accounts registered under your organization tenant.
            </p>
          </div>
        </div>
      </Section>
    </DocPage>
  );
}
