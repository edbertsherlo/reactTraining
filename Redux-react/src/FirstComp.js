import React, { createContext, useContext, useEffect, useState } from "react";
import { Counter } from "./Counter";

const FirstComp = () => {
  return (
    <>
      <h1>FirstComp</h1>
      <Counter />
    </>
  );
};

export default FirstComp;
