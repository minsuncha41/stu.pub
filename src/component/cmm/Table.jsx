"use client";
import s from "./Table.module.css";
import { useEffect, useState, useEffectEvent } from "react";
import baseApi from "@/api/baseApi";

export default function Table({ tablecls, keywordss }) {
  const [employee, setemployee] = useState([]);
  //const [keyword, setkeword] = useState([]);

  const [page, setPage] = useState(1); // 페이지는 1부터 시작

  const handleNext = () => {
    if (employee.length < 10) {
      // 데이터가 없으면 페이지 유지
      return;
    }
    setPage((prev) => prev + 1);
    setCurrentPage((prev) => prev + 1); // 선택된 페이지 표시용
  };

  const handlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 1)); // 최소 1 이하로 내려가지 않게
    setCurrentPage((prev) => Math.max(prev - 1, 1)); // 최소 1 이하로 내려가지 않게
  };

  //api를 요청해서 받는다. 통신은async await붙인다
  const getEmployee = async () => {
    const token = localStorage.getItem("accessToken");

    const response = await baseApi.get("/api/v1/employees", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        keyword: keywordss ?? "",
        page: page,
      },
    });
    console.log(response.data.data);

    //useState를 넣는다
    setemployee(response.data.data);

    //useState에 있는 데이터를 렌더링 시킨다
  };

  useEffect(() => {
    const fetchData = async () => {
      await getEmployee();
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, keywordss]);

  const handleClick = (e) => {
    setPage(e); // 클릭한 숫자로 page 변경
    setCurrentPage(page); // 현재 선택된 페이지 상태
  };

  //페이지수 불러오기
  const [lastPage, setLastPage] = useState(1); // 마지막 페이지 번호
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호

  useEffect(() => {
    const fetchLastPage = async () => {
      const token = localStorage.getItem("accessToken");
      let page = 1;
      let finalPage = 1;

      while (true) {
        const response = await baseApi.get("/api/v1/employees", {
          headers: { Authorization: `Bearer ${token}` },
          params: { keyword: keywordss ?? "", page },
        });

        const data = response.data.data;

        if (data.length === 0) break; // 데이터 없으면 종료
        finalPage = page;
        if (data.length < 10) break; // 10보다 작으면 종료
        page++;
      }

      setLastPage(finalPage); // state에 저장
    };

    fetchLastPage();
  }, []);

  // useEffect(() => {
  //   getEmployee;
  // }, []);

  // const tablecls = [
  //     "NO",
  //     "사원번호",
  //     "성명",
  //     "부서",
  //     "직급",
  //     "입사일",
  //     "연락처",
  //     "이메일",
  //     "관리",
  //      "상태",
  // ]

  {
    /*
    
        <ul className="texts">
            <ul>
                <li>NO</li>
                <li>사원번호</li>
                <li>성명</li>
                <li>부서</li>
                <li>직급</li>
                <li>입사일</li>
                <li>연락처</li>
                <li>이메일</li>
                <li>재직상태</li>
                <li>관리</li>
            </ul>
            {employee.map((item, index) => (
                <ul>
                    <li>{index +1}</li>
                    <li>{item.employeeNo}</li>
                    <li>{item.name}</li>
                    <li>인사팀</li>
                    <li>팀장</li>
                    <li>2019.03.02</li>
                    <li>010-1234-5678</li>
                    <li>kim@company.com</li>
                    <li><span className="jjs">재직중</span></li>
                    <li><span className="sjs">수정</span></li>
                </ul>
            ))}
            <ul>
                <li>만든거 1</li>
                <li>EMP-001</li>
                <li>김철수</li>
                <li>인사팀</li>
                <li>팀장</li>
                <li>2019.03.02</li>
                <li>010-1234-5678</li>
                <li>kim@company.com</li>
                <li><span className="jjs">재직중</span></li>
                <li><span className="sjs">수정</span></li>
            </ul>
            <ul>
                <li>2</li>
                <li>EMP-002</li>
                <li>이영희</li>
                <li>경영지원팀</li>
                <li>과장</li>
                <li>2018.07.15</li>
                <li>010-9876-5432</li>
                <li>lee@company.com</li>
                <li><span className="jjs">재직중</span></li>
                <li><span className="sjs">수정</span></li>
            </ul>
            <ul>
                <li>3</li>
                <li>EMP-003</li>
                <li>박민준</li>
                <li>개발팀</li>
                <li>대리</li>
                <li>2021.08.01</li>
                <li>010-5555-7777</li>
                <li>park@company.com</li>
                <li><span className="hjs">휴직중</span></li>
                <li><span className="sjs">수정</span></li>
            </ul>
            <ul>
                <li>4</li>
                <li>EMP-004</li>
                <li>최지영</li>
                <li>영업팀</li>
                <li>사원</li>
                <li>2023.01.09</li>
                <li>010-3333-4444</li>
                <li>choi@company.com</li>
                <li><span className="jjs">재직중</span></li>
                <li><span className="sjs">수정</span></li>
            </ul>
            
            
            <ul className="textsbtns">
                <li>총 4건</li>
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
                    <span>2</span>
                    <span>3</span>
                    <span>&gt;</span>
                </li>
            </ul>
        </ul>
    
    
    */
  }

  return (
    <ul className={s.texts}>
      <ul>
        {tablecls.map((tb, idx) => (
          <li key={idx}>{tb}</li>
        ))}
      </ul>
      {/* {employee.map((item, index) => (
                <ul>
                    <li>{index +1}</li>
                    <li>{item.employeeNo}</li>
                    <li>{item.name}</li>
                    <li>인사팀</li>
                    <li>팀장</li>
                    <li>2019.03.02</li>
                    <li>010-1234-5678</li>
                    <li>kim@company.com</li>
                    <li><span className="jjs">재직중</span></li>
                    <li><span className="sjs">수정</span></li>
                </ul>
            ))} */}
      {employee.map((item, index) => (
        <ul key={item.employeeNo}>
          <li>{index + 1 + page * 10 - 10}</li>
          <li>{item.employeeNo}</li>
          <li>{item.name}</li>
          <li>인사팀</li>
          <li>팀장</li>
          <li>2019.03.02</li>
          <li>010-1234-5678</li>
          <li>kim@company.com</li>
          <li>
            <span className={s.jjs}>재직중</span>
          </li>
          <li>
            <span className={s.sjs}>수정</span>
          </li>
        </ul>
      ))}

      <ul>
        <li>만든거1</li>
        <li>EMP-001</li>
        <li>김철수</li>
        <li>인사팀</li>
        <li>팀장</li>
        <li>2019.03.02</li>
        <li>010-1234-5678</li>
        <li>kim@company.com</li>
        <li>
          <span className={s.jjs}>재직중</span>
        </li>
        <li>
          <span className={s.sjs}>수정</span>
        </li>
      </ul>
      <ul>
        <li>2</li>
        <li>EMP-002</li>
        <li>이영희</li>
        <li>경영지원팀</li>
        <li>과장</li>
        <li>2018.07.15</li>
        <li>010-9876-5432</li>
        <li>lee@company.com</li>
        <li>
          <span className={s.jjs}>재직중</span>
        </li>
        <li>
          <span className={s.sjs}>수정</span>
        </li>
      </ul>
      <ul>
        <li>3</li>
        <li>EMP-003</li>
        <li>박민준</li>
        <li>개발팀</li>
        <li>대리</li>
        <li>2021.08.01</li>
        <li>010-5555-7777</li>
        <li>park@company.com</li>
        <li>
          <span className={s.jjs}>재직중</span>
        </li>
        <li>
          <span className={s.sjs}>수정</span>
        </li>
      </ul>
      <ul>
        <li>4</li>
        <li>EMP-004</li>
        <li>최지영</li>
        <li>영업팀</li>
        <li>사원</li>
        <li>2023.01.09</li>
        <li>010-3333-4444</li>
        <li>choi@company.com</li>
        <li>
          <span className={s.jjs}>재직중</span>
        </li>
        <li>
          <span className={s.sjs}>수정</span>
        </li>
      </ul>

      <ul className={s.textsbtns}>
        <li>총 4건</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li>
          <span onClick={handlePrev}>&lt;</span>
          {Array.from({ length: lastPage }, (_, i) => (
            <span
              key={i + 1}
              onClick={() => handleClick(i + 1)}
              className={currentPage === i + 1 ? s.textsces : ""}
            >
              {i + 1}
            </span>
          ))}
          <span onClick={handleNext}>&gt;</span>
        </li>
        {/* <li>
          <span onClick={handlePrev}>&lt;</span>
          <span onClick={handleClick} className={s.textsces}>
            1
          </span>
          <span onClick={handleClick}>2</span>
          <span onClick={handleClick}>3</span>
          <span onClick={handleClick}>4</span>
          <span onClick={handleNext}>&gt;</span>
        </li> */}
      </ul>
    </ul>
  );
}
