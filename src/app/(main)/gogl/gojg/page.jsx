"use client";

import "./Gojg.css";
import aside from "../goglaside.json";

import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Toptits from "@/component/cmm/Toptits";
import {
  ArrowDown,
  ArrowUp,
  Banknote,
  Calendar,
  CalendarCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  InfoIcon,
  Mail,
  Printer,
  Quote,
  ReceiptText,
  RotateCcw,
  Save,
  Search,
  ShieldCheck,
  Sigma,
  TableIcon,
  TrendingDown,
  TrendingUp,
  UserPlus,
  X,
} from "lucide-react";

export default function Gojg() {
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
                <ReceiptText size={18} color="#3B82F6" />
                <p>
                  급여명세서
                  <span>Salary Statement</span>
                </p>
              </div>

              <div className="btret">
                <span>2025년 7월분</span>
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

            <div className="mdintp">
              <div className="mdintpret">
                <div className="icbox">HR</div>
                <p>
                  주식회사 HRSystem <br />{" "}
                  <span>사업자등록번호: 123-45-67890 | 대표: 홍길동</span>
                </p>
              </div>
              <div className="mdintplft">
                <p># PAY-2025-07-0008</p>
                <span> {" | "} </span>{" "}
                <p>
                  <Calendar size={11} />
                  2025.08.01
                </p>
              </div>
            </div>

            <div className="mdinsgj">
              <h1 className="ttit">수급자 정보</h1>
              <ul>
                <ul>
                  <li>성명</li>
                  <li>
                    {" "}
                    <span className="fn">박</span> 박민준
                  </li>
                  <li>사원번호</li>
                  <li>EMP-003</li>
                </ul>

                <ul>
                  <li>부서</li>
                  <li>개발팀</li>
                  <li>직급</li>
                  <li>대리</li>
                </ul>

                <ul>
                  <li>지급연월</li>
                  <li>2025.07 (7.25 지급)</li>
                  <li>근속연수</li>
                  <li>3년 11개월</li>
                </ul>
              </ul>
            </div>

            <div className="hmtb">
              <ul>
                <li>
                  <h1>
                    <TrendingUp size={12} />
                    지급항목
                  </h1>
                  <h2>금액 (원)</h2>
                </li>
                <li>
                  <h1>
                    <p>●</p>기본급
                  </h1>
                  <h2>3,500,000</h2>
                </li>
                <li>
                  <h1>
                    <p>●</p>식대
                  </h1>
                  <h2>200,000</h2>
                </li>
                <li>
                  <h1>
                    <p>●</p>교통비
                  </h1>
                  <h2>150,000</h2>
                </li>
                <li>
                  <h1>
                    <p>●</p>야근수당
                  </h1>
                  <h2>350,000</h2>
                </li>
                <li>
                  <h1>
                    <p>●</p>직책수당
                  </h1>
                  <h2>-</h2>
                </li>
                <li>
                  <h1>지급합계</h1>
                  <h2>4,200,000</h2>
                </li>
              </ul>

              <ul>
                <li>
                  <h1>
                    <TrendingDown size={12} />
                    공제항목
                  </h1>
                  <h2>금액 (원)</h2>
                </li>
                <li>
                  <h1>
                    <p>●</p>국민연금 (4.5%)
                  </h1>
                  <h2>157,500</h2>
                </li>
                <li>
                  <h1>
                    <p>●</p>건강보험 (3.98%)
                  </h1>
                  <h2>139,300</h2>
                </li>
                <li>
                  <h1>
                    <p>●</p>고용보험 (0.9%)
                  </h1>
                  <h2>37,800</h2>
                </li>
                <li>
                  <h1>
                    <p>●</p>소득세
                  </h1>
                  <h2>88,000</h2>
                </li>
                <li>
                  <h1>
                    <p>●</p>지방소득세 (10%)
                  </h1>
                  <h2>8,800</h2>
                </li>
                <li>
                  <h1>공제합계</h1>
                  <h2>431,400</h2>
                </li>
              </ul>
            </div>

            <div className="sjgo">
              <div className="sjgotop">
                <div className="sjgoret">
                  <div className="sjgorettop">
                    <div className="icbox">
                      <Banknote size={13} />
                    </div>
                    <h1>실 지급액</h1>
                  </div>
                  <p>4,200,000 - 431,400</p>
                </div>
                <div className="sjgolft">
                  <h1>
                    3,768,600
                    <p>원 (KRW)</p>
                  </h1>
                </div>
              </div>
              <div className="sjgomid">
                <h1 className="sjgomidbox">
                  <Quote size={11} />
                  삼백칠십육만팔천육백원정 (₩3,768,600)
                </h1>
              </div>
              <div className="sjgomidbtm">
                <h1>
                  <ArrowUp size={10} />
                  지급 4,200,000원
                </h1>
                <p>ㅡ</p>
                <h2>
                  <ArrowDown size={10} />
                  공제 431,400원
                </h2>
                <p>=</p>
                <h3>
                  <Check size={10} />
                  실지급 3,768,600원
                </h3>
              </div>
            </div>
            <div className="sjgobtm">
              <div className="sjgobtmtop">
                <h1>
                  <CalendarCheck size={12} />
                  7월 근태 요약
                </h1>
                <h2>
                  <b>
                    <span>●</span>출근 20일
                  </b>
                  <p>|</p>
                  <b>
                    <span>●</span>연차 1일
                  </b>
                  <p>|</p>
                  <b>
                    <span>●</span>야근 7시간
                  </b>
                  <p>|</p>
                  <b>
                    <span>●</span>지각 0회
                  </b>
                </h2>
              </div>
              <div className="sjgobtmmid">
                <h1 className="ttit">확인 및 직인</h1>
                <div className="sjgobtmmidmid">
                  <h1>
                    <p>위 금액을 급여로 지급함을 확인합니다.</p>
                    <p>지급일: 2025년 7월 25일</p>
                    <b>주식회사 HRSystem 대표이사 홍 길 동 (인)</b>
                  </h1>
                  <div className="djbox">
                    <div className="dj">
                      <h2>직인</h2>
                    </div>
                  </div>
                </div>
                <span>
                  <InfoIcon size={12} />본 명세서는 전자문서로 발행되었으며
                  위변조 시 법적 처벌을 받을 수 있습니다.
                </span>
              </div>
            </div>

            <div className="btlft">
              <h1>
                <b>
                  <ShieldCheck size={12} />
                  전자문서 인증완료
                </b>
                <p>CERT-2025-0089</p>
              </h1>
              <div className="btret">
                <button className="imibtn">
                  <Mail size={14} />
                  이메일 발송
                </button>
                <button className="jjbtn">
                  <Printer size={14} />
                  인쇄
                </button>
                <button
                  className="dgbtn"
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

      <Nav num3={true} />

      <div className="inwrap">
        <Aside dummy={aside} idxs="1" subidxs="2" />

        <div className="main">
          <Toptits
            toptits={{
              ttmap: "급여관리",
              map: "급여관리",
              tit: "급여지급",
              text: "월별 직원 급여 지급 내역을 관리하고 확정합니다. ",
              tllbtn: "PDF 다운로드",
              trrbtn: "급여확정",
            }}
            retplsno="0"
            ckdbtnon="0"
            ptbtnon="0"
            retwtbtnno=""
            lftbtnClick={() => {
              pdfpopon();
            }}
            retbtnClick={() => {
              popon();
            }}
          />

          <ul className="findebox">
            <li>
              <p>
                <TrendingUp size={14} />
                지급합계
              </p>
              <h1>28,640,000원</h1>
              <span>전월 대비 +240,000원</span>
            </li>
            <li>
              <p>
                <TrendingDown color="red" size={14} />
                공제합계
              </p>
              <h1>4,128,000원</h1>
              <span>전월 대비 +34,000원</span>
            </li>
            <li>
              <p>
                <Banknote size={14} />
                실지급합계
              </p>
              <h1>24,512,000원</h1>
              <span>대상인원 8명</span>
            </li>
            <li>
              <p>
                <Clock size={14} />
                지급상태
              </p>
              <h1>
                <span>미확정 8건</span> <p>확정 0</p>
              </h1>
              <span>2025년 7월분</span>
            </li>
          </ul>

          <div className="findeboxss">
            <div className="findeboxlft">
              <label className="lbl">
                <div className="ipdybox">
                  <div class="jgfmin ">
                    <p>
                      <ChevronLeft size={14} />
                    </p>
                    <Calendar className="cld" size={13} />
                    <input
                      type="number"
                      id="year"
                      name="year"
                      min="1900"
                      max="2100"
                      value={2026}
                    />
                    <p>
                      <ChevronRight size={14} />
                    </p>
                  </div>
                </div>
              </label>

              <label className="lbl">
                <p>부서</p>
                <select>
                  <option value="">전체 부서</option>
                  <option value="bs1">부서1</option>
                  <option value="bs2">부서2</option>
                  <option value="bs3">부서3</option>
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

              <div className="fdrettt">
                <h3>
                  <span>●</span>지급항목
                </h3>
                <h3>
                  <span>●</span>공제항목
                </h3>
                <h3>
                  <span>●</span>실지급
                </h3>
              </div>
            </div>
          </div>

          <div className="tbs">
            <div className="fromtit">
              <h1>
                <TableIcon size={15} />
                2025년 7월 급여 지급 내역
              </h1>
              <div className="fromtitin">
                <h2>총 8명</h2>
                <div className="fromtitinbox">
                  <input type="checkbox" name="" id="" />
                  전체선택
                </div>
              </div>
            </div>
            <div className="tbin">
              <ul>
                <li>
                  <input type="checkbox" name="" id="" checked />
                </li>
                <li>사원번호</li>
                <li>성명</li>
                <li>부서</li>
                <li>기본급</li>
                <li>식대</li>
                <li>교통비</li>
                <li>야근수당</li>
                <li>지급소계</li>
                <li>국민연금</li>
                <li>건강보험</li>
                <li>고용보험</li>
                <li>소득세</li>
                <li>공제소계</li>
                <li>실지급액</li>
              </ul>

              <ul>
                <li>
                  <input type="checkbox" name="" id="" />
                </li>
                <li>EMP-001</li>
                <li>김철수</li>
                <li>인사팀</li>
                <li>4,200,000</li>
                <li>200,000</li>
                <li>150,000</li>
                <li>250,000</li>
                <li>4,800,000</li>
                <li>189,000</li>
                <li>167,400</li>
                <li>43,200</li>
                <li>132,000</li>
                <li>643,230</li>
                <li>4,268,400</li>
              </ul>
              <ul>
                <li>
                  <input type="checkbox" name="" id="" />
                </li>
                <li>EMP-002</li>
                <li>이영희</li>
                <li>인사팀</li>
                <li>4,700,000</li>
                <li>200,000</li>
                <li>150,000</li>
                <li>120,000</li>
                <li>5,170,000</li>
                <li>211,500</li>
                <li>187,200</li>
                <li>46,530</li>
                <li>198,000</li>
                <li>643,230</li>
                <li>4,526,770</li>
              </ul>
              <ul>
                <li>
                  <input type="checkbox" name="" id="" />
                </li>
                <li>EMP-003</li>
                <li>박민준</li>
                <li>개발팀</li>
                <li>3,500,000</li>
                <li>200,000</li>
                <li>150,000</li>
                <li>350,000</li>
                <li>4,200,000</li>
                <li>157,500</li>
                <li>139,300</li>
                <li>37,800</li>
                <li>88,000</li>
                <li>422,600</li>
                <li>3,777,400</li>
              </ul>
              <ul>
                <li>
                  <input type="checkbox" name="" id="" />
                </li>
                <li>EMP-004</li>
                <li>최지영</li>
                <li>영업팀</li>
                <li>2,800,000</li>
                <li>200,000</li>
                <li>100,000</li>
                <li>
                  <p>-</p>
                </li>
                <li>3,100,000</li>
                <li>126,000</li>
                <li>111,400</li>
                <li>27,900</li>
                <li>44,000</li>
                <li>309,300</li>
                <li>2,790,700</li>
              </ul>
              <ul>
                <li>
                  <input type="checkbox" name="" id="" />
                </li>
                <li>EMP-005</li>
                <li>정수빈</li>
                <li>개발팀</li>
                <li>2,900,000</li>
                <li>200,000</li>
                <li>100,000</li>
                <li>180,000</li>
                <li>3,380,000</li>
                <li>130,500</li>
                <li>115,200</li>
                <li>30,420</li>
                <li>55,000</li>
                <li>331,120</li>
                <li>3,048,880</li>
              </ul>
              <ul>
                <li>
                  <input type="checkbox" name="" id="" />
                </li>
                <li>EMP-006</li>
                <li>한지민</li>
                <li>영업팀</li>
                <li>3,200,000</li>
                <li>200,000</li>
                <li>100,000</li>
                <li>90,000</li>
                <li>3,590,000</li>
                <li>144,000</li>
                <li>127,300</li>
                <li>32,310</li>
                <li>77,000</li>
                <li>380,610</li>
                <li>3,209,390</li>
              </ul>

              <ul className="hgtb">
                <li></li>
                <li></li>
                <li></li>
                <li>
                  <Sigma size={13} /> 합계 (8명)
                </li>
                <li>25,760,000</li>
                <li>1,600,000</li>
                <li>1,000,000</li>
                <li>1,280,000</li>
                <li>28,640,000</li>
                <li>1,152,000</li>
                <li>1,018,800</li>
                <li>277,260</li>
                <li>720,000</li>
                <li>4,128,060</li>
                <li>24,511,940</li>
              </ul>

              <ul className="textsbtns">
                <li>
                  <h2>총 8명 · 2025년 7월분 급여</h2>
                  <div className="br"></div>
                  <div className="ttrettt">
                    <p>
                      <Clock size={11} /> 미확정 8건 — 급여확정 후 명세서 발송
                      가능
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
