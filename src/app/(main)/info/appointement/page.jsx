"use client";
import aside from "../infoaside.json";

import "./appointement.css";
import s from "./Appointement.module.css";
import { useEffect, useRef, useState } from "react";
import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Toptits from "@/component/cmm/Toptits";
import {
  Award,
  Clock,
  Clock4,
  Download,
  GraduationCap,
  IdCard,
  Printer,
  Save,
  Search,
  Upload,
  User,
  UserPlus,
  X,
} from "lucide-react";

export default function Appointement() {
  // const [employee, setemployee] = useState([]);

  // useEffect(() => {
  //   //api를 요청해서 받는다. 통신은async await붙인다
  //   const getEmployee = async () => {
  //     const response = await baseApi.get("/api/v1/employees");
  //     console.log(response.data.data);

  //     //useState를 넣는다
  //     setemployee(response.data.data);

  //     //useState에 있는 데이터를 렌더링 시킨다
  //   };
  //   getEmployee();
  // }, []);
  const [popvw, setpopvw] = useState(true);

  const popon = () => {
    setpopvw(true);
  };

  const popno = () => {
    setpopvw(false);
  };

  const [pdfpopvw, setpdfpopvw] = useState(false);
  const pdfpopon = () => {
    setpdfpopvw(true);
  };

  const pdfpopno = () => {
    setpdfpopvw(false);
  };

  // 버튼이 파일인풋
  const upldref = useRef(null);

  const [cllist, setcllist] = useState("발령이력");
  return (
    <div className="wrap">
      {" "}
      {pdfpopvw && (
        <div className="modalwrap">
          <div className="pdfpop">
            <div className="pdfic">
              <Download size={24} color="#3B82F6" />
            </div>
            <h1>PDF 다운로드</h1>
            <p>
              선택한 데이터를 PDF 파일로 다운로드합니다. <br /> 계속
              진행하시겠습니까?
            </p>
            <div className="pdfbtns">
              <button
                onClick={() => {
                  pdfpopno();
                }}
              >
                취소
              </button>
              <button>확인</button>
            </div>
          </div>
        </div>
      )}
      {popvw && (
        <div className="modalwrap">
          <div className="modal">
            <div className="tit">
              <div className="titlft">
                <IdCard size={18} color="#3B82F6" />
                인사정보 등록
                <span>2025년 기준</span>
              </div>
              <div className="btnbox">
                <div className="osbtn">
                  <Printer size={13} />
                  인쇄
                </div>
                <div
                  onClick={() => {
                    popno();
                  }}
                  className="titret"
                >
                  <X size={18} />
                </div>
              </div>
            </div>

            <div className="modalin">
              <div className="topbox">
                <div className="use">
                  <div className="usebox">
                    <User size={26} /> 사진
                  </div>
                  <input type="file" name="" id="" hidden ref={upldref} />
                  <button
                    onClick={() => {
                      upldref.current.click();
                    }}
                  >
                    <Upload size={10} /> 변경
                  </button>
                </div>

                <ul>
                  <ul>
                    <li>
                      <p>사원번호</p>
                      <b>EMP-002</b>
                    </li>
                    <li>
                      <p>성명</p>
                      <b>이영희</b>
                    </li>
                    <li>
                      <p>생년월일</p>
                      <b>1988.05.14</b>
                    </li>
                    <li>
                      <p>성별</p>
                      <b>여</b>
                    </li>
                  </ul>

                  <li></li>

                  <ul>
                    <li>
                      <p>부서</p>
                      <b className="pd ost">인사팀</b>{" "}
                    </li>
                    <li>
                      <p>직급</p>
                      <b>차장</b>
                    </li>
                    <li>
                      <p>입사일</p>
                      <b>2018.07.15</b>
                    </li>
                    <li>
                      <p>재직상태</p>
                      <b className="pd jjj">재직중</b>
                    </li>
                  </ul>

                  <li></li>

                  <ul>
                    <li>
                      <p>휴대폰</p>
                      <b>010-9876-5432</b>
                    </li>
                    <li>
                      <p>이메일</p>
                      <b>lee@company.com</b>
                    </li>
                    <li></li>
                    <li>
                      <p>근속연수</p>
                      <b>6년 11개월</b>
                    </li>
                  </ul>
                </ul>
              </div>

              <ul className="cllist">
                <li
                  className={cllist === "발령이력" ? "cl" : ""}
                  onClick={() => setcllist("발령이력")}
                >
                  발령이력
                </li>
                <li
                  className={cllist === "근태요약" ? "cl" : ""}
                  onClick={() => setcllist("근태요약")}
                >
                  근태요약
                </li>
                <li
                  className={cllist === "급여이력" ? "cl" : ""}
                  onClick={() => setcllist("급여이력")}
                >
                  급여이력
                </li>
                <li
                  className={cllist === "자격증/학력" ? "cl" : ""}
                  onClick={() => setcllist("자격증/학력")}
                >
                  자격증/학력
                </li>
              </ul>

              {cllist === "발령이력" && (
                <div className="inbox blol">
                  <div className="titbox">
                    <h1 className="htit">발령이력</h1>
                    <span className="tpd">총 3건</span>
                  </div>
                  <ul className="mdtb">
                    <ul>
                      <li>발령일</li>
                      <li>발령유형</li>
                      <li>발령전 부서/직급</li>
                      <li>발령후 부서/직급</li>
                      <li>발령번호</li>
                    </ul>
                    <ul>
                      <li>2025.07.01</li>
                      <li>
                        <span className="pd sj">승진</span>
                      </li>
                      <li>경영지원팀 · 과장</li>
                      <li>인사팀 · 차장</li>
                      <li>APT-2025-003</li>
                    </ul>
                    <ul>
                      <li>2022.01.03</li>
                      <li>
                        <span className="pd jb">전보</span>
                      </li>
                      <li>총무팀 · 대리</li>
                      <li>경영지원팀 · 과장</li>
                      <li>APT-2022-001</li>
                    </ul>
                    <ul>
                      <li>2018.07.15</li>
                      <li>
                        <span className="pd sgos">신규입사</span>
                      </li>
                      <li>-</li>
                      <li>총무팀 · 사원</li>
                      <li>APT-2018-012</li>
                    </ul>
                  </ul>
                </div>
              )}

              {cllist === "근태요약" && (
                <div className="inbox gtoo">
                  <div className="titbox">
                    <h1 className="htit">올해 근태 요약 (2025년)</h1>
                    <p>기준일: 2025.07.01</p>
                  </div>
                  <ul className="gtootb">
                    <li>
                      <h1>124</h1>
                      <p>출근일수</p>
                    </li>
                    <li>
                      <h1>2</h1>
                      <p>지각</p>
                    </li>
                    <li>
                      <h1>8</h1>
                      <p>연차사용</p>
                    </li>
                    <li>
                      <h1>7</h1>
                      <p>잔여연차</p>
                    </li>
                    <li>
                      <h1>3</h1>
                      <p>출장</p>
                    </li>
                    <li>
                      <h1>0</h1>
                      <p>결근</p>
                    </li>
                  </ul>
                </div>
              )}
              {cllist === "급여이력" && (
                <div className="inbox gool">
                  <div className="titbox">
                    <h1 className="htit">급여이력</h1>
                    <p>전체보기 {">"}</p>
                  </div>
                  <ul className="gooltb">
                    <ul>
                      <li>지급연월</li>
                      <li>기본급</li>
                      <li>수당합계</li>
                      <li>공제합계</li>
                      <li>실지급액</li>
                    </ul>
                    <ul>
                      <li>2025.06</li>
                      <li>4,200,000</li>
                      <li>620,000</li>
                      <li>432,000</li>
                      <li>4,388,000</li>
                    </ul>
                    <ul>
                      <li>2025.05</li>
                      <li>4,200,000</li>
                      <li>520,000</li>
                      <li>432,000</li>
                      <li>4,288,000</li>
                    </ul>
                    <ul>
                      <li>2025.04</li>
                      <li>4,200,000</li>
                      <li>420,000</li>
                      <li>432,000</li>
                      <li>4,188,000</li>
                    </ul>
                  </ul>
                </div>
              )}

              {cllist === "자격증/학력" && (
                <div className="inbox jjjhl">
                  <div className="titbox">
                    <h1 className="htit">자격증 / 학력</h1>
                  </div>
                  <ul className="jjjhltb">
                    <ul>
                      <h1>
                        <Award size={13} color="#F59E0B" />
                        자격증
                      </h1>
                      <li>
                        <h1>정보처리기사</h1>
                        <p>한국산업인력공단 · 2016.08</p>
                      </li>
                      <li>
                        <h1>컴퓨터활용능력 1급</h1>
                        <p>대한상공회의소 · 2014.05</p>
                      </li>
                    </ul>
                    <ul>
                      <h1>
                        <GraduationCap size={13} color="#3B82F6" /> 학력
                      </h1>
                      <li>
                        <h1>○○대학교 경영학과 졸업</h1>
                        <p>2007.03 - 2011.02 · 학사</p>
                      </li>
                      <li>
                        <h1>△△고등학교 졸업</h1>
                        <p>2004.03 - 2007.02</p>
                      </li>
                    </ul>
                  </ul>
                </div>
              )}
            </div>

            <div className="btlft">
              <p>
                <Clock size={12} />
                최종 수정: 2025.07.01 · 홍길동 (인사팀)
              </p>
              <div className="btret">
                <button
                  onClick={() => {
                    popno();
                  }}
                >
                  <X size={14} />
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* 메인영역 */}
      <Nav num1={true} />
      <div className="inwrap">
        <Aside dummy={aside} idxs="1" subidxs="3" />

        <div className="main">
          <Toptits
            toptits={{
              ttmap: "인사관리",
              map: "인사정보",
              tit: "인사발령등록",
              text: "사원의 부서·직급·직책 발령 정보를 등록하고 이력을 관리합니다.",
              tllbtn: "PDF 다운로드",
              trrbtn: "발령등록",
            }}
            lftbtnClick={() => {
              pdfpopon();
            }}
            retbtnClick={() => {
              popon();
            }}
          />

          <div className="findebox">
            <h3>
              <img src="/Search.png" alt="" />
              검색조건
            </h3>
            <div className="findeinput">
              <label name="sone" className="sone">
                <p>사원검색</p>
                <input
                  type="text"
                  name="num"
                  placeholder="사원번호 또는 성명"
                />
                <button>
                  <img src="/Searchwt.png" alt="" />
                </button>
              </label>

              <label name="bls" className="bls">
                <p>발령유형</p>
                <select>
                  <option value="">전체</option>
                  <option value="sjs">
                    <span>승진</span>
                  </option>
                  <option value="jbs">
                    <span>전보</span>
                  </option>
                  <option value="gjs">
                    <span>경직</span>
                  </option>
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
                  <input type="date" />
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
                      <input type="text" value={"경영지원팀"} disabled />
                    </label>
                    <label name="jgfm" className="jgfm">
                      <p>직급</p>
                      <input type="text" value={"과장"} disabled />
                    </label>
                    <label name="jgfm" className="jgfm">
                      <p>직책</p>
                      <input type="text" value={"팀원"} disabled />
                    </label>
                  </div>
                </div>

                <h3>→</h3>

                <div className="fmmdrt">
                  <div className="fmmdlttit">
                    <span>발령 후</span>
                    <div className="fmmdline"></div>
                  </div>
                  <div className="fmmdltinput">
                    <label name="bsfm" className="bsfm">
                      <p>부서</p>
                      <select name="" id="">
                        <option value="">
                          <span>전체 &or;</span>
                        </option>
                        <option value="inct">인사팀 &or;</option>
                        <option value="ggt">경영지원팀 &or;</option>
                        <option value="gvt">개발팀 &or;</option>
                        <option value="oot">영업팀 &or;</option>
                      </select>
                    </label>
                    <label name="jgfm" className="jgfm">
                      <p>직급</p>
                      <select name="" id="">
                        <option value="">
                          <span>전체 &or;</span>
                        </option>
                        <option value="inct">인사팀 &or;</option>
                        <option value="ggt">경영지원팀 &or;</option>
                        <option value="gvt">개발팀 &or;</option>
                        <option value="oot">영업팀 &or;</option>
                      </select>
                    </label>
                    <label name="jgfm" className="jgfm">
                      <p>직책</p>
                      <select name="" id="">
                        <option value="">
                          <span>전체 &or;</span>
                        </option>
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
                <textarea
                  name=""
                  placeholder="발령 관련 추가 사항을 입력하세요."
                ></textarea>
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
                <li>
                  <span className={`${s.uh} ${s.sj}`}>승진</span>
                </li>
                <li>
                  경영지원팀<span className="1212">과장</span>
                </li>
                <li>
                  인사팀<span className="1212">차장</span>
                </li>
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
                <li>
                  <span className={`${s.uh} ${s.jb}`}>전보</span>
                </li>
                <li>
                  인사팀<span className="1212">팀장</span>
                </li>
                <li>
                  기술전략팀<span className="1212">팀장</span>
                </li>
                <li>2025.04.01</li>
                <li>홍길동</li>
                <li>
                  <span className={`${s.sjs} ${s.glbtns}`}>수정</span>
                  <span className={`${s.dls} ${s.glbtns}`}>삭제</span>
                </li>{" "}
              </ul>
              <ul>
                <li>3</li>
                <li>APT-2025-004</li>
                <li>EMP-003</li>
                <li>최지영</li>
                <li>
                  <span className={`${s.uh} ${s.gj}`}>겸직</span>
                </li>
                <li>
                  개발팀<span className="1212">대리</span>
                </li>
                <li>
                  영업팀·마케팅팀<span className="1212">사원</span>
                </li>
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
  );
}
