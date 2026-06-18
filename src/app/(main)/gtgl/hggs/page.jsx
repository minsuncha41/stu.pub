"use client";

import "./Hggs.css";
import aside from "../gtglaside.json";

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
  ListChecks,
  LogOut,
  Paperclip,
  Plane,
  Plus,
  RotateCcw,
  Save,
  SaveAll,
  SaveOff,
  Search,
  SendHorizontal,
  ShieldCheck,
  Table2,
  TableIcon,
  Upload,
  Users,
  X,
} from "lucide-react";

export default function Hggs() {
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
      <Nav num2={true} />

      <div className="inwrap">
        <Aside dummy={aside} idxs="3" subidxs="2" />

        <div className="main">
          <Toptits
            toptits={{
              ttmap: "근태관리",
              map: "휴가관리",
              tit: "휴가일수계산",
              text: "입사일 기준으로 직원별 발생 휴가일수를 자동 계산합니다.",
              tllbtn: "PDF 다운로드",
              trrbtn: "전직원 일괄계산",
            }}
            lftwtbtnno=""
            retsaveimg="0"
          />

          <div className="findebox">
            <div className="findeboxlft">
              <label className="lbl">
                <p>기준년도</p>
                <select>
                  <option value="yd2025">2025년</option>
                  <option value="yd2024">2024년</option>
                  <option value="yd2023">2023년</option>
                  <option value="yd2022">2022년</option>
                  <option value="yd2021">2021년</option>
                  <option value="yd2020">2020년</option>
                  <option value="yd2019">2019년</option>
                </select>
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
              <label className="lbl">
                <p>직급</p>
                <select>
                  <option value="">전체 직급</option>
                  <option value="jg1">직급1</option>
                  <option value="jg2">직급2</option>
                  <option value="jg3">직급3</option>
                  <option value="jg4">직급4</option>
                  <option value="jg5">직급5</option>
                </select>
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
            </div>
          </div>

          <div className="intable">
            <div className="fromtit">
              <h1>
                <Calculator size={15} />
                직원별 휴가 계산 결과
              </h1>
              <h2>총 5명</h2>
            </div>

            <div className="tablesbox">
              <ul>
                <li>사원번호</li>
                <li>성명</li>
                <li>부서</li>
                <li>직급</li>
                <li>입사일</li>
                <li>근속연수</li>
                <li>기본일수</li>
                <li>가산일수</li>
                <li>이월일수</li>
                <li>총 부여일수</li>
                <li>사용일수</li>
                <li>잔여일수</li>
                <li>상태</li>
                <li></li>
              </ul>

              <ul>
                <li>EMP-001</li>
                <li>김철수</li>
                <li>인사팀</li>
                <li>팀장</li>
                <li>2019.03.02</li>
                <li>
                  <span className="lispan gsosup">6년 4개월</span>
                </li>
                <li>15</li>
                <li>+3</li>
                <li className="">2</li>
                <li>20</li>
                <li>8</li>
                <li>
                  <span className="lispan joosup">12일</span>
                </li>
                <li>
                  <span className="lispan st">계산완료</span>
                </li>
                <li></li>
              </ul>
              <ul>
                <li>EMP-002</li>
                <li>이영희</li>
                <li>인사팀</li>
                <li>차장</li>
                <li>2018.07.15</li>
                <li>
                  <span className="lispan gsosup ">6년 11개월</span>
                </li>
                <li>18</li>
                <li>+3</li>
                <li className="">5</li>
                <li>26</li>
                <li>14</li>
                <li>
                  <span className="lispan joosup">12일</span>
                </li>
                <li>
                  <span className="lispan st">계산완료</span>
                </li>
                <li></li>
              </ul>
              <ul>
                <li>EMP-003</li>
                <li>박민준</li>
                <li>개발팀</li>
                <li>대리</li>
                <li>2021.08.01</li>
                <li>
                  <span className="lispan gsosdo ">3년 11개월</span>
                </li>
                <li>12</li>
                <li>+2</li>
                <li className="ooos0">0</li>
                <li>14</li>
                <li>11</li>
                <li>
                  <span className="lispan joosdo">3일</span>
                </li>
                <li>
                  <span className="lispan st">계산완료</span>
                </li>
                <li></li>
              </ul>
              <ul>
                <li>EMP-004</li>
                <li>최지영</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
