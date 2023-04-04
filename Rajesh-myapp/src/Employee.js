/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect, useContext } from "react";

function Employee({ children }) {
  // eslint-disable-next-line no-undef
  let context = React.useContext(EmployeeContext);

  return (
    <div>
      <h2>Welcome to Employee Component...</h2>
      <p>
        <label>
          Employee ID : <b>{context.Id}</b>
          {/* <EmployeeContext.Consumer> */}
          {/* {(value) => <span>{value.Id}</span>} */}
          {/* </EmployeeContext.Consumer> */}
        </label>
      </p>
      <p>
        <label>{/* Employee Name : <b>{context.Name}</b> */}</label>
      </p>
      {/* <Salary></Salary> */}
      {children}
    </div>
  );
}

export default Employee;
