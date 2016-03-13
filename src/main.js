import Vue from 'vue'
Vue.use(require('vue-resource'))
import App from './App'
import Members from './Members'

/* eslint-disable no-new */
new Vue({
    el: 'body',
    components: { App, Members },
    data: {
        page: '',
        profileOfUser: '',
        userInfo: []
    },

    ready: function () {
        this.getPage()
    },

    methods: {
        getPage: function () {
            var queryString = window.location.search
            queryString = queryString.substring(1)
            if (!queryString) {
                this.$set('page', '')
            } else if (queryString === 'members') {
                this.$set('page', queryString)
            } else {
				var arr = queryString.split('&')
				this.$set('userInfo', arr)
            }
        }
    }

      // getProfileImage: function () {
      // if (this.profileOfUser === '') {
      //     this.$http.jsonp('https://randomuser.me/api/').then(function (response) {
      //         var profile = response.data
      //         this.$set('profileOfUser', profile)
      //         console.log(profile)
      //     }, { 'jsonp': 'callback' })
      // }
})

Vue.transition('fadein', {
    enterClass: 'pulse',
    leaveClass: 'fadeOut'
})

