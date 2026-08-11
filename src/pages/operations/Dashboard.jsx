import React from "react";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import DocImage from "../../components/DocImage";
import { Gauge, TrendingUp, Bell, Zap } from "lucide-react";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "kpis", label: "KPI Cards" },
  { id: "chart", label: "Weekly Performance Chart" },
  { id: "alerts", label: "Recent Alerts" },
  { id: "quick-actions", label: "Quick Actions" },
  { id: "refresh", label: "Refreshing the Dashboard" },
];

const kpiRows = [
  {
    group: "Row 1 — Inspection overview",
    items: [
      {
        label: "Total Contracts",
        badge: "Live",
        badgeColor: "text-emerald-600 dark:text-emerald-400",
        desc: "Total number of survey contracts registered in the system across all shipment types.",
      },
      {
        label: "Total Inspections",
        badge: "Live",
        badgeColor: "text-emerald-600 dark:text-emerald-400",
        desc: "Total number of survey checklist submissions recorded across all active contracts.",
      },
      {
        label: "Pending Inspections",
        badge: "Action needed",
        badgeColor: "text-amber-600 dark:text-amber-400",
        desc: "Inspections that have been submitted by field surveyors and are waiting for coordinator review and approval.",
        danger: false,
      },
      {
        label: "SLA Breaches",
        badge: "Critical",
        badgeColor: "text-red-600 dark:text-red-400",
        desc: "Active surveys that have passed their deadline without being completed. Requires immediate attention.",
        danger: true,
      },
      {
        label: "Completed Inspections",
        badge: "On track",
        badgeColor: "text-emerald-600 dark:text-emerald-400",
        desc: "Inspections that have been reviewed and approved by a coordinator. These are finalised records.",
      },
    ],
  },
  {
    group: "Row 2 — Operational status",
    items: [
      {
        label: "Active Surveyors",
        badge: "Active",
        badgeColor: "text-emerald-600 dark:text-emerald-400",
        desc: "Number of field surveyors currently working on an active inspection today.",
      },
      {
        label: "Active Contracts",
        badge: "Live",
        badgeColor: "text-emerald-600 dark:text-emerald-400",
        desc: "Contracts currently in progress — these have at least one inspection that has not yet been completed.",
      },
      {
        label: "Due in 24h",
        badge: "Urgent",
        badgeColor: "text-amber-600 dark:text-amber-400",
        desc: "Inspections whose deadlines are approaching within the next 24 hours. Act quickly to avoid SLA breaches.",
        danger: false,
      },
      {
        label: "Defect Rate",
        badge: "Monitored",
        badgeColor: "text-sky-600 dark:text-sky-400",
        desc: "Percentage of submitted inspections that were rejected due to errors or missing information.",
      },
      {
        label: "Completed Today",
        badge: "Daily goal",
        badgeColor: "text-emerald-600 dark:text-emerald-400",
        desc: "Number of inspections that have been approved and finalised today.",
      },
    ],
  },
];

const quickActions = [
  {
    label: "Create New Contract",
    desc: "Schedule a container inspection with a survey assignment.",
    color: "text-signal-600 dark:text-signal-400",
  },
  {
    label: "Dispatch Surveyor",
    desc: "Assign urgent unassigned contracts to field surveyors.",
    color: "text-signal-600 dark:text-signal-400",
  },
  {
    label: "Review Inspections",
    desc: "Approve pending inspection submissions and evidence.",
    color: "text-amber-600 dark:text-amber-400",
  },
  {
    label: "Manage Surveys",
    desc: "Configure custom inspection surveys and templates.",
    color: "text-signal-600 dark:text-signal-400",
  },
  {
    label: "Manage Team",
    desc: "Add or manage surveyor accounts and roles.",
    color: "text-signal-600 dark:text-signal-400",
  },
];

