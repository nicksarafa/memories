import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import './Auth.css'

@inject('hintStore')
@inject('authStore')
@observer
class Auth extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="password" placeholder="password" />
          <button type="submit">Login</button>
        </form>
        <button type="submit" onClick={(e) => this.props.hintStore._alertHint(e)}>Hint</button>
      </div>
    )
  }
}

export default Auth
