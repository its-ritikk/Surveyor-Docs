import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import { StatusBadge } from "../../components/StatusBits";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "purpose", label: "Purpose" },
  { id: "features", label: "Feature Overview" },
  { id: "sections", label: "Important Functional Sections" },
  { id: "home", label: "Detailed Feature Explanation" },
  { id: "workflow", label: "User Workflow" },
  { id: "validations", label: "Validation Rules" },
  { id: "permissions", label: "User Permissions" },
  { id: "related", label: "Related Features" },
  { id: "best-practices", label: "Best Practices" },
];

export default function MobileOverview() {
  return (
    <DocPage
      path="/mobile/overview"
      eyebrow="Mobile Surveyor"
      title="Mobile Surveyor App"
      description="The Flutter-based companion client built for Android and iOS devices, enabling field surveyors to coordinate dispatches, check locations, and capture survey metrics."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          The Mobile Surveyor App is the mobile client used by field inspectors at port terminals. It handles local checksheets, offline data caching, camera integration, and GPS coordinates telemetry.
        </p>
      </Section>

      <Section id="purpose" title="Purpose">
        <p>
          Provides field inspectors with an offline-first interface to complete inspections on site without requiring a continuous web browser connection or laptop.
        </p>
      </Section>

      <Section id="features" title="Feature Overview">
        <p>
          Key capabilities of the mobile client include local database synchronization, passwordless OTP sign-in, location check-in validation, and photographic evidence uploads.
        </p>
      </Section>

      <Section id="sections" title="Important Functional Sections">
        <p>
          The mobile client is structured around the following operational workspaces:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-4">
          <li><strong>Home Dashboard</strong> — Displays workload metrics, sync indicators, and recent dispatcher alerts.</li>
          <li><strong>Contracts Register</strong> — Lists assigned jobs, showing planned locations and cargo parameters.</li>
          <li><strong>Checksheet Canvas</strong> — Renders checklist questions and maps witness signature pads.</li>
          <li><strong>Local Database</strong> — Implements offline sqlite storage for background synchronization.</li>
        </ul>
      </Section>

      <Section id="home" title="Detailed Feature Explanation">
        <p>
          Detailed mechanics of the mobile app features:
        </p>
        <ul className="list-disc pl-5 space-y-2.5 my-4 text-[13.5px]">
          <li>
            <strong>Workload Metrics</strong> — The Home Dashboard tracks Pending, In Progress, Approved, and Rejected surveys assigned to the active inspector.
          </li>
          <li>
            <strong>Contracts Filter</strong> — Inspectors can filter contracts by All, Active, and Completed, or use the search bar to locate specific cargo dispatches.
          </li>
          <li>
            <strong>Offline Synchronization</strong> — If terminal signal is weak, data is saved locally, and automatically synchronized to the server once connection is restored.
          </li>
        </ul>
      </Section>

      <Section id="workflow" title="User Workflow">
        <p>
          The normal operational flow for field surveyors:
        </p>
        <ol className="list-decimal pl-5 space-y-1.5 my-4">
          <li>Log in using the CargoClave OTP verification flow.</li>
          <li>Open the Home Dashboard to view active assignments.</li>
          <li>Open the Contracts tab to locate the planned port terminal location.</li>
          <li>Execute assigned surveys and submit completed checklist data.</li>
        </ol>
      </Section>

      <Section id="validations" title="Validation Rules">
        <p>
          The mobile client enforces validation rules built into the active templates:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-4">
          <li><strong>Required Fields</strong> — Block submission if mandatory inputs are left blank.</li>
          <li><strong>Range Limits</strong> — Validates numeric fields to ensure they fall within acceptable ranges.</li>
        </ul>
      </Section>

      <Section id="permissions" title="User Permissions">
        <p>
          Access is limited to users assigned the <StatusBadge color="slate">Surveyor</StatusBadge> role. Inspectors can only view and sync contract jobs to which they are explicitly mapped in the contract's Execution Plan.
        </p>
      </Section>

      <Section id="related" title="Related Features">
        <p>
          The Mobile App syncs directly with the following features:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 my-4">
          <li><a href="/operations/contracts">Contract Management</a> — Where dispatchers plan activities and assign surveyors.</li>
          <li><a href="/operations/inspection-review">Inspection Review</a> — Where supervisors verify coordinates and approve or reject submissions.</li>
        </ul>
      </Section>

      <Section id="best-practices" title="Best Practices">
        <Callout type="note">
          Keep the application running in the background while network coverage is low to allow the offline sync engine to sync pending files automatically when signal is recovered.
        </Callout>
      </Section>
    </DocPage>
  );
}
