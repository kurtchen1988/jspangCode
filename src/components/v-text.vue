<template>
<div>
  <h1>v-text & v-html 案例</h1>
  <hr>
  <span>{{message}}</span> = <span v-text="message"></span><br/>
  <span v-html="msgHtml"></span>
  <!--如果在javascript中写有html标签，用v-text是输出不出来的，这时候我们就需要用v-html标签了。-->
</div>
</template>

<script>
    export default {
        name: "v-text",
      data(){
          return {
            message:'hello Vue!',
            msgHtml:'<h2>hello Vue!</h2>'
          }
      }
    }
</script>

<style scoped>

</style>
