"use client";

import { useEffect, useState } from "react";
import s from "./Nav.module.css";

export default function Nav({ none, num1, num2, num3, num4 }) {
  //  const [names, setnames] = useState();
  //  const [departmentNames, setdepartmentNames] = useState();
  // const [navif] = useState(() => ({
  //   departmentName: localStorage.getItem("departmentName"),
  //   name: localStorage.getItem("name"),
  // }));

  const [navif, setNavif] = useState({
    departmentName: "",
    name: "",
  });

  useEffect(() => {
    const name = localStorage.getItem("name");
    const departmentName = localStorage.getItem("departmentName");

    setNavif({
      departmentName: departmentName,
      name: name,
    });
  }, []);

  return (
    <header className={s.header}>
      <nav className={s.navlft}>
        <ul>
          <li className={s.logo}>
            <a href="http://localhost:3000/info/register">
              <img alt="imgs" src="/Briefcase Business.png" />
              인사관리시스템
            </a>
          </li>

          <li className={num1 ? s.navlftces : ""}>
            <a href="http://localhost:3000/info/register">인사관리</a>
          </li>
          <li className={num2 ? s.navlftces : ""}>
            <a href="http://localhost:3000/gtgl/gtdl">근태관리</a>
          </li>
          <li className={num3 ? s.navlftces : ""}>
            <a href="http://localhost:3000/gogl/gojbgl">급여관리</a>
          </li>
          <li className={num4 ? s.navlftces : ""}>
            <a href="">일용직관리</a>
          </li>
        </ul>
      </nav>

      <ul className={s.navret} style={{ display: none ? "none" : "flex" }}>
        <li>
          <a href="http://localhost:3000/login/loginvw">
            <img alt="imgs" src="/Bell.png" />
          </a>
        </li>
        {/* <li className={s.name}>{navif?.name?[0]} ?? "홍"</li> */}
        <li className={s.name}>{navif?.name?.slice(0, 1) ?? "홍"}</li>
        {/* <li className={s.name}>홍</li> */}
        <li>
          <a href="/bsssggj/gj">
            <p>{navif?.name ?? "홍길동"}</p>
          </a>
          {/* <p>홍길동</p> */}
        </li>
        <li>{navif?.departmentName}</li>
        {/* <li>인사팀</li> */}
        <li>
          <img alt="imgs" src="/Log Out.png" />
        </li>
      </ul>
    </header>
  );
}
