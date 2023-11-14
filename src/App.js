import React, { Component } from 'react'
import Header from './components/Header';
import Users from './components/Users';
import AddUser from './components/AddUser';

export class App extends Component {
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
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
}
  render() {
    return (
      <div>
        <Header title="Список пользователей"/> 
        <div className='wrapper'>
        <main>
            <Users users={this.state.users} onDelete={this.deleteUser}
            onEdit={this.editUser}
            />
        </main>
        <aside>
            <AddUser onAdd={this.addUser} />
        </aside>
        </div>
      </div>
    )
  }
  deleteUser(id){
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
  }

  editUser(user){
    let allUsers = this.state.users
    allUsers[user.id - 1] = user

    this.setState({
      users: []
    }, () => {
      this.setState({users: [...allUsers]})
    }
    )
  }

  addUser(user){
    const id = this.state.users.length + 1
    this.setState({
      users:[...this.state.users, {id,...user}]
    })
  }
}

export default App