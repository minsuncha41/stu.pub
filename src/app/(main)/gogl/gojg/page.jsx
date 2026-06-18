"use client";

import "./Gojg.css";
import aside from "../goglaside.json";

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
  TrendingDown,
  TrendingUp,
  Upload,
  User2,
  Users,
  X,
} from "lucide-react";

export default function Gojg() {
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
              trrbtn: "",
            }}
            ckdbtnon="0"
            ptbtnon="0"
            sjbtnon=""
            lftwtbtnno=""
            retwtbtnno="0"
            prtbtnon=""
            ttct=""
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
