"use client";

import "./honevw.css";

import { useEffect, useState } from "react";
import baseApi from "@/api/baseApi";
import Nav from "@/component/cmm/Nav";
import Aside from "@/component/cmm/Aside";
import Table from "@/component/cmm/Table";
import Toptits from "@/component/cmm/Toptits";
import {
  Award,
  Baby,
  Banknote,
  Briefcase,
  BriefcaseBusiness,
  Building2,
  CakeSlice,
  Check,
  CircleChevronDown,
  ClipboardPen,
  Clock,
  Clock4,
  Ellipsis,
  Eye,
  EyeOff,
  FileCheck,
  FileText,
  Flower2,
  Gift,
  Heart,
  HeartHandshake,
  IdCard,
  Info,
  Languages,
  Lock,
  LogIn,
  Mail,
  Paperclip,
  Printer,
  ReceiptText,
  Save,
  SendHorizontal,
  ShieldCheck,
  Upload,
  User,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Honevw() {
  const router = useRouter();

  const loginvw = () => {
    router.push("/login/loginvw");
  };

  const token = localStorage.getItem("accessToken");
  const [allinput, setallinput] = useState({
    firstName: "",
    name: "",
    employeeNo: "",
    departmentName: "",
    positionName: "",
    email: "",
    password: "",
    checkPassword: "",
  });

  const [ogdo, setogdo] = useState(false);

  const 회원가입 = async () => {
    // 성;
    if (!allinput.firstName) {
      return alert("성을 입력해주세요");
    }

    // 이름;
    if (!allinput.name) {
      return alert("이름을 입력해주세요");
    }

    // 사번;
    if (!allinput.employeeNo) {
      return alert("사번을 입력해주세요");
    }

    // 부서;
    if (!allinput.departmentName) {
      return alert("부서를 선택해주세요");
    }

    // 직급;
    if (!allinput.positionName) {
      return alert("직급을 선택해주세요");
    }

    // 회사 이메일;
    if (!allinput.email) {
      return alert("회사 이메일을 입력해주세요");
    }

    // 비밀번호;
    if (!allinput.password) {
      return alert("비밀번호를 입력해주세요");
    }

    // 비밀번호 확인;
    if (!allinput.checkPassword) {
      return alert("다시한번더 비밀번호를 입력해주세요");
    }

    // 약관동의확인;
    if (!ogdo) {
      return alert("약관에 동의 하셔야 회원가입이 가능합니다");
    }

    const res = await baseApi.post(
      "/api/v1/employees/joinErp",
      {
        firstName: allinput?.firstName,
        name: allinput?.name,
        employeeNo: allinput?.employeeNo,
        departmentName: allinput?.departmentName,
        positionName: allinput?.positionName,
        email: allinput?.email,
        password: allinput?.password,
        checkPassword: allinput?.checkPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(allinput);
  };
  return (
    <div className="wrap">
      <Nav none={true} />
      <div className="inwrap">
        <div className="lglb">
          <div className="lglbin">
            <span className="tspan">
              <ShieldCheck size={15} />
              Enterprise HR Solution
            </span>
            <h1>HRMaster와 함께</h1>
            <h2>인사관리를 혁신하세요</h2>
            <div className="tpbox">
              <p>
                지금 가입하고 강력한 <br />
                인사관리 도구를 경험해보세요.
              </p>
            </div>

            <ul className="bpbox">
              <li>
                <div className="bimgbox">
                  <CircleChevronDown size={14} color="#4ADE80" />
                </div>
                <div className="btbox">
                  <h1>무제한 직원 등록 및 관리</h1>
                </div>
              </li>
              <li>
                <div className="bimgbox">
                  <CircleChevronDown size={14} color="#4ADE80" />
                </div>
                <div className="btbox">
                  <h1>자동화된 급여 계산 및 신고</h1>
                </div>
              </li>
              <li>
                <div className="bimgbox">
                  <CircleChevronDown size={14} color="#4ADE80" />
                </div>
                <div className="btbox">
                  <h1>실시간 근태 현황 모니터링</h1>
                </div>
              </li>
              <li>
                <div className="bimgbox">
                  <CircleChevronDown size={14} color="#4ADE80" />
                </div>
                <div className="btbox">
                  <h1>강력한 보안 및 권한 관리</h1>
                </div>
              </li>
            </ul>

            <div className="freebtn">
              <Gift size={18} />
              <h1>30일 무료 체험 제공</h1>
            </div>
          </div>
        </div>

        <div className="lgwrap">
          <div className="lglrin">
            <div className="tlgbox">
              <h1>회원가입</h1>
              <p>계정을 만들어 인사관리를 시작하세요</p>
            </div>
            <div className="lginbox">
              <label>
                <p>성</p>
                <input
                  onChange={(e) =>
                    setallinput((tt) => {
                      return {
                        ...tt,
                        firstName: e.target.value,
                      };
                    })
                  }
                  type="text"
                  placeholder="성"
                />
              </label>
              <label>
                <p>이름</p>
                <input
                  onChange={(e) =>
                    setallinput((tt) => {
                      return {
                        ...tt,
                        name: e.target.value,
                      };
                    })
                  }
                  type="text"
                  placeholder="이름"
                />
              </label>

              <label>
                <p>사번</p>
                <IdCard className="laicon" size={18} />
                <input
                  onChange={(e) =>
                    setallinput((tt) => {
                      return {
                        ...tt,
                        employeeNo: e.target.value,
                      };
                    })
                  }
                  type="text"
                  placeholder="EMP-0001"
                />
              </label>
              <label>
                <p>부서</p>
                <Building2 className="laicon" size={18} />
                <select
                  onChange={(e) =>
                    setallinput((tt) => {
                      return {
                        ...tt,
                        departmentName: e.target.value,
                      };
                    })
                  }
                  name=""
                  id=""
                >
                  <option value="">소속 부서 선택</option>
                  <option value="경영지원본부">경영지원본부</option>
                  <option value="물류운영본부">물류운영본부</option>
                  <option value="냉장/냉동물류본부">냉장/냉동물류본부</option>
                  <option value="차량관리본부">차량관리본부</option>
                  <option value="창고운영본부">창고운영본부</option>
                  <option value="영업본부">영업본부</option>
                  <option value="IT본부">IT본부</option>
                </select>
              </label>

              <label>
                <p>직급</p>
                <Briefcase className="laicon" size={18} />
                <select
                  onChange={(e) =>
                    setallinput((tt) => {
                      return {
                        ...tt,
                        positionName: e.target.value,
                      };
                    })
                  }
                  name=""
                  id=""
                >
                  <option value="">직급 선택</option>
                  <option value="사원">사원</option>
                  <option value="과장">과장</option>
                  <option value="부장">부장</option>
                  <option value="팀장">팀장</option>
                  <option value="사장">사장</option>
                </select>
              </label>
              <label>
                <p>회사 이메일</p>
                <Mail className="laicon" size={18} />
                <input
                  onChange={(e) =>
                    setallinput((tt) => {
                      return {
                        ...tt,
                        email: e.target.value,
                      };
                    })
                  }
                  type="text"
                  placeholder="company@example.com"
                />
              </label>

              <label>
                <p>비밀번호</p>
                <Lock className="laicon" size={18} />
                <EyeOff className="laiconpw" size={18} />
                <input
                  onChange={(e) =>
                    setallinput((tt) => {
                      return {
                        ...tt,
                        password: e.target.value,
                      };
                    })
                  }
                  type="text"
                  placeholder="비밀번호 입력"
                />
              </label>
              <label>
                <p>비밀번호 확인</p>
                <Lock className="laicon" size={18} />
                <CircleChevronDown className="laiconpw" size={18} />
                <input
                  onChange={(e) =>
                    setallinput((tt) => {
                      return {
                        ...tt,
                        checkPassword: e.target.value,
                      };
                    })
                  }
                  type="password"
                  placeholder="비밀번호 재입력"
                />
              </label>
            </div>

            <p className="infoic">
              <Info size={14} /> 영문, 숫자, 특수문자 포함 8자리 이상
            </p>

            <div className="lgbtns">
              <label>
                <input
                  checked={ogdo}
                  onChange={(e) => {
                    setogdo(e.target.checked);
                  }}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>이용약관 및 개인정보처리방침에 동의합니다</p>
              </label>
              <span>내용 보기</span>
            </div>

            <button
              className="logedbtn"
              onClick={() => {
                회원가입();
              }}
            >
              <UserPlus size={18} />
              회원가입
            </button>

            <p className="hone">
              이미 계정이 있으신가요?
              <span onClick={() => loginvw()}>로그인하기</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
