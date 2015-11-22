import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div id='home' className='home'>
        <div className='name'>
          Christopher Pappas | <a href='mailto:damassi.pappas@gmail.com'>damassi.pappas@gmail.com</a>
        </div>
        <div className='description'>
          Working within Fullstack Application Development with a focus on JavaScript and UI Engineering
        </div>
        <div className='skills'>
          <h2>
            SKILLS:
          </h2>
          <p>
            ES6+ written in the Functional and Object Oriented style; Node.js; Ruby and Ruby on Rails; Expert level React.js and Redux; Backbone.js; Webpack and Browserify; ActionScript 3; Test-driven Development via Mocha, Jasmine and RSpec; native iOS development via RubyMotion; GIT and SVN; and much more.
          </p>
          <p>
            Experience with: Elm, Objective-C, Unity3D, Lua, and Audio composition using Ableton Live.
          </p>
        </div>

        <br />
      </div>
    )
  }
}
