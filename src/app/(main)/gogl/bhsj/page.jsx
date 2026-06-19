"use client";

import "./bhsj.css";
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
  Briefcase,
  Building2,
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
  HardHat,
  Heart,
  HeartCrackIcon,
  HeartHandshake,
  HeartPulse,
  Info,
  ListChecks,
  Lock,
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
  Shield,
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

export default function Bhsj() {
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
        <Aside dummy={aside} idxs="2" subidxs="1" />

        <div className="main">
          <Toptits
            toptits={{
              ttmap: "급여관리",
              map: "4대보험관리",
              tit: "4대보험요율표설정",
              text: "연도별 4대보험 요율을 설정하고 직원별 예상 보험료를 시뮬레이션합니다.",
              tllbtn: "PDF 다운로드",
              trrbtn: "요율 저장",
            }}
            ckdbtnon=""
            ptbtnon=""
            sjbtnon=""
            lftwtbtnno="0"
            retwtbtnno=""
            prtbtnon=""
            retsaveimg="0"
            ttct=""
            gbgbtnon="0"
            jndbtnon="0"
          />

          <div className="findebox">
            <div className="fdlftbox">
              <label className="lbl">
                <div className="ipdybox">
                  <div class="jgfmin ">
                    <p>
                      <ChevronLeft size={14} />
                    </p>
                    <Calendar className="cld" size={13} />
                    <input type="text" id="year" name="year" value={"2025년"} />
                    <p>
                      <ChevronRight size={14} />
                    </p>
                  </div>
                </div>
              </label>

              <span>
                <p>●</p>
                2025년 요율 적용중
              </span>
              <p>
                <Clock size={12} /> 최종수정: 2025.01.01 · 홍길동
              </p>
            </div>
            <ul className="fdnd">
              <li>2023</li>
              <li>2024</li>
              <li>2025</li>
            </ul>
          </div>

          <div className="boxbox">
            <ul>
              <li className="gmog">
                <div className="boxtit">
                  <div className="boxtitic">
                    <div className="ics">
                      <Shield size={14} />
                    </div>
                    국민연금
                  </div>
                  <p>9.0%</p>
                </div>
                <div className="boxtt">
                  <div className="boxttin">
                    <Info size={11} />
                    <p>표준소득월액 기준 · 상한 590만원 / 하한 37만원</p>
                  </div>
                  <div className="boxttlb">
                    <label>
                      <p>
                        <span>●</span>
                        근로자
                      </p>
                      <div className="boxttlbin  gljin">
                        <input type="text" value={4.5} />
                        <div className="boxttlbinpst">%</div>
                      </div>
                      <h1>157,500원</h1>
                    </label>
                    <label>
                      <p>
                        <span>●</span>
                        사업자
                      </p>
                      <div className="boxttlbin ">
                        <input type="text" value={4.5} />
                        <div className="boxttlbinpst">%</div>
                      </div>
                      <h1>157,500원</h1>
                    </label>
                  </div>
                  <div className="boxttin  bdl">
                    <div className="boxttinlft">
                      <Sigma size={11} color="#1D4ED8" />
                      합산 부담률
                    </div>
                    <div className="boxttinret">9.0%</div>
                  </div>
                </div>
              </li>

              <li className="ggbh">
                <div className="boxtit">
                  <div className="boxtitic">
                    <div className="ics">
                      <HeartPulse size={14} />
                    </div>
                    국민연금
                  </div>
                  <p>9.0%</p>
                </div>
                <div className="boxtt">
                  <div className="boxttin">
                    <Info size={11} />
                    <p>보수월액 기준 · 상한 110,332,800원 / 하한 279,360원 </p>
                  </div>
                  <div className="boxttlb">
                    <label>
                      <p>
                        <span>●</span>
                        근로자
                      </p>
                      <div className="boxttlbin   gljin">
                        <input type="text" value={3.545} />
                        <div className="boxttlbinpst">%</div>
                      </div>
                      <h1>124,075원</h1>
                    </label>
                    <label>
                      <p>
                        <span>●</span>
                        사업자
                      </p>
                      <div className="boxttlbin ">
                        <input type="text" value={3.545} />
                        <div className="boxttlbinpst">%</div>
                      </div>
                      <h1>124,075원</h1>
                    </label>
                  </div>
                  <div className="jgoobh">
                    <h1>
                      <span>●</span>장기요양보험 (건강보험료의 %)<p>12.95%</p>
                    </h1>
                    <div className="jgoobhin">
                      <div className="jgoobhinbox">
                        <input type="text" value={12} />
                        <div className="jgoobhinboxpst">%</div>
                      </div>
                      <X size={32} />
                      <div className="jgoobhinbox">
                        <input type="text" value={12} />
                        <div className="jgoobhinboxpst">%</div>
                      </div>
                    </div>
                  </div>
                  <div className="boxttin bdl">
                    <div className="boxttinlft">
                      <Sigma size={11} color="#0F766E" />
                      합산 부담률 (장기요양 포함)
                    </div>
                    <div className="boxttinret">7.09%</div>
                  </div>
                </div>
              </li>

              <li className="gobh">
                <div className="boxtit">
                  <div className="boxtitic">
                    <div className="ics">
                      <Briefcase size={14} />
                    </div>
                    고용보험
                  </div>
                  <p>2.05%</p>
                </div>
                <div className="boxtt">
                  <div className="boxttin">
                    <Info size={11} />
                    <p>실업급여 기준 · 사업자는 규모별 추가부담</p>
                  </div>
                  <div className="boxttlb">
                    <label>
                      <p>
                        <span>●</span>
                        근로자
                      </p>
                      <div className="boxttlbin   gljin">
                        <input type="text" value={0.9} />
                        <div className="boxttlbinpst">%</div>
                      </div>
                      <h1>31,500원</h1>
                    </label>
                    <label>
                      <p>
                        <span>●</span>
                        사업자
                      </p>
                      <div className="boxttlbin ">
                        <input type="text" value={1.15} />
                        <div className="boxttlbinpst">%</div>
                      </div>
                      <h1>40,250원</h1>
                    </label>
                  </div>
                  <div className="boxttin bdl">
                    <div className="boxttinlft ">
                      <Sigma size={11} color="#D97706" />
                      합산 부담률
                    </div>
                    <div className="boxttinret">2.05%</div>
                  </div>
                </div>
              </li>

              <li className="hjbh">
                <div className="boxtit">
                  <div className="boxtitic">
                    <div className="ics">
                      <HardHat size={14} />
                    </div>
                    산재보험
                  </div>
                  <p>업종별</p>
                </div>
                <div className="boxtt">
                  <div className="boxttin">
                    <Info size={11} />
                    <p>전액 사업자 부담 · 업종별 요율 상이</p>
                  </div>
                  <div className="gljbd">
                    <h1>
                      <span>●</span>근로자 부담
                    </h1>
                    <div className="gljbdhdoo">
                      <p>ㅡ 해당없음 (근로자 부담 없음)</p>
                    </div>
                  </div>
                  <div className="boxttlb">
                    <label>
                      <p>
                        <span>●</span>
                        사업자 (업종별 적용)
                      </p>
                      <div className="boxttlbin   gljin">
                        <input type="text" value={1.43} />
                        <div className="boxttlbinpst">%</div>
                      </div>
                      <h1>50,050원</h1>
                    </label>
                  </div>
                  <div className="hjoj">
                    <Building2 size={11} color="#9CA3AF" />
                    <p>현재 업종:</p>
                    <span>IT서비스업 (1.43%)</span>
                  </div>
                  <div className="boxttin bdl">
                    <div className="boxttinlft">
                      <Sigma size={11} color="#DC2626" />
                      사업자 전액 부담
                    </div>
                    <div className="boxttinret">1.43%</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="oooo">
            <div className="oooolft">
              <Calculator size={15} color="#60A5FA" />
              <p>2025년 4대보험 합산 요율 요약</p>
            </div>
            <div className="ooooret">
              <div className="ooooretbox">
                <h1>
                  <p>근로자 합계</p>
                  8.945%
                </h1>
                <h2>
                  국민연금 4.5% · 건강+장기 3.545%+α
                  <p>고용 0.9%</p>
                </h2>
              </div>
              <div className="pls">+</div>
              <div className="ooooretbox">
                <h1>
                  <p>사업자 합계</p>
                  10.635%
                </h1>
                <h2>
                  국민연금 4.5% · 건강+장기 3.545%+α
                  <p>고용 1.15% · 산재 1.43%</p>
                </h2>
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
                <p>
                  <span>●</span>근로자 부담
                </p>
                <p>
                  <span>●</span>근로자 부담
                </p>
              </div>
            </div>

            <div className="tbin">
              <ul>
                <li>사원번호</li>
                <li>성명</li>
                <li>기준보수</li>
                <li>국민연금</li>
                <li>건강+장기</li>
                <li>고용보험</li>
                <li>근로자계</li>
                <li>국민연금</li>
                <li>건강+장기</li>
                <li>고용보험</li>
                <li>산재보험</li>
                <li>사업자계</li>
              </ul>
              <ul>
                <li>EMP-001</li>
                <li>김철수</li>
                <li>4,800,000</li>
                <li>216,000</li>
                <li>216,030</li>
                <li>43,200</li>
                <li>475,230</li>
                <li>216,000</li>
                <li>216,030</li>
                <li>55,200</li>
                <li>68,640</li>
                <li>555,870</li>
              </ul>
              <ul>
                <li>EMP-002</li>
                <li>이영희</li>
                <li>5,170,000</li>
                <li>232,650</li>
                <li>232,777</li>
                <li>46,530</li>
                <li>511,957</li>
                <li>232,650</li>
                <li>232,777</li>
                <li>59,455</li>
                <li>73,931</li>
                <li>598,813</li>
              </ul>
              <ul>
                <li>EMP-003</li>
                <li>박민준</li>
                <li>4,000,000</li>
                <li>180,000</li>
                <li>180,106</li>
                <li>36,000</li>
                <li>396,106</li>
                <li>180,000</li>
                <li>180,106</li>
                <li>46,000</li>
                <li>57,200</li>
                <li>463,306</li>
              </ul>

              <ul className="hgtb">
                <li></li>
                <li>
                  <Sigma size={13} /> 합계 (8명)
                </li>
                <li>29,300,000</li>
                <li>1,318,500</li>
                <li>1,319,110</li>
                <li>263,700</li>
                <li>3,408,060</li>
                <li>1,318,500</li>
                <li>1,319,110</li>
                <li>336,950</li>
                <li>418,990</li>
                <li>4,219,890</li>
              </ul>

              <ul className="textsbtns">
                <li>
                  <h2>8명 기준 월 예상 보험료 합계</h2>
                  <div className="br"></div>
                  <div className="ttrettt">
                    <p>
                      <Banknote size={12} color="#2563EB" /> 총 부담
                      (근로자+사업자)
                      <span>7,627,950원</span>
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
