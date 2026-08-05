import React from "react";
import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";

const toc = [
  { id: "review-guidelines", label: "Review Guidelines" },
  { id: "gps-validation", label: "GPS Validation Tips" },
  { id: "evidence-verification", label: "Evidence Verification" },
  { id: "batch-recommendations", label: "Batch Review Recommendations" },
  { id: "performance", label: "Performance Recommendations" },
];

export default function InspectionBestPractices() {
  return (
    <DocPage
      path="/operations/inspection-review/best-practices"
      eyebrow="Inspection Review"
      title="Best Practices"
      description="Operational guidelines for efficient and accurate inspection reviews — GPS validation, evidence verification, batch processing, and performance recommendations."
      toc={toc}
      hideVideo={true}
    >
      <Section id="review-guidelines" title="Review Guidelines">
        <p>
          Following these guidelines ensures consistent, compliant, and efficient inspection reviews across the operations team:
        </p>

        <ul className="list-disc pl-5 space-y-2.5 my-4 text-[13.5px]">
          <li><strong>Prompt Verification:</strong> Audit submitted checklists within 2 hours of mobile transmission to maintain SLA timelines and prevent bottlenecks in the review queue.</li>
          <li><strong>Prioritise by Badge:</strong> Always process <span className="text-rose-600 dark:text-rose-400 font-semibold">High Priority</span> inspections before <span className="text-amber-600 dark:text-amber-400 font-semibold">Medium</span> and <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Low</span> priority ones to avoid SLA breaches.</li>
          <li><strong>Check All Tabs:</strong> Before approving, always visit all four tabs (Inspection Details, Evidence, GPS, Revision History) to ensure nothing is missed.</li>
          <li><strong>Document Override Justifications:</strong> Whenever overriding a GPS warning or approving an inspection with missing evidence, always enter a detailed justification note in the Internal Reviewer Notes field for compliance traceability.</li>
          <li><strong>Shift Handover:</strong> At the end of each shift, review the Statistics Overview KPIs and handover any In Progress inspections to the incoming coordinator with clear internal notes on review status.</li>
        </ul>
      </Section>

      <Section id="gps-validation" title="GPS Validation Tips">
        <p>
          GPS location compliance is one of the most critical audit steps in the Inspection Review process. Follow these tips to handle GPS data accurately:
        </p>

        <ul className="list-disc pl-5 space-y-2.5 my-4 text-[13.5px]">
          <li><strong>Always Open the GPS Tab:</strong> Do not rely solely on the inspection list — open the GPS tab in the detail view to compare expected vs. actual coordinates for every inspection.</li>
          <li><strong>Understand Distance Variance:</strong> A GPS warning (triggered at &gt;1.0 km variance) does not automatically mean fraud. Surveyors may be positioned at a terminal office, nearby berth, or in a cellular dead zone.</li>
          <li><strong>Cross-Reference Satellite Map:</strong> When a GPS warning is present, check the satellite map thumbnail alongside the expected berth coordinates before deciding to override or reject.</li>
          <li><strong>Check EXIF Timestamps:</strong> When reviewing photos, confirm the EXIF capture timestamp falls within the expected inspection date/time window. Timestamps significantly outside this window may indicate evidence from a different inspection.</li>
          <li><strong>Never Auto-Approve High GPS Variance:</strong> Inspections with GPS variance &gt;5 km should not be approved without supervisor review and a documented justification note.</li>
        </ul>

        <Callout type="warning">
          GPS coordinates captured in areas with poor satellite reception may have high accuracy errors (±500 m or more). Coordinate with the field surveyor via Mobile Revision Feedback before rejecting based solely on GPS mismatch.
        </Callout>
      </Section>

      <Section id="evidence-verification" title="Evidence Verification">
        <p>
          Thorough evidence verification protects the organisation against disputes, insurance claims, and regulatory non-compliance:
        </p>

        <ul className="list-disc pl-5 space-y-2.5 my-4 text-[13.5px]">
          <li><strong>Open Every Photo in Full-Screen:</strong> Thumbnail views are insufficient for seal verification. Always use the Media Preview lightbox to inspect photos at full resolution.</li>
          <li><strong>Verify Seal Numbers:</strong> Cross-reference container seal numbers visible in the uploaded photos against the Bill of Lading manifest attached in the Attachments section.</li>
          <li><strong>Check Evidence Counter First:</strong> Before scrolling through individual photos, check the Evidence Counter widget to confirm the expected number of photos, videos, and documents are present.</li>
          <li><strong>Handle Missing Evidence Proactively:</strong> If the Evidence Counter shows a Missing Evidence warning, use Mobile Revision Feedback to notify the surveyor immediately rather than rejecting the inspection without explanation.</li>
          <li><strong>Validate Document Attachments:</strong> Confirm all required documents (weighbridge slips, BL manifests, customs clearances) are attached before approving inspections for high-value or regulated cargo.</li>
        </ul>
      </Section>

      <Section id="batch-recommendations" title="Batch Review Recommendations">
        <p>
          Batch Actions significantly accelerate high-volume review periods. Use them strategically while maintaining quality standards:
        </p>

        <ul className="list-disc pl-5 space-y-2.5 my-4 text-[13.5px]">
          <li><strong>Batch Approve Only After Individual Review:</strong> Use batch approval for inspections you have already individually verified. Do not batch-approve uninspected records to clear a backlog.</li>
          <li><strong>Use Filters Before Batch Selecting:</strong> Always apply status and date range filters before using Select All to ensure you are only selecting the intended subset of records.</li>
          <li><strong>Verify the Record Count:</strong> Before clicking Confirm in any batch operation dialog, verify the count of selected records matches your expectation.</li>
          <li><strong>Never Batch Delete Without Confirmation:</strong> Batch Delete is irreversible. Always confirm with your operations supervisor before executing a batch delete, even on clearly invalid records.</li>
          <li><strong>Check Skipped Records:</strong> After any batch operation, review the post-execution summary for records that were skipped due to permission restrictions or validation failures.</li>
        </ul>
      </Section>

      <Section id="performance" title="Performance Recommendations">
        <p>
          Maintain optimal Inspection Review performance with these configuration and operational recommendations:
        </p>

        <ul className="list-disc pl-5 space-y-2.5 my-4 text-[13.5px]">
          <li><strong>Use Date Range Filters:</strong> Always filter by date range during high-volume periods to avoid loading all historical records, which can slow down the dashboard.</li>
          <li><strong>Avoid Open-Ended Searches:</strong> Broad keyword searches across all records can be slow. Narrow searches using Contract Number or Surveyor filters first, then apply keyword search within the results.</li>
          <li><strong>Close Media Previews When Finished:</strong> Keeping multiple high-resolution lightbox previews open simultaneously can impact browser performance. Close previews after completing evidence verification for each inspection.</li>
          <li><strong>Process In Batches During Off-Peak Hours:</strong> For large batches of approvals or rejections, schedule batch operations during off-peak server hours to avoid impacting other users' dashboard responsiveness.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
