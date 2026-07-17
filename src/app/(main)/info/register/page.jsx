"use client";
import aside from "../infoaside.json";
import "./register.css";

import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Table from "@/component/cmm/Table";
import Toptits from "@/component/cmm/Toptits";
import {
  CheckCheck,
  Clock4,
  Download,
  Info,
  Save,
  Search,
  UserPlus,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Register({ current }) {
  const [popvw, setpopvw] = useState(false);
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

  const [allinput, setallinput] = useState({
    name: "",
    departmentName: "",
    positionName: "사원",
    hireDate: "",
    employmentStatus: "",
    phone: "",
    email: "",
    postCode: "",
    address: "",
    detailedAddress: "",
  });

  const 인사가입등록 = async () => {
    try {
      // 이름
      if (!allinput.name) {
        return alert("인사등록 할 사람의 이름을 입력해주세요");
      }

      // 부서
      if (!allinput.departmentName) {
        return alert("인사등록 할 사람의 부서를 선택해주세요");
      }

      // 직급
      if (!allinput.positionName) {
        return alert("인사등록 할 사람의 직급을 선택해주세요");
      }

      // 입사일
      if (!allinput.hireDate) {
        return alert("인사등록 할 사람의 입사일을 선택해주세요");
      }

      // 재직상태
      if (!allinput.employmentStatus) {
        return alert("인사등록 할 사람의 재직상태를 선택해주세요");
      }

      // 휴대폰
      if (!allinput.phone) {
        return alert("인사등록 할 사람의 휴대폰번호를 입력해주세요");
      }

      // 이메일
      if (!allinput.email) {
        return alert("인사등록 할 사람의 이메일을 입력해주세요");
      }

      const token = localStorage.getItem("accessToken");

      const res = await baseApi.post(
        "/api/v1/employees/registerEmployee",
        {
          name: allinput?.name,
          departmentName: allinput?.departmentName,
          positionName: allinput?.positionName,
          hireDate: allinput?.hireDate,
          employmentStatus: allinput?.employmentStatus,
          phone: allinput?.phone,
          email: allinput?.email,
          postCode: allinput?.postCode,
          address: allinput?.address,
          detailedAddress: allinput?.detailedAddress,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      alert("등록 성공");
      console.log(allinput);
    } catch (e) {
      alert("등록 실패 다시입력(등록된 이메일이거나 // 백엔드문제)");
      console.error("네트워크 실패", e);
    } finally {
    }
  };

  {
    // const [employee, setemployee] = useState([]);
    // const [keywordss, setkeword] = useState([]);
    // useEffect(() => {
    //   console.log(".....");
    //   console.log(keywordss);
    // }, [keywordss]);
    // const getEmlpoyees = async () => {
    //   const token = localStorage.getItem("accessToken");
    //   const res = await baseApi.get("/api/v1/employees", {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //     params: {
    //       keyword: keywordss || "",
    //       page: 1,
    //     },
    //   });
    //   console.log(res.data.data);
    // };
    // useEffect(() => {
    //   getEmlpoyees();
    // }, []);
  }

  // [다음 지도 API 호출] 2. 버튼 클릭시 호출
  const openPostcode = () => {
    if (!window || window === undefined) return;

    const postCode = new window.daum.Postcode({
      oncomplete(data) {
        // 여기에다 state의 setter 설정하면됨!
        console.log("선택한 주소 데이터 >>> ", data);
        const postCode = data.zonecode;
        const address = data.address;

        setallinput((prev) => ({
          ...prev,
          postCode: postCode,
          address: address,
        }));
      },
    });

    postCode.open();
  };

  const [keyword, setkeword] = useState("");
  // const clbtns = useRef(null);

  return (
    <div className="wrap">
      {/* 원래사용했던 버튼 방식 */}
      {/* <div         
      onClick={() => {
          popon();
        }} className="sgdlbtn">
        i
      </div> */}
      {/* <div
        onClick={() => {
          pdfpopon();
        }}
        className="pdfbtn"
      >
        1
      </div> */}
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
                <UserPlus size={18} color="#3B82F6" />
                인사정보 등록
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
            <div className="modalin">
              <div className="lblbox">
                <h1>기본정보</h1>
                <label className="lbl">
                  <p>
                    사원번호 <span>*</span>
                  </p>
                  <input
                    className="noinput"
                    type="text"
                    placeholder="자동생성"
                    disabled
                  />
                </label>
                <label className="lbl">
                  <p>
                    성명 <span>*</span>
                  </p>
                  <input
                    onChange={(e) =>
                      setallinput((tt) => {
                        return {
                          ...tt,
                          name: e.target.value,
                        };
                      })
                    }
                    type="text"
                    placeholder="이름을 입력해주세요"
                  />
                </label>
                <label className="lbl">
                  <p>
                    부서 <span>*</span>
                  </p>
                  <select
                    onChange={(e) =>
                      setallinput((tt) => {
                        return {
                          ...tt,
                          departmentName: e.target.value,
                        };
                      })
                    }
                  >
                    <option value="">부서를 선택하세요</option>
                    <option value="경영지원본부">경영지원본부</option>
                    <option value="물류운영본부">물류운영본부</option>
                    <option value="냉장/냉동물류본부">냉장/냉동물류본부</option>
                    <option value="차량관리본부">차량관리본부</option>
                    <option value="창고운영본부">창고운영본부</option>
                    <option value="영업본부">영업본부</option>
                    <option value="IT본부">IT본부</option>
                  </select>
                </label>
                <label className="lbl">
                  <p>
                    직급 <span>*</span>
                  </p>
                  <select
                    onChange={(e) =>
                      setallinput((tt) => {
                        return {
                          ...tt,
                          positionName: e.target.value,
                        };
                      })
                    }
                  >
                    <option value="">직급을 선택하세요</option>
                    <option value="사원">사원</option>
                    <option value="과장">과장</option>
                    <option value="부장">부장</option>
                    <option value="팀장">팀장</option>
                    <option value="사장">사장</option>
                  </select>
                </label>
                <label className="lbl">
                  <p>
                    입사일 <span>*</span>
                  </p>
                  <input
                    onChange={(e) =>
                      setallinput((tt) => {
                        return {
                          ...tt,
                          hireDate: e.target.value,
                        };
                      })
                    }
                    type="date"
                  />
                </label>
                <label className="lbl">
                  <p>
                    재직상태 <span>*</span>
                  </p>
                  <ul
                    onChange={(e) =>
                      setallinput((tt) => {
                        return {
                          ...tt,
                          employmentStatus: e.target.value,
                        };
                      })
                    }
                  >
                    <li className="checked">
                      <label>
                        <input type="radio" name="jjst" value={"재직중"} />
                        재직중
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="radio" name="jjst" value={"휴직중"} />
                        휴직중
                      </label>
                    </li>
                    <li>
                      <label>
                        <input type="radio" name="jjst" value={"퇴직"} />
                        퇴직
                      </label>
                    </li>
                  </ul>
                </label>
              </div>

              <div className="lblbox">
                <h1>연락처</h1>
                <label className="lbl">
                  <p>
                    휴대폰 <span>*</span>
                  </p>
                  <input
                    onChange={(e) =>
                      setallinput((tt) => {
                        return {
                          ...tt,
                          phone: e.target.value,
                        };
                      })
                    }
                    type="text"
                    placeholder="010-0000-0000"
                  />
                </label>
                <label className="lbl">
                  <p>
                    이메일 <span>*</span>
                  </p>
                  <input
                    onChange={(e) =>
                      setallinput((tt) => {
                        return {
                          ...tt,
                          email: e.target.value,
                        };
                      })
                    }
                    type="text"
                    placeholder="example@company.com"
                  />
                </label>
              </div>

              <div className="lblbox js">
                <h1>주소</h1>
                <div className="jsin">
                  <label className="lbl">
                    <p>우편번호</p>
                    <input
                      onChange={(e) =>
                        setallinput((tt) => {
                          return {
                            ...tt,
                            postCode: e.target.value,
                          };
                        })
                      }
                      className="noinput"
                      type="text"
                      placeholder="우편번호"
                      value={allinput.postCode}
                    />
                  </label>
                  <label className="lbl">
                    <p className="lblnott">0</p>
                    <button onClick={openPostcode}>
                      <Search size={13} />
                      주소검색
                    </button>
                  </label>
                </div>
                <label className="lbl">
                  <p>도로명주소</p>
                  <input
                    onChange={(e) =>
                      setallinput((tt) => {
                        return {
                          ...tt,
                          address: e.target.value,
                        };
                      })
                    }
                    className="noinput"
                    type="text"
                    placeholder="주소검색 후 자동입력"
                    value={allinput.address}
                  />
                </label>
                <label className="lbl">
                  <p>상세주소</p>
                  <input
                    onChange={(e) =>
                      setallinput((tt) => {
                        return {
                          ...tt,
                          detailedAddress: e.target.value,
                        };
                      })
                    }
                    type="text"
                    placeholder="상세주소를 입력하세요"
                  />
                </label>
              </div>

              <div className="lblbox">
                <h1>
                  급여계좌 <span>급여 입금용 계좌를 등록해 주세요</span>{" "}
                </h1>
                <label className="lbl">
                  <p>
                    은행 <span>*</span>
                  </p>
                  <input
                    onChange={(e) =>
                      setallinput((tt) => {
                        return {
                          ...tt,
                          phone: e.target.value,
                        };
                      })
                    }
                    type="text"
                    placeholder="010-0000-0000"
                  />
                </label>
                <label className="lbl">
                  <p>
                    예금주 <span>*</span>
                  </p>
                  <input type="text" placeholder="example@company.com" />
                </label>
                <label className="lbl gjbh">
                  <p>
                    계좌번호 <span>*</span>
                  </p>
                  <input type="text" placeholder="- 없이 숫자만 입력" />
                  <button>
                    <CheckCheck size={13} />
                    계좌인증
                  </button>
                </label>
                <span>
                  <Info size={14} /> 등록된 계좌로 매월 급여가 입금됩니다.
                  계좌번호를 정확히 입력해 주세요.
                </span>
              </div>

              <div className="lblbox bsilcl">
                <h1>비상연락처</h1>
                <div className="jsin">
                  <label className="lbl">
                    <p>우편번호</p>
                    <input type="text" placeholder="우편번호" />
                  </label>
                  <label className="lbl">
                    <p>괸계</p>
                    <select>
                      <option value="">관계 선택</option>
                      <option value="엄마">엄마</option>
                      <option value="아빠">아빠</option>
                      <option value="누나">누나</option>
                      <option value="형">형</option>
                      <option value="동생">동생</option>
                      <option value="친척">친척</option>
                      <option value="기타">기타</option>
                    </select>
                  </label>
                  <label className="lbl">
                    <p>연락처</p>
                    <input type="text" placeholder="010-0000-0000" />
                  </label>
                </div>
              </div>
            </div>
            <div className="btlft">
              <p>
                <span>*</span>필수 입력 항목입니다.
              </p>
              <div className="btret">
                <button
                  onClick={() => {
                    popno();
                  }}
                >
                  <X size={14} />
                  취소
                </button>

                <button
                  onClick={() => {
                    인사가입등록();
                  }}
                >
                  <Save size={14} />
                  저장
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Nav num1={true} />

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
        <Aside dummy={aside} idxs="1" subidxs="1" />

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

        <div className="registermain">
          {/* 바뀐 버튼 방식 */}
          <Toptits
            toptits={{
              ttmap: "인사관리",
              map: "인사정보",
              tit: "인사관리등록",
              text: "직원의 인사정보를 등록하고 관리합니다.",
              tllbtn: "PDF 다운로드",
              trrbtn: "신규등록",
            }}
            lftbtnClick={() => {
              pdfpopon();
            }}
            retbtnClick={() => {
              popon();
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
                <input
                  onChange={(e) => setkeword(e.target.value)}
                  type="text"
                  name="num"
                  placeholder="전체"
                />
              </label>

              <label name="bss">
                부서
                <select>
                  <option value="">전체</option>
                  <option value="inct">인사팀 </option>
                  <option value="ggt">경영지원팀 </option>
                  <option value="gvt">개발팀 </option>
                  <option value="oot">영업팀 </option>
                </select>
              </label>
              <label name="jgs">
                직급
                <select>
                  <option value="">전체</option>
                  <option value="inct">인사팀 </option>
                  <option value="ggt">경영지원팀 </option>
                  <option value="gvt">개발팀 </option>
                  <option value="oot">영업팀 </option>
                </select>
              </label>
              <label name="bss">
                재직상테
                <select>
                  <option value="">전체</option>
                  <option value="inct">인사팀 </option>
                  <option value="ggt">경영지원팀 </option>
                  <option value="gvt">개발팀 </option>
                  <option value="oot">영업팀 </option>
                </select>
              </label>
              <button className="jhbtn" onClick={() => getEmlpoyees()}>
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
              keywordss={keyword}
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
          </div>
        </div>
      </div>
    </div>
  );
}
