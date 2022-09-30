import React from 'react'

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
                    <li>
                        <p>[공지] 국립발레단 대구 '백조의 호수' 캐스팅 변경 안내</p>
                        <span className="date">2022.09.29.</span>
                    </li>
                    <li>
                        <p>[공지] 국립발레단 대구 '백조의 호수' 캐스팅 변경 안내</p>
                        <span className="date">2022.09.29.</span>
                    </li>
                    <li>
                        <p>[공지] 국립발레단 대구 '백조의 호수' 캐스팅 변경 안내</p>
                        <span className="date">2022.09.29.</span>
                    </li>
                    <li>
                        <p>[공지] 국립발레단 대구 '백조의 호수' 캐스팅 변경 안내</p>
                        <span className="date">2022.09.29.</span>
                    </li>
                    <li>
                        <p>[공지] 국립발레단 대구 '백조의 호수' 캐스팅 변경 안내</p>
                        <span className="date">2022.09.29.</span>
                    </li>
                    <li>
                        <p>[공지] 국립발레단 대구 '백조의 호수' 캐스팅 변경 안내</p>
                        <span className="date">2022.09.29.</span>
                    </li>
                    <li>
                        <p>[공지] 국립발레단 대구 '백조의 호수' 캐스팅 변경 안내</p>
                        <span className="date">2022.09.29.</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Notice;