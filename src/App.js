import React, { Component } from 'react'
import Header from './components/Header';
import Users from './components/Users';

export class App extends Component {
  render() {
    return (
      <div>
        <Header title="Список пользователей"/> 
        <main>
            <Users/>
        </main>
        <aside>
            
        </aside>
      </div>
    )
  }
}

export default App