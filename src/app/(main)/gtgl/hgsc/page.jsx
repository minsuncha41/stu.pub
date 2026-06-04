'use client';

import "./Hgsc.css";

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
                                <div className="cmbpilin">
                                    <Paperclip size={14}  color="#9CA3AF" />
                                    <div className="cmbpiltt">
                                        <h1>파일을 끌어다 놓거나</h1>
                                    </div>
                                    <button><Upload size={11} />선택</button>
                                </div>
                            </label>
                        </div>


                        <div className="line"></div>


                        <div className="btnsbox">
                            <button className="lftwtbtn">
                                <X size={13} color="#6B7280" />
                                <p>취소</p>
                            </button>
                            <button className="retblbtn">
                                <SendHorizontal size={13} />
                                <p>신청하기</p>
                            </button>
                        </div>
                    </div>
                </div>



                <div className="textbox">
                    <div className="tptbl">
                        <div className="fromtit">
                            <h1>
                                <Calendar size={15} strokeWidth={1.5} />
                                2025년 7월
                            </h1>

                        </div>

                        <div className="crd">
                            <ul>
                                <li className="ili"><span>일</span></li>
                                <li><span>월</span></li>
                                <li><span>화</span></li>
                                <li><span>수</span></li>
                                <li><span>목</span></li>
                                <li><span>금</span></li>
                                <li className="tyi"><span>토</span></li>
                            </ul>
                            <ul>
                                <li><span></span></li>
                                <li><span>1</span></li>
                                <li><span>2</span></li>
                                <li><span>3</span></li>
                                <li><span>4</span></li>
                                <li><span>5</span></li>
                                <li className="tyi"><span>6</span></li>
                            </ul>
                            <ul>
                                <li className="ili"><span>7</span></li>
                                <li><span>8</span></li>
                                <li><span>9</span></li>
                                <li><span>10</span></li>
                                <li><span>11</span></li>
                                <li><span>12</span></li>
                                <li className="tyi"><span>13</span></li>
                            </ul>
                            <ul>
                                <li className="ili"><span>14</span></li>
                                <li className="clday"><span>15</span></li>
                                <li><span>16</span></li>
                                <li><span>17</span></li>
                                <li><span>18</span></li>
                                <li><span>19</span></li>
                                <li className="tyi"><span>20</span></li>
                            </ul>
                            <ul>
                                <li className="ili"><span>21</span></li>
                                <li><span>22</span></li>
                                <li><span>23</span></li>
                                <li><span>24</span></li>
                                <li><span>25</span></li>
                                <li><span>26</span></li>
                                <li className="tyi"><span>27</span></li>
                            </ul>
                            <ul>
                                <li className="ili"><span>28</span></li>
                                <li><span>29</span></li>
                                <li><span>30</span></li>
                                <li><span>31</span></li>
                                <li><span></span></li>
                                <li><span></span></li>
                                <li><span></span></li>
                            </ul>

                            <ul>
                                <li className="sci datsp"><p>●</p><h1>신청일</h1></li>
                                <li className="gso datsp"><p>●</p><h1>기사용</h1></li>
                                <li className="gui datsp"><p>●</p><h1>공휴일</h1></li>
                                <li><span></span></li>
                                <li><span></span></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>

                    <div className="btmtbl">
                        <div className="fromtit">
                            <h1>
                                <ListChecks size={15} strokeWidth={1.5} />
                                2025.07.01 근태 목록
                            </h1>
                            <div className="titin">
                                <h1>총 5건</h1>
                            </div>
                        </div>
                        <div className="noscol">
                            <ul>
                                <li>신청일</li>
                                <li>휴가종류</li>
                                <li>휴가기간</li>
                                <li>일수</li>
                                <li>사유</li>
                                <li>승인상태</li>
                                <li>관리</li>
                            </ul>




                            <ul>
                                <li>2025.07.01</li>
                                <li><span className="tbcm uc"><p>●</p>연차</span></li>
                                <li>2025.07.14 ~ 07.14</li>
                                <li>1일</li>
                                <li>개인사유</li>
                                <li><span className="tbcm sodg"><p>●</p> 승인대기</span></li>
                                <li><span className="gl">취소</span></li>
                            </ul>
                            <ul>
                                <li>2025.06.02</li>
                                <li><span className="tbcm ojbc"><p>●</p>오전반차</span></li>
                                <li>2025.06.10 ~ 06.10</li>
                                <li>0.5일</li>
                                <li>병원 방문</li>
                                <li><span className="tbcm sool"><p>●</p> 승인완료</span></li>
                                <li><span className="gl">상세</span></li>
                            </ul>
                            <ul>
                                <li>2025.05.12</li>
                                <li><span className="tbcm uc"><p>●</p>연차</span></li>
                                <li>2025.05.19 ~ 05.21</li>
                                <li>3일</li>
                                <li>가족 여행</li>
                                <li><span className="tbcm sool"><p>●</p> 승인완료</span></li>
                                <li><span className="gl">상세</span></li>
                            </ul>
                            <ul>
                                <li>2025.04.21</li>
                                <li><span className="tbcm tbbg"><p>●</p>병가</span></li>
                                <li>2025.04.22 ~ 04.23</li>
                                <li>2일</li>
                                <li>몸살 감기</li>
                                <li><span className="tbcm sool"><p>●</p> 승인완료</span></li>
                                <li><span className="gl">상세</span></li>
                            </ul>
                            <ul>
                                <li>2025.03.05</li>
                                <li><span className="tbcm uc"><p>●</p>연차</span></li>
                                <li>2025.03.10 ~ 03.14</li>
                                <li>5일</li>
                                <li>개인 휴가</li>
                                <li><span className="tbcm sool"><p>●</p> 승인완료</span></li>
                                <li><span className="gl">상세</span></li>
                            </ul>
                            <ul className="textsbtns">
                                <li><p>총 5건 · 승인완료 4건 · 승인대기 1건</p></li>
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

    </div>

</div>
    )


}