import React from "react";
import { Link } from "react-router-dom";
import DocPage, { Section } from "../components/DocPage";
import Callout from "../components/Callout";
import DocMedia from "../components/DocMedia";
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
  { id: "purpose", label: "Business Purpose" },
  { id: "platform", label: "Platform & Portal Architecture" },
  { id: "users", label: "Supported User Profiles" },
  { id: "workflow", label: "High-Level Business Workflow" },
  { id: "core-modules", label: "Core System Modules" },
  { id: "steps", label: "First-Time User Onboarding Journey" },
  { id: "important-notes", label: "Important Notes & Integration Scope" },
  { id: "best-practices", label: "Operational Best Practices" },
  { id: "troubleshooting", label: "Troubleshooting & FAQs" },
  { id: "tutorial-video", label: "Tutorial Video" },
];

const modules = [
  {
    icon: LayoutDashboard,
    title: "Operations Dashboard",
    desc: "Provides real-time visibility into active survey contracts, key performance metrics, terminal check-ins, and SLA breach alerts.",
    to: "/operations/dashboard",
  },
  {
    icon: FileText,
    title: "Contract Management",
    desc: "Enables coordinators and planners to draft, validate, assign surveyors, and manage execution plans for shipping contracts.",
    to: "/operations/contracts",
  },
  {
    icon: ClipboardCheck,
    title: "Inspection Review",
    desc: "Provides quality assurance auditors with tools to verify GPS coordinates, inspect photo evidence, and approve or reject surveyor submissions.",
    to: "/operations/inspection-review",
  },
  {
    icon: Settings2,
    title: "Configuration Workspace",
    desc: "Contains the visual Survey Builder canvas, conditional logic engine, team allocation boards, and inspection template management.",
    to: "/configuration/surveys",
  },
  {
    icon: FileStack,
    title: "Reports Suite",
    desc: "Combines dynamic drag-and-drop Report Builder with automated PDF contract report generation for customer sign-off.",
    to: "/reports/report-builder",
  },
  {
    icon: History,
    title: "Logs & Analytics",
    desc: "Maintains comprehensive web UI activity trails and system-wide database audit records for full governance compliance.",
    to: "/logs/activity-logs",
  },
  {
    icon: Smartphone,
    title: "Mobile Surveyor App",
    desc: "Native mobile client enabling field surveyors to capture checklist entries, photographs, and GPS check-ins offline or at port berths.",
    to: "/mobile/overview",
  },
];

