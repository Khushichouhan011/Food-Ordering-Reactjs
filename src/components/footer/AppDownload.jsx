import "./AppDownload.css";
import googleplay from "/images/appstore.png";
import appstore from "/images/googleplay.png";
const AppDownload=()=>{
    return(
      <div className="app-download" id="app-download">
        <p>For Better Experience Download<br/>Swad Sutra</p>
<div className="app-download-platforms">
    <img src={appstore}/>
    <img src={googleplay}/>
</div>

      </div>
    );
}
        export default AppDownload;