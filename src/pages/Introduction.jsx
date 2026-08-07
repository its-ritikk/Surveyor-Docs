import React from "react";
import { Link } from "react-router-dom";
import DocPage, { Section } from "../components/DocPage";
import Callout from "../components/Callout";
import {
  LayoutDashboard,
  FileText,
  ClipboardCheck,
  Settings2,
  FileStack,
  History,
  Smartphone,
} from "lucide-react";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "purpose", label: "Why Use CargoClave SMS?" },
  { id: "platform", label: "How CargoClave Fits Into Your Operations" },
  { id: "users", label: "Who Uses CargoClave?" },
  { id: "workflow", label: "The Complete Inspection Process" },
  { id: "core-modules", label: "System Sections" },
  { id: "steps", label: "First-Time User Setup Guide" },
  { id: "important-notes", label: "Important Information" },
  { id: "troubleshooting", label: "Common Questions" },
];

const modules = [
  {
    icon: LayoutDashboard,
    title: "Operations Overview",
    desc: "View active survey contracts, key operational stats, terminal activity, and deadline alerts at a glance.",
    to: "/operations/dashboard",
  },
  {
    icon: FileText,
    title: "Contract Management",
    desc: "Create shipping contracts, set up inspection plans, assign surveyors, and track work progress.",
    to: "/operations/contracts",
  },
  {
    icon: ClipboardCheck,
    title: "Inspection Review",
    desc: "Review submitted checklists, inspect photo evidence, and approve or request updates from surveyors.",
    to: "/operations/inspection-review",
  },
  {
    icon: Settings2,
    title: "Setup Workspace",
    desc: "Design survey checklists, set required rules, manage team assignments, and organize templates.",
    to: "/configuration/surveys",
  },
  {
    icon: FileStack,
    title: "Reports Suite",
    desc: "Build custom report templates and automatically generate customer inspection reports for sign-off.",
    to: "/reports/report-builder",
  },
  {
    icon: History,
    title: "Logs & Analytics",
    desc: "Review complete system audit records and logs for governance and compliance.",
    to: "/logs/overview",
  },
  {
    icon: Smartphone,
    title: "Mobile Survey App",
    desc: "Perform offline field inspections, capture photos, and sync data seamlessly with the web portal.",
    to: "/mobile/overview",
  },
];

