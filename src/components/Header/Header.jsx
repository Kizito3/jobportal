import React from "react";
import classes from "./header.module.css";
export default function Header() {
  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <h1>Your ideal job awaits you, start the search</h1>
        <p>Get latest job openings that best suits you !!!</p>
      </div>
    </section>
  );
}
