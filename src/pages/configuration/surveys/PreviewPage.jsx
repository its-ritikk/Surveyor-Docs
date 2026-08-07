import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "simulator-modes", label: "Mobile Simulator Modes" },
  { id: "testing-logic", label: "Testing Logic & Validations" },
];

export default function PreviewPage() {
  return (
    <DocPage
      path="/configuration/surveys/preview"
      eyebrow="Survey Builder"
      title="Preview"
      description="Interactive mobile simulator pane for testing checklist layouts, field validations, and conditional logic rules."
      toc={toc}
      noMedia={true}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Preview Simulator</strong> provides an interactive mobile frame right inside the web designer. It renders the exact mobile layout, allowing administrators to test field entries and conditional logic before publishing.
        </p>
      </Section>

      <Section id="simulator-modes" title="Mobile Simulator Modes">
        <p>
          Toggle between iOS Phone, Android Phone, and Tablet device frames to verify responsive layout alignment and font scaling.
        </p>
      </Section>

      <Section id="testing-logic" title="Testing Logic &amp; Validations">
        <p>
          Fill out test data in the simulator to verify that format rules, required checks, and conditional unhide triggers execute cleanly.
        </p>
        <Callout type="tip">
          Test edge cases (such as max character limits and invalid formats) in simulator preview prior to publishing.
        </Callout>
      </Section>
    </DocPage>
  );
}
