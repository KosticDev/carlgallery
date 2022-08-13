import './gallery.css';
import art from './Dart Vider (1).png';
import art1 from './Dart Vider (2).png';
import art2 from './Dart Vider (3).png';
import art3 from './Dart Vider (4).png';
import art4 from './Dart Vider (5).png';
import art5 from './Dart Vider (6).png';
import art6 from './Dart Vider (7).png';
import Item from './Item';

function Gallery() {
    return (
        <div className='container'>
            <Item art={art} />
            <Item art={art1} />
            <Item art={art2} />
            <Item art={art3} />
            <Item art={art4} />
            <Item art={art5} />
            <Item art={art6} />
        </div>
    )
}

export default Gallery;