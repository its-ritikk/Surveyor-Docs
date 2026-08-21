import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "adding-fields", label: "How to Add a Field" },
  { id: "reordering", label: "Changing Question Order" },
  { id: "fixed-fields", label: "Fixed System Fields" },
];

export default function DragAndDrop() {
  return (
    <DocPage
      path="/configuration/surveys/drag-and-drop"
      eyebrow="Survey Builder"
      title="Drag & Drop"
      description="Simple guide on how to drag, drop, and organize survey questions on your checklist."
      toc={toc}
    >
      {/* OVERVIEW */}
      <Section id="overview" title="Overview">
        <p className="text-[15px] leading-7 text-ink-700/90 dark:text-[#E5E5E5]">
          The <strong>Survey Builder</strong> allows you to build digital inspection check-sheets visually. You can easily add, move, and reorder questions by dragging them into place on your screen.
        </p>
      </Section>

      {/* HOW TO ADD A FIELD */}
      <Section id="adding-fields" title="How to Add a Field">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-4">
          Adding a new question to your survey takes just three simple steps:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2.5 shadow-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs">1</span>
              <span className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Choose a Field</span>
            </div>
            <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed !mb-0">
              Find the question type you need (like <em>Text</em>, <em>Dropdown</em>, or <em>Photo</em>) in the left panel.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2.5 shadow-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs">2</span>
              <span className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Click &amp; Drag</span>
            </div>
            <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed !mb-0">
              Click and hold the 6-dot handle on the field box and move it toward the survey page in the middle of your screen.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] space-y-2.5 shadow-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold text-xs">3</span>
              <span className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Release to Place</span>
            </div>
            <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed !mb-0">
              Release your mouse button over the highlighted box to place the question on your survey.
            </p>
          </div>
        </div>
      </Section>

      {/* REORDERING */}
      <Section id="reordering" title="Changing Question Order">
        <div className="p-4 rounded-xl border border-ink-900/10 dark:border-white/10 bg-white dark:bg-[#0A0A0A] shadow-sm space-y-2 text-xs">
          <h4 className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Reordering Existing Questions</h4>
          <p className="text-ink-650 dark:text-[#A3A3A3] leading-relaxed">
            You can change the order of questions at any time. Simply click and hold the handle on any question card, slide it up or down to your desired position, and release. The rest of the questions will automatically adjust to fit.
          </p>
        </div>
      </Section>

      {/* FIXED FIELDS */}
      <Section id="fixed-fields" title="Fixed System Fields">
        <p className="text-[14px] leading-6 text-ink-700/90 dark:text-[#E5E5E5] mb-3">
          Automatic items (such as GPS location check-in and submission timestamps) stay fixed at the top of the survey.
        </p>

        <Callout type="note" title="Fixed Header Items">
          Automatic system fields stay locked at the top of the survey page so field inspectors always complete check-in requirements first.
        </Callout>
      </Section>
    </DocPage>
  );
}

