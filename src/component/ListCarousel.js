import React, { Component } from 'react'
import * as action from "../redux/action";
import { connect } from "react-redux"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import Carousel from './Carousel';

class ListCarousel extends Component {
    renderListCarousel = () => {
        return this.props.listCarousel.map((carousel, index) => {
            return <Carousel carousel={carousel} key={index} />
        })

    }
    render() {

        var settings1 = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 4
        };
        return (
            <div>
                <div >
                    <Slider {...settings1}>{this.renderListCarousel()}</Slider>
                    {/* slider react hổ trợ cắt api */}
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getListCarousel();
        //đóng vai trò call api
    }
}
const mapStateToProps = (state) => {
    return {
        listCarousel: state.movieReducer.listMovie
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListCarousel: () => {
            dispatch(action.actGetListMovieAPI())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListCarousel);
