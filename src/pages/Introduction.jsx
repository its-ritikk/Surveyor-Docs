import React from "react";
import { Link } from "react-router-dom";
import DocPage, { Section } from "../components/DocPage";
import {
  LayoutDashboard,
  FileText,
  ClipboardCheck,
  Settings2,
  FileStack,
  History,
  Smartphone,
} from "lucide-react";

const modules = [
  {
    icon: LayoutDashboard,
    title: "Operations dashboard",
    desc: "Provides real-time visibility into active survey contracts, key performance metrics, and pending alerts.",
    to: "/operations/dashboard",
  },
  {
    icon: FileText,
    title: "Contract management",
    desc: "Allows coordinates and managers to draft, validate, and activate shipping contracts.",
    to: "/operations/contracts",
  },
  {
    icon: ClipboardCheck,
    title: "Inspection review",
    desc: "Supports audits of submitted surveyor checklists, verifying geotags and upload attachments.",
    to: "/operations/inspection-review",
  },
  {
    icon: Settings2,
    title: "Configuration workspace",
    desc: "Contains the Survey Builder canvas and teams allocation boards.",
    to: "/configuration/surveys",
  },
  {
    icon: FileStack,
    title: "Reports suite",
    desc: "Combines the Report Builder with consolidated contract finalization outputs.",
    to: "/reports/report-builder",
  },
  {
    icon: History,
    title: "Logs and analytics",
    desc: "Maintains user interaction records and database action audit histories.",
    to: "/logs/activity-logs",
  },
  {
    icon: Smartphone,
    title: "Mobile application",
    desc: "A mobile client enabling surveyors to execute checklists and sync records from port berths.",
    to: "/mobile/overview",
  },
];

export default function Introduction() {
  return (
    <DocPage
      path="/"
      eyebrow="Getting Started"
      title="Introduction"
      description="Welcome to the Surveyor Management System (SMS) user guide. This documentation is designed to help cargo surveyors, coordinators, and administrators understand and navigate the system."
    >
      <Section id="system-overview" title="System overview">
        <p>
          The CargoClave Surveyor Management System is a comprehensive platform built to coordinate cargo inspection operations, manage surveyor workloads, and publish verified inspection reports. By combining a browser-based coordinator console with a mobile-first surveyor application, the system ensures seamless communication between port terminals and back-office review teams.
        </p>
      </Section>

      <Section id="what-this-guide-covers" title="What this guide covers">
        <p className="mb-6">
          This guide provides step-by-step instructions and references for the core operational workspaces of the platform:
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

      <Section id="scope-of-documentation" title="Scope of this documentation">
        <p>
          This guide focuses strictly on the operational aspects of the Surveyor Management System. Other shared services are managed outside this interface:
        </p>
        <ul className="space-y-2 list-disc pl-5 my-4">
          <li>
            <strong>Master data:</strong> Port terminals, customer contacts, cargo packaging lists, and vessel registries are maintained centrally inside the CargoClave Master Management module.
          </li>
          <li>
            <strong>Identity and roles:</strong> User account provisioning, permission profiles, and system access rights are managed within the CargoClave Portal.
          </li>
        </ul>
      </Section>
    </DocPage>
  );
}
