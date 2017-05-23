import React, { Component } from 'react'
import './Auth.css'

class Auth extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="password" placeholder="password" />
          <button type="submit">Login</button>
        </form>
        <button type="submit" onClick={() => window.alert('💋')}>Hint</button>
      </div>
    )
  }
}

export default Auth
