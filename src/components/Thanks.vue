<template>

  <div v-if="message" class="chat-box-reply" >
      <p>{{message}}
          <p>
  </div>

  <div class="thanks">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Okay, Thanks!',
      message: ''
    }
  },
  ready () {
    this.$set('message', this.props.message)
  }
}
</script>


<style>

h1{
  margin: 0 auto;
  width: 600px;
}

.thanks{
  width: 95%
}

.chat-box, .chat-box-reply{
  background: #fff;
  padding: 1em 1em;
  margin: 4em auto;
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
    top: 30px;
    bottom: -57px;
}


</style>
