import React, { useState, useEffect } from "react";

function Second(props) {
  return (
    <div>
      <h3>Second Comp {props.static}</h3>
      <h3>Counter {props.pCount}</h3>
    </div>
  );
}
export default Second;
