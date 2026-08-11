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

export default function PhotoGridElement() {
  return (
    <DocPage
hideImage={true}
            path="/reports/report-builder/elements/photo-grid"
      eyebrow="Report Builder · Elements"
      title="Photo Grid"
      description="The Photo Grid element compiles surveyor-uploaded inspection images into a structured visual evidence grid with optional captions, GPS stamps, and group headings."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The <strong>Photo Grid</strong> element aggregates images uploaded by surveyors during mobile field inspections and lays them out in a structured rows-and-columns grid within the PDF report. Rather than appending raw image files as attachments, the Photo Grid presents photographic evidence in a clean, labelled, professionally arranged format.
        </p>
        <DocImage path="/reports/report-builder/elements/photo-grid" hideCaption={true} />
      </Section>

      <Section id="purpose" title="Purpose">
        <p>
          Photo Grids transform mobile photo capture events into a structured evidence section that port authorities, clients, and insurance assessors can review directly within the report PDF — without needing to download separate image files or navigate media attachments.
        </p>
      </Section>

      <Section id="business-scenario" title="Business Scenario">
        <p>
          During a container inspection, a surveyor uploads 24 photographs across four hatches using the mobile app. When the report is generated, the Photo Grid automatically pulls all 24 images, groups them by hatch number, and lays them out in a 2-column grid with GPS coordinates and upload timestamps beneath each image. A section header label separates each hatch group.
        </p>
      </Section>

      <Section id="when-to-use" title="When To Use">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>For cargo condition evidence — seal integrity, surface damage, contamination, stacking issues.</li>
          <li>For pre-load and post-discharge comparative photo documentation.</li>
          <li>Whenever the client or regulatory authority requires photographic evidence embedded in the report PDF.</li>
          <li>For tally reports where photographic records of each container or hatch need to accompany the data rows.</li>
        </ul>
      </Section>

      <Section id="how-it-works" title="How It Works">
        <p>
          The Photo Grid reads all images uploaded to the active contract's survey submissions. Images can be filtered, grouped, and sorted before being laid out in the grid.
        </p>
        <table>
          <thead>
            <tr><th>Step</th><th>What Happens</th></tr>
          </thead>
          <tbody>
            <tr><td>1. Image collection</td><td>Platform fetches all images uploaded via the mobile app to submissions linked to this contract.</td></tr>
            <tr><td>2. Grouping</td><td>Images are grouped by the configured grouping field (e.g. Hatch Number, Shift, Container ID).</td></tr>
            <tr><td>3. Layout</td><td>Images are arranged in the configured number of columns per row within each group.</td></tr>
            <tr><td>4. Captions</td><td>Each image cell shows the configured caption metadata (timestamp, GPS, surveyor name, note).</td></tr>
            <tr><td>5. PDF render</td><td>Groups flow vertically; groups wrap to a new page if they exceed the remaining page height.</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="configuration" title="Configuration Options">
        <table>
          <thead>
            <tr><th>Setting</th><th>Description</th><th>Default</th></tr>
          </thead>
          <tbody>
            <tr><td>Grouping Field</td><td>Survey metadata field to group images by (e.g. Hatch Number, Survey Type, Container ID).</td><td>None (all images in one group)</td></tr>
            <tr><td>Columns per Row</td><td>Number of images displayed side by side per row (1–4).</td><td>2</td></tr>
            <tr><td>Image Quality</td><td>Standard (compressed for smaller PDF) or High (full resolution for detailed inspection use).</td><td>Standard</td></tr>
            <tr><td>Show Captions</td><td>Display a caption strip below each image.</td><td>On</td></tr>
            <tr><td>Caption Fields</td><td>Which metadata appears in the caption: Timestamp, GPS, Surveyor Name, Custom Note.</td><td>Timestamp + GPS</td></tr>
            <tr><td>Show Group Headers</td><td>Render a section label above each image group (e.g. "Hatch 3 – Pre-Load").</td><td>On</td></tr>
            <tr><td>Image Sort Order</td><td>Sort images within each group by upload time ascending or descending.</td><td>Ascending</td></tr>
            <tr><td>Max Images per Group</td><td>Limit the number of images shown per group to prevent very long photo sections.</td><td>Unlimited</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="designer-behavior" title="Designer Behaviour">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>In the designer, the Photo Grid block shows a placeholder tile grid indicating the configured column count.</li>
          <li>Actual images are only loaded in the live preview panel when sample data mode is enabled.</li>
          <li>The block auto-expands based on the number of images — its height cannot be manually constrained.</li>
          <li>Clicking the block opens the grouping and caption configuration in the right properties panel.</li>
        </ul>
      </Section>

      <Section id="properties" title="Supported Properties">
        <table>
          <thead>
            <tr><th>Property</th><th>Type</th><th>Description</th></tr>
          </thead>
          <tbody>
            <tr><td>groupingField</td><td>String (field key) or null</td><td>Survey field to group images by.</td></tr>
            <tr><td>columnsPerRow</td><td>Number (1–4)</td><td>Images per row in the grid.</td></tr>
            <tr><td>imageQuality</td><td>Enum (standard/high)</td><td>Image compression level in PDF export.</td></tr>
            <tr><td>showCaptions</td><td>Boolean</td><td>Whether caption strips are rendered under each image.</td></tr>
            <tr><td>captionFields</td><td>Array of strings</td><td>Metadata fields shown in the caption strip.</td></tr>
            <tr><td>showGroupHeaders</td><td>Boolean</td><td>Whether section labels appear above each group.</td></tr>
            <tr><td>sortOrder</td><td>Enum (asc/desc)</td><td>Image ordering within groups.</td></tr>
            <tr><td>maxImagesPerGroup</td><td>Number or null</td><td>Cap on images shown per group.</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="validation" title="Validation Rules">
        <Callout type="note">
          If a contract's survey submissions contain no uploaded photos, the Photo Grid renders a clean "No Images Available" placeholder message rather than leaving a blank gap in the PDF layout. This prevents confusing empty sections in generated reports.
        </Callout>
        <Callout type="warning">
          Images are fetched from the CargoClave S3 media bucket at report generation time. If the S3 bucket is unreachable during generation, affected image cells display a broken image placeholder. Verify network access to the S3 bucket before bulk generating reports.
        </Callout>
      </Section>

      <Section id="use-cases" title="Common Use Cases">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li>Pre-load container condition photographic evidence for shipping line clients.</li>
          <li>Post-discharge damage documentation for insurance claim reports.</li>
          <li>Fumigation and treatment evidence photos for phytosanitary certificates.</li>
          <li>Cargo stowage and segregation photos for port authority inspections.</li>
        </ul>
      </Section>

      <Section id="mistakes" title="Common Mistakes">
        <Callout type="warning">
          Setting Columns per Row to 4 on A4 paper produces very small thumbnails (approximately 40mm wide). At this size, cargo markings, seal numbers, and damage detail are unreadable. Use 2 columns for inspection evidence photos.
        </Callout>
        <Callout type="warning">
          Enabling High image quality without a Max Images limit on contracts with 100+ photos will generate PDFs exceeding 100MB that are impractical to send to clients. Always set a reasonable Max Images limit or use Standard quality for high-volume photo contracts.
        </Callout>
      </Section>

      <Section id="troubleshooting" title="Troubleshooting">
        <table>
          <thead>
            <tr><th>Issue</th><th>Cause</th><th>Resolution</th></tr>
          </thead>
          <tbody>
            <tr><td>No images appearing in PDF</td><td>No photos uploaded in mobile app submissions</td><td>Confirm surveyors submitted photos in the mobile app before report generation.</td></tr>
            <tr><td>Broken image icons in PDF</td><td>S3 bucket unreachable during generation</td><td>Check S3 bucket availability and retry report generation.</td></tr>
            <tr><td>Images not grouped correctly</td><td>Grouping field is not populated in survey submissions</td><td>Ensure the grouping field (e.g. Hatch Number) is required in the survey template and answered in every submission.</td></tr>
            <tr><td>PDF file too large</td><td>High quality + unlimited images on a large contract</td><td>Switch to Standard quality and/or set a Max Images per Group limit.</td></tr>
          </tbody>
        </table>
      </Section>

      <Section id="related" title="Related Elements">
        <ul className="list-disc pl-5 space-y-1.5 my-3 text-[13.5px]">
          <li><a href="/reports/report-builder/elements/flat-table">Flat Table</a> — Often used alongside Photo Grid to show the data rows that correspond to the photographic evidence.</li>
          <li><a href="/reports/report-builder/elements/rich-text">Text</a> — For a photographic evidence summary statement placed above the Photo Grid.</li>
          <li><a href="/mobile/media-capture">Mobile Media Capture</a> — Where surveyors upload the photos that the Photo Grid element renders.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
