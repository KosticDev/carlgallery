import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './gallery2.css';
import gallery2_1 from './Dart Vider (1).png';
import gallery2_2 from './Dart Vider (2).png';
import gallery2_3 from './Dart Vider (3).png';
import gallery2_4 from './Dart Vider (4).png';
import gallery2_5 from './Dart Vider (5).png';
import gallery2_6 from './Dart Vider (6).png';
import gallery2_7 from './Dart Vider (7).png';
import gallery2_8 from './Dart Vider (8).png';
import gallery2_9 from './Dart Vider (9).png';
import gallery2_10 from './Dart Vider (10).png';
import gallery2_11 from './Dart Vider (11).png';
import gallery2_12 from './Dart Vider (12).png';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1"><img className='carousel' src={gallery2_1} /></div>,
    <div className="item" data-value="2"><img className='carousel' src={gallery2_2} /></div>,
    <div className="item" data-value="3"><img className='carousel' src={gallery2_3} /></div>,
    <div className="item" data-value="4"><img className='carousel' src={gallery2_4} /></div>,
    <div className="item" data-value="5"><img className='carousel' src={gallery2_5} /></div>,
    <div className="item" data-value="5"><img className='carousel' src={gallery2_6} /></div>,
    <div className="item" data-value="5"><img className='carousel' src={gallery2_7} /></div>,
    <div className="item" data-value="5"><img className='carousel' src={gallery2_8} /></div>,
    <div className="item" data-value="5"><img className='carousel' src={gallery2_9} /></div>,
    <div className="item" data-value="5"><img className='carousel' src={gallery2_10} /></div>,
    <div className="item" data-value="5"><img className='carousel' src={gallery2_11} /></div>,
    <div className="item" data-value="5"><img className='carousel' src={gallery2_12} /></div>,
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