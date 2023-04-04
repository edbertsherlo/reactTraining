import logo from "./logo.svg";
import "./App.css";
import Welcome from "./Welcome";
import React, { useState, useEffect, useTransition } from "react";
import First from "./First";
import FormComp from "./FormComp";

function App(props) {
  const [toggle, setToggle] = useState(true);

  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     setCount(count + 1);
  //   };

  //   const incrementByFive = (e) => {
  //     e.preventDefault();

  //     setCountValue(countValue + 5);
  //   };

  const toggleFirst = (e) => {
    console.log("togglefirst c");
    e.preventDefault();

    setToggle(!toggle);
  };

  return (
    <div className="App">
      <h1>useEffect example</h1>

      {/* <button onClick={handleClick}>Increment</button> */}
      {/* <button onClick={incrementByFive}>Increment by 5</button> */}
      <button onClick={toggleFirst}>Toggle First</button>

      {toggle && (
        <First
          static="props From App"
          //   countValue={count}
          //   handleClick={handleClick}
        />
      )}
      <FormComp />
    </div>
  );
}

export default App;
