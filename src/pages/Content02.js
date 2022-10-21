import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

const Data2022 = [
    {
        id: 1,
        title: '호두까기 인형',
        date: '2021.12.21 - 12.26',
        place: '예술의 전당 오페라극장',
        src: process.env.PUBLIC_URL + '/images/performance21_09.jpg',
    },
    {
        id: 2,
        title: '주얼스',
        date: '2021.10.20 - 10.24',
        place: '예술의 전당 오페라극장',
        src: process.env.PUBLIC_URL + '/images/performance21_08.jpg',
    },
    {
        id: 3,
        title: 'Evening Gala',
        date: '2021.09.04. - 09.05',
        place: '예술의 전당 CJ토월극장',
        src: process.env.PUBLIC_URL + '/images/performance21_07.jpg',
    },
    {
        id: 4,
        title: 'KNB Movement Series 6',
        date: '2021.08.28 - 08.29',
        place: '예술의 전당 CJ토월극장',
        src: process.env.PUBLIC_URL + '/images/performance21_06.jpg',
    },
    {
        id: 5,
        title: '말괄량이 길들이기',
        date: '2021.06.15 - 06.20',
        place: '예술의전당 오페라극장',
        src: process.env.PUBLIC_URL + '/images/performance21_05.jpg',
    },
    {
        id: 6,
        title: '허난설헌-수월경화(水月鏡花)',
        date: '2021.05.22 - 05.23',
        place: '국립극장 달오름',
        src: process.env.PUBLIC_URL + '/images/performance21_04.jpg',
    },
    {
        id: 7,
        title: '라 바야데르',
        date: '2021.04.27 - 05.02',
        place: '예술의전당 오페라극장',
        src: process.env.PUBLIC_URL + '/images/performance21_03.jpg',
    },
    {
        id: 8,
        title: '해적',
        date: '2021.03.23 - 03.28',
        place: '예술의전당 오페라극장',
        src: process.env.PUBLIC_URL + '/images/performance21_02.jpg',
    },
];

const Content02 = () => {
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

export default Content02;