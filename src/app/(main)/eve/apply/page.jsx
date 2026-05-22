'use client';

import "./apply.css";
import s from "./Apply.module.css";

import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Table from "@/component/cmm/Table";
import Toptits from "@/component/cmm/Toptits";
import { Baby, CakeSlice, Check, Clock4, Ellipsis, FileText, Flower2, Heart, HeartHandshake, Paperclip, Save, SendHorizontal, Upload, X } from "lucide-react";




export default function Apply(){

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
    <Nav />




    <div className="inwrap">
        <Aside dummy={ [ { titin: { icon: "/User.png" , titname:"인사정보" }, sublit: [ "인사정보등록" , "사원명수/인사기록카드" , "인사발령등록"
            ] }, { titin: { icon: "/Heart Handshake.png" , titname:"경조비신청" }, sublit: [ "경조비신청" , "경조비신청현황" ] }, {
            titin: { icon: "/File Text.png" , titname:"증명서관리" }, sublit: [ "증명서발급" ] }, ] } />





        <div className="main">
            <Toptits toptits={{ 
                map: "경조비관리" , 
                tit: "경조비신청" , 
                text: "경조사 발생 시 경조비를 신청하고 지급 현황을 관리합니다." , 
                dls: "신규신청"
                }} />



            {/* <div className="findebox">
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
            </div> */}

            <div className="inputform">
                <div className="fromtit">
                    <h1>
                        <HeartHandshake size={15} strokeWidth={1.5} />
                        경조비신청 입력
                    </h1>
                    <h2>
                        <span>*</span>
                        필수 입력 항목
                    </h2>
                </div>

                <div className="formbox">
                    <div className="formboxtp">
                        <h1 className="tptits"><span></span>신청자 정보</h1>
                        {/* <label name="uhfm" className="uhfm">
                            <p>발령유형 *</p>
                            <ul>
                                <li>승진</li>
                                <li>전보</li>
                                <li>겸직</li>
                                <li>기타</li>
                            </ul>
                        </label> */}
                        <label name="bsfm" className="jgfm">
                            <p>사원번호</p>
                            <img src="/Lock.png" alt="" />
                            <input type="text" value={"EMP-002"} disabled />
                        </label>
                        <label name="jgfm" className="jgfm">
                            <p>성명</p>
                            <img src="/Lock.png" alt="" />
                            <input type="text" value={"이영희"} disabled />
                        </label>
                        <label name="jgfm" className="jgfm">
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
                            <p>신청일</p>
                            <img src="/Lock.png" alt="" />
                            <input type="text" value={"2025.07.01"} disabled />
                        </label>
                    </div>

                    <div className="fmli"></div>

                    <div className="formboxmd">
                        <h1 className="tptits"><span></span>경조 구분</h1>
                        <label name="uhfm" className="uhfm">
                            <ul>
                                <li>
                                    <Heart size={13} color="#FFFFFF" />본인결혼
                                </li>
                                <li>
                                    <Heart size={13} color="#D1D5DB" />자녀결혼
                                </li>
                                <li>
                                    <Baby size={13} color="#D1D5DB" />출산
                                </li>
                                <li>
                                    <Flower2 size={13} color="#D1D5DB" />부모사망
                                </li>
                                <li>
                                    <Flower2 size={13} color="#D1D5DB" />배우자사망
                                </li>
                                <li>
                                    <CakeSlice size={13} color="#D1D5DB" />부모회갑
                                </li>
                                <li>
                                    <Ellipsis size={13} color="#D1D5DB" />기타
                                </li>
                            </ul>
                            <p>본인결혼 선택됨 · 지급기준액: <span> 500,000원</span></p>
                        </label>

                        <div className="adwada">
                            {/* <div className="fmmdlt">
                                <div className="fmmdlttit">
                                    <span>발령 전</span>
                                    <div className="fmmdline"></div>
                                </div>
                                <div className="fmmdltinput">
                                    <label name="bsfm" className="jgfm">
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
                            </div> */}
                        </div>

                    </div>

                    <div className="fmli"></div>

                    <div className="gjdsjjb">
                        <div className="formboxtp">
                            <h1 className="tptits"><span></span>경조 대상자 정보</h1>
                            <label name="bsfm" className="jgfm">
                                <p>대상자 성명 *</p>
                                <input type="text" placeholder="성명을 입력하세요" />
                            </label>
                            <label name="" className="jgfm">
                                <p>관계 *</p>
                                <select name="" id="">
                                    <option value="bnin">본인</option>
                                    <option value="boo">부</option>
                                    <option value="moo">모</option>
                                    <option value="buj">배우자</option>
                                    <option value="jsg">자식</option>
                                    <option value="cnsg">친척</option>
                                </select>
                            </label>
                            <label name="" className="jgfm">
                                <p>경조일 *</p>
                                <input type="date" />
                            </label>
                            <label name="" className="jgfm">
                                <p>경조 장소</p>
                                <input type="text" placeholder="장소를 입력하세요 (선택)" />
                            </label>
                        </div>

                        {/* <div className="fmbtns">
                            <button className="css">
                                <X size={13} />
                                취소
                            </button>
                            <button className="jjs">
                                <Save size={13} />
                                저장
                            </button>

                        </div> */}
                    </div>

                    <div className="fmli"></div>

                    <div className="jggj">
                        <div className="formboxtp">
                            <h1 className="tptits"><span></span>지급 계좌 *</h1>
                            <label name="bsfm" className="jgfm">
                                <p>은행</p>
                                <select name="" id="">
                                    <option value="ggmn">국민은행</option>
                                    <option value="ol">우리은행</option>
                                    <option value="toos">토스뱅크</option>
                                    <option value="kaka">카카오뱅크</option>
                                    <option value="nohb">농협은행</option>
                                    <option value="snhn">신한은행</option>
                                </select>
                            </label>
                            <label name="" className="jgfm">
                                <p>계좌번호</p>
                                <input type="text" placeholder="- 없이 숫자만 입력" />

                            </label>
                            <label name="" className="jgfm">
                                <p>예금주</p>
                                <input type="text" value={"이영희"}/>
                            </label>
                            <button><Check size={13} />계좌 확인</button>
                        </div>
                    </div>

                    <div className="cmbpil">
                        <h1 className="tptits"><span></span>첨부파일</h1>
                        <div className="cmbpilin">
                            <Paperclip size={18}  color="#9CA3AF" />
                            <div className="cmbpiltt">
                                <h1>청첩장·출생증명서 등 관련 서류를 첨부해 주세요</h1>
                                <h2>PDF, JPG, PNG · 최대 10MB · 파일 3개까지</h2>
                            </div>
                            <button><Upload size={13} />파일 선택</button>
                        </div>

                        <div className="cmbpilfl">
                            <div className="cmbpilfllft">
                                <FileText color="#3B82F6" size={15} />
                                <div className="cmbpilfllfttt">
                                    <h1>청첩장_이영희.pdf</h1>
                                    <h2>238 KB · 업로드 완료</h2>
                                </div>
                            </div>
                            <div className="cmbpilflret">
                                    <span>x</span>삭제
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
                                    <SendHorizontal size={13}/>
                                    신청하기
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
                        발령 이력
                    </h1>
                    <h2>총 3건 </h2>
                </div>

                <ul className={s.texts}>
                    <ul>
                        <li>NO</li>
                        <li>신청일</li>
                        <li>경조구분</li>
                        <li>대상자</li>
                        <li>관계 </li>
                        <li>경조일</li>
                        <li>지급금액</li>
                        <li>지급계좌</li>
                        <li>처리상태</li>
                        <li>관리</li>
                    </ul>

                    <ul>
                        <li>만든거 1</li>
                        <li>20250701</li>
                        <li><span className={`${s.gb} ${s.bnin}`}>본인결혼</span></li>
                        <li>이영희</li>
                        <li>본인</li>
                        <li>20250720</li>
                        <li>500,000원</li>
                        <li>국민 12****-34</li>
                        <li><span className={`${s.clst} ${s.gt}`}>검토중</span></li>
                        <li>
                            <span className={`${s.sjs} ${s.glbtns}`}>상세</span>
                        </li>
                    </ul>
                    <ul>
                        <li>2</li>
                        <li>20250701</li>
                        <li><span className={`${s.gb} ${s.clsn}`}>출산</span></li>
                        <li>이영희</li>
                        <li>본인</li>
                        <li>20250720</li>
                        <li>500,000원</li>
                        <li>국민 12****-34</li>
                        <li><span className={`${s.clst} ${s.jg}`}>지급완료</span></li>
                        <li>
                            <span className={`${s.sjs} ${s.glbtns}`}>상세</span>
                        </li>
                    </ul>
                    <ul>
                        <li>3</li>
                        <li>20250701</li>
                        <li><span className={`${s.gb} ${s.bmhg}`}>부모환갑</span></li>
                        <li>이영희</li>
                        <li>본인</li>
                        <li>20250720</li>
                        <li>500,000원</li>
                        <li>국민 12****-34</li>
                        <li><span className={`${s.clst} ${s.jg}`}>지급완료</span></li>
                        <li>
                            <span className={`${s.sjs} ${s.glbtns}`}>상세</span>
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