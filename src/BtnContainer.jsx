import React from "react";

const BtnContainer = ({ jobs, currentlTtem, setCurrentlTtem }) => {
  return (
    <div className="btn-container">
      {/* <button className="job-btn">all</button> */}
      {jobs.map((job, index) => {
        return (
          <button
            key={job.id}
            onClick={() => setCurrentlTtem(index)}
            className={
              index === currentlTtem ? "job-btn active-btn" : "job-btn"
            }
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
