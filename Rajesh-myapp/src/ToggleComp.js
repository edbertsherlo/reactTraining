import React, { useState, useEffect } from "react";

function ToggleComp() {
  useEffect(() => {
    console.log("toggle compone star");
  }, []);
  return (
    <div>
      <h1>Toggle Component</h1>
    </div>
  );
}

export default ToggleComp;
