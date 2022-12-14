import React from 'react';

const Sub02 = () => {
    return (
        <section className='people'>
            <div className='container'>
                <div className='intro'>
                    <h2>발레단 사람들</h2>
                    <strong>예술 스태프</strong>
                </div>
                <div className='cap'>
                    <div className='represent'>
                        <figure>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    '/images/intro_01.jpg'
                                }
                                alt=''
                            />
                        </figure>
                        <p className='name'>강수진</p>
                        <span className='part'>단장 겸 예술감독</span>
                    </div>
                    <div className='sub_represent'>
                        <figure>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    '/images/intro_02.jpg'
                                }
                                alt=''
                            />
                        </figure>
                        <p className='name'>신무섭</p>
                        <span className='part'>부예술감독</span>
                    </div>
                </div>
                <div className='staff'>
                    <ul className='staff_all'>
                        <li>
                            <figure>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/images/staff_01.jpg'
                                    }
                                    alt=''
                                />
                            </figure>
                            <p className='name'>박일</p>
                            <span className='part'>발레마스터</span>
                        </li>
                        <li>
                            <figure>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/images/staff_02.jpg'
                                    }
                                    alt=''
                                />
                            </figure>
                            <p className='name'>정현옥</p>
                            <span className='part'>발레마스터</span>
                        </li>{' '}
                        <li>
                            <figure>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/images/staff_03.jpg'
                                    }
                                    alt=''
                                />
                            </figure>
                            <p className='name'>안효진</p>
                            <span className='part'>발레마스터</span>
                        </li>{' '}
                        <li>
                            <figure>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/images/staff_04.jpg'
                                    }
                                    alt=''
                                />
                            </figure>
                            <p className='name'>이용철</p>
                            <span className='part'>발레마스터</span>
                        </li>{' '}
                        <li>
                            <figure>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/images/staff_05.jpg'
                                    }
                                    alt=''
                                />
                            </figure>
                            <p className='name'>박나리</p>
                            <span className='part'>발레마스터</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Sub02;
