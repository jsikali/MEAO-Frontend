import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import axios from "axios";
// import MessageSendButton from "./MessageSendButton.jsx";
// import { API_ADDRESS, FETCH_FREQUENCY } from './App.jsx';

let TriggerAd = () => {
	console.log("trigger an advert");
}

const CatnipAdvert = () => {
	
	console.log("HELLO HI SHOW AN AD PLEASEEEEEEEEEEEEEE");
  //so idk what i was thinking when i wrote func um. sorry :)
  //anyways. ty kallista i am stealing your code ^^

  var [modalVisible, setModalVisible] = useState(true);
  
  useEffect(() => {
	TriggerAd = () => setModalVisible(true);
 }, []);

  TriggerAd = () => setModalVisible(true);

  const containerStyle = {
    backgroundColor: "#c2c6E8",
    borderRadius: "16px",
    boxSizing: "border-box",
    height: "100%",
    overflow: "auto",
    padding: "0 5%",
  };
  const modalContentStyle = {
    whiteSpace: "pre-line", // Preserves line breaks
  };

  const showAd = () => {
    console.log("hello hiiii");
    axios({
      method: "get",
      url: "http://ads.csse.rose-hulman.edu/?category=cats&affiliate=MEAO",
      responseType: "arraybuffer",
    })
      .then((response) => {
        // console.log("response config: " + response.config);
        console.log("response data: " + response.data); //is the image data
        console.log("response headers: " + response.headers);
        // console.log("response request: " + response.request);
        // console.log("response status: " + response.status);
        // console.log("response stauts text: " + response.statusText);

        var imgBlob = new Blob([response.data], {
          type: response.headers["Content-Type"],
        });
        var url = URL.createObjectURL(imgBlob);
        var imgElement = document.createElement("img");
        imgElement.src = url;
        const imgLocation = document.getElementById("image-modal");
        imgLocation.appendChild(imgElement);
        return (imgLocation.innerHTML = imgElement.outerHTML);
        //return imgElement.outerHTML;
      })
      .catch((err) => {
        console.error("failed to get advert\n", err);
      });
  };
  //showAd();

  return (
    <div style={containerStyle}>
      <div
        style={{
          marginTop: "2vh",
          height: "3vh",
        }}
      >
			modal please show up um um hello hi????
        <Modal
          title="Purchase a membership to stop seeing ads!!!"
          open={modalVisible}
          onOk={() => setModalVisible(false)}
          onCancel={() => setModalVisible(false)}
          width={700}
        >
          <div style={modalContentStyle} id="image-modal">
            {showAd()}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CatnipAdvert;
export function triggerAdExternally() 
					{
						console.log("trigger ad called from other file wow");
						TriggerAd();
					};
