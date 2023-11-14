import React, { Component } from 'react'
import classes from '../css/User.module.css'
import {IoCloseCircleSharp,  IoHammerSharp} from 'react-icons/io5'


export class User extends Component {
    user = this.props.user
  render() {
    return (
        <div className={classes.user} >
            <IoCloseCircleSharp className={classes.icon}/>
            <IoHammerSharp className={classes.icon}/>
            <h3 className={classes.info}>
                {this.user.firstname} {this.user.lastname}</h3>
            <p className={classes.bio}>
                {this.user.bio}</p>
            <b className={classes.bio}>
                {this.user.isHappy ? "Счастлив" : "Не особо"} </b>
        </div>
    )
  }
}

export default User