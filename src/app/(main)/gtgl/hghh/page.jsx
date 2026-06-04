'use client';

import "./Hghh.css";

import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Table from "@/component/cmm/Table";
import Toptits from "@/component/cmm/Toptits";
import { AlarmClock, AlertCircle, Baby, BookOpen, CakeSlice, Calculator, Calendar, CalendarCheck, CalendarPlus, Check, CheckCheck, ChevronLeft, ChevronRight, ClipboardPen, Clock, Clock1, Clock10, Clock4, Ellipsis, FileText, Flower2, Heart, HeartHandshake, HeartPulse, ListChecks, LogOut, MoonStar, Paperclip, Plane, Plus, RotateCcw, Save, SaveAll, SaveOff, Search, SendHorizontal, ShieldCheck, Sigma, Star, Sun, TableIcon, Upload, User2, Users, X } from "lucide-react";




export default function Hghh(){

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
                tit: "휴가사용현황" , 
                text: "전체 직원의 연도별 휴가 사용 현황을 조회합니다." , 
                tllbtn: "PDF 다운로드" , 
                }} 
                lftwtbtnno=""
                retwtbtnno="0"
                prtbtnon="0"
                ttct=""
            />

            <ul className="findebox">
                <li>
                    <p>대상 인원</p>
                    <h1>8명</h1>
                </li>
                <li>
                    <p>평균 부여일수</p>
                    <h1>16.1일</h1>
                </li>
                <li>
                    <p>평균 사용일수</p>
                    <h1>10.4일</h1>
                </li>
                <li>
                    <p>평균 잔여일수</p>
                    <h1>5.6일</h1>
                </li>
                <li>
                    <p>잔여 3일 이하</p>
                    <h1>3명</h1>
                </li>
                <li>
                    <p>휴가 미사용</p>
                    <h1>0명</h1>
                </li>
            </ul>


            <div className="findeboxss">
                <div className="findeboxlft">
                    <label className="lbl">
                        <p>기준년도</p>
                        <div className="ipdybox">
                            <div class="jgfmin ">
                                <p><ChevronLeft size={14}/></p>
                                <Calendar className="cld" size={13} />
                                <input type="number" id="year" name="year" min="1900" max="2100" value={2026}/>
                                <p><ChevronRight size={14} /></p>
                            </div>
                        </div>
                    </label>

                    <label className="lbl">
                        <p>부서</p>
                        <select>
                            <option value="">전체 부서</option>
                            <option value="bs1">부서1</option>
                            <option value="bs2">부서2</option>
                            <option value="bs3">부서3</option>
                        </select>
                    </label>
                    <label className="lbl">
                        <p>정령</p>
                        <select>
                            <option value="jl1">잔여일수 오름차순</option>
                            <option value="jl2">잔여일수 내림차순</option>
                            <option value="jl3">사용일수 오름차순</option>
                            <option value="jl4">사용일수 내림차순</option>
                        </select>
                    </label>
                    <label className="lbl lblic">
                        <Search className="inlblic" size={13} color="#9CA3AF" />
                        <input type="text" placeholder="사원명 검색"/>
                    </label>
                    <button className="fdbtns">
                        <Search className="icone" size={13}/>
                        조회
                    </button>
                    <button className="fdbtns cgh">
                        <RotateCcw className="icone" size={13}/>
                        초기화
                    </button>
                    <h1 className="fdif"><span>ⓘ</span>잔여 3일 이하 경고</h1>

                </div>


            </div>



            <div className="tbs">
                <div className="fromtit">
                    <h1>
                        <TableIcon size={15}/>
                        직원별 휴가 사용 현황 (2025년)
                    </h1>
                    <div className="fromtitin">
                        <h2>총 8명</h2>
                        <h3><span>●</span>사용일수</h3>
                        <h3><span>●</span>잔여일수</h3>
                        <h3><span>●</span>3일 이하 경고</h3>
                    </div>
                </div>
                <div className="tbin">
                    <ul>
                        <li>사원번호</li>
                        <li>성명</li>
                        <li>부서</li>
                        <li>직급</li>
                        <li>총 부여</li>
                        <li>
                            연차
                            <span>사용</span>
                        </li>
                        <li>
                            반차
                            <span>사용</span>
                        </li>
                        <li>
                            병가
                            <span>사용</span>
                        </li>
                        <li>
                            특별휴가
                            <span>사용</span>
                        </li>
                        <li>
                            기타
                            <span>사용</span>
                        </li>
                        <li>총 사용</li>
                        <li>잔여일수</li>
                        <li>사용율</li>
                    </ul>



                    <ul>
                        <li>EMP001</li>
                        <li>김철수</li>
                        <li>인사팀</li>
                        <li>팀장</li>
                        <li>20일</li>
                        <li>8일</li>
                        <li>1일</li>
                        <li><p>-</p></li>
                        <li><p>-</p></li>
                        <li><p>-</p></li>
                        <li>9일</li>
                        <li>11일</li>
                        <li className="pstbli">
                            45%
                            <div className="pstb">
                                <div className="pstinb pstbl pstnum1"></div>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li>EMP-002</li>
                        <li>이영희</li>
                        <li>인사팀</li>
                        <li>차장</li>
                        <li>26일</li>
                        <li>14일</li>
                        <li>1일</li>
                        <li><p>-</p></li>
                        <li>5일</li>
                        <li><p>-</p></li>
                        <li>20일</li>
                        <li>6일</li>
                        <li className="pstbli">
                            77%
                            <div className="pstb">
                                <div className="pstinb pstbl pstnum2"></div>
                            </div>
                        </li>
                    </ul>
                    <ul className="oh">
                        <li>EMP-003</li>
                        <li>박민준<AlertCircle size={11} color="red" /> </li>
                        <li>인사팀</li>
                        <li>대리</li>
                        <li>14일</li>
                        <li>11일</li>
                        <li><p>-</p></li>
                        <li>2일</li>
                        <li><p>-</p></li>
                        <li><p>-</p></li>
                        <li>13일</li>
                        <li>1일<h3>위험</h3></li>
                        <li className="pstbli">
                            93%
                            <div className="pstb">
                                <div className="pstinb pstrd pstnum3"></div>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li>EMP-004</li>
                        <li>최지영</li>
                        <li>영업팀</li>
                        <li>사원</li>
                        <li>11일</li>
                        <li>5일</li>
                        <li><p>-</p></li>
                        <li><p>-</p></li>
                        <li><p>-</p></li>
                        <li><p>-</p></li>
                        <li>5일</li>
                        <li>6일</li>
                        <li className="pstbli">
                            45%
                            <div className="pstb">
                                <div className="pstinb pstbl pstnum4"></div>
                            </div>
                        </li>
                    </ul>
                    <ul className="oh">
                        <li>EMP-005</li>
                        <li>정수빈<AlertCircle size={11} color="red" /> </li>
                        <li>개발팀</li>
                        <li>사원</li>
                        <li>11일</li>
                        <li>9일</li>
                        <li>1일</li>
                        <li><p>-</p></li>
                        <li><p>-</p></li>
                        <li><p>-</p></li>
                        <li>10일</li>
                        <li>1일<h3>위험</h3></li>
                        <li className="pstbli">
                            91%
                            <div className="pstb">
                                <div className="pstinb pstrd pstnum5"></div>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li>EMP-006</li>
                        <li>한지민</li>
                        <li>영업팀</li>
                        <li>대리</li>
                        <li>12일</li>
                        <li>4일</li>
                        <li><p>-</p></li>
                        <li><p>-</p></li>
                        <li>3일</li>
                        <li><p>-</p></li>
                        <li>7일</li>
                        <li>5일</li>
                        <li className="pstbli">
                            58%
                            <div className="pstb">
                                <div className="pstinb pstbl pstnum6"></div>
                            </div>
                        </li>
                    </ul>
                    <ul className="oh">
                        <li>EMP-007</li>
                        <li>오준혁<AlertCircle size={11} color="red" /> </li>
                        <li>개발팀</li>
                        <li>과장</li>
                        <li>15일</li>
                        <li>12일</li>
                        <li><p>-</p></li>
                        <li><p>-</p></li>
                        <li><p>-</p></li>
                        <li><p>-</p></li>
                        <li>12일</li>
                        <li>3일<h4>주의</h4></li>
                        <li className="pstbli">
                            80%
                            <div className="pstb">
                                <div className="pstinb pstorg pstnum7"></div>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li>EMP-008</li>
                        <li>서민아</li>
                        <li>경영지원팀</li>
                        <li>사원</li>
                        <li>11일</li>
                        <li>3일</li>
                        <li>1일</li>
                        <li><p>-</p></li>
                        <li><p>-</p></li>
                        <li><p>-</p></li>
                        <li>4일</li>
                        <li>7일</li>
                        <li className="pstbli">
                            36%
                            <div className="pstb">
                                <div className="pstinb pstbl pstnum8"></div>
                            </div>
                        </li>
                    </ul>
                    <ul className="cut">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li><Sigma size={13} />합계 / 평균</li>
                        <li>120일</li>
                        <li>66일</li>
                        <li>4일</li>
                        <li>2일</li>
                        <li>8일</li>
                        <li><p>-</p></li>
                        <li>80일</li>
                        <li>40일<span>평균 5.0일</span></li>
                        <li className="pstbli">
                            66%
                            <div className="pstb">
                                <div className="pstinb pstnb pstnum9"></div>
                            </div>
                        </li>
                    </ul>

                    <ul className="textsbtns">
                        <li><h2>총 8명</h2><AlertCircle size={12} color="red" />잔여 3일 이하 3명 (박민준·정수빈·오준혁)</li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li>
                            <span>&lt;</span>
                            <span className="textsces">1</span>
                            <span>&gt;</span>
                        </li>
                    </ul>



                </div>



            </div>


        </div>

    </div>

</div>
    )


}