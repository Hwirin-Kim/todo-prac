import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import classes from "./Nav.module.css";
export default function Nav({ filters, filter, setFilter }) {
  const onFilterChange = (filter) => {
    setFilter(filter);
  };
  const { isDark, toggleDark } = useDarkMode();
  return (
    <div className={classes.container}>
      <div className={classes.dark} onClick={toggleDark}>
        {isDark ? "Dark" : "Light"}
      </div>
      <div className={classes.menu}>
        {filters.map((el) => {
          return (
            <button
              className={`${classes.filter} ${
                filter === el && classes.selected
              } `}
              key={el}
              onClick={() => onFilterChange(el)}
            >
              {el}
            </button>
          );
        })}
      </div>
    </div>
  );
}
