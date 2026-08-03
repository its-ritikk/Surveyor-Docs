import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import Callout from "../../../components/Callout";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "logo-specs", label: "Logo Specifications" },
  { id: "header-custom", label: "Header Customization" },
  { id: "rules", label: "Rules" },
];

export default function Branding() {
  return (
    <DocPage
      path="/reports/report-builder/branding"
      eyebrow="Report Builder"
      title="Branding"
      description="Applying custom organization styles and identities to report templates."
      toc={toc}
    >
      <Section id="overview" title="Overview">
        <p>
          Branding options ensure that all exported PDF reports reflect the customer's organization styling, watermark configs, and corporate identity.
        </p>
      </Section>

      <Section id="logo-specs" title="Logo Specifications">
        <p>
          Upload corporate logos (PNG or JPG format). The builder scales logos automatically to fit either standard header columns or full-width report title sheets.
        </p>
      </Section>

      <Section id="header-custom" title="Header Customization">
        <p>
          Configure company headers, billing addresses, tax registrations, and customer taglines to display on the first page or repeat on subsequent pages.
        </p>
      </Section>

      <Section id="rules" title="Rules">
        <Callout type="note">
          Branding changes are global to the template. Modifying branding logo uploads will update all subsequently generated reports for that template.
        </Callout>
      </Section>
    </DocPage>
  );
}
