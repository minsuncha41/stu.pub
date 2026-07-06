"use client";
import aside from "../infoaside.json";

import "./apply.css";
import s from "./Apply.module.css";

import { useEffect, useRef, useState } from "react";
import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Table from "@/component/cmm/Table";
import Toptits from "@/component/cmm/Toptits";
import {
  Baby,
  Banknote,
  CakeSlice,
  Calendar,
  Check,
  Clock,
  Clock4,
  CreditCard,
  Download,
  Ellipsis,
  FileImage,
  FileText,
  Flower2,
  Gift,
  Hash,
  Heart,
  HeartHandshake,
  MapPin,
  MessageSquareText,
  Paperclip,
  Save,
  Search,
  SendHorizontal,
  Upload,
  User,
  UserPlus,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/uibutton";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/uipopover";
import { toast } from "sonner";
import axios from "axios";
import { Spinner } from "@/components/ui/uispinner";
export default function Apply() {
  {
    // const [employee, setemployee] = useState([]);
    // useEffect(() => {
    //   //api를 요청해서 받는다. 통신은async await붙인다
    //   const getEmployee = async () => {
    //     //const response = await baseApi.get("/api/v1/employees");
    //     console.log(response.data.data);
    //     //useState를 넣는다
    //     setemployee(response.data.data);
    //     //useState에 있는 데이터를 렌더링 시킨다
    //   };
    //   getEmployee();
    // }, []);
  }
  //
  //
  const [evtgjblist, setevtgjblist] = useState([]);
  const gjblist = async () => {
    const token = localStorage.getItem("accessToken");
    const res = await baseApi.get("/api/v1/support", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("경조사리스트", res.data.data);
    setevtgjblist(res.data.data);
  };

  useEffect(() => {
    gjblist();
  }, []);

  const [useif, setuseif] = useState();
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

    const allday = `${Years}.${Months}.${Dates}`;

    setapply({
      //오류나는건 다른 의존성없으면 상관없음
      name,
      position,
      employeeNo,
      departmentName,
      allday,
    });
  }, []);

  const [evttype, setevttype] = useState("본인결혼");

  // 값들 가져오는방법 1
  // const [evtname, setevtname] = useState();
  // const [evtgg, setevtgg] = useState("bnin");
  // const [evtgji, setevtgji] = useState();
  // const [evtgjjs, setevtgjjs] = useState();

  // const [evtoh, setevtoh] = useState("ggmn");
  // const [evtgjbh, setevtgjbh] = useState();
  // const [evtogj, setevtogj] = useState();

  // 값들 가져오는방법 2
  const [allevt, setallevt] = useState({
    tgname: "",
    tggg: "본인",
    eventDate: "",
    tggjjs: "",

    tgoh: "국민은헹",
    accoutNumber: "",
    tgogj: "",

    memo: "",
  });
  {
    // const [app] = useState(() => ({
    //   name: localStorage.getItem("name"),
    //   position: localStorage.getItem("position"),
    //   employeeNo: localStorage.getItem("employeeNo"),
    //   departmentName: localStorage.getItem("departmentName"),
    // }));
  }

  const 경조사비신청하기 = async () => {
    try {
      const token = localStorage.getItem("accessToken");

      // 1. 경조부분확인
      if (!evttype) {
        return alert("경조 구분을 선택해주세요");
      }

      // 2. 경조대상자명
      if (!allevt.tgname) {
        return alert("경조 대상자명을 입력해주세요");
      }

      // 3. 경조대상자관개
      if (!allevt.tggg) {
        return alert("경조 대상자관개를 선택해주세요");
      }

      // 2. 경조일
      if (!allevt.eventDate) {
        return alert("경조일 선택해주세요");
      }

      // 2. 은행
      if (!allevt.tgoh) {
        return alert("경조비 받을 은행을 선택해주세요");
      }

      // 2. 계좌번호
      if (!allevt.accoutNumber) {
        return alert("경조비 받을 계좌번호를 입력해주세요");
      }
      // 2-2. 계좌번호 확인
      if (
        !(10 <= allevt.accoutNumber.length && allevt.accoutNumber.length <= 12)
      ) {
        return alert("올바른 계좌번호를 입력해주세요");
      }

      // 2. 예금주
      if (!allevt.tgogj) {
        return alert("경조비 받을 예금주 입력해주세요");
      }

      const res = await baseApi.post(
        "/api/v1/support",
        {
          eventType: evttype,
          familyRelation: allevt?.tggg,
          targetName: allevt?.tgname,
          applicationDate: "2026-06-12",
          eventDate: "2026-06-12",
          requestedAmount: 500000,
          eventLocation: allevt?.tggjjs,
          bankName: allevt?.tgoh,
          accountNumber: allevt?.accoutNumber,
          accountHolder: allevt?.tgogj,
          approvalStatus: "확인",
          memo: allevt.memo,
          fileIdList: [fileId],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log("경조사 인풋 들", evttype, allevt, fileId);
      alert("성공");
    } catch (e) {
      alert("실패 다시입력 / 백엔드확인");
      console.error("네트워크 실패", e);
    } finally {
    }
  };
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

  //

  //

  //

  //0619

  // 토스트메세지
  // toast.loading("오...;;", { position: "top-center" });

  // 파일업로드 백엔드로 보내는거
  const upldref = useRef(null);

  //const [fileName, setFileName] = useState(null);
  const [fileId, setFileId] = useState(null);

  const [uploadif, setuploadif] = useState({});
  const [iflist, setiflist] = useState({});
  const upld = async (filess) => {
    const url = "http://localhost:33000/api/v1/files/upload";
    const token = localStorage.getItem("accessToken");

    const fileupld = filess[0];
    console.log("업로드 선택한 파일", fileupld);
    console.log("업로드 선택한 파일 이름", fileupld?.name);
    console.log("업로드 선택한 파일 사이즈", fileupld?.size);
    setuploadif({
      name: fileupld?.name,
      size: fileupld?.size,
    });

    const formData = new FormData();
    formData.append("file", fileupld);
    formData.append("refType", "1");

    const res = await axios.post(url, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setFileId(res.data.data);
    console.log("업로드한파일ID", res.data.data);
    console.log("업로드한파일", res.data);

    // console.log("업로드 선택한 파일 이름", formData.get("filename"));
    // formData.append("filename", fileupld.name);
    // setFileName(formData.get("filename"));
  };

  const 경조비상세조회 = async (id) => {
    // 로딩창
    setisLoading(true);

    const token = localStorage.getItem("accessToken");

    const res = await baseApi.get(`/api/v1/support/detail/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setiflist(res.data.data);

    // 로딩창
    setisLoading(false);
    setpopvw(true);
  };
  // 로딩창
  const [isLoading, setisLoading] = useState(false);

  // const [uplodlist, setuplodlist] = useState([]);
  // const uplodlistss = async () => {
  //   const token = localStorage.getItem("accessToken");
  //   const res = await baseApi.get("/api/v1/files/{fileId}/download", {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   console.log("업로드리스트", res);
  //   setuplodlist(res);
  // };

  /* 클릭한거 클레스 주기 엑티브 */
  const [clgjgb, setclgjgb] = useState("본인결혼");

  // onClick={() => setclgjgb("아무다른이름")}
  // className={clgjgb === "아무다른이름" ? "active" : ""}

  // 이미지 다운로드
  const goDownloadFile = async () => {
    const token = localStorage.getItem("accessToken");

    const res = await axios.get(
      `http://localhost:33000/api/v1/files/${iflist?.savedFileId}/download`,
      {
        responseType: "blob",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const url = window.URL.createObjectURL(res?.data);

    const a = document.createElement("a");
    a.href = url;
    a.download = iflist?.savedFileName; // 원본 파일명
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="wrap">
      {/* <div
        onClick={() => {
          popon();
        }}
        className="sgdlbtn"
      >
        i111111111
      </div>
      <div
        onClick={() => {
          pdfpopon();
        }}
        className="pdfbtn"
      >
        i222222
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
            <div className="mdt">
              <div className="btlft">
                <Gift size={17} color="#60A5FA" />
                <h1>
                  경조비 신청 상세
                  <p>Welfare Benefit Detail</p>
                </h1>
              </div>
              <div className="btret">
                <span>검토중</span>
                <button
                  onClick={() => {
                    popno();
                  }}
                >
                  <X size={14} />
                </button>
              </div>
            </div>
            <div className="mdin">
              <div className="mdintp">
                <div className="mdintptp">
                  <h1>
                    <Hash size={12} color="#9CA3AF" />
                    신청번호: support-{iflist?.EmployeeEventSupportId ?? ""}
                  </h1>
                  <h1>
                    <Calendar size={12} color="#9CA3AF" />
                    신청일:{" "}
                    {(iflist?.savedFileDate ?? "임시날자 2003-01-04").slice(
                      0,
                      11,
                    )}
                    {/* 신청일: {iflist?.applicationDate} */}
                  </h1>
                </div>
                <div className="mdintpbt">
                  <label>
                    <span>
                      <Check size={11} color="#FFFFFF" />
                    </span>
                    신청완료
                  </label>
                  <div className="mdintpbtline"></div>
                  <label>
                    <span></span>
                    검토중
                  </label>
                  <div className="mdintpbtline"></div>
                  <label>
                    <span></span>
                    승인
                  </label>
                  <div className="mdintpbtline"></div>
                  <label>
                    <span></span>
                    지급완료
                  </label>
                </div>
              </div>
              <div className="mdinbox">
                <ul className="tbs gjjb">
                  <h1>경조 정보</h1>
                  <ul>
                    <li>경조구분</li>
                    <li>
                      <span>{iflist?.eventType}</span>
                      <h5>경조비 지급 규정 3조 1항</h5>
                    </li>
                  </ul>
                  <ul>
                    <li>대상자 / 관계</li>
                    <li>
                      <span>
                        {iflist?.targetName?.[0] === " "
                          ? iflist?.targetName?.[1]
                          : iflist?.targetName?.[0]}
                      </span>
                      <b>{iflist?.targetName}</b>{" "}
                      <p>{iflist?.familyRelation}</p>
                    </li>
                  </ul>
                  <ul>
                    <li>경조일</li>
                    <li>
                      <Calendar size={13} color="#9CA3AF" /> {iflist?.eventDate}
                    </li>
                  </ul>
                  <ul>
                    <li>경조 장소</li>
                    <li>
                      <MapPin size={13} color="#9CA3AF" />{" "}
                      {iflist?.eventLocation}
                    </li>
                  </ul>
                </ul>

                <ul className="tbs jgjb">
                  <h1>지급 정보</h1>
                  <ul>
                    <li>지급금액</li>
                    <li>
                      <Banknote size={13} color="#1B3A6B" />
                      <b>{iflist?.requestedAmount}원</b>
                      <p>(오십만원정) (계산해서 해주기)</p>
                    </li>
                  </ul>
                  <ul>
                    <li>지급계좌</li>
                    <li>
                      <CreditCard size={13} color="#9CA3AF" />
                      {iflist?.bankName} {iflist?.accountNumber} (
                      {iflist?.accountHolder})
                    </li>
                  </ul>
                  <ul>
                    <li>예상 지급일</li>
                    <li>
                      <Clock size={13} color="#9CA3AF" /> 승인 후 3영업일 이내
                    </li>
                  </ul>
                </ul>

                {iflist?.savedFileName && (
                  <ul className="tbs cbsl">
                    <h1>첨부 서류</h1>
                    <li>
                      <div className="tbsret">
                        <div className="icbox">
                          <FileText size={14} color="#2563EB" />
                        </div>
                        <div className="ttbox">
                          <h2>{iflist?.savedFileName}</h2>
                          <p>
                            {iflist?.savedFileExt} · {iflist?.savedFileSize} KB
                            ·{iflist?.applicationDate} 업로드
                          </p>
                        </div>
                      </div>
                      <Download
                        size={15}
                        color="gray"
                        className="icboxdown"
                        // onClick={goDownloadFile}
                        onClick={() => {
                          goDownloadFile();
                        }}
                      />
                    </li>
                    {/* <li>
                      <div className="icbox">
                        <FileImage size={14} color="#DC2626" />
                      </div>
                      <div className="ttbox">
                        <h2>(예)청첩장_스캔본.jpg</h2>
                        <p>JPG · 1.2 MB · 2025.07.01 업로드</p>
                      </div>
                    </li> */}
                  </ul>
                )}

                <ul className="tbs gtog">
                  <h1>검토 의견</h1>
                  <li>
                    <MessageSquareText size={14} color="#D97706" />
                    <li>
                      <h2>
                        서류 확인 중입니다. 추가 서류 제출이 필요할 수 있습니다.
                      </h2>
                      <p>
                        <User size={11} /> 검토자: 김인사 (인사팀장) ·
                        2025.07.02
                      </p>
                    </li>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mdbt">
              <div className="mdbtlft">
                <Clock size={12} color="#9CA3AF" />
                <h1>최종 수정: 2025.07.02 · 인사팀</h1>
              </div>
              <div className="mdbtret">
                <button
                  className="sccs"
                  onClick={() => {
                    popno();
                  }}
                >
                  <X size={14} />
                  신청취소
                </button>
                <button
                  className="dg"
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
      <Nav num1={true} />
      <div className="inwrap">
        <Aside dummy={aside} idxs="2" subidxs="1" />

        <div className="main">
          <Toptits
            toptits={{
              ttmap: "인사관리",
              map: "경조비관리",
              tit: "경조비신청",
              text: "경조사 발생 시 경조비를 신청하고 지급 현황을 관리합니다.",
              tllbtn: "PDF 다운로드",
              trrbtn: "신규신청",
            }}
            lftbtnClick={() => {
              pdfpopon();
            }}
            // retbtnClick={() => {
            //   popon();
            // }}
          />

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
                <h1 className="tptits">
                  <span></span>신청자 정보
                </h1>
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
                  <input
                    type="text"
                    value={apply?.employeeNo || "EMP-002"}
                    readOnly
                    disabled
                  />
                </label>
                <label name="jgfm" className="jgfm">
                  <p>성명</p>
                  <img src="/Lock.png" alt="" />
                  <input
                    type="text"
                    value={apply?.name || "이영희"}
                    readOnly
                    disabled
                  />
                </label>
                <label name="jgfm" className="jgfm">
                  <p>부서</p>
                  <img src="/Lock.png" alt="경영지원팀" />
                  <input
                    type="text"
                    value={apply?.departmentName || "과장"}
                    readOnly
                    disabled
                  />
                </label>
                <label name="jgfm" className="jgfm">
                  <p>직급</p>
                  <img src="/Lock.png" alt="" />
                  <input
                    type="text"
                    value={apply?.position || "2025.07.01"}
                    readOnly
                    disabled
                  />
                </label>
                <label name="jgfm" className="jgfm">
                  <p>신청일</p>
                  <img src="/Lock.png" alt="" />
                  <input
                    type="text"
                    value={apply?.allday || ""}
                    readOnly
                    disabled
                  />
                </label>
              </div>

              <div className="fmli"></div>

              <div className="formboxmd">
                <h1 className="tptits">
                  <span></span>경조 구분
                </h1>
                <label name="uhfm" className="uhfm">
                  <ul>
                    <li
                      onClick={() => {
                        setevttype("본인결혼");
                        setclgjgb("본인결혼");
                      }}
                      className={clgjgb === "본인결혼" ? "active" : ""}
                    >
                      <Heart size={13} color="#FFFFFF" />
                      본인결혼
                    </li>

                    <li
                      onClick={() => {
                        setevttype("자녀결혼");
                        setclgjgb("자녀결혼");
                      }}
                      className={clgjgb === "자녀결혼" ? "active" : ""}
                    >
                      <Heart size={13} color="#D1D5DB" />
                      자녀결혼
                    </li>

                    <li
                      onClick={() => {
                        setevttype("출산");
                        setclgjgb("출산");
                      }}
                      className={clgjgb === "출산" ? "active" : ""}
                    >
                      <Baby size={13} color="#D1D5DB" />
                      출산
                    </li>

                    <li
                      onClick={() => {
                        setevttype("부모사망");
                        setclgjgb("부모사망");
                      }}
                      className={clgjgb === "부모사망" ? "active" : ""}
                    >
                      <Flower2 size={13} color="#D1D5DB" />
                      부모사망
                    </li>

                    <li
                      onClick={() => {
                        setevttype("배우자사망");
                        setclgjgb("배우자사망");
                      }}
                      className={clgjgb === "배우자사망" ? "active" : ""}
                    >
                      <Flower2 size={13} color="#D1D5DB" />
                      배우자사망
                    </li>

                    <li
                      onClick={() => {
                        setevttype("부모회갑");
                        setclgjgb("부모회갑");
                      }}
                      className={clgjgb === "부모회갑" ? "active" : ""}
                    >
                      <CakeSlice size={13} color="#D1D5DB" />
                      부모회갑
                    </li>

                    <li
                      onClick={() => {
                        setevttype("기타");
                        setclgjgb("기타");
                      }}
                      className={clgjgb === "기타" ? "active" : ""}
                    >
                      <Ellipsis size={13} color="#D1D5DB" />
                      기타
                    </li>
                  </ul>
                  <p>
                    본인결혼 선택됨 · 지급기준액: <span> 500,000원</span>
                  </p>
                </label>
              </div>

              <div className="fmli"></div>

              <div className="gjdsjjb">
                <div className="formboxtp">
                  <h1 className="tptits">
                    <span></span>경조 대상자 정보
                  </h1>
                  <label name="bsfm" className="jgfm">
                    <p>대상자 성명 *</p>
                    <input
                      //onChange={(e) => setevtname(e.target.value)}
                      //onChange={(e) => setallevt({ tgname: e.target.value })}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") 경조사비신청하기();
                      }}
                      onChange={(e) =>
                        setallevt((prev) => {
                          return {
                            ...prev,
                            tgname: e.target.value,
                          };
                        })
                      }
                      type="text"
                      placeholder="성명을 입력하세요"
                    />
                  </label>
                  <label name="" className="jgfm">
                    <p>관계 *</p>
                    <select
                      onKeyDown={(e) => {
                        if (e.key === "Enter") 경조사비신청하기();
                      }}
                      name=""
                      id=""
                      //onChange={(e) => setevtgg(e.target.value)}
                      onChange={(e) =>
                        setallevt((prev) => {
                          return {
                            ...prev,
                            tggg: e.target.value,
                          };
                        })
                      }
                    >
                      <option value="본인">본인</option>
                      <option value="부">부</option>
                      <option value="모">모</option>
                      <option value="배우자">배우자</option>
                      <option value="자식">자식</option>
                      <option value="친척">친척</option>
                    </select>
                  </label>
                  <label name="" className="jgfm">
                    <p>경조일 *</p>
                    <input
                      onKeyDown={(e) => {
                        if (e.key === "Enter") 경조사비신청하기();
                      }}
                      type="date"
                      //onChange={(e) => setevtgji(e.target.value)}
                      onChange={(e) =>
                        setallevt((prev) => {
                          return {
                            ...prev,
                            eventDate: e.target.value,
                          };
                        })
                      }
                    />
                  </label>
                  <label name="" className="jgfm">
                    <p>경조 장소</p>
                    <input
                      onKeyDown={(e) => {
                        if (e.key === "Enter") 경조사비신청하기();
                      }}
                      type="text"
                      placeholder="장소를 입력하세요 (선택)"
                      //onChange={(e) => setevtgjjs(e.target.value)}
                      onChange={(e) =>
                        setallevt((prev) => {
                          return {
                            ...prev,
                            tggjjs: e.target.value,
                          };
                        })
                      }
                    />
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
                  <h1 className="tptits">
                    <span></span>지급 계좌 *
                  </h1>
                  <label name="bsfm" className="jgfm">
                    <p>은행</p>
                    <select
                      onKeyDown={(e) => {
                        if (e.key === "Enter") 경조사비신청하기();
                      }}
                      name=""
                      id=""
                      //onChange={(e) => setevtoh(e.target.value)}
                      onChange={(e) =>
                        setallevt((prev) => {
                          return {
                            ...prev,
                            tgoh: e.target.value,
                          };
                        })
                      }
                    >
                      <option value="국민은행">국민은행</option>
                      <option value="우리은행">우리은행</option>
                      <option value="토스뱅크">토스뱅크</option>
                      <option value="카카오뱅크">카카오뱅크</option>
                      <option value="농협은행">농협은행</option>
                      <option value="신한은행">신한은행</option>
                    </select>
                  </label>
                  <label name="" className="jgfm">
                    <p>계좌번호</p>
                    <input
                      onKeyDown={(e) => {
                        if (e.key === "Enter") 경조사비신청하기();
                      }}
                      type="text"
                      placeholder="- 없이 숫자만 입력"
                      //onChange={(e) => setevtgjbh(e.target.value)}
                      onChange={(e) =>
                        setallevt((prev) => {
                          return {
                            ...prev,
                            accoutNumber: e.target.value,
                          };
                        })
                      }
                    />
                  </label>
                  <label name="" className="jgfm">
                    <p>예금주</p>
                    <input
                      onKeyDown={(e) => {
                        if (e.key === "Enter") 경조사비신청하기();
                      }}
                      type="text"
                      //value={"이영희"}
                      placeholder="받는분 이름"
                      //onChange={(e) => setevtogj(e.target.value)}
                      onChange={(e) =>
                        setallevt((prev) => {
                          return {
                            ...prev,
                            tgogj: e.target.value,
                          };
                        })
                      }
                    />
                  </label>
                  <button>
                    <Check size={13} />
                    계좌 확인
                  </button>
                </div>
              </div>

              <div className="cmbpil">
                <h1 className="tptits">
                  <span></span>첨부파일
                </h1>
                <div className="cmbpilin">
                  <Paperclip size={18} color="#9CA3AF" />
                  <div className="cmbpiltt">
                    <h1>청첩장·출생증명서 등 관련 서류를 첨부해 주세요</h1>
                    <h2>PDF, JPG, PNG · 최대 10MB · 파일 3개까지</h2>
                  </div>

                  {/* 파일열기 */}
                  <input
                    type="file"
                    hidden
                    ref={upldref}
                    onChange={(e) => {
                      // 백엔드 API파일 전송
                      upld(e.target.files);
                      console.log("백엔드전송파일", e.target.files);
                    }}
                  />
                  <button
                    onClick={() => {
                      upldref.current.click();
                    }}
                  >
                    <Upload size={13} />
                    파일 선택
                  </button>
                </div>

                {uploadif?.name && (
                  <div className="cmbpilfl">
                    <div className="cmbpilfllft">
                      <FileText color="#3B82F6" size={15} />
                      <div className="cmbpilfllfttt">
                        <h1>{uploadif?.name}</h1>
                        <h2>
                          (받은값 계산해야함){uploadif?.size} KB · 업로드 완료
                        </h2>
                      </div>
                    </div>
                    <div className="cmbpilflret">
                      <span
                        onClick={() => {
                          setuploadif({});
                        }}
                      >
                        x
                      </span>
                      삭제
                    </div>
                  </div>
                )}

                <div className="formboxbt">
                  <h1>비고</h1>
                  <textarea
                    name=""
                    placeholder="추가 사항을 입력하세요. (선택)"
                    onChange={(e) =>
                      setallevt((prev) => {
                        return {
                          ...prev,
                          memo: e.target.value,
                        };
                      })
                    }
                  ></textarea>
                  <div className="fmbtns">
                    <button className="css">
                      <X size={13} />
                      취소
                    </button>
                    <button
                      className="jjs"
                      onClick={() => {
                        // console.log(
                        //   "클릭함",
                        //   allevt,
                        //   // evttype,
                        //   // evtname,
                        //   // evtgg,
                        //   // evtgji,
                        //   // evtgjjs,
                        //   // evtoh,
                        //   // evtgjbh,
                        //   // evtogj,
                        // );
                        경조사비신청하기();
                        gjblist();
                      }}
                    >
                      <SendHorizontal size={13} />
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
                나의 경조비 신청 현황
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
              {evtgjblist.map((it, idx) => (
                <ul key={idx}>
                  <li>{it.EmployeeEventSupportId}</li>
                  <li>{it.applicationDate}</li>
                  <li>
                    <span className={`${s.gb} ${s.bnin}`}>{it.eventType}</span>
                  </li>
                  <li>{it.targetName}</li>
                  <li>{it.familyRelation}</li>
                  <li>{it.eventDate}</li>
                  <li>500,000원</li>
                  <li>
                    {it.bankName} {it.accountNumber}
                  </li>
                  <li>
                    <span className={`${s.clst} ${s.gt}`}>검토중</span>
                  </li>
                  <li>
                    <span
                      className={`${s.sjs} ${s.glbtns}`}
                      onClick={() => {
                        경조비상세조회(it?.EmployeeEventSupportId);

                        console.log(it.EmployeeEventSupportId);
                      }}
                    >
                      상세
                    </span>
                  </li>
                </ul>
              ))}
              <ul>
                <li>만든거 1</li>
                <li>2025.07.01</li>
                <li>
                  <span className={`${s.gb} ${s.bnin}`}>본인결혼</span>
                </li>
                <li>이영희</li>
                <li>본인</li>
                <li>2025.07.20</li>
                <li>500,000원</li>
                <li>국민 12****-34</li>
                <li>
                  <span className={`${s.clst} ${s.gt}`}>검토중</span>
                </li>
                <li>
                  <span className={`${s.sjs} ${s.glbtns}`}>상세</span>
                </li>
              </ul>
              <ul>
                <li>2</li>
                <li>2025.03.10</li>
                <li>
                  <span className={`${s.gb} ${s.clsn}`}>출산</span>
                </li>
                <li>이준혁</li>
                <li>배우자</li>
                <li>2025.03.05</li>
                <li>300,000원</li>
                <li>국민 12****-34</li>
                <li>
                  <span className={`${s.clst} ${s.jg}`}>지급완료</span>
                </li>
                <li>
                  <span className={`${s.sjs} ${s.glbtns}`}>상세</span>
                </li>
              </ul>
              <ul>
                <li>3</li>
                <li>2024.11.22</li>
                <li>
                  <span className={`${s.gb} ${s.bmhg}`}>부모환갑</span>
                </li>
                <li>이○○</li>
                <li>부</li>
                <li>2024.11.30</li>
                <li>200,000원</li>
                <li>국민 12****-34</li>
                <li>
                  <span className={`${s.clst} ${s.jg}`}>지급완료</span>
                </li>
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
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Spinner className="size-8" />
        </div>
      )}
    </div>
  );
}
