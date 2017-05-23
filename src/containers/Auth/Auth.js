import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import './Auth.css'

@inject('passwordStore')
@inject('smoochStore')
@inject('authStore')
@observer
class Auth extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="password"
            placeholder="password"
            onChange={e =>
              this.props.passwordStore._handlePasswordChange(e.target.value)}
            value={this.props.passwordStore.passwordValue}
          />
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
