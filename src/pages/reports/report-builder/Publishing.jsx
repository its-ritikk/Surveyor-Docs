import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "live-preview", label: "Live Preview Panel" },
  { id: "publishing-layouts", label: "Publishing Layouts" },
  { id: "versioning", label: "Version Control" },
  { id: "rules", label: "Rules" },
];

export default function Publishing() {
  return (
    <DocPage
      path="/reports/report-builder/publishing"
      eyebrow="Report Builder"
      title="Preview & Publishing"
      description="Validating and publishing finalised report templates for operational dispatches."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          Before a report template can be selected for active cargo contracts, it must pass the <strong>Preview & Publishing</strong> step. This process lets coordinators verify that all variable bindings, layout widths, and branding configurations render correctly in the PDF output before locking the template for production use.
        </p>
      </Section>

      <Section id="live-preview" title="Live Preview Panel">
        <p>
          The right-side preview panel in the Report Builder simulates the final PDF print layout in real time as you configure elements. You can:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>Toggle <strong>sample contract data</strong> to populate variables with realistic placeholder values.</li>
          <li>Check <strong>word-wrapping</strong> and column widths at actual page dimensions.</li>
          <li>Verify <strong>page breaks</strong> between table rows and photo grid sections.</li>
          <li>Confirm <strong>logo scaling</strong> and header alignment across page margins.</li>
          <li>Preview both <strong>A4 and Letter</strong> paper sizes without re-exporting.</li>
        </ul>
      </Section>

      <Section id="publishing-layouts" title="Publishing Layouts">
        <p>
          When the preview validates correctly, use the Publish action to lock the template:
        </p>
        <table>
          <thead>
            <tr>
              <th>Action</th>
              <th>What Happens</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Save as Draft</strong></td>
              <td>Saves the current layout without publishing. The template is visible only in the builder and cannot be selected for dispatches.</td>
            </tr>
            <tr>
              <td><strong>Publish</strong></td>
              <td>Locks the template state and makes it selectable for new contracts and inspection dispatches. Increments the version number.</td>
            </tr>
            <tr>
              <td><strong>Unpublish</strong></td>
              <td>Removes the template from active selection. Existing contracts using this template are unaffected; only new contracts cannot select it.</td>
            </tr>
            <tr>
              <td><strong>Duplicate</strong></td>
              <td>Creates a new draft copy of the template for modification, leaving the published version intact.</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section id="versioning" title="Version Control">
        <p>
          Each time a template is published, the platform increments its version number (e.g. v1.0 → v2.0). Historical report PDFs retain a reference to the template version that was active at the time of generation, ensuring an immutable audit trail.
        </p>
        <Callout type="note">
          To modify a published template that is active on existing contracts, use <strong>Duplicate</strong> to create a new draft version. This preserves the original version for in-progress contracts while allowing edits on the new draft.
        </Callout>
      </Section>

      <Section id="rules" title="Rules">
        <Callout type="warning">
          Once a template is published and assigned to an active contract, you cannot modify its column bindings or element structure directly. Re-save as a new draft version to make structural changes, then re-assign the updated version to new contracts.
        </Callout>
      </Section>
    </DocPage>
  );
}
