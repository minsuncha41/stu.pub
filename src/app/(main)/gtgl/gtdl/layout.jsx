import s from "./layout.module.css";

export default function Layout({ children }) {
  return <div className={s.layout}>{children}</div>;
}
