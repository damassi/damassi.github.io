import React, { Component } from 'react'
import { capitalize } from 'lodash'

export default class Projects extends Component {
  render() {
    const { posts } = getProjects()

    return (
      <div id='projects' className='projects'>
        { posts.map((project, index) => {

          return (
            <div className='project' key={index}>
              <div className='title'>
                <h2>
                  {project.title}
                </h2>
                { project.url &&
                  <div className='link-site'>
                    <a href={project.url} target='_blank'>
                      Visit
                    </a>
                  </div> }
              </div>

              <div className='about-project'>
                <ul className='tags'>
                  { project.tags.map((tag, index) =>
                    <li key={index}>
                      {capitalize(tag)}
                    </li>
                  )}
                </ul>

                { project.description &&
                  <div
                    className='description'
                    dangerouslySetInnerHTML={{__html: project.description }}
                  /> }
              </div>

            <div
              className='images'
              dangerouslySetInnerHTML={{__html: project.content }}
            />

            </div>

          )
        })}
      </div>
    )
  }
}

function getProjects() {
  return {
    'posts': [
      {
        'url': '',
        'title': 'Assignment Desk',
        'content': "<p><img src='/assets/images/adesk/adesk-0.png' width='700' height='auto' /></p><p><img src='/assets/images/adesk/adesk-1.png' width='700' height='auto' /></p><p><img src='/assets/images/adesk/adesk-2.png' width='700' height='auto' /></p><p><img src='/assets/images/adesk/adesk-3.png' width='700' height='auto' /></p><p><img src='/assets/images/adesk/adesk-4.png' width='700' height='auto' /></p>",
        'tags': [
          'ES6+',
          'Functional',
          'Framework',
          'Full-Stack',
          'Node.js',
          'Restify',
          'React',
          'React Router',
          'Redux',
          'Redux Form',
          'S3',
          'Webpack'
        ],
        'description': "Built under extreme time constraints, Assignment Desk is part one of a series of software applications for Time Inc's Digital Asset Management team. As the lead developer and architect on the project, I was responsible for designing and developing a scalable React-based framework, as well as the supporting backend API service layer. The project was built entirely in the functional style, with Redux serving as my state management library of choice."
      },
      {
        'url': 'http://www.kindlingapp.com',
        'title': 'Kindling',
        'content': "<p><img src='/assets/images/kindling/kindling-3.png' width='700' height='auto' /></p><p><img src='/assets/images/kindling/kindling-0.png' width='700' height='auto' /></p> <p><img src='/assets/images/kindling/kindling-1.png' width='700' height='auto' /></p> <p><img src='/assets/images/kindling/kindling-2.png' width='700' height='auto' /></p>  ",
        'tags': [
          'Backbone',
          'React',
          'React Router',
          'Redux',
          'Webpack'
        ],
        'description': 'Kindling is a SAAS-based software application that helps the best ideas in an organization rise to the top.  It is easy to use and highly customizable, with an interface built on top of React.js, Backbone and Sass.  As Sr. Developer / UI Engineer, my responsibilities have included refactoring the entire application off of an old, less-than-modern Require.js model and onto Node.js and Webpack, shifting the UI architecture away from Backbone.js and onto React, as well as re-architecting the structure around SOA principles.'
      },
      {
        'url': 'https://github.com/damassi/react-tinymce-mention',
        'title': '@Mentions Library for TinyMCE',
        'content': "<p><img src='/assets/images/mentions/mentions-0.png' width='700' height='auto' /></p>",
        'tags': [
          'Library',
          'React',
          'Redux',
          'TinyMCE',
          'Webpack'
        ],
        'description': "Built on top of React and Redux, this library was written to support Kindling's commenting and notification needs. <br /> <a href='https://github.com/damassi/react-tinymce-mention' target='_blank'>github.com/damassi/react-tinymce-mention</a>"
      },
      {
        'url': 'https://itunes.apple.com/us/app/amazon-local-register-amazons/id825947720?mt=8',
        'title': 'Amazon Local Register Mobile App',
        'content': "<p><img src='/assets/images/2014/amz/1.jpg' width='700' height='359' /></p> <p><img src='/assets/images/2014/amz/2.jpg' width='700' height='357' /></p> <p><img src='/assets/images/2014/amz/3.jpg' width='700' height='333' /></p> ",
        'tags': [
          'backbone',
          'responsive',
          'spa'
        ],
        'description': "Amazon Local Register is Amazon's entry into the Point of Sale marketplace.  As one of three core JavaScript developers responsible for architecting and building out the customer-facing portion of the app and store, I touched nearly every aspect of the code, from POC to final delivery."
      },
      {
        'url': 'http://www.unseenworlds.net',
        'title': 'Unseen Worlds Records',
        'content': "<p><img src='/assets/images/usw/usw-0.png' width='700' height='auto' /></p><p><img src='/assets/images/usw/usw-1.png' width='700' height='auto' /></p><p><img src='/assets/images/usw/usw-2.png' width='700' height='auto' /></p><p><img src='/assets/images/usw/usw-3.png' width='700' height='auto' /></p><p><img src='/assets/images/usw/usw-4.png' width='700' height='auto' /></p><p><img src='/assets/images/usw/usw-5.png' width='700' height='auto' /></p>",
        'tags': [
          'Designer',
          'Full-Stack',
          'Ruby on Rails',
          'S3'
        ],
        'description': 'Unseen Worlds is a record label releasing quality editions of unheralded and revolutionary, yet accessible, avant garde music. I was responsible for design and development, including shopping cart integration and digital download management through Amazon S3.'
      },
      {
        'url': '',
        'title': 'Sonifi',
        'content': "<p><img src='/assets/images/sonifi/sonifi-1.png' width='700' height='auto' /></p>",
        'tags': [
          'Designer',
          'Flummox',
          'Full-Stack',
          'MapBox',
          'React',
          'Ruby on Rails',
          'Soundscapes',
          'S3'
        ],
        'description': 'Sonifi is a proof-of-concept software application that allows users to create geographical \"SoundScapes\" by uploading audio and annotating their environment. As more and more sounds are added and positioned, users can zoom in and navigate in full 3-dimensional sound. I was responsible for design and development, and chose React.js for the frontend and Ruby on Rails for the backend.'
      },
      {
        'url': 'http://www.avvo.com/advisor',
        'title': 'Avvo Advisor',
        'content': "<p><img src='/assets/images/avvo/avvo-0.jpg' width='700' height='auto' /></p><p><img src='/assets/images/avvo/avvo-1.jpg' width='700' height='auto' /> ",
        'tags': [
          'Ruby On Rails',
          'JavaScript',
          'Twilio'
        ],
        'description': 'Avvo Advisor is a software application that connects people to instant (or almost instant) legal advice. Working in Ruby on Rails, I was a part of the team responsible for building the app.'
      },
      {
        'url': 'http://www.ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh.com/',
        'title': 'Coke | MPC Ahhh Beat Maker App',
        'content': "<p><img src='/assets/images/2014/06/1.jpg' width='700' height='359' /></p> <p><img src='/assets/images/2014/06/2.jpg' width='700' height='357' /></p> <p><img src='/assets/images/2014/06/41.png' width='700' height='333' /></p> ",
        'tags': [
          'backbone',
          'parse',
          'responsive',
          'spa'
        ],
        'description': 'MPC Ahh is a responsive single-page app that allows the user to create and share beats, as well as play along via live pads.  I was responsible for architecture, development and animation, including a good amount of design direction. Built on top of Backbone and Parse, with nearly full test coverage via Mocha.'
      },
      {
        'url': '',
        'title': 'Toyota | EShowroom',
        'content': "<p><a href='assets/images/2013/07/toy-1.jpg'><img  alt='toy-1' src='/assets/images/2013/07/toy-1.jpg' width='700' height='611' /><br /> </a> <img  alt='toy-2' src='/assets/images/2013/07/toy-2.jpg' width='700' height='611' /><br /> <img  alt='toy-3' src='/assets/images/2013/07/toy-3.jpg' width='700' height='611' /><br /> <img  alt='toy-home' src='/assets/images/2013/07/toy-home.jpg' width='700' height='611' /><br /> <img  alt='toy-profile' src='/assets/images/2013/07/toy-profile.jpg' width='700' height='611' /><br /> <a href='assets/images/2013/07/toy-video.jpg'><img  alt='toy-video' src='/assets/images/2013/07/toy-video.jpg' width='700' height='611' /><br /> </a></p> ",
        'tags': [
          'backbone',
          'marionette',
          'less'
        ],
        'description': "Toyota EShowroom was Toyota's attempt to modernize how thousands of dealerships across the world communicate with one another, and with their customers.  Not only was it a complete digital catalog of their cars and trucks, but also an internal social network which allowed managers, customer service representatives and other employees to communicate, share information and stay up to date with the latest offerings from Toyota.  \r \r <br/><br/>\r \r As one of many JavaScript developers on the project, I was tasked with building out the main product pages and search, as well as refactoring, towards the end, many (many) thousands of lines of code for maintainability and stability reasons.  \r \r <br/><br/>\r \r The project is currently only viewable internally by Toyota employees, but the screenshots to your left should give you a glimpse at the complexity of the task.  \r \r <br/><br/>\r \r This was, by far, POP Agency's largest digital project, many years in the making."
      },
      {
        'url': '',
        'title': 'Nike+ | FuelBand SE Global Kiosk',
        'content': "<p><img  alt='image' src='/assets/images/2013/11/image.jpg' width='960' height='710' /></p> <p><img  alt='Nike_b_1' src='/assets/images/2013/11/Nike_b_1.png' width='700' height='394' /></p> <p>&nbsp;</p> ",
        'tags': [
          'backbone',
          'sass'
        ],
        'description': 'With the new release of the Nike+ FuelBand SE, Nike wanted to revamp their current in-store kiosk presence to reflect the latest style.  Released in over 200 NikeTown stores around the world, the kiosk features an interactive touch-screen interface, video, analytics and more.  I was the lead JavaScript developer on the project, responsible for coding and animation.'
      },
      {
        'url': '',
        'title': 'Nike | Factory Store Kiosk',
        'content': "<p><img  alt='nike-1' src='/assets/images/2013/07/nike-1.jpg' width='700' height='1244' /> <img  alt='nike-2' src='/assets/images/2013/07/nike-2.jpg' width='700' height='1244' /> <img  alt='nike-3' src='/assets/images/2013/07/nike-3.jpg' width='700' height='1244' /> <img  alt='nike-4' src='/assets/images/2013/07/nike-4.jpg' width='700' height='1244' /></p> <p><img  alt='nike-instore' src='/assets/images/2013/07/nike-instore.jpg' width='700' height='941' /></p> ",
        'tags': [
          'animation',
          'backbone',
          'chrome extension',
          'sass'
        ],
        'description': 'Nike came to POP looking to spice up their current in-store kiosk, and I was responsible for handling development of all facets of the experience.  This included JavaScript, SASS and animation, as well as a totally custom Chrome extension for managing various environmental use cases related to security, interaction and the on-screen keyboard.'
      },
      {
        'url': '',
        'title': 'SHOWTIME ANYTIME',
        'content': "<p><img  title='show_1' alt='' src='/assets/images/2012/03/show_1.jpg' width='700' height='420' /></p> <p><img  title='sho_2' alt='' src='/assets/images/2012/03/sho_2.jpg' width='700' height='420' /></p> <p><img  title='show_3' alt='' src='/assets/images/2012/03/show_3.jpg' width='700' height='420' /></p> <p><img  title='sho_4' alt='' src='/assets/images/2012/03/sho_4.jpg' width='700' height='420' /></p> ",
        'tags': [
          'AS3',
          'Brightcove Video API'
        ],
        'description': 'Showtime Anytime is a one-stop location for subscribers to access all of Showtime’s programming.  Brought on as one of two developers, I was involved in every stage of the project; from brainstorming, wire-framing and art direction to programming, I was working with a core team involved in bringing a much-desired product—and one of Showtime’s biggest online properties—to life. '
      },
      {
        'url': '',
        'title': 'Motorola | Global Design Wiki',
        'content': "<p><img  title='moto_6' alt='' src='/assets/images/2012/05/moto_6.jpg' width='700' height='420' /></p> <p><img title='moto_3' alt='' src='/assets/images/2012/05/moto_3.jpg' width='700' height='420' /></p> ",
        'tags': [
          'Custom Plugin Developemnt',
          'JavaScript',
          'PHP',
          'Wordpress'
        ],
        'description': 'While working at Motorola Global Interactive I was tasked with developing an online wiki that internal and outside agencies could refer to for design direction.  Built on top of WordPress, with plenty of JavaScript sprinkled about. '
      },
      {
        'url': '',
        'title': 'Quit Your Bank',
        'content': "<p><img  alt='quityourbank' src='/assets/images/2013/08/quityourbank.png' width='700' height='471' /></p> ",
        'tags': [
          'design',
          'javascript',
          'PHP'
        ],
        'description': 'At the height of Occupy Wallstreet my girlfriend and I wanted to find a way to contribute and came up with QuitYourBank.org, a site to showcase solidarity support for alternative banking systems in opposition to the global banking cartels.'
      }
    ]
  }
}
