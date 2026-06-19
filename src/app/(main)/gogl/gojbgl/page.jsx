"use client";

import "./Gojbgl.css";
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
  Upload,
  User2,
  Users,
  X,
} from "lucide-react";

export default function Gojbgl() {
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
        <Aside dummy={aside} idxs="1" subidxs="1" />

        <div className="main">
          <Toptits
            toptits={{
              ttmap: "급여관리",
              map: "급여관리",
              tit: "급여기본정보관리",
              text: "직원별 기본급여 및 수당 기준 정보를 등록하고 관리합니다.",
              tllbtn: "PDF 다운로드",
              trrbtn: "급여정보등록",
            }}
            ttmapno="0"
            sjbtnon=""
            lftwtbtnno=""
            retwtbtnno=""
            prtbtnon=""
            ttct=""
          />

          <ul className="findebox">
            <li>
              <p>평균 기본급</p>
              <h1>3,662,500원</h1>
              <span>전월 대비 +50,000원</span>
            </li>
            <li>
              <p>최고 기본급</p>
              <h1>4,700,000원</h1>
              <span>이영희 · 차장</span>
            </li>
            <li>
              <p>월 총 인건비</p>
              <h1>29,300,000원</h1>
              <span>기본급 합계 기준</span>
            </li>
            <li>
              <p>월 총 수당</p>
              <h1>3,340,000원</h1>
              <span>수당 합계 기준</span>
            </li>
            <li>
              <p>등록 인원</p>
              <h1>8명</h1>
              <span>미등록 0명</span>
            </li>
          </ul>

          <div className="findeboxss">
            <div className="findeboxlft">
              <label className="lbl">
                <p>부서</p>
                <select>
                  <option value="">전체 부서</option>
                  <option value="bs1">부서1</option>
                  <option value="bs2">부서2</option>
                  <option value="bs3">부서3</option>
                </select>
              </label>

              <label className="lbl">
                <p>직급</p>
                <select>
                  <option value="">전체 직급</option>
                  <option value="jg1">직급1</option>
                  <option value="jg2">직급2</option>
                  <option value="jg3">직급3</option>
                </select>
              </label>

              <label className="lbl">
                <p>적용기준일</p>
                <input type="date" name="" id="" />
              </label>

              <label className="lbl lblic">
                <Search className="inlblic" size={13} color="#9CA3AF" />
                <input type="text" placeholder="사원명 검색" />
              </label>
              <button className="fdbtns">
                <Search className="icone" size={13} />
                조회
              </button>
              <button className="fdbtns cgh">
                <RotateCcw className="icone" size={13} />
                초기화
              </button>

              <button className="fdif">
                <TableIcon size={13} />
                테이블
              </button>
            </div>
          </div>

          <div className="tbs">
            <div className="fromtit">
              <h1>
                <TableIcon size={15} />
                직원별 급여 기본정보
              </h1>
              <div className="fromtitin">
                <h2>총 8명</h2>
                <h3>
                  <span>●</span>기본지급
                </h3>
                <h3>
                  <span>●</span>수당항목
                </h3>
                <h3>
                  <span>●</span>계좌정보
                </h3>
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
                <li>직급</li>
                <li>기본급</li>
                <li>식대</li>
                <li>교통비</li>
                <li>직책수당</li>
                <li>수당합계</li>
                <li>은행</li>
                <li>계좌번호</li>
                <li>적용시작일</li>
                <li>관리</li>
              </ul>

              <ul className=" ">
                <li>
                  <input type="checkbox" name="" id="" />
                </li>
                <li>EMP-001</li>
                <li>김철수</li>
                <li>인사팀</li>
                <li>
                  <span className="jg tj">팀장</span>
                </li>
                <li>4,200,000</li>
                <li>200,000</li>
                <li>150,000</li>
                <li>200,000</li>
                <li>550,000</li>
                <li>국민은행</li>
                <li>12****-34****</li>
                <li>2024.01.01 </li>
                <li>
                  <div className="sjbox">
                    <span className="gl sj">
                      <Pencil size={10} />
                      수정
                    </span>
                    <span className="gl ol">
                      <Clock size={10} />
                      이력
                    </span>
                  </div>
                  <div className="jjbox">
                    <span className="gl jj">
                      <Save size={10} />
                      저장
                    </span>
                    <span className="gl cs">
                      <X size={10} />
                      취소
                    </span>
                  </div>
                </li>
              </ul>

              <ul className=" ">
                <li>
                  <input type="checkbox" name="" id="" />
                </li>
                <li>EMP-002</li>
                <li>이영희</li>
                <li>인사팀</li>
                <li>
                  <span className="jg cj">차장</span>
                </li>
                <li>4,700,000</li>
                <li>200,000</li>
                <li>150,000</li>
                <li>200,000</li>
                <li>550,000</li>
                <li>신한은행</li>
                <li>98****-12****</li>
                <li>2025.01.01</li>
                <li>
                  <div className="sjbox">
                    <span className="gl sj">
                      <Pencil size={10} />
                      수정
                    </span>
                    <span className="gl ol">
                      <Clock size={10} />
                      이력
                    </span>
                  </div>
                  <div className="jjbox">
                    <span className="gl jj">
                      <Save size={10} />
                      저장
                    </span>
                    <span className="gl cs">
                      <X size={10} />
                      취소
                    </span>
                  </div>
                </li>
              </ul>

              <ul className="sjj">
                <li>
                  <input checked type="checkbox" name="" id="" />
                </li>
                <li>EMP-003</li>
                <li>박민준</li>
                <li>개발팀</li>
                <li>
                  <span className="jg dl">대리</span>
                </li>
                <li>3,500,000</li>
                <li>200,000</li>
                <li>150,000</li>
                <li>
                  <p>-</p>
                </li>
                <li>350,000</li>
                <li>국민은행</li>
                <li>45****-67****</li>
                <li>2021.08.01</li>
                <li>
                  <div className="sjbox">
                    <span className="gl sj">
                      <Pencil size={10} />
                      수정
                    </span>
                    <span className="gl ol">
                      <Clock size={10} />
                      이력
                    </span>
                  </div>
                  <div className="jjbox">
                    <span className="gl jj">
                      <Save size={10} />
                      저장
                    </span>
                    <span className="gl cs">
                      <X size={10} />
                      취소
                    </span>
                  </div>
                </li>
              </ul>

              <ul className=" ">
                <li>
                  <input type="checkbox" name="" id="" />
                </li>
                <li>EMP-004</li>
                <li>최지영</li>
                <li>영업팀</li>
                <li>
                  <span className="jg so">사원</span>
                </li>
                <li>2,800,000</li>
                <li>200,000</li>
                <li>100,000</li>
                <li>
                  <p>-</p>
                </li>
                <li>300,000</li>
                <li>하나은행</li>
                <li>11****-98****</li>
                <li>2023.01.09</li>
                <li>
                  <div className="sjbox">
                    <span className="gl sj">
                      <Pencil size={10} />
                      수정
                    </span>
                    <span className="gl ol">
                      <Clock size={10} />
                      이력
                    </span>
                  </div>
                  <div className="jjbox">
                    <span className="gl jj">
                      <Save size={10} />
                      저장
                    </span>
                    <span className="gl cs">
                      <X size={10} />
                      취소
                    </span>
                  </div>
                </li>
              </ul>

              <ul className="hgtb">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li>
                  <Sigma size={13} /> 합계 (8명)
                </li>
                <li>29,300,000</li>
                <li>1,600,000</li>
                <li>1,000,000</li>
                <li>740,000</li>
                <li>3,340,000</li>
                <li>
                  <p>-</p>
                </li>
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
                  <h2>총 8명 조회 · 1명 수정 중</h2>
                </li>
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
