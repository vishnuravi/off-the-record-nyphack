<template>
    <div class="top-nav">
        <div class="container">
            
            <img class="logo2 animated" src="./assets/l2.png" transition="fadein"/>
            <img class="logo animated" src="./assets/logo.png" transition="fadein"/>
        </div>
    </div>
    <div id="app">
        <div>
            <div class="animated chat-box" transition="fadein">
                <p>Hello, <span>Vishnu, is there anything you'd like to discuss privately with Dr. Sarabu today?</span>
                    <p>
                      <p>Feel Free to write anything, these messages disappear after your doctor sees them.<p>
            </div>
          <div class="animated chat-box" transition="fadein">
                <p>You can ask about topics such as sex, birth controll, drink, drugs or gender questions.</p>
            </div>

        </div>
                <div class="user-message">
                  <div class="user-container" v-if="!thanks">
                      <form  action="http://otr.vishnu.io:5000/send" method="post">
                        <div>
                            <textarea v-model="message" name="message" class="textarea-box"></textarea>
                        </div>
                        <input @click="thanks = !thanks" type="submit" class="button" value="Send">
                        <input type="hidden" name="phone_number" value="+19085812326">
                      </form>
                     
                      </div>
                </div>
            <div v-if="thanks" class="animated" transition="fadein">
              <div class="chat-box-reply">
                <p>{{message}}<p>
              </div>
            </div>

          <div v-if="thanks"  class="animated chat-box" transition="fadein">
            <p>Thanks Vishnu. The Doctor will address this on your next visit. Enjoy your day!
            <p>
          </div>
         </div>



  </template>
<script>
// import Thanks from './components/Thanks'

export default {
  name: 'App',

  data () {
    return {
      message: '',
      patient_name: 'Sharon',
      thanks: false,
      userInfo: []
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

.container{
  max-width: 480px;
  margin: 0 auto;
}

.top-nav{
  background: #e52625 !important;
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

#app {
  display: inline-box;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 25px  auto 0 auto;
}

.logo {
  width: 100px;
  height: 100px;
  float: right;
}

.logo2 {
  width: 75%;
  height: 80px;
  float: left;
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

.chat-box, .chat-box-reply{
  background: #fff;
  padding: .2em 1em;
  margin: 2em auto;
  max-width: 480px;
  width: 95%;
  max-width: 600px;
}

.chat-box:after{
    width: 0px;
    height: 0px;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #fff;
    margin-left: 0;
    width: 0;
    content: " ";
    font-size: 0;
    line-height: 0;
    height: 0;
    padding-top: 3em;
    position: relative;
    top: 20px;
    bottom: -57px;
}

.chat-box-reply:after{
    width: 0px;
    height: 0px;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #fff;
    margin-left: 82%;
    width: 0;
    content: " ";
    font-size: 0;
    line-height: 0;
    height: 0;
    padding-top: 3em;
    position: relative;
    top: 20px;
    bottom: -57px;


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
