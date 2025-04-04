import { Button } from "antd";
import { useState } from "react";

const Settings = ({ getToken }) => {
  console.log("hi its me settings");
  console.log(`the token: ${getToken()}`);
  // console.log(typeof getToken());
  // console.log(getToken().length);
  //its a string and len=0 when not signed in
  const [visible, setVisible] = useState(false);

  const containerStyle = {
    backgroundColor: "#c2c6E8",
    borderRadius: "16px",
    boxSizing: "border-box",
    height: "100%",
    overflow: "auto",
    padding: "0 5%",
  };

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
            onClick={() => setVisible(!visible)}
            style={{
              borderRadius: "10px",
            }}
          >
            PAINTA Compliance Breakdown
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
        {visible && (
          // this is so ugly. i would say sorry but i need to db in like 5 minutes
          <p>
            In analyzing PAINTA, we have identified the following key
            requirements to add to MEAO:
            <br></br>
            <br></br>
            Allow reporting of messages on the MEAO
            frontend Each message will have a report icon that will send
            information about the reporter, sender, and message This will allow
            for the “Falsehood Reporting” noted in Part I 
            <br></br>
            <br></br>
            Allow redaction of
            messages from permitted users on the MEAO frontend Done by user
            admins (identified by their user id) Message content replaced with
            [REDACTED] This will allow for “Redaction” of messages noted in Part
            I while not permitting all users to censor each other 
            <br></br>
            <br></br>
            Begin logging
            of interactions on MEAO backend By logging all interactions,
            messages sent, reported, redacted, etc can be found within a file
            that can be searched based on the interaction needed, allowing for
            compliance with “Logging” and “Reporting” outlined in Part II
            <br></br>
            <br></br>
            Request to be forgotten in MEAO frontend Button in settings to
            delete account This will send a request to erase all information
            tied to the information after 6 months from the initial deletion
            request. This allows for compliance for Part III, as users will be
            deleted in time, but the delay assists with Part II “Reporting”
            compliance, as the delay gives law enforcement time to request
            reports on users. Logs are stored in the backend and sent with our
            Flask RESTful API 
            <br></br>
            <br></br>
            Request to have compliance with PAINTA explained
            on MEAO frontend All visitors to MEAO, regardless of whether they
            are a current user, newcomer, or law enforcement, can access an
            explanation of MEAO’s compliance with PAINTA on the MEAO frontend
            found in the settings box. Should a further explanation be
            requested, users can reach out to the creators of MEAO 
            <br></br>
            <br></br>
            do NOT email:
            fake email @ address . domain
          </p>
        )}
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
