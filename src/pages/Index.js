import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={'M '
    + '.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About</Link></h2>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more about me,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link> {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p>
        My career path has been fulfilling and exciting. At Hack Health, I contributed
        to various modules, most notably developing PosePro—an app that offers real-time posture
        improvement prompts using advanced technologies like Django and React.
        I am proud to have led initiatives that resulted in significant upticks
        in user retention and drastically improved accuracy and response times.
      </p>
      <p>
        I am actively involved in research at the SCU Imaginarium Lab. Here,
        I have executed distributed crawls to bolster our dataset and developed
        applications that have significantly contributed to the success of the lab,
        leading to a paper acceptance by the esteemed IROS conference.
      </p>
      <p>
        On the project front, KODEE—a language service application—is
        my most recent endeavor. With features ranging from real-time terminology
        prompts to enhanced speech transcription, this project perfectly encapsulates
        my dedication to crafting efficient and user-friendly solutions.
      </p>
      <p>
        My toolbox includes a rich array of languages, frameworks, and other
        technical skills which I have harnessed throughout my academic and professional
        journey. From harnessing Scrapy crawlers to containerizing applications
        using Docker, my technical journey has been both diverse and fulfilling.
      </p>
    </article>
  </Main>
);

export default Index;
