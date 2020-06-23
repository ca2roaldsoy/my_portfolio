import React from "react";
import Education from "./Education";

function Experience() {
  return (
    <>
      <h2 className="text-center">EXPERIENCE</h2>
      <section className="timelineExplanation">
        <small>E = Education</small> <br />
        <small>W = Work</small>
      </section>
      <article>
        <Education />
      </article>
    </>
  );
}

export default Experience;
