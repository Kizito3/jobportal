import React from "react";
import classes from "./search.module.css";
import "../../App.css";
export default function SearchBar() {
  return (
    <section className={classes.container}>
      <div className={classes.selectFlex}>
        <select className="">
          <option value="" hidden disabled selected>
            Job Role
          </option>
          <option value="IOS Developer">IOS Developer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Android Developer">Android Developer</option>
          <option value="SEO Expert">SEO Expert</option>
          <option value="Fullstack Developer">Fullstack Developer</option>
        </select>
        <select className="">
          <option value="" hidden disabled selected>
            Job Type
          </option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Contract">Contract</option>
        </select>
        <select className="">
          <option value="" hidden disabled selected>
            Location
          </option>
          <option value="Remote">Remote</option>
          <option value="In-Office">In-Office</option>
          <option value="Hybrid">Hybrid</option>
        </select>
        <select className="">
          <option value="" hidden disabled selected>
            Experience
          </option>
          <option value="Fresher">Fresher</option>
          <option value="Junior Level">Junior Level</option>
          <option value="Mid Level">Mid Level</option>
          <option value="Senior Level">Senior Level</option>
        </select>
        <button className={classes.btn}>Search</button>
      </div>
    </section>
  );
}
