import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

//import "./styles.css";

function Users() {
  const [users, setUsers] = useState();

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/"
    ).then((response) => response.json());

    setUsers(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="app">
      {users &&
        users.map((user) => (
          <div className="item-container">
            Id:{user.id} <div className="title">Title:{user.title}</div>
          </div>
        ))}
    </div>
  );
}

export default Users;