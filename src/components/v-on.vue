<template>
  <div>
    <h1>v-on 事件监听器</h1>
  <hr>
  <div>
    本场比赛得分： {{count}}<br/>
    <button v-on:click="jiafen">加分</button>
    <button v-on:click="jianfen">减分</button>
    <!-- v-on 就是监听事件，可以用v-on指令监听DOM事件来触发一些javascript代码。-->
    <br/>
    键盘输入： {{secondCount}}<br/>
    <input type="text" v-on:keyup.enter="onEnter" v-model="secondCount">
  </div>
  </div>
</template>

<script>
    export default {
        name: "v-on",
      data(){
          return {count:1,
          secondCount:1
          }
      },
      methods:{
          jiafen:function () {
            this.count++;
          },
        jianfen:function () {
          this.count--;
        },
        onEnter:function () {
          this.count=this.count+parseInt(this.secondCount);
        }
      }
    }
</script>

<style scoped>

</style>
