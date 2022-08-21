import React from "react";
import Carousel from "./Carousel";
import pic from '../../assets/img/pic2.png';

function Gallery2() {
    return (
        <div className="container">
            <div className="gallery2">
                <Carousel />
                <div className="mint1">
                    <p>Mint</p>
                </div>
                <div className='artist1'>
                    <div className='artist_desc'>
                        <strong>Artist Biography</strong><br />
                        Itzhak Mevorah, who is a third generation of a family of artists, who started her way in the beginning of the century in Bulgaria.
                        “MEVORAH ART & DESIGN” studio was founded in 1998,
                        The studio specializes in the wide variety of the art and design fields. The art of sculpting and painting and some other uniqueand unconventional projects.

                        Throughout the years “MEVORAH ART & DESIGN” company has lead dozens of exclusive and successful projects to some private clients from all kinds of places (including abroad). Mevorah’sartwork adorns public buildings, business buildings and offices, and takes place in some private collections of famous Israeli collectors.

                        ItzhaqMevorahis the main artist and designer of the company and he tries to emphasize his uniqueness of every new project the studio gets, be involved in the process of it, and lead it till the reaches the end result
                    </div>
                    <div className='famous'>
                        <img src={pic} alt='' />
                        <div className='birthday'>
                            Itzhak Mevorah
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery2;