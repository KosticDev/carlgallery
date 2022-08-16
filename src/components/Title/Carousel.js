import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1"><img className='carousel' src={img1} /></div>,
    <div className="item" data-value="2"><img className='carousel' src={img2} /></div>,
    <div className="item" data-value="3"><img className='carousel' src={img3} /></div>,
    <div className="item" data-value="4"><img className='carousel' src={img4} /></div>,
    <div className="item" data-value="5"><img className='carousel' src={img5} /></div>,
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