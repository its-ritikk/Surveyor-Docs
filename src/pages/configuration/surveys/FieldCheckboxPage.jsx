import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";
import DocMedia from "../../../components/DocMedia";

const toc = [
  { id: "overview", label: "Overview & Purpose" },
  { id: "use-cases", label: "Business Use Cases" },
  { id: "how-to-add", label: "How to Add a Checkbox" },
  { id: "configure-label", label: "Configuring Field Label" },
  { id: "default-state", label: "Default Checked State" },
  { id: "required-critical", label: "Required & Critical Safety Flags" },
  { id: "multiple-checkboxes", label: "Multiple Checkboxes" },
  { id: "best-practices", label: "Best Practices & Common Mistakes" },
  { id: "tutorial-video", label: "Tutorial Video" },
];

export default function FieldCheckboxPage() {
  return (
    <DocPage
      path="/configuration/surveys/field-checkbox"
      eyebrow="Survey Builder › Field Types"
      title="Checkbox Field Guide"
      description="A user-friendly guide for survey designers on adding, configuring, and applying Checkbox fields for safety pass/fail checks."
      toc={toc}
    >
      {/* ── OVERVIEW & PURPOSE ─────────────────────────────────────────── */}
      <Section id="overview" title="Overview &amp; Purpose">
        <p className="text-[15px] leading-7 text-ink-700/90 dark:text-[#E5E5E5]">
          A <strong>Checkbox Field</strong> captures a simple boolean (Yes/No, Pass/Fail, Checked/Unchecked) verification state.
          Field surveyors tap the checkbox on their tablet or mobile app to confirm safety compliance, equipment checks, or condition verifications.
        </p>
        <div className="mt-4 p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/[0.03] dark:bg-cyan-500/[0.04]">
          <p className="text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">Business Purpose</p>
          <p className="mt-1 text-sm text-ink-800 dark:text-[#E5E5E5]">
            Verifies critical port safety compliance (such as <em>"Hatch Cover Seal Intact = Yes"</em>) prior to vessel unberthing and cargo discharge.
          </p>
        </div>
      </Section>

      {/* ── BUSINESS USE CASES ─────────────────────────────────────────── */}
      <Section id="use-cases" title="Business Use Cases">
        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">1. Safety &amp; Compliance Checks</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Confirming mandatory safety equipment availability (PPE worn, gas detector calibrated, safety harness secured).
            </p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">2. Equipment &amp; Vessel Readiness</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Verifying cargo hold dryness, valve seals, container locking pins, or hatch seal integrity before loading.
            </p>
          </div>
        </div>
      </Section>

      {/* ── HOW TO ADD A CHECKBOX ──────────────────────────────────────── */}
      <Section id="how-to-add" title="How to Add a Checkbox">
        <ol className="space-y-2.5 text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] list-decimal pl-5">
          <li>Open the <strong>Survey Builder</strong> and select your desired survey step.</li>
          <li>In the left-hand <strong>Field Library</strong>, locate <strong>Checkbox</strong>.</li>
          <li>Drag the Checkbox item onto the canvas.</li>
          <li>Click the Checkbox element on the canvas to open the <strong>Property Inspector</strong>.</li>
        </ol>
      </Section>

      {/* ── CONFIGURE LABEL ────────────────────────────────────────────── */}
      <Section id="configure-label" title="Configuring Field Label">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5]">
          Enter a clear, unambiguous statement in the <strong>Label</strong> box.
          Formulate the label as a direct affirmative assertion (e.g. <em>"Hatch cover rubber seals are free of cracks"</em>) so surveyors understand what checking the box signifies.
        </p>
      </Section>

      {/* ── DEFAULT CHECKED STATE ──────────────────────────────────────── */}
      <Section id="default-state" title="Default Checked State">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5]">
          Choose whether the checkbox starts in a <strong>Checked (True)</strong> or <strong>Unchecked (False)</strong> state when the surveyor opens the form.
        </p>
        <Callout type="warning" title="Important Safety Rule">
          Always leave critical safety checkboxes <strong>Unchecked by default</strong>. Forcing surveyors to manually tap the box ensures active physical inspection rather than accidental pass confirmations.
        </Callout>
      </Section>

      {/* ── REQUIRED & CRITICAL SAFETY FLAGS ───────────────────────────── */}
      <Section id="required-critical" title="Required &amp; Critical Safety Flags">
        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">Required Checkbox</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Requires the surveyor to explicitly check the box to acknowledge verification before proceeding.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/[0.03] dark:bg-rose-500/[0.04]">
            <p className="font-semibold text-sm text-rose-700 dark:text-rose-400">Critical Fail Flag</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              If a critical safety checkbox is left unchecked, the system automatically flags the inspection with a red alert banner and requires mandatory photo evidence upload.
            </p>
          </div>
        </div>
      </Section>

      {/* ── MULTIPLE CHECKBOXES ────────────────────────────────────────── */}
      <Section id="multiple-checkboxes" title="Multiple Checkbox Usage">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5]">
          When multiple independent verification points exist (e.g., inspecting 4 container corner castings), add individual Checkbox fields for each item or group them under a dedicated Checksheet section.
        </p>
      </Section>

      {/* ── BEST PRACTICES & COMMON MISTAKES ───────────────────────────── */}
      <Section id="best-practices" title="Best Practices &amp; Common Mistakes">
        <Callout type="best-practice" title="Best Practice">
          Write positive, clear labels (e.g. "Equipment Operational") instead of negative phrasing ("Equipment Not Damaged").
        </Callout>
        <Callout type="warning" title="Common Mistake">
          Pre-checking safety checkboxes by default, which can lead to missed hazards during port inspections.
        </Callout>
      </Section>

      {/* ── TUTORIAL VIDEO ────────────────────────────────────────────── */}
      <Section id="tutorial-video" title="Tutorial Video">
        <DocMedia
          mediaId="field-checkbox-tutorial-video"
          caption="Checkbox Field Configuration Tutorial Video"
        />
      </Section>
    </DocPage>
  );
}
