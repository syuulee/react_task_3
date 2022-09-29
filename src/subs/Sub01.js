import React from 'react'

const Sub01 = () => {
    return (
        <section className='about'>
            <div className="container">
                <h2>발레단소개</h2>
                <strong>국립발레단 소개</strong>
            </div>
            <div className="container">
                <p>국립발레단은 1962년 창단된 대한민국 최초의 직업발레단으로 한국 발레 역사의 상징과도 같다.
                    60여 년의 시간 동안 수많은 무용수와 안무가, 그리고 훌륭한 예술감독과 작품 덕분에 국립발레단은 국내뿐만 아니라 해외에서도 그 위상을 인정받고 있다.
                    현재 국내 최정상 무용수 60여 명과 세계적인 명작들을 레퍼토리로 보유하고 있으며, 정기공연을 비롯한 다양한 공연을 통해 끊임없이 관객들을 찾아가고 있다.
                </p>
                <div className="fbox">
                    <div className="left">
                        <figure>
                            <img src={process.env.PUBLIC_URL + "/images/about.jpg"} alt="" />
                        </figure>
                    </div>
                    <div className="right">
                        <div className="des">
                            <p>국립발레단의 대표적인 전막 작품으로는 유리 그리고로비치의 "백조의 호수"  , "호두까기인형", <br />"스파르타쿠스 ", "라 바야데르", 파트리스 바르의 "지젤",
                                마르시아 하이데의 "잠자는 숲속의 미녀", 존 크랭코의 "말괄량이 길들이기" 등을 꼽을 수 있다.
                                뿐만 아니라, 우베 숄츠의 "교향곡 7번", 글렌 테틀리의 "봄의 제전", 조지 발란신의 "세레나데", "주얼스",
                                크리스티안 슈푹의 "안나 카레니나", 레나토 자넬라의 "마타 하리", 송정빈의 "해적" 등을
                                연이어 선보이며 클래식 발레에서 모던 발레, 네오클래식 발레,
                                드라마 발레 등 폭넓은 장르로 영역을 확장해 나가고 있다.</p>
                        </div>
                    </div>
                </div>
                <div className="sbox">
                    <div className="left">
                        <div className="des">
                            <p>국립발레단은 고유의 창작 발레 레퍼토리 개발에도 끊임없이
                                노력하고 있는데, 각각 설화와 고전시를 배경으로 한
                                "왕자호동", "허난설헌-수월경화" 등이 대표작이다.
                                2019년 5월 발표한 신작 "호이 랑" 역시 한국적 이야기를
                                서양의 몸짓으로 풀어낸 작품으로 국립발레단이 한국 창작 발레에 대해
                                수없이 고민한 흔적을 찾아볼 수 있다.
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <figure>
                            <img src={process.env.PUBLIC_URL + "/images/about02.png"} alt="" />
                        </figure>
                    </div>
                </div>
                <div className="tbox">
                    <div className="box">
                        <figure>
                            <img src={process.env.PUBLIC_URL + "/images/about03.png"} alt="" />
                        </figure>
                    </div>
                    <div className="right">
                        <div className="des">
                            <p>국립발레단은 2015년부터 시작된 안무가 육성 프로젝트인 "KNB Movement Series"를 통해 단원들이 무용수뿐만 아니라
                                안무가로서의 역량을 발휘할 기회를 마련해주고 있다.
                                이는 신진 안무가 발굴을 통해 무용수의 제2의 인생을 지원한다는 점에
                                큰 의미가 있을 뿐만 아니라 일회성 공연에 그치지 않고
                                하나의 탄탄한 작품이 될 수 있도록 지원함으로써
                                국립발레단의 레퍼토리 개발에도 한 몫을 하고 있다.</p>
                        </div>
                    </div>
                </div>
                <p className='last'>국립발레단은 국내 발레의 대중화라는 큰 의무를 위해 공연뿐만 아니라
                    전국 방방곡곡으로 ‘찾아가는 지역공연’, ‘찾아가는 발레교실’,
                    '꿈나무 발레교실' 등 크고 작은 프로그램들을 진행하며
                    다양한 공익사업을 펼치고 있다.
                    또한, 해외로도 활동 범위를 넓혀 세계 각지에서 공연을 올리며
                    한국을 대표하는 발레단으로서 대한민국 문화예술의 우수성을
                    전 세계로 널리 알리는 데 기여하고 있다.</p>
            </div>
        </section >
    )
}

export default Sub01;