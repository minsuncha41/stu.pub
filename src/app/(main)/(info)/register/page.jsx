'use client';

import "./register.css";
import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Table from "@/component/cmm/Table";
import Toptits from "@/component/cmm/Toptits";

export default function inc(){

    const [employee, setemployee] = useState([]);

    useEffect(() => {
        //api를 요청해서 받는다. 통신은async await붙인다  
        const getEmployee = async () => {
            const response = await baseApi.get("/api/v1/employees");
            console.log(response.data.data);

            //useState를 넣는다
            setemployee(response.data.data);

            //useState에 있는 데이터를 렌더링 시킨다
        }
        getEmployee();
    }, []);

    return(
        <div className="wrap">
            <Nav/>
            
            {/* <header className={s.header}>
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
            </header> */}







            <div className="inwrap">
                <Aside
                    dummy={
                        [
                            {
                                titin: { icon: "/User.png", titname:"인사정보" },
                                sublit: [ "인사정보등록", "사원명수/인사기록카드" , "인사발령등록" ]
                            },
                            {
                                titin: { icon: "/Heart Handshake.png", titname:"경조비신청" },
                                sublit: [ "경조비신청", "경조비신청현황" ]
                            },
                            {
                                titin: { icon: "/File Text.png", titname:"증명서관리" },
                                sublit: [ "1증명서발급" ]
                            },
                        ]
                    }
                />

                {/* <div className="lftber">
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
                </div> */}





                <div className="main">
                    <Toptits
                        toptits={{
                            map: "인사관리",
                            tit: "인사관리등록",
                            text: "직원의 인사정보를 등록하고 관리합니다.",
                            dls: "신규등록"
                        }}
                    />
                    {/* <div className="toptits">
                        <div className="maps">
                            <img src="/House.png" alt="" />
                            <span>&gt;</span>
                            <p>인사관리</p>
                            <span>&gt;</span>
                            <p>인사정보</p>
                            <span>&gt;</span>
                            <p className="mapsces">인사정보등록</p>
                        </div>

                        <div className="tit">
                            <div className="titl">
                                <h3>인사정보등록</h3>
                                <p>직원의 인사정보를 등록하고 관리합니다.</p>
                            </div>
                            <div className="titr">
                                <button className="pdfbtn">
                                    <img src="/Download.png" alt="" />
                                    PDF 다운로드
                                </button>
                                <button className="plusbtn">
                                    <p>+</p>
                                    신규등록
                                </button>
                            </div>
                        </div>
                    </div> */}



                    <div className="findebox">
                         <h3><img src="/Search.png" alt="" />검색조건</h3>
                         <div className="findeinput">
                            <label name="num">
                                사원번호
                                <input type="text" name="num" placeholder="전체" />
                            </label>

                            <label name="bss">
                                부서
                                <select name="" id="">
                                    <option value=""><span>전체 </span></option>
                                    <option value="inct">인사팀 </option>
                                    <option value="ggt">경영지원팀 </option>
                                    <option value="gvt">개발팀 </option>
                                    <option value="oot">영업팀 </option>
                                </select>
                            </label>
                            <label name="jgs">
                                직급
                                <select name="" id="">
                                    <option value=""><span>전체 </span></option>
                                    <option value="inct">인사팀 </option>
                                    <option value="ggt">경영지원팀 </option>
                                    <option value="gvt">개발팀 </option>
                                    <option value="oot">영업팀 </option>
                                </select>
                            </label>
                            <label name="bss">
                                재직상테
                                <select name="" id="">
                                    <option value=""><span>전체 </span></option>
                                    <option value="inct">인사팀 </option>
                                    <option value="ggt">경영지원팀 </option>
                                    <option value="gvt">개발팀 </option>
                                    <option value="oot">영업팀 </option>
                                </select>
                            </label>
                            <button className="jhbtn">
                                <img src="/Searchwt.png" alt="" />
                                조회
                            </button>
                            <button className="cghbtn">
                                <img src="/Rotate Ccw.png" alt="" />
                                초기화
                            </button>
                         </div>
                    </div>




                    <div className="textbox">
                        <Table 
                            tablecls = {[
                                "NO",
                                "사원번호",
                                "성명",
                                "부서",
                                "직급",
                                "입사일",
                                "연락처",
                                "이메일",
                                "관리",
                                "상태",
                            ]}
                        />

                    </div>
                </div>

                
            </div>


            

        </div>

    )


}