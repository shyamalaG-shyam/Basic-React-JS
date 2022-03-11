import React, { useEffect, useRef, useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const AddUser = (props) => {
  //creating the state fr the input
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  //Using Ref
  const nameref = useRef();
  const passwordRef = useRef();

  //creating a state for error modal
  const [error, setError] = useState();

  const [ok, setOk] = useState(true);

  //updates a username on every keyStroke
  const namechangeHandler = (event) => {
    setUserName(event.target.value);
  };
  //updates a userage on every keyStroke
  const agechangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  //on submitting this function executes the adduserHandler fun in parent calls if there is no error
  //if there is an error it updates the error state with the error object
  const submitHandler = (event) => {
    event.preventDefault();
    if (
      userName.trim().length == 0 ||
      userAge.trim().length == 0 ||
      +userAge < 1
    ) {
      setError({
        title: "invalid input",
        msg: "No empty values considered",
      });
      setOk(false);
      return;
    }
    //accesing the values in refs
    console.log(nameref.current.value);
    console.log(passwordRef.current.value);

    setUserAge("");
    setUserName("");
    props.onAddUser(userName, userAge);
  };
  //sets moadl if there is an error
  const modalHandler = () => {
    setOk(true);
  };

  return (
    <div>
      {ok ? (
        ""
      ) : (
        <Modal
          title={error.title}
          msg={error.msg}
          onHide={modalHandler}
        ></Modal>
      )}

      <Card className={styles.inputs}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">UserName</label>
          <input
            ref={nameref}
            type="text"
            id="username"
            value={userName}
            onChange={namechangeHandler}
          ></input>
          <label htmlFor="userage">Age</label>
          <input
            ref={passwordRef}
            type="number"
            id="userage"
            value={userAge}
            onChange={agechangeHandler}
          ></input>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
