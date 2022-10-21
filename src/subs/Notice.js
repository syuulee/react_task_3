import React from 'react'
import { Link } from 'react-router-dom'


const notice = [
    { id: 1, title: "[공지] 국립발레단 대구 '백조의 호수' 캐스팅 변경 안내", date: '2022.09.29.', link: "/" },
    { id: 2, title: "[공지] 국립발레단 대구 '백조의 호수' 캐스팅 변경 안내", date: '2022.09.29.', link: "/" },
    { id: 3, title: "[공지] 국립발레단 대구 '백조의 호수' 캐스팅 변경 안내", date: '2022.09.29.', link: "/" },
    { id: 4, title: "[공지] 국립발레단 대구 '백조의 호수' 캐스팅 변경 안내", date: '2022.09.29.', link: "/" },
    { id: 5, title: "[공지] 국립발레단 대구 '백조의 호수' 캐스팅 변경 안내", date: '2022.09.29.', link: "/" },
    { id: 6, title: "[공지] 국립발레단 대구 '백조의 호수' 캐스팅 변경 안내", date: '2022.09.29.', link: "/" },
    { id: 7, title: "[공지] 국립발레단 대구 '백조의 호수' 캐스팅 변경 안내", date: '2022.09.29.', link: "/" },
    { id: 8, title: "[공지] 국립발레단 대구 '백조의 호수' 캐스팅 변경 안내", date: '2022.09.29.', link: "/" },
    { id: 9, title: "[공지] 국립발레단 대구 '백조의 호수' 캐스팅 변경 안내", date: '2022.09.29.', link: "/" },
    { id: 10, title: "[공지] 국립발레단 대구 '백조의 호수' 캐스팅 변경 안내", date: '2022.09.29.', link: "/" },
]
const Notice = () => {
    return (
        <section className='notice'>
            <div className="container">
                <div className="intro">
                    <h2>발레단소식</h2>
                    <strong className='tt'>공지사항</strong>
                </div>
                <div className='search_box'>
                    <form action='#!'>
                        <input
                            type='text'
                            placeholder='찾고 싶은 거 검색.'
                            required
                        />
                        <button>
                            <i className='xi-search'></i>
                        </button>
                    </form>
                </div>
                <ul>
                    {notice.map(it => {
                        return (
                            <li>
                                <Link to={it.link}>
                                    <p>{it.title}</p>
                                    <span className='date'>{it.date}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Notice;