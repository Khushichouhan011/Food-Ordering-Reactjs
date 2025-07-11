import React from "react";
import "./AppDownload.css";
import googleplay from "/images/googleplay.png";
import appstore from "/images/appstore.png";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br />
        <strong>Swad Sutra</strong>
      </p>

      <div className="app-download-platforms">
        <img src={appstore} alt="Download on App Store" />
        <img src={googleplay} alt="Get it on Google Play" />
      </div>
    </div>
  );
};

export default AppDownload;
