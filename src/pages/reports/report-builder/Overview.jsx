import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "capabilities", label: "Core Capabilities" },
  { id: "designer-workspace", label: "Designer Workspace" },
  { id: "workflow", label: "Workflow Integration" },
  { id: "rules", label: "Validation Rules" },
];

export default function Overview() {
  return (
    <DocPage
      path="/reports/report-builder/overview"
      eyebrow="Report Builder"
      title="Report Builder Overview"
      description="The drag-and-drop workspace for designing custom PDF report blueprints in the Surveyor platform."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Report Builder</strong> is a visual template designer that lets coordinators and administrators compose structured PDF report layouts without writing code. Elements are dragged onto a workspace, configured via property panels, and previewed in real time before being published for use in operational dispatches.
        </p>
      </Section>

      <Section id="capabilities" title="Core Capabilities">
        <table>
          <thead>
            <tr>
              <th>Capability</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Drag-and-Drop Designer</td>
              <td>Compose report layouts by dragging element blocks onto a vertical workspace and reordering them freely.</td>
            </tr>
            <tr>
              <td>Variable Binding</td>
              <td>Map element content to survey field tags, contract metadata, and surveyor session data.</td>
            </tr>
            <tr>
              <td>Real-Time Preview</td>
              <td>See a live PDF simulation in the right panel that updates as you modify element properties.</td>
            </tr>
            <tr>
              <td>Multi-Element Types</td>
              <td>Headers, Label/Value rows, Text, Flat Tables, Pivot Tables, Custom Tables, Photo Grids, and Signatures.</td>
            </tr>
            <tr>
              <td>Branding Control</td>
              <td>Upload logos, set corporate colours, define header content, and control page margins.</td>
            </tr>
            <tr>
              <td>Version Management</td>
              <td>Publish and version templates. Historical reports retain a reference to the template version active at generation time.</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section id="designer-workspace" title="Designer Workspace">
        <p>
          The designer is the central workspace. Each element block stacks vertically and can be:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Added</strong> — Click an element type from the left panel to insert it at the bottom of the workspace.</li>
          <li><strong>Reordered</strong> — Drag the element handle on the left edge to move it up or down.</li>
          <li><strong>Configured</strong> — Click any element to open its properties panel on the right side.</li>
          <li><strong>Duplicated</strong> — Clone an element block with its current settings to repeat a similar structure.</li>
          <li><strong>Deleted</strong> — Remove a block using the trash icon in the element toolbar.</li>
        </ul>
      </Section>

      <Section id="workflow" title="Workflow Integration">
        <p>
          Once published, a report template becomes available for selection when:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>Drafting a new <strong>Inspection Template</strong> — assign the report layout that will be generated at the end of the inspection.</li>
          <li>Creating a <strong>Contract Dispatch</strong> — the linked report template generates the final delivery PDF.</li>
          <li>Reviewing a completed <strong>Survey Submission</strong> — the report previews live data from that specific contract run.</li>
        </ul>
        <p>
          Template revisions increment the version index without overwriting historical run logs. Existing contracts continue using their assigned template version until manually updated.
        </p>
      </Section>

      <Section id="rules" title="Validation Rules">
        <Callout type="note">
          Variables mapped in table columns and element fields must match field keys defined in the parent survey checklist. Mismatches disable publishing and display inline validation warnings on the affected elements.
        </Callout>
      </Section>
    </DocPage>
  );
}
