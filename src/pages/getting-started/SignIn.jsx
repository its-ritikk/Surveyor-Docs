import React from "react";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "before-you-begin", label: "Before you begin" },
  { id: "how-to-login", label: "How to log in" },
  { id: "entering-code", label: "Entering the verification code" },
  { id: "after-login", label: "After logging in" },
  { id: "common-questions", label: "Common questions" },
];

export default function SignIn() {
  return (
    <DocPage
      path="/getting-started/sign-in"
      eyebrow="Getting Started"
      title="Sign In & Verification"
      description="How to log in to the CargoClave portal using your email address or phone number and confirm your identity with a verification code."
      toc={toc}
      hideVideo={true}
    >
      <Section id="overview" title="Overview">
        <p>
          Logging in to CargoClave is quick and straightforward. You do not need to remember a password. Instead, you enter your registered email address or phone number, and the system sends you a 6-digit verification code. Once you enter that code, you are granted access to the portal.
        </p>
        <p className="mt-3">
          This two-step process keeps your account secure — only someone with access to your inbox or mobile device can complete the login.
        </p>
      </Section>

      <Section id="before-you-begin" title="Before you begin">
        <p>Make sure the following are in place before logging in:</p>
        <ul className="list-disc pl-5 space-y-2 my-3">
          <li><strong>Your account has been set up:</strong> Your email address or phone number must already be registered in the system by your company administrator.</li>
          <li><strong>Your company is active:</strong> Your organization must have an active subscription to the Surveyor Management System.</li>
          <li><strong>You can receive messages:</strong> You need access to the email inbox or mobile phone linked to your account to receive the verification code.</li>
        </ul>
        <Callout type="note">
          If you are unsure whether your account has been created, contact your company's Portal Administrator.
        </Callout>
      </Section>

      <Section id="how-to-login" title="How to log in">
        <p>Follow these steps to log in to the portal:</p>
        <ol className="list-decimal pl-5 space-y-3 my-3">
          <li>Open your web browser and go to <strong>portal.cargoclave.com</strong>, or open the Mobile Surveyor App on your device.</li>
          <li>On the login screen, enter your registered <strong>email address</strong> or <strong>phone number</strong> (with country code if using a phone number).</li>
          <li>Double-check there are no typing mistakes in what you entered.</li>
          <li>Click the <strong>Continue</strong> button.</li>
          <li>The system will send a 6-digit code to your email inbox or as an SMS to your phone. This happens within a few seconds.</li>
        </ol>

        <div className="my-4 grid gap-3 sm:grid-cols-2">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.02]">
            <p className="font-semibold text-sm text-ink-900 dark:text-slate-100">Using your email address</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-1">Enter your company email address (for example, <code>john.doe@maritimesurveys.com</code>). Recommended for coordinators, supervisors, and administrators working from a computer.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.02]">
            <p className="font-semibold text-sm text-ink-900 dark:text-slate-100">Using your phone number</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-1">Enter your mobile number with the country code (for example, <code>+1 555 019 2834</code>). Recommended for field surveyors using the mobile app.</p>
          </div>
        </div>

        <div className="space-y-3 mt-4">
          <div className="p-3.5 rounded-lg border border-red-200 dark:border-red-900/30 bg-red-50/30 dark:bg-red-950/10">
            <p className="text-xs font-bold text-red-700 dark:text-red-400">Incorrect format</p>
            <p className="text-xs text-ink-700 dark:text-slate-300 mt-0.5"><em>"Please enter a valid email address or phone number with country code."</em> — Check that your email or phone number is correctly typed.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-red-200 dark:border-red-900/30 bg-red-50/30 dark:bg-red-950/10">
            <p className="text-xs font-bold text-red-700 dark:text-red-400">Account not found</p>
            <p className="text-xs text-ink-700 dark:text-slate-300 mt-0.5"><em>"Account not found in registered company directory."</em> — Your details are not registered in the system. Contact your administrator.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-red-200 dark:border-red-900/30 bg-red-50/30 dark:bg-red-950/10">
            <p className="text-xs font-bold text-red-700 dark:text-red-400">Too many attempts</p>
            <p className="text-xs text-ink-700 dark:text-slate-300 mt-0.5"><em>"Too many code requests. Please wait 60 seconds before trying again."</em> — Wait a moment before requesting another code.</p>
          </div>
        </div>
      </Section>

      <Section id="entering-code" title="Entering the verification code">
        <p>
          After clicking <strong>Continue</strong>, you will be taken to a verification screen. A 6-digit code will be sent to your email or phone. Here is what to do next:
        </p>
        <ol className="list-decimal pl-5 space-y-3 my-3">
          <li>Check your email inbox or SMS messages for a message from CargoClave containing the code.</li>
          <li>The code looks like this: <code>849 201</code> — six digits sent as a single message.</li>
          <li>Type the 6 digits into the boxes on the verification screen. The cursor moves between boxes automatically as you type.</li>
          <li>If the system does not submit automatically, click the <strong>Verify &amp; Sign In</strong> button.</li>
          <li>If the code has expired or you did not receive it, click <strong>Resend Code</strong> to get a fresh one.</li>
        </ol>

        <div className="my-4 grid gap-3 sm:grid-cols-3">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.02]">
            <p className="font-bold text-xs text-signal-600 dark:text-signal-400">6 digits</p>
            <p className="text-xs text-ink-650 dark:text-slate-400 mt-1">The code is always 6 numbers — no letters or special characters.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.02]">
            <p className="font-bold text-xs text-amber-600 dark:text-amber-400">5-minute window</p>
            <p className="text-xs text-ink-650 dark:text-slate-400 mt-1">The code is only valid for 5 minutes. Enter it promptly after receiving it.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.01] dark:bg-white/[0.02]">
            <p className="font-bold text-xs text-red-600 dark:text-red-400">One-time use</p>
            <p className="text-xs text-ink-650 dark:text-slate-400 mt-1">Each code can only be used once. If you request a new code, the previous one is no longer valid.</p>
          </div>
        </div>

        <div className="space-y-3 mt-4">
          <div className="p-3.5 rounded-lg border border-green-200 dark:border-green-900/30 bg-green-50/30 dark:bg-green-950/10">
            <p className="text-xs font-bold text-green-700 dark:text-green-400">Successful verification</p>
            <p className="text-xs text-ink-700 dark:text-slate-300 mt-0.5">The code matched. You are logged in and will be taken to the CargoClave portal home screen.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-red-200 dark:border-red-900/30 bg-red-50/30 dark:bg-red-950/10">
            <p className="text-xs font-bold text-red-700 dark:text-red-400">Wrong code</p>
            <p className="text-xs text-ink-700 dark:text-slate-300 mt-0.5"><em>"Incorrect verification code. Please check your message and try again."</em> — Check you typed the digits correctly and try again.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-red-200 dark:border-red-900/30 bg-red-50/30 dark:bg-red-950/10">
            <p className="text-xs font-bold text-red-700 dark:text-red-400">Code has expired</p>
            <p className="text-xs text-ink-700 dark:text-slate-300 mt-0.5"><em>"Verification code has expired. Click 'Resend Code' for a new code."</em> — Click <strong>Resend Code</strong> to receive a fresh one.</p>
          </div>
        </div>

        <Callout type="warning">
          Never share your verification code with anyone — including colleagues or support staff. CargoClave will never ask you for your code.
        </Callout>
      </Section>

      <Section id="after-login" title="After logging in">
        <p>Once you have successfully entered the code, you are logged in to the portal. Your session will remain active for the following durations:</p>
        <ul className="list-disc pl-5 space-y-2 my-3">
          <li><strong>Web portal:</strong> Your session stays active for up to 8 hours. If you are inactive for this period, you will need to log in again.</li>
          <li><strong>Mobile app:</strong> Your session stays active for 24 hours, allowing you to work in the field without repeated logins.</li>
        </ul>
        <p>
          Your session is linked to your specific company and the role assigned to you by your administrator. If your access level changes, simply log out and log back in to see the updated access.
        </p>
      </Section>

      <Section id="common-questions" title="Common questions">
        <div className="space-y-4">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">
              Why am I receiving an "Account Not Found" message?
            </p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              Make sure you entered the exact email address or phone number that was registered for you. If the problem continues, contact your company's Portal Administrator to confirm your account has been set up.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">
              I did not receive a verification code. What should I do?
            </p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              First, check your spam or junk folder if you used an email address. Codes typically arrive within a few seconds. If still not received, click <strong>Resend Code</strong> on the verification screen to request a new one.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">
              The code expired before I could enter it. What now?
            </p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              Click the <strong>Resend Code</strong> button on the verification screen. A new code will be sent to your email or phone immediately. Note that requesting a new code cancels any previously sent codes.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">
              Can I use a personal email address to log in?
            </p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              No. Only the email address or phone number registered by your company administrator will work. Personal email addresses are not accepted.
            </p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">
              How do I request access to additional features?
            </p>
            <p className="text-xs leading-5 text-ink-650 dark:text-[#A3A3A3] mt-1">
              Contact your company's Portal Administrator. Once they update your role in the CargoClave portal, refresh your browser or restart the app to see the new features.
            </p>
          </div>
        </div>
      </Section>
    </DocPage>
  );
}
