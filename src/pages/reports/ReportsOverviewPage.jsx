import React from "react";
import DocPage, { Section } from "../../components/DocPage";
import { FileText, Layers, Smartphone, Database, ArrowDown } from "lucide-react";

const toc = [
  { id: "overview", label: "Reports Ecosystem Overview" },
  { id: "key-modules", label: "Core Modules" },
  { id: "how-it-works", label: "How Data Flows" },
];

const flowSteps = [
  {
    step: "01",
    title: "Workflow Reports",
    subtitle: "Author Template Layouts",
    desc: "Reusable PDF layout blueprints constructed in the Report Builder with custom branding, headers, tables, and dynamic variable bindings.",
    icon: FileText,
    badgeColor: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/30",
  },
  {
    step: "02",
    title: "Inspection Template Reports",
    subtitle: "Bind & Map Field Tags",
    desc: "Linking published report layouts to operational inspection templates during wizard configuration.",
    icon: Layers,
    badgeColor: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/30",
  },
  {
    step: "03",
    title: "Contract Reports",
    subtitle: "Mobile Capture & Live Execution",
    desc: "Inspectors capture field checklist data on the mobile app, populating live PDF previews during active contract runs.",
    icon: Smartphone,
    badgeColor: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30",
  },
  {
    step: "04",
    title: "Reports Management",
    subtitle: "Register & PDF Exports",
    desc: "Centralized governance register for searching, auditing, viewing read-only copies, and dispatching signed PDF certificates.",
    icon: Database,
    badgeColor: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/30",
  },
];

export default function ReportsOverviewPage() {
  return (
    <DocPage
      path="/reports/overview"
      eyebrow="Reports"
      title="Reports Ecosystem Overview"
      description="A high-level architecture overview of the Surveyor Management System reporting ecosystem, from reusable workflow templates to contract execution and centralized master reporting."
      toc={toc}
    >
      <Section id="overview" title="Reports Ecosystem Overview">
        <p className="text-[15px] leading-7 text-ink-700/90 dark:text-[#E5E5E5]">
          The <strong>Reports Ecosystem</strong> is an end-to-end framework designed to streamline corporate inspection reporting across global port operations. It unifies layout design, template configuration, live mobile data capture, and client dispatching into a single cohesive pipeline.
        </p>
        <div className="mt-4 p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/[0.03] dark:bg-cyan-500/[0.04]">
          <p className="text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">Business Purpose</p>
          <p className="mt-1 text-sm text-ink-800 dark:text-[#E5E5E5]">
            Ensures that every survey executed across global port terminals yields 100% compliant, branded PDF dispatches while providing superintendents and executives with complete auditability.
          </p>
        </div>
      </Section>

      <Section id="key-modules" title="Core Modules">
        <div className="grid gap-3 sm:grid-cols-2 my-4">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">1. Workflow Reports</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Reusable, standardized report templates bound to operational workflow stages.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">2. Inspection Template Reports</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Attaching and configuring report layouts during Step 4 of the Inspection Template Wizard.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">3. Contract Reports</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Live split-screen authoring workspace where superintendents complete summaries while survey data populates.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">4. Reports Management</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Master register providing cross-contract report search, status tracking, read-only viewing, and PDF exports.
            </p>
          </div>
        </div>
      </Section>

      <Section id="how-it-works" title="How Data Flows">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-6">
          Reports move seamlessly through 4 structural layers:
        </p>

        {/* Custom High-Quality Interactive Flow Block Diagram */}
        <div className="my-6 max-w-xl mx-auto space-y-3 select-none">
          {flowSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <React.Fragment key={item.step}>
                <div className="group relative p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] shadow-sm hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all duration-200">
                  {/* Header row: Icon and Title vertically aligned */}
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-xs font-mono font-bold ${item.badgeColor}`}>
                        <Icon size={16} />
                      </div>
                      <h4 className="text-sm font-bold text-ink-900 dark:text-[#FFFFFF] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate">
                        {item.step}. {item.title}
                      </h4>
                    </div>
                    <span className="shrink-0 text-[11px] font-semibold text-ink-500 dark:text-slate-400 font-mono px-2.5 py-1 rounded-md bg-ink-900/5 dark:bg-white/5 border border-ink-900/10 dark:border-white/10">
                      {item.subtitle}
                    </span>
                  </div>

                  {/* Description indented under the title */}
                  <p className="text-xs text-ink-650 dark:text-[#A3A3A3] leading-relaxed pl-11">
                    {item.desc}
                  </p>
                </div>

                {index < flowSteps.length - 1 && (
                  <div className="flex justify-center my-1 text-cyan-600/60 dark:text-cyan-400/60 animate-bounce">
                    <ArrowDown size={18} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </Section>
    </DocPage>
  );
}
