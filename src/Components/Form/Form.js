import { useState } from "react";
import "./Form.css";

function Form({ getData }) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [alert, setAlert] = useState(false);

  const formEval = (e) => {
    e.preventDefault();

    if (isNaN(height) || isNaN(weight)) {
      console.log("not a number");
      setAlert(true)
    } else {
      getData(height, weight);
      setHeight("");
      setWeight("");
      setAlert(false);
    }
  };

  return (
    <form action="" onSubmit={formEval}>
      <h1>BMI CALCULATOR</h1>
      
      <span>ENTER YOUR WEIGHT IN KILOGRAM</span>
      
      <input
        type="text"
        required
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        placeholder=" Weight In Kilogram....."
      />
       <span>ENTER YOUR HEIGHT IN METER</span>
       
      <input
        type="text"
        required
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Height In Size Meter....."
        />

      <br />
     {alert &&  <alert>Plese Enter Valid Inputs</alert>}
        <br />
      <button>Check IBM</button>
    </form>
  );
}

export default Form;
