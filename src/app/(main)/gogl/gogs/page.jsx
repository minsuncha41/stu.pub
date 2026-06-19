"use client";

import "./Gogs.css";
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
  Award,
  Baby,
  BadgeCheck,
  Banknote,
  Bookmark,
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
  Layers,
  ListChecks,
  Lock,
  LogOut,
  MoonStar,
  Paperclip,
  Pencil,
  Plane,
  Plus,
  ReceiptText,
  RefreshCw,
  RotateCcw,
  Save,
  SaveAll,
  SaveOff,
  Search,
  SendHorizontal,
  ShieldCheck,
  Sigma,
  SlidersHorizontal,
  Star,
  Sun,
  TableIcon,
  Trash2,
  TrendingDown,
  TrendingUp,
  Upload,
  User2,
  Users,
  UsersRound,
  X,
} from "lucide-react";

export default function Gogs() {
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
        <Aside dummy={aside} idxs="1" subidxs="4" />

        <div className="main">
          <Toptits
            toptits={{
              ttmap: "급여관리",
              map: "급여관리",
              tit: "급여계산",
              text: "계산기준월을 선택하고 조건을 설정한 후 전 직원 급여를 자동 계산합니다.",
              tllbtn: "PDF 다운로드",
              trrbtn: "수당 추가",
            }}
            ttmapno="0"
            gsbtnon="0"
            ckdbtnon="0"
            sjbtnon=""
            lftwtbtnno=""
            retwtbtnno="0"
            prtbtnon=""
            ttct=""
          />
          <div className="findebox">
            <div className="fdlftbox">
              <label className="lbl">
                <p>기준년도</p>
                <div className="ipdybox">
                  <div class="jgfmin ">
                    <p>
                      <ChevronLeft size={14} />
                    </p>
                    <Calendar className="cld" size={13} />
                    <input
                      type="text"
                      id="year"
                      name="year"
                      value={"2025년 7월"}
                    />
                    <p>
                      <ChevronRight size={14} />
                    </p>
                  </div>
                </div>
              </label>

              <div className="lin"></div>

              <label className="fdlftin">
                <label>
                  <p>계산상태</p>
                  <h1 className="gsj">
                    <span>●</span>계산전
                  </h1>
                </label>

                <label>
                  <p>확정상태</p>
                  <h1 className="mhj">
                    <span>●</span>미확정
                  </h1>
                </label>
              </label>
            </div>

            <div className="fdretbox">
              <div className="fromtit">
                <h1>
                  <SlidersHorizontal size={14} />
                  계산조건 설정
                </h1>
                <div className="fdretboxgbg">
                  <RotateCcw size={11} /> 기본값
                </div>
              </div>
              <ul className="gsjg">
                <li>
                  <h1>
                    근태 데이터 연동
                    <p>야근·지각 데이터 자동 반영</p>
                  </h1>
                  <div className="tgbtnbox">
                    <div className="tgbtn">
                      <div className="tgs"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <h1>
                    간이세액표 적용
                    <p>국세청 간이세액 기준 소득세 계산</p>
                  </h1>
                  <div className="tgbtnbox">
                    <div className="tgbtn">
                      <div className="tgs"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <h1>
                    원 단위 반올림
                    <p>1원 미만 반올림 처리</p>
                  </h1>
                  <div className="tgbtnbox">
                    <div className="tgbtn no">
                      <div className="tgs"></div>
                    </div>
                  </div>
                </li>
                <li>
                  <h1>
                    지방소득세 자동포함
                    <p>소득세의 10% 자동 산출</p>
                  </h1>
                  <div className="tgbtnbox">
                    <div className="tgbtn">
                      <div className="tgs"></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <ul className="boxbox">
            <li>
              <p>
                <TrendingUp size={13} />
                지급합계
              </p>
              <h1>28,640,000원</h1>
              <span>
                <h4>●</h4>기본급 25,760,000 + 수당 2,880,000
              </span>
            </li>
            <li>
              <p>
                <TrendingDown size={13} />
                공제합계
              </p>
              <h1>4,128,060원</h1>
              <span>
                <h4>●</h4>4대보험 3,408,060 + 소득세 720,000
              </span>
            </li>
            <li>
              <p>
                <Banknote size={13} />
                실지급합계
              </p>
              <h1>24,511,940원</h1>
              <span>
                <h4>●</h4>1인 평균 3,063,993원
              </span>
            </li>
            <li>
              <p>
                <Users size={13} />
                계산 대상
              </p>
              <h1>8명</h1>
              <span>계산전 8명</span>
            </li>
            <li>
              <p>
                <Clock size={13} />
                전월 대비
              </p>
              <h1>+206,000원</h1>
              <span>
                <h4>●</h4>야근수당 증가 영향
              </span>
            </li>
          </ul>

          <div className="mainin">
            <div className="fromtit">
              <h1>
                <TableIcon size={15} />
                2025년 7월 급여계산 미리보기
              </h1>
              <div className="fromtitin">
                <h2>총 8명</h2>
                <h3>
                  <span>●</span>지급
                </h3>
                <h3>
                  <span>●</span>공제
                </h3>
                <h3>
                  <span>●</span>실지급
                </h3>
                <button>
                  <RefreshCw size={11} />
                  재계산
                </button>
              </div>
            </div>

            <div className="tbin">
              <ul>
                <li>사원번호</li>
                <li>성명</li>
                <li>부서</li>
                <li>기본급</li>
                <li>수당합계</li>
                <li>지급소계</li>
                <li>4대보험 </li>
                <li>소득세+지방</li>
                <li>공제소계</li>
                <li>실지급액</li>
                <li>상태</li>
              </ul>
              <ul>
                <li>EMP-001</li>
                <li>김철수</li>
                <li>인사팀</li>
                <li>4,200,000</li>
                <li>600,000</li>
                <li>4,800,000</li>
                <li>399,600</li>
                <li>145,200</li>
                <li>544,800</li>
                <li>4,255,200</li>
                <li>
                  <span className="tbsp gsj">계산전</span>
                </li>
              </ul>
              <ul>
                <li>EMP-002</li>
                <li>이영희</li>
                <li>인사팀</li>
                <li>4,700,000</li>
                <li>470,000</li>
                <li>5,170,000</li>
                <li>445,230</li>
                <li>217,800</li>
                <li>663,030</li>
                <li>4,506,970</li>
                <li>
                  <span className="tbsp gsj">계산전</span>
                </li>
              </ul>
              <ul className="gtpoli">
                <li>EMP-003</li>
                <li>
                  박민준{" "}
                  <AlertCircle
                    size={11}
                    color="red"
                    style={{ margin: "4px" }}
                  />
                </li>
                <li>개발팀</li>
                <li>3,500,000</li>
                <li>500,000</li>
                <li>4,000,000</li>
                <li>344,400</li>
                <li>96,800</li>
                <li>441,200</li>
                <li>3,558,800</li>
                <li>
                  <span className="tbsp gtpo">
                    <AlertCircle size={9} />
                    검토필요
                  </span>
                </li>
              </ul>
              <ul>
                <li>EMP-004</li>
                <li>최지영</li>
                <li>영업팀</li>
                <li>2,800,000</li>
                <li>300,000</li>
                <li>3,100,000</li>
                <li>266,940</li>
                <li>48,400</li>
                <li>315,340</li>
                <li>2,784,660</li>
                <li>
                  <span className="tbsp gsj">계산전</span>
                </li>
              </ul>
              <ul>
                <li>EMP-005</li>
                <li>정수빈</li>
                <li>개발팀</li>
                <li>2,900,000</li>
                <li>480,000</li>
                <li>3,380,000</li>
                <li>290,952</li>
                <li>60,500</li>
                <li>351,452</li>
                <li>3,028,548</li>
                <li>
                  <span className="tbsp gsj">계산전</span>
                </li>
              </ul>
              <ul className="hgtb">
                <li></li>
                <li></li>
                <li>
                  <Sigma size={13} /> 합계 (8명)
                </li>
                <li>25,760,000</li>
                <li>2,880,000</li>
                <li>28,640,000</li>
                <li>3,408,060</li>
                <li>720,000</li>
                <li>4,128,060</li>
                <li>24,511,940</li>
                <li>
                  <p>-</p>
                </li>
              </ul>
              <ul className="textsbtns">
                <li>
                  <h2>총 8명 · 검토필요 1명</h2>
                  <div className="br"></div>
                  <div className="ttrettt">
                    <p>
                      <Clock size={11} />
                      EMP-003 박민준 · 야근수당 데이터 불일치 — 확인 필요
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
