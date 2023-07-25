import "./Result.css";
export default function Result() {
  return (
    <div className="container">
      <h3 className="summary-heading">Your Result</h3>
      <div className="circle">
        <h4 className="score">76</h4>
        <p>of 100</p>
      </div>
      <div className="remark">
        <h3>Great</h3>
        <p>
          You scored higher than 65% of the people who have taken these tests
        </p>
      </div>
    </div>
  );
}
