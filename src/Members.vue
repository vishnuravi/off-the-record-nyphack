<template>
    <div class="top-nav">
        <div class="container">
            <h1> Welcome, Dr. Sarabu</h1>
            <img class="logo animated" src="./assets/logo.png" transition="fadein"/>
        </div>
    </div>
    <div id="members">
        <div class="main-container" >
          <h2> You have {{numOfMessages === '' ? '0' : numOfMessages }} New Message</h2>


            <div  v-for="user in messages" class="animated profile-box" id="result" transition="fadein">

            <div class="profile_img"><img class="pro" src="./assets/stud.png"/></div>
                <p>From: {{user.phone_number}}.<p>
                <p>Message: {{user.message}}.<p>
            </div>

        </div>

<!--             <div class="animated profile-box" transition="fadein">


            <div class="profile_img"><img class="pro" src="./assets/stud.png"/></div>
                <p>You have one new message from, Vishnu.<p>
            </div>
 -->


<!--             <div  v-for="user in messages" class="animated profile-box" id="result" transition="fadein">

            <div class="profile_img"><img class="pro" v-bind:src="profile['results'][0]['user']['picture']['medium']"/></div>
                <p>From: {{user.phone_number}}.<p>
                <p>Message: {{user.message}}.<p>
            </div>

        </div> -->

</div>


         </div>
  </template>
<script>
// import Thanks from './components/Thanks'

import $ from 'jquery';
$('body').addClass('baba')

$.get('http://otr.vishnu.io:5000/messages&callback=?', function(data) {
  $('#result').html(data)
  console.log(data)
});

export default {
  name: 'Members',

  data () {
    return {
      messages: [{"phone_number": "+19085812326", "message": "Hi Doctor Ravi "}, {"phone_number": "+19085812326", "message": "Hello dr I need dick cream"}, {"phone_number": "+19085812326", "message": "I do too much drugs"}, {"phone_number": null, "message": null}],
      numOfMessages: '',
      profile: ''
    }
  },

  ready () {
    this.getProfileImage()
    this.getMembers()
  },

    methods: {

     getMembers() {
        this.$http.jsonp('http://otr.vishnu.io/messages.php').then(function (response) {
        var msg = response.data
        console.log(response.data)
        this.$set('messages', msg)
        console.log(msg)
        }, {'jsonp': 'callback'})
    },
    getProfileImage() {
        this.$http.get('https://randomuser.me/api/').then(function (response) {
        var profile = response.data
        this.$set('profile', profile)
        var prof = this.messages.length
        this.$set('numOfMessages', prof)
      })
    }

  }
}

</script>







<style>
html {
  height: 100%;
}

*{
  box-sizing: border-box; 
}
h1{
  color: #fff;
  display: inline-block;
  font-size: 1.5em;
  
}
.profile_img{

}

 img.pro{
    border-radius: 66px;
    height:70px;
    display: inline-block;
    width: 70px;
    float: left;
    box-sizing: border-box;
    padding: .5em;
    margin-right: 1em
}



.container{
  max-width: 600px;
  margin: 0 auto;
  width: 95%;
  padding: 0 1em;
}

.main-container{
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1em;
}

.top-nav{
  background: #c8362e;
  height: 100px;
  width: 100%;
  top: 0;
  display: inline-block;

}

body {
box-sizing: border-box;
margin: 0;
font-family:  "Josefin Sans", Century Gothic,CenturyGothic,AppleGothic,sans-serif; 
background: #CFCFCF;
font-size: 16px;
}

#members {
  display: inline-box;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 2em  auto 0 auto;
}

.logo {
  width: 25%;
  float: right;
  display: block;

}

.button{
  text-align: center;
  right: 50%;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: #fff;
  background: #c8362e;
  padding: 0 25px;
  line-height: 48px;
  border: none;
  cursor: pointer;
  float: right;
  max-width: 20%;
  border: 1px solid #c8362e;

}

.button:hover{
  color: #c8362e;
  background: #fff;
  border: 1px solid #c8362e;
  padding: 0 23px;


}

.textarea-box{
  height: 51px;
  float: left;
  width: 79%;
  font-size: 16px;
  font-family:  "Josefin Sans", Century Gothic,CenturyGothic,AppleGothic,sans-serif; 
}

.profile-box{
  background: #fff;
  padding: 1em 1em;
  margin: 2em auto;
  max-width: 480px;
  width: 95%;
  max-width: 600px;
  display: block;
  height: 100px;
}




.user-message{
  display: inline-block;
  width: 100%;
  bottom: 0;
  position: absolute;
  margin: 0 auto;
  background: #fff;
  padding: .5em .5em;
}

.user-container{
  margin: 0 auto;
  max-width: 600px;
}
</style>
