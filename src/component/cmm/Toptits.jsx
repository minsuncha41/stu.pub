import {
  Calculator,
  CheckCheck,
  Copy,
  Pencil,
  Printer,
  RotateCcw,
  Save,
} from "lucide-react";
import s from "./Toptits.module.css";

export default function Toptits({
  toptits,
  lftwtbtnno,
  sjbtnon,
  ptbtnon,
  retwtbtnno,
  retsaveimg,
  gsbtnon,
  ckdbtnon,
  prtbtnon,
  clprtbtnon,
  ttct,
  gbgbtnon,
  jndbtnon,
}) {
  return (
    <div className={s.toptits}>
      <div className={s.maps}>
        <img src="/House.png" alt="" />
        <span>&gt;</span>
        <p>{toptits.ttmap}</p>
        <span>&gt;</span>
        <p>{toptits.map} </p>
        <span>&gt;</span>
        <p className={s.mapsces}>{toptits.tit}</p>
      </div>

      <div
        className={s.tit}
        style={{ justifyContent: ttct ? "center" : "space-between" }}
      >
        <div className={s.titl}>
          <h3>{toptits.tit}</h3>
          <p>{toptits.text}</p>
        </div>
        <div className={s.titr}>
          <button
            className={s.lftwtbtn}
            style={{ display: lftwtbtnno ? "none" : "flex" }}
          >
            <img src="/Download.png" alt="" />
            {toptits.tllbtn}
          </button>

          {/* 급여기본정보관리 */}
          <button
            className={s.sjbtn}
            style={{ display: sjbtnon ? "flex" : "none" }}
          >
            <Pencil size={14} />
            일괄수정
          </button>

          {/* 급여지급*/}
          <button
            className={s.sjbtn}
            style={{ display: ptbtnon ? "flex" : "none" }}
          >
            <Printer size={14} />
            급여명세서 출력
          </button>

          {/* 4대보험요율표설정 */}
          <button
            className={s.sjbtn}
            style={{ display: jndbtnon ? "flex" : "none" }}
          >
            <Copy size={14} />
            전년도 복사
          </button>
          <button
            className={s.sjbtn}
            style={{ display: gbgbtnon ? "flex" : "none" }}
          >
            <RotateCcw size={14} />
            기본값
          </button>

          {/* 기본버튼 */}
          <button
            className={s.retblbtn}
            style={{ display: retwtbtnno ? "none" : "flex" }}
          >
            <p style={{ display: retsaveimg ? "none" : "flex" }}>+</p>

            <div
              className={s.savebox}
              style={{ display: retsaveimg ? "flex" : "none" }}
            >
              <Save size={14} />
            </div>
            {toptits.trrbtn}
          </button>

          {/* 급여계산 */}
          <button
            className={s.retgsbtn}
            style={{ display: gsbtnon ? "flex" : "none" }}
          >
            <Calculator size={14} />
            전직원 일괄계산
          </button>

          <button
            className={s.retblbtn}
            style={{ display: ckdbtnon ? "flex" : "none" }}
          >
            <CheckCheck size={14} />
            급여확정
          </button>

          <button
            className={s.prtbtn}
            style={{ display: prtbtnon ? "flex" : "none" }}
          >
            <Printer size={14} />
            인쇄
          </button>
          <button
            className={s.clprtbtn}
            style={{ display: clprtbtnon ? "flex" : "none" }}
          >
            <Printer size={14} />
            전체 명세서 출력
          </button>
        </div>
      </div>
    </div>
  );
}
