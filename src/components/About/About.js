import './about.css';
import about from './about.jpg';
import company from './company.jpeg';

function About() {
    return (
        <div className='about'>
            <div className='about_back'>
                <img src={about} alt='' />
            </div>
            <div className='container'>
                <div className='about_desc'>
                    <h3>About Us</h3>
                    <p>Carl Gallery presents comprehensive access to the best of contemporary art collections exhibited by a few nominated leading artists from around the world . We offer a fresh perspective on the artists and their artwork.  Carl Gallery is a compelling destination and resource for collectors, curators, art consultants looking for novelle aspects in Art.</p>
                    <p>Carl Gallery collaborates closely with its artists though exhibitions and displays are provocative presentations that challenge the conventions and ideologies related to the notion of art display and exhibition-making. We focus on the online platform to give both the artist a wider scope and collectors globally to acquire their favorite piece of artwork.</p>
                    <p>NFT is another segment where art enters a completely digital platform. Carl Gallery presents their digital art collections which can be acquired using digital currencies.</p>
                </div>
                <img className='company_img' src={company} alt='' />
            </div>
        </div>
    )
}

export default About;