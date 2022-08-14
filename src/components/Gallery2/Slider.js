import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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

const ResponsiveSlider = () => {

  return (
    <div className='slider'>
      <Slider>
        <div className='item_gallery'>
          <img src={gallery2_1} />
        </div>
        <div className='item_gallery'>
          <img src={gallery2_2} />
        </div>
        <div className='item_gallery'>
          <img src={gallery2_3} />
        </div>
        <div className='item_gallery'>
          <img src={gallery2_4} />
        </div>
        <div className='item_gallery'>
          <img src={gallery2_5} />
        </div>
        <div className='item_gallery'>
          <img src={gallery2_6} />
        </div>
        <div className='item_gallery'>
          <img src={gallery2_7} />
        </div>
        <div className='item_gallery'>
          <img src={gallery2_8} />
        </div>
        <div className='item_gallery'>
          <img src={gallery2_9} />
        </div>
        <div className='item_gallery'>
          <img src={gallery2_10} />
        </div>
        <div className='item_gallery'>
          <img src={gallery2_11} />
        </div>
        <div className='item_gallery'>
          <img src={gallery2_12} />
        </div>
      </Slider>
    </div>
  )
}

export default ResponsiveSlider;
