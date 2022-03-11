import React from "react";
import styles from "./Modal.module.css";
import Card from "./Card";
import Button from "./Button";
const Modal = (props) => {
    
  return (
    <div>
      <div onClick={props.onHide} className={styles.backdrop} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.msgs}>
          <p>{props.msg}</p>
        </div>
        <footer className={styles.actions}>
          <Button type="submit" onclick={props.onHide}>close</Button>
        </footer>
      </Card>
    </div>
  );
};
export default Modal;
