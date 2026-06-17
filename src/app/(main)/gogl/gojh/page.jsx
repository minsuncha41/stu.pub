"use client";

import "./Gojh.css";

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
        <Aside
          dummy={[
            {
              titin: {
                icon: "/Banknote.png",
                titname: "급여관리",
                main: "gogl",
              },
              sublit: [
                "급여기본정보관리.",
                "급여지급.",
                "기본수당외수당관리.",
                "급여계산.",
                "급여조회.",
              ],
              mainsub: ["gojbgl", "gojg", "sdgl", "gogs", "gojh"],
            },

            {
              titin: {
                icon: "/Shield Check.png",
                titname: "4대보험관리",
                main: "gogl",
              },
              sublit: [
                "4대보험요율표설정. ",
                "국민연금관리",
                "건강보험관리",
                "고용보험관리",
                "4대보험취득/상실.",
              ],
              mainsub: ["bhsj", "", "", "", "bhcdss"],
            },
          ]}
          idxs="1"
          subidxs="5"
        />

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
                    <span>1</span>
                  </li>
                  <li>
                    <span>2</span>
                  </li>
                  <li>
                    <span>3</span>
                  </li>
                  <li>
                    <span>4</span>
                  </li>
                  <li>
                    <span>5</span>
                  </li>
                  <li>
                    <span>6</span>
                  </li>
                  <li>
                    <span>7</span>
                  </li>
                  <li>
                    <span>8</span>
                  </li>
                  <li>
                    <span>9</span>
                  </li>
                  <li>
                    <span>10</span>
                  </li>
                  <li>
                    <span>11</span>
                  </li>
                  <li>
                    <span>12</span>
                  </li>
                </ul>
                <ul>
                  <li>1월</li>
                  <li>2월</li>
                  <li>3월</li>
                  <li>4월</li>
                  <li>5월</li>
                  <li>6월</li>
                  <li>7월</li>
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
              </div>
            </div>
            <div className="retbox"></div>
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
