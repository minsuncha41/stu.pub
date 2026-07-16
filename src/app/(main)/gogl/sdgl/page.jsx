"use client";

import "./Sdgl.css";
import aside from "../goglaside.json";

import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Table from "@/component/cmm/Table";
import Toptits from "@/component/cmm/Toptits";
import {
  AlertCircle,
  Award,
  BadgeCheck,
  Bookmark,
  Calendar,
  Check,
  ChevronRight,
  Clock,
  Download,
  Eye,
  FileText,
  Info,
  Layers,
  Lock,
  MoonStar,
  Paperclip,
  Plus,
  ReceiptText,
  Save,
  Search,
  ShieldCheck,
  Sigma,
  Star,
  Trash2,
  TrendingUp,
  Upload,
  Users,
  UsersRound,
  X,
} from "lucide-react";

export default function Sdgl() {
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

              <div className="btret">
                <span>2025년 7월</span>
                <div
                  className="titret"
                  onClick={() => {
                    popno();
                  }}
                >
                  <X size={14} />
                </div>
              </div>
            </div>
            <div className="mdin mdintp">
              <h1>
                <span>1</span>지급 기본정보
              </h1>
              <p></p>
              <h1>
                <span>2</span>지급 대상 선택
              </h1>
              <p></p>
              <h2>
                <span>3</span>첨부파일
              </h2>
            </div>
            <div className="mdin mdinmid">
              <h1 className="ttit">지급 기본정보</h1>
              <div className="lbbox">
                <label className="inputic inputicwt">
                  <p>
                    지급월<span>*</span>
                  </p>
                  <input type="text" value={"OT001"} />
                  <Calendar size={13} className="ic" />
                </label>
                <label className="inputic">
                  <p>수당 유형</p>
                  <input type="text" value={"OT001"} disabled readOnly />
                  <Lock size={13} className="ic" />
                </label>
                <label className="inputic inputicwt">
                  <p>
                    지급 금액<span>*</span>
                  </p>
                  <div className="jggo">
                    <input type="text" value={"OT001"} />
                    <b>원</b>
                  </div>
                  <h1>
                    <Info size={11} /> 일괄 동일 금액 지급 · 개별 설정은 직원
                    목록에서 변경
                  </h1>
                </label>
                <label className="inputic">
                  <p>
                    과세 부여<span>*</span>
                  </p>
                  <ul>
                    <li className="cled">
                      <ReceiptText size={12} />
                      과세
                    </li>
                    <li>
                      <ShieldCheck size={12} />
                      비과세
                    </li>
                  </ul>
                  <h2>
                    <span>●</span>과세 선택 시 소득세가 자동 공제됩니다
                  </h2>
                </label>
              </div>
              <label className="gjsu">
                <p>
                  지급 사유 <span>*</span>
                </p>
                <textarea
                  name=""
                  id=""
                  placeholder="지급 사유를 입력하세요. (예: 2025년 2분기 성과 우수 직원 포상)"
                ></textarea>
              </label>
            </div>

            <div className="lin"></div>

            <div className="mdin mdinjgds">
              <div className="ttbox">
                <h1 className="ttit">지급 대상 직원 선택</h1>
                <ul>
                  <li>
                    <Users size={13} />
                    3명 선택됨
                  </li>
                  <li>
                    <input type="checkbox" name="" id="" />
                    전체선택
                  </li>
                </ul>
              </div>
              <div className="fidbox">
                <select name="" id="">
                  <option value="">전체부서</option>
                  <option value="1">인사팀</option>
                  <option value="2">냉장</option>
                  <option value="3">IT</option>
                  <option value="4">물류</option>
                </select>
                <div className="fidboxinfputbox">
                  <input type="text" placeholder="사원 검색" />
                  <Search size={12} className="icon" />
                </div>
              </div>
              <ul>
                <ul>
                  <li>
                    <input type="checkbox" name="" id="" checked />
                  </li>
                  <li>성명</li>
                  <li>사원번호</li>
                  <li>부서</li>
                  <li>직급</li>
                  <li>개별 지급금액 (원)</li>
                </ul>

                <ul className="ckd">
                  <li>
                    <input type="checkbox" name="" id="" checked />
                  </li>
                  <li>
                    <span className="fn">김</span> 김철수
                  </li>
                  <li>EMP-001</li>
                  <li>인사팀</li>
                  <li>
                    <span className="sp">팀장</span>
                  </li>
                  <li>
                    <input type="text" />
                    <p>미선택</p>
                  </li>
                </ul>

                <ul className="ckd">
                  <li>
                    <input type="checkbox" name="" id="" />
                  </li>
                  <li>
                    <span className="fn">이</span> 이영희
                  </li>
                  <li>EMP-002</li>
                  <li>인사팀</li>
                  <li>
                    <span className="sp">차장</span>
                  </li>
                  <li>
                    <input type="text" />
                    <p>미선택</p>
                  </li>
                </ul>

                <ul className="">
                  <li>
                    <input type="checkbox" name="" id="" />
                  </li>
                  <li>
                    <span className="fn">박</span> 박민준
                  </li>
                  <li>EMP-003</li>
                  <li>개발팀</li>
                  <li>
                    <span className="sp">대리</span>
                  </li>
                  <li>
                    <input type="text" />
                    <p>미선택</p>
                  </li>
                </ul>

                <ul className="">
                  <li>
                    <input type="checkbox" name="" id="" />
                  </li>
                  <li>
                    <span className="fn">최</span> 최지영
                  </li>
                  <li>EMP-004</li>
                  <li>영업팀</li>
                  <li>
                    <span className="sp">사원</span>
                  </li>
                  <li>
                    <input type="text" />
                    <p>미선택</p>
                  </li>
                </ul>

                <ul className="ckd">
                  <li>
                    <input type="checkbox" name="" id="" checked />
                  </li>
                  <li>
                    <span className="fn">정</span> 정수빈
                  </li>
                  <li>EMP-005</li>
                  <li>개발팀</li>
                  <li>
                    <span className="sp so">사원</span>
                  </li>
                  <li>
                    <input type="text" className="so" />
                    <p>700,000</p>
                  </li>
                </ul>

                <ul className="">
                  <li>전체 5명 중 3명 선택</li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li>
                    <b>총 지급예정액</b>
                    <span className="sp">1,700,000원</span>
                  </li>
                </ul>
              </ul>
            </div>

            <div className="lin"></div>

            <div className="mdin cmbpil">
              <h1 className="ttit">
                첨부파일 <p>선택사항</p>
              </h1>
              <div className="cmbpilin">
                <Paperclip size={18} color="#9CA3AF" />
                <div className="cmbpiltt">
                  <h1>결재문서·지급증빙 파일을 첨부하세요</h1>
                  <h2>PDF, JPG, PNG · 최대 10MB · 파일 3개까지</h2>
                </div>

                {/* 파일열기 */}
                <input type="file" hidden />
                <button>
                  <Upload size={13} />
                  파일 선택
                </button>
              </div>
              <div className="cmbpilfl">
                <div className="cmbpilfllft">
                  <div className="icon">
                    <FileText color="#3B82F6" size={15} />
                  </div>
                  <div className="cmbpilfllfttt">
                    <h1>성과수당_결재문서_2025Q2.pdf</h1>
                    <h2>
                      1.2 MB {" | "} <Check size={10} />
                      업로드 완료
                    </h2>
                  </div>
                </div>
                <div className="cmbpilflret">
                  <span>x</span>
                  삭제
                </div>
              </div>
            </div>

            <div className="infobox">
              <Info size={14} />
              <h1>
                저장 전 확인사항
                <p>
                  저장 후 급여계산 시 해당 수당이 자동 반영됩니다. 확정 전
                  급여담당자 검토를 권장합니다.
                </p>
              </h1>
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

      <Nav num3={true} />

      <div className="inwrap">
        <Aside dummy={aside} idxs="1" subidxs="3" />

        <div className="main">
          <Toptits
            toptits={{
              ttmap: "급여관리",
              map: "급여관리",
              tit: "기본수당외수당관리",
              text: "기본급 외 수당 종류를 정의하고 직원별 지급 내역을 관리합니다.",
              tllbtn: "PDF 다운로드",
              trrbtn: "수당 추가",
            }}
            ttmapno="0"
            lftbtnClick={() => {
              pdfpopon();
            }}
            retbtnClick={() => {
              popon();
            }}
          />

          <ul className="findebox">
            <li>
              <p>등록 수당 종류</p>
              <h1>7종</h1>
              <span>활성 6 · 비활성 1</span>
            </li>
            <li>
              <p>과세 수당</p>
              <h1>4종</h1>
              <span>소득세 적용</span>
            </li>
            <li>
              <p>비과세 수당</p>
              <h1>3종</h1>
              <span>소득세 면제</span>
            </li>
            <li>
              <p>이번달 수당 총액</p>
              <h1>3,340,000원</h1>
              <span>8명 대상</span>
            </li>
            <li>
              <p>전월 대비</p>
              <h1>+120,000원</h1>
              <span>야근수당 증가</span>
            </li>
          </ul>

          <div className="mainin">
            <div className="lftbox">
              <div className="fromtit">
                <h1>
                  <Layers size={15} />
                  수당 종류 목록
                </h1>
                <div className="fromtitin">
                  <h2>7종</h2>
                </div>
              </div>
              <ul className="lftboxtb">
                <li className="cled">
                  <div className="lftboxtbintp">
                    <div className="lftboxic">
                      <MoonStar size={14} />
                    </div>
                    <div className="lftboxtt">
                      <h1>
                        야근수당
                        <span className="lftttsp hs">활성</span>
                      </h1>
                      <h2>시간당 10,000원 · 과세</h2>
                    </div>
                  </div>
                  <div className="lftboxtbinbt">
                    <span className="lftsp gs">과세</span>
                    <ChevronRight size={13} className="lftinbtic" />
                  </div>
                </li>

                <li className="">
                  <div className="lftboxtbintp">
                    <div className="lftboxic">
                      <Award size={14} />
                    </div>
                    <div className="lftboxtt">
                      <h1>
                        직책수당
                        <span className="lftttsp hs">활성</span>
                      </h1>
                      <h2>직책별 고정 지급 · 과세</h2>
                    </div>
                  </div>
                  <div className="lftboxtbinbt">
                    <span className="lftsp gs">과세</span>
                    <ChevronRight size={13} className="lftinbtic" />
                  </div>
                </li>

                <li className="">
                  <div className="lftboxtbintp">
                    <div className="lftboxic">
                      <BadgeCheck size={14} />
                    </div>
                    <div className="lftboxtt">
                      <h1>
                        자격증수당
                        <span className="lftttsp hs">활성</span>
                      </h1>
                      <h2>자격증 보유 시 월 50,000원 · 비과세</h2>
                    </div>
                  </div>
                  <div className="lftboxtbinbt">
                    <span className="lftsp bgs">비과세</span>
                    <ChevronRight size={13} className="lftinbtic" />
                  </div>
                </li>

                <li className="">
                  <div className="lftboxtbintp">
                    <div className="lftboxic">
                      <UsersRound size={14} />
                    </div>
                    <div className="lftboxtt">
                      <h1>
                        가족수당
                        <span className="lftttsp hs">활성</span>
                      </h1>
                      <h2>부양가족 1인당 30,000원 · 비과세</h2>
                    </div>
                  </div>
                  <div className="lftboxtbinbt">
                    <span className="lftsp bgs">비과세</span>
                    <ChevronRight size={13} className="lftinbtic" />
                  </div>
                </li>

                <li className="">
                  <div className="lftboxtbintp">
                    <div className="lftboxic">
                      <TrendingUp size={14} />
                    </div>
                    <div className="lftboxtt">
                      <h1>
                        장기근속수당
                        <span className="lftttsp hs">활성</span>
                      </h1>
                      <h2>5년 이상 월 100,000원 · 과세</h2>
                    </div>
                  </div>
                  <div className="lftboxtbinbt">
                    <span className="lftsp gs">과세</span>
                    <ChevronRight size={13} className="lftinbtic" />
                  </div>
                </li>

                <li className="">
                  <div className="lftboxtbintp">
                    <div className="lftboxic">
                      <Star size={14} />
                    </div>
                    <div className="lftboxtt">
                      <h1>
                        특별성과수당
                        <span className="lftttsp hs">활성</span>
                      </h1>
                      <h2>비정기 지급 · 과세</h2>
                    </div>
                  </div>
                  <div className="lftboxtbinbt">
                    <span className="lftsp gs">과세</span>
                    <ChevronRight size={13} className="lftinbtic" />
                  </div>
                </li>

                <li className="bhs">
                  <div className="lftboxtbintp">
                    <div className="lftboxic">
                      <Calendar size={14} />
                    </div>
                    <div className="lftboxtt">
                      <h1>
                        휴일근무수당
                        <span className="lftttsp hs">비활성</span>
                      </h1>
                      <h2>직책별 고정 지급 · 과세</h2>
                    </div>
                  </div>
                  <div className="lftboxtbinbt">
                    <span className="lftsp gs">과세</span>
                    <ChevronRight size={13} className="lftinbtic" />
                  </div>
                </li>
              </ul>
            </div>

            <div className="retbox">
              <div className="rettit">
                <div className="rettitret">
                  <div className="lftboxic">
                    <Calendar size={14} />
                  </div>
                  <h1>
                    야근수당 상세 설정
                    <p>Overtime Allowance</p>
                  </h1>
                </div>
                <div className="rettitlft">
                  <p>
                    <span>●</span>활성
                  </p>
                  <div className="tgbtnbox">
                    <div className="tgbtn">
                      <div className="tgs"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="retboxtb">
                <div className="retboxtbtp">
                  <h1 className="retboxtbtit">
                    <p></p>기본 설정
                  </h1>
                  <div className="retboxtbin">
                    <label>
                      <p>수당명</p>
                      <input type="text" value={"야근수당"} />
                    </label>
                    <label className="inputic">
                      <p>수당코드</p>
                      <input type="text" value={"OT001"} />
                      <Lock size={12} className="ic" />
                    </label>
                  </div>
                  <div className="retboxtbin">
                    <label>
                      <p>
                        계산 방식 <span className="str">*</span>
                      </p>
                      <ul className="gsbs">
                        <li className="cled">
                          <Clock size={12} />
                          시간당
                        </li>
                        <li>
                          <Calendar size={12} />
                          일당
                        </li>
                        <li>
                          <Bookmark size={12} />
                          고정금액
                        </li>
                      </ul>
                    </label>
                    <label className="sgddg">
                      <p>
                        시간당 단가 <span className="str">*</span>
                      </p>
                      <input type="text" value={"10,000"} />
                      <span>원 / 시간 </span>
                    </label>
                  </div>

                  <div className="retboxtbin">
                    <label>
                      <p>과세 여부</p>
                      <ul className="gsbs2">
                        <li className="cled">
                          <ReceiptText size={12} />
                          과세
                        </li>
                        <li>
                          <ShieldCheck size={12} />
                          비과세
                        </li>
                      </ul>
                    </label>
                    <label className="inputic">
                      <p>급여 자동반영</p>
                      <input type="text" value={"근태 데이터 연동"} />
                      <div className="ic goic">
                        <div className="tgbtn">
                          <div className="tgs"></div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="libr"></div>

                <div className="retboxtbtp">
                  <h1 className="retboxtbtit">
                    <p></p>기본 설정
                  </h1>
                  <ul className="jojgbo">
                    <li className="none">
                      <span>●</span>임원
                    </li>
                    <li className="">
                      <span>●</span>부장
                    </li>
                    <li className="">
                      <span>●</span>차장
                    </li>
                    <li className="">
                      <span>●</span>과장
                    </li>
                    <li className="">
                      <span>●</span>대리
                    </li>
                    <li className="">
                      <span>●</span>사원
                    </li>
                  </ul>
                </div>

                <div className="libr"></div>

                <div className="retboxtbtp">
                  <h1 className="retboxtbtit">
                    <p></p>한도 및 조건 설정
                  </h1>
                  <div className="retboxtbin">
                    <label>
                      <p>월 최대 시간</p>
                      <input type="text" value={"52"} />
                    </label>
                    <span>시간</span>
                    <label>
                      <p>최소 인정 시간</p>
                      <input type="text" value={"52"} />
                    </label>
                    <span>시간</span>
                    <label>
                      <p>계산 단위</p>
                      <select name="" id="">
                        <option value="bdo1">30분단위</option>
                        <option value="bdo2">60분단위</option>
                        <option value="bdo3">120분단위</option>
                        <option value="bdo4">180분단위</option>
                      </select>
                    </label>
                  </div>
                  <div className="inf">
                    <AlertCircle size={12} />
                    <span>
                      월 최대 52시간 이상 입력 시 경고 알림이 발송됩니다.
                    </span>
                  </div>
                </div>

                <div className="libr"></div>

                <div className="retboxtbbtns">
                  <button className="trbtn">
                    <Trash2 size={13} />
                    삭제
                  </button>
                  <button className="xxbtn">
                    <X size={13} />
                    취소
                  </button>
                  <button className="svbtn">
                    <Save size={13} />
                    저장
                  </button>
                </div>
              </div>

              <div className="retbtbt">
                <div className="fromtit">
                  <h1>
                    <Clock size={15} />
                    이번달 야근수당 지급 현황 (2025.07)
                  </h1>
                  <div className="fromtitin">
                    <select className="ttse">
                      <option value="ndo1">2025.07</option>
                      <option value="ndo2">2025.08</option>
                      <option value="ndo3">2025.09</option>
                      <option value="ndo4">2025.10</option>
                    </select>
                    <h2>5명 지급</h2>
                    <button className="ttbtn">
                      <Plus size={11} />
                      지급추가
                    </button>
                  </div>
                </div>
                <div className="tbs">
                  <ul>
                    <li>성명</li>
                    <li>부서</li>
                    <li>직급</li>
                    <li>야근시간</li>
                    <li>단가 (원/h)</li>
                    <li>지급액 (원)</li>
                    <li>과세구분</li>
                    <li>처리상태</li>
                    <li>관리</li>
                  </ul>
                  <ul>
                    <li>김철수</li>
                    <li>인사팀</li>
                    <li>팀장</li>
                    <li>25h</li>
                    <li>10,000</li>
                    <li>250,000</li>
                    <li>
                      <span className="tbsp gs">과세</span>
                    </li>
                    <li>
                      <span className="tbsp hj">확정</span>
                    </li>
                    <li>
                      <span className="tbspgl sj">수정</span>
                      <span className="tbspgl del">삭제</span>
                    </li>
                  </ul>
                  <ul>
                    <li>김철수</li>
                    <li>인사팀</li>
                    <li>팀장</li>
                    <li>25h</li>
                    <li>10,000</li>
                    <li>250,000</li>
                    <li>
                      <span className="tbsp gs">과세</span>
                    </li>
                    <li>
                      <span className="tbsp dg">대기</span>
                    </li>
                    <li>
                      <span className="tbspgl sj">수정</span>
                      <span className="tbspgl del">삭제</span>
                    </li>
                  </ul>
                  <ul>
                    <li>김철수</li>
                    <li>인사팀</li>
                    <li>팀장</li>
                    <li>25h</li>
                    <li>10,000</li>
                    <li>250,000</li>
                    <li>
                      <span className="tbsp gs">과세</span>
                    </li>
                    <li>
                      <span className="tbsp hj">확정</span>
                    </li>
                    <li>
                      <span className="tbspgl sj">수정</span>
                      <span className="tbspgl del">삭제</span>
                    </li>
                  </ul>

                  <ul className="tbhg">
                    <li></li>
                    <li></li>
                    <li>
                      <Sigma size={12} />
                      합계
                    </li>
                    <li>1,170h</li>
                    <li>
                      <p>-</p>
                    </li>
                    <li>1,170,000</li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
