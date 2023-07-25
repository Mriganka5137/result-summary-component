import "./Summary.css";
import Marks from "./Marks";
/**
 * 
 * - Light red: hsl(0, 100%, 67%)
- Orangey yellow: hsl(39, 100%, 56%)
- Green teal: hsl(166, 100%, 37%)
- Cobalt blue: hsl(234, 85%, 45%)
 */

const data = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
    color: "hsl(0, 100%, 67%)",
    backgroundColor: "hsl(0, 100%, 97%)",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
    color: "hsl(39, 100%, 56%)",
    backgroundColor: "hsl(39, 100%, 97%)",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
    color: "hsl(166, 100%, 37%)",
    backgroundColor: "hsl(166, 100%, 93%)",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
    color: "hsl(234, 85%, 45%)",
    backgroundColor: "hsl(234, 85%, 97%)",
  },
];

export default function Summary() {
  return (
    <div className="container--summary">
      <h3>Summary</h3>

      <ul className="list">
        {data.map((obj) => (
          <Marks
            title={obj.category}
            icon={obj.icon}
            marks={obj.score}
            color={obj.color}
            backgroundColor={obj.backgroundColor}
            key={obj.icon}
          />
        ))}
      </ul>

      <button className="btn" type="submit">
        Continue
      </button>
    </div>
  );
}
