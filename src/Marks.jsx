import "./Marks.css";

export default function Marks({ title, icon, marks, color, backgroundColor }) {
  const style = {
    color: color,
  };

  const backgroundStyle = {
    backgroundColor: backgroundColor,
  };
  return (
    <li className="list-item" style={backgroundStyle}>
      <div>
        <span style={style}>{title} </span>
      </div>
      <div>
        <span className="mark">{marks}</span>
        <span>/100</span>
      </div>
    </li>
  );
}

const SvgIcon = ({ svgContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: svgContent }} />;
};
