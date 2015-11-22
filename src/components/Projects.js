import React, { Component } from 'react'

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
                      {tag}
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
        'url': 'http://www.kindlingapp.com',
        'title': 'Kindling',
        'content': '<p><img class=\'673\' alt=\'1\' src=\'/assets/images/2015/kindling/1.png\' width=\'700\' height=\'auto\' /></p>\n<p><img class=\'674\' alt=\'2\' src=\'/assets/images/2015/kindling/2.png\' width=\'700\' height=\'auto\' /></p>\n<p><img class=\'676\' alt=\'4\' src=\'/assets/images/2015/kindling/3.png\' width=\'700\' height=\'auto\' /></p>\n<p><img class=\'676\' alt=\'4\' src=\'/assets/images/2015/kindling/4.png\' width=\'700\' height=\'auto\' /></p>\n',
        'tags': [
          'backbone',
          'react',
          'javascript',
          'responsive'
        ],
        'description': 'Kindling is a SAAS-based software application that helps the best ideas in an organization rise to the top.  It is easy to use and highly customizable, with an interface built on top of React.js, Backbone and Sass.  As Sr. Developer / UI Engineer, my responsibilities have included refactoring the entire application off of an old, less-than-modern Require.js model and onto Node.js and Webpack, shifting the UI architecture away from Backbone.js and onto React, as well as re-architecting the structure around SOA principles.'
      },
      {
        'url': 'https://itunes.apple.com/us/app/amazon-local-register-amazons/id825947720?mt=8',
        'title': 'Amazon Local Register Mobile App',
        'content': '<p><img class=\'673\' alt=\'1\' src=\'/assets/images/2014/amz/1.jpg\' width=\'700\' height=\'359\' /></p>\n<p><img class=\'674\' alt=\'2\' src=\'/assets/images/2014/amz/2.jpg\' width=\'700\' height=\'357\' /></p>\n<p><img class=\'676\' alt=\'4\' src=\'/assets/images/2014/amz/3.jpg\' width=\'700\' height=\'333\' /></p>\n',
        'tags': [
          'backbone',
          'responsive',
          'spa'
        ],
        'description': "Amazon Local Register is Amazon's entry into the Point of Sale marketplace.  As one of three core JavaScript developers responsible for architecting and building out the customer-facing portion of the app and store, I touched nearly every aspect of the code, from POC to final delivery."
      },
      {
        'url': 'http://www.ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh.com/',
        'title': 'Coke | MPC Ahhh Beat Maker App',
        'content': '<p><img class=\'673\' alt=\'1\' src=\'/assets/images/2014/06/1.jpg\' width=\'700\' height=\'359\' /></p>\n<p><img class=\'674\' alt=\'2\' src=\'/assets/images/2014/06/2.jpg\' width=\'700\' height=\'357\' /></p>\n<p><img class=\'676\' alt=\'4\' src=\'/assets/images/2014/06/41.png\' width=\'700\' height=\'333\' /></p>\n',
        'tags': [
          'backbone',
          'parse',
          'responsive',
          'spa'
        ],
        'description': 'MPC Ahh is a responsive single-page app that allows the user to create and share beats, as well as play along via live pads.  Built on top of Backbone and Parse, with nearly full test coverage via Mocha.'
      },
      {
        'url': '',
        'title': 'Toyota | EShowroom',
        'content': '<p><a href=\'assets/images/2013/07/toy-1.jpg\'><img class=\'452\' alt=\'toy-1\' src=\'/assets/images/2013/07/toy-1.jpg\' width=\'700\' height=\'611\' /><br />\n</a> <img class=\'453\' alt=\'toy-2\' src=\'/assets/images/2013/07/toy-2.jpg\' width=\'700\' height=\'611\' /><br />\n<img class=\'454\' alt=\'toy-3\' src=\'/assets/images/2013/07/toy-3.jpg\' width=\'700\' height=\'611\' /><br />\n<img class=\'455\' alt=\'toy-home\' src=\'/assets/images/2013/07/toy-home.jpg\' width=\'700\' height=\'611\' /><br />\n<img class=\'456\' alt=\'toy-profile\' src=\'/assets/images/2013/07/toy-profile.jpg\' width=\'700\' height=\'611\' /><br />\n<a href=\'assets/images/2013/07/toy-video.jpg\'><img class=\'457\' alt=\'toy-video\' src=\'/assets/images/2013/07/toy-video.jpg\' width=\'700\' height=\'611\' /><br />\n</a></p>\n',
        'tags': [
          'backbone',
          'marionette',
          'less'
        ],
        'description': "Toyota EShowroom was Toyota's attempt to modernize how thousands of dealerships across the world communicate with one another, and with their customers.  Not only was it a complete digital catalog of their cars and trucks, but also an internal social network which allowed managers, customer service representatives and other employees to communicate, share information and stay up to date with the latest offerings from Toyota.  \r\n\r\n<br/><br/>\r\n\r\nAs one of many JavaScript developers on the project, I was tasked with building out the main product pages and search, as well as refactoring, towards the end, many (many) thousands of lines of code for maintainability and stability reasons.  \r\n\r\n<br/><br/>\r\n\r\nThe project is currently only viewable internally by Toyota employees, but the screenshots to your left should give you a glimpse at the complexity of the task.  \r\n\r\n<br/><br/>\r\n\r\nThis was, by far, POP Agency's largest digital project, many years in the making."
      },
      {
        'url': '',
        'title': 'Nike+ | FuelBand SE Global Kiosk',
        'content': '<p><img class=\'658\' alt=\'image\' src=\'/assets/images/2013/11/image.jpg\' width=\'960\' height=\'710\' /></p>\n<p><img class=\'653\' alt=\'Nike_b_1\' src=\'/assets/images/2013/11/Nike_b_1.png\' width=\'700\' height=\'394\' /></p>\n<p>&nbsp;</p>\n',
        'tags': [
          'backbone',
          'sass'
        ],
        'description': 'With the new release of the Nike+ FuelBand SE, Nike wanted to revamp their current in-store kiosk presence to reflect the latest style.  Released in over 200 NikeTown stores around the world, the kiosk features an interactive touch-screen interface, video, analytics and more.  I was the lead JavaScript developer on the project, responsible for coding and animation.'
      },
      {
        'url': '',
        'title': 'Nike | Factory Store Kiosk',
        'content': '<p><img class=\'489\' alt=\'nike-1\' src=\'/assets/images/2013/07/nike-1.jpg\' width=\'700\' height=\'1244\' /> <img class=\'490\' alt=\'nike-2\' src=\'/assets/images/2013/07/nike-2.jpg\' width=\'700\' height=\'1244\' /> <img class=\'491\' alt=\'nike-3\' src=\'/assets/images/2013/07/nike-3.jpg\' width=\'700\' height=\'1244\' /> <img class=\'492\' alt=\'nike-4\' src=\'/assets/images/2013/07/nike-4.jpg\' width=\'700\' height=\'1244\' /></p>\n<p><img class=\'648\' alt=\'nike-instore\' src=\'/assets/images/2013/07/nike-instore.jpg\' width=\'700\' height=\'941\' /></p>\n',
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
        'content': '<p><img class=\'121\' title=\'show_1\' alt=\'\' src=\'/assets/images/2012/03/show_1.jpg\' width=\'700\' height=\'420\' /></p>\n<p><img class=\'122\' title=\'sho_2\' alt=\'\' src=\'/assets/images/2012/03/sho_2.jpg\' width=\'700\' height=\'420\' /></p>\n<p><img class=\'123\' title=\'show_3\' alt=\'\' src=\'/assets/images/2012/03/show_3.jpg\' width=\'700\' height=\'420\' /></p>\n<p><img class=\'124\' title=\'sho_4\' alt=\'\' src=\'/assets/images/2012/03/sho_4.jpg\' width=\'700\' height=\'420\' /></p>\n',
        'tags': [
          'AS3',
          'Brightcove Video API'
        ],
        'description': 'Showtime Anytime is a one-stop location for subscribers to access all of Showtime’s programming.  Brought on as one of two developers, I was involved in every stage of the project; from brainstorming, wire-framing and art direction to programming, I was working with a core team involved in bringing a much-desired product—and one of Showtime’s biggest online properties—to life. '
      },
      {
        'url': '',
        'title': 'Motorola | Global Design Wiki',
        'content': '<p><img class=\'97\' title=\'moto_6\' alt=\'\' src=\'/assets/images/2012/05/moto_6.jpg\' width=\'700\' height=\'420\' /></p>\n<p><img title=\'moto_3\' alt=\'\' src=\'/assets/images/2012/05/moto_3.jpg\' width=\'700\' height=\'420\' /></p>\n',
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
        'content': '<p><img class=\'643\' alt=\'quityourbank\' src=\'/assets/images/2013/08/quityourbank.png\' width=\'700\' height=\'471\' /></p>\n',
        'tags': [
          'design',
          'javascript',
          'php'
        ],
        'description': 'At the height of Occupy Wallstreet my girlfriend and I wanted to find a way to contribute and came up with QuitYourBank.org, a site to showcase solidarity support for alternative banking systems in opposition to the global banking cartels.'
      }
    ],
    'query': {
      'ignore_sticky_posts': true,
      'count': '200'
    }
  }
}
