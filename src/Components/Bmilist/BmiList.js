
import './BmiList.css';

function BmiList(props) {
  const { range, bmi } = props;

  return (
    <div className="container2">
      <table  >
        <thead>
          <tr>

            <th >Type</th>
            <th >BMI</th>
            <th >WEIGHT</th>

          </tr>
        </thead>

        <tbody>
          <tr
            className={
              bmi < 18.5
                ? "border border-danger border-3 list-group-item"
                : "list-group-item"
            }
          >

            <td  >Underweight</td>
            <td  >&lt; 18.5</td>
            <td  >&lt; {range.underWeight.low} kg</td>

          </tr>
          <tr
            className={
              18.5 < bmi && bmi < 24.9
                ? "border border-danger border-3 list-group-item"
                : "list-group-item"
            }
          >

            <td  >Normal</td>
            <td  >18.5-24.9</td>
            <td  >
              {range.normal.low + " kg -" + range.normal.high + " kg"}{" "}
            </td>


          </tr>
          <tr
            className={
              24.9 < bmi && bmi < 29.9
                ? "border border-danger border-3 list-group-item"
                : "list-group-item"
            }
          >

            <td  >Over Weight</td>
            <td  >25-29.9</td>
            <td  >
              {range.overWeight.low + " kg -" + range.overWeight.high + " kg"}
            </td>

          </tr>
          <tr
            className={
              29.9 < bmi && bmi < 34.9
                ? "border border-danger border-3 list-group-item"
                : "list-group-item"
            }
          >

            <td  >Obesity Class I</td>
            <td  >30-34.9</td>
            <td  >
              {range.obesityOne.low + " kg -" + range.obesityOne.high + " kg"}
            </td>

          </tr>
          <tr
            className={
              34.9 < bmi && bmi < 39.9
                ? "border border-danger border-3 list-group-item"
                : "list-group-item"
            }
          >

            <td  >Obesity Class II</td>
            <td  >35-39.9</td>
            <td  >
              {range.obesityTwo.low + " kg -" + range.obesityTwo.high + " kg"}
            </td>

          </tr>
          <tr
            className={
              bmi > 39.9
                ? "border border-danger border-3 list-group-item"
                : "list-group-item"
            }
          >

            <td  >Obesity Class III</td>
            <td  >&gt; 40</td>
            <td  >&gt; {range.obesityThree.high + " kg"}</td>

          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BmiList;
