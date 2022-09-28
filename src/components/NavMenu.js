import React from 'react'
import { Link } from 'react-router-dom';


const NavMenu = () => {
    return (
        <ul className='gnb'>
            <li><Link to='/Sub01'>발레단소개</Link></li>
            <li><Link to='/Sub02'>발레단사람들</Link></li>
            <li><Link to='/Sub03'>공연정보</Link></li>
            <li><Link to='/Sub05'>후원회</Link></li>
            <li><Link to='/Sub04'>아카데미</Link></li>
            <li><Link to='/Sub06'>발레단소식</Link></li>

        </ul>
    )
}

export default NavMenu;