import { Link } from 'react-router-dom';

function Item(props) {
    return (
        <div className="gallery_page">
            <div className='col-3-1'>
                <img src={props.art} alt='' />
                <div className='art_desc'>
                    <h4>DARTHY BLUE</h4>
                    <p>Art description</p>
                </div>
                <div className='buttons'>
                </div>
            </div>
            <div className='col-3-2'>
                <Link to='gallery'><img src={props.art} alt='' /></Link>
            </div>
        </div>
    )
}

export default Item;