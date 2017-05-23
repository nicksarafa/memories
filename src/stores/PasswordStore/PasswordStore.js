/**
 * @todo censor tracked passwordValue
 */
import { action, observable } from 'mobx'

class PasswordStore {
  @observable passwordValue = ''

  @action _handlePasswordChange(password) {
    this.passwordValue = password
    console.log('password', password)
  }

  /**
   * @action _hasCorrectPassword() {}
   * @action _isPasswordValid() {}
   * @private
   */
}

export { PasswordStore }
