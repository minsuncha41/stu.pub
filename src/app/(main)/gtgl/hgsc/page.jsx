'use client';

import "./Hgsc.css";
import s from "./Hgsc.module.css";

import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Table from "@/component/cmm/Table";
import Toptits from "@/component/cmm/Toptits";
import { AlarmClock, AlertCircle, Baby, BookOpen, CakeSlice, Calendar, CalendarCheck, CalendarPlus, Check, CheckCheck, ChevronLeft, ChevronRight, ClipboardPen, Clock, Clock1, Clock10, Clock4, Ellipsis, FileText, Flower2, Heart, HeartHandshake, HeartPulse, ListChecks, LogOut, MoonStar, Paperclip, Plane, Plus, RotateCcw, Save, SaveAll, SaveOff, Search, SendHorizontal, ShieldCheck, Star, Sun, Upload, User2, Users, X } from "lucide-react";




export default function Hgsc(){

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
        <Aside dummy={ [ 
            { titin: { icon: "/Clock.png" , titname:"근태관리", main:"gtgl"  }, 
            sublit: [ "일일근태등록" , "월근태현황"],
            mainsub: [ "gtdl",  "gthh", ] }, 

            { titin: { icon: "/Plane.png" , titname:"출장관리", main:"gtgl" }, 
            sublit: [ "출장신청" , "출장정산", "출장사용현황" ],
            mainsub: [ "",  "",  "" ] }, 
            
            {titin: { icon: "/Calendar.png" , titname:"휴가관리", main:"gtgl" }, 
            sublit: [ "휴가일수설정", "휴가일수계산", "휴가일수신청", "휴가사용현황", ],
            mainsub: [ "hgsj",  "hggs",  "hgsc",  "hghh" ] }, 
        ] } 
             
        idxs="3"
        subidxs="3"
        />

 



        <div className="main">
            <Toptits toptits={{ 
                ttmap: "근태관리" ,
                map: "휴가관리" , 
                tit: "휴가일수신청" , 
                text: "휴가 종류와 기간을 선택하여 신청합니다." , 
                tllbtn: "PDF 다운로드" , trrbtn: "일괄저장", 
                }} 
                lftwtbtnno="o"
                retwtbtnno="o"
                plusimgno="o"
                ttct="o"
            />

            <ul className="findebox">
                <li>
                    <p>총 부여일수</p>
                    <h1>14일</h1>
                </li>
                <li>
                    <p>사용일수</p>
                    <h1>11일</h1>
                </li>
                <li>
                    <p>잔여일수</p>
                    <h1>3일</h1>
                </li>
                <li>
                    <p>승인대기</p>
                    <h1>1건</h1>
                </li>
                <li>
                    <p>이월일수</p>
                    <h1>0일</h1>
                </li>
            </ul>

            <div className="ingtgl">
                <div className="gtdlbox">
                    <div className="fromtit">
                        <h1>
                            <CalendarPlus size={15}/>
                            휴가신청
                        </h1>
                        <h2><span>*</span> 필수항목</h2>
                    </div>

                    <div className="gtglip">
                        <label className="sost" >
                            <p>신청자 정보</p>
                            <div className="gtglipin">
                                <div className="gtglipinin">
                                    <span>박</span>
                                    <div className="gtglipininp">
                                        <p>박민준</p>
                                        <h1>
                                            <p>개발팀 · 대리</p>
                                            <s></s>
                                            <span>EMP-003</span>
                                        </h1>
                                    </div>
                                </div>
                                <span>
                                    <CalendarCheck size={12}/>
                                    잔여 3일
                                </span>
                            </div>
                        </label>

                        <div className="line"></div>
                        
                        <label className="gtuh">
                            <p>휴가 종류<span className="str">*</span></p>
                            <ul className="gtglipin">
                                <li className="uc gtuhlicis">
                                    <CalendarCheck size={12}/>
                                    <p>연차</p>
                                </li>
                                <li className="ojbc">
                                    <Sun size={12}/>
                                    <p>오전반차</p>
                                </li>
                                <li className="ohbc">
                                    <MoonStar size={12}/>
                                    <p>오후반차</p>
                                </li>
                                <li className="tbhg">
                                    <Star size={12}/>
                                    <p>특별휴가</p>
                                </li>
                                <li className="bg">
                                    <HeartPulse size={12}/>
                                    <p>병가</p>
                                </li>
                                <li className="gg">
                                    <ShieldCheck size={12}/>
                                    <p>공가</p>
                                </li>
                                <h1 className="gtuhif"><p><span>ⓘ</span>연차 선택됨</p> <s></s> 1일 차감 / 잔여 3일</h1>
                            </ul>
                        </label>

                        <div className="line"></div>


                        <div className="lboutbox">
                            <label className="cgsg" >
                                <p>휴가 기간<span className="str">*</span></p>
                                <label>
                                    <p>시작일</p>
                                    <input type="date" name="" id="" />
                                </label>
                                <span>~</span>
                                <label>
                                    <p>종료일</p>
                                    <input type="date" name="" id="" />
                                </label>
                            </label>
                            <h1 className="gtuhif hgggif"><p><span><Clock size={12} /></span>신청 일수: 1일 (평일 기준)</p></h1>
                        </div>
                        
                        
                        <div className="line"></div>


                        <div className="lftbtinp">
                            <label className="cgsg" >
                                <p>업무 대리자<span className="">선택사항</span></p>
                                <label> 
                                    <User2 className="inc" size={13} color="#9CA3AF"/>
                                    <input type="text" placeholder="대리자를 선택하세요"/>
                                </label>
                                
                                <p>휴가사유<span className="str">*</span></p>
                                <label> 
                                    <textarea className="hgsu" placeholder="휴가 사유를 입력하세요"></textarea>
                                </label>

                                <p>첨부파일<span className="">선택사항 · 최대 3개</span></p>
                                <label> 
                                </label>
                            </label>
                        </div>




                        <div className="btnsbox">
                            <button className="lftwtbtn">
                                <RotateCcw size={12} color="#6B7280" />
                                <p>초기화</p>
                            </button>
                            <button className="retblbtn">
                                <Save size={12} />
                                <p>저장</p>
                            </button>
                        </div>
                    </div>
                </div>



                <div className="textbox">
                    <div className="fromtit">
                        <h1>
                            <ListChecks size={15} strokeWidth={1.5} />
                            2025.07.01 근태 목록
                        </h1>
                        <div className="titin">
                            <h2>총 23건 </h2>
                            <h3><Users size={12} /> 일괄등록</h3>
                        </div>
                    </div>

                    <ul className={s.texts}>
                        <ul>
                            <li><input type="checkbox" checked/></li>
                            <li>사원번호</li>
                            <li>성명</li>
                            <li>부서</li>
                            <li>직급</li>
                            <li>근태유형</li>
                            <li>출근시간</li>
                            <li>퇴근시간</li>
                            <li>OT</li>
                            <li>비고</li>
                            <li>관리</li>
                        </ul>

                        <ul>
                            <li><input type="checkbox"/></li>
                            <li>EMP-001</li>
                            <li>김철수</li>
                            <li>인사팀</li>
                            <li>팀장</li>
                            <li><p className={`${s.gtuh} ${s.cg}`}><span>●</span>출근</p></li>
                            <li>09:02</li>
                            <li>18:05</li>
                            <li>-</li>
                            <li>-</li>
                            <li>
                                <span className={`${s.sjs} ${s.glbtns}`}>수정</span>
                                <span className={`${s.dls} ${s.glbtns}`}>삭제</span>                                
                            </li>
                        </ul>
                        <ul>
                            <li><input type="checkbox"/></li>
                            <li>EMP-002</li>
                            <li>이영희</li>
                            <li>경영지원팀</li> 
                            <li>과장</li>
                            <li><p className={`${s.gtuh} ${s.jg}`}><span>●</span>지각</p></li>
                            <li className={s.jgtt} >09:27</li>
                            <li>18:10</li>
                            <li>-</li>
                            <li className={s.jgtt} >27분 지각</li>
                            <li>
                                <span className={`${s.sjs} ${s.glbtns}`}>수정</span>
                                <span className={`${s.dls} ${s.glbtns}`}>삭제</span>                                
                            </li>
                        </ul>
                        <ul>
                            <li><input type="checkbox"/></li>
                            <li>EMP-003</li>
                            <li>박민준</li>
                            <li>개발팀</li>
                            <li>대리</li>
                            <li><p className={`${s.gtuh} ${s.uc}`}><span>●</span>연차</p></li>
                            <li>-</li>
                            <li>-</li>
                            <li>-</li>
                            <li className={s.uctt} >연차 1일 사용</li>
                            <li>
                                <span className={`${s.sjs} ${s.glbtns}`}>수정</span>
                                <span className={`${s.dls} ${s.glbtns}`}>삭제</span>                                
                            </li>
                        </ul>
                        <ul>
                            <li><input type="checkbox"/></li>
                            <li>EMP-004</li>
                            <li>최지영</li>
                            <li>영업팀</li>
                            <li>사원</li>
                            <li><p className={`${s.gtuh} ${s.cj}`}><span>●</span>출장</p></li>
                            <li>08:50</li>
                            <li>19:30</li>
                            <li>1.5h</li>
                            <li className={s.cjtt} >부산츨장</li>
                            <li>
                                <span className={`${s.sjs} ${s.glbtns}`}>수정</span>
                                <span className={`${s.dls} ${s.glbtns}`}>삭제</span>                                
                            </li>
                        </ul>
                        <ul>
                            <li><input type="checkbox"/></li>
                            <li>EMP-005</li>
                            <li>정수빈</li>
                            <li>개발팀</li>
                            <li>사원</li>
                            <li><p className={`${s.gtuh} ${s.bc}`}><span>●</span>반차</p></li>
                            <li>09:02</li>
                            <li>18:05</li>
                            <li>-</li>
                            <li className={s.bctt} >오후반차</li>
                            <li>
                                <span className={`${s.sjs} ${s.glbtns}`}>수정</span>
                                <span className={`${s.dls} ${s.glbtns}`}>삭제</span>                                
                            </li>
                        </ul>
                        <ul className={s.mdlul}>
                            <li><input type="checkbox"/></li>
                            <li>EMP-006</li>
                            <li>한지민</li>
                            <li>영업팀</li>
                            <li>대리</li>
                            <li><p className={`${s.gtuh} ${s.mdl}`}><span><AlertCircle size={10} /></span>미등록</p></li>
                            <li>-</li>
                            <li>-</li>
                            <li>-</li>
                            <li>-</li>
                            <li>
                                <span className={`${s.dls} ${s.glbtns}`}><Plus size={10} /> 등록</span>
                            </li>
                        </ul>
                        

                        <ul className="alltbl">
                            <div className="alltblin">
                                <li>
                                    <h1>합계</h1>
                                </li>
                                <li>
                                    <h2>6명 조회</h2>
                                </li>
                                <li>
                                    <p>평균</p>
                                    <h1>09:05</h1>
                                </li>
                                <li>
                                    <p>평균</p>
                                    <h1>18:09</h1>
                                </li>
                                <li>
                                    <p>합계</p>
                                    <h3>3.0h</h3>
                                </li>
                            </div>
                        </ul>




                        <ul className={s.textsbtns}>
                            <li><p>전체 23명 중 6명 표시 · 미등록 1명</p></li>

                            <li></li>
                            <li>
                                <span>&lt;</span>
                                <span className={s.textsces}>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
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