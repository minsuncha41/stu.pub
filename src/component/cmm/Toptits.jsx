import { Save } from "lucide-react";
import s from "./Toptits.module.css";

export default function Toptits ({toptits, lftwtbtnno, plusimgno}) {


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

            <div className={s.tit}>
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
                    <button className={s.retblbtn}>
                        <p style={{ display: plusimgno ? "none" : "flex" }}>+</p>
                        
                        <div className={s.savebox}
                            style={{ display: plusimgno ? "flex" : "none" }}
                        >
                            <Save size={14} />
                        </div>
                        {toptits.trrbtn}
                    </button>
                </div>
            </div>
        </div>
    )
}