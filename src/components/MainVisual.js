import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";


const SLIDE = [
    {
        id: 1, content: "국민들의 행복의 가치가 올라갈 수 있는 길이 무엇인가를 찾기 위하여 끊임없이 노력하는", title: "국립발레단"
    },
    {
        id: 2, content: "국민들의 행복의 가치가 올라갈 수 있는 길이 무엇인가를 찾기 위하여 끊임없이 노력하는", title: "국립발레단"
    },
    {
        id: 3, content: "국민들의 행복의 가치가 올라갈 수 있는 길이 무엇인가를 찾기 위하여 끊임없이 노력하는", title: "국립발레단"
    },
]
const MainVisual = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, []);
    const mainSlide = useRef(null);
    const setting = {
        arrows: false,
        // dots: true,
        afterChange: index => setIDX(index),
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
    }
    return (
        <section className='main_visual'>
            <div className="inner">
                <Slider {...setting} ref={mainSlide}>
                    {
                        SLIDE.map((slide, idx) => {
                            return (
                                <figure key={slide.id} className={'itm0' + slide.id + (idx === IDX ? ' on' : '')}>
                                    <div className="inner">
                                        <div className="des">{slide.desc}</div>
                                        <p className="tit">{slide.content}</p>
                                    </div>
                                </figure>
                            )
                        })
                    }
                </Slider>
            </div>
        </section>
    )
}

export default MainVisual;