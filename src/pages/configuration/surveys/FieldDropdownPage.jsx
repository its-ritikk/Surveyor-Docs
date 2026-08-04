import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";
import DocMedia from "../../../components/DocMedia";

const toc = [
  { id: "overview", label: "What is a Dropdown" },
  { id: "when-to-use", label: "When to Use a Dropdown" },
  { id: "how-to-add", label: "How to Add a Dropdown" },
  { id: "manage-options", label: "Adding & Editing Options" },
  { id: "field-settings", label: "Field Settings (Required, Default, Placeholder)" },
  { id: "searchable", label: "Searchable Dropdowns" },
  { id: "best-practices", label: "Best Practices & Common Mistakes" },
  { id: "tutorial-video", label: "Tutorial Video" },
];

export default function FieldDropdownPage() {
  return (
    <DocPage
      path="/configuration/surveys/field-dropdown"
      eyebrow="Survey Builder › Field Types"
      title="Dropdown Field Guide"
      description="A user-friendly guide for survey designers on adding, configuring, and managing Dropdown menu fields."
      toc={toc}
    >
      {/* ── WHAT IS A DROPDOWN ────────────────────────────────────────── */}
      <Section id="overview" title="What is a Dropdown">
        <p className="text-[15px] leading-7 text-ink-700/90 dark:text-[#E5E5E5]">
          A <strong>Dropdown Field</strong> displays a single-select menu containing a list of predefined choices.
          Instead of typing text manually, field surveyors simply tap the dropdown menu on their mobile screen or tablet and pick one item from the list.
        </p>
        <div className="mt-4 p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/[0.03] dark:bg-cyan-500/[0.04]">
          <p className="text-xs font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">Why Use Dropdowns?</p>
          <p className="mt-1 text-sm text-ink-800 dark:text-[#E5E5E5]">
            Dropdowns eliminate spelling variations (such as "Good" vs "gd" vs "OK"), ensuring clean, standardized data across all inspection reports and executive summary charts.
          </p>
        </div>
      </Section>

      {/* ── WHEN TO USE A DROPDOWN ────────────────────────────────────── */}
      <Section id="when-to-use" title="When to Use a Dropdown">
        <div className="my-4 grid gap-3 sm:grid-cols-2">
          <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] dark:bg-emerald-500/[0.04]">
            <p className="font-bold text-xs text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">Use Dropdown When:</p>
            <ul className="mt-2 text-xs text-ink-700 dark:text-[#E5E5E5] space-y-1.5 list-disc pl-4">
              <li>You have 3 to 50 predefined options.</li>
              <li>Surveyors must pick exactly ONE option.</li>
              <li>Options need to trigger conditional rules (e.g. if "Damaged", show Photo field).</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/[0.03] dark:bg-rose-500/[0.04]">
            <p className="font-bold text-xs text-rose-700 dark:text-rose-400 uppercase tracking-wider">Do NOT Use Dropdown When:</p>
            <ul className="mt-2 text-xs text-ink-700 dark:text-[#E5E5E5] space-y-1.5 list-disc pl-4">
              <li>You have a simple Yes/No question (use Checkbox).</li>
              <li>Surveyors need to select multiple items (use Multi Select).</li>
              <li>There are only 2 choices (use Radio Button).</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ── HOW TO ADD A DROPDOWN ────────────────────────────────────── */}
      <Section id="how-to-add" title="How to Add a Dropdown">
        <ol className="space-y-2.5 text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] list-decimal pl-5">
          <li>Open the <strong>Survey Builder</strong> and select your target inspection template step.</li>
          <li>In the left-hand <strong>Field Library</strong> panel, locate <strong>Dropdown</strong> under Field Types.</li>
          <li>Drag the Dropdown element onto your canvas or click <strong>+ Add Field</strong>.</li>
          <li>Click on the added Dropdown card on the canvas to open the right-hand <strong>Property Inspector</strong>.</li>
        </ol>
      </Section>

      {/* ── ADDING & EDITING OPTIONS ──────────────────────────────────── */}
      <Section id="manage-options" title="Adding &amp; Editing Options">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-3">
          Configure the items that appear inside the dropdown menu using the Option Editor in the right sidebar:
        </p>
        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">1. Adding New Options</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Click <strong>+ Add Option</strong>. Enter the <strong>Display Label</strong> (what the surveyor sees) and the <strong>Option Key</strong> (database code used for reporting).
            </p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-sm text-ink-900 dark:text-[#FFFFFF]">2. Reordering &amp; Deleting</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Drag the drag handles to reorder option sequence. Click the trash icon next to an option row to remove it.
            </p>
          </div>
        </div>
      </Section>

      {/* ── FIELD SETTINGS ────────────────────────────────────────────── */}
      <Section id="field-settings" title="Field Settings">
        <div className="space-y-3 text-[14px] leading-6">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Required Field</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Toggle <strong>Required</strong> to force surveyors to make a valid selection before advancing to the next step.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Placeholder Prompt</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Enter hint text such as <em>"Select cargo condition..."</em> to guide surveyors before a pick is made.
            </p>
          </div>
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-semibold text-ink-900 dark:text-[#FFFFFF]">Default Option</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">
              Choose a pre-selected default item if most inspections share the same common choice.
            </p>
          </div>
        </div>
      </Section>

      {/* ── SEARCHABLE DROPDOWNS ──────────────────────────────────────── */}
      <Section id="searchable" title="Searchable Dropdowns">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5]">
          For dropdown lists containing more than 15 items, enable the <strong>Searchable</strong> toggle in the settings panel.
          This adds an instant search filter inside the menu popup so surveyors can type to filter long lists (e.g. Port Names or Country Codes) in real time.
        </p>
      </Section>

      {/* ── BEST PRACTICES & COMMON MISTAKES ───────────────────────────── */}
      <Section id="best-practices" title="Best Practices &amp; Common Mistakes">
        <Callout type="best-practice" title="Best Practice">
          Use clear, concise labels and sort options in a logical or alphabetical order to speed up mobile entry.
        </Callout>
        <Callout type="warning" title="Common Mistake">
          Avoid putting more than 50 options in a static dropdown without enabling the Searchable setting.
        </Callout>
      </Section>

      {/* ── TUTORIAL VIDEO ────────────────────────────────────────────── */}
      <Section id="tutorial-video" title="Tutorial Video">
        <DocMedia
          mediaId="field-dropdown-tutorial-video"
          caption="Dropdown Field Setup & Mobile Usage Tutorial Video"
        />
      </Section>
    </DocPage>
  );
}
