<template>
  <div>
<div v-pre>{{message}}</div>
  <!-- v-pre指令:在模板中跳过vue的编译，直接输出原始值。就是在标签中加入v-pre就不会输出vue中的data值了。-->

<div v-cloak>
  {{message}}
</div>
    <!-- v-cloak指令:在vue渲染完指定的整个DOM后才进行显示。它必须和CSS样式一起使用-->

    <div v-once>第一次绑定的值：{{message}}</div>
    <div><input type="text" v-model="message"></div>
    <!-- v-once指令:在第一次DOM时进行渲染，渲染完成后视为静态内容，跳出以后的渲染过程。-->
  </div>
</template>

<script>
    export default {
        name: "v-pre",
      data(){
          return {
            message:'vue learning',
          }
      }
    }
</script>

<style scoped>
[v-cloak]{
  display: none;
}
</style>
