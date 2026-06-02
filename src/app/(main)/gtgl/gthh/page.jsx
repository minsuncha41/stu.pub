'use client';

import "./Gthh.css";

import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Table from "@/component/cmm/Table";
import Toptits from "@/component/cmm/Toptits";
import { AlarmClock, AlertCircle, Baby, BookOpen, CakeSlice, Calendar, CalendarCheck, Check, CheckCheck, ChevronLeft, ChevronRight, ClipboardPen, Clock, Clock1, Clock10, Clock4, Ellipsis, FileText, Flower2, Heart, HeartHandshake, ListChecks, LogOut, Paperclip, Plane, Plus, RotateCcw, Save, SaveAll, SaveOff, Search, SendHorizontal, ShieldCheck, Table2, TableIcon, Upload, Users, X } from "lucide-react";




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
        <Aside dummy={ [ 
            { titin: { icon: "/Clock.png" , titname:"근태관리", main:"gtgl"  }, 
            sublit: [ "일일근태등록" , "월근태현황"],
            mainsub: [ "gtdl", "gthh", ] }, 

            { titin: { icon: "/Plane.png" , titname:"출장관리", main:"gtgl" }, 
            sublit: [ "출장신청" , "출장정산", "출장사용현황" ],
            mainsub: [ "",  "",  "" ] }, 
            
            {titin: { icon: "/Calendar.png" , titname:"휴가관리", main:"gtgl" }, 
            sublit: [ "휴가일수설정", "휴가일수계산", "휴가일수신청", "휴가사용현황", ],
            mainsub: [ "hgsj",  "hggs",  "hgsc",  "hghh" ] }, 
        ] } 
             
        idxs="1"
        subidxs="2"
        />





        <div className="main">
            <Toptits toptits={{ 
                ttmap: "근태관리" ,
                map: "근태관리" , 
                tit: "월근태현황" , 
                text: "부서별·직원별 월간 근태 현황을 조회하고 관리합니다." , 
                tllbtn: "PDF 다운로드" , trrbtn: "인쇄", 
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


                    <label className="lbl">
                        <p>부서</p>
                        <select>
                            <option value="">전체 부서</option>
                            <option value="bs1">부서1</option>
                            <option value="bs2">부서2</option>
                            <option value="bs3">부서3</option>
                        </select>
                    </label>
                    <button className="fdbtns">
                        <Search className="icone" size={13}/>
                        조회
                    </button>

                </div>


                <ul className="findeboxret">
                    <li className="cg">
                        <span></span>출근
                    </li>                    
                    <li className="jg">
                        <span></span>지각
                    </li>                    
                    <li className="uc">
                        <span></span>연차
                    </li>                    
                    <li className="bc">
                        <span></span>반차
                    </li>                    
                    <li className="cj">
                        <span></span>출장
                    </li>                    
                    <li className="gg">
                        <span></span>결근
                    </li>                    
                    <li className="hi">
                        <span></span>휴일
                    </li>                    
                </ul>


            </div>

            <div className="intable">
                <div className="fromtit">
                    <h1>
                        <TableIcon size={15}/>
                        2025년 7월 근태현황
                    </h1>
                    <div className="fromtitrt">
                        <h2><span>●</span>총 근무일 23일</h2>
                        <p></p>
                        <h3><span>●</span>대상 인원 5명</h3>
                    </div>
                </div>

                <div className="tablesbox">
                    <ul>
                        <li>성명</li>
                        <li>부서</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li className="hh">5</li>
                        <li className="hh">6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li className="hh">12</li>
                        <li className="hh">13</li>
                        <li>14</li>
                        <li>15</li>
                        <li>16</li>
                        <li>17</li>
                        <li>18</li>
                        <li className="hh">19</li>
                        <li className="hh">20</li>
                        <li>21</li>
                        <li>22</li>
                        <li>23</li>
                        <li>24</li>
                        <li>25</li>
                        <li className="hh">26</li>
                        <li className="hh">27</li>
                        <li>28</li>
                        <li>29</li>
                        <li>30</li>
                        <li>31</li>

                        <li className="tbcg">출근</li>
                        <li className="tbjg">지각</li>
                        <li className="tbuc">연차</li>
                        <li className="tbgg">결근</li>
                        <li className="tbcj">출장</li>
                        <li className="tbbc">반차</li>

                    </ul>

                    <ul>
                        <li>김철수</li>
                        <li>인사팀</li>

                        <li className="num1">출</li>
                        <li className="num2">출</li>
                        <li className="num3 tbjg">지</li>
                        <li className="num4">출</li>
                        <li className="num5 hh">휴</li>
                        <li className="num6 hh">휴</li>

                        <li className="num7">출</li>
                        <li className="num8">출</li>
                        <li className="num9">출</li>
                        <li className="num10">출</li>
                        <li className="num11 tbcj">장</li>
                        <li className="num12 hh">휴</li>
                        <li className="num13 hh">휴</li>

                        <li className="num14 tbcj">장</li>
                        <li className="num15">출</li>
                        <li className="num16">출</li>
                        <li className="num17">출</li>
                        <li className="num18">출</li>
                        <li className="num19 hh">휴</li>
                        <li className="num20 hh">휴</li>
                        
                        <li className="num21">출</li>
                        <li className="num22 tbbc">반</li>
                        <li className="num23">출</li>
                        <li className="num24">출</li>
                        <li className="num25">출</li>
                        <li className="num26 hh">휴</li>
                        <li className="num27 hh">휴</li>

                        <li className="num28">출</li>
                        <li className="num29">출</li>
                        <li className="num30">출</li>
                        <li className="num31">출</li>
                        
                        <li className="tbcg">20</li>
                        <li className="tbjg">1</li>
                        <li className="tbuc">1</li>
                        <li className="tbgg">0</li>
                        <li className="tbcj">2</li>
                        <li className="tbbc">1</li>
                    </ul>

                    
                    <ul>
                        <li>이영희</li>
                        <li>경영지원팀</li>

                        <li className="num1">출</li>
                        <li className="num2">출</li>
                        <li className="num3">출</li>
                        <li className="num4 tbuc">연</li>
                        <li className="num5 hh">휴</li>
                        <li className="num6 hh">휴</li>

                        <li className="num7 tbuc">연</li>
                        <li className="num8">출</li>
                        <li className="num9">출</li>
                        <li className="num10 tbjg">지</li>
                        <li className="num11">출</li>
                        <li className="num12 hh">휴</li>
                        <li className="num13 hh">휴</li>

                        <li className="num14">출</li>
                        <li className="num15">출</li>
                        <li className="num16 tbbc">반</li>
                        <li className="num17">출</li>
                        <li className="num18">출</li>
                        <li className="num19 hh">휴</li>
                        <li className="num20 hh">휴</li>
                        
                        <li className="num21">출</li>
                        <li className="num22">출</li>
                        <li className="num23 tbcj">장</li>
                        <li className="num24 tbcj">장</li>
                        <li className="num25">출</li>
                        <li className="num26 hh">휴</li>
                        <li className="num27 hh">휴</li>

                        <li className="num28">출</li>
                        <li className="num29">출</li>
                        <li className="num30">출</li>
                        <li className="num31">출</li>
                        
                        <li className="tbcg">19</li>
                        <li className="tbjg">1</li>
                        <li className="tbuc">2</li>
                        <li className="tbgg">0</li>
                        <li className="tbcj">2</li>
                        <li className="tbbc">1</li>

                    </ul>
                    
                </div>
            </div>




        </div>

    </div>

</div>
    )


}