"use client";

import "./Hgsj.css";
import aside from "../gtglaside.json";

import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Table from "@/component/cmm/Table";
import Toptits from "@/component/cmm/Toptits";
import {
  Baby,
  CakeSlice,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock4,
  Copy,
  Ellipsis,
  FileText,
  Flower2,
  Heart,
  HeartHandshake,
  Layers,
  Paperclip,
  Plus,
  Save,
  SendHorizontal,
  Star,
  TrendingUp,
  Upload,
  X,
} from "lucide-react";

export default function Hgsj() {
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
        <Aside dummy={aside} idxs="3" subidxs="1" />

        <div className="main">
          <Toptits
            toptits={{
              ttmap: "근태관리",
              map: "휴가관리",
              tit: "휴가일수설정",
              text: "연도별 휴가 정책 및 직급별 기준 일수를 설정합니다.",
              tllbtn: "PDF 다운로드",
              trrbtn: "설정저장",
            }}
            lftwtbtnno="o"
            plusimgno="o"
          />

          <div className="findebox">
            <div className="findeboxlft">
              <div className="ipdybox">
                <div class="jgfmin ">
                  <p>
                    <ChevronLeft size={14} />
                  </p>
                  <input type="date" />
                  <p>
                    <ChevronRight size={14} />
                  </p>
                </div>
              </div>

              <div className="ifbox">ⓘ 회계연도 기준 (1월~12월)</div>
            </div>

            <div className="findeboxbtns">
              <Copy size={13} />
              전년도 설정 복사
            </div>
          </div>

          <div className="hgsjbox">
            <div className="lftbox">
              <div className="fromtit">
                <h1>
                  <Layers size={15} strokeWidth={1.5} />
                  직급별 기준 휴가일수
                </h1>
                <h2>
                  <Plus size={11} />
                  행추가
                </h2>
              </div>
              <div className="lftboxtb">
                <ul>
                  <li>직급</li>
                  <li>기준 일수</li>
                  <li>최대 이월</li>
                  <li>반차 허용</li>
                  <li>비고</li>
                </ul>

                <ul>
                  <li>임원</li>
                  <li>
                    <input type="text" value={25} />
                  </li>
                  <li>
                    <input type="text" value={10} />
                  </li>
                  <li>
                    <div className="tgbtnbox">
                      <div className="tgbtn">
                        <div className="tgs"></div>
                      </div>
                    </div>
                  </li>
                  <li>최고 직급 기준</li>
                </ul>
                <ul>
                  <li>부장</li>
                  <li>
                    <input type="text" value={21} />
                  </li>
                  <li>
                    <input type="text" value={10} />
                  </li>
                  <li>
                    <div className="tgbtnbox">
                      <div className="tgbtn">
                        <div className="tgs"></div>
                      </div>
                    </div>
                  </li>
                  <li>-</li>
                </ul>
                <ul>
                  <li>차장 </li>
                  <li>
                    <input type="text" value={18} />
                  </li>
                  <li>
                    <input type="text" value={5} />
                  </li>
                  <li>
                    <div className="tgbtnbox">
                      <div className="tgbtn">
                        <div className="tgs"></div>
                      </div>
                    </div>
                  </li>
                  <li>-</li>
                </ul>
                <ul>
                  <li>과장</li>
                  <li>
                    <input type="text" value={15} />
                  </li>
                  <li>
                    <input type="text" value={5} />
                  </li>
                  <li>
                    <div className="tgbtnbox">
                      <div className="tgbtn">
                        <div className="tgs"></div>
                      </div>
                    </div>
                  </li>
                  <li>-</li>
                </ul>
                <ul>
                  <li>대리</li>
                  <li>
                    <input type="text" value={12} />
                  </li>
                  <li>
                    <input type="text" value={5} />
                  </li>
                  <li>
                    <div className="tgbtnbox">
                      <div className="tgbtn">
                        <div className="tgs"></div>
                      </div>
                    </div>
                  </li>
                  <li>-</li>
                </ul>

                <ul>
                  <li>임원</li>
                  <li>
                    <input type="text" value={11} />
                  </li>
                  <li>
                    <input type="text" value={0} />
                  </li>
                  <li>
                    <div className="tgbtnbox">
                      <div className="tgbtn no">
                        <div className="tgs"></div>
                      </div>
                    </div>
                  </li>
                  <li>신입 기준</li>
                </ul>
              </div>
            </div>

            <div className="retbox">
              <div className="topretbox">
                <div className="fromtit">
                  <h1>
                    <Star size={15} strokeWidth={1.5} />
                    특별 휴가 정책
                  </h1>
                </div>

                <div className="toplbbox">
                  <label>
                    <p>결혼 휴가</p>
                    <input type="text" value={5} />
                    <h1>일</h1>
                  </label>
                  <label>
                    <p>출산 휴가 (여)</p>
                    <input type="text" value={90} />
                    <h1>일</h1>
                  </label>

                  <label>
                    <p>배우자 출산 휴가)</p>
                    <input type="text" value={10} />
                    <h1>일</h1>
                  </label>
                  <label>
                    <p>부모 사망</p>
                    <input type="text" value={5} />
                    <h1>일</h1>
                  </label>

                  <label>
                    <p>배우자/자녀 사망</p>
                    <input type="text" value={3} />
                    <h1>일</h1>
                  </label>
                  <label>
                    <p>형제/자매 사망</p>
                    <input type="text" value={1} />
                    <h1>일</h1>
                  </label>
                </div>
              </div>

              <div className="botretbox">
                <div className="fromtit">
                  <h1>
                    <TrendingUp size={15} strokeWidth={1.5} />
                    근속 가산 일수
                  </h1>
                </div>
                <div className="btboxtb">
                  <h1 className="iftt">
                    <span>ⓘ</span> 근속 2년 초과 시 매 2년마다 1일씩 최대
                    25일까지 가산됩니다.
                  </h1>
                  <ul>
                    <li>근속 연수</li>
                    <li>가산 일수</li>
                    <li>최종 일수 (사원 기준)</li>
                  </ul>

                  <ul>
                    <li>1년 미만</li>
                    <li className="pls0">+0일</li>
                    <li>11일</li>
                  </ul>
                  <ul>
                    <li>1년 이상 ~ 3년 미만</li>
                    <li className="">+1일</li>
                    <li>12일</li>
                  </ul>
                  <ul>
                    <li>3년 이상 ~ 5년 미만</li>
                    <li className="">+2일</li>
                    <li>13일</li>
                  </ul>
                  <ul>
                    <li>5년 이상 ~ 10년 미만</li>
                    <li className="">+3일</li>
                    <li>14일</li>
                  </ul>
                  <ul>
                    <li>10년 이상</li>
                    <li className="">+5일</li>
                    <li>16일</li>
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
