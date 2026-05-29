'use client';

import "./Gthh.css";
import s from "./Gthh.module.css";

import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Table from "@/component/cmm/Table";
import Toptits from "@/component/cmm/Toptits";
import { AlarmClock, AlertCircle, Baby, BookOpen, CakeSlice, Calendar, CalendarCheck, Check, CheckCheck, ChevronLeft, ChevronRight, ClipboardPen, Clock, Clock1, Clock10, Clock4, Ellipsis, FileText, Flower2, Heart, HeartHandshake, ListChecks, LogOut, Paperclip, Plane, Plus, RotateCcw, Save, SaveAll, SaveOff, Search, SendHorizontal, ShieldCheck, Upload, Users, X } from "lucide-react";




export default function Gthh(){

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
                lftwtbtnno=""
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
                        <label className="sost" >
                            <p>사원 선택<span className="str">*</span></p>
                            <div className="gtglipin">
                                <p><span>박</span>박민준 · 개발팀</p>
                                <p>x</p>
                            </div>
                        </label>
                        <label className="gtuh">
                            <p>근태 유형<span className="str">*</span></p>
                            <ul className="gtglipin">
                                <li className="cg gtuhlicis">
                                    <CheckCheck size={12}/>
                                    <p>출근</p>
                                </li>
                                <li className="jg">
                                    <AlarmClock size={12}/>
                                    <p>지각</p>
                                </li>
                                <li className="jt">
                                    <LogOut size={12}/>
                                    <p>조퇴</p>
                                </li>
                                <li className="gg">
                                    <X size={12}/>
                                    <p>결근</p>
                                </li>
                                <li className="uc">
                                    <CalendarCheck size={12}/>
                                    <p>연차</p>
                                </li>
                                <li className="bc">
                                    <Calendar size={12}/>
                                    <p>반차</p>
                                </li>
                                <li className="cj">
                                    <Plane size={12}/>
                                    <p>출장</p>
                                </li>
                                <li className="gu">
                                    <BookOpen size={12}/>
                                    <p>교육</p>
                                </li>
                                <li className="gog">
                                    <ShieldCheck size={12}/>
                                    <p>공가</p>
                                </li>
                            </ul>
                        </label>

                        <div className="lboutbox">
                            <label className="cgsg" >
                                <p>출근 시간</p>
                                <div className="gtglipin">
                                    <input type="text" value={"09:00"} />
                                    <Clock4 size={13} className="gtglipinic"/>
                                </div>
                            </label>
                            <label className="tgsg" >
                                <p>출근 시간</p>
                                <div className="gtglipin">
                                    <input type="text" value={"18:00"} />
                                    <Clock4 size={13} className="gtglipinic"/>
                                </div>
                            </label>
                        </div>

                        <div className="lboutbox">
                            <label className="cggm" >
                                <div className="tgbox">
                                    <p>초과근무(OT)</p>
                                    <div className="tgbtnbox">
                                        <div className="tgbtn">
                                            <div className="tgs"></div>
                                        </div>
                                        <p>적용</p>
                                    </div>
                                </div>
                                <div className="cggmin">
                                    <div className="gtglipin">
                                        <input type="text" value={"18:00"} />
                                        <Clock4 size={13} className="gtglipinic"/>
                                    </div>
                                    <p>~</p>
                                    <div className="gtglipin">
                                        <input type="text" value={"20:30"} />
                                        <Clock4 size={13} className="gtglipinic"/>
                                    </div>
                                    <div className="times">
                                        <p>2.5h</p>
                                    </div>
                                </div>
                            </label>
                        </div>


                        <label className="bg" >
                            <p>비고</p>
                            <div className="gtglipin">
                                <textarea type="text" placeholder="특이사항을 입력하세요" />
                            </div>
                        </label>

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