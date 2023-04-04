import React, { useState, useEffect } from "react";
import Second from "./Second";
import ToggleComp from "./ToggleComp";
// import "./FirstCss.module";

function First(props) {
  const [tog, setTog] = useState(true);
  useEffect(() => {
    console.log("Componet Started");
    return () => {
      console.log("component ended");
    };
  }, []);
  return (
    <div>
      <h3>First Comp {props.static}</h3>
      {/* <h3>Counter {props.countValue}</h3> */}
      {/* <button onClick={props.handleClick}>Increment from Child</button> */}
      {/* <input
        type="text"
        // value={this.state.value}
        // onChange={this.handleChange}
      /> */}
      {/* <Second static="pro from first" pCount={props.countValue} /> */}
      {tog && <ToggleComp />}
    </div>
  );
}
export default First;
