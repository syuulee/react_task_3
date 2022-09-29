import React from 'react'
import { Link } from 'react-router-dom';

const Sub05 = () => {
    return (
        <section className='academy'>
            <div className="container">
                <div className="intro">
                    <h2>아카데미소개</h2>
                    <strong className='tt'>아카데미</strong>
                </div>
            </div>
            <div className="ch_academy">
                <figure>
                    <img src={process.env.PUBLIC_URL + '/images/class_01.jpg'} alt="" />
                </figure>
                <div className="box">
                    <div className="box_once">
                        <strong className="class">
                            국내 최초 발레단 산하 아카데미
                        </strong>
                        <p>1993년 한국 발레 30년 숙원이던 국립발레단 부설 교육 기관인 문화학교(현 국립발레단 부설 발레아카데미)가 국립극장 내 개설되었습니다. 이는 국립발레단 초대 단장으로 재임한 故임성남 전 단장이 열망하던 ‘국립발레학교’의 중요한 첫 걸음 이었습니다.
                            <br /><br />
                            당시 불모지이던 국내 발레교육에 해외유학이 아닌 자체 조기교육을 통해 발레 인재 육성을 위한 체계적인 교육 과정을 구축할 수 있었습니다. 또한 볼쇼이 발레학교와의 오랜 교류로 러시아 발레 메소드를 기초로 미래 인재 양성을 위해 최선을 다하고 있으며, 많은 스타 무용수들을 배출하여 국내 발레교육의 명실상부한 리더로 성장하고 있습니다.</p>
                        <Link to='/'>자세히 <i className='xi-angle-right-min'></i></Link>
                    </div>
                </div>
            </div>
            <div className="ad_academy">
                <div className="box">
                    <div className="box_once">
                        <strong className="class">
                            국내 최초의 성인취미반
                        </strong>
                        <p>국립발레단 부설 발레아카데미는 2000년도 국내 최초로 일반인 대상의 성인취미반을 개설하였습니다. 아카데미의 전문적이고 세분화된 교육 과정을 통해 무용예술의 대중화에 앞장서는 동시에 누구나 즐길 수 있는 수업으로 자리매김하였습니다.
                            <br /><br />
                            성인취미반은 매년 아카데미 정기공연에 참여할 수 있는 기회를 제공하여, 발레단 단원 출신의 지도 아래 모든 수업이 피아노 반주로 진행되고 있습니다. 또한 체계적인 수업을 통해 수강생들의 자세 및 체형교정에 효과적으로, 발레를 동경하는 일반인들에게 많은 환영을 받고 있습니다.</p>
                        <Link to='/'>접수기간 및 수강기간 <i className='xi-angle-right-min'></i></Link>
                    </div>
                </div>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/images/class_02.jpg'} alt="" />
                </figure>
            </div>
        </section >
    )
}

export default Sub05;