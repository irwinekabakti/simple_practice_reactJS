import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;

/**
======= NOTE =======
 * LINE 6 => ${props.className}
    => is receiving props/data from AddUser.js in line 11 
====================
 * className={classes.card} is gaining from import classes from "./Card.module.css";
 */
