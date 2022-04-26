import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div>
          <ul>
              <li><NavLink className={({isActive}) => isActive ? 'active' : 'blue'} to='/' >Home</NavLink></li>
              <li><NavLink className={({isActive}) => isActive ? 'active' : 'blue'} to='/About'>About</NavLink></li>
              <li><NavLink className={({isActive}) => isActive ? 'active' : 'blue'} to='/Users'>Users</NavLink></li>
          </ul>
      </div>
    )
  }
}
