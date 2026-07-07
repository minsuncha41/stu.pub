"use client";

import "./bhcdss.css";
import aside from "../goglaside.json";

import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Table from "@/component/cmm/Table";
import Toptits from "@/component/cmm/Toptits";
import RegisterSalaryInfoModal from "@/component/cmm/RegisterSalaryInfoModal";

import {
  AlarmClock,
  AlertCircle,
  Baby,
  Banknote,
  BookOpen,
  CakeSlice,
  Calculator,
  Calendar,
  CalendarCheck,
  CalendarPlus,
  Check,
  CheckCheck,
  ChevronLeft,
  ChevronRight,
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
  HeartPulse,
  ListChecks,
  LogOut,
  MoonStar,
  Paperclip,
  Pencil,
  Plane,
  Plus,
  Printer,
  RotateCcw,
  Save,
  SaveAll,
  SaveOff,
  Search,
  SendHorizontal,
  ShieldCheck,
  Sigma,
  Star,
  Sun,
  TableIcon,
  Trash2,
  TrendingDown,
  TrendingUp,
  Upload,
  User2,
  UserRoundMinus,
  UserRoundPlus,
  Users,
  X,
} from "lucide-react";

export default function Bhcdss() {
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
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  return (
    <div className="wrap">
      <Nav num3={true} />

      <div className="inwrap">
        <RegisterSalaryInfoModal
          className="modal"
          open={openRegisterModal}
          setOpen={setOpenRegisterModal}
        />
        <Aside dummy={aside} idxs="2" subidxs="5" />

        <div className="main">
          <Toptits
            toptits={{
              ttmap: "급여관리",
              map: "4대보험관리",
              tit: "4대보험 취득/상실 내역",
              text: "입사·퇴사에 따른 4대보험 취득·상실 내역을 조회하고 신고서를 출력합니다.",
              tllbtn: "PDF 다운로드",
              trrbtn: "취득/상실 등록",
            }}
            retbtnClick={() => setOpenRegisterModal(true)}
            sgsbtnon="0"
          />

          <ul className="findebox">
            <li>
              <p>
                <UserRoundPlus size={14} />
                이달 취득
              </p>{" "}
              <h1>3명</h1>
              <span>신고완료 2 · 신고완료 1</span>
            </li>
            <li>
              <p>
                <UserRoundMinus color="red" size={14} />
                이달 상실
              </p>{" "}
              <h1>1명</h1>
              <span>신고완료 1 · 신고완료 0</span>
            </li>
            <li>
              <p>
                {" "}
                <AlertCircle size={14} />
                신고완료 건수
              </p>
              <h1>1건</h1>
              <span>신고기한 임박 확인</span>
            </li>
            <li>
              <p>
                <Clock size={14} />
                신고기한
              </p>
              <h1>D-5</h1>
              <span>2025.07.14 마감</span>
            </li>

            <li>
              <p>
                <TrendingUp size={14} />
                연간 누적 취득
              </p>
              <h1>12명</h1>
              <span>2025년 1~7월 기준</span>
            </li>
            <li>
              <p>
                <TrendingDown size={14} />
                연간 누적 상실
              </p>
              <h1>4명</h1>
              <span>2025년 1~7월 기준</span>
            </li>
          </ul>

          <div className="findeboxss">
            <div className="findeboxlft">
              <label className="lbl">
                <p>기간</p>
                <input type="date" name="" id="" />
                <span>~</span>
                <input type="date" name="" id="" />
              </label>

              <label className="lbl">
                <ul className="inputgo">
                  <li>1개월</li>
                  <li>3개월</li>
                  <li className="atv">올해</li>
                </ul>
              </label>

              <label className="lbl">
                <p>유형</p>
                <ul className="inputoh">
                  <li className="atv">전체</li>
                  <li>
                    <span>●</span>취득
                  </li>
                  <li>
                    <span>●</span>상실
                  </li>
                </ul>
              </label>

              <label className="lbl">
                <p>신고여부</p>
                <select>
                  {" "}
                  <option value="">전체</option>
                  <option value="신고완료">신고완료</option>
                  <option value="신고완료">신고완료</option>
                </select>
              </label>

              <label className="lbl lblic">
                <Search className="inlblic" size={13} color="#9CA3AF" />
                <input type="text" placeholder="사원명 검색" />
              </label>
              <button className="fdbtns jh">
                <Search className="icone" size={13} />
                조회
              </button>
              <button className="fdbtns cgh">
                <RotateCcw className="icone" size={13} />
                초기화
              </button>
            </div>
          </div>

          <div className="tbs">
            <div className="fromtit">
              <h1>
                <TableIcon size={15} />
                4대보험 취득/상실 이력 (2025년)
              </h1>
              <div className="fromtitin">
                <h2>총 16명</h2>
                <label className="fromtitinbox">
                  <input type="checkbox" name="" id="" />
                  전체선택
                </label>
                <div className="fromtitinbox prt">
                  <Printer size={11} />
                  선택 신고서출력
                </div>
              </div>
            </div>
            <div className="tbin">
              <ul>
                <li>
                  <input type="checkbox" name="" id="" checked />
                </li>
                <li>취득/상실</li>
                <li>사원번호</li>
                <li>성명</li>
                <li>부서/직급</li>
                <li>취득일</li>
                <li>상실일</li>
                <li>보험 종류</li>
                <li>취득/상실 사유</li>
                <li>신고여부</li>
                <li>신고일</li>
                <li>관리</li>
              </ul>

              <ul className="cled">
                <li>
                  <input type="checkbox" name="" id="" />
                </li>
                <li className="cdss cd">
                  <span>
                    <s>●</s> 취득
                  </span>
                </li>
                <li>EMP-009</li>
                <li className="alt">
                  강다은{" "}
                  <span>
                    <AlertCircle size={10} />
                  </span>
                </li>
                <li className="bsjg">
                  개발팀
                  <span>사원</span>
                </li>
                <li className="cdo cd">2025.07.10</li>
                <li className="sso">
                  <p>-</p>
                </li>
                <li className="bhjl">
                  <span>국민연금</span>
                  <span>건강보험</span>
                  <span>고용보험</span>
                  <span>산재보험</span>
                </li>
                <li>신규입사</li>
                <li className="sgob msg">
                  <span>
                    <s>●</s>미신고
                  </span>
                </li>
                <li className="sgo day">
                  {" "}
                  <span>
                    <Clock size={9} /> D-5
                  </span>
                </li>
                <li className="gl">
                  <span className="sgs">
                    <FileText size={10} />
                    신고서
                  </span>
                  <span className="sg">
                    <Pencil size={10} />
                    수정
                  </span>
                </li>
              </ul>

              <ul>
                <li>
                  <input type="checkbox" name="" id="" />
                </li>
                <li className="cdss cd">
                  <span>
                    <s>●</s> 취득
                  </span>
                </li>
                <li>EMP-008</li>
                <li className="alt">오준혁</li>
                <li className="bsjg">
                  개발팀
                  <span>과장</span>
                </li>
                <li className="cdo cd">2025.07.02</li>
                <li className="sso">
                  <p>-</p>
                </li>
                <li className="bhjl">
                  <span>국민연금</span>
                  <span>건강보험</span>
                  <span>고용보험</span>
                  <span>산재보험</span>
                </li>
                <li>신규입사</li>
                <li className="sgob sgol">
                  <span>
                    <s>●</s>신고완료
                  </span>
                </li>
                <li className="sgo">2025.07.04</li>
                <li className="gl">
                  <span className="sgs">
                    <FileText size={10} />
                    신고서
                  </span>
                  <span className="sg">
                    <Pencil size={10} />
                    수정
                  </span>
                </li>
              </ul>

              <ul>
                <li>
                  <input type="checkbox" name="" id="" />
                </li>
                <li className="cdss ss">
                  <span>
                    <s>●</s> 상실
                  </span>
                </li>
                <li>EMP-007</li>
                <li className="alt">류성민</li>
                <li className="bsjg">
                  영업팀
                  <span>대리</span>
                </li>
                <li className="cdo">2023.03.15</li>
                <li className="sso day">2025.06.30</li>
                <li className="bhjl">
                  <span>국민연금</span>
                  <span>건강보험</span>
                  <span>고용보험</span>
                  <span>산재보험</span>
                </li>
                <li>자진퇴사</li>
                <li className="sgob sgol">
                  <span>
                    <s>●</s>신고완료
                  </span>
                </li>
                <li className="sgo day">2025.07.03</li>
                <li className="gl">
                  <span className="sgs">
                    <FileText size={10} />
                    신고서
                  </span>
                  <span className="sg">
                    <Pencil size={10} />
                    수정
                  </span>
                </li>
              </ul>

              <ul>
                <li>
                  <input type="checkbox" name="" id="" />
                </li>
                <li className="cdss cd">
                  <span>
                    <s>●</s> 취득
                  </span>
                </li>
                <li>EMP-010</li>
                <li className="alt">임소연</li>
                <li className="bsjg">
                  경영지원팀 <span>사원</span>
                </li>
                <li className="cdo cd">2025.07.07</li>
                <li className="sso">
                  <p>-</p>
                </li>
                <li className="bhjl">
                  <span>국민연금</span>
                  <span>건강보험</span>
                  <span>고용보험</span>
                  <span>산재보험</span>
                </li>
                <li>신규입사</li>
                <li className="sgob sgol">
                  <span>
                    <s>●</s>신고완료
                  </span>
                </li>
                <li className="sgo day">2025.07.09</li>
                <li className="gl">
                  <span className="sgs">
                    <FileText size={10} />
                    신고서
                  </span>
                  <span className="sg">
                    <Pencil size={10} />
                    수정
                  </span>
                </li>
              </ul>

              <ul>
                <li>
                  <input type="checkbox" name="" id="" />
                </li>
                <li className="cdss ss">
                  <span>
                    <s>●</s> 상실
                  </span>
                </li>
                <li>EMP-006</li>
                <li className="alt">한지민</li>
                <li className="bsjg">
                  영업팀
                  <span>대리</span>
                </li>
                <li className="cdo">2022.01.10</li>
                <li className="sso day">2025.05.31</li>
                <li className="bhjl">
                  <span>국민연금</span>
                  <span>건강보험</span>
                  <span>고용보험</span>
                </li>
                <li>계약만료</li>
                <li className="sgob sgol">
                  <span>
                    <s>●</s>신고완료
                  </span>
                </li>
                <li className="sgo day">2025.06.02</li>
                <li className="gl">
                  <span className="sgs">
                    <FileText size={10} />
                    신고서
                  </span>
                  <span className="del">
                    <Trash2 size={10} />
                    삭제
                  </span>
                </li>
              </ul>

              <ul className="textsbtns">
                <li>
                  <h2>총 16건 (취득 12건 · 상실 4건)</h2>
                  <div className="br"></div>
                  <div className="ttrettt">
                    <p>
                      <AlertCircle size={11} /> 미신고 1건 · EMP-009 강다은 —
                      신고기한 2025.07.14
                    </p>
                  </div>
                </li>
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
                  <span className="">2</span>
                  <span className="">3</span>
                  <span>&gt;</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
