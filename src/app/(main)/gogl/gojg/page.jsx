"use client";

import "./Gojg.css";
import aside from "../goglaside.json";

import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Toptits from "@/component/cmm/Toptits";
import {
  Banknote,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  RotateCcw,
  Save,
  Search,
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
                  <input type="text" placeholder="이름을 입력해주세요" />
                </label>
                <label className="lbl">
                  <p>
                    부서 <span>*</span>
                  </p>
                  <select>
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
                  <select>
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
                  <input type="date" />
                </label>
                <label className="lbl">
                  <p>
                    재직상태 <span>*</span>
                  </p>
                  <ul>
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
                  <input type="text" placeholder="010-0000-0000" />
                </label>
                <label className="lbl">
                  <p>
                    이메일 <span>*</span>
                  </p>
                  <input type="text" placeholder="example@company.com" />
                </label>
              </div>

              <div className="lblbox js">
                <h1>주소</h1>
                <div className="jsin">
                  <label className="lbl">
                    <p>우편번호</p>
                    <input
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
                    className="noinput"
                    type="text"
                    placeholder="주소검색 후 자동입력"
                    value={allinput.address}
                  />
                </label>
                <label className="lbl">
                  <p>상세주소</p>
                  <input type="text" placeholder="상세주소를 입력하세요" />
                </label>
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

                <button>
                  <Save size={14} />
                  저장
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
