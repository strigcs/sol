import React, { Component } from 'react'
import './home.css'

export default class Home extends Component {
  render() {
    return (
      <body>
      <div>
        <h1 className="h">Home</h1>
        <a  href="http://localhost:3000/lottery">
          <button class="butt">start</button>
        </a>
      </div>
      </body>
    )
  }
}
