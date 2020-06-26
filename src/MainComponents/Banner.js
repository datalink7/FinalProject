import React, { Component } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
// import CarouselSlider from "react-carousel-slider";

import "../Css/MainStyle.css";
import Axios from "axios";
import { NavLink } from "react-router-dom";

// const slides = [
//   { title: "First item", description: "Lorem ipsum1" },
//   { title: "Second item", description: "Lorem ipsum2" },
//   { title: "Third item", description: "Lorem ipsum3" },
// ];

class Banner extends Component {
  state = {
    banners: [],
    memberData: [],
  };

  getMemberData = () => {
    // const url = "http://192.168.0.108:9000/matchplay/memberdata?id=";
    const url = "http://localhost:9000/matchplay/memberdata?id=";

    Axios.get(url + window.sessionStorage.getItem("id"))
      .then((res) => {
        this.setState({
          memberData: res.data,
        });
        console.log(this.state.memberData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  list = (e) => {
    let url =
      // "http://192.168.0.108:9000/matchplay/forbanner" +
      "http://localhost:9000/matchplay/forbanner";
    Axios.get(url)
      .then((responseData) => {
        this.setState({
          banners: responseData.data,
        });
        console.log(this.state.banners);
      })
      .catch((error) => {
        console.log("list 에러:" + error);
      });
  };

  componentDidMount() {
    this.list();
    if (window.sessionStorage.getItem("id") != null) {
      this.getMemberData();
    }
  }

  render() {
    return (
      <div className="Banner">
        <Slider autoplay={1500}>
          {this.state.banners.map((slide, index) =>
            window.sessionStorage.getItem("id") == null ||
            (slide.res_type === "1" && this.state.memberData.team_int === 0) ? (
              <div key={index}>
                <div style={{ fontSize: "20pt", fontWeight: "bolder" }}>
                  {slide.res_type === "0" ? "개인매치" : "팀매치"}
                  {"  " + slide.place_name}
                </div>
                <div style={{ fontSize: "13pt" }}>
                  {slide.place_addr +
                    " " +
                    slide.res_time +
                    " " +
                    slide.time_val.substring(0, 2) +
                    "시"}
                </div>
              </div>
            ) : (
              <NavLink
                to={{
                  pathname: "/SelectDetail",
                  state: {
                    place_id: slide.place_id,
                    type: slide.res_type,
                    date: slide.res_time,
                  },
                }}
                style={{ textDecoration: "none", color: "white" }}
              >
                <div key={index}>
                  <div style={{ fontSize: "20pt", fontWeight: "bolder" }}>
                    {slide.res_type === "0" ? "개인매치" : "팀매치"}
                    {"  " + slide.place_name}
                  </div>
                  <div style={{ fontSize: "13pt" }}>
                    {slide.place_addr +
                      " " +
                      slide.res_time +
                      " " +
                      slide.time_val.substring(0, 2) +
                      "시"}
                  </div>
                </div>
              </NavLink>
            )
          )}
        </Slider>
      </div>
    );
  }
}

export default Banner;