export default function Introduction() {
  return (
    <DocPage
      path="/"
      eyebrow="Getting Started"
      title="Introduction"
      description="Comprehensive user guide and operational manual for the CargoClave Surveyor Management System (SMS)."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>CargoClave Surveyor Management System (SMS)</strong> is an enterprise-grade port logistics platform designed to digitize cargo survey assignments, streamline field inspection collection, enforce SLA compliance, and generate verified customer inspection reports.
        </p>
        <p className="mt-3">
          By connecting back-office coordinators with field surveyors operating at port berths and container terminals, SMS replaces legacy paper-based checklists with a real-time, geotagged digital workflow.
        </p>
      </Section>

      <Section id="purpose" title="Business Purpose">
        <p>
          In global maritime trade, independent cargo inspection is critical for verifying shipment volume, condition, and compliance before and after vessel discharge. The Surveyor Management System addresses key industry challenges:
        </p>
        <ul className="list-disc pl-5 space-y-2 my-4">
          <li><strong>Discharge Delay Reduction:</strong> Real-time surveyor check-ins and live data sync eliminate delays in publishing discharge completion certificates.</li>
          <li><strong>Audit Integrity &amp; Dispute Mitigation:</strong> Geofenced GPS validation (1.0 km radius) and cryptographic audit trails eliminate fraudulent check-ins and evidence tampering.</li>
          <li><strong>SLA Monitoring:</strong> Automated SLA breach notifications notify operational managers before customer contract deadlines are compromised.</li>
          <li><strong>Standardized Reporting:</strong> Automated PDF report generation ensures consistent customer branding and compliance across global operations.</li>
        </ul>
      </Section>

      <Section id="platform" title="Platform &amp; Portal Architecture">
        <p>
          The Surveyor Management System operates as an core module within the broader <strong>CargoClave Enterprise Ecosystem</strong>:
        </p>
        <div className="my-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-ink-900/10 dark:border-white/10 p-5 bg-ink-900/[0.01] dark:bg-white/[0.02]">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-signal-50 dark:bg-signal-900/40 text-signal-600 dark:text-signal-400 font-bold text-xs mb-3">
              PORTAL
            </span>
            <h4 className="font-semibold text-ink-900 dark:text-slate-100 text-sm mb-1">CargoClave Central Portal</h4>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400">
              Provides Single Sign-On (SSO), organization tenant switching, user account provisioning, role assignment, and master data management (Port Terminals, Customer Registries, Vessel Masters).
            </p>
          </div>
          <div className="rounded-xl border border-ink-900/10 dark:border-white/10 p-5 bg-ink-900/[0.01] dark:bg-white/[0.02]">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-signal-50 dark:bg-signal-900/40 text-signal-600 dark:text-signal-400 font-bold text-xs mb-3">
              SMS
            </span>
            <h4 className="font-semibold text-ink-900 dark:text-slate-100 text-sm mb-1">Surveyor Management System</h4>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400">
              Dedicated operational workspace for contract planning, surveyor dispatch, mobile checklist execution, quality review, and final PDF report generation.
            </p>
          </div>
        </div>
      </Section>

      <Section id="users" title="Supported User Profiles">
        <p>
          The system provides tailored interfaces and permission levels for four primary operational roles:
        </p>
        <div className="my-4 space-y-3">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-950">
            <p className="font-semibold text-sm text-ink-900 dark:text-slate-100">1. Field Surveyor</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-0.5">Operates the Mobile Surveyor App at port berths. Captures inspection entries, container seal checks, damage photos, and recipient signatures.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-950">
            <p className="font-semibold text-sm text-ink-900 dark:text-slate-100">2. Operational Coordinator</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-0.5">Operates the web console. Registers shipping contracts, creates execution plans, assigns surveyor teams, and monitors daily terminal throughput.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-950">
            <p className="font-semibold text-sm text-ink-900 dark:text-slate-100">3. Quality Manager / Reviewer</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-0.5">Audits submitted checklists in the Inspection Review console, checks GPS distance compliance, approves completed surveys, or requests revisions.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-white/10 bg-white dark:bg-ink-950">
            <p className="font-semibold text-sm text-ink-900 dark:text-slate-100">4. System Administrator</p>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-0.5">Configures survey templates, sets up conditional logic rules, manages team structures, and reviews security audit logs.</p>
          </div>
        </div>
      </Section>

      <Section id="workflow" title="High-Level Business Workflow">
        <p className="mb-4">
          Every cargo survey follows a strict 6-stage lifecycle across the platform:
        </p>
        <ol className="list-decimal pl-5 space-y-3 text-[14px] leading-6 text-ink-750 dark:text-slate-300">
          <li><strong>Template Creation:</strong> Administrator designs an Inspection Template in the Survey Builder.</li>
          <li><strong>Contract Dispatch:</strong> Coordinator registers a new Contract, selects the template, and assigns a Field Surveyor.</li>
          <li><strong>Mobile Execution:</strong> Surveyor receives push dispatch notification on the Mobile App, arrives at port, verifies GPS location, and completes checklist steps.</li>
          <li><strong>Submission &amp; Sync:</strong> Surveyor submits completed inspection entries to the cloud gateway.</li>
          <li><strong>Quality Audit:</strong> Reviewer inspects submitted evidence, checks GPS tolerance, and approves or requests revision.</li>
          <li><strong>Report Finalization:</strong> Approved data compiles into a branded PDF report for customer delivery.</li>
        </ol>
      </Section>

      <Section id="core-modules" title="Core System Modules">
        <p className="mb-6">
          Explore the documentation for each functional area of the platform:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {modules.map((m) => (
            <Link
              key={m.to}
              to={m.to}
              className="group rounded-xl border border-ink-900/10 dark:border-white/10 p-5 hover:border-signal-300 dark:hover:border-signal-600 hover:shadow-card dark:hover:bg-white/[0.02] transition-all"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-signal-50 dark:bg-signal-900/40 text-signal-600 dark:text-signal-400 group-hover:bg-signal-100 dark:group-hover:bg-signal-900/60 transition-colors">
                <m.icon size={19} />
              </span>
              <p className="mt-3.5 font-display text-[15px] font-semibold text-ink-900 dark:text-slate-100">
                {m.title}
              </p>
              <p className="mt-1 text-[13.5px] leading-6 text-ink-650 dark:text-slate-400">
                {m.desc}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="steps" title="First-Time User Onboarding Journey">
        <p className="mb-3">New users should complete the following steps to get started:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Obtain account provisioning from your organization administrator.</li>
          <li>Review the <Link to="/getting-started/sign-in">Sign In guide</Link> for passwordless OTP access.</li>
          <li>Complete verification and launch the SMS application card from the <Link to="/getting-started/launch">CargoClave Portal</Link>.</li>
          <li>Familiarize yourself with your role permissions in the <Link to="/getting-started/roles">Roles &amp; Access guide</Link>.</li>
          <li>Access the <Link to="/operations/dashboard">Operations Dashboard</Link> to view live operational metrics.</li>
        </ol>
      </Section>

      <Section id="important-notes" title="Important Notes &amp; Integration Scope">
        <Callout type="note">
          Master data entities (vessel registers, port berth definitions, customer tax details) are synchronized automatically from CargoClave Master Management. Read-only fields cannot be edited directly within the SMS workspace.
        </Callout>
      </Section>

      <Section id="best-practices" title="Operational Best Practices">
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Browser Compatibility:</strong> Use modern Evergreen browsers (Chrome, Edge, Safari, Firefox) for the coordinator web console.</li>
          <li><strong>Mobile Sync:</strong> Field surveyors should perform a manual sync on the mobile app before entering low-connectivity port berths.</li>
          <li><strong>Theme Preference:</strong> Dark mode can be toggled via the Top Bar theme switch to reduce eye strain during night shifts.</li>
        </ul>
      </Section>

      <Section id="troubleshooting" title="Troubleshooting &amp; FAQs">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200">Q: Why cannot I edit port terminal names in the contract wizard?</h4>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-1">
              Port terminal master data is maintained centrally in CargoClave Master Management. Contact your master data administrator to add or update terminal definitions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-ink-900 dark:text-slate-200">Q: What happens if a surveyor loses cellular connectivity during an inspection?</h4>
            <p className="text-xs leading-5 text-ink-650 dark:text-slate-400 mt-1">
              The Mobile Surveyor App stores checklist data, photos, and geotags locally in encrypted storage. All entries automatically sync to the server once cellular or Wi-Fi connectivity is restored.
            </p>
          </div>
        </div>
      </Section>

      <Section id="tutorial-video" title="Tutorial Video">
        <DocMedia
          mediaId="introduction-tutorial-video"
          caption="System Introduction Video Tutorial"
        />
      </Section>
    </DocPage>
  );
}
