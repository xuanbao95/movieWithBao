import { CircularProgress } from "@material-ui/core";
import React, { Component } from "react";
import Cinema from "../component/Cinema";
import Footer from "../component/Footer";
import CircularProgressWithLabel from "../component/Loading"
import ListCarousel from "../component/ListCarousel";

import ListMovie from "../component/ListMovie";
import SearchBar from "../component/SearchBar";

import Section_1 from "../component/Section_1";
import Section_2 from "../component/Section_2";
import Carousel from "../component/Carousel";
import NavBars from "../component/NavBars";
import ListMovie_2 from "../Component2/ListMovie_2";
import SearchBar_2 from "../Component2/SearchBar_2";


class Home extends Component {
  render() {
    return (
      <div>
        <NavBars />
        <ListCarousel />
        {/* <Carousel /> */}
        <SearchBar />
        {/* <SearchBar_2 /> */}
        <ListMovie />
        {/* <ListMovie_2 /> */}
        {/* <Cinema /> */}
        <Section_1 />
        {/* <Section_2 /> */}
        <Footer />
      </div>
    );
  }
}

export default Home;
