<template>
<div>
  <img v-bind:src="imgSrc" width="200px"><br>
  <a :href="url">百度(缩写v-bind)</a>
  <h1>绑定CSS样式</h1>
  <div :class="className">1. 绑定classA</div>
  <div :class="{classA:isOk}">2. 绑定class中的判断</div>
  <div :class="[classA,classB]">3. 绑定class中的数组</div>
  <div :class="isOk?classA:classB">4. 绑定class中的三元表达式判断</div>
  <div :style="{color:red, fontSize:font}">5. 绑定style</div>
  <div :style="styleObject">6. 用对象绑定style样式</div>
</div>
  <!-- v-bind是处理HTML中的标签属性的，绑定其值 -->
</template>

<script>
    export default {
        name: "v-bind",
      data(){
          return {imgSrc:'../assets/logo.png',
            className:'classA',
            isOk:true,
            classA:'classA',
            classB:'classB',
            red:'red',
            font:'20px',
          url:'http://www.baidu.com',
          styleObject:{
            fontSize:'24px',
            color:'green'
          }
          }
      }
    }
</script>

<style scoped>

</style>
