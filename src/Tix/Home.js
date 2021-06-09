import { CircularProgress } from "@material-ui/core";
import React, { Component } from "react";
import Cinema from "../component/Cinema";
import Footer from "../component/Footer";
import CircularProgressWithLabel from "../component/Loading"
import ListCarousel from "../component/ListCarousel";

import ListMovie from "../component/ListMovie";
import SearchBar from "../component/SearchBar";
import Search_Bar from "../component/Search_Bar";
import Section_1 from "../component/Section_1";
import Section_2 from "../component/Section_2";
import Carousel from "../component/Carousel";


class Home extends Component {
  render() {
    return (
      <div>

        <ListCarousel />
        {/* <Carousel /> */}
        <SearchBar />
        {/* <Search_Bar /> */}
        <ListMovie />
        {/* <Cinema /> */}
        <Section_1 />
        {/* <Section_2 /> */}
        <Footer />
      </div>
    );
  }
}

export default Home;
