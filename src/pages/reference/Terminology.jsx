import DocPage, { Section } from "../../components/DocPage";
import DocMedia from "../../components/DocMedia";

const toc = [
  { id: "terms", label: "Terminology" },
  { id: "tutorial-video", label: "Tutorial Video" },
];

const terms = [
  { term: "Contract", desc: "A customer survey assignment. Contains all shipment, cargo, vessel, and survey planning details." },
  { term: "Inspection", desc: "A single completed survey activity submitted by a field surveyor." },
  { term: "Execution Plan", desc: "The list of planned survey activities within a contract, with assignee, date, and location." },
  { term: "Inspection Template", desc: "A reusable blueprint combining surveys, contract fields, document templates, and reports." },
  { term: "Survey Workflow", desc: "The step-by-step data capture structure a surveyor follows during an inspection." },
  { term: "OTP", desc: "One-Time Password used to verify your identity at login. Valid for a limited time." },
  { term: "SLA", desc: "Service Level Agreement — the deadline for completing a survey activity." },
  { term: "SLA Breach", desc: "A missed SLA deadline. Monitored on the dashboard and flagged with alerts." },
  { term: "Published", desc: "A survey or template that is active and available for operational use." },
  { term: "Draft", desc: "A survey or template that is saved but not yet available for use." },
  { term: "POC", desc: "Point of Contact — the person responsible for site coordination and access." },
  { term: "BL Number", desc: "Bill of Lading — the primary shipping reference document." },
];

export default function Terminology() {
  return (
    <DocPage
      path="/reference/terminology"
      eyebrow="Reference"
      title="Key Terminology"
      description="Quick reference for the vocabulary used throughout the Surveyor Management System, on web and mobile."
      toc={toc}
    >
      <Section id="terms" title="Terminology">
        <div className="my-5 overflow-hidden rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
          <table className="w-full border-collapse text-left text-[13.5px]">
            <thead>
              <tr className="bg-ink-900/[0.03] dark:bg-[#000000]">
                <th className="px-4 py-2.5 font-semibold text-ink-800 dark:text-[#FFFFFF] border-b border-ink-900/10 dark:border-[#262626] w-[24%]">
                  Term
                </th>
                <th className="px-4 py-2.5 font-semibold text-ink-800 dark:text-[#FFFFFF] border-b border-ink-900/10 dark:border-[#262626]">
                  Definition
                </th>
              </tr>
            </thead>
            <tbody>
              {terms.map((t, i) => (
                <tr
                  key={i}
                  className="border-b border-ink-900/[0.06] dark:border-[#262626] last:border-0 even:bg-ink-900/[0.012] dark:even:bg-[#171717]/40"
                >
                  <td className="px-4 py-2.5 align-top font-mono text-[12.5px] text-ink-900 dark:text-[#FFFFFF] font-medium">
                    {t.term}
                  </td>
                  <td className="px-4 py-2.5 align-top text-ink-700/90 dark:text-[#E5E5E5] leading-6">
                    {t.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="tutorial-video" title="Tutorial Video">
        <DocMedia
          mediaId="key-terminology-tutorial-video"
          caption="Key Terminology Video Tutorial"
        />
      </Section>
    </DocPage>
  );
}
