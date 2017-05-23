/**
 * @todo censor tracked passwordValue
 */
import { action, observable } from 'mobx'

class PasswordStore {
  @observable passwordValue = ''

  constructor() {
    this.correctPassword = process.env.REACT_APP_CORRECT_PASSWORD
    this.altCorrectPassword = process.env.REACT_APP_ALT_CORRECT_PASSWORD
    this.testCorrectPassword = process.env.REACT_APP_TEST_CORRECT_PASSWORD
  }

  @action _handlePasswordChange(password) {
    this.passwordValue = password

    if (
      process.env.NODE_ENV === 'production' &&
      (password === this.correctPassword ||
        password === this.altCorrectPassword)
    ) {
      console.log('correct prod', password)
    }

    if (
      (process.env.NODE_ENV === 'development' ||
        process.env.NODE_ENV === 'test') &&
      password === this.testCorrectPassword
    ) {
      console.log('correct test or dev password', password)
    }
  }

  /**
   * @action _hasCorrectPassword() {}
   * @action _isPasswordValid() {}
   * @private
   */
}

export { PasswordStore }
