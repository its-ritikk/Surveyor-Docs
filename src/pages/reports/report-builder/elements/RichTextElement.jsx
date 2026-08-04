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
  { id: "best-practices", label: "Best Practices" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "related", label: "Related Elements" },
];

export default function RichTextElement() {
  return (
    <DocPage
      path="/reports/report-builder/elements/rich-text"
      eyebrow="Report Builder · Elements"
      title="Rich Text"
      description="The Rich Text element provides a narrative block editor supporting free-form text, formatting, and dynamic variable injection for statements, remarks, and disclaimers."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Rich Text</strong> element adds a free-form paragraph block to the report canvas. Unlike Label / Value which renders discrete data points, Rich Text supports multi-sentence narrative content with inline formatting (bold, italic, underline) and the ability to inject dynamic variable values inline within the paragraph text.
        </p>
        <DocImage path="/reports/report-builder/elements/rich-text" />
      </Section>

      <Section id="purpose" title="Purpose">
        <p>
          Rich Text exists to handle the narrative portions of a report that cannot be expressed through structured data rows or table cells — inspection conclusions, legal disclaimers, certificate statements, and contextual remarks that read as natural language.
        </p>
      </Section>

      <Section id="business-scenario" title="Business Scenario">
        <p>
          A phytosanitary inspection report requires a legally worded declaration paragraph:
        </p>
        <p>
          <em>"We, CargoClave Surveying Ltd., hereby certify that the cargo described as <strong>[commodity]</strong>, shipped under Bill of Lading <strong>[bl_number]</strong> aboard vessel <strong>[vessel_name]</strong>, was inspected on <strong>[inspection_date]</strong> and found to be free from visible signs of contamination."</em>
        </p>
        <p>
          The bracketed fields are variable tags that auto-resolve to the actual contract values — no manual typing needed at report generation time.
        </p>
      </Section>

      <Section id="when-to-use" title="When To Use">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>For legal disclaimers and certification statements that require fixed phrasing around dynamic data.</li>
          <li>For inspection conclusions and remarks that are narrative rather than tabular.</li>
          <li>As section headings or descriptive context between data blocks.</li>
          <li>For client-facing remarks that include specific contract references.</li>
        </ul>
      </Section>

      <Section id="how-it-works" title="How It Works">
        <p>
          The Rich Text editor provides a standard rich text toolbar. Within the paragraph, variable tags can be inserted using the tag picker toolbar button. Tags are displayed as highlighted tokens in the editor and resolve at render time to their actual values.
        </p>
        <table>
          <thead>
            <tr><th>Editor Feature</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>Formatting toolbar</td><td>Bold, italic, underline, strikethrough, alignment (left/centre/right), font size.</td></tr>
            <tr><td>Variable tag insertion</td><td>Click the {"{x}"} button to open the tag picker and insert a dynamic variable inline in the text.</td></tr>
            <tr><td>Bullet lists</td><td>Ordered and unordered lists are supported within the Rich Text block.</td></tr>
            <tr><td>Hyperlinks</td><td>Static URLs can be embedded as clickable links in the PDF output (non-interactive in print).</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="configuration" title="Configuration Options">
        <table>
          <thead>
            <tr><th>Setting</th><th>Description</th><th>Default</th></tr>
          </thead>
          <tbody>
            <tr><td>Content</td><td>The rich text body including static text, formatting, and embedded variable tags.</td><td>Empty</td></tr>
            <tr><td>Font Size</td><td>Base font size for the paragraph text (8pt–16pt).</td><td>10pt</td></tr>
            <tr><td>Line Height</td><td>Spacing between lines (1.0x, 1.25x, 1.5x, 2.0x).</td><td>1.25x</td></tr>
            <tr><td>Text Alignment</td><td>Left, centre, right, or justified alignment for the paragraph.</td><td>Left</td></tr>
            <tr><td>Top Padding</td><td>Space above the block in millimetres.</td><td>4mm</td></tr>
            <tr><td>Bottom Padding</td><td>Space below the block in millimetres.</td><td>4mm</td></tr>
            <tr><td>Background Shading</td><td>Optional light background fill to visually distinguish disclaimer or notice blocks.</td><td>None</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="designer-behavior" title="Designer Behaviour">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>Double-click the Rich Text block on the canvas to enter editing mode and modify the content.</li>
          <li>Variable tags embedded in the text appear as coloured chips inside the editor.</li>
          <li>The block auto-expands vertically to fit its content — there is no fixed height.</li>
          <li>The live preview panel shows resolved variable values as placeholder text while editing.</li>
        </ul>
      </Section>

      <Section id="properties" title="Supported Properties">
        <table>
          <thead>
            <tr><th>Property</th><th>Type</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>content</td><td>HTML string</td><td>The full rich text markup including inline variable tokens.</td></tr>
            <tr><td>fontSize</td><td>Number (pt)</td><td>Base paragraph font size.</td></tr>
            <tr><td>lineHeight</td><td>Number (multiplier)</td><td>Line spacing multiplier.</td></tr>
            <tr><td>textAlign</td><td>Enum (left/center/right/justify)</td><td>Paragraph alignment.</td></tr>
            <tr><td>paddingTop</td><td>Number (mm)</td><td>Space above the block.</td></tr>
            <tr><td>paddingBottom</td><td>Number (mm)</td><td>Space below the block.</td></tr>
            <tr><td>backgroundColor</td><td>Hex colour or null</td><td>Optional background shading.</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="validation" title="Validation Rules">
        <Callout type="warning">
          Variable tags embedded in the Rich Text content must reference active field keys. Stale tags (fields that were deleted from the survey) will display a broken-tag warning in the editor and block publishing.
        </Callout>
        <Callout type="note">
          Rich Text blocks with no content (empty body) are permitted during draft editing but will generate a validation warning at publish time if the block has no static text and no variable tags.
        </Callout>
      </Section>

      <Section id="use-cases" title="Common Use Cases">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>Phytosanitary and fumigation certificate statements with dynamic commodity and vessel references.</li>
          <li>Legal disclaimer paragraphs at the bottom of inspection reports.</li>
          <li>Section headers like "Cargo Condition Summary" to break up data blocks visually.</li>
          <li>Inspectors' remarks and narrative conclusions from field survey submissions.</li>
        </ul>
      </Section>

      <Section id="best-practices" title="Best Practices">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>Keep disclaimer and legal paragraphs in a single Rich Text block rather than splitting across multiple blocks to maintain consistent font and line spacing.</li>
          <li>Use <strong>Justified</strong> text alignment for formal certificate statements to match industry document standards.</li>
          <li>Apply a subtle background shading (#F8F9FA) to disclaimer blocks to visually separate them from cargo data sections.</li>
          <li>Test variable resolution in the live preview before publishing by toggling sample data mode.</li>
        </ul>
      </Section>

      <Section id="mistakes" title="Common Mistakes">
        <Callout type="warning">
          Hardcoding vessel names or contract numbers as static text instead of variable tags means the report will always show the same value regardless of the active contract. Always use variable tags for any dynamic data.
        </Callout>
        <Callout type="warning">
          Pasting content from Microsoft Word can inject hidden formatting markup that distorts the PDF render. Use the "Paste as plain text" option (Shift+Ctrl+V) and re-apply formatting using the editor toolbar.
        </Callout>
      </Section>

      <Section id="troubleshooting" title="Troubleshooting">
        <table>
          <thead>
            <tr><th>Issue</th><th>Cause</th><th>Resolution</th></tr>
          </thead>
          <tbody>
            <tr><td>Variable shows raw tag name in PDF</td><td>Tag was not registered in survey schema</td><td>Verify the tag key matches an active field in the linked survey template.</td></tr>
            <tr><td>Text overflows page width</td><td>A long word with no break point is in the content</td><td>Add a soft hyphen or break the word manually. Enable word-wrap in the block settings.</td></tr>
            <tr><td>Line spacing looks different in PDF vs preview</td><td>PDF renderer uses slightly different line metrics</td><td>Increase the Line Height setting by 0.1x and re-check the preview.</td></tr>
            <tr><td>Block publish-blocked with empty warning</td><td>Block body is empty</td><td>Add at least one sentence of static text or one variable tag, or delete the block if not needed.</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="related" title="Related Elements">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><a href="/reports/report-builder/elements/label-value">Label / Value</a> — For displaying discrete field values in key–value format rather than narrative prose.</li>
          <li><a href="/reports/report-builder/elements/signature">Signature</a> — Often placed below a Rich Text certification statement to provide the formal sign-off.</li>
          <li><a href="/reports/report-builder/elements/header">Header</a> — Context for the contract and vessel information that can be referenced via variable tags in Rich Text.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
