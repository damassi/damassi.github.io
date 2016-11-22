import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div id='home' className='home'>
        <div className='name'>
          Christopher Pappas | <a href='mailto:damassi.pappas@gmail.com'>damassi.pappas@gmail.com</a>
        </div>
        <div className='description'>
          Working within Full-Stack Application Development with a focus on JavaScript, UI Engineering and Frontend DevOps
        </div>
        <div className='skills'>
          <h2>
            SKILLS
          </h2>
          <p>
            ES6+ written in the Functional and Object Oriented style; Expert skill-level with React.js and Redux, including ecosystem; Expert Frontend DevOps skills with a focus on Webpack; Experience with Ruby on Rails and Django; Test-driven Development via Mocha, Jasmine and RSpec; Experience with AWS and cloud environments such as Heroku; and much more.
          </p>
          <p>
            Experience with Elm, ClojureScript, Objective-C, Unity3D, Lua and audio composition using Ableton Live.
          </p>
        </div>

        <br />
      </div>
    )
  }
}
