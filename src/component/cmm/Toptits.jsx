import s from "./Toptits.module.css";

export default function Toptits ({toptits}) {


    return(
        <div className={s.toptits}>
            <div className={s.maps}>
                <img src="/House.png" alt="" />
                <span>&gt;</span>
                <p>인사관리</p>
                <span>&gt;</span>
                <p>인사정보</p>
                <span>&gt;</span>
                <p className={s.mapsces}>{toptits.tit}</p>
            </div>

            <div className={s.tit}>
                <div className={s.titl}>
                    <h3>{toptits.tit}</h3>
                    <p>{toptits.text}</p>
                </div>
                <div className={s.titr}>
                    <button className={s.pdfbtn}>
                        <img src="/Download.png" alt="" />
                        PDF 다운로드
                    </button>
                    <button className={s.plusbtn}>
                        <p>+</p>
                        {toptits.dls}
                    </button>
                </div>
            </div>
        </div>
    )
}