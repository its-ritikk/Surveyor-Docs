import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";
import DocImage from "../../../components/DocImage";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "logo-specs", label: "Logo Specifications" },
  { id: "header-custom", label: "Header Customization" },
  { id: "config-table", label: "Branding Settings" },
  { id: "rules", label: "Rules" },
];

export default function Branding() {
  return (
    <DocPage
      path="/reports/report-builder/branding"
      eyebrow="Report Builder"
      title="Branding"
      description="Applying custom organisation styles, logos, and corporate identities to report templates."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Branding</strong> section of the Report Builder ensures that all exported PDF reports carry the customer's corporate identity — including logos, colour schemes, company details, and page headers — making reports presentation-ready for clients and port authorities.
        </p>
        <DocImage path="/reports/report-builder/branding" />
      </Section>

      <Section id="logo-specs" title="Logo Specifications">
        <p>
          Upload the organisation's logo from the Branding panel. The builder auto-scales logos to fit the configured header position.
        </p>
        <table>
          <thead>
            <tr>
              <th>Specification</th>
              <th>Requirement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Accepted Formats</td>
              <td>PNG, JPG, SVG</td>
            </tr>
            <tr>
              <td>Recommended Size</td>
              <td>Minimum 300 × 100 px at 96 dpi for clear PDF output</td>
            </tr>
            <tr>
              <td>Max File Size</td>
              <td>2 MB per logo upload</td>
            </tr>
            <tr>
              <td>Transparency</td>
              <td>PNG with transparent background is recommended to avoid white boxes on coloured headers</td>
            </tr>
            <tr>
              <td>Placement</td>
              <td>Left-aligned header column, right-aligned header column, or full-width title banner</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section id="header-custom" title="Header Customization">
        <p>
          Configure the content displayed at the top of every report page. Header fields support static text and variable injection:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Company Name & Tagline</strong> — Displayed alongside or below the logo.</li>
          <li><strong>Billing Address</strong> — Renders on the first page or repeats on every page.</li>
          <li><strong>Tax Registration Number</strong> — For compliance documents requiring legal identifiers.</li>
          <li><strong>Contact Details</strong> — Email, phone, and website fields injected into the header block.</li>
          <li><strong>Repeat Header on Pages</strong> — Toggle to print the header on every page or only the first page.</li>
        </ul>
      </Section>

      <Section id="config-table" title="Branding Settings">
        <table>
          <thead>
            <tr>
              <th>Setting</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Primary Colour</td>
              <td>Hex colour used for table header backgrounds, section dividers, and heading accents.</td>
            </tr>
            <tr>
              <td>Secondary Colour</td>
              <td>Used for alternating row shading in Flat Tables when row banding is enabled.</td>
            </tr>
            <tr>
              <td>Font Family</td>
              <td>Select from available PDF-safe fonts: Helvetica, Times New Roman, or Arial.</td>
            </tr>
            <tr>
              <td>Page Margins</td>
              <td>Set top, bottom, left, and right page margins in millimetres for the PDF export.</td>
            </tr>
            <tr>
              <td>Watermark</td>
              <td>Add a diagonal "DRAFT" or custom text watermark across all pages until the report is finalised.</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section id="rules" title="Rules">
        <Callout type="note">
          Branding changes are <strong>global to the template</strong>. Modifying the logo or colour scheme will affect all reports subsequently generated from that template. Previously generated and archived reports are not retroactively updated.
        </Callout>
      </Section>
    </DocPage>
  );
}
