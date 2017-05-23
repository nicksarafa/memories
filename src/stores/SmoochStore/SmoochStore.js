import { action, observable } from 'mobx'

class SmoochStore {
  @observable isSmoochVisible = false

  @action _toggleSmooch() {
    this.isSmoochVisible = !this.isSmoochVisible
  }

  @action _alertSmooch(e) {
    e.preventDefault()
    window.alert('💋')
  }
}

export { SmoochStore }
