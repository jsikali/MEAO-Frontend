import { Button, Modal } from "antd";
import { useState } from "react";

const Settings = ({ getToken }) => {
  console.log("hi its me settings");
  console.log(`the token: ${getToken()}`);

  // Modal state
  const [modalVisible, setModalVisible] = useState(false);

  const containerStyle = {
    backgroundColor: "#c2c6E8",
    borderRadius: "16px",
    boxSizing: "border-box",
    height: "100%",
    overflow: "auto",
    padding: "0 5%",
  };

  // Modal content styles
  const modalContentStyle = {
    whiteSpace: "pre-line", // Preserves line breaks
  };

  // PAINTA compliance content
  const privacyPolicyContent = `Privacy Policy for MEAO
(Messages Everywhere All at Once)

1. Introduction

MEAO is committed to protecting your privacy with the highest degree of care and transparency. This Privacy Policy describes how we collect, use, store, share, and retain information when you use our messaging platform. In addition, it describes how we comply with PAINTA and other applicable privacy regulations.

2. Data We Collect

2.1 Subscription & Billing Information
• Account Identifier: Pseudonymous user ID.
• Subscription Tier: Free vs. Premium ($30/month)
• Payment Details: Fake debit/credit card info can be inputted to gain a 30 day subscription, but this information is not actually stored.

2.2 Audit Logs
• What: Timestamped records of key system events (e.g., login, message-tag generation, subscription changes).
• Identifier: Only your pseudonymous account ID (no real name, email, or other PII).

3. How We Use Your Data

• Advertising (Free Tier): We trigger untargeted ads based on user message count. No raw message content or PII is processed or shared.
• Subscription Management (Premium Tier): We manage your paid status, control access to ad-free service and premium features (e.g., custom fonts, badges).
• PAINTA Compliance: Usage logs of messages sent remain for 6 months after account deletion (via request to be forgotten) to provide a period for law enforcement to potentially request user information before it is eventually deleted.

4. Data Sharing

• No Data Brokers: We never sell or rent user data to third-party data brokers.
• Ad Partners: We do not collect/use any user data to provide ads. All advertisements are untargeted and fetched from an ad server that only receives information to associate ads served to our users with our service for the sake of payment. It is able to see the number of messages a user sends so that they can be shown an ad, but no message content will be relayed to the advertisers.
• Legal Compliance: We only disclose data in the event of law enforcement requests in line with PAINTA. Disclosure of user data would be limited to their chat logs and information about messages being reported/redacted.

5. Data Retention & Right of Erasure

Data retention details:

  - Data Type: Subscription Records
    Retention Period: Up to 7 years
    Notes: For accounting and audit purposes

  - Data Type: Audit Logs
    Retention Period: 180 days
    Notes: Pseudonymous; auto-purge after retention

• Right of Erasure: You may request deletion of all personal data linked to your account at any time. Audit logs (pseudonymous) are retained for up to 180 days to satisfy PAINTA reporting requirements, then automatically purged.

6. Security Measures

We implement industry-standard safeguards:
• Encryption of data at rest and in transit.
• Access controls and role-based permissions.
• Regular security audits and penetration testing.

7. Changes to This Policy

We may update this Privacy Policy to reflect new features, regulatory requirements, or business practices. Material changes will be communicated via in-app notification at least 30 days before they take effect.
`;

  return (
    <div style={containerStyle}>
      <div
        style={{
          marginTop: "2vh",
          height: "3vh",
        }}
      >
        <h2>settings</h2>
      </div>
      <div className="top-box-content">
        <div className="compliance">
          <Button
            type="primary"
            onClick={() => setModalVisible(true)}
            style={{
              borderRadius: "10px",
              marginBottom: "10px"
            }}
          >
            Privacy Policy
          </Button>
          <Button
            type="primary"
            onClick={() => location.reload()} //send request and reload to sign them out since acc del anyways
            style={{
              borderRadius: "10px",
            }}
          >
            Forget Me
          </Button>
        </div>

        {/* Modal for privacy policy */}
        <Modal
          title="Privacy Policy"
          open={modalVisible}
          onOk={() => setModalVisible(false)}
          onCancel={() => setModalVisible(false)}
          width={700}
        >
          <div style={modalContentStyle}>
            {privacyPolicyContent}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Settings;