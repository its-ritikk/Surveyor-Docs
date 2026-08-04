import React from "react";
import { Link } from "react-router-dom";
import DocPage, { Section } from "../../../components/DocPage";
import DocMedia from "../../../components/DocMedia";
import { fieldTypesDictionary } from "../../../data/fieldTypesData";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "categories", label: "Field Categories" },
  { id: "field-catalog", label: "Complete Field Catalog (28 Types)" },
  { id: "tutorial-video", label: "Tutorial Video" },
];

export default function FieldLibrary() {
  const fields = Object.values(fieldTypesDictionary);

  return (
    <DocPage
      path="/configuration/surveys/field-library"
      eyebrow="Survey Builder"
      title="Field Library"
      description="The complete catalog of 28 specialized field types available for building maritime inspection check-sheets."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Field Library</strong> is the left palette component in the Survey Builder. It houses <strong>28 specialized field types</strong> designed for maritime port inspections, cargo condition checks, seal verification, and witness sign-offs.
        </p>
      </Section>

      <Section id="categories" title="Field Categories">
        <div className="my-4 grid gap-3 sm:grid-cols-2">
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Text &amp; Input</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Text Field, Number Field, Text Area, Currency, Percentage, Email, Phone.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Choices &amp; Menus</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Dropdown, Checkbox, Radio Button, Multi Select, Rating.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Date, Location &amp; Hardware</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Date Picker, Time Picker, Date &amp; Time, GPS Field, Location Picker, Barcode, QR Scanner.</p>
          </div>
          <div className="p-4 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A]">
            <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF]">Media &amp; Documents</p>
            <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1">Photo Upload, Video Upload, File Upload, Signature.</p>
          </div>
        </div>
      </Section>

      <Section id="field-catalog" title="Complete Field Catalog (28 Types)">
        <p className="mb-4">Click any field type below to view its complete enterprise documentation manual:</p>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {fields.map((f) => (
            <Link
              key={f.id}
              to={f.path}
              className="p-3 rounded-lg border border-ink-900/10 dark:border-[#262626] bg-white dark:bg-[#0A0A0A] hover:border-cyan-500/50 transition-colors flex flex-col justify-between group"
            >
              <div>
                <p className="font-bold text-sm text-ink-900 dark:text-[#FFFFFF] group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                  {f.title}
                </p>
                <p className="text-xs text-ink-650 dark:text-[#A3A3A3] mt-1 line-clamp-2">
                  {f.description}
                </p>
              </div>
              <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 mt-2 block font-medium">
                View Manual &rarr;
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="tutorial-video" title="Tutorial Video">
        <DocMedia
          mediaId="field-library-tutorial-video"
          caption="Field Library Catalog Video Tutorial"
        />
      </Section>
    </DocPage>
  );
}
