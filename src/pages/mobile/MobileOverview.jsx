import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import FieldTable from "../../components/FieldTable";
import {
  LogIn,
  LayoutGrid,
  FileStack,
  FileText,
  Play,
  ListChecks,
  Send,
  ArrowRight,
} from "lucide-react";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "workflow", label: "Mobile workflow" },
  { id: "home", label: "7.1 Home Dashboard" },
  { id: "contracts", label: "7.2 Contracts List" },
];

const flow = [
  { icon: LogIn, label: "Sign In" },
  { icon: LayoutGrid, label: "Home Dashboard" },
  { icon: FileStack, label: "Contracts" },
  { icon: FileText, label: "Contract Details" },
  { icon: Play, label: "Start Survey" },
  { icon: ListChecks, label: "Complete Fields" },
  { icon: Send, label: "Submit Survey" },
];

export default function MobileOverview() {
  return (
    <DocPage
      path="/mobile/overview"
      eyebrow="Mobile Application"
      title="Mobile Surveyor App"
      description="Lets field surveyors view their assigned contracts, start inspections, capture field data, and submit completed surveys — all from a mobile device, without needing the web application."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The Mobile Surveyor App is the Flutter-based companion to the web
          Surveyor Management System, built for Android and iOS. It signs in
          through the same CargoClave OTP flow described in{" "}
          <a href="/getting-started/sign-in">Sign In &amp; Verification</a>,
          then surfaces only what a field surveyor needs: their assigned
          contracts, the surveys inside them, and a guided form for
          capturing each inspection on site.
        </p>
      </Section>

      <Section id="workflow" title="Mobile workflow">
        <div className="my-6 flex flex-wrap items-center gap-2">
          {flow.map((f, i) => (
            <div key={f.label} className="flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-lg border border-ink-900/10 bg-ink-900/[0.02] px-3 py-2">
                <f.icon size={15} className="text-signal-600" />
                <span className="text-[12.5px] font-semibold text-ink-800">
                  {f.label}
                </span>
              </div>
              {i < flow.length - 1 && (
                <ArrowRight size={14} className="text-ink-400 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section id="home" title="7.1 Home Dashboard">
        <p>
          The first screen after sign-in shows your workload summary and
          recent activity notifications.
        </p>
        <FieldTable
          rows={[
            { field: "Total Pending Surveys", required: false, desc: "Surveys assigned to you that still need to be completed." },
            { field: "Total Approved Surveys", required: false, desc: "Surveys submitted and accepted by your reviewer." },
            { field: "Total Rejected Surveys", required: false, desc: "Surveys that were not accepted and may need correction." },
            { field: "Total Completed Surveys", required: false, desc: "All surveys you have completed over time." },
            { field: "Recent Activity", required: false, desc: "Latest notifications — new assignments, approvals, rejections." },
          ]}
        />
      </Section>

      <Section id="contracts" title="7.2 Contracts List">
        <p>
          Tap <strong>Contracts</strong> in the bottom navigation bar. Each
          contract card shows the Contract ID, customer name, status, survey
          counts (Total / Pending / In Progress / Completed), SLA date, and
          cargo type.
        </p>
        <ul>
          <li>Use the <strong>Search</strong> bar to find a contract by ID or customer name.</li>
          <li>Use the <strong>All / Active / Completed</strong> tabs to filter your list.</li>
        </ul>
        <Callout type="note">
          Prioritize contracts with approaching SLA dates. The SLA date is
          shown on each contract card.
        </Callout>
      </Section>
    </DocPage>
  );
}
