import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [userNameInput, setUserNameInput] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (e) => {
    e.preventDefault();
    if (userNameInput.trim().length === 0 || userAge.length === 0) {
      setError({
        titile: "Invalid Input",
        message: "Please enter a valid name and age (non empty values).",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        titile: "Invalid age",
        message: "Please enter a age (>0).",
      });
      return;
    }
    props.userData({
      id: Math.random().toString(),
      name: userNameInput,
      age: userAge,
    });

    setUserNameInput("");
    setUserAge("");
  };
  const onInputNameChangeHandler = (e) => {
    setUserNameInput(e.target.value);
  };

  const onAgeChangeHandler = (e) => {
    setUserAge(e.target.value);
  };
  const errorHandler = () => {
    setError();
    setUserNameInput("");
    setUserAge("");
  };
  return (
    <div>
      {error && (
        <ErrorModal
          titile={error.title}
          message={error.message}
          onClick={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="userName">UserName:</label>
          <input
            id="userName"
            type={"text"}
            value={userNameInput}
            onChange={onInputNameChangeHandler}
          />
          <label htmlFor="age">Age (Years):</label>
          <input
            id="age"
            type={"number"}
            value={userAge}
            onChange={onAgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
