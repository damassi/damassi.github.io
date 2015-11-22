import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div id='home' className='home'>
        <div className='name'>
          Christopher Pappas | <a href='mailto:damassi.pappas@gmail.com'>damassi.pappas@gmail.com</a>
        </div>
        <div className='description'>
          Working within Full-Stack Application Development / Mobile / Design / Animation / Motion Graphics / Game Development and Sound
        </div>
        <div className='skills'>
          <h2>
            SKILLS:
          </h2>
          <p>
            Object-oriented JavaScript (including ES6), CoffeeScript, Ruby and ActionScript 3; Ruby on Rails and Node.js; React.js, Backbone.js, Webpack and Browserify; Test-driven Development via Mocha, Jasmine and RSpec; Gulp, Grunt and Rake; Haml, Handlebars, Sass and Stylus; Static site builders such as Middleman; native iOS development via RubyMotion; GIT and SVN; and much more.
          </p>
          <p>
            Experience with: Objective-C, Unity3D, Lua, Audio composition using Ableton Live and Physical Computing concepts via personal experimentation with Ardurino / OpenFrameworks.
          </p>
        </div>

        <br />
      </div>
    )
  }
}
