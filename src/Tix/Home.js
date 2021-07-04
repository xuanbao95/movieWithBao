import { CircularProgress } from "@material-ui/core";
import React, { Component } from "react";
import Cinema from "../component/Cinema";
import Footer from "../component/Footer";
import CircularProgressWithLabel from "../component/Loading"
import ListCarousel from "../component/ListCarousel";

import ListMovie from "../component/ListMovie";
import SearchBar from "../component/SearchBar";

import Section_1 from "../component/Section_1";
import IntroduceApp from "../component/introduceApp"
import NavBars from "../component/NavBars";



class Home extends Component {
  render() {
    return (
      <div>
        <NavBars />
        <ListCarousel />

        <SearchBar />

        <ListMovie />

        <Section_1 />
        <IntroduceApp />
        <Footer />
      </div>
    );
  }
}

export default Home;
