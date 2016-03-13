<template>

<div class="top-nav">

<div class="container">
<img class="logo" src="./assets/logo.png" />
</div>
</div>

  <div id="app">
    <div class="chat-box">
    <p>Hello, {{patient_name}} %% patient_name %%<p>
    </div>

    <div v-show="message" class="chat-box">
    <p >{{message}}<p>
    </div>

<div>
<form class="user-message" action="/send" method="post">
  <div>
    <textarea v-model="message" name="message" class="textarea-box" ></textarea>
  </div>

  <input type="submit" class="button" value="Send">
  <input  type="hidden" name="phone_number" value="%% phone_number %%">
</form>
</div>
  </div>


</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'App',
  components: {
    Hello
  },

  data () {
    return {
      message: '',
      patient_name: 'Sharon'
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
}

#app {
  display: inline-box;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 100px  auto 0 auto;
}

.logo {
  width: 100px;
  height: 100px;
  float: right;
}

.button{
  text-align: center;
  right: 50%;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: #fff;
  background: #c8362e;
  padding: 0 25px;
  line-height: 56px;
  border: none;
  cursor: pointer;
  float: right;
  max-width: 20%;
}

.button:hover{
  color: #c8362e;
  background: #fff;
  border: 1px solid #c8362e;
}

.textarea-box{
  height: 51px;
  float: left;
  width: 79%;
}

.chat-box{
  background: #fff;
  padding: 1em 1em;
  margin: 4em auto;
  max-width: 480px;
  width: 100%;
  max-width: 600px;
}

.chat-box:after{
    width: 0px;
    height: 0px;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #fff;
    left: 48%;
    top: 31%;
    margin-left: -230px;
    width: 0;
    content: " ";
    font-size: 0;
    line-height: 0;
    height: 0;
    padding-top: 3em;
    position: absolute;

}

.user-message{
  display: inline-block;
  width: 100%;
  bottom: 0;
  position: absolute;
  max-width: 600px;
  margin: 0 auto;


}
</style>
