import React from "react";
import classes from "./Nav.module.css";
export default function Nav({ filters, filter, setFilter }) {
  const onFilterChange = (filter) => {
    setFilter(filter);
  };

  return (
    <div className={classes.container}>
      <div className={classes.dark}>Light</div>
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
