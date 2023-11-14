import React, { Component } from 'react'
import classes from '../css/User.module.css'
import {IoCloseCircleSharp,  IoHammerSharp} from 'react-icons/io5'
import AddUser from './AddUser'


export class User extends Component {
    constructor (props) {
        super(props)
        this.state = {
            editForm: false
        }
    }
    user = this.props.user
    render() {
        return (
            <div className={classes.user} >
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className={classes.icon}/>
                <IoHammerSharp onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }} className={classes.icon}/>
                <h3 className={classes.info}>
                    {this.user.firstname} {this.user.lastname}</h3>
                <p className={classes.bio}>
                    {this.user.bio}</p>
                <b className={classes.bio}>
                    {this.user.isHappy ? "Счастлив" : "Не особо"} </b>
                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit}/>}
            </div>
        )
    }
}

export default User