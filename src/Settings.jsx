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
  const paintaContent = `In analyzing PAINTA, we have identified the following key requirements to add to MEAO:

Allow reporting of messages on the MEAO frontend
Each message will have a report icon that will send information about the reporter, sender, and message
This will allow for the "Falsehood Reporting" noted in Part I

Allow redaction of messages from permitted users on the MEAO frontend
Done by user admins (identified by their user id)
Message content replaced with [REDACTED]
This will allow for "Redaction" of messages noted in Part I while not permitting all users to censor each other

Begin logging of interactions on MEAO backend
By logging all interactions, messages sent, reported, redacted, etc can be found within a file that can be searched based on the interaction needed, allowing for compliance with "Logging" and "Reporting" outlined in Part II

Request to be forgotten in MEAO frontend
Button in settings to delete account
This will send a request to erase all information tied to the information after 6 months from the initial deletion request. This allows for compliance for Part III, as users will be deleted in time, but the delay assists with Part II "Reporting" compliance, as the delay gives law enforcement time to request reports on users. Logs are stored in the backend and sent with our Flask RESTful API

Request to have compliance with PAINTA explained on MEAO frontend
All visitors to MEAO, regardless of whether they are a current user, newcomer, or law enforcement, can access an explanation of MEAO's compliance with PAINTA on the MEAO frontend found in the settings box. Should a further explanation be requested, users can reach out to the creators of MEAO

do NOT email: fake email @ address . domain`;

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
            PAINTA compliance breakdown
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
        
        {/* Modal for PAINTA Compliance */}
        <Modal
          title="PAINTA Compliance Breakdown"
          open={modalVisible}
          onOk={() => setModalVisible(false)}
          onCancel={() => setModalVisible(false)}
          width={700}
        >
          <div style={modalContentStyle}>
            {paintaContent}
          </div>
        </Modal>
        
        {getToken().length == 0 ? (
          <h2>log in to access settings</h2>
        ) : (
          <h2>settings Soon(tm)!</h2>
        )}
      </div>
    </div>
  );
};

export default Settings;