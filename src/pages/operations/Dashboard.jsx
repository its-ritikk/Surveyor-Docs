import React from "react";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import { Gauge, TrendingUp, Bell, Zap } from "lucide-react";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "kpis", label: "KPI Cards Reference" },
  { id: "chart", label: "Weekly Performance Chart" },
  { id: "alerts", label: "Recent Alerts" },
  { id: "quick-actions", label: "Quick Actions" },
  { id: "update-behavior", label: "Update Behavior" },
];

const kpis = [
  { label: "Total Contracts", desc: "Purpose: Tracks the sum of all survey contracts registered in the system database." },
  { label: "Total Inspections", desc: "Purpose: Sum of all surveyor checklist submissions across active contracts." },
  { label: "Pending Inspections", desc: "Purpose: Captures inspections awaiting coordinator approval in the review console." },
  { label: "SLA Breaches", desc: "Purpose: Flags active surveys that have missed their scheduled SLA completion deadlines.", danger: true },
];

export default function Dashboard() {
  return (
    <DocPage
      path="/operations/dashboard"
      eyebrow="Operations"
      title="Operations Dashboard Reference"
      description="The analytics console displaying active dispatches, key performance metrics, and pending alerts."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The Operations Dashboard provides a centralized panel to monitor port surveys, track surveyor check-ins, and quickly access dispatch actions.
        </p>
      </Section>

      <Section id="kpis" title="KPI Cards Reference">
        <div className="flex items-center gap-2 mb-3 text-signal-600 dark:text-signal-500">
          <Gauge size={16} />
          <span className="text-[13px] font-semibold text-ink-800 dark:text-slate-300">
            Metric monitoring cards
          </span>
        </div>
        <div className="my-5 grid gap-3 sm:grid-cols-2">
          {kpis.map((k) => (
            <div
              key={k.label}
              className={`rounded-lg border p-4 ${
                k.danger
                  ? "border-red-200 bg-red-50/40 dark:border-red-900/30 dark:bg-red-900/10"
                  : "border-ink-900/10 bg-ink-900/[0.01] dark:border-white/10 dark:bg-white/[0.02]"
              }`}
            >
              <p className={`text-[12.5px] font-bold uppercase tracking-wider ${k.danger ? "text-red-700 dark:text-red-400" : "text-ink-500 dark:text-slate-400"}`}>
                {k.label}
              </p>
              <p className="mt-1 text-[13px] leading-6 text-ink-750 dark:text-slate-300">
                {k.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="chart"
        title={
          <span className="flex items-center gap-2.5">
            <TrendingUp size={20} className="text-signal-600 dark:text-signal-500 shrink-0" />
            <span>Weekly Performance Chart</span>
          </span>
        }
      >
        <p><strong>Purpose:</strong> Visualizes operational dispatch throughput over a rolling 7-day period.</p>
        <p className="mt-2"><strong>Displayed Information:</strong> Plots completed, pending, and breached surveys chronologically, helping coordinators allocate surveyor resources to high-volume terminals.</p>
      </Section>

      <Section
        id="alerts"
        title={
          <span className="flex items-center gap-2.5">
            <Bell size={20} className="text-signal-600 dark:text-signal-500 shrink-0" />
            <span>Recent Alerts</span>
          </span>
        }
      >
        <p><strong>Purpose:</strong> Real-time warning console tracking critical exceptions.</p>
        <p className="mt-2"><strong>Displayed Information:</strong> Flags SLA breaches, GPS coordinate mismatch warnings (exceeding the allowed 1&nbsp;km check-in radius), and surveyor re-submissions.</p>
        <Callout type="warning">
          SLA breach alerts remain active on the panel until the target survey gets completed and approved.
        </Callout>
      </Section>

      <Section
        id="quick-actions"
        title={
          <span className="flex items-center gap-2.5">
            <Zap size={20} className="text-signal-600 dark:text-signal-500 shrink-0" />
            <span>Quick Actions</span>
          </span>
        }
      >
        <p><strong>Purpose:</strong> Shortcut console for dispatch operations.</p>
        <p className="mt-2"><strong>Available Actions:</strong> Provides instant links to create cargo contracts, build survey checksheets, configure templates, and pull audit logs.</p>
      </Section>

      <Section id="update-behavior" title="Update Behavior">
        <p><strong>Behavior:</strong> The dashboard metrics utilize standard API polling to fetch live updates from the backend without full-page reloads. Clicking the manual refresh button triggers immediate query updates.</p>
      </Section>
    </DocPage>
  );
}
