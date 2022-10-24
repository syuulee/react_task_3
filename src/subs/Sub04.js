import React from 'react'


const PriceContent = [
    { id: 1, title: "2,000,000원", part1: "2022 정기공연", part1Content: "해적, 고집쟁이 딸, 백조의 호수, 지젤, 트리플 빌", part2: "창단 60주년 기념공연", part2Content: "주얼스", part3: "공연활성화사업", part3Content: "허난설헌-수월경화, KNB Movement Series 7", part4: "공연 티켓 구매시 30%할인 일괄 적용", special: "각 공연당 S석 티켓 2매 제공", special2: "각 공연당 S석 티켓 2매 제공", limit: "1공연당 2매 제한" },

    { id: 2, title: "3,000,000원", part1: "2022 정기공연", part1Content: "해적, 고집쟁이 딸, 백조의 호수, 지젤, 트리플 빌", part2: "창단 60주년 기념공연", part2Content: "주얼스", part3: "공연활성화사업", part3Content: "허난설헌-수월경화, KNB Movement Series 7", part4: "공연 티켓 구매시 30%할인 일괄 적용", special: "각 공연당 R석 티켓 2매 제공", special2: "각 공연당 R석 티켓 2매 제공", limit: "1공연당 4매 제한" },

    { id: 3, title: "5,000,000원", part1: "2022 정기공연", part1Content: "해적, 고집쟁이 딸, 백조의 호수, 지젤, 트리플 빌", part2: "창단 60주년 기념공연", part2Content: "주얼스", part3: "공연활성화사업", part3Content: "허난설헌-수월경화, KNB Movement Series 7", part4: "공연 티켓 구매시 30%할인 일괄 적용", special: "각 공연당 R석 티켓 4매 제공", special2: "공연당 R석 티켓 2매 제공", limit: "1공연당 4매 제한" },

    { id: 4, title: "10,000,000원", part1: "2022 정기공연", part1Content: "해적, 고집쟁이 딸, 백조의 호수, 지젤, 트리플 빌", part2: "창단 60주년 기념공연", part2Content: "주얼스", part3: "공연활성화사업", part3Content: "허난설헌-수월경화, KNB Movement Series 7", part4: "공연 티켓 구매시 30%할인 일괄 적용", special: "각 공연당 R석 티켓 6매 제공", special2: "공연당 R석 티켓 4매 제공", limit: "매수제한 없음" },

]
const Sub04 = () => {
    return (
        <section className='donation'>
            <div className="container">
                <div className="intro">
                    <h2>후원회</h2>
                    <strong className='tt'>후원예우</strong>
                </div>
                <div className="des">
                    <p>대한민국 발레를 대표하며 60여 년의 역사를 이어온 국립발레단은
                        세계적 거장 강수진 예술감독의 뛰어난 리더십과 여러 무용수 및 스텝 여러분들의 열정으로
                        우리나라 문화 예술의 중심이 되고 있습니다.
                        <br />
                        인간의 신체로 표현하는 세상에서 가장 아름다운 예술적 언어, “발레”.

                        하나의 동작, 하나의 표정까지 혼신의 힘을 쏟는 무용수들의 노력은
                        말의 한계를 넘는 완벽한 아름다움을 창조합니다.

                        천상의 미적 가치와 감동을 선사하는 이들의 무한한 노력이
                        우리들 각자의 일상에 공명된다면
                        우리가 사는 이 세상은 더욱 아름다워지고 희망으로 가득 할 것입니다.

                        국립발레단은 이와 같은 아름다움을 전세계에 전하는
                        최고의 발레단으로 자리매김 할 것입니다.

                        우리 후원회는 이를 위해 최선의 지원을 다할 것입니다.<br />
                        뜻 깊은 후원에 많은 분들의 참여를 부탁 드립니다.
                    </p>
                </div>
                <div className="dokind">
                    {
                        PriceContent.map(it => {
                            return (
                                <div className="small">
                                    <div className='detail'>
                                        <h3>{it.title}</h3>
                                        <strong className='subtit'>
                                            <span className='hf_line'>{it.part1}</span>
                                        </strong>
                                        <p>{it.part1Content}</p>
                                        <span className="box">{it.special}</span>
                                        <strong className='subtit'>
                                            <span className='hf_line'>{it.part2}</span>
                                        </strong>
                                        <p className="special">{it.part2Content}</p>
                                        <strong className='subtit'>
                                            <span className='hf_line'>{it.part3}</span>
                                        </strong>
                                        <p>{it.part3Content}</p>
                                        <span className="box">{it.special2}</span>
                                        <strong className='subtit'>
                                            <span className='hf_line'>{it.part4}</span></strong>
                                        <span className="box restrict">{it.limit}</span>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        </section>
    )
}

export default Sub04;