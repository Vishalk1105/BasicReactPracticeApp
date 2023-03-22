import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

function App() {
  const [data, setData] = useState([]);

  const onAddData = (enteredData) => {
    setData((prevData) => {
      return [...prevData, enteredData];
    });
  };
  return (
    <div>
      <AddUser userData={onAddData} />
      <UsersList users={data} />
    </div>
  );
}

export default App;
