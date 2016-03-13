<template>
    <div class="top-nav">
        <div class="container">
            <h1> Welcome, Dr. Suiss</h1>
            <img class="logo animated" src="./assets/logo.png" transition="fadein"/>
        </div>
    </div>
    <div id="members">
        <div class="main-container">
          <h2> You have {{numOfMessages === '' ? '0' : numOfMessages }} New Messages</h2>
            <div class="animated profile-box" transition="fadein">

              <div class="profile_img"><img /></div>
                <p>Hello, {{patient_name}} %% patient_name %%<p>
            </div>

        </div>
         </div>



  </template>
<script>
// import Thanks from './components/Thanks'

export default {
  name: 'Members',

  data () {
    return {
      members: '',
      numOfMessages: '',
    }
  },

  ready () {
    this.getProfileImage()
    this.getMembers()
  },

    method: {

    getMembers: function () {
        this.$http.get('/members', function (data) {
        this.$set('members', data)
        console.log(data)
        this.$set('numOfMessages', data[Object.keys(data)[0]].length)
    })
    },

    getProfileImage: function () {
        this.$http.jsonp('https://randomuser.me/api/').then(function (response) {
        var profile = response.data
        this.$set('profile-image', profile)
        console.log(profile)
        this.$set('numOfMessages', profile[Object.keys(profile)[0]].length)
      }, {
     'jsonp': 'callback'
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
    border-radius: 66px;
    background: #696969;
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
