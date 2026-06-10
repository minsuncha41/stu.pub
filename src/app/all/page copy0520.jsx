"use client";

import "./appointement.css";
import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Table from "@/component/cmm/Table";
import Toptits from "@/component/cmm/Toptits";

export default function inc() {
  const [employee, setemployee] = useState([]);

  useEffect(() => {
    //api를 요청해서 받는다. 통신은async await붙인다
    const getEmployee = async () => {
      const response = await baseApi.get("/api/v1/employees");
      console.log(response.data.data);

      //useState를 넣는다
      setemployee(response.data.data);

      //useState에 있는 데이터를 렌더링 시킨다
    };
    getEmployee();
  }, []);

  return (
    <div className="wrap">
      <Nav />

      {/* <header className={s.header}>
                <nav className={s.navlft}>
                    <ul>
                        <li className={s.logo}><img src="/Briefcase Business.png"/>인사관리시스템</li>
                        <li className={s.navlftces}>인사관리</li>
                        <li>근태관리</li>
                        <li>급여관리</li>
                        <li>일용직관리</li>
                    </ul>
                </nav>

                <ul className={s.navret}>
                    <li><img src="/Bell.png"/></li>
                    <li className={s.name}>홍</li>
                    <li><p>홍길동</p></li>
                    <li>인사팀</li>
                    <li><img src="/Log Out.png"/></li>
                </ul>
            </header> */}

      <div className="inwrap">
        <Aside
          dummy={[
            {
              titin: { icon: "/User.png", titname: "인사정보" },
              sublit: ["인사정보등록", "사원명수/인사기록카드", "인사발령등록"],
            },
            {
              titin: { icon: "/Heart Handshake.png", titname: "경조비신청" },
              sublit: ["경조비신청", "경조비신청현황"],
            },
            {
              titin: { icon: "/File Text.png", titname: "증명서관리" },
              sublit: ["1증명서발급"],
            },
          ]}
        />

        {/* <div className="lftber">
                    <ul>
                        <p><img src="/User.png" alt="" />인사정보</p>
                        <li className="lftberces"><span>●</span>인사정보등록</li>
                        <li><span>●</span>사원명수/인사기록카드</li>
                        <li><span>●</span>인사발령등록</li>
                    </ul>
                    <ul>
                        <p><img src="/Heart Handshake.png" alt="" />경조비신청</p>
                        <li><span>●</span>경조비신청</li>
                        <li><span>●</span>경조비신청현황</li>
                    </ul>
                    <ul>
                        <p><img src="/File Text.png" alt="" />증명서관리</p>
                        <li><span>●</span>증명서발급</li>
                    </ul>
                </div> */}

        <div className="main">
          <Toptits
            toptits={{
              map: "인사관리",
              tit: "인사관리등록",
              text: "직원의 인사정보를 등록하고 관리합니다.",
              dls: "신규등록",
            }}
          />
          {/* <div className="toptits">
                        <div className="maps">
                            <img src="/House.png" alt="" />
                            <span>&gt;</span>
                            <p>인사관리</p>
                            <span>&gt;</span>
                            <p>인사정보</p>
                            <span>&gt;</span>
                            <p className="mapsces">인사정보등록</p>
                        </div>

                        <div className="tit">
                            <div className="titl">
                                <h3>인사정보등록</h3>
                                <p>직원의 인사정보를 등록하고 관리합니다.</p>
                            </div>
                            <div className="titr">
                                <button className="pdfbtn">
                                    <img src="/Download.png" alt="" />
                                    PDF 다운로드
                                </button>
                                <button className="plusbtn">
                                    <p>+</p>
                                    신규등록
                                </button>
                            </div>
                        </div>
                    </div> */}

          <div className="findebox">
            <h3>
              <img src="/Search.png" alt="" />
              검색조건
            </h3>
            <div className="findeinput">
              <label name="num">
                사원번호
                <input type="text" name="num" placeholder="전체" />
              </label>

              <label name="bss">
                부서
                <select name="" id="">
                  <option value="">전체 &or;</option>
                  <option value="inct">인사팀 &or;</option>
                  <option value="ggt">경영지원팀 &or;</option>
                  <option value="gvt">개발팀 &or;</option>
                  <option value="oot">영업팀 &or;</option>
                </select>
              </label>
              <label name="jgs">
                직급
                <select name="" id="">
                  <option value="">전체 &or;</option>
                  <option value="inct">인사팀 &or;</option>
                  <option value="ggt">경영지원팀 &or;</option>
                  <option value="gvt">개발팀 &or;</option>
                  <option value="oot">영업팀 &or;</option>
                </select>
              </label>
              <label name="bss">
                재직상테
                <select name="" id="">
                  <option value="">전체 &or;</option>
                  <option value="inct">인사팀 &or;</option>
                  <option value="ggt">경영지원팀 &or;</option>
                  <option value="gvt">개발팀 &or;</option>
                  <option value="oot">영업팀 &or;</option>
                </select>
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

          <div className="textbox">
            <Table
              tablecls={[
                "NO",
                "사원번호",
                "성명",
                "부서",
                "직급",
                "입사일",
                "연락처",
                "이메일",
                "관리",
                "상태",
              ]}
            />

            {/* <ul className="texts">
                            <ul>
                                <li>NO</li>
                                <li>사원번호</li>
                                <li>성명</li>
                                <li>부서</li>
                                <li>직급</li>
                                <li>입사일</li>
                                <li>연락처</li>
                                <li>이메일</li>
                                <li>재직상태</li>
                                <li>관리</li>
                            </ul>
                            {employee.map((item, index) => (
                                <ul>
                                    <li>{index +1}</li>
                                    <li>{item.employeeNo}</li>
                                    <li>{item.name}</li>
                                    <li>인사팀</li>
                                    <li>팀장</li>
                                    <li>2019.03.02</li>
                                    <li>010-1234-5678</li>
                                    <li>kim@company.com</li>
                                    <li><span className="jjs">재직중</span></li>
                                    <li><span className="sjs">수정</span></li>
                                </ul>
                            ))}
                            <ul>
                                <li>만든거 1</li>
                                <li>EMP-001</li>
                                <li>김철수</li>
                                <li>인사팀</li>
                                <li>팀장</li>
                                <li>2019.03.02</li>
                                <li>010-1234-5678</li>
                                <li>kim@company.com</li>
                                <li><span className="jjs">재직중</span></li>
                                <li><span className="sjs">수정</span></li>
                            </ul>
                            <ul>
                                <li>2</li>
                                <li>EMP-002</li>
                                <li>이영희</li>
                                <li>경영지원팀</li>
                                <li>과장</li>
                                <li>2018.07.15</li>
                                <li>010-9876-5432</li>
                                <li>lee@company.com</li>
                                <li><span className="jjs">재직중</span></li>
                                <li><span className="sjs">수정</span></li>
                            </ul>
                            <ul>
                                <li>3</li>
                                <li>EMP-003</li>
                                <li>박민준</li>
                                <li>개발팀</li>
                                <li>대리</li>
                                <li>2021.08.01</li>
                                <li>010-5555-7777</li>
                                <li>park@company.com</li>
                                <li><span className="hjs">휴직중</span></li>
                                <li><span className="sjs">수정</span></li>
                            </ul>
                            <ul>
                                <li>4</li>
                                <li>EMP-004</li>
                                <li>최지영</li>
                                <li>영업팀</li>
                                <li>사원</li>
                                <li>2023.01.09</li>
                                <li>010-3333-4444</li>
                                <li>choi@company.com</li>
                                <li><span className="jjs">재직중</span></li>
                                <li><span className="sjs">수정</span></li>
                            </ul>
                            
                            
                            <ul className="textsbtns">
                                <li>총 4건</li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li>
                                    <span>&lt;</span>
                                    <span className="textsces">1</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>&gt;</span>
                                </li>
                            </ul>
                        </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
}
