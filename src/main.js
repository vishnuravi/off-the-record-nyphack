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
        profileOfUser: ''
    },

    ready: function () {
        this.getPage()
        this.getProfileImage()
    },

    methods: {
        getPage: function () {
            var queryString = window.location.search
            queryString = queryString.substring(1)
            if (!queryString) {
                this.$set('page', '')
            } else {
                this.$set('page', queryString)
            }
        }
    },

      getProfileImage: function () {
        this.$http.jsonp('https://randomuser.me/api/').then(function (response) {
        var profile = response.data
        this.$set('profileOfUser', profile)
        console.log(profile)
        this.$set('numOfMessages', profile[Object.keys(profile)[0]].length)
      }, {'jsonp': 'callback'})
    }
})

Vue.transition('fadein', {
    enterClass: 'fadeInUp',
    leaveClass: 'fadeOutDown'
})

