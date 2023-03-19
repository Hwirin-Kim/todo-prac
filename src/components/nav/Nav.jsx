import React from "react";
import classes from "./Nav.module.css";
export default function Nav() {
  return (
    <div className={classes.container}>
      <div>Light</div>
      <div className={classes.menu}>
        <div>All</div>
        <div>Active</div>
        <div>Completed</div>
      </div>
    </div>
  );
}
