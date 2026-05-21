import "./layout.module.css";
export default function layout({ children }){
    return(
        <div className="layout">
            { children }
        </div>
    )
}