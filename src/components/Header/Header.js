import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <div className='container'>
                <div className='main_top'>
                    <div className='logo'>
                        <h2><Link to='/'>Carl Gallery Club</Link></h2>
                    </div>
                    <div className='navbar'>
                        <ul className='list'>
                            <li><Link to='about'>About</Link></li>
                            <li><Link to='galleries'>Gallery</Link></li>
                            <li className='gallery'>
                                <a>Gallery collection</a>
                                <div className='dropdown'>
                                    <p><Link to='gallery1'>Gallery collection 1</Link></p>
                                    <p><Link to='gallery2'>Gallery collection 2</Link></p>
                                </div>
                            </li>
                        </ul>
                        <div className='connect'>Connect Wallet</div>
                        <div className='navbar_hidden'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;