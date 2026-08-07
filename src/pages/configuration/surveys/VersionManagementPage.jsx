import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "revision-numbers", label: "Revision Numbers (v1.0 vs v2.0)" },
  { id: "backward-compatibility", label: "Backward Compatibility Rules" },
  { id: "cloning-restoring", label: "Version Cloning & Restoring" },
];

export default function VersionManagementPage() {
  return (
    <DocPage
      path="/configuration/surveys/version-management"
      eyebrow="Survey Builder"
      title="Version Management"
      description="Full revision history control (v1.0, v2.0), backward compatibility rules, and version cloning."
      toc={toc}
      noMedia={true}
    >
      <Section id="overview" title="Overview">
        <p>
          The Survey Builder implements full <strong>Version Control</strong>. Every publish event generates a timestamped revision snapshot, guaranteeing audit reproducibility across multi-year maritime contracts.
        </p>
      </Section>

      <Section id="revision-numbers" title="Revision Numbers (v1.0 vs v2.0)">
        <ul className="list-disc pl-5 space-y-2 text-[13.5px]">
          <li><strong>Major Revisions (v2.0):</strong> Structural changes (adding compulsory fields or modifying database tags).</li>
        </ul>
      </Section>

      <Section id="backward-compatibility" title="Backward Compatibility Rules">
        <p>
          Active contracts locked to <code>v1.0</code> continue executing v1.0 schema on mobile devices, even if a coordinator publishes <code>v2.0</code> for new future contracts.
        </p>
      </Section>

      <Section id="cloning-restoring" title="Version Cloning &amp; Restoring">
        <p>
          Administrators can view historical revision logs, compare side-by-side field diffs, and restore or clone previous published versions with one click.
        </p>
        <Callout type="tip">
          Clone historical survey versions when creating similar checksheet blueprints for new port terminals.
        </Callout>
      </Section>
    </DocPage>
  );
}
