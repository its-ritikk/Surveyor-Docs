import DocPage, { Section } from "../../components/DocPage";
import { StatusBadge } from "../../components/StatusBits";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "purpose", label: "Purpose" },
  { id: "features", label: "Feature Overview" },
  { id: "sections", label: "Important Functional Sections" },
  { id: "starting", label: "Detailed Feature Explanation" },
  { id: "workflow", label: "User Workflow" },
  { id: "validations", label: "Validation Rules" },
  { id: "permissions", label: "User Permissions" },
  { id: "related", label: "Related Features" },
];

export default function ExecutingSurvey() {
  return (
    <DocPage
      path="/mobile/executing-a-survey"
      eyebrow="Mobile Surveyor"
      title="Executing a Survey"
      description="The standardized workflow for executing active checklists, logging coordinates, and submitting cargo inspections."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          Executing a survey involves opening an assigned contract job on the Mobile Surveyor App, checking in at the scheduled port terminal, and completing the checklist questionnaire.
        </p>
      </Section>

      <Section id="purpose" title="Purpose">
        <p>
          Provides surveyors with a specialized, mobile-optimized tool to log checklist data, witness signatures, and upload photographic evidence directly from the terminal floor.
        </p>
      </Section>

      <Section id="features" title="Feature Overview">
        <p>
          Primary capabilities include coordinate auditing (check-in telemetry), dynamic form validations, offline response caching, camera integration, and graphical signature captures.
        </p>
      </Section>

      <Section id="sections" title="Important Functional Sections">
        <p>
          Checklist execution relies on the following operational sections:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-4">
          <li><strong>Location Check-In</strong> — Logs starting GPS telemetry coordinates.</li>
          <li><strong>Checksheet Questionnaire</strong> — Captures cargo parameters (e.g. seal numbers, temperature, damage status).</li>
          <li><strong>Evidence Uploads</strong> — Attaches witness signatures and cargo photographs with captions.</li>
          <li><strong>Sync Manager</strong> — Syncs locally cached sqlite data to the web review console in the background.</li>
        </ul>
      </Section>

      <Section id="starting" title="Detailed Feature Explanation">
        <p>
          Detailed mechanics of the checklist execution engine:
        </p>
        <ul className="list-disc pl-5 space-y-2.5 my-4 text-[13.5px]">
          <li>
            <strong>GPS Auditing</strong> — Automatically logs latitude/longitude coordinates on survey launch and submit. The coordinator dashboard uses the Haversine formula to compute coordinate variances and flags distance alerts for mismatches over 1&nbsp;km.
          </li>
          <li>
            <strong>Checksheet Inputs</strong> — Supports rendering of Text, Number, Dropdown, Checkbox, and Date fields dynamically configured from the active survey template.
          </li>
          <li>
            <strong>Witness Signatures</strong> — Utilizes touch-drawn graphical pads for surveyor sign-offs and client receivers signatures.
          </li>
        </ul>
      </Section>

      <Section id="workflow" title="User Workflow">
        <p>
          Inspectors navigate the checklist execution using these steps:
        </p>
        <div className="my-4 flex flex-wrap items-center gap-2 text-xs font-mono">
          <div className="px-3 py-2 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] text-ink-800 dark:text-slate-200">1. Select Pending Survey</div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="px-3 py-2 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] text-ink-800 dark:text-slate-200">2. Start Survey (GPS Check-In)</div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="px-3 py-2 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] text-ink-800 dark:text-slate-200">3. Fill Checklist &amp; Signatures</div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="px-3 py-2 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] text-ink-800 dark:text-slate-200">4. Photos &amp; Captions</div>
          <span className="text-cyan-500 font-bold">→</span>
          <div className="px-3 py-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-semibold">5. Submit (Completed)</div>
        </div>
        <ol className="list-decimal pl-5 space-y-1.5 my-4">
          <li>Select a scheduled survey marked as <StatusBadge color="slate">Pending</StatusBadge> from the Contracts List.</li>
          <li>Review location and SLA conditions, then tap <strong>Start Survey</strong> to log GPS check-in data.</li>
          <li>Fill in all checklist fields and capture witness sign-offs.</li>
          <li>Snap cargo photographs and add descriptive captions.</li>
          <li>Tap <strong>Submit Survey</strong> to synchronize responses. The survey status will update to <StatusBadge color="green">Completed</StatusBadge>.</li>
        </ol>
      </Section>

      <Section id="validations" title="Validation Rules">
        <p>
          The mobile client enforces validation rules built into the active template:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-4">
          <li><strong>Compulsory Fields</strong> — Marked with a red asterisk (*) and block submission until completed.</li>
          <li><strong>Photo Captions</strong> — Requires caption text logs before allowing image uploads.</li>
        </ul>
      </Section>

      <Section id="permissions" title="User Permissions">
        <p>
          Restricted to users assigned the <strong>Surveyor</strong> role who are explicitly mapped to the active survey step in the contract's Execution Plan.
        </p>
      </Section>

      <Section id="related" title="Related Features">
        <p>
          Checklist execution interacts with:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-4">
          <li><a href="/configuration/surveys">Survey Builder</a> — Where steps, validation parameters, and fields are configured.</li>
          <li><a href="/operations/inspection-review">Inspection Review</a> — Where supervisors audit submitted answers, photos, and GPS coords.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
