import './artist.css';

function Artists() {

    // document.addEventListener('DOMContentLoaded', function () {
    //     new Splide('#carousel').mount();
    // });

    return (
        <div className='artists'>
            <div className='container'>
                <div className='arttists_desc'>
                    <h4>World-renowned Artists</h4>
                    <p>Our artists are at the bleeding edge of generative art. We also partner with traditional artists, and <br />give them the support they need to release generative art.</p>
                </div>
                <div id='carousel' className='artists_pic' aria-label='Images'>
                    <div className='pic'>
                        <div></div>
                        <p>petitsapin</p>
                    </div>
                    <div className='pic'>
                        <div></div>
                        <p>petitsapin</p>
                    </div>
                    <div className='pic'>
                        <div></div>
                        <p>petitsapin</p>
                    </div>
                    <div className='pic'>
                        <div></div>
                        <p>petitsapin</p>
                    </div>
                    <div className='pic'>
                        <div></div>
                        <p>petitsapin</p>
                    </div>
                    <div className='pic'>
                        <div></div>
                        <p>petitsapin</p>
                    </div>
                    <div className='pic'>
                        <div></div>
                        <p>petitsapin</p>
                    </div>
                    <div className='pic'>
                        <div></div>
                        <p>petitsapin</p>
                    </div>
                    <div className='pic'>
                        <div></div>
                        <p>petitsapin</p>
                    </div>
                    <div className='pic'>
                        <div></div>
                        <p>petitsapin</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artists;