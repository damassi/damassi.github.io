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
          <a href='http://damassi.github.io/assets/resume/resume-christopher-pappas-2016.pdf' target='_blank'>
            Download PDF
          </a>
        </p>
        <p>
          Working within Full-Stack Application Development with a focus on JavaScript, UI Engineering and Frontend DevOps
        </p>


        <h2>
          WORK EXPERIENCE
        </h2>

        <a href='http://www.thegroundwork.com' target='_blank'>
          TIMSHEL / THE GROUNDWORK – NEW YORK, NEW YORK
        </a>
        <div className='date-worked'>
          2016 – CURRENT
        </div>
        <p>
          Frontend Software Engineer
        </p>
        <ul>
          <li>
            Part of a small, tight-knit team responsible for developing a React / Redux-based SaaS application on top of microservices developed for the Hillary Clinton presidential campaign (<a href='https://developer.thegroundwork.com/' target='_blank'>https://developer.thegroundwork.com</a>)
          </li>
          <li>
            Core contributor to our open-source library, Groundwork.js (<a href='https://github.com/thegroundwork/groundwork.js'>https://github.com/thegroundwork/groundwork.js</a>)
          </li>
          <li>
            Implemented large-scale refactors across the entire stack to improve tooling with a focus on performance and optimization around DX (Developer Experience)
          </li>
        </ul>

        <a href='http://www.postlight.com' target='_blank'>
          TIME INC / POSTLIGHT – NEW YORK, NEW YORK
        </a>
        <div className='date-worked'>
          2015 – 2016
        </div>
        <p>
          Lead Developer / Architect
        </p>
        <ul>
          <li>
            Lead developer within a team of four responsible for developing Assignment Desk, a digital asset management platform for Time Inc's many publications
          </li>
          <li>
            Developed a scalable, full-stack, React.js-based framework, built on top of Redux, Redux Form, React Router and more
          </li>
          <li>
            Responsible for initiating process improvements, including the use of Asana
          </li>
        </ul>
        <a href='http://www.kindlingapp.com' target='_blank'>
          KINDLING – NEW YORK, NEW YORK
        </a>

        <div className='date-worked'>
          2014 – CURRENT
        </div>
        <p>
          Sr. Developer / UI Engineer
        </p>
        <ul>
          <li>
            Lead JavaScript developer on Kindling, a highly complex and international SaaS software application used by many Fortune 500 companies and built on top of Backbone.js and React
          </li>
          <li>
            Responsible for modernizing / refactoring the entire application up to 2015 standards.  This included:
            <ul>
              <li>
                Moving the technology stack off of an antiquated ensemble of uncoordinated shell scripts and onto a Gulp-based build process
              </li>
              <li>
                Implementing a CI/Jenkins-based Unit Testing suite that runs after every commit
              </li>
              <li>
                Refactoring many, many hundreds of files off of Require.js (AMD) and onto CommonJS via Node.js and Webpack, which has allowed for a seamless migration path onto modern tooling such as ES6 (ECMAScript 2015) and React.js
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
            Developed an <a href='https://github.com/damassi/react-tinymce-mention' target='_blank'>@mention library</a> for TinyMCE, built on top of React.js and Redux
          </li>
          <li>
            Initiated and led the process of modernizing / updating Kindling’s Product Development feature workflow.  This included designing an entirely new system based around Asana (which replaced a very old Trac-based system), coordinating training and onboarding new staff
          </li>
        </ul>

        <a href='http://www.avvo.com' target='_blank'>
          AVVO – SEATTLE, WASHINGTON
        </a>
        <div className='date-worked'>
          2014
        </div>
        <p>
          Software Developer
        </p>
        <ul>
          <li>
            Worked on a team responsible for Avvo Advisor, a Ruby on Rails service that instantly connects users to an attorney
          </li>
          <li>
            Implemented features surrounding attorney lookup and email, as well as a Twilio gem for phone-based communication
          </li>
          <li>
            Worked on interactive editorial features, responsible for client-side JavaScript and animation
          </li>
        </ul>

        <a href='http://www.pop.us' target='_blank'>
          POP AGENCY – SEATTLE, WASHINGTON
        </a>
        <div className='date-worked'>
          2012 – 2014
        </div>
        <p>
          Sr. Interactive JavaScript / Front-End Developer
        </p>
        <ul>
          <li>
            Worked on large-scale (30,000+ LOC) web and mobile applications for companies such as Amazon (Local Register), Microsoft (The New Outlook), Toyota (EShowroom) and Nike (Kiosks)
          </li>
          <li>
            Modernized front-end development workflows by introducing tools such as Node.js, Browserify, Grunt, CSS pre-processors and Git
          </li>
          <li>
            Implemented long-term technology initiatives, including setup of a self-hosted GitLab instance aimed at coordinating source-code architectures and fostering collaboration
          </li>
          <li>
            Provided extensive thought leadership in all areas through experimentation, research and training
          </li>
        </ul>

        <a href='http://www.click3x.com' target='_blank'>
          CLICK 3X – NEW YORK, NEW YORK
        </a>
        <div className='date-worked'>
          2011 – 2012
        </div>
        <p>
          Sr. Interactive Developer
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
          Interactive Developer / Designer
        </p>
        <ul>
          <li>
            Worked on the core team responsible for developing version 1.0 of Showtime Anytime, Showtime's premiere content streaming service
          </li>
        </ul>

        <a href='http://www.motorola.com/Consumers/US-EN/Home' target='_blank'>
          MOTOROLA GLOBAL – CHICAGO, ILLINOIS
        </a>
        <div className='date-worked'>
          2006 – 2009
        </div>
        <p>
          Sr. Interactive Art Director / Developer / Motion-Graphics Designer
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


        <h2>
          REFERENCES
        </h2>

        <p>
          Garrett Kalleberg, CTO and Creative Director / Kindling <br />
          <a href='mailto: garrettk@kindlingapp.com'>
            garrettk@kindlingapp.com
          </a>
        </p>

        <p>
          Jim Nielsen, Lead Designer / Kindling <br />
          <a href='mailto: jimniels@gmail.com'>
            jimniels@gmail.com
          </a>
        </p>


      </div>
    )
  }
}
