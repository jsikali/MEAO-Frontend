// import React, { useState, useEffect, useRef } from "react";
// import { Button /*theme*/ } from "antd";
import axios from "axios";
// import MessageSendButton from "./MessageSendButton.jsx";
// import { API_ADDRESS, FETCH_FREQUENCY } from './App.jsx';

function CatnipAdvert() {
   //alert("hiiiiiii");
   const containerStyle = {
      height: '100%',
      overflow: 'auto',
      padding: '0 5%',
      backgroundColor: '#c2c6E8',
      borderRadius: '16px',
      boxSizing: 'border-box',
  };

  const ad = () => {
   console.log("hello hiiii")
   axios({ method: 'get',
            url: 'http://ads.csse.rose-hulman.edu/?category=cats&affiliate=MEAO',
            responseType: 'arraybuffer'
         })
         .then((response) => {
            // console.log("response config: " + response.config);
            console.log("response data: " + response.data); //is the image data
            console.log("response headers: " + response.headers);
            // console.log("response request: " + response.request);
            // console.log("response status: " + response.status);
            // console.log("response stauts text: " + response.statusText);

            var imgBlob = new Blob([response.data], {type: response.headers['Content-Type']});
            var url = URL.createObjectURL(imgBlob);
            var imgElement = document.createElement("img");
            imgElement.src = url;
            const imgLocation = document.getElementById("image-here");
            //imgLocation.appendChild(imgElement);
            imgLocation.innerHTML = imgElement.outerHTML;
         })
         .catch((err) => {
            console.error("failed to get advert\n", err);
         });}


  return (
      <div style={containerStyle}
      onClick={() =>
         //console.log("click!!!")
         ad()
       }>
          <div style={{
              marginTop: '2vh',
              height: '5vh',
          }} 
          id="image-here">
            <p>show an ad lalalallalala</p>
            
         </div>
      </div>  )          
};

export default CatnipAdvert;
