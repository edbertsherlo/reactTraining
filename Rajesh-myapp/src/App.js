import logo from "./logo.svg";
import "./App.css";
import Welcome from "./Welcome";
import React, { useState, useEffect } from "react";

function App(props) {
  let myvar = 0;
  console.log("Props", props);
  const [isToggleon, setIsToggleon] = useState([]);

  myvar = 20;

  useEffect(() => {}, []);

  const handleClick = (e, id) => {
    myvar = "str";
    // setIsToggleon((state) => ({ ...state, count: 10 }));
    let tempObj = isToggleon;
    console.log("tempObj", tempObj);
    tempObj.count = 100;
    tempObj.countValue = 500;
    console.log("tempObj", tempObj);
    let tempArr = [];
    tempArr.push("apple");
    tempArr.push("banana");
    tempArr.push("organge");

    // setIsToggleon({ ...isToggleon, count: 11 });
    setIsToggleon(tempArr);
    // console.log
  };

  const element = (
    <div>
      <h2>{props.name}</h2>
      <h2>{myvar}</h2>
    </div>
  );
  return (
    <div>
      <div className="App">
        <div>
          <h1>Welcome {props.name}</h1>
          {/* <h1>Welcome {isToggleon.count}</h1>
          <h1>Welcome {isToggleon.countValue}</h1> */}
          <h2>fruit : {isToggleon[0]}</h2>
          <h2>fruit : {isToggleon[1]}</h2>

          {isToggleon.map((fruit, index) => (
            <h2 key={index}>{fruit}</h2>
          ))}

          {element}
        </div>
        <Welcome name="test123" />
        <Welcome name="test123" />
        {/* <Welcome name="test123" />
        <Welcome name="test123" />

        <Welcome name="student" />
        <Welcome name="react" /> */}
        {/* <button onClick={handleClick}>Submit</button> */}
        <button onClick={(e) => handleClick(e, "id")}>Toggle</button>
      </div>
      <div>
        <h1>Second DIv</h1>
      </div>
    </div>
  );
}
//   const [count, setCount] = useState(0);
//   const [fruit, setFruit] = useState('banana');
//   const [name, setName] = useState('stu');
//   const [profile, setProfile] = useState({pName:'stu',org:'test'});

// this.state = {
//   count: 0,
//   fruit:'apple',
//   name:'stu'
// };

// setProfile(()=>{
//   profile.pName='changed'
// })

export default App;
