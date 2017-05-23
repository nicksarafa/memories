import { action, observable, useStrict } from 'mobx'

useStrict(true)

class AuthStore {
  @observable isAuthenticated = false

  @action _toggleIsAuthenticated() {
    this.isAuthenticated = !this.isAuthenticated
  }
}

export { AuthStore }
