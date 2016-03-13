import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

Vue.transition('fadein', {
  enterClass: 'fadeInUp',
  leaveClass: 'fadeOutDown'
})

Vue.component('thanks', {
  // declare the props
  props: ['message']
  // the prop can be used inside templates, and will also
  // be set as `this.message`
})
