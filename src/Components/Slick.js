import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class Resizable extends Component {
    state = {
        display: true,
        width: 600
    };
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <div>
                <h2> Resizable Collapsible </h2>
                <button
                    className="button"
                    onClick={() =>
                        this.setState({
                            width: this.state.width + 100
                        })
                    }
                >
                    {" "}
                    increase{" "}
                </button>
                <button
                    className="button"
                    onClick={() =>
                        this.setState({
                            width: this.state.width - 100
                        })
                    }
                >
                    {" "}
                    decrease{" "}
                </button>
                <button
                    className="button"
                    onClick={() =>
                        this.setState({
                            display: !this.state.display
                        })
                    }
                >
                    {" "}
                    toggle{" "}
                </button>
                <div
                    style={{
                        width: this.state.width + "px",
                        display: this.state.display ? "block" : "none"
                    }}
                >
                    <Slider {...settings}>
                        <div>
                            <img src="https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </div>
                        <div>
                            <img src="https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </div>
                        <div>
                            <img src="https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </div>
                        <div>
                            <img src="https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </div>
                        <div>
                            <img src="https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </div>
                        <div>
                            <img src="https://images.pexels.com/photos/3894157/pexels-photo-3894157.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}