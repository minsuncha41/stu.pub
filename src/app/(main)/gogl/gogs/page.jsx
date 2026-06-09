'use client';

import "./Gogs.css";

import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Table from "@/component/cmm/Table";
import Toptits from "@/component/cmm/Toptits";
import { AlarmClock, AlertCircle, Award, Baby, BadgeCheck, Bookmark, BookOpen, CakeSlice, Calculator, Calendar, CalendarCheck, CalendarPlus, Check, CheckCheck, ChevronLeft, ChevronRight, ClipboardPen, Clock, Clock1, Clock10, Clock4, Ellipsis, FileText, Flower2, Heart, HeartHandshake, HeartPulse, Layers, ListChecks, Lock, LogOut, MoonStar, Paperclip, Pencil, Plane, Plus, ReceiptText, RotateCcw, Save, SaveAll, SaveOff, Search, SendHorizontal, ShieldCheck, Sigma, Star, Sun, TableIcon, Trash2, TrendingUp, Upload, User2, Users, UsersRound, X } from "lucide-react";




export default function Gogs(){

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
        <Nav num3={true} />




    <div className="inwrap">
        <Aside dummy={ [ 
            { titin: { icon: "/Banknote.png" , titname:"급여관리", main:"gogl"  }, 
            sublit: [ "급여기본정보관리." , "급여지급." , "기본수당외수당관리." , "급여계산." , "급여조회."  ],
            mainsub: [ "gojbgl" , "gojg" , "sdgl" , "gogs" , "gojh" ] }, 

            { titin: { icon: "/Shield Check.png" , titname:"4대보험관리", main:"gogl" }, 
            sublit: [ "4대보험요율표설정. " , "국민연금관리" , "건강보험관리" , "고용보험관리" , "4대보험취득/상실." ],
            mainsub: [ "bhsj",  "" ,  "" ,  "" ,  "bhcdss" ] }, 
        ] }

               
        idxs="1"
        subidxs="4" 
        />

  



        <div className="main">
            <Toptits toptits={{ 
                ttmap: "급여관리" ,
                map: "급여관리" , 
                tit: "급여계산" , 
                text: "계산기준월을 선택하고 조건을 설정한 후 전 직원 급여를 자동 계산합니다." , 
                tllbtn: "PDF 다운로드" , trrbtn: "수당 추가"
                }} 
                sjbtnon=""
                lftwtbtnno=""
                retwtbtnno=""
                prtbtnon=""
                ttct=""
            />

            <ul className="findebox">
                <li>
                    <p>등록 수당 종류</p>
                    <h1>7종</h1>
                    <span>활성 6 · 비활성 1</span>
                </li>
                <li>
                    <p>과세 수당</p>
                    <h1>4종</h1>
                    <span>소득세 적용</span>
                </li>
                <li>
                    <p>비과세 수당</p>
                    <h1>3종</h1>
                    <span>소득세 면제</span>
                </li>
                <li>
                    <p>이번달 수당 총액</p>
                    <h1>3,340,000원</h1>
                    <span>8명 대상</span>
                </li>
                <li>
                    <p>전월 대비</p>
                    <h1>+120,000원</h1>
                    <span>야근수당 증가</span>
                </li>
            </ul>

            <div className="mainin">

                <div className="lftbox">
                    <div className="fromtit">
                        <h1>
                            <Layers size={15}/>
                            수당 종류 목록
                        </h1>
                        <div className="fromtitin">
                            <h2>7종</h2>
                        </div>
                    </div>
                    <ul className="lftboxtb">
                        <li className="cled">
                            <div className="lftboxtbintp">
                                <div className="lftboxic">
                                    <MoonStar size={14}/>
                                </div>
                                <div className="lftboxtt">
                                    <h1>
                                        야근수당
                                        <span className="lftttsp hs">활성</span>
                                    </h1>
                                    <h2>시간당 10,000원 · 과세</h2>
                                </div>
                            </div>
                            <div className="lftboxtbinbt">
                                <span className="lftsp gs">과세</span>
                                <ChevronRight size={13} className="lftinbtic" />
                            </div>
                        </li>

                        <li className="">
                            <div className="lftboxtbintp">
                                <div className="lftboxic">
                                    <Award size={14}/>
                                </div>
                                <div className="lftboxtt">
                                    <h1>
                                        직책수당
                                        <span className="lftttsp hs">활성</span>
                                    </h1>
                                    <h2>직책별 고정 지급 · 과세</h2>
                                </div>
                            </div>
                            <div className="lftboxtbinbt">
                                <span className="lftsp gs">과세</span>
                                <ChevronRight size={13} className="lftinbtic" />
                            </div>
                        </li>

                        <li className="">
                            <div className="lftboxtbintp">
                                <div className="lftboxic">
                                    <BadgeCheck size={14}/>
                                </div>
                                <div className="lftboxtt">
                                    <h1>
                                        자격증수당
                                        <span className="lftttsp hs">활성</span>
                                    </h1>
                                    <h2>자격증 보유 시 월 50,000원 · 비과세</h2>
                                </div>
                            </div>
                            <div className="lftboxtbinbt">
                                <span className="lftsp bgs">비과세</span>
                                <ChevronRight size={13} className="lftinbtic" />
                            </div>
                        </li>

                        <li className="">
                            <div className="lftboxtbintp">
                                <div className="lftboxic">
                                    <UsersRound size={14}/>
                                </div>
                                <div className="lftboxtt">
                                    <h1>
                                        가족수당
                                        <span className="lftttsp hs">활성</span>
                                    </h1>
                                    <h2>부양가족 1인당 30,000원 · 비과세</h2>
                                </div>
                            </div>
                            <div className="lftboxtbinbt">
                                <span className="lftsp bgs">비과세</span>
                                <ChevronRight size={13} className="lftinbtic" />
                            </div>
                        </li>

                        <li className="">
                            <div className="lftboxtbintp">
                                <div className="lftboxic">
                                    <TrendingUp size={14}/>
                                </div>
                                <div className="lftboxtt">
                                    <h1>
                                        장기근속수당
                                        <span className="lftttsp hs">활성</span>
                                    </h1>
                                    <h2>5년 이상 월 100,000원 · 과세</h2>
                                </div>
                            </div>
                            <div className="lftboxtbinbt">
                                <span className="lftsp gs">과세</span>
                                <ChevronRight size={13} className="lftinbtic" />
                            </div>
                        </li>

                        <li className="">
                            <div className="lftboxtbintp">
                                <div className="lftboxic">
                                    <Star size={14}/>
                                </div>
                                <div className="lftboxtt">
                                    <h1>
                                        특별성과수당
                                        <span className="lftttsp hs">활성</span>
                                    </h1>
                                    <h2>비정기 지급 · 과세</h2>
                                </div>
                            </div>
                            <div className="lftboxtbinbt">
                                <span className="lftsp gs">과세</span>
                                <ChevronRight size={13} className="lftinbtic" />
                            </div>
                        </li>

                        <li className="bhs">
                            <div className="lftboxtbintp">
                                <div className="lftboxic">
                                    <Calendar size={14}/>
                                </div>
                                <div className="lftboxtt">
                                    <h1> 
                                        휴일근무수당
                                        <span className="lftttsp hs">비활성</span>
                                    </h1>
                                    <h2>직책별 고정 지급 · 과세</h2>
                                </div>
                            </div>
                            <div className="lftboxtbinbt">
                                <span className="lftsp gs">과세</span>
                                <ChevronRight size={13} className="lftinbtic" />
                            </div>
                        </li>





                    </ul>
                </div>

                <div className="retbox">
                    <div className="rettit">
                        <div className="rettitret">
                            <div className="lftboxic">
                                <Calendar size={14}/>
                            </div>
                            <h1>
                                야근수당 상세 설정
                                <p>Overtime Allowance</p>
                            </h1>
                        </div>
                        <div className="rettitlft">
                            <p><span>●</span>활성</p>
                            <div className="tgbtnbox">
                                <div className="tgbtn">
                                    <div className="tgs"></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="retboxtb">
                        <div className="retboxtbtp">
                            <h1 className="retboxtbtit"><p></p>기본 설정</h1>
                            <div className="retboxtbin">
                                <label>
                                    <p>수당명</p>
                                    <input type="text" value={"야근수당"}/>
                                </label>
                                <label className="inputic">
                                    <p>수당코드</p>
                                    <input type="text" value={"OT001"}/>
                                    <Lock size={12} className="ic" />
                                </label>
                            </div>
                            <div className="retboxtbin">
                                <label>
                                    <p>계산 방식 <span className="str">*</span></p>
                                    <ul className="gsbs">
                                        <li className="cled"><Clock size={12}/>시간당</li>
                                        <li><Calendar size={12}/>일당</li>
                                        <li><Bookmark size={12}/>고정금액</li>
                                    </ul>
                                </label>
                                <label className="sgddg">
                                    <p>시간당 단가 <span className="str">*</span></p>
                                    <input type="text" value={"10,000"}/>
                                    <span>원 / 시간 </span>
                                </label>
                            </div>

                            <div className="retboxtbin">
                                <label>
                                    <p>과세 여부</p>
                                    <ul className="gsbs2">
                                        <li className="cled"><ReceiptText size={12}/>과세</li>
                                        <li><ShieldCheck size={12}/>비과세</li>
                                    </ul>
                                </label>
                                <label className="inputic">
                                    <p>급여 자동반영</p>
                                    <input type="text" value={"근태 데이터 연동"}/>
                                    <div className="ic goic">
                                        <div className="tgbtn">
                                            <div className="tgs"></div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>

                        <div className="libr"></div>

                        <div className="retboxtbtp">
                            <h1 className="retboxtbtit"><p></p>기본 설정</h1>
                            <ul className="jojgbo">
                                <li className="none"><span>●</span>임원</li>
                                <li className=""><span>●</span>부장</li>
                                <li className=""><span>●</span>차장</li>
                                <li className=""><span>●</span>과장</li>
                                <li className=""><span>●</span>대리</li>
                                <li className=""><span>●</span>사원</li>
                            </ul>
                       </div>

                        <div className="libr"></div>

                        <div className="retboxtbtp">
                            <h1 className="retboxtbtit"><p></p>한도 및 조건 설정</h1>
                            <div className="retboxtbin">
                                <label>
                                    <p>월 최대 시간</p>
                                    <input type="text" value={"52"}/>
                                </label>
                                <span>시간</span>
                                <label>
                                    <p>최소 인정 시간</p>
                                    <input type="text" value={"52"}/>
                                </label>
                                <span>시간</span>
                                <label>
                                    <p>계산 단위</p>
                                    <select name="" id="">
                                        <option value="bdo1">30분단위</option>
                                        <option value="bdo2">60분단위</option>
                                        <option value="bdo3">120분단위</option>
                                        <option value="bdo4">180분단위</option>
                                    </select>
                                </label>

                            </div>
                            <div className="inf">
                                <AlertCircle size={12} />
                                <span>월 최대 52시간 이상 입력 시 경고 알림이 발송됩니다.</span>
                            </div>
                        </div>

                        <div className="libr"></div>

                        <div className="retboxtbbtns">
                            <button className="trbtn"><Trash2 size={13} />삭제</button>
                            <button className="xxbtn"><X size={13} />취소</button>
                            <button className="svbtn"><Save size={13} />저장</button>
                        </div>
                    </div>


                    <div className="retbtbt">
                        <div className="fromtit">
                            <h1>
                                <Clock size={15}/>
                                이번달 야근수당 지급 현황 (2025.07)
                            </h1>
                            <div className="fromtitin">
                                <select className="ttse">
                                    <option value="ndo1">2025.07</option>
                                    <option value="ndo2">2025.08</option>
                                    <option value="ndo3">2025.09</option>
                                    <option value="ndo4">2025.10</option>
                                </select>
                                <h2>5명 지급</h2>
                                <button className="ttbtn">
                                    <Plus size={11}/>
                                    지급추가
                                </button>
                            </div>
                        </div>
                    </div>




                </div>




            </div>






        </div>

    </div>

</div>
    )


}