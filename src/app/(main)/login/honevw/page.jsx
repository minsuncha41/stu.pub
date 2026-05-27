'use client';

import "./honevw.css";

import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Table from "@/component/cmm/Table";
import Toptits from "@/component/cmm/Toptits";
import { Award, Baby, Banknote, Briefcase, BriefcaseBusiness, Building2, CakeSlice, Check, CircleChevronDown, ClipboardPen, Clock, Clock4, Ellipsis, Eye, EyeOff, FileCheck, FileText, Flower2, Gift, Heart, HeartHandshake, IdCard, Info, Languages, Lock, LogIn, Mail, Paperclip, Printer, ReceiptText, Save, SendHorizontal, ShieldCheck, Upload, User, UserPlus, Users, X } from "lucide-react";


export default function Honevw(){

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
        <Nav none={true} />
        <div className="inwrap">
            <div className="lglb">
                <div className="lglbin">
                    <span className="tspan"><ShieldCheck size={15} />Enterprise HR Solution</span>
                    <h1>HRMaster와 함께</h1>
                    <h2>인사관리를 혁신하세요</h2>
                    <div className="tpbox">
                        <p>지금 가입하고 강력한 <br />
                        인사관리 도구를 경험해보세요.</p>
                    </div>

                    <ul className="bpbox">
                        <li>
                            <div className="bimgbox">
                                <CircleChevronDown size={14} color="#4ADE80" />
                            </div>
                            <div className="btbox">
                                <h1>무제한 직원 등록 및 관리</h1>
                            </div>
                        </li>
                        <li>
                            <div className="bimgbox">
                                <CircleChevronDown size={14} color="#4ADE80" />
                            </div>
                            <div className="btbox">
                                <h1>자동화된 급여 계산 및 신고</h1>
                            </div>
                        </li>
                        <li>
                            <div className="bimgbox">
                                <CircleChevronDown size={14} color="#4ADE80" />
                            </div>
                            <div className="btbox">
                                <h1>실시간 근태 현황 모니터링</h1>
                            </div>
                        </li>
                        <li>
                            <div className="bimgbox">
                                <CircleChevronDown size={14} color="#4ADE80" />
                            </div>
                            <div className="btbox">
                                <h1>강력한 보안 및 권한 관리</h1>
                            </div>
                        </li>
                    </ul>

                    <div className="freebtn">
                        <Gift size={18} />
                        <h1>30일 무료 체험 제공</h1>
                    </div>


                </div>

            </div>


            <div className="lgwrap">
                <div className="lglrin">
                    <div className="tlgbox">
                        <h1>회원가입</h1>
                        <p>계정을 만들어 인사관리를 시작하세요</p>
                    </div>
                    <div className="lginbox">
                        <label>
                            <p>성</p>
                            <input type="text" placeholder="성" />
                        </label>
                        <label>
                            <p>이름</p>
                            <input type="text" placeholder="이름" />
                        </label>

                        <label>
                            <p>사번</p>
                            <IdCard className="laicon" size={18} />
                            <input type="text" placeholder="EMP-0001" />
                        </label>
                        <label>
                            <p>부서</p>
                            <Building2 className="laicon" size={18} />
                            <select name="" id="">
                                <option value="">소속 부서 선택</option>
                                <option value="bs1">1부서</option>
                                <option value="bs2">2부서</option>
                                <option value="bs3">3부서</option>
                                <option value="bs4">4부서</option>
                            </select>
                        </label>

                        <label>
                            <p>직급</p>
                            <Briefcase className="laicon" size={18} />
                            <select name="" id="">
                                <option value="">직급 선택</option>
                                <option value="jg1">1직급</option>
                                <option value="jg2">2직급</option>
                                <option value="jg3">3직급</option>
                                <option value="jg4">4직급</option>
                            </select>
                        </label>
                        <label>
                            <p>회사 이메일</p>
                            <Mail className="laicon" size={18} />
                            <input type="password" placeholder="company@example.com" />
                        </label>

                        <label>
                            <p>비밀번호</p>
                            <Lock className="laicon" size={18} />
                            <EyeOff className="laiconpw" size={18} />
                            <input type="text" placeholder="비밀번호 입력" />
                        </label>
                        <label>
                            <p>비밀번호 확인</p>
                            <Lock className="laicon" size={18} />
                            <CircleChevronDown className="laiconpw" size={18} />
                            <input type="password" placeholder="비밀번호 재입력" />
                        </label>

                    </div>

                    <p className="infoic"><Info size={14} /> 영문, 숫자, 특수문자 포함 8자리 이상</p>

                    <div className="lgbtns">
                        <label>
                            <input type="checkbox" name="" id="" />
                            <p>이용약관 및 개인정보처리방침에 동의합니다</p>
                        </label>
                        <span>내용 보기</span>
                    </div>

                    <button className="logedbtn">
                        <UserPlus size={18} />
                        회원가입
                    </button>

                    <p className="hone">이미 계정이 있으신가요?
                        <span>로그인하기</span>
                    </p>
                </div>
            </div>






        </div>
    </div>
    )


}