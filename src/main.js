import Vue from 'vue'
import App from './App'
import Members from './Members'
/* eslint-disable no-new */
new Vue({
    el: 'body',
    components: { App, Members },
    data: {
        page: ''
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
            } else {
                this.$set('page', queryString)
            }
        }
    }
})

Vue.transition('fadein', {
    enterClass: 'fadeInUp',
    leaveClass: 'fadeOutDown'
})

