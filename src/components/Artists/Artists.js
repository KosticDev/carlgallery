import Artist from './Artist';
import './artist.css';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import pic6 from './pic6.jpg';

function Artists() {

    return (
        <div className='artists'>
            <div className='container'>
                <div className='arttists_desc'>
                    <h4>World-renowned Artists</h4>
                    <p>Our artists are at the bleeding edge of generative art. We also partner with traditional artists, and give them the support they need to release generative art.</p>
                </div>
                <div id='carousel' className='artists_pic' aria-label='Images'>
                    <Artist artist={pic4} name={'Abdul Qader Al Rais'}/>
                    <Artist artist={pic2} name={'Itzhaq Mevorah'}/>
                    <Artist artist={pic3} name={'Yalda'}/>
                    <Artist artist={pic5} name={'Alia'}/>
                </div>
            </div>
        </div>
    )
}

export default Artists;