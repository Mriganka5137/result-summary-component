import "./Marks.css";
import { ReactSVG } from "react";

export default function Marks({ title, icon, marks, color, backgroundColor }) {
  const style = {
    color: color,
    fontWeight: "600",
  };

  const backgroundStyle = {
    backgroundColor: backgroundColor,
  };
  return (
    <li className="list-item" style={backgroundStyle}>
      <div>
        <img src={icon} alt="" srcset={icon} />
        <span style={style}>{title} </span>
      </div>
      <div>
        <span className="mark">{marks} </span>
        <span className="full-mark"> / 100</span>
      </div>
    </li>
  );
}
