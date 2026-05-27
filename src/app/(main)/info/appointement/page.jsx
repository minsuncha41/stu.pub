'use client';

import "./appointement.css";
import s from "./Appointement.module.css";
import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Table from "@/component/cmm/Table";
import Toptits from "@/component/cmm/Toptits";
import { Clock4, Save, X } from "lucide-react";




export default function Appointement(){

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
            <Nav num1={true} />
            



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
                                sublit: [ "증명서발급" ]
                            },
                        ]
                    }
                />





                <div className="main">
                    <Toptits
                        toptits={{
                            map: "인사관리",
                            tit: "인사발령등록",
                            text: "사원의 부서·직급·직책 발령 정보를 등록하고 이력을 관리합니다.",
                            tllbtn: "PDF 다운로드" , trrbtn: "발령등록"
                        }}
                    />
 


                    <div className="findebox">
                         <h3><img src="/Search.png" alt="" />검색조건</h3>
                         <div className="findeinput">
                            <label name="sone" className="sone">
                                <p>사원검색</p>
                                <input type="text" name="num" placeholder="사원번호 또는 성명" />
                                <button><img src="/Searchwt.png" alt="" /></button>
                            </label>

                            <label name="bls" className="bls">
                                <p>발령유형</p>    
                                <select>
                                    <option value=""><span>전체</span></option>
                                    <option value="sjs"><span>승진</span></option>
                                    <option value="jbs"><span>전보</span></option>
                                    <option value="gjs"><span>경직</span></option>
                                </select>
                            </label>
                            <label name="days" className="days">
                                <p>발령일</p>
                                <input type="date" />
                                <span>~</span>
                                <input type="date" />
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

                    <div className="inputform">
                        <div className="fromtit">
                            <h1>
                                <img src="/File Pen.png" alt="" />
                                발령 입력 폼 
                            </h1>   
                            <h2>
                                <img src="/User Round.png" alt="" />
                                EMP-002 · 이영희 · 경영지원팀 · 과장
                            </h2>
                        </div>
 
                        <div className="formbox">
                            <div className="formboxtp">
                                <label name="uhfm" className="uhfm">
                                    <p>발령유형 *</p>
                                    <ul>
                                        <li>승진</li>
                                        <li>전보</li>
                                        <li>겸직</li>
                                        <li>기타</li>
                                    </ul>
                                </label>
                                <label name="dayfm" className="dayfm">
                                    <p>발령일</p> 
                                    <input type="date"/>
                                </label>
                                <label name="numfm" className="numfm">
                                    <p>발령번호</p>
                                    <input type="text" placeholder="자동생성" disabled />
                                </label>
                                <label name="sufm" className="sufm">
                                    <p>발령사유</p> 
                                    <input type="text" placeholder="발려 사유를 입력하세요" />
                                </label>
                            </div>  
                            <div className="formboxmd">
                                <div className="fmmdlt">
                                    <div className="fmmdlttit">
                                        <span>발령 전</span>
                                        <div className="fmmdline"></div>
                                    </div>
                                    <div className="fmmdltinput">
                                        <label name="bsfm" className="bsfm">
                                            <p>부서</p>
                                            <img src="/Lock.png" alt="" />
                                            <input type="text" value={"경영지원팀"} disabled />
                                        </label>
                                        <label name="jgfm" className="jgfm">
                                            <p>직급</p> 
                                            <img src="/Lock.png" alt="" />
                                            <input type="text" value={"과장"} disabled />
                                        </label>
                                        <label name="jgfm" className="jgfm">
                                            <p>직책</p>
                                            <img src="/Lock.png" alt="" />
                                            <input type="text" value={"팀원"} disabled />
                                        </label>
                                    </div>
                                </div>

                                <h3>→</h3>

                                <div className="fmmdrt">
                                    <div className="fmmdlttit">
                                        <span>발령 전</span>
                                        <div className="fmmdline"></div>
                                    </div>
                                    <div className="fmmdltinput">
                                        <label name="bsfm" className="bsfm">
                                            <p>부서</p>
                                            <select name="" id="">
                                                <option value=""><span>전체 &or;</span></option>
                                                <option value="inct">인사팀 &or;</option>
                                                <option value="ggt">경영지원팀 &or;</option>
                                                <option value="gvt">개발팀 &or;</option>
                                                <option value="oot">영업팀 &or;</option>
                                            </select>
                                        </label>
                                        <label name="jgfm" className="jgfm">
                                            <p>직급</p> 
                                            <select name="" id="">
                                                <option value=""><span>전체 &or;</span></option>
                                                <option value="inct">인사팀 &or;</option>
                                                <option value="ggt">경영지원팀 &or;</option>
                                                <option value="gvt">개발팀 &or;</option>
                                                <option value="oot">영업팀 &or;</option>
                                            </select>
                                        </label>
                                        <label name="jgfm" className="jgfm">
                                            <p>직책</p>
                                            <select name="" id="">
                                                <option value=""><span>전체 &or;</span></option>
                                                <option value="inct">인사팀 &or;</option>
                                                <option value="ggt">경영지원팀 &or;</option>
                                                <option value="gvt">개발팀 &or;</option>
                                                <option value="oot">영업팀 &or;</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="formboxbt">
                                <h1>비고</h1>
                                <textarea name="" placeholder="발령 관련 추가 사항을 입력하세요."></textarea>
                                <div className="fmbtns">
                                    <button className="css">
                                        <X size={13} />
                                        취소
                                    </button>
                                    <button className="jjs">
                                        <Save size={13} />
                                        저장
                                    </button>
                                </div>
                            </div>


                        </div>
                    
                    </div>
 



                    <div className="textbox">
                        <div className="fromtit">
                            <h1>
                                <Clock4 size={15} strokeWidth={1.5} />
                                발령 이력
                            </h1>
                            <h2>총 3건 </h2>
                        </div>

                        <ul className={s.texts}>
                            <ul>
                                <li>NO</li>
                                <li>발령번호</li>
                                <li>사원번호</li>
                                <li>성명</li>
                                <li>발령유형 </li>
                                <li>발령전 부서/직급</li>
                                <li>발령후 부서/직급</li>
                                <li>발령일</li>
                                <li>등록자</li>
                                <li>관리</li>
                            </ul>

                            <ul>
                                <li>만든거 1</li>
                                <li>APT-2025-003</li>
                                <li>EMP-002</li>
                                <li>이영희</li>
                                <li><span className={`${s.uh} ${s.sj}`}>승진</span></li>
                                <li>경영지원팀<span className="1212">과장</span></li>
                                <li>인사팀<span className="1212">차장</span></li>
                                <li>2025.07.01</li>
                                <li>홍길동</li>
                                <li>
                                    <span className={`${s.sjs} ${s.glbtns}`}>수정</span>
                                    <span className={`${s.dls} ${s.glbtns}`}>삭제</span>                                
                                </li>
                            </ul>
                            <ul>
                                <li>2</li>
                                <li>APT-2025-002</li>
                                <li>EMP-001</li>
                                <li>김철수</li>
                                <li><span className={`${s.uh} ${s.jb}`}>전보</span></li>
                                <li>인사팀<span className="1212">팀장</span></li>
                                <li>기술전략팀<span className="1212">팀장</span></li>
                                <li>2025.04.01</li>
                                <li>홍길동</li>
                                <li>
                                    <span className={`${s.sjs} ${s.glbtns}`}>수정</span>
                                    <span className={`${s.dls} ${s.glbtns}`}>삭제</span>                                
                                </li>                           </ul>
                            <ul>
                                <li>3</li>
                                <li>APT-2025-004</li>
                                <li>EMP-003</li>
                                <li>최지영</li>
                                <li><span className={`${s.uh} ${s.gj}`}>겸직</span></li>
                                <li>개발팀<span className="1212">대리</span></li>
                                <li>영업팀·마케팅팀<span className="1212">사원</span></li>
                                <li>2025.01.15</li>
                                <li>홍길동</li>
                                <li>
                                    <span className={`${s.sjs} ${s.glbtns}`}>수정</span>
                                    <span className={`${s.dls} ${s.glbtns}`}>삭제</span>                                
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

    )


}