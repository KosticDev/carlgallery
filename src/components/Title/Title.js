import './title.css';
import img1 from './1.png';
import img2 from './2.png';
import img3 from './3.png';
import img4 from './4.png';
import img5 from './5.png';
import video from './1.mp4';

function Title() {
    return (
        <div className='background'>
            <div>
                <video loop muted autoPlay preload='auto' className='video'>
                    <source src={video} type='video/webm'></source>
                </video>
            </div>
            <div className='container'>
                <div className='title'>
                    <h3>Where art, code and<br />creativity merge</h3>
                    <p>A fully on-chain generative art platform . As a member you’ll<br />get access to monthly drops from incredible artists.<br />And much more.</p>
                    <div className='title_buttons'>
                        <button className='coming'>Coming Soon</button>
                        <button className='learn'>Learn More</button>
                    </div>
                </div>
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