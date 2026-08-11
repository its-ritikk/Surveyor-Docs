import React from "react";
import DocPage, { Section } from "../../../../components/DocPage";
import Callout from "../../../../components/Callout";
import DocImage from "../../../../components/DocImage";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "purpose", label: "Purpose" },
  { id: "business-scenario", label: "Business Scenario" },
  { id: "when-to-use", label: "When To Use" },
  { id: "how-it-works", label: "How It Works" },
  { id: "configuration", label: "Configuration Options" },
  { id: "designer-behavior", label: "Designer Behaviour" },
  { id: "properties", label: "Supported Properties" },
  { id: "validation", label: "Validation Rules" },
  { id: "use-cases", label: "Common Use Cases" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "related", label: "Related Elements" },
];

export default function SignatureElement() {
  return (
    <DocPage
hideImage={true}
            path="/reports/report-builder/elements/signature"
      eyebrow="Report Builder · Elements"
      title="Signature"
      description="The Signature element places a formal sign-off block displaying graphic signatures, printed names, roles, and verification timestamps for all signing parties."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Signature</strong> element is the formal document closure block. It renders the graphic signature images captured by surveyors and authorising parties via the mobile app, alongside printed name, job title, organisation, and the timestamp of when the signature was applied. It provides a legally traceable sign-off trail within the PDF report.
        </p>
        <DocImage path="/reports/report-builder/elements/signature" hideCaption={true} />
      </Section>

      <Section id="purpose" title="Purpose">
        <p>
          Signature elements transform digital sign-offs captured on mobile devices into a professionally formatted, printed signature block that meets the requirements of cargo inspection documents, certificates, and port authority submissions.
        </p>
      </Section>

      <Section id="business-scenario" title="Business Scenario">
        <p>
          A draught survey report requires sign-off from the Chief Officer of the vessel and the attending cargo surveyor. When the report is generated, the Signature element auto-populates with both parties' graphic signatures (captured on the mobile app at the time of inspection), their printed names, roles, and the exact timestamps of when each signature was applied. The resulting PDF is ready for submission to port authorities without any manual additions.
        </p>
      </Section>

      <Section id="when-to-use" title="When To Use">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>Every inspection report template must include at least <strong>one Signature element</strong> — it is required for publishing.</li>
          <li>Use one Signature block per required signing party (e.g. Surveyor, Client Representative, Vessel Officer).</li>
          <li>Place Signature elements at the bottom of the report, after all cargo data and remarks sections.</li>
          <li>Use multiple Signature elements when multi-party sign-off is required by regulatory or client standards.</li>
        </ul>
      </Section>

      <Section id="how-it-works" title="How It Works">
        <p>
          Each Signature element is linked to a <strong>signing role</strong> defined in the contract's workflow. At report generation time, the platform fetches the signature image, name, and timestamp from the submission record of the party who fulfilled that role.
        </p>
        <table>
          <thead>
            <tr><th>Field</th><th>Source</th><th>Example</th></tr>
          </thead>
          <tbody>
            <tr><td>Graphic Signature</td><td>Mobile app signature capture</td><td>[Signature image]</td></tr>
            <tr><td>Printed Name</td><td>User account profile</td><td>James Rahman</td></tr>
            <tr><td>Role / Title</td><td>Signing role configuration or user profile</td><td>Senior Cargo Surveyor</td></tr>
            <tr><td>Organisation</td><td>User account organisation</td><td>CargoClave Surveying Ltd.</td></tr>
            <tr><td>Sign-off Timestamp</td><td>Signature event log</td><td>04 Aug 2026, 14:32 UTC+8</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="configuration" title="Configuration Options">
        <table>
          <thead>
            <tr><th>Setting</th><th>Description</th><th>Default</th></tr>
          </thead>
          <tbody>
            <tr><td>Signing Role</td><td>Link this Signature element to a specific signing role (Surveyor, Client Rep, Officer).</td><td>—</td></tr>
            <tr><td>Show Graphic Signature</td><td>Display the captured signature image above the printed name line.</td><td>On</td></tr>
            <tr><td>Signature Image Size</td><td>Small (60px), Medium (80px), or Large (120px) height for the signature image.</td><td>Medium</td></tr>
            <tr><td>Show Timestamp</td><td>Display the date and time when the signature was applied.</td><td>On</td></tr>
            <tr><td>Show Organisation</td><td>Display the organisation name below the printed name.</td><td>On</td></tr>
            <tr><td>Show Role</td><td>Display the role / title below the printed name.</td><td>On</td></tr>
            <tr><td>Layout</td><td>Single column (one signature per row) or multi-column (multiple signatures side by side).</td><td>Single column</td></tr>
            <tr><td>Signature Line</td><td>Show a horizontal underline below the signature image for unsigned reports.</td><td>On</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="designer-behavior" title="Designer Behaviour">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>The Signature block cannot be moved above the Header element. It must remain in the lower section of the layout.</li>
          <li>In the live preview, unsigned Signature slots display a placeholder line instead of a graphic signature image.</li>
          <li>Multiple Signature elements can be added to the layout for multi-party reports.</li>
          <li>The signing role dropdown only shows roles defined in the linked inspection template workflow.</li>
        </ul>
      </Section>

      <Section id="properties" title="Supported Properties">
        <table>
          <thead>
            <tr><th>Property</th><th>Type</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>signingRole</td><td>String (role key)</td><td>The workflow role whose signature this block renders.</td></tr>
            <tr><td>showGraphicSignature</td><td>Boolean</td><td>Whether to render the captured signature image.</td></tr>
            <tr><td>signatureImageSize</td><td>Enum (small/medium/large)</td><td>Height of the signature image in the PDF.</td></tr>
            <tr><td>showTimestamp</td><td>Boolean</td><td>Display the sign-off timestamp.</td></tr>
            <tr><td>showOrganisation</td><td>Boolean</td><td>Display the organisation name.</td></tr>
            <tr><td>showRole</td><td>Boolean</td><td>Display the role/title text.</td></tr>
            <tr><td>layout</td><td>Enum (single/multi-column)</td><td>Arrangement of signature blocks.</td></tr>
            <tr><td>showSignatureLine</td><td>Boolean</td><td>Render a horizontal line when signature is not yet captured.</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="validation" title="Validation Rules">
        <Callout type="warning">
          Every report template must include at least one Signature element linked to the <strong>Surveyor</strong> role before it can be published. Templates missing a Signature block are blocked from publication.
        </Callout>
        <Callout type="note">
          If a report is generated before all signing parties have completed their signature, the Signature element renders an empty signature line with the role name and a "Pending" timestamp. The report is marked as unsigned in the Reports Management screen.
        </Callout>
      </Section>

      <Section id="use-cases" title="Common Use Cases">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>Single surveyor sign-off on standard cargo inspection reports.</li>
          <li>Dual sign-off from the cargo surveyor and the vessel's Chief Officer on draught survey reports.</li>
          <li>Three-party sign-off (Surveyor, Client Rep, Port Authority) on phytosanitary certificates.</li>
          <li>Internal quality review sign-off from senior surveyors before report delivery to clients.</li>
        </ul>
      </Section>

      <Section id="mistakes" title="Common Mistakes">
        <Callout type="warning">
          Linking two separate Signature elements to the same signing role results in duplicate signature blocks for the same party. Each signing role should appear in exactly one Signature element.
        </Callout>
        <Callout type="warning">
          Do not embed signature placeholders as static images or labels inside a Text block. Only the Signature element correctly resolves the dynamic graphic signature from the mobile capture system.
        </Callout>
      </Section>

      <Section id="troubleshooting" title="Troubleshooting">
        <table>
          <thead>
            <tr><th>Issue</th><th>Cause</th><th>Resolution</th></tr>
          </thead>
          <tbody>
            <tr><td>Signature image not appearing in PDF</td><td>Signing party has not submitted their signature yet</td><td>Confirm the mobile app submission is complete and the signing step is marked Done.</td></tr>
            <tr><td>Signing role not available in dropdown</td><td>Role not defined in the linked inspection template workflow</td><td>Add the required signing role in the inspection template's Workflow Stages configuration.</td></tr>
            <tr><td>Timestamp showing wrong timezone</td><td>Platform timezone setting is not configured</td><td>Update the organisation timezone in platform settings; timestamps will re-render correctly.</td></tr>
            <tr><td>Template blocked from publishing</td><td>No Signature element in the template</td><td>Add a Signature element linked to the Surveyor role and re-attempt publishing.</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="related" title="Related Elements">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><a href="/reports/report-builder/elements/rich-text">Text</a> — For the certification statement or declaration text placed above the Signature block.</li>
          <li><a href="/reports/report-builder/elements/header">Header</a> — The companion opening element that pairs with Signature to frame the document.</li>
          <li><a href="/reports/report-builder/publishing">Preview & Publishing</a> — Signature elements must be present before a template can be published.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
