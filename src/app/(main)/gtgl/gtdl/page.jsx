"use client";

import "./Gtdl.css";
import s from "./Gtdl.module.css";
import aside from "../gtglaside.json";

import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Table from "@/component/cmm/Table";
import Toptits from "@/component/cmm/Toptits";
import {
  AlarmClock,
  AlertCircle,
  Baby,
  BookOpen,
  CakeSlice,
  Calendar,
  CalendarCheck,
  Check,
  CheckCheck,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  ClipboardPen,
  Clock,
  Clock1,
  Clock10,
  Clock4,
  Ellipsis,
  FileText,
  Flower2,
  Heart,
  HeartHandshake,
  Info,
  ListChecks,
  LogOut,
  Paperclip,
  Plane,
  Plus,
  RotateCcw,
  Save,
  SaveAll,
  SaveOff,
  Search,
  SendHorizontal,
  ShieldCheck,
  Sun,
  Trash2,
  Upload,
  Users,
  X,
} from "lucide-react";

export default function Gtdl() {
  /* 클릭한거 클레스 주기 엑티브 */
  const [clgtoh, setclgtoh] = useState(null);
  const [clocgb, setocgb] = useState(null);
  // onClick={() => setclgtoh("아무다른이름")}
  // className={`  ${clgtoh === "아무다른이름" ? "active" : ""}`}

  // 토글버튼 클릭이벤트
  const [clots, setclots] = useState(false);

  //
  //
  //
  //근태조회
  // 로딩창
  //const [IsLoading, setIsLoading] = useState(null);
  const [AttendanceList, setAttendanceList] = useState([]);
  const getAttendanceDaily = async () => {
    try {
      //setIsLoading(true);

      // 1. 근태리스트를 조회합니다.
      const token = localStorage.getItem("accessToken");
      const res = await baseApi.get("/api/v1/attendances/daily", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // 2. 근태리스트를 세팅합니다.
      setAttendanceList(res?.data?.data);
      console.log("근태리스트", res);
      //console.log("이건머임", IsLoading);
    } catch (e) {
    } finally {
      //setIsLoading(false);
    }
  };
  // 로그인하면서 보내준것들 로컬스토리지에받아서 사용
  const [apply, setapply] = useState([]);

  useEffect(() => {
    const name = localStorage.getItem("name");
    const position = localStorage.getItem("position");
    const employeeNo = localStorage.getItem("employeeNo");
    const departmentName = localStorage.getItem("departmentName");

    const Years = new Date().getFullYear();
    const Months =
      new Date().getMonth() + 1 < 10
        ? "0" + (new Date().getMonth() + 1)
        : new Date().getMonth() + 1;

    const Dates =
      new Date().getUTCDate() < 10
        ? "0" + new Date().getUTCDate()
        : new Date().getUTCDate();

    const allday = `${Years}-${Months}-${Dates}`;

    setapply({
      //오류나는건 다른 의존성없으면 상관없음
      name,
      allday,
      position,
      employeeNo,
      departmentName,
    });

    getAttendanceDaily();
  }, []);

  //출근처리
  const [cginput, setcginput] = useState({
    employeeNo: "string",
    workDate: apply.allday,
    checkInTime: "",
    checkOutTime: "",
    workMinutes: 1073741824,
    memo: "string",
  });
  const 출태근처리하기 = async () => {
    //setIsLoading(true);

    const token = localStorage.getItem("accessToken");

    const res = await baseApi.post(
      "/api/v1/attendances/checkin",
      {
        employeeNo: apply.employeeNo,
        workDate: `${apply.allday}T${cginput.checkInTime}:00`,
        checkInTime: `${apply.allday}T${cginput.checkInTime}:00`,
        checkOutTime: `${apply.allday}T${cginput.checkOutTime}:00`,
        workMinutes: 0,
        memo: cginput.memo,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    // 출근처리 후 재조회하기
    getAttendanceDaily();
    //setIsLoading(false);
  };
  return (
    <div className="wrap">
      <Nav num2={true} />

      <div className="inwrap">
        <Aside dummy={aside} idxs="1" subidxs="1" />

        <div className="main">
          <Toptits
            toptits={{
              ttmap: "근태관리",
              map: "근태관리",
              tit: "일일근태등록",
              text: "날짜별 직원 근태 현황을 등록하고 수정합니다.",
              tllbtn: "PDF 다운로드",
              trrbtn: "일괄저장",
            }}
            lftwtbtnno=""
            retsaveimg="0"
          />

          <div className="findebox">
            <div className="findeboxlft">
              <div className="ipdybox">
                <div class="jgfmin ">
                  <p>
                    <ChevronLeft size={14} />
                  </p>
                  <input type="date" />
                  <p>
                    <ChevronRight size={14} />
                  </p>
                </div>
              </div>

              <div className="dybox">
                <CalendarCheck size={13} />
                <p>오늘</p>
              </div>

              <label className="lbl">
                <p>부서</p>
                <select>
                  <option value="">전체 부서</option>
                  <option value="bs1">부서1</option>
                  <option value="bs2">부서2</option>
                  <option value="bs3">부서3</option>
                </select>
              </label>
              <label className="lbl iconelbl">
                <Search className="icone" size={13} color="#9CA3AF" />
                <input type="text" placeholder="사원명 검색" />
              </label>
            </div>

            <ul className="findeboxret">
              <li className="fdret1">
                <span>●</span> 전체23명
              </li>
              <li className="fdret2">
                <span>●</span> 출근18
              </li>
              <li className="fdret3">
                <span>●</span> 지각2
              </li>
              <li className="fdret4">
                <span>●</span> 결근1
              </li>
              <li className="fdret5">
                <span>●</span> 연차2
              </li>
            </ul>
          </div>

          <div className="ingtgl">
            <div className="gtdlbox">
              <div className="fromtit">
                <h1>
                  <ClipboardPen size={15} />
                  근태 등록
                </h1>
                <h2>7월 1일</h2>
              </div>

              <div className="gtglip">
                <label className="sost">
                  <p>
                    사원 선택<span className="str">*</span>
                  </p>
                  <div className="gtglipin">
                    <p>
                      <span>{apply.name?.slice(0, 1)}</span>
                      {apply.name} · {apply.departmentName}
                    </p>
                  </div>
                </label>
                <label className="gtuh">
                  <p>
                    근태 유형<span className="str">*</span>
                  </p>
                  <ul className="gtglipin">
                    <li
                      onClick={() => setclgtoh("출근")}
                      className={` cg  ${clgtoh === "출근" ? "active" : ""}`}
                    >
                      {/* className="cg gtuhlicis" */}
                      <CheckCheck size={12} />
                      <p>출근</p>
                    </li>
                    <li
                      onClick={() => setclgtoh("지각")}
                      className={` jg ${clgtoh === "지각" ? "active" : ""}`}
                    >
                      <AlarmClock size={12} />
                      <p>지각</p>
                    </li>
                    <li
                      onClick={() => setclgtoh("조퇴")}
                      className={`jt  ${clgtoh === "조퇴" ? "active" : ""}`}
                    >
                      <LogOut size={12} />
                      <p>조퇴</p>
                    </li>
                    <li
                      onClick={() => setclgtoh("결근")}
                      className={`gg  ${clgtoh === "결근" ? "active" : ""}`}
                    >
                      <X size={12} />
                      <p>결근</p>
                    </li>
                    <li
                      onClick={() => setclgtoh("연차")}
                      className={`uc  ${clgtoh === "연차" ? "active" : ""}`}
                    >
                      <CalendarCheck size={12} />
                      <p>연차</p>
                    </li>
                    <li
                      onClick={() => setclgtoh("반차")}
                      className={` bc ${clgtoh === "반차" ? "active" : ""}`}
                    >
                      <Calendar size={12} />
                      <p>반차</p>
                    </li>
                    <li
                      onClick={() => setclgtoh("퇴근")}
                      className={`tg  ${clgtoh === "퇴근" ? "active" : ""}`}
                    >
                      <Plane size={12} />
                      <p>퇴근</p>
                    </li>
                    <li
                      onClick={() => setclgtoh("교육")}
                      className={`gu  ${clgtoh === "교육" ? "active" : ""}`}
                    >
                      <BookOpen size={12} />
                      <p>교육</p>
                    </li>
                    <li
                      onClick={() => setclgtoh("공가")}
                      className={` gog ${clgtoh === "공가" ? "active" : ""}`}
                    >
                      <ShieldCheck size={12} />
                      <p>공가</p>
                    </li>
                  </ul>
                </label>

                {/*  */}

                {/*  */}

                {/* 근태 등록별 인풋 */}

                {/* 출근 */}
                {clgtoh === "출근" && (
                  <div className="cginputbox">
                    <div className="lboutbox">
                      <label className="cgsg">
                        <p>출근 시간</p>
                        <div className="gtglipin">
                          <input
                            type="text"
                            onChange={(e) =>
                              setcginput((prev) => {
                                return {
                                  ...prev,
                                  checkInTime: e.target.value,
                                };
                              })
                            }
                          />
                          <Clock4 size={13} className="gtglipinic" />
                        </div>
                      </label>
                    </div>

                    <div className="lboutbox">
                      <label className="cggm">
                        <div className={`cggmin ${clots ? "atv" : ""}`}>
                          <div className="gtglipin">
                            <input type="text" placeholder="18:00" />
                            <Clock4 size={13} className="gtglipinic" />
                          </div>
                          <p>~</p>
                          <div className="gtglipin">
                            <input type="text" placeholder="20:30" />
                            <Clock4 size={13} className="gtglipinic" />
                          </div>
                          <div className="times">
                            <p>2.5h</p>
                          </div>
                        </div>
                      </label>
                    </div>

                    <label className="bg">
                      <p>비고</p>
                      <div className="gtglipin">
                        <textarea
                          type="text"
                          placeholder="특이사항을 입력하세요"
                          onChange={(e) =>
                            setcginput((prev) => {
                              return {
                                ...prev,
                                memo: e.target.value,
                              };
                            })
                          }
                        />
                      </div>
                    </label>

                    <div className="btnsbox">
                      <button className="lftwtbtn">
                        <RotateCcw size={12} color="#6B7280" />
                        <p>초기화</p>
                      </button>
                      <button className="retblbtn" onClick={출태근처리하기}>
                        <Save size={12} />
                        <p>저장</p>
                      </button>
                    </div>
                  </div>
                )}

                {/* 퇴근 */}
                {clgtoh === "퇴근" && (
                  <div className="tginputbox">
                    <div className="lboutbox">
                      <label className="tgsg">
                        <p>퇴근 시간</p>
                        <div className="gtglipin">
                          <input
                            type="text"
                            onChange={(e) =>
                              setcginput((prev) => {
                                return {
                                  ...prev,
                                  checkOutTime: e.target.value,
                                };
                              })
                            }
                          />
                          <Clock4 size={13} className="gtglipinic" />
                        </div>
                      </label>
                    </div>

                    <div className="lboutbox">
                      <label className="cggm">
                        <div className="tgbox">
                          <p>초과근무(OT)</p>
                          <div
                            className="tgbtnbox"
                            onClick={() => {
                              setclots(!clots);
                            }}
                          >
                            <div className={`tgbtn ${clots ? "atv" : ""}`}>
                              <div className="tgs"></div>
                            </div>
                            <p>{clots ? "적용" : "비적용"}</p>
                          </div>
                        </div>
                        <div className={`cggmin ${clots ? "atv" : ""}`}>
                          <div className="gtglipin">
                            <input type="text" placeholder="18:00" />
                            <Clock4 size={13} className="gtglipinic" />
                          </div>
                          <p>~</p>
                          <div className="gtglipin">
                            <input type="text" placeholder="20:30" />
                            <Clock4 size={13} className="gtglipinic" />
                          </div>
                          <div className="times">
                            <p>2.5h</p>
                          </div>
                        </div>
                      </label>
                    </div>

                    <label className="bg">
                      <p>비고</p>
                      <div className="gtglipin">
                        <textarea
                          type="text"
                          placeholder="특이사항을 입력하세요"
                          onChange={(e) =>
                            setcginput((prev) => {
                              return {
                                ...prev,
                                memo: e.target.value,
                              };
                            })
                          }
                        />
                      </div>
                    </label>

                    <div className="btnsbox">
                      <button className="lftwtbtn">
                        <RotateCcw size={12} color="#6B7280" />
                        <p>초기화</p>
                      </button>
                      <button className="retblbtn" onClick={출태근처리하기}>
                        <Save size={12} />
                        <p>저장</p>
                      </button>
                    </div>
                  </div>
                )}
                {/* 지각 */}
                {clgtoh === "지각" && (
                  <div className="jginputbox">
                    <h1>
                      <CircleAlert size={14} /> 지각 시간이 자동으로 계산됩니다.
                    </h1>
                    <div className="lboutbox">
                      <label className="cgsg">
                        <p>
                          출근 시간 <span>지각</span>
                        </p>
                        <div className="gtglipin">
                          <input type="text" placeholder="10:30" />
                          <Clock4 size={13} className="gtglipinic" />
                        </div>
                      </label>
                      <label className="tgsg">
                        <p>출근 시간</p>
                        <div className="gtglipin">
                          <input type="text" placeholder="18:00" />
                          <Clock4 size={13} className="gtglipinic" />
                        </div>
                      </label>
                    </div>

                    <div className="lboutbox">
                      <label className="cggm">
                        <div className="tgbox">
                          <p>지각사유</p>
                        </div>
                        <div className="cggmin">
                          <select name="" id="">
                            <option value="교통지연">교통지연</option>
                            <option value="늦잠">늦잠</option>
                            <option value="공사">공사</option>
                            <option value="아픔">아픔</option>
                            <option value="기타">기타</option>
                          </select>
                        </div>
                      </label>
                    </div>

                    <label className="bg">
                      <p>비고</p>
                      <div className="gtglipin">
                        <textarea
                          type="text"
                          placeholder="특이사항을 입력하세요"
                        />
                      </div>
                    </label>

                    <div className="btnsbox">
                      <button className="lftwtbtn">
                        <RotateCcw size={12} color="#6B7280" />
                        <p>초기화</p>
                      </button>
                      <button className="retblbtn">
                        <Save size={12} />
                        <p>저장</p>
                      </button>
                    </div>
                  </div>
                )}

                {/* 조퇴 */}
                {clgtoh === "조퇴" && (
                  <div className="jtinputbox">
                    <h1>
                      <CircleAlert size={14} /> 지각 시간이 자동으로 계산됩니다.
                    </h1>
                    <div className="lboutbox">
                      <label className="tgsg">
                        <p>
                          조퇴 시간 <span>필수</span>
                        </p>
                        <div className="gtglipin">
                          <input type="text" placeholder="14:00" />
                          <Clock4 size={13} className="gtglipinic" />
                        </div>
                      </label>
                    </div>

                    <div className="lboutbox">
                      <label className="cggm">
                        <div className="tgbox">
                          <p>조퇴사유</p>
                        </div>
                        <div className="cggmin">
                          <select name="" id="">
                            <option value="개인사정">개인사정</option>
                            <option value="병원">병원</option>
                            <option value="아픔">아픔</option>
                            <option value="기타">기타</option>
                          </select>
                        </div>
                      </label>
                    </div>

                    <label className="bg">
                      <p>비고</p>
                      <div className="gtglipin">
                        <textarea
                          type="text"
                          placeholder="특이사항을 입력하세요"
                        />
                      </div>
                    </label>

                    <div className="btnsbox">
                      <button className="lftwtbtn">
                        <RotateCcw size={12} color="#6B7280" />
                        <p>초기화</p>
                      </button>
                      <button className="retblbtn">
                        <Save size={12} />
                        <p>저장</p>
                      </button>
                    </div>
                  </div>
                )}

                {/* 공가 */}
                {clgtoh === "공가" && (
                  <div className="gginputbox">
                    <div className="lboutbox">
                      <label className="cggm">
                        <div className="tgbox">
                          <p>
                            공가 구분 <span style={{ color: "red" }}>*</span>
                          </p>
                        </div>
                        <div className="cggmin">
                          <select name="" id="">
                            <option value="개인사정">개인사정</option>
                            <option value="병원">병원</option>
                            <option value="아픔">아픔</option>
                            <option value="기타">기타</option>
                          </select>
                        </div>
                      </label>
                    </div>

                    <div className="lboutbox">
                      <p>
                        공가 기간
                        <span style={{ color: "red", background: "none" }}>
                          *
                        </span>
                      </p>
                      <div className="lboutboxin">
                        <div className="lboutboxintp">
                          <label className="cgsg">
                            <div className="gtglipin">
                              <input type="text" placeholder="09:00" />
                              <Calendar size={13} className="gtglipinic" />
                            </div>
                          </label>
                          <b>~</b>
                          <label className="tgsg">
                            <div className="gtglipin">
                              <input type="text" placeholder="14:00" />
                              <Calendar size={13} className="gtglipinic" />
                            </div>
                          </label>
                        </div>

                        <span>
                          <Clock size={12} />총 2일
                        </span>
                      </div>
                    </div>

                    <label className="jbsl">
                      <p>
                        증빙서류 <span>(필수)</span>
                      </p>
                      <div className="jbslbox">
                        <h1>
                          <Paperclip size={14} />
                          훈련소집통지서.pdf
                        </h1>
                        <div className="jbslboxbt">
                          <p>
                            <Trash2 size={13} />
                            삭제
                          </p>
                          <button>
                            <Plus size={12} />
                            추가
                          </button>
                        </div>
                      </div>
                    </label>
                    <label className="bg">
                      <p>비고</p>
                      <div className="gtglipin">
                        <textarea
                          type="text"
                          placeholder="특이사항을 입력하세요"
                        />
                      </div>
                    </label>

                    <div className="btnsbox">
                      <button className="lftwtbtn">
                        <RotateCcw size={12} color="#6B7280" />
                        <p>초기화</p>
                      </button>
                      <button className="retblbtn">
                        <Save size={12} />
                        <p>저장</p>
                      </button>
                    </div>
                  </div>
                )}

                {/* 연차 */}
                {clgtoh === "연차" && (
                  <div className="ocinputbox">
                    <div className="topbox">
                      <div className="topboxtop">
                        <h1>
                          <CalendarCheck size={13} /> 연차 현황
                        </h1>
                        <p>2025년 기준</p>
                      </div>
                      <ul className="topboxbtm">
                        <li>
                          <h1>15일</h1>
                          <p>총 부여</p>
                        </li>
                        <li>
                          <h1>8일</h1>
                          <p>사용</p>
                        </li>
                        <li>
                          <h1>7일</h1>
                          <p>잔여</p>
                        </li>
                        <li>
                          <h1>2일</h1>
                          <p>이번 신청</p>
                        </li>
                      </ul>
                    </div>

                    <div className="lboutbox">
                      <label className="cggm">
                        <div className="tgbox">
                          <p>
                            연차 구분 <span style={{ color: "red" }}>*</span>
                          </p>
                        </div>
                        <ul className="cggminocgb">
                          <li
                            onClick={() => setocgb("종일")}
                            className={`ocgb  ${clocgb === "종일" ? "active" : ""}`}
                          >
                            <Sun size={12} />
                            종일
                          </li>
                          <li
                            onClick={() => setocgb("오전반차")}
                            className={`ocgb  ${clocgb === "오전반차" ? "active" : ""}`}
                          >
                            <Sun size={12} />
                            오전반차
                          </li>
                          <li
                            onClick={() => setocgb("오후반차")}
                            className={`ocgb  ${clocgb === "오후반차" ? "active" : ""}`}
                          >
                            <Sun size={12} />
                            오후반차
                          </li>
                        </ul>
                      </label>
                    </div>

                    <div className="lboutbox">
                      <p>
                        연차 기간{" "}
                        <span style={{ color: "red", background: "none" }}>
                          *
                        </span>
                      </p>
                      <div className="lboutboxin">
                        <div className="lboutboxintp">
                          <label className="cgsg">
                            <div className="gtglipin">
                              <input type="date" placeholder="09:00" />
                            </div>
                          </label>
                          <b>~</b>
                          <label className="tgsg">
                            <div className="gtglipin">
                              <input type="date" placeholder="14:00" />
                            </div>
                          </label>
                        </div>
                        <div className="lboutboxinbtm">
                          <span>
                            <Clock size={12} />총 2일 차감
                          </span>
                          <p>
                            <Info size={12} />
                            신청 후 잔여 5일
                          </p>
                        </div>
                      </div>
                    </div>

                    <label className="bg">
                      <p>연차 사유</p>
                      <div className="gtglipin">
                        <textarea
                          type="text"
                          placeholder="특이사항을 입력하세요"
                        />
                      </div>
                    </label>

                    <div className="btnsbox">
                      <button className="lftwtbtn">
                        <RotateCcw size={12} color="#6B7280" />
                        <p>초기화</p>
                      </button>
                      <button className="retblbtn">
                        <Save size={12} />
                        <p>저장</p>
                      </button>
                    </div>
                  </div>
                )}

                {/* 기타 */}
                {(clgtoh === "결근" ||
                  clgtoh === "반차" ||
                  clgtoh === "교육") && (
                  <div className="inputbox">
                    <div className="lboutbox">
                      <label className="cgsg">
                        <p>출근 시간</p>
                        <div className="gtglipin">
                          <input
                            type="text"
                            value={"09:00"}
                            onChange={(e) =>
                              setcginput((prev) => {
                                return {
                                  ...prev,
                                  checkInTime: e.target.value,
                                };
                              })
                            }
                          />
                          <Clock4 size={13} className="gtglipinic" />
                        </div>
                      </label>
                      <label className="tgsg">
                        <p>퇴근 시간</p>
                        <div className="gtglipin">
                          <input
                            type="text"
                            value={"18:00"}
                            onChange={(e) =>
                              setcginput((prev) => {
                                return {
                                  ...prev,
                                  checkOutTime: e.target.value,
                                };
                              })
                            }
                          />
                          <Clock4 size={13} className="gtglipinic" />
                        </div>
                      </label>
                    </div>

                    <div className="lboutbox">
                      <label className="cggm">
                        <div className="tgbox">
                          <p>초과근무(OT)</p>
                          <div
                            className="tgbtnbox"
                            onClick={() => {
                              setclots(!clots);
                            }}
                          >
                            <div className={`tgbtn ${clots ? "atv" : ""}`}>
                              <div className="tgs"></div>
                            </div>
                            <p>{clots ? "적용" : "비적용"}</p>
                          </div>
                        </div>
                        <div className={`cggmin ${clots ? "atv" : ""}`}>
                          <div className="gtglipin">
                            <input type="text" placeholder="18:00" />
                            <Clock4 size={13} className="gtglipinic" />
                          </div>
                          <p>~</p>
                          <div className="gtglipin">
                            <input type="text" placeholder="20:30" />
                            <Clock4 size={13} className="gtglipinic" />
                          </div>
                          <div className="times">
                            <p>2.5h</p>
                          </div>
                        </div>
                      </label>
                    </div>

                    <label className="bg">
                      <p>비고</p>
                      <div className="gtglipin">
                        <textarea
                          type="text"
                          placeholder="특이사항을 입력하세요"
                          onChange={(e) =>
                            setcginput((prev) => {
                              return {
                                ...prev,
                                memo: e.target.value,
                              };
                            })
                          }
                        />
                      </div>
                    </label>

                    <div className="btnsbox">
                      <button className="lftwtbtn">
                        <RotateCcw size={12} color="#6B7280" />
                        <p>초기화</p>
                      </button>
                      <button className="retblbtn">
                        <Save size={12} />
                        <p>저장</p>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="textbox">
              <div className="fromtit">
                <h1>
                  <ListChecks size={15} strokeWidth={1.5} />
                  2025.07.01 근태 목록
                </h1>
                <div className="titin">
                  <h2>총 23건 </h2>
                  <h3>
                    <Users size={12} /> 일괄등록
                  </h3>
                </div>
              </div>

              <ul className={s.texts}>
                <ul>
                  <li>
                    <input type="checkbox" checked />
                  </li>
                  <li>사원번호</li>
                  <li>성명</li>
                  <li>부서</li>
                  <li>직급</li>
                  <li>근태유형</li>
                  <li>출근시간</li>
                  <li>퇴근시간</li>
                  <li>OT</li>
                  <li>비고</li>
                  <li>관리</li>
                </ul>

                {AttendanceList.map((it, idx) => (
                  <ul
                    key={idx}
                    style={{ display: it.checkInTime ? "flex" : "none" }}
                  >
                    {" "}
                    <li>
                      <input type="checkbox" />
                    </li>
                    <li>{it.employeeNo}</li>
                    <li>{it.name}</li>
                    <li>{it.departmentName}</li>
                    <li>{it.positionName}</li>
                    <li>
                      <p
                        className={`${s.gtuh} 
                         ${it.attendanceStatusCode === "출근" ? s.cg : ""} 
                         ${it.attendanceStatusCode === "지각" ? s.jg : ""} 
                         ${it.attendanceStatusCode === "연차" ? s.uc : ""}
                         ${it.attendanceStatusCode === "퇴근" ? s.tg : ""}
                         ${it.attendanceStatusCode === "반차" ? s.bc : ""}
                         ${it.attendanceStatusCode === "미등록" ? s.mdl : ""}
                        `}
                      >
                        <span>●</span>
                        {it.attendanceStatusCode}
                      </p>
                    </li>
                    <li>{it.checkInTime?.slice(11, 16)}</li>
                    <li>{it.checkOutTime?.slice(11, 16)}</li>
                    <li>-</li>
                    <li>-</li>
                    <li>
                      <span className={`${s.sjs} ${s.glbtns}`}>수정</span>
                      <span className={`${s.dls} ${s.glbtns}`}>삭제</span>
                    </li>
                  </ul>
                  // <ul key={idx}>
                  //   <li>{it.EmployeeEventSupportId}</li>
                  //   <li>{it.applicationDate}</li>
                  //   <li>
                  //     <span className={`${s.gb} ${s.bnin}`}>
                  //       {it.eventType}
                  //     </span>
                  //   </li>
                  //   <li>{it.targetName}</li>
                  //   <li>{it.familyRelation}</li>
                  //   <li>{it.eventDate}</li>
                  //   <li>500,000원</li>
                  //   <li>
                  //     {it.bankName} {it.accountNumber}
                  //   </li>
                  //   <li>
                  //     <span className={`${s.clst} ${s.gt}`}>검토중</span>
                  //   </li>
                  //   <li>
                  //     <span
                  //       className={`${s.sjs} ${s.glbtns}`}
                  //       onClick={() => {
                  //         경조비상세조회(it?.EmployeeEventSupportId);

                  //         console.log(it.EmployeeEventSupportId);
                  //       }}
                  //     >
                  //       상세
                  //     </span>
                  //   </li>
                  // </ul>
                ))}

                <ul>
                  <li>
                    <input type="checkbox" />
                  </li>
                  <li> 만든거 EMP-001</li>
                  <li>김철수</li>
                  <li>인사팀</li>
                  <li>팀장</li>
                  <li>
                    <p className={`${s.gtuh} ${s.cg}`}>
                      <span>●</span>출근
                    </p>
                  </li>
                  <li>09:02</li>
                  <li>18:05</li>
                  <li>-</li>
                  <li>-</li>
                  <li>
                    <span className={`${s.sjs} ${s.glbtns}`}>수정</span>
                    <span className={`${s.dls} ${s.glbtns}`}>삭제</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <input type="checkbox" />
                  </li>
                  <li>EMP-002</li>
                  <li>이영희</li>
                  <li>경영지원팀</li>
                  <li>과장</li>
                  <li>
                    <p className={`${s.gtuh} ${s.jg}`}>
                      <span>●</span>지각
                    </p>
                  </li>
                  <li className={s.jgtt}>09:27</li>
                  <li>18:10</li>
                  <li>-</li>
                  <li className={s.jgtt}>27분 지각</li>
                  <li>
                    <span className={`${s.sjs} ${s.glbtns}`}>수정</span>
                    <span className={`${s.dls} ${s.glbtns}`}>삭제</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <input type="checkbox" />
                  </li>
                  <li>EMP-003</li>
                  <li>박민준</li>
                  <li>개발팀</li>
                  <li>대리</li>
                  <li>
                    <p className={`${s.gtuh} ${s.uc}`}>
                      <span>●</span>연차
                    </p>
                  </li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li className={s.uctt}>연차 1일 사용</li>
                  <li>
                    <span className={`${s.sjs} ${s.glbtns}`}>수정</span>
                    <span className={`${s.dls} ${s.glbtns}`}>삭제</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <input type="checkbox" />
                  </li>
                  <li>EMP-004</li>
                  <li>최지영</li>
                  <li>영업팀</li>
                  <li>사원</li>
                  <li>
                    <p className={`${s.gtuh} ${s.cj}`}>
                      <span>●</span>퇴근
                    </p>
                  </li>
                  <li>08:50</li>
                  <li>19:30</li>
                  <li>1.5h</li>
                  <li className={s.cjtt}>부산츨장</li>
                  <li>
                    <span className={`${s.sjs} ${s.glbtns}`}>수정</span>
                    <span className={`${s.dls} ${s.glbtns}`}>삭제</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <input type="checkbox" />
                  </li>
                  <li>EMP-005</li>
                  <li>정수빈</li>
                  <li>개발팀</li>
                  <li>사원</li>
                  <li>
                    <p className={`${s.gtuh} ${s.bc}`}>
                      <span>●</span>반차
                    </p>
                  </li>
                  <li>09:02</li>
                  <li>18:05</li>
                  <li>-</li>
                  <li className={s.bctt}>오후반차</li>
                  <li>
                    <span className={`${s.sjs} ${s.glbtns}`}>수정</span>
                    <span className={`${s.dls} ${s.glbtns}`}>삭제</span>
                  </li>
                </ul>
                <ul className={s.mdlul}>
                  <li>
                    <input type="checkbox" />
                  </li>
                  <li>EMP-006</li>
                  <li>한지민</li>
                  <li>영업팀</li>
                  <li>대리</li>
                  <li>
                    <p className={`${s.gtuh} ${s.mdl}`}>
                      <span>
                        <AlertCircle size={10} />
                      </span>
                      미등록
                    </p>
                  </li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>-</li>
                  <li>
                    <span className={`${s.dls} ${s.glbtns}`}>
                      <Plus size={10} /> 등록
                    </span>
                  </li>
                </ul>

                <ul className="alltbl">
                  <div className="alltblin">
                    <li>
                      <h1>합계</h1>
                    </li>
                    <li>
                      <h2>6명 조회</h2>
                    </li>
                    <li>
                      <p>평균</p>
                      <h1>09:05</h1>
                    </li>
                    <li>
                      <p>평균</p>
                      <h1>18:09</h1>
                    </li>
                    <li>
                      <p>합계</p>
                      <h3>3.0h</h3>
                    </li>
                  </div>
                </ul>

                <ul className={s.textsbtns}>
                  <li>
                    <p>전체 23명 중 6명 표시 · 미등록 1명</p>
                  </li>
                  <li></li>
                  <li>
                    <span>&lt;</span>
                    <span className={s.textsces}>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>&gt;</span>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
