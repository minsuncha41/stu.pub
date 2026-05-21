import s from "./Nav.module.css";

export default function Nav(){
    return(
        <header className={s.header}>
            <nav className={s.navlft}>
                <ul>
                    <li className={s.logo}><img src="/Briefcase Business.png"/>인사관리시스템</li>
                    <li className={s.navlftces}>인사관리</li>
                    <li>근태관리</li>
                    <li>급여관리</li>
                    <li>일용직관리</li>
                </ul>
            </nav>

            <ul className={s.navret}>
                <li><img src="/Bell.png"/></li>
                <li className={s.name}>홍</li>
                <li><p>홍길동</p></li>
                <li>인사팀</li>
                <li><img src="/Log Out.png"/></li>
            </ul>
        </header>
    )
}