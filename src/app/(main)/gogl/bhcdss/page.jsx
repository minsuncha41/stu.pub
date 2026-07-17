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
  AlertCircle,
  Calendar,
  Clock,
  Download,
  Eye,
  EyeOff,
  FileText,
  Info,
  Lock,
  MapPin,
  Pencil,
  Phone,
  Printer,
  RotateCcw,
  Save,
  Search,
  Shield,
  Star,
  TableIcon,
  Trash2,
  TrendingDown,
  TrendingUp,
  UserRoundMinus,
  UserRoundPlus,
  Users,
  X,
  Zap,
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
  return (
    <div className="wrap">
      <Nav num3={true} />
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
                <Star className="incs" size={16} color="#FCD34D" />
                <p>
                  특별성과수당 지급등록
                  <span>Special Performance Allowance</span>
                </p>
              </div>
            </div>

            <div className="mdtop">
              <div className="mdtoptop">
                <b>강</b>
                <ul>
                  <ul>
                    <li>
                      <h1>강다은</h1>
                    </li>
                    <li>
                      <span>취득대상</span>
                    </li>
                    <li>
                      <span>
                        <Info size={10} /> 신고기한 임박
                      </span>
                    </li>
                  </ul>
                  <ul>
                    <li>EMP-009</li>
                    <li>|</li>
                    <li>개발팀</li>
                    <li>|</li>
                    <li>사원</li>
                    <li>|</li>
                    <li>입사일 2025.07.10</li>
                  </ul>
                </ul>
              </div>

              <div className="mdtopbtom">
                <div className="mdtopbtombox">
                  <ul>
                    <li>
                      <Clock size={14} />
                      신고기한
                    </li>
                    <li>
                      <b>D-5</b>
                      2025.07.14
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mdin">
              <h1 className="ttit">
                지급 기본정보 <span>복수 선택 가능</span>
              </h1>
              <ul>
                <ul className="ckd">
                  <li>
                    <input type="checkbox" name="" id="" />
                    <div className="icon">
                      <Shield size={15} />
                    </div>
                    <h1>
                      국민연금 취득신고서
                      <p>국민연금공단 제출용 · 취득일로부터 14일 이내</p>
                    </h1>
                  </li>
                  <li>
                    <span className="pd">NPS-001</span>
                    <h4>{">"}</h4>
                  </li>
                </ul>

                <ul className="ckd">
                  <li>
                    <input type="checkbox" name="" id="" />
                    <div className="icon">
                      <Shield size={15} />
                    </div>
                    <h1>
                      국민연금 취득신고서
                      <p>국민연금공단 제출용 · 취득일로부터 14일 이내</p>
                    </h1>
                  </li>
                  <li>
                    <span className="pd">NPS-001</span>
                    <h4>{">"}</h4>
                  </li>
                </ul>

                <ul className="ckd">
                  <li>
                    <input type="checkbox" name="" id="" />
                    <div className="icon">
                      <Shield size={15} />
                    </div>
                    <h1>
                      국민연금 취득신고서
                      <p>국민연금공단 제출용 · 취득일로부터 14일 이내</p>
                    </h1>
                  </li>
                  <li>
                    <span className="pd">NPS-001</span>
                    <h4>{">"}</h4>
                  </li>
                </ul>

                <ul className="">
                  <li>
                    <input type="checkbox" name="" id="" />
                    <div className="icon">
                      <Shield size={15} />
                    </div>
                    <h1>
                      국민연금 취득신고서
                      <p>국민연금공단 제출용 · 취득일로부터 14일 이내</p>
                    </h1>
                  </li>
                  <li>
                    <span className="pd">미해당</span>
                    <h4>{">"}</h4>
                  </li>
                </ul>
              </ul>
            </div>

            <div className="mdin jggbjb">
              <h1 className="ttit">
                지급 기본정보{" "}
                <span>
                  <Zap size={10} />
                  자동완성
                </span>
              </h1>
              <div className="lbbox">
                <label className="inputic ">
                  <p>성명</p>
                  <input type="text" value={"강다은"} disabled readOnly />
                  <Lock size={13} className="ic" />
                </label>
                <label className="inputic">
                  <p>성별</p>
                  <input type="text" value={"여"} disabled readOnly />
                  <Lock size={13} className="ic" />
                </label>

                <label className="inputic inputicwt">
                  <p>
                    주민등록번호<span>*</span>
                  </p>
                  <input type="text" value={"981205-2●●●●●●"} />
                  <EyeOff size={13} className="ic" />
                </label>
                <label className="inputic">
                  <p>국적</p>
                  <input type="text" value={"대한민국"} disabled readOnly />
                  <Lock size={13} className="ic" />
                </label>

                <label className="inputic ">
                  <p>
                    취득일 (입사일)<span>*</span>
                  </p>
                  <input type="text" value={"2025.07.10"} disabled readOnly />
                  <Lock size={13} className="ic" />
                </label>
                <label className="inputic inputicwt">
                  <p>
                    기준소득월액
                    <span>*</span>
                  </p>
                  <input type="text" value={"2,800,000원"} />
                  <Pencil size={13} className="ic" />
                </label>

                <label className="inputic ">
                  <p>직종</p>
                  <input type="text" value={"일반직"} disabled readOnly />
                  <Lock size={13} className="ic" />
                </label>
                <label className="inputic">
                  <p>고용형태</p>
                  <input type="text" value={"정규직"} disabled readOnly />
                  <Lock size={13} className="ic" />
                </label>
              </div>
              <span>
                <Info size={12} />
                자물쇠 항목은 인사정보에서 자동 불러온 값입니다. 기준소득월액은
                직접 수정할 수 있습니다.
              </span>
            </div>

            <div className="mdin sgggjb">
              <h1 className="ttit">신고기관 정보</h1>
              <ul>
                <ul>
                  <li>
                    <div className="">
                      <div className="box"></div>
                      <h1>국민연금공단</h1>
                    </div>

                    <span>팩스 가능</span>
                  </li>
                  <li>
                    <p>
                      <MapPin size={10} />
                      서울강남지사
                    </p>
                    <p>
                      <Phone size={10} />
                      1355
                    </p>
                    <p>
                      <Printer size={10} />
                      02-123-4567
                    </p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div className="">
                      <div className="box"></div>
                      <h1>국민연금공단</h1>
                    </div>

                    <span>팩스 가능</span>
                  </li>
                  <li>
                    <p>
                      <MapPin size={10} />
                      서울강남지사
                    </p>
                    <p>
                      <Phone size={10} />
                      1355
                    </p>
                    <p>
                      <Printer size={10} />
                      02-123-4567
                    </p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <div className="">
                      <div className="box"></div>
                      <h1>국민연금공단</h1>
                    </div>

                    <span>팩스 가능</span>
                  </li>
                  <li>
                    <p>
                      <MapPin size={10} />
                      서울강남지사
                    </p>
                    <p>
                      <Phone size={10} />
                      1355
                    </p>
                    <p>
                      <Printer size={10} />
                      02-123-4567
                    </p>
                  </li>
                </ul>
              </ul>
            </div>

            <div className="mdin psjssj">
              <h1 className="ttit">팩스 전송 설정</h1>
              <div className="lbbox">
                <label className="inputic inputicwt">
                  <p>수신 팩스번호</p>
                  <select name="" id="">
                    <option value="">기관 선택 후 자동입력</option>
                    <option value="1">1기관</option>
                    <option value="2">2기관</option>
                    <option value="3">3기관</option>
                  </select>
                </label>
                <label className="inputic inputicwt">
                  <p>발신 팩스번호</p>
                  <input type="text" value={"02-000-0000"} />
                </label>
              </div>
              <span>
                <Info size={12} />
                자물쇠 항목은 인사정보에서 자동 불러온 값입니다. 기준소득월액은
                직접 수정할 수 있습니다.
              </span>
            </div>

            <div className="btlft">
              <h1>
                <p>
                  <span>*</span>
                  필수 입력 항목<>{" | "}</>
                </p>
                <b>
                  <Users size={12} />
                  3명 · 총 1,700,000원
                </b>
              </h1>
              <div className="btret">
                <button className="imibtn">
                  <Eye size={14} />
                  미리보기
                </button>
                <button
                  className=" dgbtn"
                  onClick={() => {
                    popno();
                  }}
                >
                  <X size={14} />
                  취소
                </button>
                <button
                  className="jjbtn"
                  onClick={() => {
                    popno();
                  }}
                >
                  <Save size={14} />
                  저장하기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="inwrap">
        <RegisterSalaryInfoModal
          className="modal"
          open={openRegisterModal}
          setOpen={setOpenRegisterModal}
          bhcdss="0"
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
              <span>신고완료 2 · 미신고 1</span>
            </li>
            <li>
              <p>
                <UserRoundMinus color="red" size={14} />
                이달 상실
              </p>{" "}
              <h1>1명</h1>
              <span>신고완료 1 · 미신고 0</span>
            </li>
            <li>
              <p>
                {" "}
                <AlertCircle size={14} />
                미신고 건수
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
                  <span className="sgs" onClick={popon}>
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
