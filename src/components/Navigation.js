import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href='#hello how are you'>
              θ
            </a>
          </li>
          <li>
            <a className='selected' href='#projects'>
              Projects
            </a>
          </li>
          <li>
            <a href='#resume'>
              Resume
            </a>
          </li>
          <li>
            <a href='https://github.com/damassi' target='_blank'>
              Github
            </a>
          </li>
          <li>
            <a href='http://www.iiiiiiiiii.co/selectedwork' target='_blank'>
              miscellaneous
            </a>
          </li>
          <li>
            <a href='https://twitter.com/damassi' target='_blank'>
              Twitter
            </a>
          </li>
        </ul>

        <br />
        <br />
      </nav>
    )
  }
}
