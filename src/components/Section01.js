import React from 'react'
import { Link } from 'react-router-dom';

const Section01 = () => {
    return (
        <section className='current'>
            <div className="title">
                <h2>10월 공연</h2>
            </div>
            <div className="container">
                <div className="left">
                    <div className="des">
                        <strong>백조의 호수</strong>
                        <p>국립발레단의 "백조의 호수"는 러시아의 살아있는 전설 유리 그리고로비치 버전으로 전세계 수많은 버전 중, 가장 극적이며 행복한 엔딩을 관객들에게 선보입니다.</p>
                        <span className='date'>2022.10.12 - 10.16</span>
                        <div className='locate'>예술의전당 오페라극장</div>
                        <Link to='/'>자세히 보기</Link>
                    </div>
                </div>
                <div className="right">
                    <figure>
                        <img src={process.env.PUBLIC_URL + '/images/performance_01.jpg'} alt="" />
                    </figure>
                    <figure>
                        <img src={process.env.PUBLIC_URL + '/images/performance_03.jpg'} alt="" />
                    </figure>
                </div>
            </div>
        </section >
    )
}

export default Section01;