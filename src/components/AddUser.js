import React, { Component } from 'react'
import classes from '../css/AddUser.module.css'

export class AddUser extends Component {
    userAdd = {}
    constructor(props){
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            age: 1,
            isHappy: false
        }
    }
  render() {
    return (
      <form ref={(el) => this.MyForm = el} className={classes.form}>
        <input className={classes.form_el} 
        placeholder='Имя' 
        onChange={(e)=>this.setState({first_name:e.target.value})}
        />
        <input className={classes.form_el}
         placeholder='Фамилия'
         onChange={(e)=>this.setState({last_name:e.target.value})}
        />
        <textarea className={classes.form_el}
        placeholder='Биография'
        onChange={(e)=>this.setState({email:e.target.value})}
        />
        <input className={classes.form_el}
        placeholder='Возраст'
        onChange={(e)=>this.setState({age:e.target.value})}
        />
        <div className={classes.container}>
        <label className={classes.form_el} htmlFor='isHappy'>Счастлив?</label>
        <input className={classes.form_el + " " + classes.check}
         type='checkbox' 
         id='isHappy'
         onChange={(e)=>this.setState({isHappy:e.target.checked})}
         />
        </div>
        
        <button className={classes.form_el + " " + classes.btn} 
        type='button'
        onClick={()=>{
            this.MyForm.reset()
            this.userAdd = {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                age: this.state.age,
                isHappy: this.state.isHappy,
            }
            if (this.props.user){
                this.userAdd.id = this.props.user.id
            }
            this.props.onAdd(this.userAdd)
        }}
        >Добавить</button>
      </form>
    )
  }
}

export default AddUser