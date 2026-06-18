"use client";

import "./Gojh.css";
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

export default function Gojh() {
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
        <Aside dummy={aside} idxs="1" subidxs="5" />

        <div className="main">
          <Toptits
            toptits={{
              ttmap: "급여관리",
              map: "급여관리",
              tit: "급여조회",
              text: "연도별 급여 수령 내역 및 월별 명세서를 조회합니다.",
              tllbtn: "PDF 다운로드",
              trrbtn: "수당 추가",
            }}
            gsbtnon=""
            ckdbtnon=""
            sjbtnon=""
            lftwtbtnno=""
            retwtbtnno="0"
            prtbtnon=""
            ttct=""
            clprtbtnon="0"
          />

          <div className="glpwrap">
            <div className="fromtit glptt">
              <h1>
                <TableIcon size={15} />
                2025년 7월 급여계산 미리보기
                <span>2025년</span>
              </h1>
              <div className="fromtitin">
                <h3>
                  <span></span>실지급액
                </h3>
                <h3>
                  <span></span>이번달 (7월)
                </h3>
                <h3>
                  <span></span>미지급
                </h3>
              </div>
            </div>
            <div className="glps">
              <div className="glpsli">
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
                  <li>7</li>
                  <li>8</li>
                  <li>9</li>
                  <li>10</li>
                  <li>11</li>
                  <li>12</li>
                </ul>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
                  <li>7</li>
                  <li>8</li>
                  <li>9</li>
                  <li>10</li>
                  <li>11</li>
                  <li>12</li>
                </ul>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
                  <li>7</li>
                  <li>8</li>
                  <li>9</li>
                  <li>10</li>
                  <li>11</li>
                  <li>12</li>
                </ul>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li>6</li>
                  <li>7</li>
                  <li>8</li>
                  <li>9</li>
                  <li>10</li>
                  <li>11</li>
                  <li>12</li>
                </ul>
              </div>
              <div className="glpsbttt">
                <ul className="glppst">
                  <li>
                    <span>
                      <p>238</p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <p>241</p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <p>245</p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <p>243</p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <p>249</p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <p>245</p>
                    </span>
                  </li>
                  <li className="obd">
                    <span>
                      <p>이번달</p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <p></p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <p></p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <p></p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <p></p>
                    </span>
                  </li>
                  <li>
                    <span>
                      <p></p>
                    </span>
                  </li>
                </ul>
                <ul>
                  <li>1월</li>
                  <li>2월</li>
                  <li>3월</li>
                  <li>4월</li>
                  <li>5월</li>
                  <li>6월</li>
                  <li className="obdtt">7월</li>
                  <li>8월</li>
                  <li>9월</li>
                  <li>10월</li>
                  <li>11월</li>
                  <li>12월</li>
                </ul>
              </div>
              <div className="glpslfttt">
                <ul>
                  <li>300</li>
                  <li>200</li>
                  <li>100</li>
                  <li>0</li>
                </ul>
                <p>만원</p>
              </div>
            </div>
            <div className="retboxwrap">
              <ul className="retboxss">
                <li>
                  <p>2025년 누적</p>
                  <h1>17,023,590</h1>
                  <span>원</span>
                </li>
                <li>
                  <p>최고 지급월</p>
                  <h1>5월</h1>
                  <span>2,490,000원</span>
                </li>
                <li>
                  <p>월 평균</p>
                  <h1>2,432,000</h1>
                  <span>원</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="findebox">
            <div className="fdlftbox">
              <label className="lbl">
                <p>조회연도</p>
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
              <label className="lbl">
                <p>조회대상</p>
                <div className="jhds">
                  <p>
                    <span>박</span>박민준 (본인)
                  </p>
                  <Lock size={12} color="#9CA3AF" />
                </div>
              </label>
              <span>
                <Building2 size={12} />
                개발팀 · 대리
              </span>
            </div>
            <ul className="fdnd">
              <li>2023</li>
              <li>2024</li>
              <li>2025</li>
            </ul>
          </div>

          <div className="mainin">
            <div className="fromtit">
              <h1>
                <TableIcon size={15} />
                2025년 월별 급여 수령 이력
              </h1>
              <div className="fromtitin">
                <h2>7개월 조회</h2>
                <h3>
                  <span>●</span>지급
                </h3>
                <h3>
                  <span>●</span>공제
                </h3>
                <h3>
                  <span>●</span>실지급
                </h3>
              </div>
            </div>

            <div className="tbin">
              <ul>
                <li>지급연월</li>
                <li>기본급</li>
                <li>수당합계</li>
                <li>지급소계</li>
                <li>공제합계</li>
                <li>실지급액</li>
                <li>지급일</li>
                <li>상태</li>
                <li>명세서</li>
              </ul>
              <ul class="tomoon">
                <li>
                  <span>이번달</span>
                  2025년 7월
                </li>
                <li>3,500,000</li>
                <li>500,000</li>
                <li>4,000,000</li>
                <li>441,200</li>
                <li>3,558,800</li>
                <li>2025.07.25</li>
                <li>
                  <span className="tbsp mhj">
                    <p>●</p>미확정
                  </span>
                </li>
                <li>
                  <span className="msssp mlbg">
                    <ReceiptText size={12} />
                    미리보기
                  </span>
                </li>
              </ul>
              <ul class="">
                <li>2025년 6월</li>
                <li>3,500,000</li>
                <li>350,000</li>
                <li>3,850,000</li>
                <li>431,400</li>
                <li>3,418,600</li>
                <li>2025.06.25</li>
                <li>
                  <span className="tbsp hj">
                    <p>●</p>확정
                  </span>
                </li>
                <li>
                  <span className="msssp mss">
                    <ReceiptText size={12} />
                    명세서
                  </span>
                </li>
              </ul>
              <ul class="">
                <li>2025년 5월</li>
                <li>3,500,000</li>
                <li>380,000</li>
                <li>3,880,000</li>
                <li>434,640</li>
                <li>3,445,360</li>
                <li>2025.05.25</li>
                <li>
                  <span className="tbsp hj">
                    <p>●</p>확정
                  </span>
                </li>
                <li>
                  <span className="msssp mss">
                    <ReceiptText size={12} />
                    명세서
                  </span>
                </li>
              </ul>
              <ul class="">
                <li>2025년 4월</li>
                <li>3,500,000</li>
                <li>350,000</li>
                <li>3,850,000</li>
                <li>431,400</li>
                <li>3,418,600</li>
                <li>2025.04.25</li>
                <li>
                  <span className="tbsp hj">
                    <p>●</p>확정
                  </span>
                </li>
                <li>
                  <span className="msssp mss">
                    <ReceiptText size={12} />
                    명세서
                  </span>
                </li>
              </ul>
              <ul class="">
                <li>2025년 3월</li>
                <li>3,500,000</li>
                <li>350,000</li>
                <li>3,850,000</li>
                <li>431,400</li>
                <li>3,418,600</li>
                <li>2025.03.25</li>
                <li>
                  <span className="tbsp hj">
                    <p>●</p>확정
                  </span>
                </li>
                <li>
                  <span className="msssp mss">
                    <ReceiptText size={12} />
                    명세서
                  </span>
                </li>
              </ul>

              <ul className="hgtb">
                <li>
                  <Sigma size={13} />
                  7개월 합계
                </li>
                <li>24,500,000</li>
                <li>2,660,000</li>
                <li>27,160,000</li>
                <li>3,136,410</li>
                <li>24,023,590</li>
                <li>
                  <p>-</p>
                </li>
                <li>
                  <p>-</p>
                </li>
                <li>
                  <p>-</p>
                </li>
              </ul>
              <ul className="textsbtns">
                <li>
                  <h2>2025년 1~7월 표시 · 8~12월 미지급</h2>
                  <div className="br"></div>
                  <div className="ttrettt">
                    <p>
                      <TrendingUp size={12} />
                      월평균 실지급 3,431,942원
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
