import React from "react";
import { FullPage, Slide } from "react-full-page";
import MainVideo from "../image/mainVideo.mp4";
// import img1 from "../1.jpg";
// import img2 from "../2.jpg";
import img3 from "../3.jpg";
import neymar from "../image/NeymarJr.mp4";
import Video2 from "../image/videoplayback.mp4";

import "../Css/MainStyle.css";

const Main = () => {
  return (
    <FullPage>
      <Slide
        style={{ overflowY: "hidden", marginBottom: "-440px" }}
        controls=""
      >
        <div
          className="Main"
          style={{ overflow: "hidden", background: "black" }}
        >
          <div>
            <video
              className="videoTag"
              autoPlay
              loop
              muted
              style={{ zIndex: "0" }}
            >
              <source src={MainVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </Slide>
      <Slide style={{ overflowY: "hidden", backgroundColor: "black" }}>
        <div align="center" style={{ verticalAlign: "middle" }}>
          <video
            src={neymar + "#t=60"}
            autoPlay
            loop
            muted
            style={{ position: "relative", top: "-80px" }}
          ></video>
        </div>
      </Slide>
      <Slide style={{ overflowY: "hidden", backgroundColor: "black" }}>
        <video
          src={Video2}
          autoPlay
          loop
          muted
          style={{ position: "relative", top: "-80px" }}
        ></video>
      </Slide>
      <Slide style={{ overflowY: "hidden" }}>
        <img src={img3} style={{ width: "100%" }} alt=""></img>
      </Slide>
    </FullPage>
  );
};

export default Main;
