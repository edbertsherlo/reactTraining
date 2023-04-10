import logo from "./logo.svg";
import "./App.css";
import React, { createContext, useContext, useEffect, useState } from "react";
import User from "./User";
import { Counter } from "./Counter";
import FirstComp from "./FirstComp";
import { useSelector } from "react-redux";

// export const UserContext = React.createContext();

function App() {
  const count = useSelector((state) => state.counter.value);

  const [apiData, setApiData] = useState([]);

  // apiData = "demo";
  useEffect(() => {
    // https://jsonplaceholder.typicode.com/todos
    // fetch("https://api.github.com/users/eunit99/repos")
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setApiData(data);
    //   });
    // console.log("rsut", result);
    // const res = fetch("https://jsonplaceholder.typicode.com/todos");
    // console.log("result", res);
  }, []);
  return (
    // <UserContext.Provider value="Reed">
    //   <User />
    // </UserContext.Provider>
    <div>
      <h1>Parent Component</h1>
      <div>Count value on Parent Comp:{count}</div>

      {/* <h1> Fetch Example</h1> */}
      {/* {apiData.map((data) => {
        return <div key={data.id}>{data.title}</div>;
      })} */}
      <h2>Child Component</h2>

      <FirstComp />

      {/* <Counter /> */}
    </div>
  );
}

export default App;
