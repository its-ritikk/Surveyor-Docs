import React from "react";
import { Link } from "react-router-dom";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "purpose", label: "Purpose & Single Sign-On (SSO)" },
  { id: "workflow", label: "Application Launch Workflow" },
  { id: "steps", label: "Step-by-Step Instructions" },
  { id: "applications", label: "Available Applications & Subscription Statuses" },
  { id: "landing", label: "Landing Dashboard & First Screen Overview" },
  { id: "important-notes", label: "Important Notes & Workspace Selection" },
  { id: "troubleshooting", label: "Common Questions" },
];

export default function Launch() {
  return (
    <DocPage
      path="/getting-started/launch"
      eyebrow="Getting Started"
      title="Launching Surveyor App"
      description="Accessing the central CargoClave Portal, selecting authorized application cards, and landing on the Operations Dashboard."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          Upon completing authentication on the <Link to="/getting-started/sign-in">Sign In</Link> and <Link to="/getting-started/verification">Verification</Link> screens, users arrive at the <strong>CargoClave Central Portal</strong>. The portal acts as a Single Sign-On (SSO) hub and application launcher for all subscribed products within your company workspace.
        </p>
      </Section>

      <Section id="purpose" title="Purpose &amp; Single Sign-On (SSO)">
        <p>
          The portal launcher provides centralized access control, ensuring users only see application cards for products authorized under their active organization tenant and subscription plan.
        </p>
      </Section>

      <Section id="workflow" title="Application Launch Workflow">
        <ol className="list-decimal pl-5 space-y-2.5 text-[14px]">
          <li><strong>Workspace Validation:</strong> User confirms active organization workspace in the top navigation menu.</li>
          <li><strong>Card Selection:</strong> User locates the <strong>Surveyor Management System</strong> application card in the grid.</li>
          <li><strong>Status Verification:</strong> User verifies that the card subscription status displays as <code>Active</code>.</li>
          <li><strong>Redirection:</strong> User clicks <strong>Launch App</strong> to open the Surveyor Management System landing dashboard.</li>
        </ol>
      </Section>

      <Section id="steps" title="Step-by-Step Instructions">
        <ol className="list-decimal pl-5 space-y-3">
          <li>Log in to <code>portal.cargoclave.com</code> using your OTP verification code.</li>
          <li>In the top bar header, check the <strong>Active Organization</strong> dropdown. If your company manages multiple entities, select the target terminal company.</li>
          <li>Locate the <strong>Surveyor Management System</strong> card in the Application Grid.</li>
          <li>Ensure the green <strong>Active</strong> badge is visible on the card.</li>
          <li>Click the <strong>Launch App</strong> button on the card.</li>
          <li>Your browser will launch the web application console, displaying the <Link to="/operations/dashboard">Operations Dashboard</Link>.</li>
        </ol>
      </Section>

      <Section id="applications" title="Available Applications &amp; Subscription Statuses">
        <p className="mb-3">Application cards display one of three subscription indicators:</p>
        <div className="my-4 space-y-3">
          <div className="p-3.5 rounded-lg border border-green-200 dark:border-green-900/30 bg-green-50/30 dark:bg-green-950/10">
            <span className="px-2 py-0.5 rounded bg-green-500/20 text-green-700 dark:text-green-300 font-bold text-xs uppercase tracking-wider">Active</span>
            <p className="text-xs text-ink-700 dark:text-slate-300 mt-1.5">Application is fully licensed and enabled for your organization. The "Launch App" button is active.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-amber-200 dark:border-amber-900/30 bg-amber-50/30 dark:bg-amber-950/10">
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300 font-bold text-xs uppercase tracking-wider">Trial</span>
            <p className="text-xs text-ink-700 dark:text-slate-300 mt-1.5">Application is operating under a temporary evaluation license. Shows days remaining before expiry.</p>
          </div>
          <div className="p-3.5 rounded-lg border border-ink-900/10 dark:border-white/10 bg-ink-900/5 dark:bg-white/5">
            <span className="px-2 py-0.5 rounded bg-ink-900/10 dark:bg-white/15 text-ink-600 dark:text-slate-400 font-bold text-xs uppercase tracking-wider">Not Subscribed</span>
            <p className="text-xs text-ink-700 dark:text-slate-300 mt-1.5">Application is not licensed under the selected tenant. Launch button is disabled with contact sales link.</p>
          </div>
        </div>
      </Section>

      <Section id="landing" title="Landing Dashboard &amp; First Screen Overview">
        <p>
          When you launch the Surveyor Management System, the application opens directly to the <Link to="/operations/dashboard">Operations Dashboard</Link>.
        </p>
        <p className="mt-3">The first screen layout includes:</p>
        <ul className="list-disc pl-5 space-y-2 my-3 text-[13.5px]">
          <li><strong>Top Navigation Bar:</strong> Features breadcrumbs and quick global search (Ctrl+K).</li>
          <li><strong>Left Sidebar:</strong> Navigation tree categorized by Operations, Configuration, Reports, Logs, and Reference.</li>
          <li><strong>Main Operations Panel:</strong> Metric monitoring KPI cards, 7-day dispatch chart, recent alerts, and quick actions.</li>
          <li><strong>On This Page Sidebar:</strong> Table of Contents anchors for quick scrolling within long documentation and operational views.</li>
        </ul>
      </Section>

      <Section id="important-notes" title="Important Notes &amp; Workspace Selection">
        <Callout type="note">
          If the Surveyor card does not appear on your launcher dashboard or shows "Not Subscribed", verify that you have selected the correct corporate entity in the top navigation organization selector.
        </Callout>
      </Section>

      <Section id="troubleshooting" title="Common Questions">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200">Why is the "Launch App" button disabled?</h4>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-1">
              The Launch button is disabled if your organization's subscription has expired or if your user role has not been granted access by an administrator.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200">How do I switch to another company tenant?</h4>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-1">
              Click your organization name in the top right header of the portal to open the company switcher dropdown.
            </p>
          </div>
        </div>
      </Section>
    </DocPage>
  );
}
