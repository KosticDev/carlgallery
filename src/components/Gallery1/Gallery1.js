import Carousel from './Carousel';
import './gallery1.css';
import pic from '../Artists/pic1.png';

function Gallery1() {
    return (
        <div className="gallery1">
            <div className='container'>
                <Carousel />
                <div className='mint1'>
                    <p>Mint</p>
                </div>
                <div className='artist1'>
                    <div className='artist_desc'>
                        <strong>Artist Biography</strong><br />
                        Self-taught artist Abdul Qader Al Rais is one of the most acclaimed and iconic painters of the United Arab Emirates. Influenced by the Dutch Masters and Impressionists early in his career, Al Rais’s style is unique; inspired by the region’s landscapes and the Emirate’s distinctive architecture, his paintings often depict palm trees, shops, neighbourhoods, local iconography, and customs. His later works, such as Serenity Series (2018), are more abstract and are often energized by the incorporation of Arabic letters written in the artist’s elegant calligraphy script. Rais is a founding member of the Emirates Fine Arts Society. His work was exhibited at the 2015 Venice Biennale, and is in the collections of the British Museum; the Museum of Contemporary Art Shanghai; and the National Gallery of Modern Art, New Delhi. He is the recipient of numerous awards including the Sheikha Latifa Prize for Art & Literature and the Golden Soafah (Palm Leaf) Award at the GCC exhibition.
                        <br />
                        <p>Blue-chip representation<br />
                            Represented by internationally reputable galleries.
                        </p>
                    </div>
                    <div className='famous'>
                        <img src={pic} alt='' />
                        <div className='birthday'>
                            Abdul Qader Al Rais<br />
                            Emirati, b. 1951
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery1;