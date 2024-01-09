import React, { Component } from "react";
import Slider from "react-slick";
import './OnDemandAppSlider.css'
import './CardSlider.scss'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faHeart, faShare } from '@fortawesome/free-solid-svg-icons';

export default class OnDemandAppSlider extends Component {


    render() {
        const settings = {
            // dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            responsive: [
                // {
                //     breakpoint: 769,
                //     settings: {
                //         slidesToShow: 2,
                //         slidesToScroll: 1,
                //     },
                // },

                {
                    breakpoint: 588,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
               
                {
                    breakpoint: 890,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
            ]
            //    cssEase: "linear"
        }

        return (
            <div className="RelatedPortfolioSlider-main-div-2">
                <h2 className="ondemand-head">On-Demand App Development Company In India</h2>
                <div className="RelatedPortfolioSlider-div-2">
                    <Slider {...settings}>
                        <div>
                            <div className="owl-item active" style={{ width: 270, marginRight: 30 }}><div className="item-1">
                                <div className="ondemand__app__box ">
                                    <img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png" alt="Tinder Clone" title="Tinder Clone" className="crypto-xchange-sprite xchange-sprite-14" />
                                    <div className="title__div">
                                        <p> Tinder Clone App</p>
                                    </div>
                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <a href="#!">View Project</a>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                        </div>

                        <div>
                            <div className="owl-item active" style={{ width: 270, marginRight: 30 }}><div className="item-1">
                                <div className="ondemand__app__box ">
                                    <img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png" alt="Tinder Clone" title="Tinder Clone" className="crypto-xchange-sprite xchange-sprite-14" />
                                    <div className="title__div">
                                        <p> Tinder Clone App</p>
                                    </div>
                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <a >View Project</a>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                        </div>

                        <div>
                            <div className="owl-item active" style={{ width: 270, marginRight: 30 }}><div className="item-1">
                                <div className="ondemand__app__box ">
                                    <img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png" alt="Tinder Clone" title="Tinder Clone" className="crypto-xchange-sprite xchange-sprite-14" />
                                    <div className="title__div">
                                        <p> Tinder Clone App</p>
                                    </div>
                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <a href="#!">View Project</a>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                        </div>


                        <div>
                            <div className="owl-item active" style={{ width: 270, marginRight: 30 }}><div className="item-1">
                                <div className="ondemand__app__box ">
                                    <img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png" alt="Tinder Clone" title="Tinder Clone" className="crypto-xchange-sprite xchange-sprite-14" />
                                    <div className="title__div">
                                        <p> Tinder Clone App</p>
                                    </div>
                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <a href="#!">View Project</a>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                        </div>

                        <div>
                            <div className="owl-item active" style={{ width: 270, marginRight: 30 }}><div className="item-1">
                                <div className="ondemand__app__box ">
                                    <img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png" alt="Tinder Clone" title="Tinder Clone" className="crypto-xchange-sprite xchange-sprite-14" />
                                    <div className="title__div">
                                        <p> Tinder Clone App</p>
                                    </div>
                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <a href="#!">View Project</a>
                                        </div>
                                    </div>
                                </div>
                            </div></div>
                        </div>

                    </Slider>
                </div>
            </div>

        );
    }
}

{/* <div>
<div className="owl-item active" style={{ width: 270, marginRight: 30 }}><div className="item-1">
<div className="ondemand__app__box ">
    <img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png" alt="Tinder Clone" title="Tinder Clone" className="crypto-xchange-sprite xchange-sprite-14" />
    <div className="title__div">
        <p> Tinder Clone App</p>
    </div>
    <div className="overlay">
        <div className="overlay-content">
            <a href="#!">View Project</a>
        </div>
    </div>
</div>
</div></div>
</div> */}


{/* <div>
<div className="owl-item active" style={{ width: 270, marginRight: 30 }}><div className="item-1">
<div className="ondemand__app__box ">
    <img src="https://www.osiztechnologies.com/asset/images/inner-pages/demand/tinder-clone.png" alt="Tinder Clone" title="Tinder Clone" className="crypto-xchange-sprite xchange-sprite-14" />
    <div className="title__div">
        <p> Tinder Clone App</p>
    </div>
    <div className="overlay">
        <div className="overlay-content">
            <a href="#!">View Project</a>
        </div>
    </div>
</div>
</div></div>
</div>*/}


{/* <div>

                            <div className="card">
                                <div className="card-img" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1491374812364-00028bbe7d2f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a22e4862c36c552e726815949fbcb41a&auto=format&fit=crop&w=500&q=60)' }}>
                                    <div className="overlay">
                                        <div className="overlay-content">
                                            <a href="#!">View Project</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <a href="">
                                        <h2>Title</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur, lorem ipsum dolor</p>
                                    </a>
                                </div>
                            </div>

                        </div> */}