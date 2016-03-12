<template>

<div class="top-nav">

<div class="container">
<img class="logo" src="./assets/logo.png" />
</div>
</div>

  <div id="app">
    <div class="chat-box">
    <p>Hello, %% patient_name %%<p>
    </div>

<div>
<form action="/send" method="post">
  <div>
    <textarea name="message" class="textarea-box"  min-height: 50%"></textarea>
  </div>
  <input type="submit" class="button" value="Send">
  <input type="hidden" name="phone_number" value="%% phone_number %%">
</form>
</div>
  </div>


</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}
</script>

<style>
html {
  height: 100%;
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
  max-width: 600px;
  display: inline-box;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 100px  auto 0 auto;
  max-width: 480px;
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
}

.button:hover{
  color: #c8362e;
  background: #fff;
  border: 1px solid #c8362e;
}

.textarea-box{
  width: 100%;
  height: 224px;
  
}

.chat-box{

background: #fff;
padding: 1em 1em;
margin: 1em 0;

  
}
</style>
