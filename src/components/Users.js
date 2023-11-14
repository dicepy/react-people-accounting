import React, { Component } from 'react'
import classes from '../css/Users.module.css'
import User from './User'

export class Users extends Component {
    
  render() {
    if (this.props.users.length > 0)
    return (
      <div className={classes.wrapper}>
        {this.props.users.map((el)=>(
        <User onEdit={this.props.onEdit} key={el.id} user={el} onDelete={this.props.onDelete}
        />))}
      </div>
    )
    return (<div className={classes.user}>
        <h3 className={classes.noUsers}>
            Пользователей нет
        </h3>
    </div>)
  }
}

export default Users