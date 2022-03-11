import { Fragment, useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";


function App() {
  //creating a state to store auser object
  const [usersList, setUsersLits] = useState([]);

  //called by child compo
  //adds an user and returns the user lists to display it in UsersList.js comp
  const addUserhandler = (username, userage) => {
    let user = {
      key: Math.random() * 10 + username,
      name: username,
      age: userage,
    };
    setUsersLits((prev) => {
      return [...prev, user];
    });
  };

  //(called by child compo)
  //delets an specified user from the userlist and returns the updated state of userlist
  const deleteHandler = (id) => {
    setUsersLits((prev) => {
      const updatedList = usersList.filter((user) => user.key !== id);
      return updatedList;
    });
  };

  return (
    <Fragment className="app">
      <AddUser onAddUser={addUserhandler}></AddUser>
      <UsersList users={usersList} ondeleteItem={deleteHandler}></UsersList>
    </Fragment>
  );
}
export default App;
