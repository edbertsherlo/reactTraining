import React, { useState, useEffect } from "react";

import Employee from "./Employee";

// const EmployeeContext = React.createContext();

export const EmployeeContext = React.createContext();

function AppUseContext() {
  const [employee, setEmployee] = useState({
    Id: 101,
    Name: "Pragim",
    Location: "Bangalore",
    Salary: 12345,
  });
  return (
    <EmployeeContext.Provider value={"text"}>
      <div>
        <h1>UseContext Hooks</h1>
        <Employee />
      </div>
    </EmployeeContext.Provider>
  );
}
export default AppUseContext;
