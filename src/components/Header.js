import React from 'react'
import NavMenu from './NavMenu';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className='Header'>
            <div className="container">
                <div className="menu">
                    <h1>
                        <Link to="/">
                            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" />
                        </Link>
                    </h1>
                    <nav>
                        <NavMenu />
                    </nav>
                    <div className="s_menu">
                        <ul>
                            <li>
                                <Link to="/">로그인</Link>
                            </li>
                            <li>
                                <Link to="/">ENGLISH</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header;