export default function Dashboard() {
  return (
    <DocPage
      path="/operations/dashboard"
      eyebrow="Operations"
      title="Operations Dashboard"
      description="Your central view of all active contracts, inspections, surveyor status, performance trends, and alerts — updated in real time."
      toc={toc}
      hideVideo={true}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Operations Dashboard</strong> is the first screen you see after launching the Surveyor Management System. It gives you a live snapshot of everything happening across your operation — how many contracts are active, how many inspections are awaiting review, whether any deadlines have been missed, and which surveyors are currently working in the field.
        </p>
        <p className="mt-3">
          The dashboard updates automatically so you always see the latest data without needing to refresh manually. A <strong>Refresh</strong> button is also available in the top-right corner if you want to pull the latest data immediately.
        </p>
        <Callout type="note">
          The date and time shown at the top of the dashboard reflect the last time the data was updated. A green <strong>Live data</strong> indicator means all cards are receiving real-time updates.
        </Callout>
      </Section>

      <Section
        id="kpis"
        title={
          <span className="flex items-center gap-2.5">
            <Gauge size={20} className="text-signal-600 dark:text-signal-500 shrink-0" />
            <span>KPI Cards</span>
          </span>
        }
      >
        <p>
          The dashboard displays <strong>Available KPI cards</strong> arranged in two rows. Each card shows a live count or percentage and a small badge indicating whether the metric is live, requires action, or is flagged as critical.
        </p>

        {kpiRows.map((row) => (
          <div key={row.group} className="mt-6">
            <p className="text-xs font-semibold text-ink-500 dark:text-[#A3A3A3] mb-3">{row.group}</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {row.items.map((k) => (
                <div
                  key={k.label}
                  className={`rounded-lg border p-4 ${k.danger
                    ? "border-red-200 bg-red-50/40 dark:border-red-900/40 dark:bg-red-950/20"
                    : "border-ink-900/10 bg-ink-900/[0.01] dark:border-[#262626] dark:bg-[#0A0A0A]"
                  }`}
                >
                  {/* title row: name left, badge right */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <p className={`text-sm font-semibold leading-none ${k.danger ? "text-red-700 dark:text-red-400" : "text-ink-900 dark:text-[#FFFFFF]"}`}>
                      {k.label}
                    </p>
                    <span className={`shrink-0 inline-flex items-center gap-0.5 text-[11px] font-medium ${k.badgeColor}`}>
                      <span>↑</span>
                      <span>{k.badge}</span>
                    </span>
                  </div>
                  <p className="text-[13px] leading-6 text-ink-700 dark:text-[#A3A3A3]">
                    {k.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
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
        <p>
          Below the KPI cards you will find the <strong>Weekly Performance Metrics</strong> chart. This chart shows a rolling 7-day view of inspection activity across your organization.
        </p>

        <DocImage path="/operations/dashboard" imageKey="analytics" />

        <div className="my-4 grid gap-3 sm:grid-cols-3">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">Completed</p>
            <p className="text-xs text-ink-700 dark:text-[#A3A3A3]">Inspections that were fully reviewed and approved on each day. A rising line shows good operational momentum.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A]">
            <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-1">Pending</p>
            <p className="text-xs text-ink-700 dark:text-[#A3A3A3]">Inspections submitted but not yet reviewed each day. A consistently high pending line indicates a review backlog.</p>
          </div>
          <div className="p-4 rounded-lg border border-red-300 dark:border-red-900/40 bg-red-50/30 dark:bg-red-950/10">
            <p className="text-xs font-semibold text-red-600 dark:text-red-400 mb-1">Breached</p>
            <p className="text-xs text-ink-700 dark:text-[#A3A3A3]">Inspections that missed their SLA deadline. Any value above zero needs immediate action to prevent repeat occurrences.</p>
          </div>
        </div>

        <p>
          Use this chart to spot patterns — for example, if inspections tend to pile up on specific days, you can plan surveyor coverage accordingly. The chart defaults to the past 7 days and updates each time the dashboard refreshes.
        </p>
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
        <p>
          To the right of the performance chart is the <strong>Recent Alerts</strong> panel. This panel shows important warnings raised within the last 7 days that require your attention.
        </p>
        <ul className="list-disc pl-5 space-y-2 my-3">
          <li><strong>SLA breach alerts:</strong> Raised when an inspection passes its deadline without being completed or approved.</li>
          <li><strong>Submission errors:</strong> Flagged when a surveyor's submission is rejected and needs correction.</li>
          <li><strong>Assignment gaps:</strong> Shown when a contract has no surveyor assigned and the deadline is approaching.</li>
        </ul>
        <Callout type="warning">
          SLA breach alerts remain visible in the panel until the related inspection is fully completed and approved. Do not ignore alerts — each one represents a missed deadline that may affect customer satisfaction.
        </Callout>
        <p className="mt-3">
          If the panel shows <em>"No recent alerts found"</em>, it means all active contracts are on track with no deadline or quality issues in the past 7 days.
        </p>
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
        <p>
          At the bottom of the dashboard is the <strong>Quick Actions</strong> section. These are shortcuts to the most frequently used operations so you can act without navigating through the full sidebar menu.
        </p>

        <div className="my-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {quickActions.map((a) => (
            <div
              key={a.label}
              className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-ink-900/[0.01] dark:bg-[#0A0A0A] flex items-start gap-3"
            >
              <div>
                <p className={`text-sm font-semibold ${a.color}`}>{a.label}</p>
                <p className="mt-0.5 text-[13px] text-ink-700 dark:text-[#A3A3A3]">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p>
          Each quick action card has an arrow link at the bottom right. Clicking it navigates you directly to the relevant section of the portal.
        </p>
      </Section>

      <Section id="refresh" title="Refreshing the dashboard">
        <p>
          The dashboard updates automatically in the background. However, you can manually trigger a data refresh at any time by clicking the <strong>Refresh</strong> button in the top-right area of the dashboard — next to the <strong>Widgets</strong> dropdown and the <strong>Quick Actions</strong> button.
        </p>
        <p className="mt-3">
          The <strong>Widgets</strong> button lets you choose which KPI cards are visible on the dashboard, so you can customise the view to focus on the metrics most relevant to your role.
        </p>
        <Callout type="note">
          Dashboard data reflects the state of the system at the time of the last update. For time-sensitive decisions such as SLA management, always click Refresh to ensure you are viewing the most current figures.
        </Callout>
      </Section>
    </DocPage>
  );
}
