import "./BmiScore.css";

function BmiScore({ bmiNo, bmiName, changeWeight }) {
  console.log(bmiNo);
  return (
    <div className="BmiScore">
      <h2>BMI SCORE</h2>
      <div>
        <h3>BMI  {bmiNo}</h3>
      </div>
        <h3 id="h3">{bmiName}</h3>

      {changeWeight.type === "positive" && (
        <h3> YOU NEED TO LOSE{changeWeight.wight}.Kg </h3>
      )}
      {changeWeight.type === "negative" && (
        <h3 id="type"> YOU NEED TO GAIN {changeWeight.wight}.Kg </h3>
      )}
      {changeWeight.type === "normal" && (
        <h3 id="type"> You weight is Normal,Good for you </h3>
      )}
    </div>
  );
}

export default BmiScore;
