import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Auth, Memory } from '../.'
import './App.css'

@inject('authStore')
@observer
class App extends Component {
  render() {
    return (
      <div>
        {this.props.authStore.isAuthenticated ? <Memory /> : <Auth />}
      </div>
    )
  }
}

export default App
