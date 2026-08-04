import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import DocMedia from "../../components/DocMedia";
import { ShieldAlert } from "lucide-react";

const toc = [
  { id: "rules", label: "Important rules" },
  { id: "tutorial-video", label: "Tutorial Video" },
];

const rules = [
  "Fields marked * are mandatory — the system will not save or activate without them.",
  "Activate a contract only after all surveys in the Execution Plan are assigned.",
  "Completed contracts are read-only — they cannot be edited.",
  "Do not delete a survey or template that is in use by an active contract.",
  "Review the GPS location difference in Inspection Details before approving a submission with a large distance variance.",
  "Always use the latest OTP — expired OTPs cannot be used for login.",
  "Mark a team Inactive (instead of deleting) when it is linked to historical operational work.",
];

export default function Rules() {
  return (
    <DocPage
      path="/reference/rules"
      eyebrow="Reference"
      title="Important Rules"
      description="A quick checklist of hard rules enforced across the Surveyor Management System — worth memorizing before your first week on the platform."
      toc={toc}
    >
      <Section id="rules" title="Important rules">
        <div className="my-5 divide-y divide-ink-900/10 rounded-lg border border-ink-900/10 overflow-hidden">
          {rules.map((r, i) => (
            <div key={i} className="flex items-start gap-3 px-4 py-3.5">
              <ShieldAlert size={16} className="mt-0.5 shrink-0 text-signal-600" />
              <p className="text-[14px] leading-6 text-ink-800">{r}</p>
            </div>
          ))}
        </div>
        <Callout type="tip">
          Most of these rules exist to protect SLA accuracy and audit
          integrity — when in doubt, check the relevant module's page in
          this guide before overriding a warning in the UI.
        </Callout>
      </Section>

      <Section id="tutorial-video" title="Tutorial Video">
        <DocMedia
          mediaId="important-rules-tutorial-video"
          caption="Important Rules Video Tutorial"
        />
      </Section>
    </DocPage>
  );
}
