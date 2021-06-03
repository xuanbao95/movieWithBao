import React, { Component } from "react";
import Footer from "../component/Footer";

import ListCarousel from "../component/ListCarousel";

import ListMovie from "../component/ListMovie";
import SearchBar from "../component/SearchBar";
import Section_1 from "../component/Section_1";
import Section_2 from "../component/Section_2";


class Home extends Component {
  render() {
    return (
      <div>

        {/* <ListCarousel /> */}
        <SearchBar/>
        <ListMovie />
        {/* <Section_1 />
        <Section_2/>
        <Footer/> */}
      </div>
    );
  }
}

export default Home;
