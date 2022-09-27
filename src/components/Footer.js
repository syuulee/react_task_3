import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className="container">
                <div className="top">
                    <div className="relation">
                        <figure className='itm01'>
                            <img src={process.env.PUBLIC_URL + '/images/ft_logo_01.png'} alt="" />
                        </figure>
                        <figure className='itm02'>
                            <img src={process.env.PUBLIC_URL + '/images/ft_logo_02.png'} alt="" />
                        </figure>
                        <figure className='itm03'>
                            <img src={process.env.PUBLIC_URL + '/images/ft_logo_03.png'} alt="" /></figure>
                        <figure className='itm04'>
                            <img src={process.env.PUBLIC_URL + '/images/ft_logo_04.png'} alt="" /></figure>
                        <figure className='itm05'>
                            <img src={process.env.PUBLIC_URL + '/images/ft_logo_05.png'} alt="" /></figure>
                        <div className="sponsorship">
                            <div className="s_tit">[ 협찬사 ]</div>

                            <figure className='itm06'>
                                <img src={process.env.PUBLIC_URL + '/images/ft_logo_06.png'} alt="" /></figure>
                            <figure className='itm07'>
                                <img src={process.env.PUBLIC_URL + '/images/ft_logo_07.png'} alt="" /></figure>
                            <figure className='itm08'>
                                <img src={process.env.PUBLIC_URL + '/images/ft_logo_08.png'} alt="" /></figure>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <address>
                        06757 서울시 서초구 남부순환로 2406 예술의전당 오페라하우스 4층(재)국립발레단
                    </address>
                    <ul className='number'>
                        <li>
                            <Link to='/'>국립발레단 Tel. 02 - 587 - 6180~5</Link>
                        </li>
                        <li>
                            <Link to='/'>Fax. 02 - 587 - 6186</Link>
                        </li>
                        <li>
                            <Link to='/'>아카데미 Tel. 02 - 587 - 6199</Link>
                        </li>
                    </ul>
                    <div className="copyright">
                        Copyrightⓒ KOREAN NATIONAL BALLET 2017
                    </div>
                </div>
                <div className='not'>
                    <span>청탁금지법 적용대상 기관안내</span>
                    (재)국립발레단은 공직자윤리법 제3조의2에 따른 공직유관단체로서 부정청탁 및 금품 등 수수의 금지에 관한 법률(청탁금지법)적용대상 기관임을 알립니다.
                </div>
            </div>
        </footer >
    )
}

export default Footer;
