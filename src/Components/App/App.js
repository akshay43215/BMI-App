import { useState } from "react";
import "./App.css";
import Form from "../Form/Form";
import BmiScore from "../Bmiscore/BmiScore";
import BmiList from "../Bmilist/BmiList";

function App() {
  const [show, setShow] = useState(true);
  const [changeWeight, setChangeWeight] = useState({ wight: "", type: "" });

  const [bmi, setBmi] = useState("00");
  const [bmiType, setBmiType] = useState("Not calculated");

  const [bmiRange, setBmiRang] = useState({
    underWeight: { low: "" },
    normal: { low: "", high: "" },
    overWeight: { low: "", high: "" },
    obesityOne: { low: "", high: "" },

    obesityTwo: { low: "", high: "" },
    obesityThree: { high: "" },
  });

  const onFormSub = (h, w) => {
    console.log(h, w);
    let cb = calBmi (h, w);
    
    setBmi(cb);

    setBmiType(weightType(cb));

    // set all bmi Type
    const range = {
      underWeight: { low: calWeight(18.5, h) },
      normal: { low: calWeight(18.5, h), high: calWeight(24.9, h) },
      overWeight: { low: calWeight(25, h), high: calWeight(29.9, h) },
      obesityOne: { low: calWeight(30, h), high: calWeight(34.9, h) },
      obesityTwo: { low: calWeight(35, h), high: calWeight(39.9, h) },
      obesityThree: { high: calWeight(40, h) },
    };

    // set bmi range to state
    setBmiRang(range);

    // calculate the weight difference

    setChangeWeight(weightChange(cb, w, range));
    // show all components on click
    setShow(true);
  };
  

  // bmi calculation
  const calBmi = (h, w) => ((h * h)/w).toFixed(2);
     
   
  const calWeight = (cb, h) => (cb * h * h).toFixed(2);

  //fn get weight difference
  const weightChange = (cb, w, range) => {
    let changeObj;
    if (cb > 24.9) {
      changeObj = {
        wight: (w - range.normal.high).toFixed(2),
        type: "positive",
      };
      return changeObj;
    } else if (cb < 18.5) {
      changeObj = {
        wight: (range.normal.low - w).toFixed(2),
        type: "negative",
      };
      return changeObj;
    } else {
      changeObj = { wight: 0, type: "normal" };
      return changeObj;
    }
  };

  // fn get weight type
  const weightType = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (18.5 < bmi && bmi < 24.9) {
      return "Normal";
    } else if (24.9 < bmi && bmi < 29.9) {
      return "Over Weight";
    } else if (29.9 < bmi && bmi < 34.9) {
      return "Obesity Class I";
    } else if (34.9 < bmi && bmi < 39.9) {
      return "Obesity Class II";
    } else if (bmi > 39.9) {
      return "Obesity Class III";
    }
  };

  return (
    <div>
      <Form getData={onFormSub} />
      {show && (
        <div id="div1">
          <BmiScore bmiNo={bmi} bmiName={bmiType} changeWeight={changeWeight} />
          <BmiList range={bmiRange} bmi={bmi} />
        </div>
      )}
    </div>
  );
}

export default App;