export default function Introduction() {
  return (
    <DocPage
      path="/introduction"
      eyebrow="Getting Started"
      title="Welcome to CargoClave SMS"
      description="Your complete guide to managing maritime cargo inspections, survey checklists, contract workflows, and customer reports in one unified system."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          <strong>CargoClave Surveyor Management System (SMS)</strong> is an enterprise web and mobile platform built for maritime cargo inspection companies, survey agencies, and port logistics teams. It connects field surveyors conducting on-site vessel checks with office coordinators managing contracts, quality assurance, and client reporting.
        </p>
      </Section>

      <Section id="purpose" title="Why Use CargoClave SMS?">
        <p>
          Independent cargo inspection is essential for confirming cargo quantities, condition, and quality during vessel loading and unloading. CargoClave SMS makes this process simple and reliable:
        </p>
        <ul className="list-disc pl-5 space-y-2 my-4">
          <li><strong>Faster Vessel Discharge:</strong> Instant data sync between mobile surveyors and office staff speeds up the creation of discharge completion reports.</li>
          <li><strong>Reliable Dispute Prevention:</strong> Automated time-stamped inspection records protect against missing data and dispute claims.</li>
          <li><strong>Deadline Monitoring:</strong> Automatic alerts warn operations managers before customer deadlines are missed.</li>
          <li><strong>Professional Customer Reports:</strong> Clear, standardized report formats ensure consistent company branding for global clients.</li>
        </ul>
      </Section>

      <Section id="platform" title="How CargoClave Fits Into Your Operations">
        <p>
          CargoClave SMS works seamlessly within your company's broader operational system:
        </p>
        <div className="my-5 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
          <div className="flex flex-col justify-between rounded-xl border border-ink-900/10 dark:border-white/10 p-5 bg-ink-900/[0.01] dark:bg-white/[0.02] min-w-0 h-full">
            <div>
              <span className="inline-flex items-center justify-center rounded-md px-2.5 py-1 w-fit bg-signal-50 dark:bg-signal-900/40 text-signal-600 dark:text-signal-400 font-bold text-[11px] uppercase tracking-wider mb-3 select-none">
                CENTRAL PORTAL
              </span>
              <h4 className="font-semibold text-ink-900 dark:text-slate-100 text-sm mb-1 break-words">CargoClave Central Portal</h4>
              <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 break-words">
                Handles user logins, team member setup, role assignments, and master records like Port Terminals, Customer Lists, and Vessel Registers.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-xl border border-ink-900/10 dark:border-white/10 p-5 bg-ink-900/[0.01] dark:bg-white/[0.02] min-w-0 h-full">
            <div>
              <span className="inline-flex items-center justify-center rounded-md px-2.5 py-1 w-fit bg-signal-50 dark:bg-signal-900/40 text-signal-600 dark:text-signal-400 font-bold text-[11px] uppercase tracking-wider mb-3 select-none">
                SMS
              </span>
              <h4 className="font-semibold text-ink-900 dark:text-slate-100 text-sm mb-1 break-words">Surveyor Management System</h4>
              <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 break-words">
                Your primary workspace for creating contracts, dispatching surveyors, performing mobile inspections, auditing quality, and sharing final reports.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="users" title="Who Uses CargoClave?">
        <p>
          The system provides easy-to-use views customized for three main job roles:
        </p>
        <div className="my-4 space-y-3">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-950">
            <p className="font-semibold text-sm text-ink-900 dark:text-slate-100">1. Field Surveyor</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-0.5">Uses the Mobile App at the port berth to fill in checklists, record seal numbers, snap damage photos, and collect customer signatures.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-950">
            <p className="font-semibold text-sm text-ink-900 dark:text-slate-100">2. Operations Coordinator</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-0.5">Uses the web workspace to register shipping contracts, build inspection plans, assign field surveyors, review submissions, and monitor daily progress.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-950">
            <p className="font-semibold text-sm text-ink-900 dark:text-slate-100">3. System Administrator</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-0.5">Creates survey templates, sets required checklist rules, manages user access, and oversees system security.</p>
          </div>
        </div>
      </Section>

      <Section id="workflow" title="The Complete Inspection Process">
        <p className="mb-4">
          Every inspection follows simple steps from start to finish:
        </p>
        <ol className="list-decimal pl-5 space-y-3 text-[14px] leading-6 text-ink-750 dark:text-slate-300">
          <li><strong>Template Creation:</strong> An Administrator builds a reusable survey checklist template.</li>
          <li><strong>Contract Setup:</strong> A Coordinator creates a contract, links the checklist template, and assigns a Field Surveyor.</li>
          <li><strong>Mobile Inspection:</strong> The Surveyor gets a mobile notification, goes to the port, and completes the checklist steps.</li>
          <li><strong>Data Submission:</strong> The Surveyor submits the completed checklist and photos right from the mobile app.</li>
          <li><strong>Operations Review:</strong> A Coordinator checks the submitted answers and photo evidence, then approves the survey.</li>
          <li><strong>Report Delivery:</strong> The system creates a clean, branded inspection report ready for the customer.</li>
        </ol>
      </Section>

      <Section id="core-modules" title="System Sections">
        <p className="mb-6">
          Explore the guides for each area of the CargoClave system:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
          {modules.map((m) => (
            <Link
              key={m.to}
              to={m.to}
              className="group flex flex-col justify-between rounded-xl border border-ink-900/10 dark:border-white/10 p-5 hover:border-signal-300 dark:hover:border-signal-600 hover:shadow-card dark:hover:bg-white/[0.02] transition-all min-w-0 h-full"
            >
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-signal-50 dark:bg-signal-900/40 text-signal-600 dark:text-signal-400 group-hover:bg-signal-100 dark:group-hover:bg-signal-900/60 transition-colors select-none">
                  <m.icon size={19} />
                </span>
                <p className="mt-3.5 font-display text-[15px] font-semibold text-ink-900 dark:text-slate-100 break-words">
                  {m.title}
                </p>
                <p className="mt-1 text-[13.5px] leading-6 text-ink-650 dark:text-slate-400 break-words">
                  {m.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="steps" title="First-Time User Setup Guide">
        <p className="mb-3">New to CargoClave? Follow these quick steps to get started:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Ask your administrator to set up your user account.</li>
          <li>Read the <Link to="/getting-started/sign-in">Sign In guide</Link> to log in securely with a one-time password (OTP).</li>
          <li>Open the SMS application card from the <Link to="/getting-started/launch">CargoClave Portal</Link>.</li>
          <li>Check your access rights in the <Link to="/getting-started/roles">Roles &amp; Access guide</Link>.</li>
          <li>Go to the <Link to="/operations/dashboard">Operations Overview</Link> to see live inspection stats.</li>
        </ol>
      </Section>

      <Section id="important-notes" title="Important Information">
        <Callout type="note">
          Core operational records (such as vessel lists, port berth locations, and customer names) are updated automatically from Central Management. If you need to edit these items, contact your master data manager.
        </Callout>
      </Section>

      <Section id="troubleshooting" title="Common Questions">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200">Why cannot I edit port terminal names in the contract wizard?</h4>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-1">
              Port names are managed centrally to avoid typos across contracts. Contact your master data manager to add or update terminal entries.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200">What happens if a surveyor loses mobile signal during an inspection?</h4>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-1">
              The mobile app saves all checklist responses and photos securely on the phone. Once internet connectivity returns, the app automatically uploads everything to the system.
            </p>
          </div>
        </div>
      </Section>
    </DocPage>
  );
}
