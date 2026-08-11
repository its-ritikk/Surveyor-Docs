import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "grouping", label: "Grouping Options" },
  { id: "captions", label: "Caption Formatting" },
  { id: "grid-config", label: "Grid Configuration" },
  { id: "zoom", label: "Zoom & Interactive Preview" },
  { id: "rules", label: "Rules" },
];

export default function PhotoGrid() {
  return (
    <DocPage
      path="/reports/report-builder/photo-grid"
      eyebrow="Report Builder"
      title="Photo Grid"
      description="The visual evidence compilation element that organises inspection images into structured grids within exported reports."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Photo Grid</strong> element aggregates surveyor-uploaded inspection images and compiles them into a structured rows-and-columns grid within the report PDF. Rather than appending raw image attachments, the Photo Grid presents evidence in a visually clean, labelled layout.
        </p>
      </Section>

      <Section id="grouping" title="Grouping Options">
        <p>
          Photos can be grouped and organised by survey metadata fields so that related evidence appears together:
        </p>
        <table>
          <thead>
            <tr>
              <th>Grouping Field</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Survey Type</td>
              <td>Photos separated into sections per checklist type (e.g. Pre-Load, Post-Load).</td>
            </tr>
            <tr>
              <td>Hatch Number</td>
              <td>Photos organised per cargo hatch for vessel inspection reports.</td>
            </tr>
            <tr>
              <td>Loading Shift</td>
              <td>Photos grouped by the shift during which they were captured.</td>
            </tr>
            <tr>
              <td>Container ID</td>
              <td>Photos linked to individual container inspection records.</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section id="captions" title="Caption Formatting">
        <p>
          Each photo cell in the grid can display a caption directly below the image. Captions support variable injection to display dynamic metadata automatically:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><strong>Upload Timestamp</strong> — Shows when the photo was captured on the device.</li>
          <li><strong>GPS Coordinates</strong> — Displays the location tag if GPS was enabled at capture.</li>
          <li><strong>Surveyor Name</strong> — Auto-fills the name of the surveyor who uploaded the image.</li>
          <li><strong>Custom Note</strong> — Any text note attached to the photo during submission.</li>
        </ul>
      </Section>

      <Section id="grid-config" title="Grid Configuration">
        <table>
          <thead>
            <tr>
              <th>Setting</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Columns per Row</td>
              <td>Set 1 to 4 image thumbnails per row. More columns produce smaller images; fewer columns produce larger images.</td>
            </tr>
            <tr>
              <td>Image Quality</td>
              <td>Select Standard or High resolution. High resolution increases PDF file size.</td>
            </tr>
            <tr>
              <td>Caption Visibility</td>
              <td>Toggle captions on or off for the entire Photo Grid block.</td>
            </tr>
            <tr>
              <td>Section Headers</td>
              <td>Show or hide the grouping field label as a section header above each photo group.</td>
            </tr>
          </tbody>
        </table>
      </Section>

      <Section id="zoom" title="Zoom & Interactive Preview">
        <p>
          In the live report preview panel, coordinators can click any grid thumbnail to open a high-resolution viewer overlay. This allows close inspections of seal numbers, cargo markings, or damage details before signing off the final report.
        </p>
      </Section>

      <Section id="rules" title="Rules">
        <Callout type="warning">
          If a surveyor submits an inspection without uploading any photos, the Photo Grid block renders a clean placeholder message rather than leaving a blank gap in the PDF layout.
        </Callout>
        <Callout type="note">
          Photos are stored in the CargoClave S3 media store and are fetched at report generation time. Ensure network access to the S3 bucket is available when generating reports in restricted network environments.
        </Callout>
      </Section>
    </DocPage>
  );
}
