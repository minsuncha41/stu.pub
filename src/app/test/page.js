import "./page.css";

export default function page(){

    return(
        <div className="wrap">
            <header>
                 <nav className="navlft">
                    <ul>
                        <li className="logo"><img src="/Briefcase Business.png"/>인사관리시스템</li>
                        <li>인사관리</li>
                        <li>근태관리</li>
                        <li>급여관리</li>
                        <li>일용직관리</li>
                    </ul>
                 </nav>
                  
                 <nav className="navret">
                    <ul>
                        <li><img src="/Bell.png"/></li>
                        <li className="name">홍</li>
                        <li><p>홍길동</p></li>
                        <li>인사팀</li>
                        <li><img src="/Log Out.png"/></li>
                    </ul>
                 </nav>

            </header>

        </div>
    )
}