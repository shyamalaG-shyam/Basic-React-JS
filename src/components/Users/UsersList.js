import React from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";
import UsersItem from "./UsersItem";

const UsersList = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <Card key={user.key} className={styles.users}>
          <UsersItem id={user.key} onDelete={props.ondeleteItem}>
            {user.name} ({user.age} years old)
          </UsersItem>
        </Card>
      ))}
    </ul>
  );
};
export default UsersList;
