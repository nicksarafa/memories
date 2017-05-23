/**
 * @todo censor tracked passwordValue
 */
import { action, observable } from 'mobx'

class PasswordStore {
  @observable passwordValue = ''

  constructor() {
    this.correctPassword = process.env.REACT_APP_CORRECT_PASSWORD
  }

  @action _handlePasswordChange(password) {
    this.passwordValue = password
    console.log('password', password)

    if (password === this.correctPassword) {
      console.log('correct', password)
      console.log('correctPassword', this.correctPassword)
    }
  }

  /**
   * @action _hasCorrectPassword() {}
   * @action _isPasswordValid() {}
   * @private
   */
}

export { PasswordStore }
