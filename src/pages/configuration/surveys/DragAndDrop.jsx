import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";
import DocMedia from "../../../components/DocMedia";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "drag-handles", label: "Drag Handles & Gestures" },
  { id: "drop-zones", label: "Drop Target Highlights" },
  { id: "reordering-rules", label: "Reordering Rules & Indexing" },
  { id: "locked-zones", label: "Locked Zones & System Fields" },
  { id: "tutorial-video", label: "Tutorial Video" },
];

export default function DragAndDrop() {
  return (
    <DocPage
      path="/configuration/surveys/drag-and-drop"
      eyebrow="Survey Builder"
      title="Drag & Drop Architecture"
      description="Detailed technical breakdown of drag-and-drop mechanics, drop targets, canvas reordering rules, and drag restrictions."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Drag &amp; Drop Engine</strong> powers the visual builder canvas. It handles HTML5 drag events, touch drag gestures, active drop zone highlights, and real-time position recalculations.
        </p>
      </Section>

      <Section id="drag-handles" title="Drag Handles &amp; Gestures">
        <p>
          Each field tile in the library palette and on the canvas features a dedicated <strong>6-dot drag handle icon</strong>. Tapping and holding or dragging the handle initiates the drag operation.
        </p>
      </Section>

      <Section id="drop-zones" title="Drop Target Highlights">
        <p>
          As a field is dragged across the canvas, valid <strong>Drop Target Zones</strong> illuminate with a cyan border and insertion line indicating where the field will land.
        </p>
      </Section>

      <Section id="reordering-rules" title="Reordering Rules &amp; Indexing">
        <p>
          Dropping a field automatically recalculates sequential <code>display_order</code> indexes (1, 2, 3...) for all fields within that step. Moving a field between steps automatically updates its step parent ID.
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

      <Section id="tutorial-video" title="Tutorial Video">
        <DocMedia
          mediaId="drag-and-drop-tutorial-video"
          caption="Drag & Drop Canvas Mechanics Video Tutorial"
        />
      </Section>
    </DocPage>
  );
}
