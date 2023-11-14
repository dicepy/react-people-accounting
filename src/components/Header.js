import React, { Component } from 'react'
import classes from '../css/Header.module.css'

export class Header extends Component {
  render() {
    return (
      <header className={classes.header}>
        {this.props.title}
      </header>
    )
  }
}

export default Header