import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

const Data2022 = [
    {
        id: 1,
        title: '호두까기 인형',
        date: '2020.12.19 - 12.27',
        place: '예술의 전당 오페라극장',
        src: process.env.PUBLIC_URL + '/images/performance20_09.jpg',
    },
    {
        id: 2,
        title: '해적',
        date: '2020.11.04 - 11.08',
        place: '예술의 전당 오페라극장',
        src: process.env.PUBLIC_URL + '/images/performance20_08.jpg',
    },
    {
        id: 3,
        title: '허난설헌-수월경화(水月鏡花)',
        date: '2020.08.21 - 08.23',
        place: '예술의 전당 CJ 토월극장',
        src: process.env.PUBLIC_URL + '/images/performance20_07.jpg',
    },
    {
        id: 4,
        title: 'History of KNB Movement Series',
        date: '2020.08.01 - 08.02',
        place: '예술의 전당 CJ 토월극장',
        src: process.env.PUBLIC_URL + '/images/performance20_06.jpg',
    },
    {
        id: 5,
        title: '지젤',
        date: '2020.06.10 - 06.14',
        place: '예술의전당 오페라극장',
        src: process.env.PUBLIC_URL + '/images/performance20_05.jpg',
    },
    {
        id: 6,
        title: '안나 카레리나',
        date: '2020.4.22 - 04.26',
        place: '예술의전당 오페라극장',
        src: process.env.PUBLIC_URL + '/images/performance20_04.jpg',
    },
    {
        id: 7,
        title: '호이랑',
        date: '2020.03.27 - 03.29',
        place: '예술의전당 오페라극장',
        src: process.env.PUBLIC_URL + '/images/performance20_04.jpg',
    },
    {
        id: 8,
        title: '백조의 호수',
        date: '2022.03.20 - 03.22',
        place: '예술의전당 오페라극장',
        src: process.env.PUBLIC_URL + '/images/performance20_03.jpg',
    },
];

const Content03 = () => {
    return (
        <div className='performance'>
            {
                Data2022.map(it => {
                    return (
                        <div className='content_box'>
                            <Link to='/'>
                                <figure>
                                    <img src={it.src} alt="" />
                                </figure>
                                <strong className='title'>{it.title}</strong>
                                <p className='date'>{it.date}</p>
                                <span className='place'>{it.place}</span>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Content03;