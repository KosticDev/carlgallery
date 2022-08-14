import './title.css';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';
import video from './1.mp4';
import logo from './logo.png';

function Title() {
    return (
        <div className='background'>
            <div>
                <video loop muted autoPlay preload='auto' className='video'>
                    <source src={video} type='video/webm'></source>
                </video>
            </div>
            <div className='container'>
                <div className='card_lists'>
                    <div className='card'>
                        <img src={img1} alt='' />
                    </div>
                    <div className='card'>
                        <img src={img2} alt='' />
                    </div>
                    <div className='card'>
                        <img src={img3} alt='' />
                    </div>
                    <div className='card'>
                        <img src={img4} alt='' />
                    </div>
                    <div className='card'>
                        <img src={img5} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Title;