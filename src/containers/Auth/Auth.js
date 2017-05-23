import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import './Auth.css'

@inject('smoochStore')
@inject('authStore')
@observer
class Auth extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="password" placeholder="password" />
          <button
            type="submit"
            onClick={e => this.props.authStore._toggleIsAuthenticated(e)}
          >
            Login
          </button>
        </form>
        <button
          type="submit"
          onClick={e => this.props.smoochStore._alertSmooch(e)}
        >
          Hint
        </button>
      </div>
    )
  }
}

export default Auth
