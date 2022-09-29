import React, { useState } from 'react';

const TAB = [
    {
        id: 1, content: [{ id: 1, title: "호두까기 인형", date: "2022.12.17 - 12.25", location: "예술의전당 오페라 극장" }],
    },
    {
        id: 2, content: [{ id: 1, title: "호두까기 인형", date: "2022.12.17 - 12.25", location: "예술의전당 오페라 극장" }],
    },
    {
        id: 3, content: [{ id: 1, title: "호두까기 인형", date: "2022.12.17 - 12.25", location: "예술의전당 오페라 극장" }],
    },
    {
        id: 4, content: [{ id: 1, title: "호두까기 인형", date: "2022.12.17 - 12.25", location: "예술의전당 오페라 극장" }],
    },

    {
        id: 5, content: [{ id: 1, title: "호두까기 인형", date: "2022.12.17 - 12.25", location: "예술의전당 오페라 극장" }],
    },
    {
        id: 6, content: [{ id: 1, title: "호두까기 인형", date: "2022.12.17 - 12.25", location: "예술의전당 오페라 극장" }],
    },
    {
        id: 7, content: [{ id: 1, title: "호두까기 인형", date: "2022.12.17 - 12.25", location: "예술의전당 오페라 극장" }],
    },
    {
        id: 8, content: [{ id: 1, title: "호두까기 인형", date: "2022.12.17 - 12.25", location: "예술의전당 오페라 극장" }],
    },
    {
        id: 9, content: [{ id: 1, title: "해적", date: "2022.04.20 -04.24", location: "예술의전당 오페라 극장", }]
    },
    {
        id: 10, content: [{ id: 1, title: "호두까기 인형", date: "2022.12.17 - 12.25", location: "예술의전당 오페라 극장" }],
    },
]

const Sub02 = () => {
    const [tab, setTab] = useState(0);

    return (
        <section className='program'>
            <div className="container">
                <h2>about</h2>
                <strong>국립발레단 소개</strong>
                <div className="tab">
                    <ul className="tab_menu">
                        <li>2022</li>
                        <li>2021</li>
                        <li>2022</li>
                    </ul>
                    <div className="tab_content">
                        <ul className="content_box">{TAB[tab].content.map((ix, idx) => {
                            return (
                                <li className='tab_data'>
                                    <figure className={`itm itm0${idx + 1}`}></figure>
                                    <span className="date">{ix.date}</span>
                                    <strong>{ix.title}</strong>
                                    <p>{ix.location}</p>
                                </li>
                            )
                        })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sub02;