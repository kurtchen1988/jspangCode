<template>
<div>
  <p>原始文本信息： {{message}}</p>
  <h3>文本框</h3>
  <p>v-model: <input type="text" v-model="message"></p>
  <textarea cols="30" rows="10" v-model="message"></textarea><br>
  <h3>多选按钮绑定一个值</h3>
  <input type="checkbox" id="isTrue" v-model="isTrue">
  <label for="isTrue">{{isTrue}}</label>
  <h3>多选绑定一个数组</h3>

    <input type="checkbox" id="JSPang" value="JSPang" v-model="web_Names">
    <label for="JSpang">JSPang</label><br>
    <input type="checkbox" id="Panda" value="Panda" v-model="web_Names">
    <label for="JSPang">Panda</label><br>
    <input type="checkbox" id="PanPan" value="PanPan" v-model="web_Names">
    <label for="JSPang">PanPan</label>
    <p>{{web_Names}}</p>

  <h3>单选按钮绑定</h3>
  <input type="radio" id="one" value="男" v-model="sex">
  <label for="one">男</label>
  <input type="radio" id="two" value="女" v-model="sex">
  <label for="one">女</label>
  <p>{{sex}}</p>
  <!--v-model指令，我理解为绑定数据源。就是把数据绑定在特定的表单元素上，可以很容易的实现双向数据绑定。-->
  <!-- 修饰符
      .lazy：取代 imput 监听 change 事件。
      .number：输入字符串转为数字。
      .trim：输入去掉首尾空格。-->
</div>
</template>

<script>
    export default {
        name: "v-model",
      data(){
          return {message:'hello Vue!',
          isTrue:true,
          web_Names:[],
          sex:''}
      }
    }
</script>

<style scoped>

</style>
