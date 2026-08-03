import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "grouping", label: "Grouping Options" },
  { id: "captions", label: "Caption Formatting" },
  { id: "zoom", label: "Zoom & Interactive Preview" },
  { id: "rules", label: "Rules" },
];

export default function PhotoGrid() {
  return (
    <DocPage
      path="/reports/report-builder/photo-grid"
      eyebrow="Report Builder"
      title="Photo Grid"
      description="The visual evidence compilation element for report layouts."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The Photo Grid aggregates surveyor-uploaded inspection images, compiling them into structured rows and columns rather than listing raw attachments.
        </p>
      </Section>

      <Section id="grouping" title="Grouping Options">
        <p>
          Organize photographs by survey type, hatch number, loading shift, or container ID, making it simple to navigate cargo damage photos.
        </p>
      </Section>

      <Section id="captions" title="Caption Formatting">
        <p>
          Render surveyor captions directly below each photo card. Captions support variable injection to display the upload timestamp or GPS coordinate tag.
        </p>
      </Section>

      <Section id="zoom" title="Zoom & Interactive Preview">
        <p>
          Coordinators can click on any grid thumbnail to open a high-resolution viewer overlay, allowing close inspections of seals or seal numbers.
        </p>
      </Section>

      <Section id="rules" title="Rules">
        <Callout type="warning">
          If a surveyor submits an inspection without photos, the Photo Grid block will display a clean placeholder message rather than a blank spacing box.
        </Callout>
      </Section>
    </DocPage>
  );
}
