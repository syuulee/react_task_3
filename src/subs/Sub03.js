import React, { useState } from 'react';
import Content01 from '../pages/Content01';
import Content02 from '../pages/Content02';
import Content03 from '../pages/Content03';

const Sub02 = () => {
    const link = [
        '2022', '2021', '2020'
    ];
    const [alink, setAlink] = useState(0);
    return (
        <section className='program'>
            <div className="container">
                <div className="intro">
                    <h2>about</h2>
                    <strong>국립발레단 소개</strong>
                </div>
                <div className="tab">
                    <ul className="tab_menu">
                        {
                            link.map((it, idx) => {
                                return <li onClick={() =>
                                    setAlink(idx)} key={idx}>{it}</li>
                            })
                        }
                    </ul>
                </div>
                <div className="tab_content">
                    <Content01 />
                    <Content02 />
                    <Content03 />
                </div>
            </div>
        </section >
    )
}

export default Sub02;



//const TAB = [
//     {
//         id: 1, content: [{ id: 1, title: "호두까기 인형", date: "2022.12.17 - 12.25", location: "예술의전당 오페라 극장" }],
//     },
//     {
//         id: 2, content: [{ id: 1, title: "호두까기 인형", date: "2022.12.17 - 12.25", location: "예술의전당 오페라 극장" }],
//     },
//     {
//         id: 3, content: [{ id: 1, title: "호두까기 인형", date: "2022.12.17 - 12.25", location: "예술의전당 오페라 극장" }],
//     },
//     {
//         id: 4, content: [{ id: 1, title: "호두까기 인형", date: "2022.12.17 - 12.25", location: "예술의전당 오페라 극장" }],
//     },

//     {
//         id: 5, content: [{ id: 1, title: "호두까기 인형", date: "2022.12.17 - 12.25", location: "예술의전당 오페라 극장" }],
//     },
//     {
//         id: 6, content: [{ id: 1, title: "호두까기 인형", date: "2022.12.17 - 12.25", location: "예술의전당 오페라 극장" }],
//     },
//     {
//         id: 7, content: [{ id: 1, title: "호두까기 인형", date: "2022.12.17 - 12.25", location: "예술의전당 오페라 극장" }],
//     },
//     {
//         id: 8, content: [{ id: 1, title: "호두까기 인형", date: "2022.12.17 - 12.25", location: "예술의전당 오페라 극장" }],
//     },
//     {
//         id: 9, content: [{ id: 1, title: "해적", date: "2022.04.20 -04.24", location: "예술의전당 오페라 극장", }]
//     },
//     {
//         id: 10, content: [{ id: 1, title: "호두까기 인형", date: "2022.12.17 - 12.25", location: "예술의전당 오페라 극장" }],
//     },
// ]
