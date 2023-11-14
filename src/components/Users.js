import React, { Component } from 'react'
import classes from '../css/Users.module.css'
import User from './User'

export class Users extends Component {
    constructor(props){
        super(props)
        this.state = {
            users : [
                {
                    id: 1,
                    firstname: 'Jake',
                    lastname: 'Smith',
                    bio: 'Some bio about Jake',
                    age: 20,
                    isHappy: true
                },
                {
                    id: 2,
                    firstname: 'John',
                    lastname: 'Blacksmith',
                    bio: 'Some bio about John',
                    age: 30,
                    isHappy: false
                },
        
            ]
        }
    }
  render() {
    if (this.state.users.length > 0)
    return (
      <div className={classes.wrapper}>
        {this.state.users.map((el)=>(<User key={el.id} user={el}/>))}
      </div>
    )
    return (<div className={classes.user}>
        <h3>
            Пользователей нет
        </h3>
    </div>)
  }
}

export default Users