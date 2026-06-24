import s from "./Aside.module.css";

export default function Aside({ dummy, idxs, subidxs, main, mainsub }) {
  return (
    <header>
      <div className={s.lftber}>
        {dummy.map((item, idx) => (
          <ul key={idx}>
            <p>
              <img src={item.titin.icon} alt="" />
              {item.titin.titname}{" "}
            </p>

            {item.sublit.map((subit, subidx) => (
              <li
                className={
                  `to${idx + 1}to${subidx + 1}` === `to${idxs}to${subidxs}`
                    ? s.lftberces
                    : ""
                }
                key={subidx}
              >
                <a
                  {...(item.mainsub[subidx] === ""
                    ? {} // href 속성 자체를 빼버림
                    : {
                        href: `http://localhost:3000/${item.titin.main}/${item.mainsub[subidx]}`,
                      })}
                >
                  {" "}
                  <span>●</span>
                  {subit}{" "}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </header>
    // const dummy = [
    //     {
    //         titin: { icon: "/User.png", titname:"인사정보" },
    //         sublit: [ "인사정보등록", "사원명수/인사기록카드" , "인사발령등록" ]
    //     },
    //     {
    //         titin: { icon: "/Heart Handshake.png", titname:"경조비신청" },
    //         sublit: [ "경조비신청", "경조비신청현황" ]
    //     },
    //     {
    //         titin: { icon: "/File Text.png", titname:"증명서관리" },
    //         sublit: [ "증명서발급" ]
    //     },

    // ];

    // <div className={s.lftber}>
    //     <ul>
    //         <p><img src="/User.png" alt="" />인사정보</p>
    //         <li className={s.lftberces}><span>●</span>인사정보등록</li>
    //         <li><span>●</span>사원명수/인사기록카드</li>
    //         <li><span>●</span>인사발령등록</li>
    //     </ul>
    //     <ul>
    //         <p><img src="/Heart Handshake.png" alt="" />경조비신청</p>
    //         <li><span>●</span>경조비신청</li>
    //         <li><span>●</span>경조비신청현황</li>
    //     </ul>
    //     <ul>
    //         <p><img src="/File Text.png" alt="" />증명서관리</p>
    //         <li><span>●</span>증명서발급</li>
    //     </ul>
    // </div>
  );
}
