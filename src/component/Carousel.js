import React, { Component } from 'react'
import Dialog1 from "./Dialog";
class Carousel extends Component {

    render() {
        let { carousel } = this.props;

        return (
            <div>
                <section className="carousel_1" >
                    <div >
                        <div >
                            <div
                                className="img"
                                style={{

                                    backgroundImage: `url("${carousel.hinhAnh}")`,


                                }}
                            >
                            </div>
                            <div className="control_play">
                                <Dialog1 trailer={carousel.trailer} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Carousel;
