import React from "react";
import DocPage, { Section } from "../../../components/DocPage";
import FieldTable from "../../../components/FieldTable";

const toc = [
  { id: "overview", label: "Overview" },
  { id: "auto-fields-list", label: "Auto-Configured System Fields" },
];

export default function AutoConfiguredFieldsPage() {
  return (
    <DocPage
      path="/configuration/surveys/auto-configured-fields"
      eyebrow="Survey Builder"
      title="Auto Configured Fields"
      description="System-managed metadata fields automatically populated by the mobile runtime engine."
      toc={toc}
      noMedia={true}
    >
      <Section id="overview" title="Overview">
        <p>
          <strong>Auto Configured Fields</strong> are read-only system elements automatically populated by the mobile app background runtime without requiring manual surveyor typing.
        </p>
      </Section>

      <Section id="auto-fields-list" title="Auto-Configured System Fields">
        <FieldTable
          rows={[
            { field: "Surveyor_User_ID", required: true, desc: "Authenticated user ID logged at check-in." },
            { field: "Device_IMEI_UUID", required: true, desc: "Unique mobile device hardware ID." },
            { field: "CheckIn_GPS_Coords", required: true, desc: "Latitude and longitude fix acquired on launch." },
            { field: "CheckIn_Timestamp", required: true, desc: "Exact UTC timestamp when survey was opened." },
            { field: "Submit_Timestamp", required: true, desc: "Exact UTC timestamp when survey was transmitted." },
            { field: "Contract_BL_Number", required: true, desc: "Parent shipping Bill of Lading reference." },
          ]}
        />
      </Section>
    </DocPage>
  );
}
