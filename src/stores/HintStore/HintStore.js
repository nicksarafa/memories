import { action, observable } from 'mobx'

class HintStore {
  isHintVisible = false

  @action _toggleHint() {
    this.isHintVisible = !this.isHintVisible
  }

  @action _alertHint(e) {
    e.preventDefault()
    window.alert('💋')
  }
}

export { HintStore }
