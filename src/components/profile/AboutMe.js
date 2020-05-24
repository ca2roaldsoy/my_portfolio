import React from "react";

function AboutMe() {
  return (
    <section className="aboutMe">
      <h3 className="aboutMe__title">About Me</h3>
      <p className="aboutMe__text">I am a front end developer.</p>
      <p className="aboutMe__text">
        I enjoy coding and I like to keep things simple and in structure. I also
        like to keep myself updated with the newest things.
      </p>
      <p className="aboutMe__text">
        I love working in teams as well as doing things on my own. Getting
        others opinion will only help improve projects.
      </p>
      <p className="aboutMe__quoute">
        <em>
          &laquo; It's very important to have a feedback loop, where you
          constantly thinking about what you've done and how you could be doing
          things better
        </em>
        &raquo;
      </p>
      <p className="aboutMe__quoute--name">
        <span>&#45; Elon Musk</span>
      </p>
    </section>
  );
}

export default AboutMe;
