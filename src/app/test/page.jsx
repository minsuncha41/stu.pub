

import s from "./test.module.css";
import "./inc.css";

export default function inc(){
    return(
        <div className="wrap">
            <header className={s.header}>
                <nav className={s.navlft}>
                    <ul>
                        <li className={s.logo}><img src="/Briefcase Business.png"/>인사관리시스템</li>
                        <li className={s.navlftces}>인사관리</li>
                        <li>근태관리</li>
                        <li>급여관리</li>
                        <li>일용직관리</li>
                    </ul>
                </nav>

                <ul className={s.navret}>
                    <li><img src="/Bell.png"/></li>
                    <li className={s.name}>홍</li>
                    <li><p>홍길동</p></li>
                    <li>인사팀</li>
                    <li><img src="/Log Out.png"/></li>
                </ul>
            </header>
            <div className="inwrap">
                <div className="lftber">
                    <ul>
                        <p><img src="/User.png" alt="" />인사정보</p>
                        <li className="lftberces"><span>●</span>인사정보등록</li>
                        <li><span>●</span>사원명수/인사기록카드</li>
                        <li><span>●</span>인사발령등록</li>
                    </ul>
                    <ul>
                        <p><img src="/Heart Handshake.png" alt="" />경조비신청</p>
                        <li><span>●</span>경조비신청</li>
                        <li><span>●</span>경조비신청현황</li>
                    </ul>
                    <ul>
                        <p><img src="/File Text.png" alt="" />증명서관리</p>
                        <li><span>●</span>증명서발급</li>
                    </ul>
                </div>


                <div className="main">
                    <div className="textbox">
                        <ul className="texts">
                            <ul>
                                <li>NO</li>
                                <li>사원번호</li>
                                <li>성명</li>
                                <li>부서</li>
                                <li>직급</li>
                                <li>입사일</li>
                                <li>연락처</li>
                                <li>이메일</li>
                                <li>재직상태</li>
                                <li>관리</li>
                            </ul>

                            <ul>
                                <li>1</li>
                                <li>EMP-001</li>
                                <li>김철수</li>
                                <li>인사팀</li>
                                <li>팀장</li>
                                <li>2019.03.02</li>
                                <li>010-1234-5678</li>
                                <li>kim@company.com</li>
                                <li><span>재직중</span></li>
                                <li>수정</li>
                            </ul>
                            <ul>
                                <li>2</li>
                                <li>EMP-002</li>
                                <li>이영희</li>
                                <li>경영지원팀</li>
                                <li>과장</li>
                                <li>2018.07.15</li>
                                <li>010-9876-5432</li>
                                <li>lee@company.com</li>
                                <li><span>재직중</span></li>
                                <li>수정</li>
                            </ul>
                            <ul>
                                <li>3</li>
                                <li>EMP-003</li>
                                <li>박민준</li>
                                <li>개발팀</li>
                                <li>대리</li>
                                <li>2021.08.01</li>
                                <li>010-5555-7777</li>
                                <li>park@company.com</li>
                                <li><span>휴직중</span></li>
                                <li>수정</li>
                            </ul>
                            <ul>
                                <li>4</li>
                                <li>EMP-004</li>
                                <li>최지영</li>
                                <li>영업팀</li>
                                <li>사원</li>
                                <li>2023.01.09</li>
                                <li>010-3333-4444</li>
                                <li>choi@company.com</li>
                                <li><span>재직중</span></li>
                                <li>수정</li>
                            </ul>
                            
                            
                            <ul className="textsbtns">
                                <li>총 4건</li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li>
                                    <span>&lt;</span>
                                    <span className="textsces  ">1</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>&gt;</span>
                                </li>
                            </ul>
                        </ul>


                    </div>
                </div>

                
            </div>


            

        </div>

    )


}