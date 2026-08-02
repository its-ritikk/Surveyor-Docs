import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import { StatusBadge } from "../../components/StatusBits";
import { Gauge, TrendingUp, Bell, Zap } from "lucide-react";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "kpi-cards", label: "KPI cards" },
  { id: "chart", label: "Weekly performance chart" },
  { id: "alerts", label: "Recent alerts" },
  { id: "quick-actions", label: "Quick actions" },
];

const kpis = [
  { label: "Total Contracts", desc: "All survey contracts registered in the system." },
  { label: "Total Inspections", desc: "All inspection records across every contract." },
  { label: "Pending Inspections", desc: "Inspections awaiting review or approval." },
  { label: "SLA Breaches", desc: "Activities that have exceeded their agreed deadline — act on these immediately.", danger: true },
  { label: "Completed Inspections", desc: "Inspections that have been fully approved." },
  { label: "Active Surveyors", desc: "Surveyors currently working in the field." },
  { label: "Active Contracts", desc: "Contracts still in progress." },
  { label: "Due in 24h", desc: "Activities whose deadline falls within the next 24 hours.", danger: true },
  { label: "Defect Rate", desc: "Percentage of inspections flagged with quality issues." },
  { label: "Completed Today", desc: "Inspections finished during the current day." },
];

export default function Dashboard() {
  return (
    <DocPage
      path="/operations/dashboard"
      eyebrow="Operations"
      title="Operations Dashboard"
      description="The first screen you see after launching the Surveyor App — a live, at-a-glance view of every survey operation in flight."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The dashboard is composed of four regions: a row of live{" "}
          <strong>KPI cards</strong>, a <strong>weekly performance
          chart</strong>, a <strong>Recent Alerts</strong> panel, and a{" "}
          <strong>Quick Actions</strong> shortcut menu. All figures reflect
          your account's accessible contracts and refresh on demand.
        </p>
      </Section>

      <Section id="kpi-cards" title="2.1 KPI cards">
        <div className="flex items-center gap-2 mb-1 text-signal-600 dark:text-signal-500">
          <Gauge size={16} />
          <span className="text-[13px] font-semibold text-ink-800 dark:text-slate-300">
            Each card on the dashboard tracks a key metric
          </span>
        </div>
        <div className="my-5 grid gap-3 sm:grid-cols-2">
          {kpis.map((k) => (
            <div
              key={k.label}
              className={`rounded-lg border p-4 ${
                k.danger
                  ? "border-red-200 dark:border-red-800/60 bg-red-50/40 dark:bg-red-900/15"
                  : "border-ink-900/10 dark:border-white/10"
              }`}
            >
              <p className="text-[13.5px] font-semibold text-ink-900 dark:text-slate-100">
                {k.label}
              </p>
              <p className="mt-1 text-[13px] leading-6 text-ink-600 dark:text-slate-400">
                {k.desc}
              </p>
            </div>
          ))}
        </div>
        <Callout type="warning">
          Treat <strong>SLA Breaches</strong> and <strong>Due in 24h</strong>{" "}
          as your priority queue at the start of every shift — they represent
          deadlines that have already lapsed or are about to.
        </Callout>
      </Section>

      <Section id="chart" title="2.2 Weekly performance chart">
        <div className="flex items-center gap-2 mb-2 text-signal-600 dark:text-signal-500">
          <TrendingUp size={16} />
        </div>
        <p>
          The chart below the KPI cards shows <strong>completed</strong>,{" "}
          <strong>pending</strong>, and <strong>breached</strong> activities
          for the last 7 days. Use it to spot trends — a rising breach line
          signals that assignment or staffing needs attention — and to plan
          workload for the coming days.
        </p>
      </Section>

      <Section id="alerts" title="2.3 Recent alerts">
        <div className="flex items-center gap-2 mb-2 text-signal-600 dark:text-signal-500">
          <Bell size={16} />
        </div>
        <p>
          The Recent Alerts panel covers a rolling 7-day window and lists:
        </p>
        <ul>
          <li>Upcoming SLA deadlines</li>
          <li>Pending approvals</li>
          <li>Surveyor delays</li>
          <li>Missing documents</li>
          <li>Payment items</li>
        </ul>
        <p>
          Each alert shows the days remaining and the due date.
        </p>
        <Callout type="tip">
          Review the Recent Alerts panel at the start of every working day —
          it is designed as your daily triage list.
        </Callout>
      </Section>

      <Section id="quick-actions" title="2.4 Quick actions">
        <div className="flex items-center gap-2 mb-2 text-signal-600 dark:text-signal-500">
          <Zap size={16} />
        </div>
        <p>
          Click the <strong>Quick Actions</strong> button in the top-right
          corner for instant access to frequently used tasks, such as
          creating a contract, assigning an inspection, or reviewing pending
          approvals — without navigating through the sidebar.
        </p>
        <Callout type="tip">
          Click <strong>Refresh</strong> at any time to pull the latest live
          data onto the dashboard.
        </Callout>
      </Section>
    </DocPage>
  );
}
