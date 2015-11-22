import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    return (
      <div id='resume' className='resume'>
        <p>
          Seattle, Washington <br />
          347.592.4035 <br />
          <a href='mailto:damassi.pappas@gmail.com' target='_blank'>
            damassi.pappas@gmail.com
          </a>
        </p>
        <p>
          <a href='http://damassi.github.io/assets/resume/resume-christopher-pappas-2015.pdf' target='_blank'>
            Download PDF
          </a>
        </p>
        <p>
          Working within Full-Stack Application Development / Mobile / Design / Animation / Motion Graphics / Game Development and Sound
        </p>
        <h2>
          WORK EXPERIENCE:
        </h2>
        <a href='http://www.postlight.com' target='_blank'>
          Time Inc / Postlight
        </a>
        <div className='date-worked'>
          2015 – CURRENT
        </div>
        <p>
          Lead Developer and Architect
        </p>
        <ul>
          <li>
            Lead developer within a team of four responsible for developing Assignment Desk, a digital asset management platform for Time Inc's many publications
          </li>
          <li>
            Developed a scalable, fullstack, React.js-based framework, built on top of Redux, Redux Form, React Router and more
          </li>
          <li>
            Responsible for initiating process improvements, including the use of Asana
          </li>
        </ul>
        <a href='http://www.kindlingapp.com' target='_blank'>
          Kindling – NEW YORK, NEW YORK
        </a>
        <div className='date-worked'>
          2014 – CURRENT
        </div>
        <p>
          Sr. Developer / UI Engineer
        </p>
        <ul>
          <li>
            Lead JavaScript developer on Kindling, a highly complex and international SAAS software application used by many Fortune 500 companies and built on top of Backbone.js and React
          </li>
          <li>
            Responsible for modernizing / refactoring the entire application on to 2015 standards.  This included:
            <ul>
              <li>
                Moving the technology stack off of an antiquated ensemble of uncoordinated shell scripts and onto a Gulp-based build process
              </li>
              <li>
                Implementing a CI/Jenkins-based Unit Testing suite that runs after every commit
              </li>
              <li>
                Refactoring many, many hundreds of files off of Require.js (AMD) and onto CommonJS via Node.js and Webpack, which has allowed for a seamless migration-path onto modern tooling such as ES6 (ECMAScript 2015) and React.js
              </li>
              <li>
                Removing Bower in favor of Node Package Manager (NPM), which unified many disparate areas of the application under a single package manager
              </li>
              <li>
                Restructuring the entire application around a Service Oriented Architecture in an attempt to mitigate “Monolith Creep” as well as position the frontend to better serve our API-centric backend
              </li>
            </ul>
          </li>
          <li>
            Initiated and led the process of modernizing / updating Kindling’s Product Development feature workflow.  This included designing an entirely new system based around Asana (which replaced a very old Trac-based system), coordinating training, and onboarding new staff
          </li>
        </ul>
        <a href='http://www.wintr.us' target='_blank'>
          WINTR – SEATTLE, WASHINGTON
        </a>
        <div className='date-worked'>
          2014 – 2014
        </div>
        <p>
          Front-end Developer
        </p>
        <ul>
          <li>
            Lead developer on a number of highly visible single-page applications for Coke and Sonic
          </li>
          <li>
            Led internal technology initiative to move front-end workflows off of a slower, Ruby-based pipeline and onto Node.js
          </li>
          <li>
            Introduced test-driven development into front-end development workflows
          </li>
        </ul>
        <a href='http://www.pop.us' target='_blank'>
          POP AGENCY – SEATTLE, WASHINGTON
        </a>
        <div className='date-worked'>
          2012 – 2014
        </div>
        <p>
          Sr. Interactive JavaScript / Front-End Developer (Staff)
        </p>
        <ul>
          <li>
            Worked on large-scale (30,000+ LOC) web and mobile applications for companies such as Nike, Amazon, Microsoft and Toyota
          </li>
          <li>
            Provided extensive thought leadership in all areas through experimentation, research and training
          </li>
          <li>
            Modernized front-end development workflows by introducing tools such as Node, Grunt, SASS Git and TD
          </li>
          <li>
            Implemented long-term technology initiatives, including setup of a self-hosted GitLab instance aimed at coordinating source-code architectures and fostering collaboration
          </li>
        </ul>
        <a href='http://www.click3x.com' target='_blank'>
          CLICK 3X – NEW YORK, NEW YORK
        </a>
        <div className='date-worked'>
          2011 – 2012
        </div>
        <p>
          Sr. Interactive Developer (Staff)
        </p>
        <ul>
          <li>
            Worked within all facets of Interactive Development, from web to desktop to mobile
          </li>
          <li>
            Provided thought leadership and training, including extensive research and development
          </li>
          <li>
            Coordinated and trained junior team members on a variety of technologies and frameworks
          </li>
        </ul>

        <a href='http://www.sho.com' target='_blank'>
          SHOWTIME NETWORKS – NEW YORK, NEW YORK
        </a>
        <div className='date-worked'>
          2010
        </div>
        <p>
          Interactive Developer / Designer (Freelance)
        </p>
        <ul>
          <li>
            Worked on developing a series of large-scale company-wide initiatives in the field of web and mobile technologies
          </li>
          <li>
            Responsible for brainstorming, prototyping, wireframing and design
          </li>
        </ul>
        <a href='http://www.visualgoodness.com/vg2/' target='_blank'>
          VISUAL GOODNESS – NEW YORK, NEW YORK
        </a>
        <div className='date-worked'>
          2009 – 2010
        </div>
        <p>
          Interactive Developer / Animator (Freelance)
        </p>
        <ul>
          <li>
            Developed, animated and produced Flash websites for a number of high-profile companies such as Canon, Samsung, Digitas and more
          </li>
        </ul>
        <a href='http://www.motorola.com/Consumers/US-EN/Home' target='_blank'>
          MOTOROLA GLOBAL – CHICAGO, ILLINOIS
        </a>
        <div className='date-worked'>
          2006 – 2009
        </div>
        <p>
          Sr. Interactive Art Director / Developer / Motion-Graphics Designer (Staff)
        </p>
        <ul>
          <li>
            Designed, directed and developed global interactive web marketing campaign
          </li>
          <li>
            Was responsible for directing junior team members on a project-to-project basis. This included project management, developing programs for knowledge transfers and providing design/dev support
          </li>
          <li>
            Designed and developed training programs for various business units
          </li>
        </ul>
      </div>
    )
  }
}
