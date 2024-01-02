import React from 'react';
import Slider from 'react-slick';
import './CardSlider.css';

const CardSlider = () => {
    const settings = {
        //    dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
    };

    return (
        <Slider {...settings}>
            <div>
                <img width={'290px'} src="https://github.com/DaftCreation/Card-Slider/blob/master/AGRA.jpg?raw=true" alt="Agra" />
            </div>
            <div>
                <img width={'290px'} src="https://github.com/DaftCreation/Card-Slider/blob/master/NEW%20YORK.jpg?raw=true" alt="New York" />
            </div>
            <div>
                <img width={'290px'} src="https://github.com/DaftCreation/Card-Slider/blob/master/PARIS.jpg?raw=true" alt="Paris" />
            </div>
            <div>
                <img width={'290px'} src="https://github.com/DaftCreation/Card-Slider/blob/master/AGRA.jpg?raw=true" alt="Agra" />
            </div>
            <div>
                <img width={'290px'} src="https://github.com/DaftCreation/Card-Slider/blob/master/NEW%20YORK.jpg?raw=true" alt="New York" />
            </div>

        </Slider>
    );
};

export default CardSlider;
