import { CheckCheck, Pencil, Printer, Save } from "lucide-react";
import s from "./Toptits.module.css";

export default function Toptits ({toptits, lftwtbtnno, sjbtnon, ptbtnon, retwtbtnno, retsaveimg, ckdbtnon, prtbtnon, ttct}) {


    return(
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

            <div className={s.tit}
            style={{ justifyContent: ttct ? "center" : "space-between" }}            
            >
                <div className={s.titl}>
                    <h3>{toptits.tit}</h3>
                    <p>{toptits.text}</p>
                </div>
                <div className={s.titr}>
                    <button className={s.lftwtbtn}
                    style={{ display: lftwtbtnno ? "none" : "flex" }}
                    >
                        <img src="/Download.png" alt="" />
                        {toptits.tllbtn}
                    </button>


                    <button className={s.sjbtn}
                    style={{ display: sjbtnon ? "flex" : "none" }}
                    >
                        <Pencil size={14} />
                        일괄수정
                    </button>
                    <button className={s.sjbtn}
                    style={{ display: ptbtnon ? "flex" : "none" }}
                    >
                        <Printer size={14} />
                        급여명세서 출력
                    </button>

                    <button className={s.retblbtn}
                    style={{ display: retwtbtnno ? "none" : "flex" }}
                    >
                        <p style={{ display: retsaveimg ? "none" : "flex" }}>+</p>
                        
                        <div className={s.savebox}
                            style={{ display: retsaveimg ? "flex" : "none" }}
                        >
                            <Save size={14} />
                        </div>
                        {toptits.trrbtn}
                    </button>

                    <button className={s.retblbtn}
                    style={{ display: ckdbtnon ? "flex" : "none" }}
                    >   
                        <CheckCheck size={14} />
                        급여확정
                    </button>


                    <button className={s.prtbtn}
                    style={{ display: prtbtnon ? "flex" : "none" }}
                    >
                        <Printer size={14} />
                        인쇄
                    </button>


                </div>
            </div>
        </div>
    )
}