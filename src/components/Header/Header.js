import './header.css';
import './Show.js';
import { Link } from 'react-router-dom';

function Header() { 
    return (
        <>
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
                                        <p><Link to='gallery1'>Abdul Qader genesis collection</Link></p>
                                        <p><Link to='gallery2'>Itzhaq Mevorah collection</Link></p>
                                    </div>
                                </li>
                                <div className='connect'>Connect Wallet</div>
                            </ul>
                        </div>
                        <div className='navbar_hidden'>
                            <div className='menubar'>
                                <p></p>
                                <p></p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='navbar_show'>
                <ul className='navbar_show1'>
                    <li className='show'><Link to='about'>About</Link></li>
                    <li className='show'><Link to='galleries'>Gallery</Link></li>
                    <li className='show'><Link to='gallery1'>Abdul Qader genesis collection</Link></li>
                    <li className='show'><Link to='gallery2'>Itzhaq Mevorah collection</Link></li>
                    <li>Connect Wallet</li>
                </ul>
            </div>
        </>
    );
}

export default Header;