import React from "react";
import dayjs from 'dayjs'
import classes from "./jobcard.module.css";

export default function JobCard({postedOn,title,skills,company,type,experience,location,job_link, target}) {
    // const skills = ["Javascript", "React","Nodejs"];
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(postedOn, "days");
  return (
    <div className={classes.container}>
      <div className={classes.AllFlex}>
        <div className={classes.JobCardBg}>
          <div className={classes.JobCardFlex}>
            <div className={classes.JobCardDetails}>
              <h4>{title} - {company}</h4>
              <p>{type} - {experience} - {location}</p>
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            <div className={classes.JobCardBtn}>
              <span>Posted {diffInDays} days ago</span>

             <a href={job_link} target={target}> <button>Apply</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
