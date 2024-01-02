import React, { Component } from "react";
import Slider from "react-slick";
import './OnDemandAppSlider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

export default class OnDemandAppSlider extends Component {


    render() {
        const settings = {
            //    dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ]
            //    cssEase: "linear"
        }

        return (
            <div className="RelatedPortfolioSlider-main-div-1">
                <h2 className="ondemand-head">On-Demand App Development Company In India</h2>
                <div className="RelatedPortfolioSlider-div-1">
                    <Slider {...settings}>
                        <div>

                            <figure className="card card--3" >
                                <figcaption>

                                    <span className="info">
                                        <h3>The Desert</h3>
                                        <span>by Keith Hardy</span>
                                    </span>
                                    <span className="links">
                                        <a > <FontAwesomeIcon icon={faHeart} /></a>
                                        <a target="_blank"> <FontAwesomeIcon icon={faInstagram} /></a>
                                        <a target="_blank"><FontAwesomeIcon icon={faShare} /></a>
                                    </span>
                                </figcaption>
                            </figure>
                        </div>

                        <div>

                            <figure className="card card--3" >
                                <figcaption>

                                    <span className="info">
                                        <h3>The Desert</h3>
                                        <span>by Keith Hardy</span>
                                    </span>
                                    <span className="links">
                                        <a > <FontAwesomeIcon icon={faHeart} /></a>
                                        <a target="_blank"> <FontAwesomeIcon icon={faInstagram} /></a>
                                        <a target="_blank"><FontAwesomeIcon icon={faShare} /></a>
                                    </span>
                                </figcaption>
                            </figure>
                        </div>

                        <div>

                            <figure className="card card--3" >
                                <figcaption>

                                    <span className="info">
                                        <h3>The Desert</h3>
                                        <span>by Keith Hardy</span>
                                    </span>
                                    <span className="links">
                                        <a > <FontAwesomeIcon icon={faHeart} /></a>
                                        <a target="_blank"> <FontAwesomeIcon icon={faInstagram} /></a>
                                        <a target="_blank"><FontAwesomeIcon icon={faShare} /></a>
                                    </span>
                                </figcaption>
                            </figure>
                        </div>

                        <div>

                            <figure className="card card--3" >
                                <figcaption>

                                    <span className="info">
                                        <h3>The Desert</h3>
                                        <span>by Keith Hardy</span>
                                    </span>
                                    <span className="links">
                                        <a > <FontAwesomeIcon icon={faHeart} /></a>
                                        <a target="_blank"> <FontAwesomeIcon icon={faInstagram} /></a>
                                        <a target="_blank"><FontAwesomeIcon icon={faShare} /></a>
                                    </span>
                                </figcaption>
                            </figure>
                        </div>

                        <div>

                            <figure className="card card--3" >
                                <figcaption>

                                    <span className="info">
                                        <h3>The Desert</h3>
                                        <span>by Keith Hardy</span>
                                    </span>
                                    <span className="links">
                                        <a > <FontAwesomeIcon icon={faHeart} /></a>
                                        <a target="_blank"> <FontAwesomeIcon icon={faInstagram} /></a>
                                        <a target="_blank"><FontAwesomeIcon icon={faShare} /></a>
                                    </span>
                                </figcaption>
                            </figure>
                        </div>

                    </Slider>
                </div>
            </div>

        );
    }
}

