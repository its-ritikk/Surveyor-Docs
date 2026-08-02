import DocPage, { Section } from "../../components/DocPage";
import Callout from "../../components/Callout";
import Steps from "../../components/Steps";

const toc = [
  { id: "sign-in", label: "Sign in to CargoClave" },
  { id: "otp", label: "Verify your OTP" },
  { id: "troubleshooting", label: "Troubleshooting sign-in" },
];

export default function SignIn() {
  return (
    <DocPage
      path="/getting-started/sign-in"
      eyebrow="Getting Started"
      title="Sign In & Verification"
      description="Every session — web or mobile — starts at the CargoClave portal with a passwordless, OTP-verified sign-in."
      toc={toc}
    >
      <Section id="sign-in" title="1.1 Sign in to CargoClave">
        <p>
          Open your browser and go to <code>portal.cargoclave.com</code>.
          Enter your registered email address or mobile number, then click{" "}
          <strong>Continue</strong>.
        </p>
        <Callout type="note">
          Your account must be created by an administrator before you can log
          in. Self sign-up is not available for the Surveyor Management
          System — access is provisioned centrally from the CargoClave
          Portal.
        </Callout>
      </Section>

      <Section id="otp" title="1.2 Verify your OTP">
        <p>
          A 6-digit one-time password is sent to your registered contact.
          Enter it in the <strong>Enter OTP</strong> field and click{" "}
          <strong>Verify &amp; Sign In</strong>.
        </p>
        <ul>
          <li>
            If you did not receive the OTP, click <strong>Resend Code</strong>.
          </li>
          <li>
            If you entered the wrong email or phone, click{" "}
            <strong>Change Email/Phone</strong> to go back.
          </li>
          <li>
            OTPs expire after a short time — always use the latest one
            received.
          </li>
        </ul>
      </Section>

      <Section id="troubleshooting" title="Troubleshooting sign-in">
        <Steps
          steps={[
            {
              title: "OTP not arriving",
              desc: (
                <p>
                  Wait at least 30 seconds, then use <strong>Resend
                  Code</strong>. Check that the email/phone shown on screen
                  matches your registered contact exactly.
                </p>
              ),
            },
            {
              title: "\u201cInvalid or expired OTP\u201d error",
              desc: (
                <p>
                  This means an older code was used. Request a fresh code
                  with <strong>Resend Code</strong> and enter only the most
                  recent one.
                </p>
              ),
            },
            {
              title: "Account not found",
              desc: (
                <p>
                  Ask your organization's administrator to verify that your
                  user has been created and invited from the CargoClave
                  Portal's user management screen.
                </p>
              ),
            },
          ]}
        />
        <Callout type="tip">
          Bookmark <code>portal.cargoclave.com</code> rather than the
          Surveyor App's direct URL — sign-in and OTP verification always
          happen at the portal, which then routes you into the app.
        </Callout>
      </Section>
    </DocPage>
  );
}
