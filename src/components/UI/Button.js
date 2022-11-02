import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;

/**
 * ======= NOTE =======
 * The componenent Button is export to AddUser.js
 * className={classes.button} => is styling by import classes from "./Button.module.css"
 * type={props.type || "button"} => is type of the button you want or related with AddUser.js line 18
 * onClick={props.onClick} => is the behavior button
 * {props.children} => is the content of Button or nama dari tag <Button></Button> secara otomatis reactive tanpa hardcode
 */
