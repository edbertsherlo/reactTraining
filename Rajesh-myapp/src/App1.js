import logo from "./logo.svg";
import "./App.css";
import Welcome from "./Welcome";
import React, { useState, useEffect, useTransition } from "react";
import First from "./First";

function App(props) {
  //   const [isToggleon, setIsToggleon] = useState();
  const [count, setCount] = useState(0);
  const [countValue, setCountValue] = useState(5);
  const [warningMsg, setWarningMsg] = useState("");
  const [propValue, setPropValue] = useState("proV");
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    console.log("useEff", count);
    if (count == 10 || countValue == 10) {
      setWarningMsg("count reached 10");
    }
  }, [count, countValue]);

  //   useEffect(() => {
  //     console.log("useEff", countValue);
  //     if (countValue == 10) {
  //       setWarningMsg("count reached 10");
  //     }
  //   }, [countValue]);

  // useEffect(() => {
  //   console.log("useEffect Fist Time", props);
  //   // if (countValue == 10) {
  //   //   setWarningMsg("count reached 10");
  //   // }
  //   // setPropValue(propValue + props.name);
  //   return () => {
  //     console.log("Exit APP");
  //   };
  // }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const incrementByFive = (e) => {
    e.preventDefault();

    setCountValue(countValue + 5);
  };

  const toggleFirst = (e) => {
    e.preventDefault();

    setToggle(!toggle);
  };

  //   const element = (
  //     <div>
  //       <h2>{props.name}</h2>
  //       <h2>{myvar}</h2>
  //     </div>
  //   );
  return (
    <div className="App">
      <h1>useEffect example</h1>
      <div>
        <h2>{count}</h2>
        <h2>{countValue}</h2>
      </div>
      <div>
        <h3>{warningMsg}</h3>
      </div>
      <div>{propValue}</div>
      {/* <button onClick={handleClick}>Increment</button> */}
      <button onClick={incrementByFive}>Increment by 5</button>
      <button onClick={toggleFirst}>Toggle First</button>

      {toggle && (
        <First
          static="props From App"
          countValue={count}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}

export default App;
