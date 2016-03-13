import Vue from 'vue'
import App from './App'
import Members from './Members'
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App, Members },
  data: {
	members: false
	}
})

Vue.transition('fadein', {
  enterClass: 'fadeInUp',
  leaveClass: 'fadeOutDown'
})

