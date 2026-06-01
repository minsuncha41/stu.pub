'use client';

import "./aaa.css";
import s from "./Aaa.module.css";

import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Table from "@/component/cmm/Table";
import Toptits from "@/component/cmm/Toptits";
import { Award, Baby, Banknote, BriefcaseBusiness, CakeSlice, Check, ClipboardPen, Clock4, Ellipsis, Eye, FileCheck, FileText, Flower2, Heart, HeartHandshake, Languages, Paperclip, Printer, ReceiptText, Save, SendHorizontal, Upload, X } from "lucide-react";




export default function Aaa(){

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
                                titin: { icon: "/User.png", titname:"인사정보", main:"info" },
                                sublit: [ "인사정보등록", "사원명수/인사기록카드" , "인사발령등록" ],
                                mainsub: [ "register",  "", "appointement" ]
                            },
                            {
                                titin: { icon: "/Heart Handshake.png", titname:"경조비신청", main:"eve" },
                                sublit: [ "경조비신청", "경조비신청현황" ],
                                mainsub: [ "apply" ]
                            },
                            {
                                titin: { icon: "/File Text.png", titname:"증명서관리", main:"cer"  },
                                sublit: [ "증명서발급" ],
                                mainsub: [ "aaa" ]
                            },
                        ]
                    }
                    idxs="3"
                    subidxs="1"
                />





            <div className="main">
                <Toptits toptits={{ 
                    ttmap: "인사관리" ,
                    map: "증명서관리" , 
                    tit: "증명서발급" , 
                    text: "필요한 증명서를 선택하고 발급 정보를 입력하여 출력하세요." , 
                    tllbtn: "발급이력",
                    trrbtn: "출력하기"
                    }} 
                />

                <div className="inputform">
                    <div class="fromtit">
                        <h1>
                            <FileCheck  size={15}/>
                            증명서 종류 선택 
                            <p> * </p>
                            <span> 필수 선택</span>
                        </h1> 
                    </div>
                    
                    <div className="formbox">
                        <ul>
                            <li className="clts">
                                <div className="tbox"><BriefcaseBusiness color="#1D4ED8" size={24} /></div>
                                <h1>재직증명서</h1>
                                <h2>현재 재직 중임을 증명합니다</h2>
                                <h3><Check size={11} />선택됨</h3>
                            </li>
                            <li>
                                <div className="tbox"><Award color="#6B7280" size={24} /></div>
                                <h1>경력증명서</h1>
                                <h2>경력 사항을 증명합니다</h2>
                                <h3>선택하기</h3>
                            </li>
                            <li>
                                <div className="tbox"><Banknote color="#6B7280" size={24} /></div>
                                <h1>재직증명서</h1>
                                <h2>현재 재직 중임을 증명합니다</h2>
                                <h3>선택하기</h3>
                            </li>
                            <li>
                                <div className="tbox"><ReceiptText color="#6B7280" size={24} /></div>
                                <h1>근로소득원천징수</h1>
                                <h2>원천징수 내역 확인서</h2>
                                <h3>선택하기</h3>
                            </li>

                        </ul>
                    </div>
                </div>


                <div className="inputform">
                    <div class="fromtit">
                        <h1>
                            <ClipboardPen  size={15}/>
                            발급 정보 입력
                        </h1>
                        <h2>
                            <FileText size={12} />
                            재직증명서 발급 중
                        </h2>

                    </div>


                    <div className="formbox">
                        <h1 class="tptits"><span></span>신청자 정보</h1>
                        <div class="formboxtp">
                            <label class="jgfm">
                                <img src="/Lock.png" alt="" />
                                <p>사원번호</p>
                                <input type="text" value="EMP-002" disabled />
                            </label>
                            <label class="jgfm">
                                <img src="/Lock.png" alt="" />
                                <p>성명</p>
                                <input type="text" value="이영희" disabled />
                            </label>
                            <label class="jgfm">
                                <img src="/Lock.png" alt="" />
                                <p>부서</p>
                                <input type="text" value="경영지원팀" disabled />
                            </label>
                            <label class="jgfm">
                                <img src="/Lock.png" alt="" />
                                <p>직급</p>
                                <input type="text" value="과장" disabled />
                            </label>
                            <label class="jgfm">
                                <img src="/Lock.png" alt="" />
                                <p>입사일</p>
                                <input type="date" value="" disabled />
                            </label>
                        </div>

                        <div class="fmli"></div>

                        <div class="formboxmd">
                            <h1 class="tptits"><span></span>발급 상세 정보</h1>
                            <div class="formboxtp">
                                <label class="jgfm">
                                    <p>용도 *</p>
                                    <select name="" id="">
                                        <option value="">관공서 제출용</option>
                                        <option value="">근로소득원천징수</option>
                                        <option value="">재직증명서</option>
                                        <option value="">경력증명서</option>
                                        <option value="">급여확인서</option>
                                    </select>
                                </label>
                                <label class="jgfm">
                                    <p>제출서 *</p>
                                    <input type="text" placeholder="예: 국민은행 ○○지점" />
                                </label>
                                <label class="jgfm">
                                    <p>용도 *</p>
                                    <div class="jgfmin ">
                                        <p>-</p>
                                        <span>1</span>
                                        <p>+</p>
                                    </div>
                                </label>
                                <label class="jgfm">
                                    <p>언어선택 *</p>
                                    <div class="jgfmin">
                                        <div class="gms"><Languages size={13} />국문</div>
                                        <div class="yms"><Languages size={13} />영문</div>
                                    </div>
                                </label>
                            </div>

                        </div>
                        <div class="formboxbt">
                            <div class="formboxtp">
                                <label class="jgfm">
                                    <p>기준일</p>
                                    <input type="date" placeholder="예: 국민은행 ○○지점" />
                                </label>
                                <label class="jgfm">
                                    <p>발급목적 (선택)</p>
                                    <input type="text" placeholder="발급 목적을 간략히 입력하세요" />
                                </label>
                            </div>

                        </div>

                        <div class="fmli"></div>

                        <div className="cmbpil">


                            <div className="cmbpilfl">
                                <div className="cmbpilfllft">
                                    <Eye size={16}/>
                                    <div className="cmbpilfllfttt">
                                        <h1>출력 전 미리보기를 확인하세요</h1>
                                        <h2>발급된 증명서는 위변조 방지 마크가 포함됩니다. 내용을 반드시 확인한 후 출력해 주세요.</h2>
                                    </div>
                                </div>
                                <div className="cmbpilflret">
                                        <Eye size={13}/>
                                        미리보기                                
                                </div>
                            </div>

                            <div className="formboxbt">
                                <div className="fmbtns">
                                    <button className="css">
                                        <X size={13} />
                                        취소
                                    </button>
                                    <button className="ml">
                                        <Eye size={13}/>
                                        미리보기
                                    </button>
                                    <button className="jjs">
                                        <Printer size={13} />
                                        출력하기
                                    </button>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>






                    <div className="textbox">
                        <div className="fromtit">
                            <h1>
                                <Clock4 size={15} strokeWidth={1.5} />
                                나의 발급  이력
                            </h1>
                            <div className="bttb">
                                <select name="" id="">
                                    <option value="">최근 3개월</option>
                                    <option value="">최근 6개월</option>
                                    <option value="">최근 1년</option>
                                    <option value="">최근 3년</option>
                                </select>
                                <h2>총 4건</h2> 
                            </div>
                        </div>

                        <ul className={s.texts}>
                            <ul>
                                <li>NO</li>
                                <li>발급일시</li>
                                <li>증명서 종류</li>
                                <li>용도</li>
                                <li>제출처</li>
                                <li>언어</li>
                                <li>부수</li>
                                <li>발급번호</li>
                                 <li>관리</li>
                            </ul>

                            <ul>
                                <li>만든거 1</li>
                                <li>2025.07.01 09:22</li>
                                <li><span className={`${s.gms} ${s.jj}`}><BriefcaseBusiness size={10}/>재직증명서</span></li>
                                <li>관공서 제출용</li>
                                <li>국민은행 ○○지점</li>
                                <li><span className= {`${s.langs} ${s.gms}`}>국문</span></li>
                                <li>1</li>
                                <li>CERT-2025-0089</li>
                                <li>
                                    <span className={`${s.jcl}`}><Printer size={10} /> 재출력</span>
                                </li>
                            </ul>

                            <ul>
                                <li>2</li>
                                <li>2025.06.18 14:05</li>
                                <li><span className={`${s.gms} ${s.gl}`}><Award size={10}/>근로소득원천징수</span></li>
                                <li>금융기관 제출용</li>
                                <li>카카오뱅크 </li>
                                <li><span className= {`${s.langs} ${s.gms}`}>국문</span></li>
                                <li>2</li>
                                <li>CERT-2025-0071</li>
                                <li>
                                    <span className={`${s.jcl}`}><Printer size={10} /> 재출력</span>
                                </li>
                            </ul>

                            <ul>
                                <li>3</li>
                                <li>2025.05.30 11:48</li>
                                <li><span className={`${s.gms} ${s.glg}`}><ReceiptText size={10}/>경력증명서</span></li>
                                <li>이직 제출용</li>
                                <li>○○테크 인사담당</li>
                                <li><span className= {`${s.langs} ${s.yms}`}>영문</span></li>
                                <li>1</li>
                                <li>CERT-2025-0058</li>
                                <li>
                                    <span className={`${s.jcl}`}><Printer size={10} /> 재출력</span>
                                </li>
                            </ul>

                            <ul>
                                <li>4</li>
                                <li>2025.05.02 16:33</li>
                                <li><span className={`${s.gms} ${s.gu}`}><Banknote size={10}/>급여확인서</span></li>
                                <li>대출 제출용</li>
                                <li>신한은행 본점</li>
                                <li><span className= {`${s.langs} ${s.gms}`}>국문</span></li>
                                <li>1</li>
                                <li>CERT-2025-0041</li>
                                <li>
                                    <span className={`${s.jcl}`}><Printer size={10} /> 재출력</span>
                                </li>
                            </ul>

 


                            <ul className={s.textsbtns}>
                                <li>총 4 건</li>
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