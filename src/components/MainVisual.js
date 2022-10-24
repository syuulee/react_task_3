import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";


const SLIDE = [
    {
        id: 1, content: "", title: "지젤"
    },
    {
        id: 2, content: "", title: "호두까기 인형"
    },
    {
        id: 3, content: "", title: "허난설헌-수월경화"
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
        autoplaySpeed: 3000,
        fade: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    }
    return (
        <section className='main_visual'>
            <div className="inner">
                <Slider {...setting} ref={mainSlide}>
                    {
                        SLIDE.map((slide, idx) => {
                            return (
                                <figure key={slide.id} className={'itm0' + slide.id + (idx === IDX ? ' on' : '')}>
                                    {/* <div className="container">
                                        <div className="des">{slide.content}</div>
                                        <p className="tit">{slide.title}</p>
                                    </div> */}
                                </figure>
                            )
                        })
                    }
                </Slider>
            </div>
            <div className='slideArrows'>
                <button onClick={() => mainSlide.current.slickPrev()}><i className="xi-angle-left"></i></button>
                <button onClick={() => mainSlide.current.slickNext()}><i className="xi-angle-right"></i></button>
            </div>
        </section>
    )
}

export default MainVisual;