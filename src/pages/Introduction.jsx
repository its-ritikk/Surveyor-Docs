import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  ClipboardCheck,
  Settings2,
  FileStack,
  History,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const modules = [
  {
    icon: LayoutDashboard,
    title: "Operations Dashboard",
    desc: "Live KPI cards, weekly performance chart, SLA alerts, and quick actions.",
    to: "/operations/dashboard",
  },
  {
    icon: FileText,
    title: "Contract Management",
    desc: "Create, view, and edit survey contracts through a guided, validated wizard.",
    to: "/operations/contracts",
  },
  {
    icon: ClipboardCheck,
    title: "Inspection Review",
    desc: "Review submitted field inspections, verify GPS, approve or reject.",
    to: "/operations/inspection-review",
  },
  {
    icon: Settings2,
    title: "Configuration",
    desc: "Survey Builder, Teams Management, and Inspection Templates.",
    to: "/configuration/surveys",
  },
  {
    icon: FileStack,
    title: "Reports",
    desc: "Report Builder, Contract Reports, and the Reports Viewer.",
    to: "/reports/report-builder",
  },
  {
    icon: History,
    title: "Logs & Analytics",
    desc: "Activity Logs and Audit Logs for full operational traceability.",
    to: "/logs/activity-logs",
  },
  {
    icon: Smartphone,
    title: "Mobile Surveyor App",
    desc: "The field companion app surveyors use to capture and submit surveys.",
    to: "/mobile/overview",
  },
];

export default function Introduction() {
  return (
    <div className="max-w-4xl mx-auto">
      <p className="text-[13px] font-semibold text-signal-600 dark:text-signal-500 tracking-wide uppercase mb-3">
        Surveyor Management System · User Guide
      </p>
      <h1 className="font-display text-4xl md:text-[44px] font-bold text-ink-900 dark:text-slate-100 leading-[1.1] tracking-tight">
        Everything you need to run
        <br className="hidden md:block" /> cargo surveys, end to end.
      </h1>
      <p className="mt-5 max-w-2xl text-[17px] leading-8 text-ink-700/85 dark:text-slate-300/85">
        This is the complete documentation for the{" "}
        <strong className="text-ink-900 dark:text-slate-100">Surveyor Management System</strong>, the operations module of CargoClave used
        by surveyors, coordinators, managers, and administrators to plan,
        execute, review, and report on cargo survey contracts — on the web
        and in the field.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/getting-started/sign-in"
          className="inline-flex items-center gap-2 rounded-lg bg-ink-900 dark:bg-signal-600 px-5 py-3 text-[14px] font-semibold text-white hover:bg-ink-800 dark:hover:bg-signal-700 transition-colors"
        >
          Get started <ArrowRight size={16} />
        </Link>
        <Link
          to="/operations/contracts"
          className="inline-flex items-center gap-2 rounded-lg border border-ink-900/15 dark:border-white/15 px-5 py-3 text-[14px] font-semibold text-ink-800 dark:text-slate-200 hover:border-signal-300 dark:hover:border-signal-600 hover:bg-signal-50/50 dark:hover:bg-signal-900/20 transition-colors"
        >
          Jump to Contract Management
        </Link>
      </div>
      
      <h2 className="font-display text-xl font-semibold text-ink-900 dark:text-slate-100 mt-14 mb-2">
        What this guide covers
      </h2>
      <p className="text-[15px] leading-7 text-ink-700/90 dark:text-slate-300/90 max-w-2xl mb-8">
        Every module in the current Surveyor Management System, mapped
        directly to what you'll click on screen — the Operations console, the
        Configuration workspace, the Reports suite, Logs &amp; Analytics, and
        the Mobile Surveyor App used by field teams.
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
            <p className="mt-1 text-[13.5px] leading-6 text-ink-600 dark:text-slate-400">
              {m.desc}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-14 rounded-xl border border-ink-900/10 dark:border-white/10 bg-ink-900/[0.02] dark:bg-white/[0.02] p-6">
        <h3 className="font-display text-[15px] font-semibold text-ink-900 dark:text-slate-100 mb-2">
          Scope of this documentation
        </h3>
        <p className="text-[14px] leading-7 text-ink-700/90 dark:text-slate-300/90 mb-3">
          This guide documents the operational Surveyor Management System
          only — Operations, Configuration, Reports, Logs &amp; Analytics, and
          the Mobile Surveyor App. Data that has moved to shared platform
          services is documented separately in their own guides:
        </p>
        <ul className="space-y-1.5 pl-5 list-disc marker:text-signal-500 text-[14px] leading-7 text-ink-700/90 dark:text-slate-300/90">
          <li>
            <strong className="text-ink-900 dark:text-slate-100">Master data</strong> (Parties, Ports, Items, Container
            Sizes, Packaging Types, Party Types) now lives in{" "}
            <strong className="text-ink-900 dark:text-slate-100">Master Management</strong> — see the Master Management
            documentation.
          </li>
          <li>
            <strong className="text-ink-900 dark:text-slate-100">Clients, Users, Roles &amp; Permissions, and
            Authentication/Authorization</strong> are managed centrally from
            the <strong className="text-ink-900 dark:text-slate-100">CargoClave Portal</strong> — see the Portal
            documentation.
          </li>
        </ul>
      </div>
    </div>
  );
}
