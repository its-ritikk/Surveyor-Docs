import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "drag-handles", label: "Drag Handles & Gestures" },
  { id: "drop-zones", label: "Drop Target Highlights" },
  { id: "reordering-rules", label: "Reordering Rules & Indexing" },
  { id: "locked-zones", label: "Locked Zones & System Fields" },
];

export default function DragAndDrop() {
  return (
    <DocPage
      path="/configuration/surveys/drag-and-drop"
      eyebrow="Survey Builder"
      title="Drag & Drop Interface"
      description="Visual canvas mechanics, field tile dragging, placement targets, reordering rules, and touch gestures."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The Survey Builder features an intuitive HTML5 &amp; Touch-driven <strong>Drag &amp; Drop</strong> canvas interface.
        </p>
      </Section>

      <Section id="drag-handles" title="Drag Handles &amp; Gestures">
        <p>
          Every field tile in the left palette features a 6-dot drag handle. On desktop, click and hold the handle to lift the field tile. On mobile or tablet touchscreens, long-press for 200ms to initiate a drag operation.
        </p>
      </Section>

      <Section id="drop-zones" title="Drop Target Highlights">
        <p>
          As you drag a tile over the Workflow Canvas, eligible drop target zones illuminate with a cyan outline. Drop target indicators insert placeholder gaps showing exactly where the field will land.
        </p>
      </Section>

      <Section id="reordering-rules" title="Reordering Rules &amp; Indexing">
        <p>
          Existing canvas fields can be reordered at any time by grabbing their drag handle and sliding them up or down. System field sequence indexes update automatically.
        </p>
      </Section>

      <Section id="locked-zones" title="Locked Zones &amp; System Fields">
        <p>
          Auto-configured system fields (GPS check-in, system timestamps) are locked to the header zone and cannot be dragged into normal question steps.
        </p>
        <Callout type="warning">
          Attempting to drop non-compatible field types inside locked system header zones will reject the drop event and bounce the tile back to the palette.
        </Callout>
      </Section>
    </DocPage>
  );
}
