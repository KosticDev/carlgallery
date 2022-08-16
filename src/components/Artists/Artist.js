import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from './pic1.jpg';
import img2 from './pic2.jpg';
import img3 from './pic3.jpg';
import img5 from './pic5.jpg';
import './artist.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1">
        <img className='carousel' src={img1} />
        <div className='name'>Abdul Qader Al Rais</div>
    </div>,
    <div className="item" data-value="2">
        <img className='carousel' src={img2} />
        <div className='name'>Itzhaq Mevorah</div>
    </div>,
    <div className="item" data-value="3">
        <img className='carousel' src={img3} />
        <div className='name'>Yalda</div>
    </div>,
    <div className="item" data-value="5">
        <img className='carousel' src={img5} />
        <div className='name'>Alia</div>
    </div>,
];

const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />
);

export default Carousel;