'use client';

import "./loginvw.css";

import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Table from "@/component/cmm/Table";
import Toptits from "@/component/cmm/Toptits";
import { Award, Baby, Banknote, BriefcaseBusiness, CakeSlice, Check, ClipboardPen, Clock, Clock4, Ellipsis, Eye, EyeOff, FileCheck, FileText, Flower2, Heart, HeartHandshake, Languages, Lock, LogIn, Mail, Paperclip, Printer, ReceiptText, Save, SendHorizontal, ShieldCheck, Upload, Users, X } from "lucide-react";




export default function Loginvw(){

    const [logininfo, setLoginInfo] = useState();

    const gologin = async () => {
        const res = await baseApi.post("/api/v1/employees/login" , {...logininfo})
        localStorage.setItem("키값", "넣을값");
        // const  로컬스토리지꺼낸데이터 = localStorage.getItem("키값");
//        await baseApi.post("/api/v1/employees/login" , logininfo)
// await baseApi.post("/api/v1/employees/login" , {  "email": "string", "password": "string"})
    }

    // const [employee, setemployee] = useState([]);

    // useEffect(() => {
    //     //api를 요청해서 받는다. 통신은async await붙인다  
    //     const getEmployee = async () => {
    //         const response = await baseApi.get("/api/v1/employees");
    //         console.log(response.data.data);

    //         //useState를 넣는다
    //         setemployee(response.data.data);

    //         //useState에 있는 데이터를 렌더링 시킨다
    //     }
    //     getEmployee();
    // }, []);

    return(
    <div className="wrap">
        <Nav none={true} />
        <div className="inwrap">
            <div className="lglb">
                <div className="lglbin">
                    <span className="tspan"><ShieldCheck size={15} />Enterprise HR Solution</span>
                    <h1>스마트한 인사 관리의</h1>
                    <h2>새로운 기준</h2>
                    <div className="tpbox">
                        <p>직원 채용부터 급여, 근태까지 <br />
                        하나의 플랫폼으로 관리하세요.</p>
                    </div>
                    <ul className="mpbox">
                        <li>
                            <h1>2,400+</h1>
                            <p>기업 도입</p>
                        </li>
                        <li>
                            <h1>98%</h1>
                            <p>고객 만족도</p>
                        </li>
                        <li>
                            <h1>15년</h1>
                            <p>서비스 운영</p>
                        </li>
                    </ul>
                    <ul className="bpbox">
                        <li>
                            <div className="bimgbox">
                                <Users size={18} color="#60A5FA"/>
                            </div>
                            <div className="btbox">
                                <h1>인사관리</h1>
                                <p>조직도, 인사발령, 직원 정보 통합 관리</p>
                            </div>
                        </li>
                        <li>
                            <div className="bimgbox">
                                <Banknote size={18} color="#60A5FA"/>
                            </div>
                            <div className="btbox">
                                <h1>급여관리</h1>
                                <p>자동 급여 계산, 세금 신고, 명세서 발송</p>
                            </div>
                        </li>
                        <li>
                            <div className="bimgbox">
                                <Clock size={18} color="#60A5FA" />
                            </div>
                            <div className="btbox">
                                <h1>근태관리</h1>
                                <p>출퇴근, 휴가, 초과근무 실시간 모니터링  </p>
                            </div>
                        </li>

                    </ul>


                </div>

            </div>


            <div className="lgwrap">
                <div className="lglrin">
                    <div className="tlgbox">
                        <h1>로그인</h1>
                        <p>계정에 로그인하여 업무를 시작하세요</p>
                    </div>

                    <label>
                        <p>이메일</p>
                        <Mail className="laicon" size={18} />
                        <input type="text" placeholder="이메일 주소를 입력하세요" 
                            onChange={(e) => setLoginInfo((prev) => ({...prev, email: e.target.value}))}
                        />
                    </label>
                    <label>
                        <p>비밀번호</p>
                        <Lock className="laicon" size={18} />
                        <EyeOff className="laiconpw" size={18} />
                        <input type="password" placeholder="비밀번호를 입력하세요"
                            onChange={(e) => setLoginInfo((prev) => ({...prev, password: e.target.value}))}
                        />
                    </label>

                    <div className="lgbtns">
                        <label>
                            <input type="checkbox" name="" id="" />
                            <p>로그인 상태유지</p>
                        </label>
                        <span>비밀번호 찾기</span>
                    </div>

                    <button className="logedbtn"
                        onClick={() => gologin()}
                    >
                        <LogIn size={18} />
                        로그인
                    </button>

                    <p className="tnp"><span>또는</span></p>

                    <div className="kakabtn">
                        <img src="/kakalogin.png" alt="" />
                    </div>
                    <p className="hone">계정이 없으신가요? 
                        <span>회원가입 신청</span>
                    </p>
                </div>
            </div>






        </div>
    </div>
    )


}