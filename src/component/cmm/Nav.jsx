import s from "./Nav.module.css";

export default function Nav({none, num1,num2,num3,num4,}){
    return(
        <header className={s.header}>
            <nav className={s.navlft}>
                <ul>
                    <li className={s.logo}>
                       <a href="http://localhost:3000/info/register"><img src="/Briefcase Business.png"/>인사관리시스템</a>
                    </li>

                    <li className={ num1 ? s.navlftces : ""}>
                        <a href="http://localhost:3000/info/register">인사관리</a>
                    </li>
                    <li className={ num2 ? s.navlftces : ""}>
                        <a href="http://localhost:3000/gtgl/gtdl">근태관리</a>
                    </li>
                    <li className={ num3 ? s.navlftces : ""}>
                        <a href="http://localhost:3000/gogl/gojbgl">급여관리</a>
                    </li>
                    <li className={ num4 ? s.navlftces : ""}>
                        <a href="">일용직관리</a>
                    </li>
                </ul>
            </nav>

            <ul
                className={s.navret}
                style={{ display: none ? "none" : "flex" }}
            >                
                <li><img src="/Bell.png"/></li>
                <li className={s.name}>홍</li>
                <li><p>홍길동</p></li>
                <li>인사팀</li>
                <li><img src="/Log Out.png"/></li>
            </ul>
        </header>
    )
}