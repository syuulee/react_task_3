import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <header className='Header'>
            <div className="container">
                <div className="top_menu">
                    <ul className="top">
                        <li><Link to="/sub01">로그인</Link></li>
                        <li><Link to="/">ENGLISH</Link></li>
                    </ul>
                </div>
                <div className="bottom">
                    <ul className="left gnb">
                        <li><Link to="/">국립발레단소개</Link></li>
                        <li><Link to="/">발레단사람들</Link></li>
                        <li><Link to="/">공연정보</Link></li>
                    </ul>
                    <div className="logo">
                        <h1>
                            <Link to="/">
                                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" />
                            </Link>
                        </h1>
                    </div>
                    <ul className="right gnb">
                        <li><Link to="/">후원회</Link></li>
                        <li><Link to="/">아카데미</Link></li>
                        <li><Link to="/">발레단소식</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;