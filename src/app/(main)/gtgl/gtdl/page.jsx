'use client';

import "./Gtdl.css";
import s from "./Gtdl.module.css";

import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Table from "@/component/cmm/Table";
import Toptits from "@/component/cmm/Toptits";
import { Baby, CakeSlice, CalendarCheck, Check, ChevronLeft, ChevronRight, ClipboardPen, Clock4, Ellipsis, FileText, Flower2, Heart, HeartHandshake, Paperclip, Save, Search, SendHorizontal, Upload, X } from "lucide-react";




export default function Gtdl(){

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
        <Nav num2={true} />




    <div className="inwrap">
        <Aside dummy={ [ { titin: { icon: "/Clock.png" , titname:"근태관리" }, sublit: [ "일일근태등록" , "월근태현황"] }, 
            { titin: { icon: "/Plane.png" , titname:"출장관리" }, sublit: [ "출장신청" , "출장정산", "출장사용현황" ] }, {
            titin: { icon: "/Calendar.png" , titname:"휴가관리" }, sublit: [ "휴가일수설정", "휴가일수계산", "휴가일수신청", "휴가사용현황", ] }, ] } 
             
            idxs="1"
            subidxs="1"
            />





        <div className="main">
            <Toptits toptits={{ 
                ttmap: "근태관리" ,
                map: "근태관리" , 
                tit: "일일근태등록" , 
                text: "날짜별 직원 근태 현황을 등록하고 수정합니다." , 
                tllbtn: "PDF 다운로드" , trrbtn: "일괄저장", 
                }} 
                pdfbtnno=""
                plusimgno="o"
            />

            <div className="findebox">
                <div className="findeboxlft">
                    <div className="ipdybox">
                        <div class="jgfmin ">
                            <p><ChevronLeft size={14}/></p>
                            <input type="date" />
                            <p><ChevronRight size={14} /></p>
                        </div>
                    </div>

                    <div className="dybox">
                        <CalendarCheck size={13} />
                        <p>오늘</p>
                    </div>


                    <label className="lbl">
                        <p>부서</p>
                        <select>
                            <option value="">전체 부서</option>
                            <option value="bs1">부서1</option>
                            <option value="bs2">부서2</option>
                            <option value="bs3">부서3</option>
                        </select>
                    </label>
                    <label className="lbl iconelbl">
                        <Search className="icone" size={13}  color="#9CA3AF"/>
                        <input type="text" placeholder="사원명 검색" />
                    </label>

                </div>


                <ul className="findeboxret">
                    <li className="fdret1">
                        <span>●</span> 전체23명
                    </li>                    
                    <li className="fdret2">
                        <span>●</span> 출근18
                    </li>                    
                    <li className="fdret3">
                        <span>●</span> 지각2
                    </li>                    
                    <li className="fdret4">
                        <span>●</span> 결근1
                    </li>                    
                    <li className="fdret5">
                        <span>●</span> 연차2
                    </li>                    
                </ul>


            </div>

            <div className="ingtgl">
                <div className="gtdlbox">
                    <div className="fromtit">
                        <h1>
                            <ClipboardPen size={15}/>
                            근태 등록
                        </h1>
                        <h2>7월 1일</h2>
                    </div>
                    <div className="gtglip">
                        <label>
                            <p>사원 선택<span>*</span></p>
                            <select>
                                <option value=""><span>박</span>박민준<p> · </p>개발팀</option>
                                <option value="">사원 선택</option>
                            </select>
                        </label>
                    </div>
                </div>



                <div className="textbox">
                    <div className="fromtit">
                        <h1>
                            <Clock4 size={15} strokeWidth={1.5} />
                            나의 경조비 신청 현황
                        </h1>
                        <h2>총 3건 </h2>
                    </div>

                    <ul className={s.texts}>
                        <ul>
                            <li>NO</li>
                            <li>신청일</li>
                            <li>경조구분</li>
                            <li>대상자</li>
                            <li>관계 </li>
                            <li>경조일</li>
                            <li>지급금액</li>
                            <li>지급계좌</li>
                            <li>처리상태</li>
                            <li>관리</li>
                        </ul>

                        <ul>
                            <li>만든거 1</li>
                            <li>2025.07.01</li>
                            <li><span className={`${s.gb} ${s.bnin}`}>본인결혼</span></li>
                            <li>이영희</li>
                            <li>본인</li>
                            <li>2025.07.20</li>
                            <li>500,000원</li>
                            <li>국민 12****-34</li>
                            <li><span className={`${s.clst} ${s.gt}`}>검토중</span></li>
                            <li>
                                <span className={`${s.sjs} ${s.glbtns}`}>상세</span>
                            </li>
                        </ul>
                        <ul>
                            <li>2</li>
                            <li>2025.03.10</li>
                            <li><span className={`${s.gb} ${s.clsn}`}>출산</span></li>
                            <li>이준혁</li>
                            <li>배우자</li>
                            <li>2025.03.05</li>
                            <li>300,000원</li>
                            <li>국민 12****-34</li>
                            <li><span className={`${s.clst} ${s.jg}`}>지급완료</span></li>
                            <li>
                                <span className={`${s.sjs} ${s.glbtns}`}>상세</span>
                            </li>
                        </ul>
                        <ul>
                            <li>3</li>
                            <li>2024.11.22</li>
                            <li><span className={`${s.gb} ${s.bmhg}`}>부모환갑</span></li>
                            <li>이○○</li>
                            <li>부</li>
                            <li>2024.11.30</li>
                            <li>200,000원</li>
                            <li>국민 12****-34</li>
                            <li><span className={`${s.clst} ${s.jg}`}>지급완료</span></li>
                            <li>
                                <span className={`${s.sjs} ${s.glbtns}`}>상세</span>
                            </li>
                        </ul>




                        <ul className={s.textsbtns}>
                            <li>총 3건</li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li>
                                <span>&lt;</span>
                                <span className={s.textsces}>1</span>
                                <span>&gt;</span>
                            </li>
                        </ul>
                    </ul>
                </div>   


            </div>



        </div>

    </div>

</div>
    )


}